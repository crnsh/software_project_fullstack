
import requests
import os
import json
from pymongo import MongoClient
import pymongo

# To set your enviornment variables in your terminal run the following line:
# export 'BEARER_TOKEN'='<your_bearer_token>'
bearer_token = "AAAAAAAAAAAAAAAAAAAAAH0FdAEAAAAAuGuk9z0nZvDIWwSUAQlBqWoi75s%3DHIB7ShfQ0ZpMIPwGFLQNzzC2NvwMqnSlllYzzd6xJnh2IuOryD"



def bearer_oauth(r):
    """
    Method required by bearer token authentication.
    """

    r.headers["Authorization"] = f"Bearer {bearer_token}"
    r.headers["User-Agent"] = "v2FilteredStreamPython"
    return r


def get_rules():
    response = requests.get(
        "https://api.twitter.com/2/tweets/search/stream/rules", auth=bearer_oauth
    )
    if response.status_code != 200:
        raise Exception(
            "Cannot get rules (HTTP {}): {}".format(response.status_code, response.text)
        )
    print(json.dumps(response.json()))
    return response.json()


def delete_all_rules(rules):
    if rules is None or "data" not in rules:
        return None

    ids = list(map(lambda rule: rule["id"], rules["data"]))
    payload = {"delete": {"ids": ids}}
    response = requests.post(
        "https://api.twitter.com/2/tweets/search/stream/rules",
        auth=bearer_oauth,
        json=payload
    )
    if response.status_code != 200:
        raise Exception(
            "Cannot delete rules (HTTP {}): {}".format(
                response.status_code, response.text
            )
        )
    print(json.dumps(response.json()))

def set_rules(delete):
    # You can adjust the rules if needed
    sample_rules = [
        {"value": "has:geo", "tag": "nft"},
    ]
    payload = {"add": sample_rules}
    response = requests.post(
        "https://api.twitter.com/2/tweets/search/stream/rules",
        auth=bearer_oauth,
        json=payload,
    )
    if response.status_code != 201:
        raise Exception(
            "Cannot add rules (HTTP {}): {}".format(response.status_code, response.text)
        )
    print(json.dumps(response.json()))

def get_database():

    CONNECTION_STRING = "mongodb+srv://karan:123@cluster0.ymyhm.mongodb.net/?retryWrites=true&w=majority"

    client = MongoClient(CONNECTION_STRING)

    return client['mined_data']

def get_stream(set, db):
    params = {
        'tweet.fields': 'id,text,author_id,in_reply_to_user_id,geo,conversation_id,created_at,lang,public_metrics,referenced_tweets,reply_settings,source',
        'user.fields': 'id,name,username,created_at,description,public_metrics,verified',
        'place.fields': 'full_name,id,country,country_code,geo,place_type',
    }
    response = requests.get(
        "https://api.twitter.com/2/tweets/search/stream", params=params,auth=bearer_oauth, stream=True,
    )
    print(response.status_code)
    if response.status_code != 200:
        raise Exception(
            "Cannot get stream (HTTP {}): {}".format(
                response.status_code, response.text
            )
        )
    for response_line in response.iter_lines():
        if response_line:
            json_response = json.loads(response_line)
            with open("output.txt", "w") as f:
                f.write(json.dumps(json_response, indent=4))
            db['nft'].insert_one(json_response)
            

def main():
    dbname = get_database()
    rules = get_rules()
    delete = delete_all_rules(rules)
    print("This is delete", delete)
    set = set_rules(delete)
    get_stream(set, dbname)


if __name__ == "__main__":
    main()
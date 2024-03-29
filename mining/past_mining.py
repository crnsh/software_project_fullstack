# For sending GET requests from the API
import requests
# For saving access tokens and for file management when creating and adding to the dataset
import os
# For dealing with json responses we receive from the API
import json
# For displaying the data after
import pandas as pd
# For saving the response data in CSV format
import csv
# For parsing the dates received from twitter in readable formats
import datetime
import dateutil.parser
import unicodedata
#To add wait time between requests
import time
from pymongo import MongoClient
import pymongo

def auth():
    return os.getenv('TOKEN')

def create_headers(bearer_token):
    headers = {"Authorization" : "Bearer {}".format(bearer_token)}
    return headers

def create_url(keyword, start_date, end_date, max_results = 10):
    
    search_url = "https://api.twitter.com/2/tweets/search/all" #Change to the endpoint you want to collect data from

    #change params based on the endpoint you are using
    query_params = {'query': keyword,
                    'start_time': start_date,
                    'end_time': end_date,
                    'max_results': max_results,
                    'expansions': 'author_id,in_reply_to_user_id,geo.place_id',
                    'tweet.fields': 'id,text,author_id,in_reply_to_user_id,geo,conversation_id,created_at,lang,public_metrics,referenced_tweets,reply_settings,source',
                    'user.fields': 'id,name,username,created_at,description,public_metrics,verified',
                    'place.fields': 'full_name,id,country,country_code,geo,name,place_type',
                    'next_token': {}}
    return (search_url, query_params)

def connect_to_endpoint(url, headers, params, next_token = None):
    params['next_token'] = next_token   #params object received from create_url function
    response = requests.request("GET", url, headers = headers, params = params)
    print("Endpoint Response Code: " + str(response.status_code))
    if response.status_code != 200:
        raise Exception(response.status_code, response.text)
    return response.json()

def get_database():

    CONNECTION_STRING = "mongodb+srv://karan:123@cluster0.ymyhm.mongodb.net/?retryWrites=true&w=majority"

    client = MongoClient(CONNECTION_STRING)

    return client['mined_data']

#============================================================================================================
#============================================================================================================

def main():
    dbname = get_database()
    collection_name = dbname['nft']

    bearer_token = "AAAAAAAAAAAAAAAAAAAAAH0FdAEAAAAAuGuk9z0nZvDIWwSUAQlBqWoi75s%3DHIB7ShfQ0ZpMIPwGFLQNzzC2NvwMqnSlllYzzd6xJnh2IuOryD"
    headers = create_headers(bearer_token)
    keyword = "nft lang:en"
    start_time = "2022-01-01T00:00:00.000Z"
    end_time = "2022-06-14T05:14:59.000Z"
    max_results = 10

    url = create_url(keyword, start_time, end_time, max_results)

    json_response = connect_to_endpoint(url[0], headers, url[1])

    with open("output.txt", "w") as f:
        f.write(json.dumps(json_response['data'], indent=4))

    
    collection_name.insert_many(json_response['data'])

if __name__ == "__main__":
    main()
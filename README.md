# CANDID Software Project Fullstack
### Setup
**You must have NPM version 8+ and NodeJS version 18+ installed**
```
$ git clone https://github.com/karan0handa/software_project_fullstack
$ cd backend/
$ npm install 
$ npm start
```
Open another terminal at `/software_project_fullstack`
```
$ cd frontend/
$ npm install
$ npm start
```
### Routes
1. `/tweets/vis-1/:keyword`
    - This returns an array of documents with `date` and `count` where `count` is the number of tweets which have `keyword` as an entity and `date` is the date those tweets were `created_at`. Basically the tweets are grouped by date.
2. `/tweets/vis-2/:hashtag`
    - This returns an array of documents with `date` and `count` where `count` is the number of tweets which have `hashtag` as an entity and `date` is the date those tweets were `created_at`. Basically the tweets are grouped by date.
3. `/tweets/mining` [WIP]
    - This returns some mined JSON data. More configurations need to be added to make it configurable.
### Example
1. `/tweets/vis-1/Russia` returns the following.
```
[
    {"count":1227,"date":"2022-02-27"},{"count":701,"date":"2022-03-02"},{"count":888,"date":"2022-03-01"},{"count":840,"date":"2022-02-28"},{"count":1929,"date":"2022-02-26"},{"count":1530,"date":"2022-02-25"},{"count":1520,"date":"2022-02-24"}
]
```
2. `/tweets/vis-1/IStandWithPutin` returns the following.
```
[
    {"count":161,"date":"2022-03-02"},{"count":1,"date":"2022-02-27"},{"count":2,"date":"2022-02-26"},{"count":2,"date":"2022-02-25"},{"count":1,"date":"2022-02-24"},{"count":6,"date":"2022-02-28"},{"count":8,"date":"2022-03-01"}
]
```
### Mining scripts
1. The script `past_mining.py` mines tweets following a timeperiod and a search operator (currently NFT)
2. The script `stream_mining.py` mines the current stream of tweets. It searches for tweets matching operators in real-time.

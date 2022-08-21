var express = require('express');
var router = express.Router();
const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://karan0handa:123@cluster0.ymyhm.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

router.get('/', function (req, res, next) {
  res.send("Tweets");
})

/* GET users listing. */
// Find those tweets which contain KEYWORD
router.get('/vis-1/:keyword', function(req, res, next) {
  const keyword = req.params.keyword;
  const database = client.db('mined_data');
  const tweets = database.collection('sample_ukr_json');

  const query = {
    'entities.annotations' : {
      $elemMatch : {
        normalized_text : keyword
      }
    }
  }

  const options = {
    sort : {created_at : 1},
    projection : {_id: 0, created_at: 1}
  };

  const tweetArray = [];

  const cursor = tweets
    .aggregate([
      { 
        $match : query
      },
      { 
        $group : {
          _id: {
              $dateToString: {
                date: {$toDate:"$created_at"},
                format: "%Y-%m-%d",
              }
          },
          count: {
            $sum: 1
          }
        }
      },
      {
        $project: {
          date : "$_id",
          _id : 0,
          count: 1
        }
      },
      {
        $sort: {
          date : 1
        }
      }
    ])
    .forEach(tweet => tweetArray.push(tweet))
    .then(() => {
      res.status(200).json(tweetArray)
    })
    .catch((err) => {
      res.status(500).json({error: err})
    })
});

// Find those tweets which contain HASHTAG
router.get('/vis-2/:hashtag', function (req, res, next) {
  const hashtag = req.params.hashtag;
  const database = client.db('mined_data');
  const tweets = database.collection('sample_ukr_json');

  const query = {
    'entities.hashtags' : {
      $elemMatch : {
        tag : hashtag
      }
    }
  };

  const options = {
    sort : {created_at : 1},
    projection : {_id: 0, created_at: 1}
  };

  const tweetArray = [];

  const cursor = tweets
  .aggregate([
    { 
      $match : query
    },
    { 
      $group : {
        _id: {
            $dateToString: {
              date: {$toDate:"$created_at"},
              format: "%Y-%m-%d",
            }
        },
        count: {
          $sum: 1
        }
      }
    },
    {
      $project: {
        date : "$_id",
        _id : 0,
        count: 1
      }
    },
    {
      $sort: {
        date : 1
      }
    }
  ])
    .forEach(tweet => tweetArray.push(tweet))
    .then(() => {
      res.status(200).json(tweetArray)
    })
    .catch((err) => {
      res.status(500).json({error: err})
    })
});

module.exports = router;

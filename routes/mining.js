var express = require('express');
var router = express.Router();
var needle = require('needle');
const token = process.env.BEARER_TOKEN;
const endpointUrl = 'https://api.twitter.com/2/tweets/search/all'

async function getRequest() {
    // second call

    // These are the parameters for the API request
    // specify Tweet IDs to fetch, and any additional fields that are required
    // by default, only the Tweet ID and text are returned
    const params = {
        'query': 'from:actuallysoham',
        'tweet.fields': 'author_id,created_at',
        'start_time': '2022-01-01T00:00:00.000Z',
        'end_time': '2022-07-01T00:00:00.000Z'
    }

    const res = await needle('get', endpointUrl, params, {
        headers: {
            "User-Agent": "v2FullArchiveJS",
            "authorization": `Bearer ${token}`
        }
    })

    if (res.body) {
        return res.body;
    } else {
        throw new Error('Unsuccessful request');
    }
}

router.get('/', async function (req, res, next) {
    try {
        const response = await getRequest();
        res.send(response)
    } catch (e) {
        res.send({'error' : e})
    }
});

module.exports = router;
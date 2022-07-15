# CANDID Software Project Backend
### Routes
1. `/tweets/vis-1/:keyword`
    - This returns an array of `created_at` for all tweets which have `keyword` as an entity.
2. `/tweets/vis-2/:hashtag`
    - This returns an array of `created_at` for all tweets which have `hashtag` as a hashtag.
### Example
1. `/tweets/vis-1/Russia` returns the following
```
[
{"created_at":"2022-02-24T00:04:48.000Z"},{"created_at":"2022-02-24T00:15:18.000Z"},
{"created_at":"2022-02-24T00:16:41.000Z"},{"created_at":"2022-02-24T00:17:49.000Z"},
{"created_at":"2022-02-24T00:36:14.000Z"},{"created_at":"2022-02-24T00:41:32.000Z"},
{"created_at":"2022-02-24T00:51:52.000Z"},{"created_at":"2022-02-24T00:53:16.000Z"},
{"created_at":"2022-02-24T00:55:21.000Z"},{"created_at":"2022-02-24T01:05:17.000Z"},
{"created_at":"2022-02-24T01:07:42.000Z"},{"created_at":"2022-02-24T01:08:49.000Z"},
{"created_at":"2022-02-24T01:12:36.000Z"},{"created_at":"2022-02-24T01:13:48.000Z"},
{"created_at":"2022-02-24T01:16:06.000Z"},{"created_at":"2022-02-24T01:22:11.000Z"},
{"created_at":"2022-02-24T01:35:21.000Z"},{"created_at":"2022-02-24T01:39:59.000Z"},
{"created_at":"2022-02-24T01:50:43.000Z"},{"created_at":"2022-02-24T01:52:11.000Z"},
{"created_at":"2022-02-24T01:55:13.000Z"},{"created_at":"2022-02-24T01:56:54.000Z"},
{"created_at":"2022-02-24T01:58:50.000Z"},{"created_at":"2022-02-24T02:05:15.000Z"},
{"created_at":"2022-02-24T02:09:58.000Z"},{"created_at":"2022-02-24T02:12:04.000Z"},
{"created_at":"2022-02-24T02:30:04.000Z"},{"created_at":"2022-02-24T02:30:33.000Z"},
{"created_at":"2022-02-24T02:32:06.000Z"},{"created_at":"2022-02-24T02:37:15.000Z"},
{"created_at":"2022-02-24T02:38:10.000Z"}...
]
```

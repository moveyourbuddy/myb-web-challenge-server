# <img height="80" src="docs/images/myb-web-challenge-server-header.png" alt="myb-web-challenge-server" />

> This is the server for the _myb-web-challenge_.
> For more informations about the challenge, see the main project here: [myb-web-challenge](https://github.com/moveyourbuddy/myb-web-challenge).

## Usage

To start the server, simply:

```bash
$ PORT=5000 npm start
Listening on port 5000...
```

## API

### GET /players/:id

Return the profile of a Player

```json
{
  "id": 1,
  "first_name": "Mélissa",
  "last_name": "Le gall",
  "company": "Martin, Fournier and Dumont",
  "city_name": "Andreberg",
  "last_seen": "2018-10-08T12:23:13.687Z",
  "picture": "https://s3.amazonaws.com/uifaces/faces/twitter/rawdiggie/128.jpg",
  "total_events": 93,
  "total_friends": 83
}
```

### GET /players/:id/friends

Return the list of friends of for a Player.

```json
[
  {
    "id": 18508,
    "first_name": "Elisa",
    "last_name": "Caron",
    "company": "Carre, Rolland and Rodriguez",
    "city_name": "West Louisshire",
    "last_seen": "2017-11-14T09:31:52.026Z",
    "picture": "https://s3.amazonaws.com/uifaces/faces/twitter/skkirilov/128.jpg",
    "total_events": 193,
    "total_friends": 25
  },
  {
    "id": 92653,
    "first_name": "Louis",
    "last_name": "Bertrand",
    "company": "Nicolas, Faure and Lemaire",
    "city_name": "Port Ambretown",
    "last_seen": "2018-06-22T11:14:12.862Z",
    "picture": "https://s3.amazonaws.com/uifaces/faces/twitter/taybenlor/128.jpg",
    "total_events": 113,
    "total_friends": 135
  }
]
```

### GET /players/:id/lastEvents

Return the last events a Player has been in.

```json
[
  {
    "id": 18508,
    "name": "molestias natus non",
    "date": "2019-10-24T17:34:03.464Z",
    "participants": [
      {
        "id": 92653,
        "first_name": "Louis",
        "last_name": "Bertrand",
        "company": "Nicolas, Faure and Lemaire",
        "city_name": "Port Ambretown",
        "last_seen": "2018-06-22T11:15:57.051Z",
        "picture": "https://s3.amazonaws.com/uifaces/faces/twitter/taybenlor/128.jpg",
        "total_events": 113,
        "total_friends": 135
      },
      {
        "id": 9300,
        "first_name": "Léa",
        "last_name": "Arnaud",
        "company": "Breton SARL",
        "city_name": "Jeanneview",
        "last_seen": "2018-06-23T03:38:57.228Z",
        "picture": "https://s3.amazonaws.com/uifaces/faces/twitter/muridrahhal/128.jpg",
        "total_events": 185,
        "total_friends": 18
      }
    ]
  },
  {
    "id": 8634,
    "name": "quos libero minus",
    "date": "2019-03-27T18:08:09.814Z",
    "participants": [
      {
        "id": 34155,
        "first_name": "Clara",
        "last_name": "Lemaire",
        "company": "Vasseur SEM",
        "city_name": "Maximebury",
        "last_seen": "2017-12-29T10:32:42.671Z",
        "picture": "https://s3.amazonaws.com/uifaces/faces/twitter/davecraige/128.jpg",
        "total_events": 363,
        "total_friends": 132
      },
      {
        "id": 52559,
        "first_name": "Kylian",
        "last_name": "Bonnet",
        "company": "Marchand - Francois",
        "city_name": "Renaudberg",
        "last_seen": "2018-01-04T05:06:22.586Z",
        "picture": "https://s3.amazonaws.com/uifaces/faces/twitter/mfacchinello/128.jpg",
        "total_events": 275,
        "total_friends": 15
      },
      {
        "id": 48300,
        "first_name": "Laura",
        "last_name": "Moulin",
        "company": "Dumont, Marchand and Roche",
        "city_name": "Da silvaton",
        "last_seen": "2018-05-09T04:31:09.456Z",
        "picture": "https://s3.amazonaws.com/uifaces/faces/twitter/imammuht/128.jpg",
        "total_events": 82,
        "total_friends": 22
      },
      {
        "id": 77601,
        "first_name": "Sacha",
        "last_name": "Olivier",
        "company": "Lemaire, Giraud and Moulin",
        "city_name": "East Charlotte",
        "last_seen": "2017-12-02T16:01:02.748Z",
        "picture": "https://s3.amazonaws.com/uifaces/faces/twitter/marciotoledo/128.jpg",
        "total_events": 49,
        "total_friends": 162
      }
    ]
  }
]
```

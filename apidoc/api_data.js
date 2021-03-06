define({ "api": [
  {
    "type": "get",
    "url": "/album/top",
    "title": "Request Top Album",
    "name": "GetTopAlbum",
    "group": "Album",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200\n  \"message\": \"OK\",\n   \"data\" : [{\n         \"album_cover\": \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbI78qtY_uZoZjwjVFOoHX3a-ILe0OHIIKo7Anf8It5TI9VpJUvE6VtrTk\",\n         \"artist\": \"Imagine Dragons\"\n     }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Internal",
            "description": "<p>Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"status\" : 500,\n   \"message\" : \"INTERNAL SERVER ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/album.js",
    "groupTitle": "Album"
  },
  {
    "type": "get",
    "url": "/artist/list/:alphabet",
    "title": "Request List Artis",
    "name": "GetListArtist",
    "group": "Artist",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200\n  \"message\": \"OK\",\n   \"data\" : [\n         {\n             \"artist\": \"A1\",\n             \"id_artist\": \"a1\"\n         },\n         {\n             \"aritst\" : \"Avenged Sevenfold\",\n             \"id_artist\": \"avengedsevenfold\"\n         }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Internal",
            "description": "<p>Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"status\" : 500,\n   \"message\" : \"INTERNAL SERVER ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/artist.js",
    "groupTitle": "Artist"
  },
  {
    "type": "get",
    "url": "/artist/song/:id_artist",
    "title": "Request List lyric of arist",
    "name": "GetListLyric",
    "group": "Artist",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200\n  \"message\": \"OK\",\n   \"data\" : {\n         \"name\" : \"I Prevail\",\n          \"id_artist\" : \"iprevail\"\n     },\n     \"song\" : [{\n         \"title\": \"Heart vs Mind\",\n          \"id_song\": \"heartvsmind\"\n     }]\n     \n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Internal",
            "description": "<p>Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"status\" : 500,\n   \"message\" : \"INTERNAL SERVER ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/artist.js",
    "groupTitle": "Artist"
  },
  {
    "type": "get",
    "url": "/lyric/artist/:id_artist/:id_song",
    "title": "Request Lyric of Song",
    "name": "GetLyric",
    "group": "Lyric",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200\n  \"message\": \"OK\",\n   \"data\" : {\n         \"artist\" : {\n             \"name\": \"I Prevail\",\n              \"id_artist\": \"iprevail\"\n         },\n         \"song\" : {\n             \"id_song\" : \"scars\",\n               \"title\": \"Scars\",\n                 \"lyric\": \"lyric here\"\n         }\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Internal",
            "description": "<p>Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"status\" : 500,\n   \"message\" : \"INTERNAL SERVER ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/lyric.js",
    "groupTitle": "Lyric"
  },
  {
    "type": "get",
    "url": "/lyric/top",
    "title": "Request Top Song",
    "name": "GetTopSong",
    "group": "Lyric",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200\n  \"message\": \"OK\",\n   \"data\" : [{\n         \"artist\": \"Wiz Khalifa \",\n         \"song\":  \\\"Contact\\\"\n     }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Internal",
            "description": "<p>Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"status\" : 500,\n   \"message\" : \"INTERNAL SERVER ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/lyric.js",
    "groupTitle": "Lyric"
  }
] });

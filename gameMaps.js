/* This file holds all highscore mappings for the games.
 *
 * name": An array of games the structure is valid for.
 * structure: Holds information about the structure of the hi file.
 *   blocks: This basicaly stands for the nr of highscores saved
 *   fields: Holds the information about the fields in order of appereance.
 *     name: The name of the field. Use something descriptive here. This will be
 *           used as header in the higscore tables.
 *     length: The amount of bytes used by this field
 *     format: The format of the field. The according formatter is called when
 *             processing the higscore data. Fields without format are
 *             considered as separators and are not being processed.
 *     settings: Every field may have settings that are needed for processing
 *               the field.
 *       charMap: The character mapping to use for this field.
 *       offset: The character offset
 *       special: The special mapping for characters that are not in the range
 *                of the char map.
 *       append: Apped the provided characters on the end of the result.
 */
gameMaps = [
  {
    "name": [
      "1943",
      "1943j",
      "1943u",
      "1943kai"
    ],
    "structure": {
      "blocks": 5,
      "fields": [
        {"name": "score", "length": 8, "format": "bcd"},
        {"name": "name", "length": 3, "format": "fromCharMap", "settings": {
            "charMap": "numericUpper",
            "special": {
              "24": " ",
              "2B": ".",
              "2C": ":",
              "3A": "&",
              "62": "♥",
              "64": "★",
              "66": "!"
            }
          }
        },
        {"name": "separator", "length": 5}
      ]
    }
  },
  {
    "name": [
      "altbeast",
      "altbeast2",
      "altbeast4",
      "altbeast5",
      "altbeast6",
      "mt_beast"
    ],
    "structure": {
      "blocks": 7,
      "fields": [
        {"name": "score", "length": 4, "format": "asIs"},
        {"name": "stage", "length": 1, "format": "asIs"},
        {"name": "name", "length": 3, "format": "ascii"},
      ]
    }
  },
  {
    "name": [
      "avsp",
      "avspa",
      "avspd",
      "avsph",
      "avspj",
      "avspu"
    ],
    "structure": {
      "blocks": 50,
      "fields": [
        {"name": "rank", "length": 1},
        {"name": "trash", "length": 3},
        {"name": "score", "length": 4, "format": "asIs"},
        {"name": "name", "length": 3, "format": "ascii"},
        {"name": "character", "length": 1, "format": "specialOnly", "settings": {
            "special": {
              "00": "Predator Warrior",
              "01": "Maj. D. Schaefer",
              "02": "Predator Hunter",
              "03": "Lt. Linn Kurosawa"
            }
          }
        },
        {"name": "level", "length": 1, "format": "asIs"},
        {"name": "trash", "length": 3}
      ]
    }
  },
  {
    "name": [
      "bubl2000"
    ],
    "structure": {
      "blocks": 5,
      "fields": [
        {"name": "score", "length": 4, "format": "hexToDecimal", "settings": {
            "append": "00"
          }
        },
        {"name": "trash", "length": 1},
        {"name": "name", "length": 9, "format": "ascii", "settings": {
            "ignoreBytes": [1, 3, 5, 7]
          }
        },
        {"name": "trash", "length": 2},
      ]
    }
  },
  {
    "name": [
      "bublbobl",
      "bub68705"
    ],
    "structure": {
      "blocks": 5,
      "fields": [
        {"name": "score", "length": 3, "format": "asIs", "settings": {"append": "0"}},
        {"name": "round", "length": 1, "format": "hexToDecimal", "settings":{"add": 1}},
        {"name": "name", "length": 3, "format": "ascii"},

      ]
    }
  },
  {
    "name": [
      "dino",
      "dinoj",
      "dinou",
      "dinohunt"
    ],
    "structure": {
      "blocks": 10,
      "fields": [
        {"name": "score", "length": 4, "format": "asIs"},
        {"name": "name", "length": 3, "format": "ascii"},
        {"name": "trash", "length": 1},
        {"name": "character", "length": 1, "format": "specialOnly", "settings": {
            "special": {
              "00": "Jack Tenrec",
              "01": "Mustapha Cairo",
              "02": "Hannah Dundee",
              "03": "Mess O'Bredovic"
            }
          }
        },
        {"name": "level", "length": 1, "format": "asIs"},
        {"name": "trash", "length": 6}
      ]
    }
  },
  {
    "name": [
      "dkong",
      "dkongjo",
      "dkongj",
      "dkongo",
      "dkongjo1",
      "dkongf"
    ],
    "structure": {
      "blocks": 5,
      "fields": [
        {"name": "UnusedA", "length": 2},
        {"name": "Rank", "length": 1},
        {"name": "UnusedB", "length": 4},
        {"name": "score", "length": 6, "format": "bcd"},
        {"name": "UnusedC", "length": 2},
        {"name": "name", "length": 3, "format": "fromCharMap", "settings": {
            "charMap": "upper",
            "offset": "11",
            "special": {
              "2B": ".",
              "2C": ":"
            }
          }
        },
        {"name": "UnusedD", "length": 11},
        {"name": "ShortScore", "length": 3},
        {"name": "UnusedE", "length": 2}
      ]
    }
  },
  {
    "name": [
      "elvactr",
      "elvactrj",
      "elvact2u"
    ],
    "structure": {
      "blocks": 10,
      "fields": [
        {"name": "garbage", "length": 1},
        {"name": "score", "length": 3, "format": "hexToDecimal"},
        {"name": "comments", "length": 4},
        {"name": "name", "length": 3, "format": "ascii"},
        {"name": "trash", "length": 1}
      ]
    }
  },
  {
    "name": [
      "ffightj1",
      "ffightj2",
      "ffightj1",
      "ffightua",
      "ffightu",
      "ffight",
      "ffightj",
      "ffightjh",
      "ffightbl"
    ],
    "structure": {
      "blocks": 3,
      "fields": [
        {"name": "score", "length": 4, "format": "asIs"},
        {"name": "name", "length": 3, "format": "ascii"},
        {"name": "trash", "length": 1}
      ]
    }
  },
  {
    "name": [
      "galaga88",
      "galaga88j"
    ],
    "structure": {
      "skip": 6,
      "blocks": 8,
      "fields": [
        {"name": "score", "length": 5, "format": "asIs"},
        {"name": "trash", "length": 1},
        {"name": "stage", "length": 1, "format": "asIs"},
        {"name": "trash", "length": 1},
        {"name": "dimension", "length": 1, "format": "asIs"},
        {"name": "name", "length": 3, "format": "fromCharMap", "settings": {
            "charMap": "upper",
            "offset": 1,
            "special": {
              "1B": "."
            }
          }
        }
      ]
    }
  },
  {
    "name": [
      "mslug2"
    ],
    "structure": {
      "blocks": 10,
      "fields": [
        {"name": "score", "length": 4, "format": "asIs"},
        {"name": "name", "length": 3, "format": "ascii"},
        {"name": "trash", "length": 3}
      ]
    }
  },
  {
    "name": [
      "mslugx"
    ],
    "structure": {
      "blocks": 9,
      "fields": [
        {"name": "score", "length": 4, "format": "asIs"},
        {"name": "name", "length": 3, "format": "ascii"},
        {"name": "trash", "length": 1}
      ]
    }
  },
  {
    "name": [
      "rtype",
      "rtypeb",
      "rtypej",
      "rtypejp",
      "rtypeu"
    ],
    "structure": {
      "skip": 3,
      "blocks": 10,
      "fields": [
        {"name": "trash", "length": 1},
        {"name": "score", "length": 3, "format": "reverseDecimal", "settings": {"append": "00"}},
        {"name": "name", "length": 7, "format": "ascii"}
      ]
    }
  },
  {
    "name": [
      "rtypeleo",
      "rtypeleoj"
    ],
    "structure": {
      "blocks": 7,
      "fields": [
        {"name": "score", "length": 3, "format": "reverseDecimal", "settings": {"append": "0"}},
        {"name": "name", "length": 5, "format": "ascii"}
      ]
    }
  },
  {
    "name": [
      "rtype2",
      "rtype2j",
      "rtype2jc"
    ],
    "structure": {
      "skip": 20,
      "blocks": 10,
      "fields": [
        {"name": "score", "length": 3, "format": "reverseDecimal"},
        {"name": "name", "length": 8, "format": "ascii"}
      ]
    }
  },
  {
    "name": [
      "simpsons"
    ],
    "structure": {
      "blocks": 10,
      "fields": [
        {"name": "name", "length": 3, "format": "fromCharMap", "settings":{
            "charMap": "upper",
            "offset": "41",
            "special": {
              "62": "$",
              "60": "@",
              "5F": "&",
              "5C": "_",
              "5B": ".",
              "5D": "?",
              "40": " ",
              "61": "★",
              "5E": "!"
            }
          }
        },
        {"name": "score", "length": 2, "format": "asIs"},
        {"name": "trash", "length": 3}
      ]
    }
  },
  {
    "name": [
      "splatter",
      "splatterj",
      "splattero"
    ],
    "structure": {
      "blocks": 8,
      "fields": [
        {"name": "score", "length": 3, "format": "asIs", "settings": {"append": "00"}},
        {"name": "stage", "length": 1, "format": "asIs"},
        {"name": "name", "length": 3, "format": "ascii"},
        {"name": "trash", "length": 1}
      ]
    }
  },
  {
    "name": [
      "spf2th",
      "spf2t",
      "spf2xj",
      "spf2xjd",
      "spf2ta",
      "spf2td"
    ],
    "structure": {
      "blocks": 5,
      "fields": [
        {"name": "score", "length": 4, "format": "hexToDecimal"},
        {"name": "name", "length": 3, "format": "fromCharMap", "settings": {
            "charMap": "upperNumeric",
            "special": {
              "29": "♥",
              "28": ",",
              "27": "-",
              "26": ".",
              "25": "?",
              "24": "!",
              "2A": "←",
              "2B": "&",
              "2C": "=",
              "2D": " "
            }
          }
        },
        {"name": "trash", "length": 1},
        {"name": "char", "length": 1, "format": "specialOnly", "settings": {
            "special": {
              "00": "Morrigan",
              "01": "Chun-Li",
              "02": "Ryu",
              "03": "Ken",
              "04": "Hsien-ko",
              "05": "Donovan",
              "06": "Felicia",
              "07": "Sakura"
            }
          }
        },
        {"name": "trash", "length": 1},
        {"name": "level", "length": 1, "format": "specialOnly", "settings": {
            "special": {
              "0A": "easy",
              "02": "normal",
              "00": "hard"
            }
          }
        },
        {"name": "trash", "length": 5}
      ]
    }
  }
];

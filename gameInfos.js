/* This file holds all necesary infomations about games.
 *
 * The structure is straigt forward. All attributes listed here are mandatory.
 *
 * name: The name of the game AKA the slug
 * fullName: The full name of the game
 * letter: The starting letter of the game or "special" if not a letter.
 * order: an array of field names, they will be printed in the listed order.
 * sort: Holds information about the sorting of the scores
 *   by: the field to initially sort by
 *   order: Sorting order may be asc or desc
 */
gameInfos = [
  {
    "name": "1943",
    "fullName": "1943 - The Battle of Midway (US)",
    "letter": "special",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "1943j",
    "fullName": "1943 - The Battle of Midway (JAPAN)",
    "letter": "special",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "1943u",
    "fullName": "1943 - The Battle of Midway (US)",
    "letter": "special",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "1943kai",
    "fullName": "1943 Kai",
    "letter": "special",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "altbeast",
    "fullName": "Altered Beast (set 8, 8751 317-0078)",
    "letter": "a",
    "order": ["score", "name", "stage"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "altbeast2",
    "fullName": "Altered Beast (set 2, MC-8123B 317-0066)",
    "letter": "a",
    "order": ["score", "name", "stage"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "altbeast4",
    "fullName": "Altered Beast (set 4, MC-8123B 317-0066))",
    "letter": "a",
    "order": ["score", "name", "stage"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "altbeast5",
    "fullName": "Altered Beast (set 5, FD1094 317-0069)",
    "letter": "a",
    "order": ["score", "name", "stage"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "altbeast6",
    "fullName": "Altered Beast (set 6, 8751 317-0076)",
    "letter": "a",
    "order": ["score", "name", "stage"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "avsp",
    "fullName": "Alien vs. Predator (Euro 940520)",
    "letter": "a",
    "order": ["score", "name", "character", "level"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "avspa",
    "fullName": "Alien vs. Predator (Asia 940520)",
    "letter": "a",
    "order": ["score", "name", "character", "level"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "avspd",
    "fullName": "Alien vs. Predator (Euro 940520 Phoenix Edition) (bootleg)",
    "letter": "a",
    "order": ["score", "name", "character", "level"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "avsph",
    "fullName": "Alien vs. Predator (Hispanic 940520)",
    "letter": "a",
    "order": ["score", "name", "character", "level"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "avspj",
    "fullName": "Alien vs. Predator (Japan 940520)",
    "letter": "a",
    "order": ["score", "name", "character", "level"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "avspu",
    "fullName": "Alien vs. Predator (USA 940520)",
    "letter": "a",
    "order": ["score", "name", "character", "level"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "bublbobl",
    "fullName": "Bubble Bobble",
    "letter": "b",
    "order": ["score", "name", "round"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "bub68705",
    "fullName": "Bubble Bobble (bootleg with 68705)",
    "letter": "b",
    "order": ["score", "name", "round"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "dino",
    "fullName": "Cadillacs and Dinosaurs (World 930201)",
    "letter": "c",
    "order": ["score", "name", "character", "level"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "dinoj",
    "fullName": "Cadillacs: Kyouryuu Shin Seiki (Japan 930201)",
    "letter": "c",
    "order": ["score", "name", "character", "level"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "dinou",
    "fullName": "Cadillacs and Dinosaurs (USA 930201)",
    "letter": "c",
    "order": ["score", "name", "character", "level"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "dinohunt",
    "fullName": "Dinosaur Hunter (Chinese bootleg of Cadillacs and Dinosaurs)",
    "letter": "d",
    "order": ["score", "name", "character", "level"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "dkong",
    "fullName": "Donkey Kong (US set 1)",
    "letter": "d",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "dkongf",
    "fullName": "Donkey Kong Foundry (hack)",
    "letter": "d",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "dkongj",
    "fullName": "Donkey Kong (Japan set 1)",
    "letter": "d",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "dkongjo",
    "fullName": "Donkey Kong (Japan set 2)",
    "letter": "d",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "dkongjo1",
    "fullName": "Donkey Kong (Japan set 3)",
    "letter": "d",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "dkongo",
    "fullName": "Donkey Kong (US set 2)",
    "letter": "d",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "elvactr",
    "fullName": "Elevator Action Returns (Ver 2.2O 1995/02/20)",
    "letter": "e",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "elvactrj",
    "fullName": "Elevator Action Returns (Ver 2.2J 1995/02/20)",
    "letter": "e",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "elvact2u",
    "fullName": "Elevator Action II (Ver 2.2A 1995/02/20)",
    "letter": "e",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "ffightj1",
    "fullName": "Final Fight (Japan 900112)",
    "letter": "f",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "ffightj2",
    "fullName": "Final Fight (Japan 900305)",
    "letter": "f",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "ffightua",
    "fullName": "Final Fight (USA 900112)",
    "letter": "f",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "ffightu",
    "fullName": "Final Fight (USA, set 1)",
    "letter": "f",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "ffightub",
    "fullName": "Final Fight (USA 900613)",
    "letter": "f",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "ffightu1",
    "fullName": "Final Fight (USA, set 2)",
    "letter": "f",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "ffighta",
    "fullName": "Final Fight (World, set 2)",
    "letter": "f",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "ffight",
    "fullName": "Final Fight (World, set 1)",
    "letter": "f",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "ffightj",
    "fullName": "Final Fight (Japan)",
    "letter": "f",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "ffightjh",
    "fullName": "Street Smart / Final Fight (Japan, hack)",
    "letter": "f",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "ffightbl",
    "fullName": "Final Fight (bootleg)",
    "letter": "f",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "galaga88",
    "fullName": "Galaga '88",
    "letter": "g",
    "order": ["score", "name", "stage", "dimension"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "galaga88j",
    "fullName": "Galaga '88 (Japan)",
    "letter": "g",
    "order": ["score", "name", "stage", "dimension"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "mslugx",
    "fullName": "Metal Slug X - Super Vehicle-001 (NGM-2500)(NGH-2500)",
    "letter": "m",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "mslug2",
    "fullName": "Metal Slug 2 - Super Vehicle-001/II (NGM-2410)(NGH-2410)",
    "letter": "m",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "mt_beast",
    "fullName": "Altered Beast (Mega-Tech)",
    "letter": "a",
    "order": ["score", "name", "stage"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "rtype",
    "fullName": "R-Type (World)",
    "letter": "r",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "rtypeb",
    "fullName": "R-Type (World bootleg)",
    "letter": "r",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "rtypej",
    "fullName": "R-Type (Japan)",
    "letter": "r",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "rtypejp",
    "fullName": "R-Type (Japan prototype)",
    "letter": "r",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "rtypeleo",
    "fullName": "R-Type Leo (World)",
    "letter": "r",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "rtypeleoj",
    "fullName": "R-Type Leo (Japan)",
    "letter": "r",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "rtypeu",
    "fullName": "R-Type (US)",
    "letter": "r",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    },
  },
  {
    "name": "rtype2",
    "fullName": "R-Type II",
    "letter": "r",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "rtype2j",
    "fullName": "R-Type II (Japan)",
    "letter": "r",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "rtype2jc",
    "fullName": "R-Type II (Japan, revision C)",
    "letter": "r",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
   }
  },
  {
    "name": "simpsons",
    "fullName": "The Simpsons (4 Players World, set 1)",
    "letter": "s",
    "order": ["score", "name"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "splatter",
    "fullName": "Splatter House (World new version)",
    "letter": "s",
    "order": ["score", "name", "stage"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "splatterj",
    "fullName": "Splatter House (Japan)",
    "letter": "s",
    "ordner": ["score", "name", "stage"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  },
  {
    "name": "splattero",
    "fullName": "Splatter House (World old version)",
    "letter": "s",
    "order": ["score", "name", "stage"],
    "sort": {
      "by": "score",
      "order": "desc"
    }
  }
];

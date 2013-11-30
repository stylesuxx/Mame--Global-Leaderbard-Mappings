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
    name: "1943",
    fullName: "1943 - The Battle of Midway (US)",
    letter: "special",
    order: ["score", "name"],
    sort: {
      by: "score",
      order: "desc",
    },
  },
  {
    name: "1943j",
    fullName: "1943 - The Battle of Midway (JAPAN)",
    letter: "special",
    order: ["score", "name"],
    sort: {
      by: "score",
      order: "desc",
    },
  },
  {
    name: "1943u",
    fullName: "1943 - The Battle of Midway (US)",
    letter: "special",
    order: ["score", "name"],
    sort: {
      by: "score",
      order: "desc",
    },
  },
  {
    name: "1943kai",
    fullName: "1943 Kai",
    letter: "special",
    order: ["score", "name"],
    sort: {
      by: "score",
      order: "desc",
    },
  },
  {
    name: "dkong",
    fullName: "Donkey Kong (US set 1)",
    letter: "d",
    order: ["score", "name"],
    sort: {
      by: "score",
      order: "desc",
    },
  },
  {
    name: "dkongf",
    fullName: "Donkey Kong Foundry (hack)",
    letter: "d",
    order: ["score", "name"],
    sort: {
      by: "score",
      order: "desc",
    },
  },
  {
    name: "dkongj",
    fullName: "Donkey Kong (Japan set 1)",
    letter: "d",
    order: ["score", "name"],
    sort: {
      by: "score",
      order: "desc",
    },
  },
  {
    name: "dkongjo",
    fullName: "Donkey Kong (Japan set 2)",
    letter: "d",
    order: ["score", "name"],
    sort: {
      by: "score",
      order: "desc",
    },
  },
  {
    name: "dkongjo1",
    fullName: "Donkey Kong (Japan set 3)",
    letter: "d",
    order: ["score", "name"],
    sort: {
      by: "score",
      order: "desc",
    },
  },
  {
    name: "dkongo",
    fullName: "Donkey Kong (US set 2)",
    letter: "d",
    order: ["score", "name"],
    sort: {
      by: "score",
      order: "desc",
    },
  },
];

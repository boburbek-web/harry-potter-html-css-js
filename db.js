let characters=[
    {
      "id": "1",
      "name": "Harry Potter",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "31-07-1980",
      "wizard": true,
      "ancestry": "half-blood",
      "eyeColour": "green",
      "hairColour": "black",
      "wand": {
        "wood": "holly",
        "core": "phoenix feather",
        "length": 11
      },
      "patronus": "stag",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Daniel Radcliffe",
      "image": "https://ik.imagekit.io/hpapi/harry.jpg"
    },
    {
      "id": "2",
      "name": "Hermione Granger",
      "species": "human",
      "gender": "female",
      "house": "Gryffindor",
      "dateOfBirth": "19-09-1979",
      "wizard": true,
      "ancestry": "muggleborn",
      "eyeColour": "brown",
      "hairColour": "brown",
      "wand": {
        "wood": "vine",
        "core": "dragon heartstring",
        "length": 10.75
      },
      "patronus": "otter",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Emma Watson",
      "image": "https://ik.imagekit.io/hpapi/hermione.jpeg"
    },
    {
      "id": "3",
      "name": "Ron Weasley",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "01-03-1980",
      "yearOfBirth": 1980,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "blue",
      "hairColour": "red",
      "wand": {
        "wood": "willow",
        "core": "unicorn tail-hair",
        "length": 14
      },
      "patronus": "Jack Russell terrier",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Rupert Grint",
      
      "image": "https://ik.imagekit.io/hpapi/ron.jpg"
    },
    {
      "id": "4",
      "name": "Draco Malfoy",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "05-06-1980",
      "yearOfBirth": 1980,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "grey",
      "hairColour": "blonde",
      "wand": {
        "wood": "hawthorn",
        "core": "unicorn tail-hair",
        "length": 10
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Tom Felton",
      "image": "https://ik.imagekit.io/hpapi/draco.jpg"
    },
    {
      "id": "5",
      "name": "Minerva McGonagall",
      "species": "human",
      "gender": "female",
      "house": "Gryffindor",
      "dateOfBirth": "04-10-1925",
      "yearOfBirth": 1925,
      "wizard": true,
      "ancestry": "half-blood",
      "eyeColour": "----------",
      "hairColour": "black",
      "wand": {
        "wood": "fir",
        "core": "dragon heartstring",
        "length": 9.5
      },
      "patronus": "tabby cat",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "Maggie Smith",
      "image": "https://ik.imagekit.io/hpapi/mcgonagall.jpg"
    },
    {
      "id": "6",
      "name": "Cedric Diggory",
      "species": "human",
      "gender": "male",
      "house": "Hufflepuff",
      "dateOfBirth":"12-05-1986",
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "grey",
      "hairColour": "brown",
      "wand": {
        "wood": "ash",
        "core": "unicorn hair",
        "length": 12.25
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Robert Pattinson",
      "image": "https://ik.imagekit.io/hpapi/cedric.png"
    },
    {
      "id": "7",
      "name": "Cho Chang",
      "species": "human",
      "gender": "female",
      "house": "Ravenclaw",
      "dateOfBirth": "07-04-1979",
      "yearOfBirth": 1979,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "brown",
      "hairColour": "black",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus": "swan",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Katie Leung",
      "image": "https://ik.imagekit.io/hpapi/cho.jpg"
    },
    {
      "id": "8",
      "name": "Severus Snape",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "09-01-1960",
      "yearOfBirth": 1960,
      "wizard": true,
      "ancestry": "half-blood",
      "eyeColour": "black",
      "hairColour": "black",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus": "doe",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "Alan Rickman",
      "image": "https://ik.imagekit.io/hpapi/snape.jpg"
    },
    {
      "id": "9",
      "name": "Rubeus Hagrid",
      "species": "half-giant",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "06-12-1928",
      "yearOfBirth": 1928,
      "wizard": true,
      "ancestry": "half-blood",
      "eyeColour": "black",
      "hairColour": "black",
      "wand": {
        "wood": "oak",
        "core": "----------",
        "length": 16
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "Robbie Coltrane",
      "image": "https://ik.imagekit.io/hpapi/hagrid.png"
    },
    {
      "id": "10",
      "name": "Neville Longbottom",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "30-07-1980",
      "yearOfBirth": 1980,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "blonde",
      "wand": {
        "wood": "cherry",
        "core": "unicorn tail-hair",
        "length": 13
      },
      "patronus": "Non-Corporeal",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Matthew Lewis",
      "image": "https://ik.imagekit.io/hpapi/neville.jpg"
    },
    {
      "id": "11",
      "name": "Luna Lovegood",
      "species": "human",
      "gender": "female",
      "house": "Ravenclaw",
      "dateOfBirth": "13-02-1981",
      "yearOfBirth": 1981,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "grey",
      "hairColour": "blonde",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus": "hare",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Evanna Lynch",
      "image": "https://ik.imagekit.io/hpapi/luna.jpg"
    },
    {
      "id": "12",
      "name": "Ginny Weasley",
      "species": "human",
      "gender": "female",
      "house": "Gryffindor",
      "dateOfBirth": "11-08-1981",
      "yearOfBirth": 1981,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "brown",
      "hairColour": "red",
      "wand": {
        "wood": "yew",
        "core": "----------",
        "length": "----------",
      },
      "patronus": "horse",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Bonnie Wright",
      "image": "https://ik.imagekit.io/hpapi/ginny.jpg"
    },
    {
      "id": "13",
      "name": "Sirius Black",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "03-11-1959",
      "yearOfBirth": 1959,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "grey",
      "hairColour": "black",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus": "hare",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Gary Oldman",
      "image": "https://ik.imagekit.io/hpapi/sirius.JPG"
    },
    {
      "id": "14",
      "name": "Remus Lupin",
      "species": "werewolf",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "10-03-1960",
      "yearOfBirth": 1960,
      "wizard": true,
      "ancestry": "half-blood",
      "eyeColour": "green",
      "hairColour": "brown",
      "wand": {
        "wood": "cypress",
        "core": "unicorn tail-hair",
        "length": 10.25
      },
      "patronus": "wolf",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "David Thewlis",
      "image": "https://ik.imagekit.io/hpapi/lupin.jpg"
    },
    {
      "id": "15",
      "name": "Arthur Weasley",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "06-02-1950",
      "yearOfBirth": 1950,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "blue",
      "hairColour": "red",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus": "weasel",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Mark Williams",
      "image": "https://ik.imagekit.io/hpapi/arthur.jpg"
    },
    {
      "id": "16",
      "name": "Bellatrix Lestrange",
      "species": "human",
      "gender": "female",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": 1951,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "brown",
      "hairColour": "black",
      "wand": {
        "wood": "walnut",
        "core": "dragon heartstring",
        "length": 12.75
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Helena Bonham Carter",
      "image": "https://ik.imagekit.io/hpapi/bellatrix.jpg"
    },
    {
      "id": "17",
      "name": "Lord Voldemort",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "31-12-1926",
      "yearOfBirth": 1926,
      "wizard": true,
      "ancestry": "half-blood",
      "eyeColour": "red",
      "hairColour": "bald",
      "wand": {
        "wood": "yew",
        "core": "phoenix feather",
        "length": 13.5
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Ralph Fiennes",
      "image": "https://ik.imagekit.io/hpapi/voldemort.jpg"
    },
    {
      "id": "18",
      "name": "Horace Slughorn",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "green",
      "hairColour": "blonde",
      "wand": {
        "wood": "cedar",
        "core": "dragon heartstring",
        "length": 10.25
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "Jim Broadbent",
      "image": "https://ik.imagekit.io/hpapi/slughorn.JPG"
    },
    {
      "id": "19",
      "name": "Kingsley Shacklebolt",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "brown",
      "hairColour": "brown",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus": "lynx",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "George Harris",
      "image": "https://ik.imagekit.io/hpapi/kingsley.jpg"
    },
    {
      "id": "20",
      "name": "Dolores Umbridge",
      "species": "human",
      "gender": "female",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "half-blood",
      "eyeColour": "brown",
      "hairColour": "grey",
      "wand": {
        "wood": "birch",
        "core": "dragon heartstring",
        "length": 8
      },
      "patronus": "persian cat",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "Imelda Staunton",
      "image": "https://ik.imagekit.io/hpapi/umbridge.jpg"
    },
    {
      "id": "21",
      "name": "Lucius Malfoy",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": 1954,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "grey",
      "hairColour": "blonde",
      "wand": {
        "wood": "elm",
        "core": "dragon heartstring",
        "length": 18
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Jason Isaacs",
      "image": "https://ik.imagekit.io/hpapi/lucius.jpg"
    },
    {
      "id": "22",
      "name": "Vincent Crabbe",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "black",
      "hairColour": "black",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Jamie Waylett",
      "image": "https://ik.imagekit.io/hpapi/crabbe.jpg"
    },
    {
      "id": "23",
      "name": "Gregory Goyle",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "brown",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Josh Herdman",
      "image": "https://ik.imagekit.io/hpapi/goyle.jpg"
    },
    {
      "id": "24",
      "name": "Mrs Norris",
      "species": "cat",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "yellow",
      "hairColour": "brown",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "Maxime, Alanis and Tommy the cats",
      "image": "https://ik.imagekit.io/hpapi/norris.JPG"
    },
    {
      "id": "25",
      "name": "Argus Filch",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "squib",
      "eyeColour": "----------",
      "hairColour": "grey",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "David Bradley",
      "image": "https://ik.imagekit.io/hpapi/filch.jpg"
    },
    {
      "id": "26",
      "name": "Vernon Dursley",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Richard Griffiths",
      "image": "https://static.wikia.nocookie.net/harrypotter/images/2/20/Vernon_Dursley.jpg"
    },
    {
      "id": "27",
      "name": "Petunia Dursley",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "blonde",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Fiona Shaw",
      "image": "https://static.wikia.nocookie.net/harrypotter/images/6/64/Petunia_DH1.png"
    },
    {
      "id": "28",
      "name": "Dudley Dursley",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "23-6-1980",
      "yearOfBirth": 1980,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "blue",
      "hairColour": "blond",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Harry Melling",
      "image": "https://static.wikia.nocookie.net/harrypotter/images/1/19/Dudley_DH.png"
    },
    {
      "id": "29",
      "name": "Lily Potter",
      "species": "human",
      "gender": "female",
      "house": "Gryffindor",
      "dateOfBirth": "30-01-1960",
      "yearOfBirth": 1960,
      "wizard": true,
      "ancestry": "muggleborn",
      "eyeColour": "green",
      "hairColour": "----------",
      "wand": {
        "wood": "willow",
        "core": "----------",
        "length": 10.25
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Geraldine Somerville",
      "image": "https://static.wikia.nocookie.net/harrypotter/images/c/ce/Lily_Potter1.jpg"
    },
    {
      "id": "30",
      "name": "James Potter",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "27-03-1960",
      "yearOfBirth": 1960,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "black",
      "wand": {
        "wood": "mahogany",
        "core": "----------",
        "length": 11
      },
      "patronus": "stag",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Adrian Rawlins",
      "image": "https://static.wikia.nocookie.net/harrypotter/images/1/10/James_Potter_I_Deathly_Hallows.jpg"
    },
    {
      "id": "31",
      "name": "Albus Dumbledore",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": 1881,
      "wizard": true,
      "ancestry": "half-blood",
      "eyeColour": "blue",
      "hairColour": "silver",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "Richard Harris",
      "image": "https://static.wikia.nocookie.net/harrypotter/images/4/40/Albus_Dumbledore_%28HBP_promo%29_3.jpg"
    },
    {
      "id": "32",
      "name": "Madam Pomfrey",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "Gemma Jones",
      "image": "https://static.wikia.nocookie.net/harrypotter/images/5/56/Madam_Pomfrey.png"
    },
    {
      "id": "33",
      "name": "Mrs Figg",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "squib",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Kathryn Hunter",
      "image": "https://static.wikia.nocookie.net/harrypotter/images/8/82/Figg.jpg"
    },
    {
      "id": "34",
      "name": "Marge Dursley",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Pam Ferris",
      "image": "https://static.wikia.nocookie.net/harrypotter/images/7/7e/Marjorie_dursley_promo.jpg"
    },
    {
      "id": "35",
      "name": "Yvonne",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
      "image": "https://static.wikia.nocookie.net/harrypotter/images/d/d8/Yvonne_Quenet.jpg"
    },
    {
      "id": "36",
      "name": "Piers Polkiss",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Jason Boyd",
      "image": "https://static.wikia.nocookie.net/harrypotter/images/5/57/Pierrs.jpg"
    },
    {
      "id": "37",
      "name": "Dennis",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Christopher Rithin",
      "image": "https://static.wikia.nocookie.net/harrypotter/images/d/da/Creevey3.jpg"
    },
    {
      "id": "38",
      "name": "Malcolm",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Richard Macklin",
      "image": "https://static.wikia.nocookie.net/harrypotter/images/e/e4/Malcolm.png"
    },
    {
      "id": "39",
      "name": "Gordon",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
      "image": "https://static.wikia.nocookie.net/harrypotter/images/2/23/Gordon.png"
    },
    {
      "id": "40",
      "name": "Miranda Gaushawk",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
      "image": "https://static.wikia.nocookie.net/harrypotter/images/5/58/Goshawk.jpg"
    },
    {
      "id": "41",
      "name": "Bathilda Bagshot",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
      "image": "https://static.wikia.nocookie.net/harrypotter/images/0/0d/Bathilda_Bagshot_profile.jpg"
    },
    {
      "id": "42",
      "name": "Adalbert Waffling",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
      "image": "https://static.wikia.nocookie.net/harrypotter/images/5/5b/Adalbert_Waffling_HM.png"
    },
    {
      "id": "43",
      "name": "Emeric Switch",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
      "image": "https://static.wikia.nocookie.net/harrypotter/images/e/e0/EmericSwitch.jpg"
    },
    {
      "id": "44",
      "name": "Phyllida Spore",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
      "image": "https://static.wikia.nocookie.net/harrypotter/images/5/5d/PhyllidaSporeHead.jpg"
    },
    {
      "id": "45",
      "name": "Arsenius Jigger",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images/5/5f/ArseniusJigger.JPG"
    },
    {
      "id": "46",
      "name": "Newt Scamander",
      "species": "human",
      "gender": "male",
      "house": "Hufflepuff",
      "dateOfBirth": "24-02-1897",
      "yearOfBirth": 1897,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "hazel",
      "hairColour": "brown",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Eddie Redmayne",
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "47",
      "name": "Quentin Trimble",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "1e705d10-aa89-4e9c-94be-478304d55dbb",
      "name": "Tom",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Derek Deadman",
      "alternate_actors": [
        "Jim Tavare"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "43b2880a-df86-4f55-a599-9cd0548833f4",
      "name": "Doris Crockford",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Nina Young",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "ba19be27-178b-4594-95b7-51ba0e3ba1dd",
      "name": "Quirinus Quirrel",
      "alternate_names": [
        "Professor Quirrel"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "Ian Hart",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "4bd76a78-86d8-40f6-aed4-74fe51783594",
      "name": "Griphook",
      "species": "goblin",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Verne Troyer",
      "alternate_actors": [
        "Warwick Davis"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "7b26f1db-7cc5-4b66-9f2f-6bbb04d628b2",
      "name": "Madam Malkin",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "ba05fee0-483c-42ed-a8b6-b7a82b6e800a",
      "name": "Vindictus Viridian",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "d59691a4-f830-4eb0-a819-a0fb00b7e80f",
      "name": "Garrick Ollivander",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "pale, silvery",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "John Hurt",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "6b59be3f-e527-422d-959d-79fcdb3b24eb",
      "name": "Hedwig",
      "species": "owl",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "amber",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Gizmo",
      "alternate_actors": [
        "Ook",
        "Sprout",
        "Kasper",
        "Swoops",
        "Oh Oh",
        "Elmo",
        "Bandit"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "79e02eb5-17c0-4dd9-bf55-aec03434812c",
      "name": "Molly Weasley",
      "alternate_names": [
        "Molly Prewett",
        "Mollywabbles"
      ],
      "species": "human",
      "gender": "female",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "red",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Julie Walters",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "8f3b8796-c7b9-442e-ac02-113d48306fc7",
      "name": "Percy Weasley",
      "alternate_names": [
        "Perce",
        "Percy Ignatius Weasley",
        "Weatherby"
      ],
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "red",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Chris Rankin",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "28741184-263c-4000-b011-ca7c60466ef4",
      "name": "Fred Weasley",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "red",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "James Phelps",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "2a0615de-8aa4-41e7-9504-dd875f5f3f01",
      "name": "George Weasley",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "red",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Oliver Phelps",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "979ab773-944f-4ff8-88be-943a4bc2c18a",
      "name": "Lee Jordan",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Luke Youngblood",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "cd09be4a-1581-4a7e-b4e7-4505e66a68a5",
      "name": "Bill Weasley",
      "alternate_names": [
        "William Arthur Weasley"
      ],
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "red",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Richard Fish",
      "alternate_actors": [
        "Domhnall Gleeson"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "01c62c63-f481-41c0-ab06-189caf3a6a61",
      "name": "Charlie Weasley",
      "alternate_names": [
        "Charles Weasley"
      ],
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "red",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Alex Crockford",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "2772994f-6a19-4d01-9993-5e10cc6f69a5",
      "name": "Fat Friar",
      "species": "ghost",
      "gender": "male",
      "house": "Hufflepuff",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Simon Fisher-Becker",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "1ec8a085-d88c-4ba7-a7c6-a0f93156db07",
      "name": "Peeves",
      "species": "poltergeist",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "0af82694-e24f-45ec-a8d7-5bb1199ce631",
      "name": "Hannah Abbott",
      "species": "human",
      "gender": "female",
      "house": "Hufflepuff",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "half-blood",
      "eyeColour": "----------",
      "hairColour": "blonde",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Charlotte Skeoch",
      "alternate_actors": [
        "Louisa Warren"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "7cc5e694-850d-4c44-830b-7154e23bb5c3",
      "name": "Susan Bones",
      "species": "human",
      "gender": "female",
      "house": "Hufflepuff",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Eleanor Columbus",
      "alternate_actors": [
        "Emma Jayne-Corboz"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "9055a7b1-6ac9-4363-977c-4dec78572fad",
      "name": "Terry Boot",
      "species": "human",
      "gender": "male",
      "house": "Ravenclaw",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Kevin Lee Yi",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "c5acae3e-1a05-4f1d-bb83-3f8c7639d84e",
      "name": "Mandy Brocklehurst",
      "species": "human",
      "gender": "female",
      "house": "Ravenclaw",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Christina Petrou",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "f94086b8-03ae-4457-ba2c-e624d0980869",
      "name": "Lavender Brown",
      "species": "human",
      "gender": "female",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Kathleen Cauley",
      "alternate_actors": [
        "Jennifer Smith",
        "Jessie Cave"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "14aca981-2b60-413e-8f8e-3534961b534b",
      "name": "Millicent Bulstrode",
      "species": "human",
      "gender": "female",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Helen Stuart",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "34155375-c8c0-415e-873a-b6483f0cbf17",
      "name": "Justin Finch-Fletchley",
      "species": "human",
      "gender": "male",
      "house": "Hufflepuff",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "muggleborn",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Edward Randell",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "1413e1b3-2903-4a47-a2d5-e8abc5ce8014",
      "name": "Seamus Finnegan",
      "alternate_names": [
        "O'Flaherty"
      ],
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "half-blood",
      "eyeColour": "----------",
      "hairColour": "sandy",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Devon Murray",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "ec714982-e604-40d4-bd4c-dc5155506957",
      "name": "Morag MacDougal",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "e32dd37c-91cd-4950-8ef2-e2ba1b87bd75",
      "name": "Lily Moon",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "47aa7511-59b9-4760-9bd7-822a1103177b",
      "name": "Theodore Nott",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "2899e63f-ed02-4152-8ace-0270a068a70d",
      "name": "Pansy Parkinson",
      "species": "human",
      "gender": "female",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Genevieve Gaunt",
      "alternate_actors": [
        "Lauren Shotton",
        "Scarlett Byrne"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "0201cf73-8a86-4358-b232-2abaa23f09af",
      "name": "Parvati Patil",
      "species": "human",
      "gender": "female",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Sitara Shah",
      "alternate_actors": [
        "Shefali Chowdhury"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "69c18f6a-cd97-4218-9f2f-740393e6eb1f",
      "name": "Padma Patil",
      "species": "human",
      "gender": "female",
      "house": "Ravenclaw",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Sharon Sandhu",
      "alternate_actors": [
        "Afshan Azad"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "3d629315-1dbb-4e1e-840d-ffbf45bd5894",
      "name": "Sally-Anne Perks",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "eaea5eb3-48a3-41c6-9ea5-c695299bab16",
      "name": "Lisa Turpin",
      "species": "human",
      "gender": "female",
      "house": "Ravenclaw",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "1fab149b-52b1-4ffe-be52-4eda25d98f5d",
      "name": "Blaise Zabini",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Louis Cordice",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "11b5ca88-64ad-41a4-9f36-317b66c290af",
      "name": "Nearly Headless Nick",
      "alternate_names": [
        "Sir Nicholas de Mimsy-Porpington",
        "Sir Nicholas",
        "Nick"
      ],
      "species": "ghost",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "John Cleese",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "9a33fe44-b950-4877-a0cb-902a52c72e8b",
      "name": "Bloody Baron",
      "species": "ghost",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Terence Bayler",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "8392b326-31fd-43de-ad5c-0cfcf81b82ee",
      "name": "Fat Lady",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Elizabeth Spriggs",
      "alternate_actors": [
        "Dawn French"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "e8694719-a975-48fb-9523-f4cade1c38aa",
      "name": "Pomona Sprout",
      "alternate_names": [
        "Professor Sprout"
      ],
      "species": "human",
      "gender": "female",
      "house": "Hufflepuff",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "Miriam Margolyes",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "6ea188f3-d95c-407c-ab00-a0bec8678a71",
      "name": "Cuthbert Binns",
      "alternate_names": [
        "Professor Binns"
      ],
      "species": "ghost",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "c1f90a1e-33eb-4e60-8dac-15ea5855a996",
      "name": "Emeric the Evil",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "4cc138eb-6882-4b78-bf45-28f0041590fb",
      "name": "Uric the Oddball",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "a61e0783-7914-4f8d-a800-c409c06315cf",
      "name": "Filius Flitwick",
      "alternate_names": [
        "Professor Flitwick"
      ],
      "species": "human",
      "gender": "male",
      "house": "Ravenclaw",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "Warwick Davis",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "0a81c4f9-b80d-45a7-a4fd-9191453815a1",
      "name": "Madam Hooch",
      "alternate_names": [
        "Rolanda Hooch"
      ],
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "yellow",
      "hairColour": "grey",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "Zoë Wanamaker",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "09396e81-d317-499f-b330-25b90ba17d20",
      "name": "Oliver Wood",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Sean Biggerstaff",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "2ae8e574-9154-459c-b92e-4b0d1267e573",
      "name": "Gregory the Smarmy",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "0112e668-f94d-4d5f-8fa8-99c45280e9a8",
      "name": "Wizard Baruffio",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "b634f0a1-7b48-49b6-b039-27f947ee76fd",
      "name": "Angelina Johnson",
      "species": "human",
      "gender": "female",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Danielle Tabor",
      "alternate_actors": [
        "Tiana Benjamin"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "0e42ecbe-27b2-4940-9b03-00182a92c415",
      "name": "Marcus Flint",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Jamie Yeates",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "c29cd5f9-d2c3-4be9-ba1c-04169cdf511b",
      "name": "Alicia Spinet",
      "species": "human",
      "gender": "female",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Leilah Sutherland",
      "alternate_actors": [
        "Rochelle Douglas"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "2832bea8-7aad-4160-a748-442f5770d586",
      "name": "Katie Bell",
      "species": "human",
      "gender": "female",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Emily Dale",
      "alternate_actors": [
        "Georgina Leonidas"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "b78e6677-8bb4-4eb7-97cb-2f86677e27ea",
      "name": "Adrian Pucey",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Scot Fearn",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "c8aed011-ab8f-46df-9e8d-dde938256ea9",
      "name": "Miles Bletchley",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "David Churchyard",
      "alternate_actors": [
        "Amy Puglia"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "9ac09267-92ea-444a-a395-28f3b0f6fe6f",
      "name": "Terrence Higgs",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Will Theakston",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "40e0acaa-30cd-4923-8408-9a96a484e892",
      "name": "Fluffy",
      "species": "three-headed dog",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "b93b8e74-c283-4547-8a69-83ee51657f13",
      "name": "Nicolas Flamel",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Brontis Jodorowsky",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "f6901cd9-a7b2-49d0-af85-73678536b4df",
      "name": "Gellert Grindelwald",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "blue",
      "hairColour": "blond",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Jamie Campbell Bower",
      "alternate_actors": [
        "Michael Byrne",
        "Johnny Depp",
        "Mads Mikkelsen"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "5e4d5e25-5393-435b-81c8-556fa78af659",
      "name": "Norberta",
      "species": "dragon",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "orange",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "f94e870e-2c3b-4e17-adea-088660b6de78",
      "name": "Ronan",
      "species": "centaur",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "red",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "484d89aa-5d22-4d4d-9e07-4913cf8d4d20",
      "name": "Bane",
      "species": "centaur",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Jason Piper",
      "alternate_actors": [
        "Nuno Silva"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "68eb4a0b-6c49-44e9-aec8-5af947d22141",
      "name": "Firenze",
      "alternate_names": [
        "Professor Firenze"
      ],
      "species": "centaur",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "blue",
      "hairColour": "blond",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "Ray Fearon",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "c8f7f244-97ac-449e-922d-a30f063a1ad0",
      "name": "Elfrick the Eager",
      "species": "goblin",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "bd687632-3bec-4071-952d-c6cb813a41e7",
      "name": "Perenelle Flamel",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "4c1adea5-3421-49a9-8e3e-a3ff0fe7ce60",
      "name": "Bertie Bott",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "0d8ea37f-35c4-4c7d-9dd2-8ccd96b0a2b3",
      "name": "Dobby",
      "species": "house-elf",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "green",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Toby Jones",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "cd022893-b7ea-4bd8-a4fb-c9933c695813",
      "name": "Mr Mason",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Jim Norton",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "1c520134-9f75-48a9-b3c7-6c31ffa86178",
      "name": "Mrs Mason",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Veronica Clifford",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "e3f5217d-52b5-4d7b-9a40-faed18a98d3c",
      "name": "Perkins",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "white",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "fa09ab9d-9e65-4966-9d79-ea7c837348fb",
      "name": "Celestina Warbeck",
      "species": "human",
      "gender": "female",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "half-blood",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "larch",
        "core": "phoenix feather",
        "length": 10.5
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "3d687c4d-852e-470f-bac5-5a02758b1f8f",
      "name": "Gilderoy Lockhart",
      "alternate_names": [
        "Professor Lockhart"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "half-blood",
      "eyeColour": "blue",
      "hairColour": "blond",
      "wand": {
        "wood": "cherry",
        "core": "dragon heartstring",
        "length": 9
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "Kenneth Branagh",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "17bd1ab9-19bc-4796-8865-53e75e3b488d",
      "name": "Mundungus Fletcher",
      "alternate_names": [
        "Dung"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "ginger",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Andy Linden",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "d74336b1-cee5-4d25-a783-bf61dbb6c19a",
      "name": "Mr Borgin",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Edward Tudor-Pole",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "c9804c5b-943b-4710-8f95-0c3b40141007",
      "name": "Mr Granger",
      "alternate_names": [
        "Wendell Wilkins"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Tom Knight",
      "alternate_actors": [
        "Ian Kelly"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "895e355a-c017-4eba-bc72-dda0699c0b96",
      "name": "Mrs Granger",
      "alternate_names": [
        "Monica Wilkins"
      ],
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Heather Bleasdale",
      "alternate_actors": [
        "Michelle Fairley"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "c0f33c97-d01d-42ed-ae40-1a525f75bb01",
      "name": "Dr Filibuster",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "8e557e86-28d5-433f-8ac1-d2cecfeb8fb7",
      "name": "Colin Creevey",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "muggleborn",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Hugh Mitchell",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "8d885bd9-6103-424b-b884-c26720a64d94",
      "name": "Gladys Gudgeon",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "a4e18c27-077a-441a-b9a9-97ee9ba53224",
      "name": "Veronica Smethley",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "e938023d-ba03-402a-b6ff-ecadc0ff4dbb",
      "name": "Patrick Delaney-Podmore",
      "alternate_names": [
        "Sir Patrick Delaney-Podmore"
      ],
      "species": "ghost",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "8d018f5d-8370-41c8-8aa4-8b8a815ec801",
      "name": "Z. Nettles",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "50f9e638-fa69-4c97-ba2c-bfc7124b7818",
      "name": "D.J. Prod",
      "alternate_names": [
        "Demetrius J. Prod"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Chris Wilson",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "98a5a56d-91a6-4c32-b793-f97e83919bde",
      "name": "Elsie Prod",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "9969f803-6835-4871-80b3-7bb975c1ec06",
      "name": "Moaning Myrtle",
      "alternate_names": [
        "Myrtle Elizabeth Warren"
      ],
      "species": "ghost",
      "gender": "female",
      "house": "Ravenclaw",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "muggleborn",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Shirley Henderson",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "834d5f9b-cdd8-48ee-9efa-5e155422f6c2",
      "name": "Godric Gryffindor",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "575626ab-cf61-440e-88a0-db188abb1cbb",
      "name": "Rowena Ravenclaw",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "a7c7c44d-07e4-4257-860e-375f47338cb2",
      "name": "Helga Hufflepuff",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "20d331c9-cd3e-4dde-a480-6cc05cd26db7",
      "name": "Salazar Slytherin",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "cdec9b95-c7a5-4623-ad12-6fa76d168588",
      "name": "Madame Pince",
      "alternate_names": [
        "Irma Pince"
      ],
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "Sally Mortemore",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "ecca342d-d345-4fb3-8a85-ece848ab8938",
      "name": "Milicent Bullstroude",
      "species": "human",
      "gender": "female",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "black",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Helen Stuart",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "0c80d701-fa23-4126-9711-efe5f3c4789a",
      "name": "Ernie Macmillan",
      "alternate_names": [
        "Ernest Macmillan"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hufflepuff",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "blond",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus": "boar",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Louis Doyle",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "7cf58a76-8af2-4ebb-9264-ea0ac273eadc",
      "name": "Armando Dippet",
      "alternate_names": [
        "Professor Dippet"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "white",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Alfred Burke",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "42915280-ba56-4ab8-8b17-9511ba2ab093",
      "name": "Penelope Clearwater",
      "alternate_names": [
        "Penny"
      ],
      "species": "human",
      "gender": "female",
      "house": "Ravenclaw",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Gemma Padley",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "3ba61708-c5a2-4691-8c7a-9c0865575dba",
      "name": "Cornelius Fudge",
      "alternate_names": [
        "Minister Cornelius Oswald Fudge"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "grey",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Robert Hardy",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "a08aebd0-49fb-4d5d-b3db-52bf8f7ce594",
      "name": "Aragog",
      "species": "acromantula",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "white",
      "hairColour": "brown",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Julian Glover",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "82a29e30-1321-47b8-813f-2710f885b7d2",
      "name": "Mosag",
      "species": "acromantula",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "black",
      "hairColour": "brown",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "3f0fc32c-744b-4351-8542-58ed267e059b",
      "name": "Stanley Shunpike",
      "alternate_names": [
        "Stan"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Lee Ingleby",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "a62905eb-4965-44c7-baf0-0d8a2486f5b0",
      "name": "Ernest Prang",
      "alternate_names": [
        "Ernie"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Jimmy Gardner",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "cfce8b1b-64c9-4058-8e13-9b192b80d2ef",
      "name": "Madam Marsh",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "7673c196-9187-49ea-a3f0-7cebc079a15a",
      "name": "Florean Fortescue",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "c7121c73-1fce-4343-b823-a67f4ecfdef2",
      "name": "Sir Cadogan",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Paul Whitehouse",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "8ea29415-012d-4781-ba5f-d0de63a05abe",
      "name": "Sybill Trelawney",
      "alternate_names": [
        "Sybill Patricia Trelawney",
        "Professor Trelawney"
      ],
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "Emma Thompson",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "fa4f7f3a-947b-4bc1-bab2-c7a19c7c2c30",
      "name": "Buckbeak",
      "alternate_names": [
        "Beaky",
        "Witherwings"
      ],
      "species": "hippogriff",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "orange",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "1b6c8547-294a-40c0-892b-63a9511ca7d7",
      "name": "Peter Pettigrew",
      "alternate_names": [
        "Wormtail",
        "Scabbers",
        "Wormy"
      ],
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "chestnut",
        "core": "dragon heartstring",
        "length": 9.25
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Timothy Spall",
      "alternate_actors": [
        "Charles Hughes"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "113d2cd5-4d5c-4727-ae97-64a7dfc4423c",
      "name": "Madam Rosmerta",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Julie Christie",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "eb96189d-e2b6-4159-a357-c6cdf11f3631",
      "name": "Derek",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "58f2cf41-392c-4e84-b441-dbbce585f78d",
      "name": "Septima Vector",
      "alternate_names": [
        "Professor Vector"
      ],
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "c61b5c80-2c8e-404f-88ca-349a6344f35c",
      "name": "Cassius Warrington",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Ashley Hull",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "e7f4554e-8193-4b16-a40b-a8b38a0c3e57",
      "name": "Graham Montague",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "458828b3-82a5-4cad-a784-e23215825765",
      "name": "Peregrine Derrick",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "58a287c2-8c7a-485a-b095-8c6dcfc7f31d",
      "name": "Lucian Bole",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "f677db35-cef6-466f-a0e4-548d0a274ec5",
      "name": "Walden Macnair",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "black",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Peter Best",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "08aefb5c-2a7c-42e1-a6ac-7f150749aa2a",
      "name": "Franc Bryce",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Eric Sykes",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "da0c8c39-04e1-4899-b562-e69c21218e2a",
      "name": "Dot",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "8c3a1d16-83be-4904-b074-476f8cf72198",
      "name": "Bertha Jorkins",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "70d665a5-35c9-43a8-a2b0-ef20ddfc3770",
      "name": "Barty Crouch",
      "alternate_names": [
        "Bartemius Crouch Senior"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Roger Lloyd-Pack",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "13f1edc7-e2e2-4f3d-9637-f3e897a484b7",
      "name": "Ludo Bagman",
      "alternate_names": [
        "Ludovic Bagman"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "blue",
      "hairColour": "blond",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "d9294c96-bd7d-45d0-95e2-deaf71e09945",
      "name": "Amos Diggory",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "brown",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Jeff Rawle",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "2d25ada6-801e-4943-acca-adffc942820b",
      "name": "Mr Roberts",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "8f3f55ac-99d5-4a01-a0a3-f43ca5052596",
      "name": "Mr Payne",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "10460839-62ce-426b-b690-2c82f8c65869",
      "name": "Basil",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "941c0d0c-ec0d-4c32-af0d-bcf8af84d584",
      "name": "Archie Aymslowe",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "0c19c654-d363-42a1-bd8f-13bd35dad075",
      "name": "Cuthbert Mockridge",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "ca8a41e3-1f20-4c28-bc8a-b1831206edf5",
      "name": "Gilbert Wimple",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "6777feda-2318-4605-ba0e-1a6fd5fc2e7f",
      "name": "Arnold Peasegood",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "cb49285e-1dcb-413e-905b-2a883ac35ddc",
      "name": "Broderick Bode",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "391546f6-d357-43e1-8072-98a8548d4902",
      "name": "Saul Croaker",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "91142fb9-dc92-4f6f-8504-5498916f07a6",
      "name": "Ali Bashir",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "b7b18aa1-b5a0-4083-8142-cb3655bc2849",
      "name": "Victor Krum",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "dark",
      "hairColour": "dark",
      "wand": {
        "wood": "hornbeam",
        "core": "dragon heartstring",
        "length": 10.25
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Stanislav Ianevski",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "45d6db91-393e-40e0-8c04-43cb598fb9e5",
      "name": "Winky",
      "species": "house-elf",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "166ba5e0-ad04-4c7e-9850-6a21aede93c2",
      "name": "Narcissa Malfoy",
      "alternate_names": [
        "Cissy"
      ],
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "blue",
      "hairColour": "blonde",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Helen McCrory",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "110a6a98-78c5-420a-b9b6-d25af10ddc4e",
      "name": "Vasily Dimitrov",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "3e9461c1-4262-4beb-8c48-ca8a46a8859b",
      "name": "Clara Ivanova",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "6a094c72-e53b-4e21-adc3-8c54fb205c1d",
      "name": "Lev Zograf",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "5c913cb2-e964-4172-b8ce-a0550d2734df",
      "name": "Alexei Levski",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "5161ffa8-9c86-4500-9533-4c805eb69a61",
      "name": "Pyotr Vulchanov",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "a6a27c4f-9bbd-4bf9-89b2-f62171ae9a37",
      "name": "Ivan Volkov",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "29db34fe-8f85-4fc0-accf-642d025de301",
      "name": "Connolly",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "9fd63149-724d-4a80-9761-6db7394575c0",
      "name": "Barry Ryan",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "311850b1-2d4d-4e29-b115-9488cc554415",
      "name": "Troy",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "0bdbed6e-7690-4326-99cc-86de89dc4a58",
      "name": "Mullet",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "8b225672-8f2a-4a11-829b-3b42d082aff0",
      "name": "Moran",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "2bbc36f9-914c-45c7-b61e-1003f2ac728f",
      "name": "Quigley",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "559719e0-c54d-4589-8485-2dc865581001",
      "name": "Aidan Lynch",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "53ed1c30-a5dc-4b1b-aa0d-3da881b0ddc2",
      "name": "Hassan Mostafa",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "a93b80a0-987d-4148-944d-16043df95e8c",
      "name": "Dennis Creevey",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "muggleborn",
      "eyeColour": "----------",
      "hairColour": "brown",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "99d3ce6b-6a45-495a-a7c6-132203697d45",
      "name": "Aurora Sinistra",
      "alternate_names": [
        "Professor Sinistra"
      ],
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "05bd5fd1-f347-45e6-8ec0-59b7f11c2aec",
      "name": "Stewart Ackerley",
      "species": "human",
      "gender": "male",
      "house": "Ravenclaw",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "2f8db183-e935-4b91-884f-fb9effe42ab8",
      "name": "Malcolm Baddock",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "29adbbf0-417a-4c97-8467-adb5341f75e5",
      "name": "Eleanor Branstone",
      "species": "human",
      "gender": "female",
      "house": "Hufflepuff",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "98546bab-8d5b-4627-95f6-38e306d58a91",
      "name": "Owen Cauldwell",
      "species": "human",
      "gender": "male",
      "house": "Hufflepuff",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "cf3707ad-e816-4b54-90d0-403800a06ecd",
      "name": "Emma Dobbs",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "ae068570-8419-4063-bf61-ba4a0ef41fe3",
      "name": "Laura Madley",
      "species": "human",
      "gender": "female",
      "house": "Hufflepuff",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "48880498-3903-4914-bd11-ec650d803199",
      "name": "Natalie McDonald",
      "species": "human",
      "gender": "female",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "a506574f-c8cf-46c6-a8ac-2f805c25e49e",
      "name": "Graham Pritchard",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "b01be346-290b-4f65-9c88-a49922e116ee",
      "name": "Orla Quirke",
      "species": "human",
      "gender": "female",
      "house": "Ravenclaw",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "4eef1e03-cf1c-4441-9119-a6e47a61f880",
      "name": "Kevin Whitby",
      "species": "human",
      "gender": "male",
      "house": "Hufflepuff",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "13a54f8a-7f68-4add-a1b4-49f60c8e7bcc",
      "name": "Eloise Midgen",
      "species": "human",
      "gender": "female",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Samantha Clinch",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "41ebe856-f0f4-4c77-8795-4735d3a87f3d",
      "name": "Alastor Moody",
      "alternate_names": [
        "Professor Moody",
        "Mad-Eye"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "dark",
      "hairColour": "grey",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "Brendan Gleeson",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "b4dbc2d2-afde-40ec-a622-b1ffa6aaca4d",
      "name": "Madame Maxime",
      "alternate_names": [
        "Olympe Maxime"
      ],
      "species": "half-giant",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Frances de la Tour",
      "alternate_actors": [
        "Ian Whyte"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "72239274-a060-4fd5-bff2-7d4a01d31969",
      "name": "Igor Karkaroff",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "blue",
      "hairColour": "silver",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Predrag Bjelac",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "2ec7c04f-2aac-47e8-9f9c-2360b2884ac2",
      "name": "Poliakoff",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "6045a853-10f3-4d6d-a29d-b76c5972f264",
      "name": "Fawcett",
      "species": "human",
      "gender": "female",
      "house": "Ravenclaw",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Alex Argenti",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "0a6a1c41-793f-419c-a133-be6ac7d80ab6",
      "name": "Summers",
      "species": "human",
      "gender": "male",
      "house": "Hufflepuff",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "f1beae08-3bec-4978-89e9-4ecda4ec7514",
      "name": "Fleur Delacour",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "blue",
      "hairColour": "blonde",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Clémence Poésy",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "d254b20b-37a6-4468-bec9-6069754edaf2",
      "name": "Gregorovic",
      "alternate_names": [
        "Mykew Gregorovitch"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "white",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Rade Šerbedžija",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "2844e38c-ded3-47e7-8de2-381d1e3581fc",
      "name": "Rita Skeeter",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "blonde",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Miranda Richardson",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "f4b817be-f0c1-457d-8ec4-1716652d0c06",
      "name": "Stebbins",
      "species": "human",
      "gender": "male",
      "house": "Ravenclaw",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "b48c5b8a-4066-4c24-ba26-7677f5ed2b6f",
      "name": "Wilhelmina Grubbly-Plank",
      "alternate_names": [
        "Professor Grubbly-Plank"
      ],
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "grey",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "Apple Brook",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "8ace1b0d-b058-4e44-994b-8dc2aa3427a5",
      "name": "Bozo",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Peter O'Farrell",
      "alternate_actors": [
        "Robert Wilfort"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "4a2339cf-de3d-4e3c-899e-59d0a4c7606f",
      "name": "Evan Rosier",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "d4a0a760-a318-4c62-a110-6533c28c57ba",
      "name": "Wilkes",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "30d850c1-637b-41d7-a57a-e97b81216858",
      "name": "Avery",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Richard Rosson",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "de6c8669-ce5b-4b03-b2f4-e8ea20742a58",
      "name": "Antonin Dolohov",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "dark",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Arben Bajraktaraj",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "6a7090ae-b6ab-49a0-bd19-e24acb219426",
      "name": "Travers",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "grey",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Tav MacDougall",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "f012a686-0aa8-47f6-96e3-0cf1577cad18",
      "name": "Marlene McKinnon",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "070e077a-2b02-44c0-80c1-f63817ee4a33",
      "name": "Mulciber",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "dd3b2fbe-e9f2-4069-b881-9c31040ed9ae",
      "name": "Augustus Rookwood",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Richard Trinder",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "d0d1b648-4e97-4fd0-9045-b721b6ef18d4",
      "name": "Frank Longbottom",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "James Payton",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "27a51041-06a0-4f86-adb1-983ebfac708a",
      "name": "Alice Longbottom",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "white",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Lisa Wood ",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "87f71cce-7a3d-498c-8a0b-ff90f96cb820",
      "name": "Violet",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "f59b1911-61ed-495a-8746-31b215a447f1",
      "name": "Apollyon Pringle",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "47fa1849-f127-47ba-8248-656f9b569e3f",
      "name": "Ogg",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "d1d4f6bb-be3c-4bf7-8f6b-824f4e3fa255",
      "name": "Mafalda Hopkirk",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "hazel",
      "hairColour": "grey",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Jessica Hynes",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "99370b33-d5a7-465b-91b1-55ef2a40182b",
      "name": "Nymphadora Tonks",
      "alternate_names": [
        "Dora",
        "Nymphadora Lupin"
      ],
      "species": "human",
      "gender": "female",
      "house": "Hufflepuff",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "brown",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Natalia Tena",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "1bb1f2d3-a22d-4f88-b26b-75e18a805ae8",
      "name": "Elphias Doge",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "blue",
      "hairColour": "silver",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Peter Cartwright",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "9a2979bd-0325-4316-bc71-ec4cfe673dca",
      "name": "Dedalus Diggle",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "David Brett",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "3f335cbf-3706-4b21-bf2e-bce7d0126f8f",
      "name": "Sturgis Podmore",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "blond",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "5c87063c-ad61-4e65-8b2e-5fb69fc39c4e",
      "name": "Hestia Jones",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "black",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "c9c3927e-9858-477f-8847-db5d62841ab6",
      "name": "Ragnok",
      "species": "goblin",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "a64df82a-1131-46cb-ae94-659dadec66e5",
      "name": "Alphard Black",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "214bcbd0-a50a-42be-a25a-22f6eac5b8db",
      "name": "Regulus Black",
      "alternate_names": [
        "Regulus Arcturus Black"
      ],
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "black",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Tom Moorcroft",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "3dfc2e91-ec32-4e50-bc7a-eda089fbed0d",
      "name": "Phineas Nigelus Black",
      "alternate_names": [
        "Professor Phineas Nigellus Black"
      ],
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "John Atterbury",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "ac403614-3872-4bef-b92f-efb4aeb8874b",
      "name": "Araminta Meliflua Black",
      "species": "human",
      "gender": "female",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "8475e091-e150-44de-9d83-1d524cfed5c5",
      "name": "Elladora Black",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "d08ba2a1-2104-4719-89ec-4aab5d9b9072",
      "name": "Andromeda Tonks",
      "species": "human",
      "gender": "female",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "brown",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "78a85508-8396-4977-a837-87842f603be0",
      "name": "Ted Tonks",
      "alternate_names": [
        "Edward"
      ],
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "muggleborn",
      "eyeColour": "----------",
      "hairColour": "blond",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "3cf024f3-d956-4b86-8d4d-944c79bc6fe7",
      "name": "Rodolphus Lestrange",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "874673a2-68e7-45b4-afbc-5520bb62af63",
      "name": "Rabastan Lestrange",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "d072aa84-ec4d-4c2f-a0a1-8831e1f6396a",
      "name": "Eric Munch",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "23821246-7a7a-45e5-82ce-2ed3589da4f3",
      "name": "Bob",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Nicholas Blane",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "4a0e91eb-ea6e-409d-b6f2-56f2155d05c9",
      "name": "Bengie Fenwick",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "028f862b-129d-43bf-b371-b1fefd82365c",
      "name": "Edgar Bones",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Cliff Lanning",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "87484ff7-777d-4fe3-88aa-f756c17fe4a2",
      "name": "Amelia Bones",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "grey",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Sian Thomas",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "b48eacb4-6c52-4293-98a5-6433bde351c2",
      "name": "Caradoc Dearborn",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "2d4cc5cf-836f-4379-82e0-fca4e766ca70",
      "name": "Gideon Prewett",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "a44923d3-776d-478b-af9c-3b2efc1e1360",
      "name": "Fabian Prewett",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "94c993f6-a443-4408-b908-6e78e223e8ac",
      "name": "Aberforth Dumbledore",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "half-blood",
      "eyeColour": "blue",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus": "goat",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Jim McManus",
      "alternate_actors": [
        "Ciarán Hinds"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "6f2c7ab3-db2c-454c-9f34-b8614b9779f8",
      "name": "Dorcas Meadowes",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "b1725aa9-117b-4e47-b749-9a7a8e1fafa0",
      "name": "Algie Longbottom",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "61b6d68e-4128-408c-9f71-9ef167cb0e69",
      "name": "Anthony Goldstein",
      "species": "human",
      "gender": "male",
      "house": "Ravenclaw",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "2b846267-2df3-4e13-8219-712d92dda9c1",
      "name": "Doris Purkiss",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "a01f6dbb-bad5-426b-a7df-f9613fa1021d",
      "name": "Euan Abercrombie",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "e65c8acb-0dfc-4f15-bcf8-d32b78811093",
      "name": "Rose Zeller",
      "species": "human",
      "gender": "female",
      "house": "Hufflepuff",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "fd142190-f1d7-4ce2-bdb3-6ed6b3edc020",
      "name": "Patricia Stimpson",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "26bd4437-73fa-4865-afdd-2fc1456f4592",
      "name": "Kenneth Towler",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "bff82738-5bb0-4edc-9cec-f80d1af4801f",
      "name": "Vicky Frobisher",
      "species": "human",
      "gender": "female",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "88886e27-9ce2-416f-9dd6-56d4cd94a4fb",
      "name": "Geoffrey Hooper",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "57ce2ac3-2cea-4e76-9b2d-7d294f593d4a",
      "name": "Cassandra Trelawney",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "cb263aed-289b-43ad-8647-db54b8a5fc92",
      "name": "Michael Corner",
      "species": "human",
      "gender": "male",
      "house": "Ravenclaw",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Ryan Nelson",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "6fa93583-b935-4228-91e0-729e6713bdab",
      "name": "Zacharias Smith",
      "species": "human",
      "gender": "male",
      "house": "Ravenclaw",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "blond",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Nick Shirm",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "781f1061-5413-40c7-8a35-b078e2e969b1",
      "name": "Barnabas the Barmy",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "ff0c4625-be03-4815-b7cf-241e496b0593",
      "name": "Karkus",
      "species": "giant",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "ab86f41a-3eeb-4586-95d8-b59fbdfc6bb7",
      "name": "Golgomath",
      "species": "giant",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "41a7eedf-f856-48e0-b9fd-69cfccaf8835",
      "name": "Fridwulfa",
      "species": "giant",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "d9cec110-a1d0-4437-9a55-dced475dfe6d",
      "name": "Andrew Kirke",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "575fbbc2-ac94-4c58-92f6-e5d75846da91",
      "name": "Jack Sloper",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "b45f28ff-29de-4149-8380-739db0e6855a",
      "name": "Everard",
      "alternate_names": [
        "Professor Everard"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "black",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Sam Beazley",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "4de07608-5dd6-451d-9efc-ccceefb9a2f6",
      "name": "Dilys Derwent",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "silver",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "828aa47a-faa2-4481-b80d-14a4c7dd76ff",
      "name": "Hippocrates Smethwyck",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "8d3fc7e7-c313-4b66-bfd9-f9c8746520e3",
      "name": "Augustus Pye",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "5d9f5681-8f09-4c69-bc31-44b97b06811e",
      "name": "Urquhart Rackharrow",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "d878d27d-eef8-47de-9f01-9260d8c2290b",
      "name": "Willy Widdershins",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "b1d8360e-333f-43e8-a0bb-b26217a0d91c",
      "name": "Agnes",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "00434cd3-fcc7-44c7-8f98-7368415b4206",
      "name": "Miriam Strout",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "bc9b5ca3-632f-4fbf-a188-23c5da3cb31c",
      "name": "Madam Puddifoot",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "black",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "6e74bd51-c1c0-4db0-b821-3570a62912f5",
      "name": "Summerby",
      "species": "human",
      "gender": "male",
      "house": "Hufflepuff",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "4a0f4c3b-14dc-4a9e-a2f8-da23734f5d34",
      "name": "Marietta Edgecombe",
      "species": "human",
      "gender": "female",
      "house": "Ravenclaw",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "blonde",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "4ecfda07-0e35-4afe-86d8-d48b979e13a7",
      "name": "Madam Edgecombe",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "7d87a1aa-ea29-4ddd-8831-67113735b470",
      "name": "John Dawlish",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "grey",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Richard Leaf",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "3a989b9d-a9a3-41fb-8246-35becfb0c7ad",
      "name": "Bradley",
      "species": "human",
      "gender": "male",
      "house": "Ravenclaw",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "0a13bf8e-a763-44cc-ac76-c6c53a639809",
      "name": "Roger Davies",
      "species": "human",
      "gender": "male",
      "house": "Ravenclaw",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Henry Lloyd-Hughes",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "b91bfd22-05cd-4209-970c-dc56c463e9df",
      "name": "Grawp",
      "species": "giant",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "green",
      "hairColour": "brown",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Tony Maudsley",
      "alternate_actors": [
        "William Todd-Jones"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "b04e0987-7e90-4492-a6b4-4974468e3a2e",
      "name": "Griselda Marchbanks",
      "alternate_names": [
        "Madam Professor Griselda Marchbanks"
      ],
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "a3e5ea64-b103-4f47-bc26-dc08b799c668",
      "name": "Eddie Carmichael",
      "species": "human",
      "gender": "male",
      "house": "Ravenclaw",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "7772cb4e-5c33-405a-970d-c05cae167917",
      "name": "Daphne Greengrass",
      "species": "human",
      "gender": "female",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "e8066a6a-33f3-4650-a8b1-72d4315989dd",
      "name": "Tofty",
      "alternate_names": [
        "Professor Tofty"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "brown",
      "hairColour": "grey",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "91097f7f-1dd7-42cb-9f53-003c9c4ea0db",
      "name": "Tiberius Ogden",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "1984a8cd-eeb1-4c2c-b4a0-6574219a1b1f",
      "name": "Pierre Bonaccord",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "0f3b4e5e-89e4-42f5-ab00-958ec3895965",
      "name": "Stubby Boardman",
      "alternate_names": [
        "Sirius Black"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "4adb7764-5292-4b1d-988b-45aa2f9aa7bc",
      "name": "Magorian",
      "species": "centaur",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "black",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Michael Wildman",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "2cd07351-973b-4feb-8b02-7bfa5b8b63cd",
      "name": "Emmeline Vance",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Brigitte Millar",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "c6176f66-ad40-4d0d-9a35-76e2b58c7c23",
      "name": "Herbert Chorley",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "2859f35c-8c47-4a8e-8649-61499a9352df",
      "name": "Rufus Scrimgeour",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "yellowish",
      "hairColour": "tawny",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Bill Nighy",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "fed82306-e03c-48ed-b3f5-06de7af38bc8",
      "name": "Corban Yaxley",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "blue",
      "hairColour": "blond",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Peter Mullan",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "f3c96d16-e0de-4417-9052-5259e6a8e781",
      "name": "Fenrir Greyback",
      "species": "werewolf",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "grey",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Dave Legeno",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "1d4c4ebb-84cb-4e32-92d2-28232448675c",
      "name": "Dirk Cresswell",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "muggleborn",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "2143bf7c-8f8e-46f1-8860-b9a9558a4f8f",
      "name": "Barnabas Cuffe",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Roger C. Bailey",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "39357ad1-ae41-4a2c-b24f-77e7296db059",
      "name": "Ambrosius Flume",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "bald",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "3314a65a-47c8-4ae5-8c60-15bfb25a5a0f",
      "name": "Gwenog Jones",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "brown",
      "hairColour": "brown",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "451602b0-74e6-4481-b7b1-443c9280c82d",
      "name": "Arkie Philpott",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "46375e59-a782-4e43-bb7f-82560a5dd146",
      "name": "Verity",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "blonde",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "6c4350a9-2356-4bba-96bd-0458c12d99b5",
      "name": "Romilda Vane",
      "species": "human",
      "gender": "female",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "dark",
      "hairColour": "black",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Anna Shaffer",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "341e65d4-6917-48d7-80b2-1f9af607e95a",
      "name": "Cormac McLaggen",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Freddie Stroma",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "938559ee-e8e5-4963-8437-e7da04fd1b31",
      "name": "Marcus Belby",
      "species": "human",
      "gender": "male",
      "house": "Ravenclaw",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Robert Knox",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "af3601a7-61c8-43ba-a685-a9c9d7b76de4",
      "name": "Damocles Belby",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "b44d83d7-8850-4fe7-b246-2335322a46f1",
      "name": "Tiberius",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "cbb7e8e0-c8f7-4a3f-befc-b288e1c385d4",
      "name": "Bertie Higgs",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "3ba97e84-9fbb-49a6-b084-0924e811e712",
      "name": "Proudfoot",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "44551b41-9742-40ad-b327-15227ef615c4",
      "name": "Savage",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "f8c5cdbf-a6e9-431b-85a4-9d6dd2fa09dd",
      "name": "Humphrey Belcher",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "6821f44c-d662-4a57-9236-0a0b289e14ac",
      "name": "Bob Ogden",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "ee7b0dfb-b639-46f1-9364-7644a103a9a3",
      "name": "Morfin Gaunt",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "dark",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "0607b07a-d58a-47c7-8845-32476298e9ef",
      "name": "Marvolo Gaunt",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "brown",
      "hairColour": "grey",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "23d32b4f-189e-4704-918c-73e733293bcd",
      "name": "Merope Gaunt",
      "alternate_names": [
        "Merope Riddle"
      ],
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "dull",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "b1189355-fe8a-49c5-9a37-3312ef7caecf",
      "name": "Cecilia",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "3a0fe4df-2e40-4541-8d7f-13586f0b9294",
      "name": "Tom Riddle",
      "alternate_names": [
        "Tom Riddle Senior"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "dark",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "0e53860c-7679-49e4-891e-fb92286f0e5b",
      "name": "Demelza Robins",
      "species": "human",
      "gender": "female",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Katy Huxley-Golden",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "28e9fe6b-3ca5-41ca-8a14-b995e0fb398b",
      "name": "Jimmy Peakes",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "c74b1fae-4793-4b47-bec2-ee652beabce2",
      "name": "Ritchie Coote",
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Ashley Virgil",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "9ba0ca6e-4fba-410d-9b5e-e20694dde413",
      "name": "Melinda Bobbin",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "a4cbbe42-e30c-44b6-81c2-4690900a9a91",
      "name": "Leanne",
      "species": "human",
      "gender": "female",
      "house": "Hufflepuff",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Isabella Laughland",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "e0656ac4-fa6d-419b-a798-ce98ccb1e5dd",
      "name": "Caractacus Burke",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "345e02fa-cb14-4269-be4b-8c50090f42fb",
      "name": "Billy Stubbs",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "f4c61a83-8f9a-4e66-873f-2e7375d6d309",
      "name": "Amy Benson",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "36f0ca66-b700-4ed6-9cc3-884941f3dfab",
      "name": "Dennis Bishop",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "39c01cd4-c599-4eb2-86be-86c3b5e38aee",
      "name": "Mrs Cole",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Amelda Brown",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "a224e504-8a52-4e25-82fc-22cc121180e9",
      "name": "Eric Whalley",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "muggle",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "215330e2-953c-4ed1-996c-d813f752c02d",
      "name": "Vaisey",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "dark",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "56bc7e56-740f-4140-85f4-dc591e66a322",
      "name": "Harper",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "31749f52-77fa-4a73-be32-398ba74237f9",
      "name": "Urquhart",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "0d3d2a06-54dd-4f0a-80b5-a4b9e7f651b1",
      "name": "Eldred Worple",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Paul Ritter",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "c86421d3-d5a1-4ab3-a980-1ba6bca5e572",
      "name": "Sangwini",
      "species": "vampire",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "dark",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Charlie Bennison",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "cc511b1e-0f11-4b83-80a7-5862cf0ef145",
      "name": "Gawain Robards",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "0a0dfd61-c500-4a02-ad56-b7ab4f4a9371",
      "name": "Fergus",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "dfc535e3-c367-4d6c-b026-a3ae450c7c1b",
      "name": "Wilkie Twycross",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "ff9a7a10-34b8-4b62-bab8-66aee1f4141b",
      "name": "Cadwallader",
      "species": "human",
      "gender": "male",
      "house": "Hufflepuff",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "c4e73590-3ee2-4125-87fb-692dd991819b",
      "name": "Galatea Merrythought",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "92956011-c3f9-4537-80a7-798ec6065f98",
      "name": "Hepzibah Smith",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "096825a1-4e83-4744-8186-a83139d387c1",
      "name": "Hokey",
      "species": "house-elf",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "9cd332eb-9f6c-4c03-8c66-9dd04bb23dd4",
      "name": "Octavius Pepper",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "58cfdca2-6068-4474-ad37-5e12a1b50671",
      "name": "Bertram Aubrey",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "ceb72b66-cef4-4578-a48b-5e613fcbd276",
      "name": "Eileen Prince",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "5d20ece0-e872-453b-8f9a-bee8b704f7c7",
      "name": "Amycus Carrow",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Ralph Ineson",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "88c30ceb-c607-49bc-b6c9-85365aee9e8c",
      "name": "Alecto Carrow",
      "species": "human",
      "gender": "female",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Suzie Toase",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "e12104b2-a1e1-4d62-8c83-9ada5c95eb9f",
      "name": "Gibbon",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "85fc2ddf-c149-4bae-a987-2a6924960ffa",
      "name": "Tobias Snape",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "81ff4efd-b2e3-45db-8be8-08a5bc4f195a",
      "name": "Pius Thicknesse",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "black",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Guy Henry",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "61d78dce-890b-4f02-844f-b41d66553802",
      "name": "Charity Burbage",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": true,
      "actor": "Carolyn Pickles",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "4a45f7ae-518b-4e9a-bf6e-cb9134d29afc",
      "name": "Percival Dumbledore",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "5a4c95db-947d-4914-a631-41e8d466328e",
      "name": "Kendra Dumbledore",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "muggleborn",
      "eyeColour": "dark",
      "hairColour": "black",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "a3cf6943-d402-41d4-b98e-3c4a444b828d",
      "name": "Ariana Dumbledore",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "half-blood",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Hebe Beardsall",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "5cd214c9-7822-47e0-b41d-01939ade77e7",
      "name": "Betty Braithwaite",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "acff45a0-33e5-4d19-ad9b-4e522e5edaab",
      "name": "Apolline Delacour",
      "species": "half-human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "half-veela",
      "eyeColour": "----------",
      "hairColour": "blonde",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "5293240e-c512-4cdb-89b0-cb21ef8b04fb",
      "name": "Gabrielle Delacour",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "quarter-veela",
      "eyeColour": "----------",
      "hairColour": "blonde",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Angelica Mandy",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "bd9f49ef-452e-4c22-84c8-ab76da9f0003",
      "name": "Monsieur Delacour",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "black",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "4848cf4f-27ac-42d3-8e49-f63515c92c37",
      "name": "Dragomir Gorgovitch",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "d1e8ddf1-cfc7-404a-bffe-f4ac6c656ead",
      "name": "Xenophilius Lovegood",
      "species": "human",
      "gender": "male",
      "house": "Ravenclaw",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "white",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Rhys Ifans",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "f7457448-8382-4e5e-b72a-0044fc6f8958",
      "name": "Muriel",
      "alternate_names": [
        "Aunt Muriel"
      ],
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "grey",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Matyelok Gibbs",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "cf903d42-5d51-44b0-b362-adc57e626885",
      "name": "Bilius",
      "alternate_names": [
        "Uncle Bilius"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "753ffe5f-19a8-41c9-b264-289766c8a4be",
      "name": "Thorfinn Rowle",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "blond",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Rod Hunt",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "d4eee96d-c53f-4e6f-8a95-c97d42343833",
      "name": "Reg Cattermole",
      "alternate_names": [
        "Reginald Cattermole"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Steffan Rhodri",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "22ed3c3e-c30c-4e79-a93d-fdfe470c8090",
      "name": "Albert Runcorn",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "black",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "David O'Hara",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "daea26d1-895d-4c29-8225-4d1ec2607cf0",
      "name": "Arkie Alderton",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "e96dc731-5217-4c83-b173-248e1c70b5e7",
      "name": "Mary Cattermole",
      "alternate_names": [
        "Mary Elizabeth Cattermole"
      ],
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "muggleborn",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "cherry",
        "core": "unicorn hair",
        "length": 8.75
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Kate Fleetwood",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "5f70c4d0-981e-4dab-993d-5af0aa6bbcd5",
      "name": "Maisie Cattermole",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "0aabac0a-9212-4cad-9c42-d54886feb351",
      "name": "Ellie Cattermole",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "064733fb-bd1c-4b15-8fdd-2b3100b34f0b",
      "name": "Alfred Cattermole",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "0f5bc3a8-566d-443e-a49a-8e0616fb8dec",
      "name": "Gornuk",
      "species": "goblin",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "ede100e7-c8d8-42bb-8d39-ed41c92979c8",
      "name": "Bowman Wright",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "151f886b-2fcf-4010-9e6f-8621e616a2c4",
      "name": "Ivor Dillonsby",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "38aa76a6-d1d9-4ef5-9e67-573fe4fa916e",
      "name": "Enid Smeek",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "8e0715f3-1b16-44b7-862d-bcdea99e7ba6",
      "name": "Egbert the Egregious",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "d9175f7a-9e92-45fc-8207-b31b5a69c8e6",
      "name": "Godelot",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "6af6d07a-692a-42d6-80ab-dec3cef84269",
      "name": "Hereward",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "63b292fd-d297-4bb3-95d2-51a88a46891b",
      "name": "Loxias",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "c86e0027-dd93-4ddd-bec3-a1b832fd27f1",
      "name": "Barnabas Deverill",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "3535214c-9814-42c1-95d1-2e1db92d2a47",
      "name": "Arcus",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "b336a6be-7954-420e-8e05-95945ad1d727",
      "name": "Livius",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "14505ff9-e2d8-4a27-bc85-c8d8dfb2ca33",
      "name": "Antioch Peverell",
      "alternate_names": [
        "First Brother"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "9a8b9fcd-6610-4e24-a5c6-bec1aa50fadd",
      "name": "Cadmus Peverell",
      "alternate_names": [
        "Second Brother"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "461bddf4-cc9d-4737-b1a2-703c06b771a6",
      "name": "Ignotus Peverell",
      "alternate_names": [
        "Third Brother"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "a8dc2688-e8a2-4d50-ac06-5cd324becb5b",
      "name": "Selwyn",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "1d6d87f8-6561-4e27-b77d-247067d3a7cc",
      "name": "Scabior",
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Nick Moran",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "b3c7de0a-fc23-4dd5-94d2-27e906c45fb7",
      "name": "Ragnuk the First",
      "alternate_names": [
        "King Ragnuk the First"
      ],
      "species": "goblin",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "7d7968e6-ef05-4192-87d5-99ebd1e54d0b",
      "name": "Ted Lupin",
      "alternate_names": [
        "Edward Remus Teddy Lupin"
      ],
      "species": "human",
      "gender": "male",
      "house": "Hufflepuff",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "half-blood",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Luke Newberry",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "cae8556b-eea7-4e5a-b6a3-29d685421bfa",
      "name": "Marius",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "a2c4fbb5-af04-45a4-9a1e-b39f9bb479c8",
      "name": "Bogrod",
      "species": "goblin",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": false,
      "ancestry": "----------",
      "eyeColour": "black",
      "hairColour": "white",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Jon Key",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "2d9fd582-0be6-4f11-98f5-3358ad14b973",
      "name": "The Grey Lady",
      "alternate_names": [
        "Helena Ravenclaw"
      ],
      "species": "ghost",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Nina Young",
      "alternate_actors": [
        "Kelly Macdonald"
      ],
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "2550709a-d94b-4794-bb5f-a8d6ba546011",
      "name": "Dexter Fortescue",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "6025d951-2638-4827-baff-aa5db5017a4a",
      "name": "Lily Potter",
      "alternate_names": [
        "Lily Luna Potter"
      ],
      "species": "human",
      "gender": "female",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "half-blood",
      "eyeColour": "----------",
      "hairColour": "red",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": false,
      "hogwartsStaff": false,
      "actor": "Daphne de Beistegui",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "9c8ce8c7-ae0a-4646-920f-09c071862f10",
      "name": "James Potter",
      "alternate_names": [
        "James Sirius Potter"
      ],
      "species": "human",
      "gender": "male",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "half-blood",
      "eyeColour": "----------",
      "hairColour": "----------",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Will Dunn",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "dcdc063e-cf3e-48fc-b777-65922e899b38",
      "name": "Albus Severus Potter",
      "alternate_names": [
        "Al"
      ],
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "half-blood",
      "eyeColour": "green",
      "hairColour": "black",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Arthur Bowen",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "e4653b01-76a5-4769-a6a2-1f2efaf89cbb",
      "name": "Rose Weasley",
      "species": "human",
      "gender": "female",
      "house": "Gryffindor",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "half-blood",
      "eyeColour": "----------",
      "hairColour": "red",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Helena Barlow",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "2b203c7e-7b3d-4f27-8b3c-11473904da73",
      "name": "Hugo Weasley",
      "species": "human",
      "gender": "male",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "half-blood",
      "eyeColour": "----------",
      "hairColour": "brown",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Ryan Turner",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "7f2f6207-8998-4f98-92c2-8d02898a82eb",
      "name": "Scorpius Malfoy",
      "alternate_names": [
        "Scorpius Hyperion Malfoy"
      ],
      "species": "human",
      "gender": "male",
      "house": "Slytherin",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "pure-blood",
      "eyeColour": "grey",
      "hairColour": "blond",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "Bertie Gilbert",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    },
    {
      "id": "57fe29d4-312a-4711-bd9a-c320253d9176",
      "name": "Victoire Weasley",
      "species": "human",
      "gender": "female",
      "house": "Hogwarts",
      "dateOfBirth": "----------",
      "yearOfBirth": null,
      "wizard": true,
      "ancestry": "----------",
      "eyeColour": "----------",
      "hairColour": "blonde",
      "wand": {
        "wood": "----------",
        "core": "----------",
        "length": "----------",
      },
      "patronus":"----------",
      "hogwartsStudent": true,
      "hogwartsStaff": false,
      "actor": "----------",
    
      
      "image": "https://static.wikia.nocookie.net/harrypotter/images"
    }
]


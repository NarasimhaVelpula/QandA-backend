const Question = require('./Questions')

entries = [
  {
    "category": "Science",
    "id": "622a1c3a7cc59eab6f951096",
    "correctAnswer": "Lava",
    "incorrectAnswers": [
      "Ash",
      "Ignea",
      "Pertrite"
    ],
    "question": "The molten material from a volcano is ________",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c377cc59eab6f950467",
    "correctAnswer": "viruses",
    "incorrectAnswers": [
      "the structure, development, and abnormalities of the teeth",
      "parasites",
      "the therapeutic use of plants"
    ],
    "question": "What is Virology the study of?",
    "tags": [
      "words",
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c377cc59eab6f950577",
    "correctAnswer": "the cosmos or our place in it",
    "incorrectAnswers": [
      "study of the mouth and its diseases",
      "beetles",
      "flags"
    ],
    "question": "What is Cosmology the study of?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c3a7cc59eab6f9510e0",
    "correctAnswer": "Pediatrician",
    "incorrectAnswers": [
      "Physician",
      "Oncologist",
      "Gynaecologist"
    ],
    "question": "A doctor who specializes in infants, children and young people is called a ______",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c3c7cc59eab6f951958",
    "correctAnswer": "Hubble",
    "incorrectAnswers": [
      "Bubble",
      "Toil",
      "Trouble"
    ],
    "question": "What is the name of the space telescope that was placed in Earth's orbit in 1990?",
    "tags": [
      "physics",
      "astronomy",
      "events",
      "1990's",
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c377cc59eab6f95048d",
    "correctAnswer": "snakes",
    "incorrectAnswers": [
      "disease classification",
      "prehistoric metaphytes ",
      "society"
    ],
    "question": "What is Serpentology the study of?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "6243334acfaae40c129613d1",
    "correctAnswer": "A Sow",
    "incorrectAnswers": [
      "A Tigeress",
      "A Gander",
      "A Vixen"
    ],
    "question": "What would you call a female boar?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c377cc59eab6f95053a",
    "correctAnswer": "cats",
    "incorrectAnswers": [
      "oceans",
      "the lymph system and glands",
      "angels"
    ],
    "question": "What is Felinology the study of?",
    "tags": [],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c377cc59eab6f950550",
    "correctAnswer": "embryos",
    "incorrectAnswers": [
      "the derivation of a persons character traits, by studying the shape of their skull",
      "ants",
      "spiders and their kind"
    ],
    "question": "What is Embryology the study of?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c377cc59eab6f95058e",
    "correctAnswer": "bacteria",
    "incorrectAnswers": [
      "vibrations and oscillations in the Sun",
      "present-day landforms, traditionally on Earth but with increasing frequency on nearby planetary objects",
      "the physiological bases of psychological processes"
    ],
    "question": "What is Bacteriology the study of?",
    "tags": [
      "words",
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c377cc59eab6f950566",
    "correctAnswer": "demons",
    "incorrectAnswers": [
      "the study and design of machines at the molecular level",
      "the causes and treatment of allergies; a branch of medicine",
      "organic particles, such as bacteria, fungal spores, very small insects and pollen"
    ],
    "question": "What is Demonology the study of?",
    "tags": [
      "words",
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c377cc59eab6f9504dd",
    "correctAnswer": "oceans",
    "incorrectAnswers": [
      "non-terrestrial life",
      "blood serum",
      "the Earth"
    ],
    "question": "What is Oceanology the study of?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "6242cb4cd543524f1b19c920",
    "correctAnswer": "A swarm",
    "incorrectAnswers": [
      "A labour",
      "A covey",
      "A flock"
    ],
    "question": "What is the word for a group of insects?",
    "tags": [
      "animals",
      "biology",
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c377cc59eab6f950541",
    "correctAnswer": "the process of human psychological evolution",
    "incorrectAnswers": [
      "eggs",
      "the study of picture postcards",
      "sacred texts"
    ],
    "question": "What is Evolutionary psychology the study of?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c3f7cc59eab6f95237c",
    "correctAnswer": "Bulls",
    "incorrectAnswers": [
      "Fellas",
      "Dogs",
      "Blokes"
    ],
    "question": "What are male cows called?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c377cc59eab6f9504a6",
    "correctAnswer": "primates",
    "incorrectAnswers": [
      "the attribute (of a word) of being self descriptive",
      "the heart",
      "the study and design of machines at the molecular level"
    ],
    "question": "What is Primatology the study of?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c3a7cc59eab6f951042",
    "correctAnswer": "Big Bang",
    "incorrectAnswers": [
      "Eternal Inflation",
      "Steady State",
      "Oscillating Model"
    ],
    "question": "What is the most widely accepted theory for the creation of the universe?",
    "tags": [
      "physics",
      "general_knowledge",
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c377cc59eab6f9504c4",
    "correctAnswer": "parasites",
    "incorrectAnswers": [
      "crime",
      "nutrition",
      "the signification and application of words"
    ],
    "question": "What is Parasitology the study of?",
    "tags": [
      "words",
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "62433403cfaae40c12961419",
    "correctAnswer": "A Tadpole",
    "incorrectAnswers": [
      "A Calf",
      "A Piglet",
      "A Maggot"
    ],
    "question": "What would you call a baby frog?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c3a7cc59eab6f951071",
    "correctAnswer": "Leeches",
    "incorrectAnswers": [
      "Vampire Bats",
      "Cobras",
      "Wasps"
    ],
    "question": "What Creatures Were Frequently Used To Bleed Patients In The Nineteeth Century?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c3f7cc59eab6f952389",
    "correctAnswer": "A Turtle",
    "incorrectAnswers": [
      "A Volcanic Rock",
      "A Vegetable",
      "A Type of Cloud"
    ],
    "question": "What is a terrapin?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c377cc59eab6f9504fa",
    "correctAnswer": "methods",
    "incorrectAnswers": [
      "dreams",
      "the therapeutic use of plants",
      "a branch of theology concerned with the final events in the history of the world or of mankind"
    ],
    "question": "What is Methodology the study of?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c377cc59eab6f9505a5",
    "correctAnswer": "angels",
    "incorrectAnswers": [
      "numbers",
      "religion",
      "Semitic cultures"
    ],
    "question": "What is Angelology the study of?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c3e7cc59eab6f9522cb",
    "correctAnswer": "Hydroponics",
    "incorrectAnswers": [
      "Aquonics",
      "Horticulture",
      "Waterculture"
    ],
    "question": "What is the name given to the practice of growing plants in liquids rather than soil?",
    "tags": [
      "plants",
      "science",
      "words"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c3e7cc59eab6f9522c5",
    "correctAnswer": "Charles Darwin",
    "incorrectAnswers": [
      "Albert Einstein",
      "Marie Curie",
      "Francis Crick"
    ],
    "question": "Who fist proposed the theory of evolution?",
    "tags": [
      "people",
      "biology",
      "general_knowledge",
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c377cc59eab6f950493",
    "correctAnswer": "communist Soviet Union",
    "incorrectAnswers": [
      "ticks and mites",
      "minerals",
      "handwriting for the purpose of analysing the character of the writer"
    ],
    "question": "What is Sovietology the study of?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "624334f8cfaae40c12961479",
    "correctAnswer": "A Piglet",
    "incorrectAnswers": [
      "A Maggot",
      "A Cygnet",
      "A Colt"
    ],
    "question": "What is the word for a young pig?",
    "tags": [
      "animals",
      "words",
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "62433573cfaae40c129614a9",
    "correctAnswer": "A Tadpole",
    "incorrectAnswers": [
      "An Infant",
      "A Piglet",
      "A Cub"
    ],
    "question": "What is the word for a young toad?",
    "tags": [
      "animals",
      "biology",
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c3f7cc59eab6f9523ac",
    "correctAnswer": "Amnesia",
    "incorrectAnswers": [
      "Insomnia",
      "Coma",
      "Kleptomania"
    ],
    "question": "A loss of memory is known as what?",
    "tags": [
      "medicine",
      "words",
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "62433477cfaae40c12961446",
    "correctAnswer": "A Stallion",
    "incorrectAnswers": [
      "A Jack",
      "A Boar",
      "A Cob"
    ],
    "question": "What is the word for a male horse?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c3e7cc59eab6f952312",
    "correctAnswer": "Stethoscope",
    "incorrectAnswers": [
      "MRI Scanner",
      "Forceps",
      "Insulin Pen"
    ],
    "question": "What instrument do doctors often have around their necks?",
    "tags": [
      "medicine",
      "general_knowledge",
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c3a7cc59eab6f9510c8",
    "correctAnswer": "Reptiles",
    "incorrectAnswers": [
      "Mammals",
      "Amphibians",
      "Lizards"
    ],
    "question": "Marine iguanas, saltwater crocodiles, sea snakes, and sea turtles are the only surviving seawater __________",
    "tags": [
      "animals",
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c3a7cc59eab6f950fe3",
    "correctAnswer": "Mars",
    "incorrectAnswers": [
      "Mercury",
      "Venus",
      "Jupiter"
    ],
    "question": "Which planet is known as the red planet?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "624333fecfaae40c12961417",
    "correctAnswer": "A Vixen",
    "incorrectAnswers": [
      "A Ewe",
      "A Hen",
      "A Doe"
    ],
    "question": "What is the word for a female fox?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c377cc59eab6f950599",
    "correctAnswer": "the Assyrians",
    "incorrectAnswers": [
      "Egyptian hieroglyphics, an ancient writing system",
      "fermentation",
      "Japanese people"
    ],
    "question": "What is Assyriology the study of?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c377cc59eab6f9504ef",
    "correctAnswer": "myths",
    "incorrectAnswers": [
      "mountains and their mapping",
      "character",
      "sex"
    ],
    "question": "What is Mythology the study of?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c377cc59eab6f950575",
    "correctAnswer": "the climate",
    "incorrectAnswers": [
      "fossils of ancient life",
      "glaciers",
      "a branch of medicine that deals with the venous system"
    ],
    "question": "What is Climatology the study of?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c377cc59eab6f9504e5",
    "correctAnswer": "numbers",
    "incorrectAnswers": [
      "wounds and injuries caused by accidents or assaults and their surgical treatment and repair",
      "psychotropic or psychiatric drugs",
      "Egyptian hieroglyphics, an ancient writing system"
    ],
    "question": "What is Numerology the study of?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c3e7cc59eab6f952331",
    "correctAnswer": "Erosion",
    "incorrectAnswers": [
      "Sediment",
      "Vegetation",
      "Sublimation"
    ],
    "question": "By what process is rock worn down by the weather?",
    "tags": [
      "geology",
      "words",
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c377cc59eab6f9504df",
    "correctAnswer": "nutrition",
    "incorrectAnswers": [
      "the immune system",
      "cetaceans - whales, dolphins, and porpoise",
      "concept in anthropology, biology, algebraic topology, and sociology, meaning 'likeness in structure'"
    ],
    "question": "What is Nutriology the study of?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c377cc59eab6f950513",
    "correctAnswer": "water",
    "incorrectAnswers": [
      "the age of the Earth",
      "human beings killing other human beings",
      "wonders, or monsters"
    ],
    "question": "What is Hydrology the study of?",
    "tags": [
      "words",
      "general_knowledge",
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c3a7cc59eab6f9510c3",
    "correctAnswer": "23",
    "incorrectAnswers": [
      "10",
      "2",
      "12"
    ],
    "question": "How Many Pairs of Chromosomes Does The Average Human Have?",
    "tags": [
      "numbers",
      "anatomy",
      "biology",
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "6243354dcfaae40c1296149a",
    "correctAnswer": "A Lamb",
    "incorrectAnswers": [
      "A Maggot",
      "A Caterpillar",
      "A Fry"
    ],
    "question": "What is a baby sheep known as?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c3f7cc59eab6f9523bb",
    "correctAnswer": "Tsunami",
    "incorrectAnswers": [
      "Kahuna",
      "Overflow",
      "Grand Masif"
    ],
    "question": "What is the name for a great wave resulting from an earthquake?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "6243334fcfaae40c129613d3",
    "correctAnswer": "A Caterpillar",
    "incorrectAnswers": [
      "A Codling",
      "A Chick",
      "A Spiderling"
    ],
    "question": "A young butterfly is known as what?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c377cc59eab6f950491",
    "correctAnswer": "Semitic cultures",
    "incorrectAnswers": [
      "plant diseases",
      "hearing; a branch of medicine",
      "life"
    ],
    "question": "What is Semitology the study of?",
    "tags": [
      "words",
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "6243354acfaae40c12961499",
    "correctAnswer": "A Ewe",
    "incorrectAnswers": [
      "A Bitch",
      "A Soar",
      "A Cow"
    ],
    "question": "What is a female sheep known as?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c3a7cc59eab6f951011",
    "correctAnswer": "Vacuum",
    "incorrectAnswers": [
      "Dark Matter",
      "Black Hole",
      "White Hole"
    ],
    "question": "What term appies to space devoid of matter? ",
    "tags": [
      "words",
      "astronomy",
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "6243336dcfaae40c129613df",
    "correctAnswer": "A Kitten",
    "incorrectAnswers": [
      "An Eyas",
      "A Cygnet",
      "A Cria"
    ],
    "question": "What is the word for a young cat?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  },
  {
    "category": "Science",
    "id": "622a1c377cc59eab6f9504f6",
    "correctAnswer": "a book by Leibniz on his theory of monads",
    "incorrectAnswers": [
      "Unidentified flying object phenomena",
      "mammals",
      "a branch of geology that studies sediments"
    ],
    "question": "What is Monadology the study of?",
    "tags": [
      "science"
    ],
    "type": "Multiple Choice",
    "difficulty": "easy",
    "regions": []
  }
]

Question.insertMany(entries)
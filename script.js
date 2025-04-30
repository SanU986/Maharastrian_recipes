// Recipe data with all 10 recipes
const recipes = [
    {
        id: 1,
        name: "पोहे",
        nameEn: "Poha",
        category: "breakfast",
        image: "poha.png",
        ingredients: [
            "२ कप फ्लॅट चावल (पोहे)",
            "१ मध्यम कांदा, बारीक चिरलेला",
            "१-२ हिरवी मिरची, बारीक चिरलेली",
            "१/२ चमचा हळद पूड",
            "१ चमचा मीठ",
            "१ चमचा साखर",
            "१ चमचा लिंबू रस",
            "१/४ कप कोथिंबीर, बारीक चिरलेली",
            "१ चमचा तेल",
            "१/२ चमचा राई",
            "१/२ चमचा हिंग",
            "१०-१२ करी पाने",
            "१/४ कप शेंगदाणे (पर्यायी)"
        ],
        ingredientsEn: [
            "2 cups flat rice (poha)",
            "1 medium onion, finely chopped",
            "1-2 green chilies, finely chopped",
            "1/2 tsp turmeric powder",
            "1 tsp salt",
            "1 tsp sugar",
            "1 tsp lemon juice",
            "1/4 cup coriander leaves, finely chopped",
            "1 tbsp oil",
            "1/2 tsp mustard seeds",
            "1/2 tsp asafoetida",
            "10-12 curry leaves",
            "1/4 cup peanuts (optional)"
        ],
        steps: [
            "पोहे वेगळ्या भांड्यात घ्या आणि पाण्याने धुवा. २-३ मिनिटे ठेवा आणि नंतर पाणी काढून टाका.",
            "कढईत तेल गरम करा. राई, हिंग आणि करी पाने घाला.",
            "कांदा आणि हिरवी मिरची घालून परता. कांदा पारदर्शक होईपर्यंत शिजवा.",
            "हळद, मीठ आणि साखर घाला आणि चांगले मिक्स करा.",
            "धुतलेले पोहे घाला आणि हळूवारपणे मिक्स करा. २-३ मिनिटे शिजवा.",
            "गॅस बंद करा आणि लिंबू रस आणि कोथिंबीर घाला.",
            "गरमागरम सर्व्ह करा."
        ],
        stepsEn: [
            "Take poha in a separate bowl and rinse with water. Keep for 2-3 minutes then drain the water.",
            "Heat oil in a pan. Add mustard seeds, asafoetida and curry leaves.",
            "Add onion and green chilies and sauté. Cook until onion turns translucent.",
            "Add turmeric, salt and sugar and mix well.",
            "Add rinsed poha and mix gently. Cook for 2-3 minutes.",
            "Turn off the gas and add lemon juice and coriander leaves.",
            "Serve hot."
        ]
    },
    {
        id: 2,
        name: "वडा पाव",
        nameEn: "Vada Pav",
        category: "snacks",
        image: "vadapav.png",
        ingredients: [
            "४ बटाटे, उकडलेले आणि चिरलेले",
            "२ हिरवी मिरची, बारीक चिरलेली",
            "१ चमचा लसूण-मिरची पेस्ट",
            "१ चमचा जिरे पूड",
            "१ चमचा गरम मसाला",
            "१ चमचा मीठ",
            "१ चमचा हळद पूड",
            "१/२ कप बेसन",
            "तेल तळण्यासाठी",
            "८ पाव",
            "हिरवी चटणी आणि लाल चटणी"
        ],
        ingredientsEn: [
            "4 potatoes, boiled and mashed",
            "2 green chilies, finely chopped",
            "1 tbsp garlic-chili paste",
            "1 tsp cumin powder",
            "1 tsp garam masala",
            "1 tsp salt",
            "1 tsp turmeric powder",
            "1/2 cup gram flour (besan)",
            "Oil for frying",
            "8 pav buns",
            "Green chutney and red chutney"
        ],
        steps: [
            "बटाटे उकडून त्यांची पेस्ट बनवा.",
            "कढईत थोडे तेल गरम करून त्यात हिरवी मिरची, लसूण-मिरची पेस्ट, जिरे पूड, गरम मसाला, मीठ आणि हळद घालून परता.",
            "हा मसाला बटाट्यात मिसळा आणि छोट्या वड्यांच्या आकाराचे गोळे करा.",
            "बेसन आणि पाण्याची पातळ पेस्ट बनवा.",
            "वडे बेसन पेस्टमध्ये बुडवून तेलात तळा.",
            "पावला थोडे भाजून त्यावर हिरवी चटणी आणि लाल चटणी लावा.",
            "वडा पावमध्ये ठेवा आणि सर्व्ह करा."
        ],
        stepsEn: [
            "Boil potatoes and mash them.",
            "Heat some oil in a pan and add green chilies, garlic-chili paste, cumin powder, garam masala, salt and turmeric. Sauté.",
            "Mix this masala with potatoes and make small balls of vada size.",
            "Make a thin batter of gram flour and water.",
            "Dip vadas in the batter and deep fry in oil.",
            "Lightly toast the pav and apply green chutney and red chutney.",
            "Place vada in the pav and serve."
        ]
    },
    {
        id: 3,
        name: "पुरण पोळी",
        nameEn: "Puran Poli",
        category: "sweets",
        image: "puran.png",
        ingredients: [
            "२ कप चणा डाळ",
            "१ १/२ कप गूळ",
            "१ चमचा इलायची पूड",
            "१ चमचा जिरे पूड",
            "१ चमचा नुकता",
            "२ कप गव्हाचे पीठ",
            "तेल किंवा तूप",
            "पाणी आवश्यकतेप्रमाणे"
        ],
        ingredientsEn: [
            "2 cups chana dal",
            "1 1/2 cups jaggery",
            "1 tsp cardamom powder",
            "1 tsp cumin powder",
            "1 tsp nutmeg powder",
            "2 cups wheat flour",
            "Oil or ghee",
            "Water as needed"
        ],
        steps: [
            "चणा डाळ स्वच्छ धुवा आणि प्रेशर कुकरमध्ये ३-४ शिट्टी पर्यंत शिजवा.",
            "शिजलेली डाळ चांगली चिरून घ्या आणि त्यात गूळ, इलायची पूड, जिरे पूड आणि नुकता घाला.",
            "ही मिश्रण परत कढईत घालून ५-७ मिनिटे शिजवा. पुरण तयार करा.",
            "गव्हाच्या पिठात मीठ आणि पाणी घालून मळून घ्या.",
            "लहान गोळे करून त्यांना वाटोळे करा.",
            "प्रत्येक वाटोळ्यात पुरण भरून पोळी करा.",
            "तव्यावर तूप लावून पोळी भाजा.",
            "गरमागरम सर्व्ह करा."
        ],
        stepsEn: [
            "Wash chana dal thoroughly and cook in pressure cooker for 3-4 whistles.",
            "Mash the cooked dal well and add jaggery, cardamom powder, cumin powder and nutmeg.",
            "Put this mixture back in the pan and cook for 5-7 minutes. Prepare the puran.",
            "Add salt and water to wheat flour and knead into a dough.",
            "Make small balls and flatten them.",
            "Stuff each flattened dough with puran and make poli.",
            "Cook the poli on a tawa with ghee.",
            "Serve hot."
        ]
    },
    {
        id: 4,
        name: "भाकरी आणि थेचा",
        nameEn: "Bhakri and Thecha",
        category: "lunch",
        image: "bhakriandtecha.png",
        ingredients: [
            "२ कप ज्वारीचे पीठ",
            "पाणी आवश्यकतेप्रमाणे",
            "मीठ चवीनुसार",
            "६-७ लाल मिरची",
            "१ चमचा लसूण",
            "१ चमचा जिरे",
            "१ चमचा तेल",
            "१ चमचा लिंबू रस"
        ],
        ingredientsEn: [
            "2 cups jowar flour",
            "Water as needed",
            "Salt to taste",
            "6-7 red chilies",
            "1 tsp garlic",
            "1 tsp cumin seeds",
            "1 tbsp oil",
            "1 tsp lemon juice"
        ],
        steps: [
            "ज्वारीच्या पिठात मीठ घाला आणि गरम पाणी घालून मळून घ्या.",
            "मध्यम आकाराच्या भाकऱ्या करा.",
            "तव्यावर भाकरी भाजून घ्या.",
            "थेचा करण्यासाठी, मोर्टारमध्ये लाल मिरची, लसूण, जिरे आणि मीठ घालून वाटून घ्या.",
            "त्यात तेल आणि लिंबू रस घालून मिक्स करा.",
            "गरम भाकरीबरोबर थेचा सर्व्ह करा."
        ],
        stepsEn: [
            "Add salt to jowar flour and knead into a dough using hot water.",
            "Make medium sized bhakris.",
            "Cook the bhakri on a tawa.",
            "To make thecha, grind red chilies, garlic, cumin seeds and salt in a mortar.",
            "Add oil and lemon juice and mix.",
            "Serve hot bhakri with thecha."
        ]
    },
    {
        id: 5,
        name: "मिसळ पाव",
        nameEn: "Misal Pav",
        category: "breakfast",
        image: "misal.png",
        ingredients: [
            "१ कप मटकी",
            "२ मध्यम कांदे, बारीक चिरलेले",
            "२ टोमॅटो, बारीक चिरलेले",
            "२ हिरव्या मिरच्या, बारीक चिरलेल्या",
            "१ चमचा मिसळ मसाला",
            "१ चमचा गरम मसाला",
            "१ चमचा धणे पूड",
            "१ चमचा जिरे पूड",
            "१ चमचा हळद पूड",
            "१ चमचा तेल",
            "मीठ चवीनुसार",
            "कोथिंबीर सजावटीसाठी",
            "कुरकुरीत आणि कांदा वरपासून",
            "४ पाव"
        ],
        ingredientsEn: [
            "1 cup moth beans",
            "2 medium onions, finely chopped",
            "2 tomatoes, finely chopped",
            "2 green chilies, finely chopped",
            "1 tsp misal masala",
            "1 tsp garam masala",
            "1 tsp coriander powder",
            "1 tsp cumin powder",
            "1 tsp turmeric powder",
            "1 tbsp oil",
            "Salt to taste",
            "Coriander leaves for garnish",
            "Farsan and chopped onions for topping",
            "4 pav buns"
        ],
        steps: [
            "मटकी रात्रभर भिजत ठेवा आणि दुसऱ्या दिवशी प्रेशर कुकरमध्ये शिजवा.",
            "कढईत तेल गरम करा आणि कांदे आणि हिरवी मिरची घालून परता.",
            "टोमॅटो घाला आणि मऊ होईपर्यंत शिजवा.",
            "सर्व मसाले घाला आणि २ मिनिटे परता.",
            "शिजलेली मटकी घाला आणि पाणी घालून १० मिनिटे शिजवा.",
            "वरपासून कुरकुरीत, कांदा आणि कोथिंबीर घाला.",
            "गरम पावबरोबर सर्व्ह करा."
        ],
        stepsEn: [
            "Soak moth beans overnight and cook in pressure cooker next day.",
            "Heat oil in a pan and sauté onions and green chilies.",
            "Add tomatoes and cook until soft.",
            "Add all spices and sauté for 2 minutes.",
            "Add cooked moth beans and water, simmer for 10 minutes.",
            "Top with farsan, chopped onions and coriander leaves.",
            "Serve hot with pav."
        ]
    },
    {
        id: 6,
        name: "साबुदाणा खिचडी",
        nameEn: "Sabudana Khichdi",
        category: "breakfast",
        image: "shabudana.png",
        ingredients: [
            "१ कप साबुदाणा",
            "२ मध्यम बटाटे, चिरून",
            "२ हिरव्या मिरच्या, बारीक चिरलेल्या",
            "१/२ कप शेंगदाणे, भाजलेले",
            "१ चमचा जिरे",
            "१ चमचा साखर",
            "१ चमचा लिंबू रस",
            "२ चमचे तेल",
            "मीठ चवीनुसार",
            "कोथिंबीर सजावटीसाठी"
        ],
        ingredientsEn: [
            "1 cup sago (sabudana)",
            "2 medium potatoes, diced",
            "2 green chilies, finely chopped",
            "1/2 cup peanuts, roasted",
            "1 tsp cumin seeds",
            "1 tsp sugar",
            "1 tsp lemon juice",
            "2 tbsp oil",
            "Salt to taste",
            "Coriander leaves for garnish"
        ],
        steps: [
            "साबुदाणा रात्रभर पाण्यात भिजत ठेवा (फक्त पाण्यात बुडवा).",
            "कढईत तेल गरम करा आणि जिरे घाला.",
            "बटाटे आणि हिरवी मिरची घालून परता.",
            "शेंगदाणे, साखर आणि मीठ घाला.",
            "साबुदाणा घालून हळूवारपणे मिक्स करा.",
            "५-७ मिनिटे शिजवा, लिंबू रस घाला.",
            "कोथिंबीर घालून सर्व्ह करा."
        ],
        stepsEn: [
            "Soak sabudana overnight in just enough water to cover.",
            "Heat oil in a pan and add cumin seeds.",
            "Add potatoes and green chilies, sauté.",
            "Add peanuts, sugar and salt.",
            "Add soaked sabudana and mix gently.",
            "Cook for 5-7 minutes, add lemon juice.",
            "Garnish with coriander leaves and serve."
        ]
    },
    {
        id: 7,
        name: "कोथिंबीर वडी",
        nameEn: "Kothimbir Vadi",
        category: "snacks",
        image: "vadi.png",
        ingredients: [
            "२ कप कोथिंबीर, बारीक चिरलेली",
            "१ कप बेसन",
            "२ चमचे तिखट",
            "१ चमचा जिरे पूड",
            "१ चमचा हळद पूड",
            "१ चमचा गोडा मसाला",
            "१ चमचा लसूण-मिरची पेस्ट",
            "१ चमचा तेल",
            "१/२ चमचा हिंग",
            "मीठ चवीनुसार",
            "तेल तळण्यासाठी"
        ],
        ingredientsEn: [
            "2 cups coriander leaves, finely chopped",
            "1 cup gram flour (besan)",
            "2 tbsp rice flour",
            "1 tsp cumin powder",
            "1 tsp turmeric powder",
            "1 tsp goda masala",
            "1 tsp garlic-chili paste",
            "1 tbsp oil",
            "1/2 tsp asafoetida",
            "Salt to taste",
            "Oil for frying"
        ],
        steps: [
            "मोठ्या वाटीत सर्व साहित्य एकत्र मिक्स करा.",
            "थोडे पाणी घालून घट्ट मिश्रण तयार करा.",
            "स्टीमरमध्ये १५-२० मिनिटे वाफवा.",
            "थंड होऊ द्या आणि चौकोनी तुकडे करा.",
            "तेलात सोनेरी तपकिरी होईपर्यंत तळा.",
            "चटणीबरोबर गरमागरम सर्व्ह करा."
        ],
        stepsEn: [
            "Mix all ingredients in a large bowl.",
            "Add little water to make a thick batter.",
            "Steam in a steamer for 15-20 minutes.",
            "Let it cool and cut into square pieces.",
            "Deep fry until golden brown.",
            "Serve hot with chutney."
        ]
    },
    {
        id: 8,
        name: "भरली वांगी",
        nameEn: "Bharli Vangi",
        category: "lunch",
        image: "vangi.png",
        ingredients: [
            "८-१० लहान वांगी",
            "१ कांदा, बारीक चिरलेला",
            "१/२ कप खोबरे",
            "२ चमचे गोडा मसाला",
            "१ चमचा तिखट",
            "१ चमचा जिरे पूड",
            "१ चमचा धणे पूड",
            "१ चमचा गूळ",
            "२ चमचे तेल",
            "मीठ चवीनुसार",
            "कोथिंबीर सजावटीसाठी"
        ],
        ingredientsEn: [
            "8-10 small eggplants (brinjals)",
            "1 onion, finely chopped",
            "1/2 cup grated coconut",
            "2 tbsp goda masala",
            "1 tbsp red chili powder",
            "1 tsp cumin powder",
            "1 tsp coriander powder",
            "1 tsp jaggery",
            "2 tbsp oil",
            "Salt to taste",
            "Coriander leaves for garnish"
        ],
        steps: [
            "वांगी धुवून त्यांच्या मध्यभागी चिरा करा (पूर्ण फाडू नका).",
            "खोबरे, गोडा मसाला, तिखट, जिरे पूड, धणे पूड, गूळ आणि मीठ एकत्र मिक्स करा.",
            "ह्या मिश्रणाने वांगी भरा.",
            "कढईत तेल गरम करा, कांदा घालून परता.",
            "भरलेल्या वांगी घालून २ मिनिटे परता.",
            "पाणी घालून झाकण ठेवून १५-२० मिनिटे शिजवा.",
            "कोथिंबीर घालून सर्व्ह करा."
        ],
        stepsEn: [
            "Wash brinjals and make criss-cross cuts (don't cut completely).",
            "Mix coconut, goda masala, red chili powder, cumin powder, coriander powder, jaggery and salt.",
            "Stuff this mixture into the brinjals.",
            "Heat oil in a pan, sauté onions.",
            "Add stuffed brinjals and sauté for 2 minutes.",
            "Add water, cover and cook for 15-20 minutes.",
            "Garnish with coriander leaves and serve."
        ]
    },
    {
        id: 9,
        name: "झुणका भाकरी",
        nameEn: "Zunka Bhakri",
        category: "lunch",
        image: "junka.png",
        ingredients: [
            "२ कप बेसन",
            "२ कांदे, बारीक चिरलेले",
            "४ हिरव्या मिरच्या, बारीक चिरलेल्या",
            "१ चमचा हिंग",
            "१ चमचा जिरे",
            "१/२ चमचा हळद पूड",
            "२ चमचे तेल",
            "मीठ चवीनुसार",
            "कोथिंबीर सजावटीसाठी",
            "ज्वारीचे पीठ भाकरीसाठी"
        ],
        ingredientsEn: [
            "2 cups gram flour (besan)",
            "2 onions, finely chopped",
            "4 green chilies, finely chopped",
            "1 tsp asafoetida",
            "1 tsp mustard seeds",
            "1/2 tsp turmeric powder",
            "2 tbsp oil",
            "Salt to taste",
            "Coriander leaves for garnish",
            "Jowar flour for bhakri"
        ],
        steps: [
            "कढईत तेल गरम करा, हिंग आणि जिरे घाला.",
            "कांदे आणि हिरवी मिरची घालून परता.",
            "हळद आणि मीठ घाला.",
            "बेसन घालून चांगले मिक्स करा.",
            "हळूहळू पाणी घालून मिक्स करत रहा (गोठू देऊ नका).",
            "१० मिनिटे शिजवून कोथिंबीर घाला.",
            "ज्वारीच्या भाकरीबरोबर सर्व्ह करा."
        ],
        stepsEn: [
            "Heat oil in a pan, add asafoetida and mustard seeds.",
            "Add onions and green chilies, sauté.",
            "Add turmeric and salt.",
            "Add gram flour and mix well.",
            "Slowly add water while mixing (don't let it lump).",
            "Cook for 10 minutes, garnish with coriander.",
            "Serve with jowar bhakri."
        ]
    },
    
    {
        "id": 10,
        "name": "मोदक",
        "nameEn": "Modak",
        "category": "sweets",
        "image": "modak.png",
        "ingredients": [
            "१ कप तांदूळ पीठ",
            "१ कप खोबरे",
            "१ कप गूळ",
            "१/४ चमचा जायफळ पूड",
            "१ चमचा इलायची पूड",
            "१ चमचा तूप",
            "मीठ चवीनुसार",
            "पाणी आवश्यकतेप्रमाणे"
        ],
        "ingredientsEn": [
            "1 cup rice flour",
            "1 cup grated coconut",
            "1 cup jaggery",
            "1/4 tsp nutmeg powder",
            "1 tsp cardamom powder",
            "1 tbsp ghee",
            "Salt to taste",
            "Water as needed"
        ],
        "steps": [
            "कढईत गूळ आणि खोबरे घालून मध्यम आचेवर शिजवा.",
            "जायफळ आणि इलायची पूड घालून मिश्रण गोठेपर्यंत शिजवा. पूरन तयार.",
            "वेगळ्या भांड्यात तांदूळ पीठ, मीठ आणि गरम पाणी घालून मळून घ्या.",
            "लहान गोळे करून त्यांना पातळ वाटोळे करा.",
            "प्रत्येक वाटोळ्यात पूरन भरून मोदकाचा आकार द्या.",
            "स्टीमरमध्ये १०-१२ मिनिटे वाफवा.",
            "थोडे तूप लावून गरमागरम सर्व्ह करा."
        ],
        "stepsEn": [
            "In a pan, cook jaggery and coconut on medium heat.",
            "Add nutmeg and cardamom powder, cook until mixture thickens. Puran ready.",
            "In another bowl, knead rice flour with salt and hot water.",
            "Make small balls and flatten them.",
            "Stuff each with puran and shape into modak.",
            "Steam for 10-12 minutes.",
            "Apply little ghee and serve hot."
        ]
    },
    {
        "id": 11,
        "name": "थालिपीठ",
        "nameEn": "Thalipeeth",
        "category": "breakfast",
        "image": "thalipit.png",
        "ingredients": [
            "१ कप ज्वारीचे पीठ",
            "१/२ कप गहू पीठ",
            "१/२ कप बाजरी पीठ",
            "१/२ कप चणा पीठ",
            "१ कांदा, बारीक चिरलेला",
            "२ हिरव्या मिरच्या, बारीक चिरलेल्या",
            "१ चमचा तिखट",
            "१ चमचा जिरे पूड",
            "१ चमचा हळद पूड",
            "कोथिंबीर, बारीक चिरलेली",
            "मीठ चवीनुसार",
            "तेल भाजण्यासाठी"
        ],
        "ingredientsEn": [
            "1 cup jowar flour",
            "1/2 cup wheat flour",
            "1/2 cup bajra flour",
            "1/2 cup besan",
            "1 onion, finely chopped",
            "2 green chilies, finely chopped",
            "1 tbsp red chili powder",
            "1 tsp cumin powder",
            "1 tsp turmeric powder",
            "Coriander leaves, finely chopped",
            "Salt to taste",
            "Oil for cooking"
        ],
        "steps": [
            "सर्व पीठ एकत्र मिक्स करा.",
            "कांदा, हिरवी मिरची, सर्व मसाले आणि कोथिंबीर घाला.",
            "पाणी घालून मऊ पीठ मळून घ्या.",
            "हाताला तेल लावून लहान गोळे करा आणि पातळ थालिपीठ करा.",
            "तव्यावर तेल लावून दोन्ही बाजूंनी भाजा.",
            "लोणी किंवा दहीबरोबर गरमागरम सर्व्ह करा."
        ],
        "stepsEn": [
            "Mix all flours together.",
            "Add onion, green chilies, all spices and coriander.",
            "Add water and knead soft dough.",
            "Oil hands, make small balls and flatten into thalipeeth.",
            "Cook on tawa with oil on both sides.",
            "Serve hot with butter or curd."
        ]
    },
    {
        "id": 12,
        "name": "सोलकढी",
        "nameEn": "Solkadhi",
        "category": "lunch",
        "image": "solkadi.png",
        "ingredients": [
            "१ कप कोकम",
            "२ कप नारळाचे दूध",
            "२ हिरव्या मिरच्या",
            "१ चमचा लसूण",
            "१ चमचा कोथिंबीर, बारीक चिरलेली",
            "१/२ चमचा जिरे पूड",
            "मीठ चवीनुसार"
        ],
        "ingredientsEn": [
            "1 cup kokum",
            "2 cups coconut milk",
            "2 green chilies",
            "1 tsp garlic",
            "1 tsp coriander leaves, finely chopped",
            "1/2 tsp cumin powder",
            "Salt to taste"
        ],
        "steps": [
            "कोकम रात्रभर पाण्यात भिजत ठेवा.",
            "दुसऱ्या दिवशी कोकम चाळून घ्या.",
            "या पाण्यात नारळाचे दूध घाला.",
            "हिरवी मिरची, लसूण, कोथिंबीर, जिरे पूड आणि मीठ घाला.",
            "चांगले मिक्स करून थंड करा.",
            "गरम भाताबरोबर सर्व्ह करा."
        ],
        "stepsEn": [
            "Soak kokum in water overnight.",
            "Next day, strain the kokum.",
            "Add coconut milk to this water.",
            "Add green chilies, garlic, coriander, cumin powder and salt.",
            "Mix well and refrigerate.",
            "Serve with hot rice."
        ]
    },
    {
        "id": 13,
        "name": "बटाटा पोहे",
        "nameEn": "Batata Poha",
        "category": "breakfast",
        "image": "battapoha.png",
        "ingredients": [
            "२ कप पोहे",
            "२ बटाटे, उकडून चिरून",
            "१ कांदा, बारीक चिरलेला",
            "२ हिरव्या मिरच्या, बारीक चिरलेल्या",
            "१/२ चमचा हळद पूड",
            "१ चमचा मीठ",
            "१ चमचा साखर",
            "१ चमचा लिंबू रस",
            "१/४ कप कोथिंबीर, बारीक चिरलेली",
            "१ चमचा तेल",
            "१/२ चमचा राई",
            "१/२ चमचा हिंग",
            "१०-१२ करी पाने",
            "१/४ कप शेंगदाणे (पर्यायी)"
        ],
        "ingredientsEn": [
            "2 cups poha",
            "2 potatoes, boiled and diced",
            "1 onion, finely chopped",
            "2 green chilies, finely chopped",
            "1/2 tsp turmeric powder",
            "1 tsp salt",
            "1 tsp sugar",
            "1 tsp lemon juice",
            "1/4 cup coriander leaves, finely chopped",
            "1 tbsp oil",
            "1/2 tsp mustard seeds",
            "1/2 tsp asafoetida",
            "10-12 curry leaves",
            "1/4 cup peanuts (optional)"
        ],
        "steps": [
            "पोहे वेगळ्या भांड्यात घ्या आणि पाण्याने धुवा. २-३ मिनिटे ठेवा आणि नंतर पाणी काढून टाका.",
            "कढईत तेल गरम करा. राई, हिंग आणि करी पाने घाला.",
            "कांदा, हिरवी मिरची आणि बटाटे घालून परता.",
            "हळद, मीठ आणि साखर घाला आणि चांगले मिक्स करा.",
            "धुतलेले पोहे घाला आणि हळूवारपणे मिक्स करा. २-३ मिनिटे शिजवा.",
            "गॅस बंद करा आणि लिंबू रस आणि कोथिंबीर घाला.",
            "गरमागरम सर्व्ह करा."
        ],
        "stepsEn": [
            "Take poha in a separate bowl and rinse with water. Keep for 2-3 minutes then drain.",
            "Heat oil in pan. Add mustard seeds, asafoetida and curry leaves.",
            "Add onion, green chilies and potatoes, sauté.",
            "Add turmeric, salt and sugar, mix well.",
            "Add rinsed poha and mix gently. Cook for 2-3 minutes.",
            "Turn off heat, add lemon juice and coriander.",
            "Serve hot."
        ]
    },
    {
        id: 14,
        name: "मटकी उसळ",
        nameEn: "Matki Usal",
        category: "lunch",
        image: "mataki.png",
        ingredients: [
            "१ कप मटकी",
            "१ कांदा, बारीक चिरलेला",
            "२ टोमॅटो, बारीक चिरलेले",
            "१ चमचा गोडा मसाला",
            "१ चमचा राई",
            "१ चमचा हळद",
            "१ चमचा गरम मसाला",
            "कोथिंबीर सजावटीसाठी"
        ],
        ingredientsEn: [
            "1 cup moth beans (matki)",
            "1 onion, finely chopped",
            "2 tomatoes, finely chopped",
            "1 tbsp goda masala",
            "1 tsp mustard seeds",
            "1 tsp turmeric powder",
            "1 tsp garam masala",
            "Coriander leaves for garnish"
        ],
        steps: [
            "मटकी रात्रभर भिजत ठेवा आणि फुटण्यासाठी ठेवा.",
            "कढईत तेल गरम करून राई घाला.",
            "कांदा आणि टोमॅटो घालून परता.",
            "सर्व मसाले घालून चांगले मिक्स करा.",
            "फुटलेली मटकी घालून ५-७ मिनिटे शिजवा.",
            "कोथिंबीर घालून गरमागरम सर्व्ह करा."
        ],
        stepsEn: [
            "Soak matki overnight and allow to sprout.",
            "Heat oil in a pan and add mustard seeds.",
            "Add onions and tomatoes, sauté well.",
            "Add all spices and mix thoroughly.",
            "Add sprouted matki and cook for 5-7 minutes.",
            "Garnish with coriander and serve hot."
        ]
    },
    {
        id: 15,
        name: "पिठला भाकरी",
        nameEn: "Pithla Bhakri",
        category: "lunch",
        image: "pitla.png",
        ingredients: [
            "१ कप बेसन",
            "१ कांदा, बारीक चिरलेला",
            "२ हिरव्या मिरच्या",
            "१ चमचा जिरे",
            "१/२ चमचा हळद",
            "कोथिंबीर सजावटीसाठी",
            "मीठ चवीनुसार"
        ],
        ingredientsEn: [
            "1 cup gram flour (besan)",
            "1 onion, finely chopped",
            "2 green chilies",
            "1 tsp cumin seeds",
            "1/2 tsp turmeric powder",
            "Coriander leaves for garnish",
            "Salt to taste"
        ],
        steps: [
            "कढईत तेल गरम करून जिरे घाला.",
            "कांदा आणि हिरवी मिरची घालून परता.",
            "बेसन घालून २ मिनिटे परता.",
            "हळूहळू पाणी घालून गोठू न देता मिक्स करा.",
            "१० मिनिटे शिजवून कोथिंबीर घाला.",
            "ज्वारीच्या भाकरीबरोबर सर्व्ह करा."
        ],
        stepsEn: [
            "Heat oil in a pan and add cumin seeds.",
            "Add onions and green chilies, sauté.",
            "Add gram flour and roast for 2 minutes.",
            "Slowly add water while stirring to avoid lumps.",
            "Cook for 10 minutes, garnish with coriander.",
            "Serve with jowar bhakri."
        ]
    },
    {
        id: 16,
        name: "साबुदाणा वडा",
        nameEn: "Sabudana Vada",
        category: "snacks",
        image: "shabudanavada.png",
        ingredients: [
            "१ कप साबुदाणा (रात्रभर भिजवलेला)",
            "२ उकडलेले बटाटे",
            "२ हिरव्या मिरच्या",
            "१ चमचा जिरे",
            "तेल तळण्यासाठी"
        ],
        ingredientsEn: [
            "1 cup soaked sago",
            "2 boiled potatoes",
            "2 green chilies",
            "1 tsp cumin seeds",
            "Oil for frying"
        ],
        steps: [
            "साबुदाणा, बटाटे, मिरची मिसळून मिक्स करा.",
            "छोटे वडे तयार करा.",
            "तेलात क्रिस्पी होईपर्यंत तळा.",
            "दही चटणीबरोबर सर्व्ह करा."
        ],
        stepsEn: [
            "Mash sago, potatoes, chilies into a dough.",
            "Shape into small patties.",
            "Deep fry until crispy.",
            "Serve with yogurt chutney."
        ]
    },
    {
        id: 17,
        name: "दुधी हलवा",
        nameEn: "Doodhi Halwa",
        category: "sweets",
        image: "doodhi-halwa.png",
        ingredients: [
            "२ कप दुधी, किसलेली",
            "१ कप दूध",
            "१/२ कप साखर",
            "४ चमचे तूप",
            "१० काजू-बदाम"
        ],
        ingredientsEn: [
            "2 cups grated bottle gourd (doodhi)",
            "1 cup milk",
            "1/2 cup sugar",
            "4 tbsp ghee",
            "10 cashews-almonds"
        ],
        steps: [
            "तेलात दुधी शिजवा पाणी संपेपर्यंत.",
            "दूध आणि साखर घालून ढवळा.",
            "तूप आणि काजू घालून १० मिनिटे शिजवा.",
            "गरमागरम सर्व्ह करा."
        ],
        stepsEn: [
            "Cook grated gourd in ghee until water evaporates.",
            "Add milk and sugar, stir well.",
            "Add nuts and cook for 10 mins.",
            "Serve warm."
        ]
    },
    {
        id: 18,
        name: "शंकरपाळी",
        nameEn: "Shankarpali",
        category: "sweets",
        image: "shankarpali.png",
        ingredients: [
            "२ कप मैदा",
            "१/२ कप साखर",
            "२ चमचे तूप",
            "१/४ चमचा इलायची पूड",
            "तेल तळण्यासाठी"
        ],
        ingredientsEn: [
            "2 cups maida",
            "1/2 cup sugar",
            "2 tbsp ghee",
            "1/4 tsp cardamom powder",
            "Oil for frying"
        ],
        steps: [
            "मैदा, साखर, तूप मिसळून कठीण पीठ मळा.",
            "पातळ रोल करून डायमंड आकारात कापा.",
            "तेलात सोनेरी होईपर्यंत तळा.",
            "थंड करून स्टोअर करा."
        ],
        stepsEn: [
            "Knead dough with maida, sugar, and ghee.",
            "Roll thin and cut into diamonds.",
            "Deep fry until golden.",
            "Cool and store in airtight container."
        ]
    },
    {
        id: 19,
        name: "कांदा भजी",
        nameEn: "Kanda Bhaji",
        category: "snacks",
        image: "kanda-bhaji.png",
        ingredients: [
            "२ कांदे, पातळ स्लाईस केलेले",
            "१ कप बेसन",
            "१ चमचा तिखट",
            "१/२ चमचा हळद",
            "तेल तळण्यासाठी"
        ],
        ingredientsEn: [
            "2 onions, thinly sliced",
            "1 cup gram flour (besan)",
            "1 tsp red chili powder",
            "1/2 tsp turmeric",
            "Oil for frying"
        ],
        steps: [
            "कांदे, बेसन, मसाले मिसळून पेस्ट तयार करा.",
            "तेल गरम करून छोट्या भज्या तळा.",
            "सोनेरी होईपर्यंत तळून घ्या.",
            "चटणीबरोबर सर्व्ह करा."
        ],
        stepsEn: [
            "Mix onions, besan, and spices into a batter.",
            "Heat oil and drop small fritters.",
            "Fry until golden brown.",
            "Serve with chutney."
        ]
    },
    {
        id: 20,
        name: "शिरा",
        nameEn: "Sheera",
        category: "breakfast",
        image: "sheera.png",
        ingredients: [
            "१ कप रवा",
            "१/२ कप साखर",
            "१/४ कप तूप",
            "१/४ कप बदाम-काजू",
            "१ चमचा इलायची पूड"
        ],
        ingredientsEn: [
            "1 cup semolina (sooji)",
            "1/2 cup sugar",
            "1/4 cup ghee",
            "1/4 cup almonds-cashews",
            "1 tsp cardamom powder"
        ],
        steps: [
            "तूपात रवा भाजून घ्या.",
            "साखर आणि २ कप पाणी घाला.",
            "ढवळत रहा जोपर्यंत गोठत नाही.",
            "बदाम-काजू आणि इलायची घाला."
        ],
        stepsEn: [
            "Roast semolina in ghee.",
            "Add sugar and 2 cups water.",
            "Stir until thickened.",
            "Garnish with nuts and cardamom."
        ]
    },
    {
        "id": 21,
        "name": "उपमा",
        "nameEn": "Upma",
        "category": "breakfast",
         image: "upma.png",

        "ingredients": [
          "१ कप सूजी (रवा)",
          "१ कप मिश्र भाज्या (कांदा, टोमॅटो, वाटाणे)",
          "१ चमचा मोहरी",
          "१ चमचा लिंबू रस"
        ],
        "ingredientsEn": [
          "1 cup semolina (sooji)",
          "1 cup mixed veggies (onion, tomato, peas)",
          "1 tsp mustard seeds",
          "1 tsp lemon juice"
        ],
        "steps": [
          "सूजी कोरडी भाजून काढा.",
          "तेलात मोहरी, भाज्या घालून परता.",
          "२ कप पाणी उकळवा, सूजी घालून ढवळा.",
          "लिंबू रस घालून सर्व्ह करा."
        ],
        "stepsEn": [
          "Dry roast semolina and set aside.",
          "Temper mustard seeds, sauté veggies.",
          "Boil 2 cups water, add semolina and stir.",
          "Add lemon juice and serve."
        ]
      },
      {
        "id": 22,
        "name": "ठेपळी",
        "nameEn": "Thepla",
        "category": "breakfast",
        image: "thepla.png",
        "ingredients": [
          "१ कप बेसन",
          "१/२ कप दही",
          "१ चमचा जिरे पूड",
          "१/२ चमचा हळद"
        ],
        "ingredientsEn": [
          "1 cup gram flour",
          "1/2 cup yogurt",
          "1 tsp cumin powder",
          "1/2 tsp turmeric"
        ],
        "steps": [
          "सर्व साहित्य मिसळून घट्ट घडी करा.",
          "पातळ थेपळी भाजा.",
          "साकर आणि चहासोबत सर्व्ह करा."
        ],
        "stepsEn": [
          "Mix all ingredients into a stiff dough.",
          "Roll thin and cook on a tawa.",
          "Serve with sugar and tea."
        ]
      },
      {
        "id": 23,
        "name": "इडली",
        "nameEn": "Idli",
        "category": "breakfast",
        image: "idli.png",
        "ingredients": [
          "२ कप इडली बॅटर",
          "१ चमचा उप्पु (मीठ)",
          "१/२ चमचा सोडा"
        ],
        "ingredientsEn": [
          "2 cups idli batter",
          "1 tsp salt",
          "1/2 tsp baking soda"
        ],
        "steps": [
          "बॅटरमध्ये मीठ आणि सोडा घाला.",
          "इडली मोल्डमध्ये ओतून वाफवा.",
          "चटणी आणि सांबारसोबत सर्व्ह करा."
        ],
        "stepsEn": [
          "Add salt and soda to batter.",
          "Steam in idli molds for 10 mins.",
          "Serve with chutney and sambar."
        ]
      },
      {
        "id": 24,
        "name": "समोसा",
        "nameEn": "Samosa",
        "category": "snacks",
        image: "samosa.png",
        "ingredients": [
          "२ कप आटा",
          "४ उकडलेले बटाटे",
          "१ चमचा गरम मसाला",
          "तेल तळण्यासाठी"
        ],
        "ingredientsEn": [
          "2 cups flour",
          "4 boiled potatoes",
          "1 tsp garam masala",
          "Oil for frying"
        ],
        "steps": [
          "आट्याची घडी करा.",
          "बटाट्याचे पूर भरून त्रिकोण आकार द्या.",
          "तळून सुवर्ण तपकिरी करा."
        ],
        "stepsEn": [
          "Make dough with flour and water.",
          "Fill potato stuffing, shape into cones.",
          "Deep fry until golden brown."
        ]
      },
      {
        "id": 25,
        "name": "पाटीस",
        "nameEn": "Patis",
        "category": "snacks",
        image: "patis.png",
        "ingredients": [
          "१ कप चण्याचे पीठ",
          "१/४ कप तूप",
          "१ चमचा जिरे पूड",
          "मीठ चवीनुसार"
        ],
        "ingredientsEn": [
          "1 cup besan (gram flour)",
          "1/4 cup ghee",
          "1 tsp cumin powder",
          "Salt to taste"
        ],
        "steps": [
          "सर्व साहित्य मिसळून घडी करा.",
          "लहान वाट्या करून भाजा.",
          "थंड झाल्यावर सर्व्ह करा."
        ],
        "stepsEn": [
          "Mix ingredients into a dough.",
          "Shape into small discs and fry.",
          "Serve once cooled."
        ]
      },
      {
        "id": 26,
        "name": "चिवडा",
        "nameEn": "Chivda",
        "category": "snacks",
        image: "chivda.png",
        "ingredients": [
          "२ कप पोहा (फ्लॅटन्ड राइस)",
          "१/४ कप शेंगदाणे",
          "१ चमचा हळद",
          "५-६ करीपत्ते"
        ],
        "ingredientsEn": [
          "2 cups flattened rice",
          "1/4 cup peanuts",
          "1 tsp turmeric",
          "5-6 curry leaves"
        ],
        "steps": [
          "पोहा कोरडा भाजून काढा.",
          "शेंगदाणे, करीपत्ते तेलात भाजा.",
          "सर्व मिसळून थंड करा."
        ],
        "stepsEn": [
          "Dry roast poha until crisp.",
          "Temper peanuts and curry leaves in oil.",
          "Mix all and cool before storing."
        ]
      },
      {
        "id": 27,
        "name": "चकली",
        "nameEn": "Chakli",
        "category": "snacks",
        image: "chakli.png",
        "ingredients": [
          "१ कप तांदूळ पीठ",
          "१/२ कप उडीद डाळ पीठ",
          "१ चमचा तूप",
          "मीठ चवीनुसार"
        ],
        "ingredientsEn": [
          "1 cup rice flour",
          "1/2 cup urad dal flour",
          "1 tsp ghee",
          "Salt to taste"
        ],
        "steps": [
          "सर्व पीठ मिसळून गरम पाण्यात घडी करा.",
          "चकली मशीनमध्ये भरून आकार द्या.",
          "तळून थंड करा."
        ],
        "stepsEn": [
          "Mix flours, ghee, and salt with hot water.",
          "Press into spiral shapes using a chakli maker.",
          "Deep fry until crisp."
        ]
      },
    
      // ========== SWEET RECIPES (5) ==========
      {
        "id": 28,
        "name": "गुलाब जामुन",
        "nameEn": "Gulab Jamun",
        "category": "sweets",
        image: "gulabjamun.png",
        "ingredients": [
          "१ कप खोवा",
          "१/४ कप मैदा",
          "१ चमचा तूप",
          "२ कप साखरेचा पाक"
        ],
        "ingredientsEn": [
          "1 cup khoya",
          "1/4 cup maida",
          "1 tsp ghee",
          "2 cups sugar syrup"
        ],
        "steps": [
          "खोवा, मैदा, तूप मिसळून घडी करा.",
          "लहान गोळ्या तळा.",
          "गरम पाकात भिजवा."
        ],
        "stepsEn": [
          "Mix khoya, maida, and ghee into a dough.",
          "Fry small balls until dark brown.",
          "Soak in warm sugar syrup."
        ]
      },
      {
        "id": 29,
        "name": "श्रीखंड",
        "nameEn": "Shrikhand",
        "category": "sweets",
        image: "shrikand.png",
        "ingredients": [
          "२ कप दही (हंग)",
          "१/२ कप साखर",
          "१ चमचा इलायची पूड",
          "१/४ कप बदाम"
        ],
        "ingredientsEn": [
          "2 cups hung curd",
          "1/2 cup sugar",
          "1 tsp cardamom powder",
          "1/4 cup almonds"
        ],
        "steps": [
          "दही कापडात बांधून पाणी काढून घ्या.",
          "साखर, इलायची मिसळून फेटवा.",
          "बदामसह गोठवा."
        ],
        "stepsEn": [
          "Strain yogurt in a muslin cloth for 4 hours.",
          "Whisk with sugar and cardamom.",
          "Chill and garnish with almonds."
        ]
      },
      {
        "id": 30,
        "name": "बासुंदी",
        "nameEn": "Basundi",
        "category": "sweets",
        image: "basundi.png",
        "ingredients": [
          "१ लिटर दूध",
          "१/२ कप साखर",
          "१ चमचा इलायची पूड",
          "१/४ कप पिस्ता"
        ],
        "ingredientsEn": [
          "1 liter milk",
          "1/2 cup sugar",
          "1 tsp cardamom powder",
          "1/4 cup pistachios"
        ],
        "steps": [
          "दूध हळूवारपणे गाढ करा.",
          "साखर घालून ढवळा.",
          "थंड करून पिस्ता घाला."
        ],
        "stepsEn": [
          "Simmer milk until reduced to half.",
          "Add sugar and stir.",
          "Cool, garnish with pistachios."
        ]
      },
      {
        "id": 31,
        "name": "जिलेबी",
        "nameEn": "Jalebi",
        "category": "sweets",
        image: "jilabi.png",
        "ingredients": [
          "१ कप मैदा",
          "१ चमचा यीस्ट",
          "१ चमचा तूप",
          "२ कप साखरेचा पाक"
        ],
        "ingredientsEn": [
          "1 cup maida",
          "1 tsp yeast",
          "1 tsp ghee",
          "2 cups sugar syrup"
        ],
        "steps": [
          "मैदा, यीस्ट, तूप मिसळून फेरमेंट करा.",
          "कॅनमध्ये भरून गोल आकारात तळा.",
          "पाकात बुडवून सर्व्ह करा."
        ],
        "stepsEn": [
          "Mix maida, yeast, ghee, and ferment for 6 hours.",
          "Pipe into hot oil in spiral shapes.",
          "Dip in sugar syrup and serve warm."
        ]
      },
    {
        id: 32,
        name: "आमटी",
        nameEn: "Aamti",
        category: "lunch",
        image: "aamti.png",
        ingredients: [
            "१ कप तूर डाळ",
            "१ चमचा गोडा मसाला",
            "१ चमचा इमली पेस्ट",
            "१ चमचा गूळ",
            "१/२ चमचा राई",
            "१/२ चमचा हिंग",
            "मीठ चवीनुसार"
        ],
        ingredientsEn: [
            "1 cup toor dal",
            "1 tbsp goda masala",
            "1 tsp tamarind paste",
            "1 tsp jaggery",
            "1/2 tsp mustard seeds",
            "1/2 tsp asafoetida",
            "Salt to taste"
        ],
        steps: [
            "डाळ प्रेशर कुकरमध्ये शिजवा.",
            "कढईत तेल गरम करून राई आणि हिंग घाला.",
            "गोडा मसाला, इमली, गूळ आणि मीठ घाला.",
            "शिजलेली डाळ घालून ५ मिनिटे उकळवा.",
            "भाताबरोबर सर्व्ह करा."
        ],
        stepsEn: [
            "Cook toor dal in pressure cooker.",
            "Heat oil in pan, add mustard seeds and asafoetida.",
            "Add goda masala, tamarind, jaggery and salt.",
            "Add cooked dal and simmer for 5 minutes.",
            "Serve with rice."
        ]
    },
    {
        id: 33,
        name: "काजू कतली",
        nameEn: "Kaju Katli",
        category: "sweets",
        image: "kaju.png",
        ingredients: [
            "१ कप काजू पूड",
            "१/२ कप साखर",
            "१/४ कप पाणी",
            "१ चमचा तूप"
        ],
        ingredientsEn: [
            "1 cup cashew powder",
            "1/2 cup sugar",
            "1/4 cup water",
            "1 tsp ghee"
        ],
        steps: [
            "साखर आणि पाणी एकत्र करून पातळ सिरप तयार करा.",
            "काजू पूड घालून चांगले मिक्स करा.",
            "तूप घालून ५ मिनिटे शिजवा.",
            "थंड होऊ द्या आणि पातळ वाटोळे करा.",
            "कतलीच्या आकारात कापून सर्व्ह करा."
        ],
        stepsEn: [
            "Make thin syrup with sugar and water.",
            "Add cashew powder and mix well.",
            "Add ghee and cook for 5 minutes.",
            "Let it cool and roll thin.",
            "Cut into diamond shapes and serve."
        ]
    },
    {
        id: 34,
        name: "आळूची वडी",
        nameEn: "Aluchi Vadi",
        category: "snacks",
        image: "aluchi.png",
        ingredients: [
            "८-१० आळूची पाने",
            "१ कप बेसन",
            "१ चमचा तिखट",
            "१ चमचा इमली पेस्ट",
            "तेल तळण्यासाठी"
        ],
        ingredientsEn: [
            "8-10 colocasia leaves",
            "1 cup gram flour (besan)",
            "1 tbsp red chili powder",
            "1 tsp tamarind paste",
            "Oil for frying"
        ],
        steps: [
            "बेसन, तिखट आणि इमली पेस्ट मिसळून पेस्ट तयार करा.",
            "आळूच्या पानावर पेस्ट लावून रोल करा.",
            "स्टीमरमध्ये १५ मिनिटे वाफवा.",
            "थंड होऊ द्या आणि चकत्या करा.",
            "तेलात क्रिस्पी होईपर्यंत तळा.",
            "चटणीबरोबर सर्व्ह करा."
        ],
        stepsEn: [
            "Make paste with besan, chili powder and tamarind.",
            "Apply paste on leaves and roll them.",
            "Steam for 15 minutes.",
            "Let it cool and slice.",
            "Fry until crispy.",
            "Serve with chutney."
        ]
    },
    {
        id: 35,
        name: "कोंबडी वडे",
        nameEn: "Kombdi Vade",
        category: "lunch",
        image: "kombdi.png",
        ingredients: [
            "१ कोंबडी (चिकन)",
            "२ कप गव्हाचे पीठ",
            "१ चमचा लसूण-आले पेस्ट",
            "१ चमचा गरम मसाला",
            "१ चमचा धणे पूड",
            "तेल तळण्यासाठी"
        ],
        ingredientsEn: [
            "1 chicken (cut into pieces)",
            "2 cups wheat flour",
            "1 tbsp garlic-ginger paste",
            "1 tsp garam masala",
            "1 tsp coriander powder",
            "Oil for frying"
        ],
        steps: [
            "चिकन लसूण-आले पेस्ट आणि मसाले लावून ३० मिनिटे मरीनेट करा.",
            "प्रेशर कुकरमध्ये ४ शिट्टी पर्यंत शिजवा.",
            "गव्हाच्या पिठापासून वडे तळा.",
            "चिकन आणि वडे गरमागरम सर्व्ह करा."
        ],
        stepsEn: [
            "Marinate chicken with garlic-ginger paste and spices for 30 mins.",
            "Cook in pressure cooker for 4 whistles.",
            "Fry vade from wheat flour dough.",
            "Serve hot chicken with vade."
        ]
    },
    {
        id: 36,
        name: "तांबडा रस्सा",
        nameEn: "Tambda Rassa",
        category: "lunch",
        image: "rassa.png",
        ingredients: [
            "५०० ग्रॅम मटण",
            "२ मध्यम कांदे",
            "१५-२० लाल मिरच्या",
            "१ चमचा कोकम",
            "१ चमचा जिरे पूड",
            "१ चमचा तेल"
        ],
        ingredientsEn: [
            "500g mutton",
            "2 medium onions",
            "15-20 red chilies",
            "1 tsp kokum",
            "1 tsp cumin powder",
            "1 tbsp oil"
        ],
        steps: [
            "मटण प्रेशर कुकरमध्ये अर्धवट शिजवा.",
            "कांदे आणि मिरच्या भेटवून पेस्ट बनवा.",
            "तेलात पेस्ट परता, शिजलेले मटण आणि कोकम घाला.",
            "१५ मिनिटे उकळवा. भाकरीबरोबर सर्व्ह करा."
        ],
        stepsEn: [
            "Partially cook mutton in pressure cooker.",
            "Grind onions and chilies to paste.",
            "Sauté paste in oil, add mutton and kokum.",
            "Simmer for 15 mins. Serve with bhakri."
        ]
    },
    {
        id: 37,
        name: "कोथिंबीर भात",
        nameEn: "Kothimbir Bhaat",
        category: "lunch",
        image: "kothimbirbhaat.png",
        ingredients: [
            "२ कप तांदूळ",
            "१ कप कोथिंबीर",
            "१ चमचा लसूण",
            "१ चमचा जिरे",
            "१ चमचा तेल"
        ],
        ingredientsEn: [
            "2 cups rice",
            "1 cup coriander leaves",
            "1 tsp garlic",
            "1 tsp cumin seeds",
            "1 tbsp oil"
        ],
        steps: [
            "तांदूळ शिजवून ठेवा.",
            "तेलात जिरे-लसूण परता.",
            "चिरलेली कोथिंबीर घालून २ मिनिटे परता.",
            "शिजलेले तांदूळ घालून मिक्स करा."
        ],
        stepsEn: [
            "Cook rice and keep aside.",
            "Temper cumin-garlic in oil.",
            "Add chopped coriander and sauté for 2 mins.",
            "Mix with cooked rice and serve."
        ]
    },
    {
        id: 38,
        name: "वरहाडी बिर्याणी",
        nameEn: "Varhadi Biryani",
        category: "lunch",
        image: "varhadi.png",
        ingredients: [
            "२ कप तांदूळ",
            "५०० ग्रॅम मटण",
            "२ कांदे",
            "१/२ कप दही",
            "२ चमचे वरहाडी मसाला",
            "१ चमचा तेल"
        ],
        ingredientsEn: [
            "2 cups rice",
            "500g mutton",
            "2 onions",
            "1/2 cup curd",
            "2 tbsp Varhadi masala",
            "1 tbsp oil"
        ],
        steps: [
            "मटण दही आणि वरहाडी मसाल्यात मरीनेट करा.",
            "कांदे भेटवून तेलात परता.",
            "मटण आणि तांदूळ एकत्र शिजवा.",
            "१५ मिनिटे डम्प करून ठेवा."
        ],
        stepsEn: [
            "Marinate mutton in curd and Varhadi masala.",
            "Sauté ground onions in oil.",
            "Cook mutton and rice together.",
            "Dum for 15 mins before serving."
        ]
    },
    {
        id: 39,
        name: "पूरी भाजी",
        nameEn: "Puri Bhaji",
        category: "breakfast",
        image: "puribhaji.png",
        ingredients: [
            "२ कप गव्हाचे पीठ",
            "४ बटाटे",
            "२ हिरव्या मिरच्या",
            "१ चमचा मोहरी",
            "१ चमचा हळद",
            "२ चमचे तेल"
        ],
        ingredientsEn: [
            "2 cups wheat flour",
            "4 potatoes",
            "2 green chilies",
            "1 tsp mustard seeds",
            "1 tsp turmeric",
            "2 tbsp oil"
        ],
        steps: [
            "बटाटे उकडून, सोलून फोडी करा.",
            "तेलात मोहरी फोडून मिरची आणि हळद टाका.",
            "बटाटे घालून ५ मिनिटे परता.",
            "गव्हाचे पीठ मळून, पोळीसारखी पुरी लाटून तळा."
        ],
        stepsEn: [
            "Boil and dice the potatoes.",
            "Heat oil, splutter mustard seeds, add chilies and turmeric.",
            "Add potatoes and sauté for 5 minutes.",
            "Knead wheat flour, roll puris and deep fry."
        ]
    },
    {
        id: 40,
        name: "शेवयांची खीर",
        nameEn: "Shevayachi Kheer",
        category: "sweets",
        image: "shevayachikheer.png",
        ingredients: [
            "१ कप शेवया",
            "१ लिटर दूध",
            "१ कप साखर",
            "१० काजू",
            "१० बदाम",
            "१ चमचा इलायची पूड"
        ],
        ingredientsEn: [
            "1 cup vermicelli",
            "1 liter milk",
            "1 cup sugar",
            "10 cashews",
            "10 almonds",
            "1 tsp cardamom powder"
        ],
        steps: [
            "दुध गरम करा, शेवया परतून त्यात घाला.",
            "साखर आणि ड्रायफ्रूट्स घाला.",
            "१० मिनिटे उकळा.",
            "इलायची पूड घालून सर्व्ह करा."
        ],
        stepsEn: [
            "Boil milk, add roasted vermicelli.",
            "Add sugar and dry fruits.",
            "Simmer for 10 minutes.",
            "Add cardamom and serve."
        ]
    },
    {
        id: 41,
        name: "कटाची आमटी",
        nameEn: "Katachi Amti",
        category: "lunch",
        image: "katachiamti.png",
        ingredients: [
            "१ कप डाळ उकळून काढलेला पातळ कट",
            "१ चमचा गोडा मसाला",
            "१ चमचा आले लसूण पेस्ट",
            "२ टोमॅटो",
            "१ चमचा तिखट"
        ],
        ingredientsEn: [
            "1 cup thin stock from boiled dal",
            "1 tsp goda masala",
            "1 tsp ginger-garlic paste",
            "2 tomatoes",
            "1 tsp chili powder"
        ],
        steps: [
            "कट गरम करा.",
            "त्यात मसाले आणि टोमॅटो घालून उकळवा.",
            "१० मिनिटे शिजवा आणि कोथिंबीर घाला."
        ],
        stepsEn: [
            "Heat dal stock.",
            "Add spices and tomatoes, boil.",
            "Simmer 10 mins and garnish with coriander."
        ]
    },
    {
        id: 42,
        name: "गव्हाची खीर",
        nameEn: "Wheat Kheer",
        category: "sweets",
        image: "wheatkheer.png",
        ingredients: [
            "१ कप गव्हाचे दाणे",
            "१ लिटर दूध",
            "१ कप साखर",
            "१ चमचा वेलदोडा पूड",
            "काजू-बदाम"
        ],
        ingredientsEn: [
            "1 cup wheat grains",
            "1 litre milk",
            "1 cup sugar",
            "1 tsp cardamom powder",
            "Cashew-almonds"
        ],
        steps: [
            "गहू रात्री भिजवा.",
            "शिजवून दूधात घालून उकळवा.",
            "साखर, वेलदोडा, ड्रायफ्रूट्स घालून शिजवा."
        ],
        stepsEn: [
            "Soak wheat overnight.",
            "Cook and boil in milk.",
            "Add sugar, cardamom, dry fruits, simmer."
        ]
    },
    {
        id: 43,
        name: "मसाला भात",
        nameEn: "Masala Bhaat",
        category: "lunch",
        image: "masalabhaat.png",
        ingredients: [
            "२ कप तांदूळ",
            "१ चमचा गोडा मसाला",
            "१ कांदा",
            "१ चमचा तिखट",
            "४-५ काळे मिरे",
            "कढीपत्ता"
        ],
        ingredientsEn: [
            "2 cups rice",
            "1 tbsp goda masala",
            "1 onion",
            "1 tsp chili powder",
            "4-5 black pepper",
            "Curry leaves"
        ],
        steps: [
            "कांदा- मसाले परतवा.",
            "तांदूळ आणि पाणी घालून शिजवा.",
            "कोथिंबीर टाका."
        ],
        stepsEn: [
            "Sauté onion and spices.",
            "Add rice, water and cook.",
            "Garnish with coriander."
        ]
    },
    {
        id: 44,
        name: "मुळा पराठा",
        nameEn: "Mula Paratha",
        category: "breakfast",
        image: "mulaparatha.png",
        ingredients: [
            "२ कप गव्हाचे पीठ",
            "१ मुळा किसलेला",
            "१ चमचा हळद",
            "१ चमचा तिखट",
            "कोथिंबीर"
        ],
        ingredientsEn: [
            "2 cups wheat flour",
            "1 grated radish",
            "1 tsp turmeric",
            "1 tsp red chili powder",
            "Coriander leaves"
        ],
        steps: [
            "सर्व साहित्य मिसळून पीठ मळा.",
            "पोळ्या लाटून तव्यावर भाजा.",
            "लोण्यासोबत सर्व्ह करा."
        ],
        stepsEn: [
            "Mix all ingredients into dough.",
            "Roll parathas and roast on tawa.",
            "Serve with butter."
        ]
    },
    {
        id: 45,
        name: "टाकुंबी भाजी",
        nameEn: "Takumbi Bhaji (Pumpkin Curry)",
        category: "lunch",
        image: "takumbi.png",
        ingredients: [
            "५०० ग्रॅम टाकुंबी (कोहाळा)",
            "१ चमचा तिखट",
            "१ चमचा गोडा मसाला",
            "१ चमचा गूळ",
            "तेल, मीठ"
        ],
        ingredientsEn: [
            "500g pumpkin",
            "1 tsp red chili powder",
            "1 tsp goda masala",
            "1 tsp jaggery",
            "Oil, salt"
        ],
        steps: [
            "कापलेली टाकुंबी तेलात परतवा.",
            "मसाले, गूळ घालून पाणी शिंपडा.",
            "सॉफ्ट होईपर्यंत झाकून शिजवा."
        ],
        stepsEn: [
            "Sauté pumpkin in oil.",
            "Add spices, jaggery, sprinkle water.",
            "Cover and cook till soft."
        ]
    },
    
    {
        id: 46,
        name: "कुरकुरीत वडे",
        nameEn: "Kurkuri Vade",
        category: "snacks",
        image: "kurkuri_vade.png",
        ingredients: [
            "२ कप तांदळाचे पीठ",
            "१ चमचा तीखट",
            "१ चमचा जिरे",
            "१ चमचा हळद",
            "तेल, मीठ"
        ],
        ingredientsEn: [
            "2 cups rice flour",
            "1 tsp red chili powder",
            "1 tsp cumin seeds",
            "1 tsp turmeric",
            "Oil, salt"
        ],
        steps: [
            "सर्व साहित्य मिक्स करून पीठ भिजवा.",
            "वडे लाटून तळून घ्या.",
            "सोनेरी होईपर्यंत तळा."
        ],
        stepsEn: [
            "Mix all ingredients, knead into dough.",
            "Roll into discs and deep fry.",
            "Fry till golden and crisp."
        ]
    }
];


// Language translations
const translations = {
    en: {
        siteTitle: "Maharashtrian Recipes",
        categoriesTitle: "Categories",
        all: "All",
        breakfast: "Breakfast",
        lunch: "Lunch",
        snacks: "Snacks",
        sweets: "Sweets",
        ingredientsTitle: "Ingredients",
        stepsTitle: "Steps",
        footerText: "© 2023 Maharashtrian Recipes - All Rights Reserved",
        searchPlaceholder: "Search recipes..."
    },
    mr: {
        siteTitle: "महाराष्ट्रीय पाककृती",
        categoriesTitle: "प्रकार",
        all: "सर्व",
        breakfast: "नाश्ता",
        lunch: "जेवण",
        snacks: "नाश्ता",
        sweets: "मिठाई",
        ingredientsTitle: "साहित्य",
        stepsTitle: "कृती",
        footerText: "© 2023 महाराष्ट्रीय पाककृती - सर्व हक्क राखीव",
        searchPlaceholder: "पाककृती शोधा..."
    }
};

// DOM Elements
const recipesContainer = document.getElementById('recipes-container');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoryButtons = document.querySelectorAll('.category-btn');
const recipeModal = document.getElementById('recipe-modal');
const closeBtn = document.querySelector('.close-btn');
const langEnBtn = document.getElementById('lang-en');
const langMrBtn = document.getElementById('lang-mr');

// Current language (default: Marathi)
let currentLang = 'mr';

// Display recipes
function displayRecipes(recipesToDisplay) {
    recipesContainer.innerHTML = '';
    
    if (recipesToDisplay.length === 0) {
        recipesContainer.innerHTML = `<p class="no-recipes">${currentLang === 'en' ? 'No recipes found' : 'पाककृती सापडली नाही'}</p>`;
        return;
    }
    
    recipesToDisplay.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${currentLang === 'en' ? recipe.nameEn : recipe.name}" class="recipe-image">
            <div class="recipe-info">
                <h3>${currentLang === 'en' ? recipe.nameEn : recipe.name}</h3>
                <p>${currentLang === 'en' ? 'Category: ' + recipe.category : 'प्रकार: ' + translations.mr[recipe.category]}</p>
                <button class="view-recipe-btn" data-id="${recipe.id}">
                    ${currentLang === 'en' ? 'View Recipe' : 'पाककृती पहा'}
                </button>
            </div>
        `;
        recipesContainer.appendChild(recipeCard);
    });
    
    // Add event listeners to view recipe buttons
    document.querySelectorAll('.view-recipe-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const recipeId = parseInt(btn.getAttribute('data-id'));
            showRecipeModal(recipeId);
        });
    });
}

// Show recipe modal
function showRecipeModal(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    document.getElementById('modal-title').textContent = currentLang === 'en' ? recipe.nameEn : recipe.name;
    document.getElementById('modal-image').src = recipe.image;
    document.getElementById('modal-image').alt = currentLang === 'en' ? recipe.nameEn : recipe.name;
    
    const ingredientsList = document.getElementById('ingredients-list');
    ingredientsList.innerHTML = '';
    const ingredients = currentLang === 'en' ? recipe.ingredientsEn : recipe.ingredients;
    ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });
    
    const stepsList = document.getElementById('steps-list');
    stepsList.innerHTML = '';
    const steps = currentLang === 'en' ? recipe.stepsEn : recipe.steps;
    steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        stepsList.appendChild(li);
    });
    
    // Translate modal headings
    document.getElementById('ingredients-title').textContent = translations[currentLang].ingredientsTitle;
    document.getElementById('steps-title').textContent = translations[currentLang].stepsTitle;
    
    recipeModal.style.display = 'block';
}

// Filter recipes by category
function filterRecipesByCategory(category) {
    if (category === 'all') {
        displayRecipes(recipes);
        return;
    }
    
    const filteredRecipes = recipes.filter(recipe => recipe.category === category);
    displayRecipes(filteredRecipes);
}

// Search recipes
function searchRecipes() {
    const searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm === '') {
        displayRecipes(recipes);
        return;
    }
    
    const searchedRecipes = recipes.filter(recipe => {
        return (
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.nameEn.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm)) ||
            recipe.ingredientsEn.some(ing => ing.toLowerCase().includes(searchTerm))
        );
    });
    
    displayRecipes(searchedRecipes);
}

// Change language
function changeLanguage(lang) {
    currentLang = lang;
    
    // Update UI elements
    document.getElementById('site-title').textContent = translations[lang].siteTitle;
    document.getElementById('categories-title').textContent = translations[lang].categoriesTitle;
    document.getElementById('footer-text').textContent = translations[lang].footerText;
    searchInput.placeholder = translations[lang].searchPlaceholder;
    
    // Update category buttons
    document.querySelector('[data-category="all"]').textContent = translations[lang].all;
    document.querySelector('[data-category="breakfast"]').textContent = translations[lang].breakfast;
    document.querySelector('[data-category="lunch"]').textContent = translations[lang].lunch;
    document.querySelector('[data-category="snacks"]').textContent = translations[lang].snacks;
    document.querySelector('[data-category="sweets"]').textContent = translations[lang].sweets;
    
    // Update active language button
    if (lang === 'en') {
        langEnBtn.classList.add('active');
        langMrBtn.classList.remove('active');
    } else {
        langMrBtn.classList.add('active');
        langEnBtn.classList.remove('active');
    }
    
    // Refresh recipes display
    displayRecipes(recipes);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    displayRecipes(recipes);
});

searchBtn.addEventListener('click', searchRecipes);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchRecipes();
    }
});

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterRecipesByCategory(button.getAttribute('data-category'));
    });
});

closeBtn.addEventListener('click', () => {
    recipeModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === recipeModal) {
        recipeModal.style.display = 'none';
    }
});

langEnBtn.addEventListener('click', () => changeLanguage('en'));
langMrBtn.addEventListener('click', () => changeLanguage('mr'));
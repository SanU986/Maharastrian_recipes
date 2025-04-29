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
        "image": "image.png",
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
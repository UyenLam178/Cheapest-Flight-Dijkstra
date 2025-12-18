const cities = {
    // Cuba
    "Havana": [23.1136, -82.3666],
    "Santiago de Cuba": [20.0247, -75.8219],
    
    // Mexico
    "Mexico City": [19.4326, -99.1332],
    "Guadalajara": [20.6597, -103.3496],
    "Monterrey": [25.6866, -100.3161],
    
    // Colombia
    "Bogota": [4.7110, -74.0721],
    "Medellin": [6.2442, -75.5812],
    "Cali": [3.4516, -76.5320],
    
    // Kenya
    "Nairobi": [-1.2921, 36.8219],
    "Mombasa": [-4.0435, 39.6682],
    
    // Indonesia
    "Jakarta": [-6.2088, 106.8456],
    "Surabaya": [-7.2575, 112.7521],
    "Bandung": [-6.9175, 107.6191],
    
    // China
    "Beijing": [39.9042, 116.4074],
    "Shanghai": [31.2304, 121.4737],
    "Guangzhou": [23.1291, 113.2644],
    "Chengdu": [30.5728, 104.0668],
    
    // Japan
    "Tokyo": [35.6762, 139.6503],
    "Osaka": [34.6937, 135.5023],
    "Nagoya": [35.1815, 136.9066],
    
    // Vietnam
    "Ho Chi Minh city": [10.8231, 106.6297], 
    "Ha Noi": [21.0278, 105.8342],
    "Da Nang": [16.0544, 108.2022],
    
    // USA
    "New York": [40.7128, -74.0060],
    "Los Angeles": [34.0522, -118.2437],
    "Chicago": [41.8781, -87.6298],
    "Houston": [29.7604, -95.3698],
    "Miami": [25.7617, -80.1918],
    
    // France
    "Paris": [48.8566, 2.3522],
    "Marseille": [43.2965, 5.3698],
    "Lyon": [45.7640, 4.8357],
    
    // Thailand
    "Bangkok": [13.7563, 100.5018],
    "Chiang Mai": [18.7883, 98.9853],
    "Phuket": [7.8804, 98.3923],
    
    // UK
    "London": [51.5074, 0.1278],
    "Manchester": [53.4808, -2.2426],
    "Edinburgh": [55.9533, -3.1883],
    
    // Germany
    "Berlin": [52.5200, 13.4050],
    "Munich": [48.1351, 11.5820],
    "Frankfurt": [50.1109, 8.6821],
    
    // Spain
    "Madrid": [40.4168, -3.7038],
    "Barcelona": [41.3851, 2.1734],
    "Valencia": [39.4699, -0.3763],
    
    // Italy
    "Napoli": [40.8518, 14.2681],
    "Rome": [41.9028, 12.4964],
    "Milan": [45.4642, 9.1900],
    
    // Greece
    "Lamia": [38.8959, 22.4338],
    "Athens": [37.9838, 23.7275],
    
    // Egypt
    "Shubra el-Kheima": [30.1340, 31.2384],
    "Cairo": [30.0444, 31.2357],
    "Alexandria": [31.2001, 29.9187],
    
    // South Africa
    "West Rand": [-26.2907, 27.5029],
    "Cape Town": [-33.9249, 18.4241],
    "Durban": [-29.8587, 31.0218],
    
    // Nigeria
    "Benin City": [6.3333, 5.6167],
    "Lagos": [6.5244, 3.3792],
    "Abuja": [9.0765, 7.3986]
};

const countries = {
    // Cuba
    "Havana": "Cuba", "Santiago de Cuba": "Cuba",
    
    // Mexico
    "Mexico City": "Mexico", "Guadalajara": "Mexico", "Monterrey": "Mexico",
    
    // Colombia
    "Bogota": "Colombia", "Medellin": "Colombia", "Cali": "Colombia",
    
    // Kenya
    "Nairobi": "Kenya", "Mombasa": "Kenya",
    
    // Indonesia
    "Jakarta": "Indonesia", "Surabaya": "Indonesia", "Bandung": "Indonesia",
    
    // China
    "Beijing": "Trung Quốc", "Shanghai": "Trung Quốc", "Guangzhou": "Trung Quốc", "Chengdu": "Trung Quốc",
    
    // Japan
    "Tokyo": "Nhật Bản", "Osaka": "Nhật Bản", "Nagoya": "Nhật Bản",
    
    // Vietnam
    "Ho Chi Minh city": "Việt Nam", "Ha Noi": "Việt Nam", "Da Nang": "Việt Nam",
    
    // USA
    "New York": "Mỹ", "Los Angeles": "Mỹ", "Chicago": "Mỹ", "Houston": "Mỹ", "Miami": "Mỹ",
    
    // France
    "Paris": "Pháp", "Marseille": "Pháp", "Lyon": "Pháp",
    
    // Thailand
    "Bangkok": "Thái Lan", "Chiang Mai": "Thái Lan", "Phuket": "Thái Lan",
    
    // UK
    "London": "Vương quốc Anh", "Manchester": "Vương quốc Anh", "Edinburgh": "Vương quốc Anh",
    
    // Germany
    "Berlin": "Đức", "Munich": "Đức", "Frankfurt": "Đức",
    
    // Spain
    "Madrid": "Tây Ban Nha", "Barcelona": "Tây Ban Nha", "Valencia": "Tây Ban Nha",
    
    // Italy
    "Napoli": "Ý", "Rome": "Ý", "Milan": "Ý",
    
    // Greece
    "Lamia": "Hy Lạp", "Athens": "Hy Lạp",
    
    // Egypt
    "Shubra el-Kheima": "Ai Cập", "Cairo": "Ai Cập", "Alexandria": "Ai Cập",
    
    // South Africa
    "West Rand": "Nam Phi", "Cape Town": "Nam Phi", "Durban": "Nam Phi",
    
    // Nigeria
    "Benin City": "Nigeria", "Lagos": "Nigeria", "Abuja": "Nigeria"
};

const continents = {
    // Americas
    "Havana": "Châu Mỹ", "Santiago de Cuba": "Châu Mỹ",
    "Mexico City": "Châu Mỹ", "Guadalajara": "Châu Mỹ", "Monterrey": "Châu Mỹ",
    "Bogota": "Châu Mỹ", "Medellin": "Châu Mỹ", "Cali": "Châu Mỹ",
    "New York": "Châu Mỹ", "Los Angeles": "Châu Mỹ", "Chicago": "Châu Mỹ", "Houston": "Châu Mỹ", "Miami": "Châu Mỹ",
    
    // Africa
    "Nairobi": "Châu Phi", "Mombasa": "Châu Phi",
    "Shubra el-Kheima": "Châu Phi", "Cairo": "Châu Phi", "Alexandria": "Châu Phi",
    "West Rand": "Châu Phi", "Cape Town": "Châu Phi", "Durban": "Châu Phi",
    "Benin City": "Châu Phi", "Lagos": "Châu Phi", "Abuja": "Châu Phi",
    
    // Asia
    "Jakarta": "Châu Á", "Surabaya": "Châu Á", "Bandung": "Châu Á",
    "Beijing": "Châu Á", "Shanghai": "Châu Á", "Guangzhou": "Châu Á", "Chengdu": "Châu Á",
    "Tokyo": "Châu Á", "Osaka": "Châu Á", "Nagoya": "Châu Á",
    "Ho Chi Minh city": "Châu Á", "Ha Noi": "Châu Á", "Da Nang": "Châu Á",
    "Bangkok": "Châu Á", "Chiang Mai": "Châu Á", "Phuket": "Châu Á",
    
    // Europe
    "Paris": "Châu Âu", "Marseille": "Châu Âu", "Lyon": "Châu Âu",
    "London": "Châu Âu", "Manchester": "Châu Âu", "Edinburgh": "Châu Âu",
    "Berlin": "Châu Âu", "Munich": "Châu Âu", "Frankfurt": "Châu Âu",
    "Madrid": "Châu Âu", "Barcelona": "Châu Âu", "Valencia": "Châu Âu",
    "Napoli": "Châu Âu", "Rome": "Châu Âu", "Milan": "Châu Âu",
    "Lamia": "Châu Âu", "Athens": "Châu Âu"
};

const graph = {
    // China - Domestic + International
    "Beijing": { "Shanghai": 150, "Guangzhou": 250, "Chengdu": 200, "Tokyo": 700, "Jakarta": 1200, "Ha Noi": 600, "Berlin": 1500 },
    "Shanghai": { "Beijing": 150, "Guangzhou": 180, "Chengdu": 220, "Tokyo": 600, "Osaka": 650 },
    "Guangzhou": { "Beijing": 250, "Shanghai": 180, "Chengdu": 240, "Ha Noi": 400, "Bangkok": 350 },
    "Chengdu": { "Beijing": 200, "Shanghai": 220, "Guangzhou": 240 },
    
    // Japan - Domestic + International
    "Tokyo": { "Osaka": 80, "Nagoya": 60, "Beijing": 700, "Shanghai": 600, "Jakarta": 1000, "Ha Noi": 800, "New York": 2500 },
    "Osaka": { "Tokyo": 80, "Nagoya": 50, "Shanghai": 650, "Bangkok": 900 },
    "Nagoya": { "Tokyo": 60, "Osaka": 50 },
    
    // Indonesia - Domestic + International
    "Jakarta": { "Surabaya": 100, "Bandung": 80, "Tokyo": 1000, "Beijing": 1200, "Nairobi": 1500, "Ho Chi Minh city": 400, "Bangkok": 300 },
    "Surabaya": { "Jakarta": 100, "Bandung": 120 },
    "Bandung": { "Jakarta": 80, "Surabaya": 120 },
    
    // Vietnam - Domestic + International
    "Ho Chi Minh city": { "Ha Noi": 150, "Da Nang": 100, "Jakarta": 400, "Bangkok": 200 }, 
    "Ha Noi": { "Ho Chi Minh city": 150, "Da Nang": 80, "Beijing": 600, "Tokyo": 800, "Bangkok": 250, "Guangzhou": 400 },
    "Da Nang": { "Ha Noi": 80, "Ho Chi Minh city": 100, "Bangkok": 280 },
    
    // Thailand - Domestic + International
    "Bangkok": { "Chiang Mai": 90, "Phuket": 120, "Ho Chi Minh city": 200, "Ha Noi": 250, "Jakarta": 300, "Berlin": 1400, "Guangzhou": 350, "Osaka": 900 },
    "Chiang Mai": { "Bangkok": 90, "Phuket": 150 },
    "Phuket": { "Bangkok": 120, "Chiang Mai": 150 },
    
    // USA - Domestic + International
    "New York": { "Los Angeles": 400, "Chicago": 180, "Houston": 300, "Miami": 250, "Mexico City": 800, "Tokyo": 2500, "Havana": 700, "London": 700 },
    "Los Angeles": { "New York": 400, "Chicago": 350, "Houston": 280, "Miami": 450, "Tokyo": 1800 },
    "Chicago": { "New York": 180, "Los Angeles": 350, "Houston": 200, "Miami": 300 },
    "Houston": { "New York": 300, "Los Angeles": 280, "Chicago": 200, "Miami": 180, "Mexico City": 500 },
    "Miami": { "New York": 250, "Los Angeles": 450, "Chicago": 300, "Houston": 180, "Havana": 200 },
    
    // Kenya - Domestic + International
    "Nairobi": { "Mombasa": 100, "Jakarta": 1500, "Bogota": 2000, "Madrid": 1800, "West Rand": 800, "Shubra el-Kheima": 700 },
    "Mombasa": { "Nairobi": 100 },
    
    // Colombia - Domestic + International
    "Bogota": { "Medellin": 70, "Cali": 80, "Nairobi": 2000, "Mexico City": 600, "Havana": 400 },
    "Medellin": { "Bogota": 70, "Cali": 90 },
    "Cali": { "Bogota": 80, "Medellin": 90 },
    
    // Mexico - Domestic + International
    "Mexico City": { "Guadalajara": 100, "Monterrey": 150, "Bogota": 600, "Havana": 300, "New York": 800, "Houston": 500 },
    "Guadalajara": { "Mexico City": 100, "Monterrey": 120 },
    "Monterrey": { "Mexico City": 150, "Guadalajara": 120, "Houston": 300 },
    
    // Cuba - Domestic + International
    "Havana": { "Santiago de Cuba": 130, "Mexico City": 300, "Bogota": 400, "Madrid": 1000, "Miami": 200 },
    "Santiago de Cuba": { "Havana": 130 },
    
    // France - Domestic + International
    "Paris": { "Marseille": 110, "Lyon": 90, "London": 300, "Berlin": 400, "New York": 900, "Napoli": 500 }, 
    "Marseille": { "Paris": 110, "Lyon": 80 },
    "Lyon": { "Paris": 90, "Marseille": 80 },
    
    // UK - Domestic + International
    "London": { "Manchester": 70, "Edinburgh": 100, "Paris": 300, "New York": 700, "Madrid": 500 },
    "Manchester": { "London": 70, "Edinburgh": 80 },
    "Edinburgh": { "London": 100, "Manchester": 80 },
    
    // Germany - Domestic + International
    "Berlin": { "Munich": 100, "Frankfurt": 90, "Paris": 400, "Beijing": 1500, "Bangkok": 1400, "Madrid": 600 },
    "Munich": { "Berlin": 100, "Frankfurt": 70 },
    "Frankfurt": { "Berlin": 90, "Munich": 70, "London": 350 },
    
    // Spain - Domestic + International
    "Madrid": { "Barcelona": 100, "Valencia": 80, "London": 500, "Nairobi": 1800, "Havana": 1000, "Berlin": 600, "Napoli": 550 },
    "Barcelona": { "Madrid": 100, "Valencia": 70, "Paris": 350 },
    "Valencia": { "Madrid": 80, "Barcelona": 70 },
    
    // Italy - Domestic + International
    "Napoli": { "Rome": 60, "Milan": 150, "Paris": 500, "Madrid": 550, "Lamia": 200, "Shubra el-Kheima": 350 },
    "Rome": { "Napoli": 60, "Milan": 120, "Athens": 300 },
    "Milan": { "Napoli": 150, "Rome": 120, "Munich": 200 },
    
    // Greece - Domestic + International
    "Lamia": { "Athens": 50, "Napoli": 200, "Shubra el-Kheima": 400 },
    "Athens": { "Lamia": 50, "Rome": 300, "Cairo": 350 },
    
    // Egypt - Domestic + International
    "Shubra el-Kheima": { "Cairo": 20, "Alexandria": 60, "Napoli": 350, "Lamia": 400, "Nairobi": 700, "Benin City": 900 },
    "Cairo": { "Shubra el-Kheima": 20, "Alexandria": 50, "Athens": 350 },
    "Alexandria": { "Cairo": 50, "Shubra el-Kheima": 60 },
    
    // South Africa - Domestic + International
    "West Rand": { "Cape Town": 200, "Durban": 180, "Nairobi": 800, "Benin City": 750 },
    "Cape Town": { "West Rand": 200, "Durban": 250 },
    "Durban": { "West Rand": 180, "Cape Town": 250 },
    
    // Nigeria - Domestic + International
    "Benin City": { "Lagos": 80, "Abuja": 100, "Shubra el-Kheima": 900, "West Rand": 750 },
    "Lagos": { "Benin City": 80, "Abuja": 120 },
    "Abuja": { "Benin City": 100, "Lagos": 120 }
};

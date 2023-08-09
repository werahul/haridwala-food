const FoodItems = [
    {
        id: 1,
        title: "Masala Dosa",
        images: "/Images/dosa.jpg",
        category: "Breakfast",
        description: "Thin rice and lentil crepes filled with a spicy potato filling",
        price: 50.00, // Average price per plate
        rating: 4.8
    },
    {
        id: 2,
        title: "Idli Sambhar",
        images: "/Images/idli.jpg",
        category: "Breakfast",
        description: "Steamed rice and lentil cakes served with lentil soup (sambhar)",
        price: 40.00, // Average price per plate
        rating: 4.6
    },
    {
        id: 3,
        title: "Poha",
        images: "/Images/poha.jpg",
        category: "Breakfast",
        description: "Flattened rice cooked with onions, peas, and spices",
        price: 30.00, // Average price per plate
        rating: 4.3
    },
    {
        id: 4,
        title: "Upma",
        images: "/Images/upma.jpg",
        category: "Breakfast",
        description: "Savory semolina porridge with vegetables and spices",
        price: 35.00, // Average price per plate
        rating: 4.2
    },
    {
        id: 5,
        title: "Chole Chawal",
        images: "/Images/chole.jpg",
        category: "Breakfast",
        description: "Spicy chickpea curry served with rice",
        price: 55.00,
        rating: 4.5
    },
    {
        id: 6,
        title: "Rajma Chawal",
        images: "/Images/rajma.jpg",
        category: "Breakfast",
        description: "Red kidney bean curry served with rice",
        price: 60.00,
        rating: 4.4
    },
    {
        id: 7,
        title: "Chole Bhature",
        images: "/Images/bhature.jpg",
        category: "Breakfast",
        description: "Spicy chickpea curry served with fried bread (bhature)",
        price: 65.00,
        rating: 4.7
    },
    {
        id: 8,
        title: "Khasta Kachori",
        images: "/Images/khasta.jpg",
        category: "Breakfast",
        description: "Crispy deep-fried pastry filled with a spiced lentil mixture",
        price: 40.00,
        rating: 4.1
    },
    {
        id: 9,
        title: "Dal Makhani",
        images: "/Images/dal.jpg",
        category: "Lunch",
        description: "Creamy lentil curry cooked with butter and spices",
        price: 80.00,
        rating: 4.7
    },
    {
        id: 10,
        title: "Palak Paneer",
        images: "/Images/palak.jpg",
        category: "Lunch",
        description: "Paneer (Indian cottage cheese) cooked in a spinach-based gravy",
        price: 90.00,
        rating: 4.5
    },
    {
        id: 11,
        title: "Aloo Gobi",
        images: "/Images/gobi.jpg",
        category: "Lunch",
        description: "Cauliflower and potato stir-fry with spices",
        price: 70.00,
        rating: 4.2
    },
    {
        id: 12,
        title: "Bhindi Masala",
        images: "/Images/bhindi.jpg",
        category: "Lunch",
        description: "Spiced okra sautéed with onions and tomatoes",
        price: 75.00,
        rating: 4.3
    },
    {
        id: 13,
        title: "Matar Paneer",
        images: "/Images/matar.jpg",
        category: "Lunch",
        description: "Paneer (Indian cottage cheese) and green peas cooked in a tomato-based gravy",
        price: 85.00,
        rating: 4.6
    },
    {
        id: 14,
        title: "Paneer Tikka Masala",
        images: "/Images/kabbab.jpg",
        category: "Dinner",
        description: "Grilled paneer (Indian cottage cheese) in a rich tomato-based gravy",
        price: 120.00,
        rating: 4.8
    },
    {
        id: 15,
        title: "Vegetable Biryani",
        images: "/Images/biryani.jpg",
        category: "Dinner",
        description: "Fragrant rice cooked with mixed vegetables and aromatic spices",
        price: 110.00,
        rating: 4.6
    },
    {
        id: 16,
        title: "Chana Masala",
        images: "/Images/chnna.jpg",
        category: "Dinner",
        description: "Spicy chickpea curry with a blend of spices",
        price: 100.00,
        rating: 4.3
    },
    {
        id: 17,
        title: "Malai Kofta",
        images: "/Images/malaikhofta.jpg",
        category: "Dinner",
        description: "Fried vegetable dumplings in a creamy tomato-based gravy",
        price: 130.00,
        rating: 4.7
    },
    {
        id: 18,
        title: "Baingan Bharta",
        images: "/Images/bharta.jpg",
        category: "Dinner",
        description: "Smoky roasted eggplant mashed and cooked with spices",
        price: 90.00,
        rating: 4.2
    },
    {
        id: 19,
        title: "Gulab Jamun",
        images: "/Images/gulab.jpg",
        category: "Sweet",
        description: "Deep-fried milk dumplings soaked in sugar syrup",
        price: 40.00,
        rating: 4.7
    },
    {
        id: 20,
        title: "Kheer",
        images: "/Images/kheer.jpg",
        category: "Sweet",
        description: "Creamy rice pudding cooked with milk, sugar, and nuts",
        price: 50.00,
        rating: 4.5
    },
    {
        id: 21,
        title: "Rasgulla",
        images: "/Images/rasgula.jpg",
        category: "Sweet",
        description: "Soft and spongy cottage cheese balls soaked in sugar syrup",
        price: 35.00,
        rating: 4.3
    },
];


export default FoodItems;

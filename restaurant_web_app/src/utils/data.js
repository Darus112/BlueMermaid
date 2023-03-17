import food1 from "../assets/Food/food-6.png";
import food2 from "../assets/Food/food-2.png";
import food3 from "../assets/Food/food-5.png";
import food4 from "../assets/Food/food-7.png";

export const foodData = [
    {
        id : 1, 
        name : 'Vegan Salad bowl', 
        price : '12', 
        imgSrc : food1
    },
    {
        id : 2, 
        name : 'Mancare buna 2', 
        price : '15', 
        imgSrc : food2
    },
    {
        id : 3, 
        name : 'Mancare buna 3', 
        price : '13', 
        imgSrc : food3
    },
    {
        id : 4, 
        name : 'Mancare buna 4', 
        price : '18', 
        imgSrc : food4
    },
]

export const specials = [
    {
        id : 1,
        name : "Our specials",
        urlParamName : "specials",
    }
]

export const categories = [
    {
        id : 2,
        name : "Breakfast",
        urlParamName : "breakfast",
    },
    {
        id : 3,
        name : "Launch",
        urlParamName : "launch",
    },
    {
        id : 4,
        name : "Dinner",
        urlParamName : "dinner",
    },
    
]

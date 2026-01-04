import beverageIcon from "../assets/categories/beverage.png";
import groceryIcon from "../assets/categories/grocery.png";
import homeIcon from "../assets/categories/home.png";
import personalIcon from "../assets/categories/personal.png";

const categoryData = [
  {
    title: "Home Care",
    icon: homeIcon,
    bgColor: "#DDF7EA",
    items: [
      "Batteries & Utilities",
      "Dish Washers",
      "Speciality Cleaners",
      "Toilet Cleaner",
      "Insect Killers & Repellents",
      "Utensils",
      "Air/Room Fresheners",
      "Detergent & Fabric Care",
    ],
  },
  {
    title: "Personal Care",
    icon: personalIcon,
    bgColor: "#FFF6D5",
    items: [
      "Skin Care",
      "Hair Care",
      "Baby Care",
      "Oral Care",
      "Fragrance",
      "Bath & Body",
      "Cosmetic",
      "Shaving",
      "Women Care",
      "Dental Floss",
    ],
  },
  {
    title: "Groceries",
    icon: groceryIcon,
    bgColor: "#E3FCEF",
    items: [
      "Baby Food",
      "Purées and Sauces",
      "Spices",
      "Snacks/Cookies",
      "Pulses & Cereals",
      "Canned Food",
      "Pharma Products",
      "Dietary Supplements",
    ],
  },
  {
    title: "Beverages",
    icon: beverageIcon,
    bgColor: "#FFF2CC",
    items: [
      "Water-Based",
      "Plain Water",
      "Infused Water",
      "Sparkling Water",
      "Dairy",
      "Milk",
      "Tea/Coffee",
      "Soup",
      "Carbonated Drinks",
      "Juice/Drinks",
    ],
  },
];

export default categoryData;

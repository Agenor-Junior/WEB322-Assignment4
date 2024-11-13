
document.addEventListener("DOMContentLoaded", () => {
    const itemsList = document.getElementById("items-list");

    const groceryItems = [
  {
    "title": "Fresh Apples",
    "category": "Fruits",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
  },
  {
    "title": "Juicy Oranges",
    "category": "Fruits",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis fringilla sem efficitur congue. Vestibulum efficitur blandit ultricies."
  },
  {
    "title": "Bananas",
    "category": "Fruits",
    "body": "Vestibulum efficitur blandit ultricies. Sed tempus mollis orci id facilisis. Aliquam placerat, ipsum eget egestas malesuada, neque nunc scelerisque felis, ut egestas turpis augue ut nisi."
  },
  {
    "title": "Strawberries",
    "category": "Fruits",
    "body": "Cras convallis fringilla sem efficitur congue. Vestibulum efficitur blandit ultricies. Sed tempus mollis orci id facilisis."
  },
  {
    "title": "Blueberries",
    "category": "Fruits",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis fringilla sem efficitur congue."
  },
  {
    "title": "Mangoes",
    "category": "Fruits",
    "body": "Vestibulum efficitur blandit ultricies. Sed tempus mollis orci id facilisis."
  },
  {
    "title": "Pineapples",
    "category": "Fruits",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis fringilla sem efficitur congue."
  },
  {
    "title": "Grapes",
    "category": "Fruits",
    "body": "Aliquam placerat, ipsum eget egestas malesuada, neque nunc scelerisque felis, ut egestas turpis augue ut nisi."
  },
  {
    "title": "Watermelons",
    "category": "Fruits",
    "body": "Curabitur vel convallis augue."
  },
  {
    "title": "Peaches",
    "category": "Fruits",
    "body": "Sed tempus mollis orci id facilisis."
  },
  {
    "title": "Carrots",
    "category": "Vegetables",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis fringilla sem efficitur congue. Vestibulum efficitur blandit ultricies."
  },
  {
    "title": "Tomatoes",
    "category": "Vegetables",
    "body": "Sed tempus mollis orci id facilisis. Aliquam placerat, ipsum eget egestas malesuada."
  },
  {
    "title": "Broccoli",
    "category": "Vegetables",
    "body": "Vestibulum efficitur blandit ultricies. Sed tempus mollis orci id facilisis."
  },
  {
    "title": "Spinach",
    "category": "Vegetables",
    "body": "Aliquam placerat, ipsum eget egestas malesuada, neque nunc scelerisque felis."
  },
  {
    "title": "Lettuce",
    "category": "Vegetables",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis fringilla sem efficitur congue."
  },
  {
    "title": "Potatoes",
    "category": "Vegetables",
    "body": "Vestibulum efficitur blandit ultricies. Sed tempus mollis orci id facilisis."
  },
  {
    "title": "Onions",
    "category": "Vegetables",
    "body": "Aliquam placerat, ipsum eget egestas malesuada, neque nunc scelerisque felis."
  },
  {
    "title": "Bell Peppers",
    "category": "Vegetables",
    "body": "Cras convallis fringilla sem efficitur congue."
  },
  {
    "title": "Zucchini",
    "category": "Vegetables",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "title": "Cucumbers",
    "category": "Vegetables",
    "body": "Curabitur vel convallis augue."
  },
  {
    "title": "Whole Milk",
    "category": "Dairy",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis fringilla sem efficitur congue."
  },
  {
    "title": "Cheddar Cheese",
    "category": "Dairy",
    "body": "Vestibulum efficitur blandit ultricies. Sed tempus mollis orci id facilisis."
  },
  {
    "title": "Yogurt",
    "category": "Dairy",
    "body": "Aliquam placerat, ipsum eget egestas malesuada, neque nunc scelerisque felis."
  },
  {
    "title": "Butter",
    "category": "Dairy",
    "body": "Cras convallis fringilla sem efficitur congue."
  },
  {
    "title": "Cream Cheese",
    "category": "Dairy",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "title": "Greek Yogurt",
    "category": "Dairy",
    "body": "Sed tempus mollis orci id facilisis."
  },
  {
    "title": "Sour Cream",
    "category": "Dairy",
    "body": "Curabitur vel convallis augue."
  },
  {
    "title": "Mozzarella Cheese",
    "category": "Dairy",
    "body": "Vestibulum efficitur blandit ultricies."
  },
  {
    "title": "Ricotta Cheese",
    "category": "Dairy",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "title": "Cottage Cheese",
    "category": "Dairy",
    "body": "Aliquam placerat, ipsum eget egestas malesuada."
  },
  {
    "title": "Whole Grain Bread",
    "category": "Bakery",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis fringilla sem efficitur congue."
  },
  {
    "title": "Croissants",
    "category": "Bakery",
    "body": "Vestibulum efficitur blandit ultricies. Sed tempus mollis orci id facilisis."
  },
  {
    "title": "Bagels",
    "category": "Bakery",
    "body": "Aliquam placerat, ipsum eget egestas malesuada, neque nunc scelerisque felis."
  },
  {
    "title": "Muffins",
    "category": "Bakery",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "title": "Baguette",
    "category": "Bakery",
    "body": "Curabitur vel convallis augue. Sed tempus mollis orci id facilisis."
  },
  {
    "title": "Sourdough Bread",
    "category": "Bakery",
    "body": "Vestibulum efficitur blandit ultricies."
  },
  {
    "title": "Rye Bread",
    "category": "Bakery",
    "body": "Aliquam placerat, ipsum eget egestas malesuada, neque nunc scelerisque felis."
  },
  {
    "title": "Focaccia",
    "category": "Bakery",
    "body": "Cras convallis fringilla sem efficitur congue."
  },
  {
    "title": "Pita Bread",
    "category": "Bakery",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "title": "Cinnamon Rolls",
    "category": "Bakery",
    "body": "Curabitur vel convallis augue."
  },
  {
    "title": "Chicken Breast",
    "category": "Meat",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis fringilla sem efficitur congue."
  },
  {
    "title": "Ground Beef",
    "category": "Meat",
    "body": "Vestibulum efficitur blandit ultricies. Sed tempus mollis orci id facilisis."
  },
  {
    "title": "Pork Chops",
    "category": "Meat",
    "body": "Aliquam placerat, ipsum eget egestas malesuada, neque nunc scelerisque felis."
  },
  {
    "title": "Salmon Fillet",
    "category": "Meat",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "title": "Turkey Breast",
    "category": "Meat",
    "body": "Curabitur vel convallis augue. Sed tempus mollis orci id facilisis."
  },
  {
    "title": "Lamb Chops",
    "category": "Meat",
    "body": "Vestibulum efficitur blandit ultricies."
  },
  {
    "title": "Bacon",
    "category": "Meat",
    "body": "Aliquam placerat, ipsum eget egestas malesuada, neque nunc scelerisque felis."
  },
  {
    "title": "Sausage",
    "category": "Meat",
    "body": "Cras convallis fringilla sem efficitur congue."
  },
  {
    "title": "Steak",
    "category": "Meat",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    "title": "Pork Ribs",
    "category": "Meat",
    "body": "Curabitur vel convallis augue."
  }
];

    populateItems(groceryItems);

    function populateItems(items) {
        if (!itemsList) {
            console.error("itemsList element not found.");
            return;
        }

        itemsList.innerHTML = "";
        itemsList.style.textAlign = "center";
        itemsList.style.listStyleType = "none";
        itemsList.style.padding = "0";
        itemsList.style.display = "flex";
        itemsList.style.flexDirection = "column";
        itemsList.style.alignItems = "center";

        items.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.title} (${item.category}) - ${item.body}`;
            listItem.style.marginBottom = "8px";
            itemsList.appendChild(listItem);
        });
    }
});

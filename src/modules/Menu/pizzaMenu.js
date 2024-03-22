const pizzaMenu = [
  {
    title: "Classic",
    showItems: true,
    items: [
      {
        name: "Margherita",
        ingredients: "Tomato sauce, mozzarella, basil",
        price: "€ 8.99",
      },
      {
        name: "Marinara",
        ingredients: "Tomato sauce, garlic, oregano",
        price: "€ 7.99",
      },
      {
        name: "Quattro Stagioni",
        ingredients:
          "Tomato sauce, mozzarella, mushrooms, ham, artichokes, olives",
        price: "€ 11.99",
      },
      {
        name: "Capricciosa",
        ingredients:
          "Tomato sauce, mozzarella, ham, mushrooms, artichokes, olives",
        price: "€ 11.99",
      },
      {
        name: "Diavola",
        ingredients: "Tomato sauce, mozzarella, spicy salami",
        price: "€ 10.99",
      },
      {
        name: "Napoletana",
        ingredients: "Tomato sauce, mozzarella, anchovies, capers, olives",
        price: "€ 9.99",
      },
      {
        name: "Romana",
        ingredients: "Tomato sauce, mozzarella, anchovies, capers, oregano",
        price: "€ 9.99",
      },
      {
        name: "Prosciutto e Funghi",
        ingredients: "Tomato sauce, mozzarella, ham, mushrooms",
        price: "€ 10.99",
      },
      {
        name: "Quattro Formaggi",
        ingredients: "Tomato sauce, mozzarella, gorgonzola, parmesan, fontina",
        price: "€ 11.99",
      },
      {
        name: "Siciliana",
        ingredients: "Tomato sauce, mozzarella, eggplant, olives, capers",
        price: "€ 10.99",
      },
    ],
  },
  {
    title: "Seafood",
    showItems: true,
    items: [
      {
        name: "Frutti di Mare",
        ingredients: "Tomato sauce, mozzarella, mixed seafood",
        price: "€ 12.99",
      },
      {
        name: "Tonno e Cipolla",
        ingredients: "Tomato sauce, mozzarella, tuna, onion",
        price: "€ 11.99",
      },
      {
        name: "Salmone",
        ingredients: "Tomato sauce, mozzarella, smoked salmon, arugula",
        price: "€ 13.99",
      },
      {
        name: "Acciughe",
        ingredients: "Tomato sauce, mozzarella, anchovies, parsley",
        price: "€ 9.99",
      },
      {
        name: "Gamberetti",
        ingredients: "Tomato sauce, mozzarella, shrimp, garlic",
        price: "€ 12.99",
      },
      {
        name: "Calamari",
        ingredients: "Tomato sauce, mozzarella, calamari, parsley",
        price: "€ 11.99",
      },
      {
        name: "Capesante",
        ingredients: "Tomato sauce, mozzarella, scallops, bacon",
        price: "€ 14.99",
      },
      {
        name: "Pescatore",
        ingredients: "Tomato sauce, mozzarella, mixed seafood, garlic",
        price: "€ 13.99",
      },
      {
        name: "Scampi",
        ingredients: "Tomato sauce, mozzarella, scampi, garlic",
        price: "€ 14.99",
      },
      {
        name: "Polpo",
        ingredients: "Tomato sauce, mozzarella, octopus, parsley",
        price: "€ 12.99",
      },
    ],
  },
  {
    title: "Meat",
    showItems: true,
    items: [
      {
        name: "Pepperoni",
        ingredients: "Tomato sauce, mozzarella, pepperoni",
        price: "€ 10.99",
      },
      {
        name: "Salsiccia",
        ingredients: "Tomato sauce, mozzarella, Italian sausage",
        price: "€ 10.99",
      },
      {
        name: "Prosciutto",
        ingredients: "Tomato sauce, mozzarella, prosciutto",
        price: "€ 11.99",
      },
      {
        name: "Bresaola",
        ingredients: "Tomato sauce, mozzarella, bresaola, arugula, parmesan",
        price: "€ 12.99",
      },
      {
        name: "Salame",
        ingredients: "Tomato sauce, mozzarella, salami",
        price: "€ 10.99",
      },
      {
        name: "Pancetta",
        ingredients: "Tomato sauce, mozzarella, pancetta",
        price: "€ 10.99",
      },
      {
        name: "BBQ Chicken",
        ingredients: "BBQ sauce, mozzarella, chicken, red onions",
        price: "€ 11.99",
      },
      {
        name: "Pollo Piccante",
        ingredients: "Tomato sauce, mozzarella, spicy chicken, bell peppers",
        price: "€ 11.99",
      },
      {
        name: "Carne Mista",
        ingredients:
          "Tomato sauce, mozzarella, mixed meats (ham, salami, sausage)",
        price: "€ 12.99",
      },
      {
        name: "Tacchino",
        ingredients: "Tomato sauce, mozzarella, turkey, artichokes",
        price: "€ 10.99",
      },
    ],
  },
  {
    title: "Vegetarian",
    showItems: true,
    items: [
      {
        name: "Vegetariana",
        ingredients: "Tomato sauce, mozzarella, mixed vegetables",
        price: "€ 9.99",
      },
      {
        name: "Funghi",
        ingredients: "Tomato sauce, mozzarella, mushrooms",
        price: "€ 8.99",
      },
      {
        name: "Spinaci",
        ingredients: "Tomato sauce, mozzarella, spinach, garlic",
        price: "€ 10.99",
      },
      {
        name: "Caprino e Spinaci",
        ingredients: "Tomato sauce, mozzarella, goat cheese, spinach",
        price: "€ 11.99",
      },
      {
        name: "Patate",
        ingredients: "Cream, mozzarella, potatoes, rosemary",
        price: "€ 10.99",
      },
      {
        name: "Zucchine",
        ingredients: "Tomato sauce, mozzarella, zucchini, garlic",
        price: "€ 10.99",
      },
      {
        name: "Peperoni",
        ingredients: "Tomato sauce, mozzarella, bell peppers",
        price: "€ 9.99",
      },
      {
        name: "Melanzane",
        ingredients: "Tomato sauce, mozzarella, eggplant, basil",
        price: "€ 10.99",
      },
      {
        name: "Pomodoro e Rucola",
        ingredients: "Tomato sauce, mozzarella, fresh tomatoes, arugula",
        price: "€ 10.99",
      },
      {
        name: "Gorgonzola e Pere",
        ingredients: "Cream, mozzarella, gorgonzola cheese, pears",
        price: "€ 11.99",
      },
    ],
  },
  {
    title: "Drinks",
    showItems: true,
    items: [
      {
        name: "House Red Wine",
        type: "Rich and full-bodied from Tuscany",
        price: "€ 5.99",
      },
      {
        name: "House White Wine",
        type: "Crisp and refreshing from Veneto",
        price: "€ 5.99",
      },
      {
        name: "Italian Sparkling Water",
        type: "Bubbly and invigorating",
        price: "€ 2.99",
      },
      { name: "Italian Still Water", type: "Pure and serene", price: "€ 2.99" },
      {
        name: "Limoncello",
        type: "Zesty lemon liqueur from the Amalfi Coast",
        price: "€ 4.99",
      },
      {
        name: "Espresso",
        type: "Strong and rich Italian coffee",
        price: "€ 1.99",
      },
      {
        name: "Cappuccino",
        type: "Smooth with a perfect foam layer",
        price: "€ 2.49",
      },
      {
        name: "Draft Beer",
        type: "Fresh and draught, locally sourced",
        price: "€ 4.99",
      },
      {
        name: "Bottled Beer",
        type: "Variety of premium bottled beers",
        price: "€ 5.49",
      },
      { name: "Coca-Cola", type: "", price: "€ 2.99" },
      { name: "Sprite", type: "", price: "€ 2.99" },
      { name: "Pepsi", type: "", price: "€ 2.99" },
      { name: "Dr. Pepper", type: "", price: "€ 2.99" },
      { name: "Fanta", type: "", price: "€ 2.99" },
    ],
  },
];

export default pizzaMenu;

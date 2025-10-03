export interface Recipe {
  imageSrc: string;
  title: string;
  ownedIngredients: string;
  totalIngredients: string;
  time: string;
  missingItems: string;
}

const recipesMock: Recipe[] = [
  {
    imageSrc: "https://picsum.photos/600/400?random=2",
    title: "Salada Caesar com Frango Grelhado",
    ownedIngredients: "7",
    totalIngredients: "10",
    time: "30 min",
    missingItems: "Alface romana, Croutons",
  },
  {
    imageSrc: "https://picsum.photos/600/400?random=3",
    title: "Espaguete à Carbonara",
    ownedIngredients: "6",
    totalIngredients: "8",
    time: "25 min",
    missingItems: "Queijo Parmesão, Bacon",
  },
  {
    imageSrc: "https://picsum.photos/600/400?random=4",
    title: "Frango Grelhado com Legumes",
    ownedIngredients: "5",
    totalIngredients: "7",
    time: "35 min",
    missingItems: "Brócolis, Cenoura",
  },
  {
    imageSrc: "https://picsum.photos/600/400?random=5",
    title: "Risoto de Cogumelos",
    ownedIngredients: "4",
    totalIngredients: "9",
    time: "40 min",
    missingItems: "Arroz arbóreo, Vinho branco",
  },
  {
    imageSrc: "https://picsum.photos/600/400?random=6",
    title: "Sopa de Abóbora Cremosa",
    ownedIngredients: "6",
    totalIngredients: "8",
    time: "45 min",
    missingItems: "Abóbora, Creme de leite",
  },
  {
    imageSrc: "https://picsum.photos/600/400?random=7",
    title: "Hambúrguer Artesanal",
    ownedIngredients: "5",
    totalIngredients: "10",
    time: "20 min",
    missingItems: "Pão brioche, Queijo cheddar",
  },
  {
    imageSrc: "https://picsum.photos/600/400?random=8",
    title: "Pizza Margherita",
    ownedIngredients: "7",
    totalIngredients: "11",
    time: "30 min",
    missingItems: "Molho de tomate, Manjericão fresco",
  },
  {
    imageSrc: "https://picsum.photos/600/400?random=9",
    title: "Tacos Mexicanos",
    ownedIngredients: "6",
    totalIngredients: "9",
    time: "25 min",
    missingItems: "Tortilla, Molho picante",
  },
  {
    imageSrc: "https://picsum.photos/600/400?random=10",
    title: "Salmão Grelhado com Ervas",
    ownedIngredients: "4",
    totalIngredients: "6",
    time: "20 min",
    missingItems: "Salmão fresco, Limão siciliano",
  },
  {
    imageSrc: "https://picsum.photos/600/400?random=11",
    title: "Bolo de Chocolate",
    ownedIngredients: "6",
    totalIngredients: "10",
    time: "50 min",
    missingItems: "Cacau em pó, Fermento",
  },
];

export default recipesMock;

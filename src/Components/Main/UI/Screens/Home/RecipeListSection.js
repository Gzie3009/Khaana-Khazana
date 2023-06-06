import React, { useEffect, useState } from "react";
import { API_BASE_URL,API_KEY } from "../../../../Core/API";
import RecipeComponent from "./RecipeComponent";
import SearchBox from "./searchContainer";
const RecipeSection = () => {
  const data={
    "recipes": [
      {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 10,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 168,
        "healthScore": 10,
        "creditsText": "Full Belly Sisters",
        "license": "CC BY-SA 3.0",
        "sourceName": "Full Belly Sisters",
        "pricePerServing": 181.74,
        "extendedIngredients": [
          {
            "id": 1053,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "fluid-cream.jpg",
            "consistency": "LIQUID",
            "name": "cup heavy whipping cream",
            "nameClean": "cream",
            "original": "1 Tbs + 1 cup heavy whipping cream",
            "originalName": "1 cup heavy whipping cream",
            "amount": 1,
            "unit": "Tbs",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "Tbs",
                "unitLong": "Tb"
              },
              "metric": {
                "amount": 1,
                "unitShort": "Tbs",
                "unitLong": "Tb"
              }
            }
          },
          {
            "id": 18334,
            "aisle": "Refrigerated",
            "image": "pie-crust.jpg",
            "consistency": "SOLID",
            "name": "pie crust dough",
            "nameClean": "refrigerated pie crust",
            "original": "1 pie crust dough, homemade or store-bought",
            "originalName": "pie crust dough, homemade or store-bought",
            "amount": 1,
            "unit": "",
            "meta": [
              "homemade",
              "store-bought"
            ],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "",
                "unitLong": ""
              },
              "metric": {
                "amount": 1,
                "unitShort": "",
                "unitLong": ""
              }
            }
          },
          {
            "id": 1012047,
            "aisle": "Spices and Seasonings",
            "image": "salt.jpg",
            "consistency": "SOLID",
            "name": "sea salt",
            "nameClean": "coarse sea salt",
            "original": "pinch of sea salt",
            "originalName": "pinch of sea salt",
            "amount": 1,
            "unit": "pinch",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "pinch",
                "unitLong": "pinch"
              },
              "metric": {
                "amount": 1,
                "unitShort": "pinch",
                "unitLong": "pinch"
              }
            }
          },
          {
            "id": 9316,
            "aisle": "Produce",
            "image": "strawberries.png",
            "consistency": "SOLID",
            "name": "strawberries",
            "nameClean": "strawberries",
            "original": "1 lb. strawberries (I always get Driscoll's organic—yes, even when I'm not writing about Driscoll's)",
            "originalName": "strawberries (I always get Driscoll's organic—yes, even when I'm not writing about Driscoll's)",
            "amount": 1,
            "unit": "lb",
            "meta": [
              "(I always get Driscoll's organic—yes, even when I'm not writing Driscoll's)"
            ],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "lb",
                "unitLong": "pound"
              },
              "metric": {
                "amount": 453.592,
                "unitShort": "g",
                "unitLong": "grams"
              }
            }
          },
          {
            "id": 10819297,
            "aisle": "Nut butters, Jams, and Honey",
            "image": "strawberry-jam.png",
            "consistency": "SOLID",
            "name": "strawberry jam",
            "nameClean": "strawberry jam",
            "original": "1/4 cup strawberry jam",
            "originalName": "strawberry jam",
            "amount": 0.25,
            "unit": "cup",
            "meta": [],
            "measures": {
              "us": {
                "amount": 0.25,
                "unitShort": "cups",
                "unitLong": "cups"
              },
              "metric": {
                "amount": 59.147,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 10319335,
            "aisle": "Baking",
            "image": "vanilla-sugar.jpg",
            "consistency": "SOLID",
            "name": "tsp vanilla sugar",
            "nameClean": "vanilla sugar",
            "original": "1 tsp + 2 tsp vanilla sugar (or plain sugar)",
            "originalName": "2 tsp vanilla sugar (or plain sugar)",
            "amount": 1,
            "unit": "tsp",
            "meta": [
              "plain",
              "(or sugar)"
            ],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "tsp",
                "unitLong": "teaspoon"
              },
              "metric": {
                "amount": 1,
                "unitShort": "tsp",
                "unitLong": "teaspoon"
              }
            }
          }
        ],
        "id": 716417,
        "title": "Strawberry Shortcake w. Mini Strawberry PopTarts",
        "readyInMinutes": 45,
        "servings": 4,
        "sourceUrl": "http://fullbellysisters.blogspot.com/2014/06/strawberry-shortcake-w-mini-strawberry.html",
        "image": "https://spoonacular.com/recipeImages/716417-556x370.jpg",
        "imageType": "jpg",
        "summary": "Strawberry Shortcake w. Mini Strawberry PopTarts takes around <b>45 minutes</b> from beginning to end. This recipe serves 4. One portion of this dish contains approximately <b>4g of protein</b>, <b>13g of fat</b>, and a total of <b>306 calories</b>. For <b>$1.82 per serving</b>, this recipe <b>covers 10%</b> of your daily requirements of vitamins and minerals. It works well as a breakfast. Many people made this recipe, and 168 would say it hit the spot. It is brought to you by fullbellysisters.blogspot.com. It is perfect for <b>Mother's Day</b>. A mixture of strawberry jam, strawberries, tsp vanilla sugar, and a handful of other ingredients are all it takes to make this recipe so delicious. All things considered, we decided this recipe <b>deserves a spoonacular score of 65%</b>. This score is solid. <a href=\"https://spoonacular.com/recipes/mini-strawberry-shortcake-pies-540457\">Mini Strawberry Shortcake Pies</a>, <a href=\"https://spoonacular.com/recipes/mini-strawberry-shortcake-milkshakes-505955\">Mini Strawberry Shortcake Milkshakes</a>, and <a href=\"https://spoonacular.com/recipes/strawberry-shortcake-with-mini-angel-food-cakes-728615\">Strawberry Shortcake with Mini Angel Food Cakes</a> are very similar to this recipe.",
        "cuisines": [],
        "dishTypes": [
          "morning meal",
          "brunch",
          "breakfast"
        ],
        "diets": [],
        "occasions": [
          "mother's day"
        ],
        "instructions": "",
        "analyzedInstructions": [],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/strawberry-shortcake-w-mini-strawberry-poptarts-716417"
      },
      {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 20,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 58,
        "healthScore": 1,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 122.14,
        "extendedIngredients": [
          {
            "id": 1001,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "butter-sliced.jpg",
            "consistency": "SOLID",
            "name": "butter",
            "nameClean": "butter",
            "original": "100 grams Melted Butter",
            "originalName": "Melted Butter",
            "amount": 100,
            "unit": "grams",
            "meta": [
              "melted"
            ],
            "measures": {
              "us": {
                "amount": 3.527,
                "unitShort": "oz",
                "unitLong": "ounces"
              },
              "metric": {
                "amount": 100,
                "unitShort": "g",
                "unitLong": "grams"
              }
            }
          },
          {
            "id": 1017,
            "aisle": "Cheese",
            "image": "cream-cheese.jpg",
            "consistency": "SOLID",
            "name": "cream cheese",
            "nameClean": "cream cheese",
            "original": "250 grams Cream cheese",
            "originalName": "Cream cheese",
            "amount": 250,
            "unit": "grams",
            "meta": [],
            "measures": {
              "us": {
                "amount": 8.818,
                "unitShort": "oz",
                "unitLong": "ounces"
              },
              "metric": {
                "amount": 250,
                "unitShort": "g",
                "unitLong": "grams"
              }
            }
          },
          {
            "id": 19348,
            "aisle": "Frozen;Condiments",
            "image": "chocolate-glaze.png",
            "consistency": "SOLID",
            "name": "non-dairy topping cream",
            "nameClean": "fudge ice cream topping",
            "original": "1 cup Non-dairy topping cream",
            "originalName": "Non-dairy topping cream",
            "amount": 1,
            "unit": "cup",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "cup",
                "unitLong": "cup"
              },
              "metric": {
                "amount": 236.588,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 19177,
            "aisle": "Baking",
            "image": "gelatin-powder.jpg",
            "consistency": "SOLID",
            "name": "gelatin",
            "nameClean": "gelatin",
            "original": "1 tablespoon Gelatin",
            "originalName": "Gelatin",
            "amount": 1,
            "unit": "tablespoon",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "Tbsp",
                "unitLong": "Tbsp"
              },
              "metric": {
                "amount": 1,
                "unitShort": "Tbsp",
                "unitLong": "Tbsp"
              }
            }
          },
          {
            "id": 1016973,
            "aisle": "Ethnic Foods",
            "image": "chili-paste.png",
            "consistency": "LIQUID",
            "name": "korean honey citron tea paste",
            "nameClean": "gochujang",
            "original": "5 1/2 tablespoons Korean Honey Citron Tea paste",
            "originalName": "Korean Honey Citron Tea paste",
            "amount": 5.5,
            "unit": "tablespoons",
            "meta": [],
            "measures": {
              "us": {
                "amount": 5.5,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              },
              "metric": {
                "amount": 5.5,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              }
            }
          },
          {
            "id": 9152,
            "aisle": "Produce",
            "image": "lemon-juice.jpg",
            "consistency": "LIQUID",
            "name": "lemon juice",
            "nameClean": "lemon juice",
            "original": "1 tablespoon Lemon juice",
            "originalName": "Lemon juice",
            "amount": 1,
            "unit": "tablespoon",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "Tbsp",
                "unitLong": "Tbsp"
              },
              "metric": {
                "amount": 1,
                "unitShort": "Tbsp",
                "unitLong": "Tbsp"
              }
            }
          },
          {
            "id": 19172,
            "aisle": "Baking",
            "image": "green-jello.jpg",
            "consistency": "SOLID",
            "name": "gelatin mix",
            "nameClean": "lemon flavored gelatin",
            "original": "1 1/2 tablespoons tsp Gelatin mix with 2 water",
            "originalName": "tsp Gelatin mix with 2 water",
            "amount": 1.5,
            "unit": "tablespoons",
            "meta": [
              "with 2 water"
            ],
            "measures": {
              "us": {
                "amount": 1.5,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              },
              "metric": {
                "amount": 1.5,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              }
            }
          },
          {
            "id": 10018173,
            "aisle": "Sweet Snacks",
            "image": "marie-biscuit.jpg",
            "consistency": "SOLID",
            "name": "marie biscuits",
            "nameClean": "marie biscuits",
            "original": "150 grams Marie biscuits (crushed)",
            "originalName": "Marie biscuits (crushed)",
            "amount": 150,
            "unit": "grams",
            "meta": [
              "crushed",
              "()"
            ],
            "measures": {
              "us": {
                "amount": 5.291,
                "unitShort": "oz",
                "unitLong": "ounces"
              },
              "metric": {
                "amount": 150,
                "unitShort": "g",
                "unitLong": "grams"
              }
            }
          },
          {
            "id": 1077,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "milk.png",
            "consistency": "LIQUID",
            "name": "milk",
            "nameClean": "milk",
            "original": "60 milliliters Fresh milk",
            "originalName": "Fresh milk",
            "amount": 60,
            "unit": "milliliters",
            "meta": [
              "fresh"
            ],
            "measures": {
              "us": {
                "amount": 2.029,
                "unitShort": "fl. oz",
                "unitLong": "fl. ozs"
              },
              "metric": {
                "amount": 60,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 19335,
            "aisle": "Baking",
            "image": "sugar-in-bowl.png",
            "consistency": "SOLID",
            "name": "sugar",
            "nameClean": "sugar",
            "original": "3 tablespoons Sugar",
            "originalName": "Sugar",
            "amount": 3,
            "unit": "tablespoons",
            "meta": [],
            "measures": {
              "us": {
                "amount": 3,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              },
              "metric": {
                "amount": 3,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              }
            }
          },
          {
            "id": 14412,
            "aisle": "Beverages",
            "image": "water.png",
            "consistency": "LIQUID",
            "name": "water",
            "nameClean": "water",
            "original": "•8 cups of water",
            "originalName": "of water",
            "amount": 8,
            "unit": "cups",
            "meta": [],
            "measures": {
              "us": {
                "amount": 8,
                "unitShort": "cups",
                "unitLong": "cups"
              },
              "metric": {
                "amount": 1.893,
                "unitShort": "l",
                "unitLong": "liters"
              }
            }
          }
        ],
        "id": 649056,
        "title": "Korean Honey Citron Tea Cheesecake",
        "readyInMinutes": 45,
        "servings": 8,
        "sourceUrl": "http://www.foodista.com/recipe/PB5GFPYT/yuja-korean-honey-citron-tea-cheesecake",
        "image": "https://spoonacular.com/recipeImages/649056-556x370.jpg",
        "imageType": "jpg",
        "summary": "Korean Honey Citron Tea Cheesecake requires roughly <b>45 minutes</b> from start to finish. One portion of this dish contains approximately <b>6g of protein</b>, <b>27g of fat</b>, and a total of <b>454 calories</b>. For <b>$1.22 per serving</b>, this recipe <b>covers 7%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from Foodista requires water, cream cheese, lemon juice, and sugar. It works well as an affordable dessert. 58 people were impressed by this recipe. This recipe is typical of Korean cuisine. With a spoonacular <b>score of 26%</b>, this dish is not so tremendous. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/a-visit-to-the-charleston-tea-plantation-iced-tea-with-honey-lemon-ginger-ice-cubes-495571\">A Visit to the Charleston Tea Plantation + Iced Tea with Honey Lemon Ginger Ice Cubes</a>, <a href=\"https://spoonacular.com/recipes/korean-chilli-sesame-honey-chicken-1089523\">Korean chilli, sesame & honey chicken</a>, and <a href=\"https://spoonacular.com/recipes/tartelettes-au-citron-53422\">Tartelettes Au Citron</a>.",
        "cuisines": [
          "Korean",
          "Asian"
        ],
        "dishTypes": [
          "dessert"
        ],
        "diets": [],
        "occasions": [],
        "instructions": "<ol><li>Line a 23cm round pan (with removable base) set aside.</li><li>Combine crushed digestive biscuit crumbs and melted butter together in a mixing bowl.</li><li>Press the biscuit crumbs onto the base of the prepared pan and put it in the refrigerator for later use.</li><li>Measure water into a bowl and sprinkle in the gelatin (without stirring with a spoon). Set aside to allow the gelatin to swell (few mins) before setting the bowl over a pot of simmering hot water. Stir with a spoon and once  the gelatin melts, remove the bowl from the pot and set aside to cool to room temperature.</li><li>Whisk non-dairy topping cream until peak form (not too stiff), set aside.</li><li>In another mixing bowl, beat cream cheese and sugar until smooth, then gradually add in milk until combined.</li><li>Add lemon juice, honey citron tea paste, mix to combine and add gelatin solution, mix well.</li><li>Fold in whipped non-dairy topping cream, with a hand whisk.</li><li>Pour cream cheese mixture on the prepared cake tin and refrigerate for at least 4 hours until set.</li><li>To make the topping, heat the gelatin (method same as above) and stir in honey citron tea paste, mix well and leave to cool.</li><li>Spread the honey citron tea paste thinly and evenly on top of the cheesecake.</li><li>Refrigerate the cheese cake until it is ready to serve.</li></ol>",
        "analyzedInstructions": [
          {
            "name": "",
            "steps": [
              {
                "number": 1,
                "step": "Line a 23cm round pan (with removable base) set aside.",
                "ingredients": [
                  {
                    "id": 0,
                    "name": "base",
                    "localizedName": "base",
                    "image": ""
                  }
                ],
                "equipment": [
                  {
                    "id": 404645,
                    "name": "frying pan",
                    "localizedName": "frying pan",
                    "image": "pan.png"
                  }
                ]
              },
              {
                "number": 2,
                "step": "Combine crushed digestive biscuit crumbs and melted butter together in a mixing bowl.Press the biscuit crumbs onto the base of the prepared pan and put it in the refrigerator for later use.Measure water into a bowl and sprinkle in the gelatin (without stirring with a spoon). Set aside to allow the gelatin to swell (few mins) before setting the bowl over a pot of simmering hot water. Stir with a spoon and once  the gelatin melts, remove the bowl from the pot and set aside to cool to room temperature.",
                "ingredients": [
                  {
                    "id": 18617,
                    "name": "graham crackers",
                    "localizedName": "graham crackers",
                    "image": "graham-crackers.jpg"
                  },
                  {
                    "id": 18009,
                    "name": "biscuits",
                    "localizedName": "biscuits",
                    "image": "buttermilk-biscuits.jpg"
                  },
                  {
                    "id": 19177,
                    "name": "gelatin",
                    "localizedName": "gelatin",
                    "image": "gelatin-powder.jpg"
                  },
                  {
                    "id": 1001,
                    "name": "butter",
                    "localizedName": "butter",
                    "image": "butter-sliced.jpg"
                  },
                  {
                    "id": 14412,
                    "name": "water",
                    "localizedName": "water",
                    "image": "water.png"
                  },
                  {
                    "id": 0,
                    "name": "base",
                    "localizedName": "base",
                    "image": ""
                  }
                ],
                "equipment": [
                  {
                    "id": 405907,
                    "name": "mixing bowl",
                    "localizedName": "mixing bowl",
                    "image": "mixing-bowl.jpg"
                  },
                  {
                    "id": 404645,
                    "name": "frying pan",
                    "localizedName": "frying pan",
                    "image": "pan.png"
                  },
                  {
                    "id": 404752,
                    "name": "pot",
                    "localizedName": "pot",
                    "image": "stock-pot.jpg"
                  }
                ]
              },
              {
                "number": 3,
                "step": "Whisk non-dairy topping cream until peak form (not too stiff), set aside.In another mixing bowl, beat cream cheese and sugar until smooth, then gradually add in milk until combined.",
                "ingredients": [
                  {
                    "id": 1017,
                    "name": "cream cheese",
                    "localizedName": "cream cheese",
                    "image": "cream-cheese.jpg"
                  },
                  {
                    "id": 1053,
                    "name": "cream",
                    "localizedName": "cream",
                    "image": "fluid-cream.jpg"
                  },
                  {
                    "id": 19335,
                    "name": "sugar",
                    "localizedName": "sugar",
                    "image": "sugar-in-bowl.png"
                  },
                  {
                    "id": 1077,
                    "name": "milk",
                    "localizedName": "milk",
                    "image": "milk.png"
                  }
                ],
                "equipment": [
                  {
                    "id": 405907,
                    "name": "mixing bowl",
                    "localizedName": "mixing bowl",
                    "image": "mixing-bowl.jpg"
                  },
                  {
                    "id": 404661,
                    "name": "whisk",
                    "localizedName": "whisk",
                    "image": "whisk.png"
                  }
                ]
              },
              {
                "number": 4,
                "step": "Add lemon juice, honey citron tea paste, mix to combine and add gelatin solution, mix well.Fold in whipped non-dairy topping cream, with a hand whisk.",
                "ingredients": [
                  {
                    "id": 9152,
                    "name": "lemon juice",
                    "localizedName": "lemon juice",
                    "image": "lemon-juice.jpg"
                  },
                  {
                    "id": 19177,
                    "name": "gelatin",
                    "localizedName": "gelatin",
                    "image": "gelatin-powder.jpg"
                  },
                  {
                    "id": 10093702,
                    "name": "citron",
                    "localizedName": "citron",
                    "image": "yuzu.png"
                  },
                  {
                    "id": 1053,
                    "name": "cream",
                    "localizedName": "cream",
                    "image": "fluid-cream.jpg"
                  },
                  {
                    "id": 19296,
                    "name": "honey",
                    "localizedName": "honey",
                    "image": "honey.png"
                  },
                  {
                    "id": 14355,
                    "name": "tea",
                    "localizedName": "tea",
                    "image": "tea-bags.jpg"
                  }
                ],
                "equipment": [
                  {
                    "id": 404661,
                    "name": "whisk",
                    "localizedName": "whisk",
                    "image": "whisk.png"
                  }
                ]
              },
              {
                "number": 5,
                "step": "Pour cream cheese mixture on the prepared cake tin and refrigerate for at least 4 hours until set.To make the topping, heat the gelatin (method same as above) and stir in honey citron tea paste, mix well and leave to cool.",
                "ingredients": [
                  {
                    "id": 1017,
                    "name": "cream cheese",
                    "localizedName": "cream cheese",
                    "image": "cream-cheese.jpg"
                  },
                  {
                    "id": 19177,
                    "name": "gelatin",
                    "localizedName": "gelatin",
                    "image": "gelatin-powder.jpg"
                  },
                  {
                    "id": 10093702,
                    "name": "citron",
                    "localizedName": "citron",
                    "image": "yuzu.png"
                  },
                  {
                    "id": 19296,
                    "name": "honey",
                    "localizedName": "honey",
                    "image": "honey.png"
                  },
                  {
                    "id": 14355,
                    "name": "tea",
                    "localizedName": "tea",
                    "image": "tea-bags.jpg"
                  }
                ],
                "equipment": [
                  {
                    "id": 404747,
                    "name": "cake form",
                    "localizedName": "cake form",
                    "image": "cake-pan.png"
                  }
                ],
                "length": {
                  "number": 240,
                  "unit": "minutes"
                }
              },
              {
                "number": 6,
                "step": "Spread the honey citron tea paste thinly and evenly on top of the cheesecake.Refrigerate the cheese cake until it is ready to serve.",
                "ingredients": [
                  {
                    "id": 1041009,
                    "name": "cheese",
                    "localizedName": "cheese",
                    "image": "cheddar-cheese.png"
                  },
                  {
                    "id": 10093702,
                    "name": "citron",
                    "localizedName": "citron",
                    "image": "yuzu.png"
                  },
                  {
                    "id": 0,
                    "name": "spread",
                    "localizedName": "spread",
                    "image": ""
                  },
                  {
                    "id": 19296,
                    "name": "honey",
                    "localizedName": "honey",
                    "image": "honey.png"
                  },
                  {
                    "id": 14355,
                    "name": "tea",
                    "localizedName": "tea",
                    "image": "tea-bags.jpg"
                  }
                ],
                "equipment": []
              }
            ]
          }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/korean-honey-citron-tea-cheesecake-649056"
      },
      {
        "vegetarian": true,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 8,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 3,
        "healthScore": 1,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 44.39,
        "extendedIngredients": [
          {
            "id": 20081,
            "aisle": "Baking",
            "image": "flour.png",
            "consistency": "SOLID",
            "name": "flour",
            "nameClean": "wheat flour",
            "original": "2 cups flour",
            "originalName": "flour",
            "amount": 2,
            "unit": "cups",
            "meta": [],
            "measures": {
              "us": {
                "amount": 2,
                "unitShort": "cups",
                "unitLong": "cups"
              },
              "metric": {
                "amount": 473.176,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 18369,
            "aisle": "Baking",
            "image": "white-powder.jpg",
            "consistency": "SOLID",
            "name": "baking powder",
            "nameClean": "baking powder",
            "original": "2 tablespoons baking powder",
            "originalName": "baking powder",
            "amount": 2,
            "unit": "tablespoons",
            "meta": [],
            "measures": {
              "us": {
                "amount": 2,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              },
              "metric": {
                "amount": 2,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              }
            }
          },
          {
            "id": 2025,
            "aisle": "Spices and Seasonings",
            "image": "ground-nutmeg.jpg",
            "consistency": "SOLID",
            "name": "nutmeg",
            "nameClean": "nutmeg",
            "original": "1/2 teaspoon nutmeg",
            "originalName": "nutmeg",
            "amount": 0.5,
            "unit": "teaspoon",
            "meta": [],
            "measures": {
              "us": {
                "amount": 0.5,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              },
              "metric": {
                "amount": 0.5,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              }
            }
          },
          {
            "id": 2010,
            "aisle": "Spices and Seasonings",
            "image": "cinnamon.jpg",
            "consistency": "SOLID",
            "name": "cinnamon",
            "nameClean": "cinnamon",
            "original": "1/2 teaspoon cinnamon",
            "originalName": "cinnamon",
            "amount": 0.5,
            "unit": "teaspoon",
            "meta": [],
            "measures": {
              "us": {
                "amount": 0.5,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              },
              "metric": {
                "amount": 0.5,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              }
            }
          },
          {
            "id": 11216,
            "aisle": "Produce;Ethnic Foods;Spices and Seasonings",
            "image": "ginger.png",
            "consistency": "SOLID",
            "name": "ginger",
            "nameClean": "ginger",
            "original": "1/2 teaspoon ginger",
            "originalName": "ginger",
            "amount": 0.5,
            "unit": "teaspoon",
            "meta": [],
            "measures": {
              "us": {
                "amount": 0.5,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              },
              "metric": {
                "amount": 0.5,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              }
            }
          },
          {
            "id": 1012047,
            "aisle": "Spices and Seasonings",
            "image": "salt.jpg",
            "consistency": "SOLID",
            "name": "sea salt",
            "nameClean": "coarse sea salt",
            "original": "1/4 teaspoon sea salt",
            "originalName": "sea salt",
            "amount": 0.25,
            "unit": "teaspoon",
            "meta": [],
            "measures": {
              "us": {
                "amount": 0.25,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              },
              "metric": {
                "amount": 0.25,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              }
            }
          },
          {
            "id": 1123,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "egg.png",
            "consistency": "SOLID",
            "name": "egg",
            "nameClean": "egg",
            "original": "1 large egg",
            "originalName": "egg",
            "amount": 1,
            "unit": "large",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "large",
                "unitLong": "large"
              },
              "metric": {
                "amount": 1,
                "unitShort": "large",
                "unitLong": "large"
              }
            }
          },
          {
            "id": 1001,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "butter-sliced.jpg",
            "consistency": "SOLID",
            "name": "butter",
            "nameClean": "butter",
            "original": "1 tablespoon butter",
            "originalName": "butter",
            "amount": 1,
            "unit": "tablespoon",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "Tbsp",
                "unitLong": "Tbsp"
              },
              "metric": {
                "amount": 1,
                "unitShort": "Tbsp",
                "unitLong": "Tbsp"
              }
            }
          },
          {
            "id": 1077,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "milk.png",
            "consistency": "LIQUID",
            "name": "milk",
            "nameClean": "milk",
            "original": "1/2 cup milk",
            "originalName": "milk",
            "amount": 0.5,
            "unit": "cup",
            "meta": [],
            "measures": {
              "us": {
                "amount": 0.5,
                "unitShort": "cups",
                "unitLong": "cups"
              },
              "metric": {
                "amount": 118.294,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 19296,
            "aisle": "Nut butters, Jams, and Honey",
            "image": "honey.png",
            "consistency": "LIQUID",
            "name": "honey",
            "nameClean": "honey",
            "original": "cup honey",
            "originalName": "honey",
            "amount": 1,
            "unit": "cup",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "cup",
                "unitLong": "cup"
              },
              "metric": {
                "amount": 236.588,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          }
        ],
        "id": 662303,
        "title": "Sunday Morning Doughnuts",
        "readyInMinutes": 45,
        "servings": 12,
        "sourceUrl": "https://www.foodista.com/recipe/QYGJ42CN/sunday-morning-doughnuts",
        "image": "https://spoonacular.com/recipeImages/662303-556x370.jpg",
        "imageType": "jpg",
        "summary": "Sunday Morning Doughnuts might be just the breakfast you are searching for. One portion of this dish contains around <b>3g of protein</b>, <b>2g of fat</b>, and a total of <b>184 calories</b>. For <b>44 cents per serving</b>, this recipe <b>covers 5%</b> of your daily requirements of vitamins and minerals. This recipe serves 12. If you have flour, ginger, egg, and a few other ingredients on hand, you can make it. This recipe from Foodista has 3 fans. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is a good option if you're following a <b>lacto ovo vegetarian</b> diet. Overall, this recipe earns a <b>not so outstanding spoonacular score of 20%</b>. Try <a href=\"https://spoonacular.com/recipes/sunday-morning-doughnuts-1593475\">Sunday Morning Doughnuts</a>, <a href=\"https://spoonacular.com/recipes/sunday-morning-doughnuts-1369497\">Sunday Morning Doughnuts</a>, and <a href=\"https://spoonacular.com/recipes/sunny-morning-doughnuts-145452\">Sunny Morning Doughnuts</a> for similar recipes.",
        "cuisines": [],
        "dishTypes": [
          "morning meal",
          "brunch",
          "breakfast"
        ],
        "diets": [
          "lacto ovo vegetarian"
        ],
        "occasions": [],
        "instructions": "Combine all ingredients in a large bowl and mix well (clean hands work great for the job).\nTurn onto a floured board and knead for a few minutes. Let rest\nRoll out to about 1/2\" thick and cut out with a doughnut cutter.\nHeat about 4\" oil (vegetable oil works fine, we use lard) to 360F\nFry 3 or 4 doughnuts at a time, turning when one side is browned - fry until both sides are nicely browned.\nDrain on paper towels or on a paper bag. Makes about one dozen doughnuts.",
        "analyzedInstructions": [
          {
            "name": "",
            "steps": [
              {
                "number": 1,
                "step": "Combine all ingredients in a large bowl and mix well (clean hands work great for the job).",
                "ingredients": [],
                "equipment": [
                  {
                    "id": 404783,
                    "name": "bowl",
                    "localizedName": "bowl",
                    "image": "bowl.jpg"
                  }
                ]
              },
              {
                "number": 2,
                "step": "Turn onto a floured board and knead for a few minutes.",
                "ingredients": [],
                "equipment": []
              },
              {
                "number": 3,
                "step": "Let rest",
                "ingredients": [],
                "equipment": []
              },
              {
                "number": 4,
                "step": "Roll out to about 1/2\" thick and cut out with a doughnut cutter.",
                "ingredients": [
                  {
                    "id": 0,
                    "name": "roll",
                    "localizedName": "roll",
                    "image": "dinner-yeast-rolls.jpg"
                  }
                ],
                "equipment": []
              },
              {
                "number": 5,
                "step": "Heat about 4\" oil (vegetable oil works fine, we use lard) to 360F",
                "ingredients": [
                  {
                    "id": 4669,
                    "name": "vegetable oil",
                    "localizedName": "vegetable oil",
                    "image": "vegetable-oil.jpg"
                  },
                  {
                    "id": 0,
                    "name": "lard",
                    "localizedName": "lard",
                    "image": "shortening.jpg"
                  },
                  {
                    "id": 4582,
                    "name": "cooking oil",
                    "localizedName": "cooking oil",
                    "image": "vegetable-oil.jpg"
                  }
                ],
                "equipment": []
              },
              {
                "number": 6,
                "step": "Fry 3 or 4 doughnuts at a time, turning when one side is browned - fry until both sides are nicely browned.",
                "ingredients": [],
                "equipment": []
              },
              {
                "number": 7,
                "step": "Drain on paper towels or on a paper bag. Makes about one dozen doughnuts.",
                "ingredients": [],
                "equipment": [
                  {
                    "id": 405895,
                    "name": "paper towels",
                    "localizedName": "paper towels",
                    "image": "paper-towels.jpg"
                  }
                ]
              }
            ]
          }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/sunday-morning-doughnuts-662303"
      },
      {
        "vegetarian": true,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 8,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 34,
        "healthScore": 0,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 49.84,
        "extendedIngredients": [
          {
            "id": 18369,
            "aisle": "Baking",
            "image": "white-powder.jpg",
            "consistency": "SOLID",
            "name": "baking powder",
            "nameClean": "baking powder",
            "original": "2 teaspoons baking powder",
            "originalName": "baking powder",
            "amount": 2,
            "unit": "teaspoons",
            "meta": [],
            "measures": {
              "us": {
                "amount": 2,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              },
              "metric": {
                "amount": 2,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              }
            }
          },
          {
            "id": 9050,
            "aisle": "Produce",
            "image": "blueberries.jpg",
            "consistency": "SOLID",
            "name": "driscoll's blueberries",
            "nameClean": "blueberries",
            "original": "1 1/2 cups Driscoll's Blueberries",
            "originalName": "Driscoll's Blueberries",
            "amount": 1.5,
            "unit": "cups",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1.5,
                "unitShort": "cups",
                "unitLong": "cups"
              },
              "metric": {
                "amount": 354.882,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 1123,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "egg.png",
            "consistency": "SOLID",
            "name": "eggs",
            "nameClean": "egg",
            "original": "2 large eggs",
            "originalName": "eggs",
            "amount": 2,
            "unit": "large",
            "meta": [],
            "measures": {
              "us": {
                "amount": 2,
                "unitShort": "large",
                "unitLong": "larges"
              },
              "metric": {
                "amount": 2,
                "unitShort": "large",
                "unitLong": "larges"
              }
            }
          },
          {
            "id": 93620,
            "aisle": "Gluten Free;Health Foods;Baking",
            "image": "gluten-free-flour.jpg",
            "consistency": "SOLID",
            "name": "flour",
            "nameClean": "gluten free all purpose flour",
            "original": "2 cups gluten-free all-purpose flour",
            "originalName": "gluten-free all-purpose flour",
            "amount": 2,
            "unit": "cups",
            "meta": [
              "gluten-free",
              "all-purpose"
            ],
            "measures": {
              "us": {
                "amount": 2,
                "unitShort": "cups",
                "unitLong": "cups"
              },
              "metric": {
                "amount": 473.176,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 9156,
            "aisle": "Produce",
            "image": "zest-lemon.jpg",
            "consistency": "SOLID",
            "name": "lemon zest",
            "nameClean": "lemon peel",
            "original": "2 teaspoons grated lemon zest",
            "originalName": "grated lemon zest",
            "amount": 2,
            "unit": "teaspoons",
            "meta": [
              "grated"
            ],
            "measures": {
              "us": {
                "amount": 2,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              },
              "metric": {
                "amount": 2,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              }
            }
          },
          {
            "id": 2047,
            "aisle": "Spices and Seasonings",
            "image": "salt.jpg",
            "consistency": "SOLID",
            "name": "salt",
            "nameClean": "table salt",
            "original": "1/2 teaspoon salt",
            "originalName": "salt",
            "amount": 0.5,
            "unit": "teaspoon",
            "meta": [],
            "measures": {
              "us": {
                "amount": 0.5,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              },
              "metric": {
                "amount": 0.5,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              }
            }
          },
          {
            "id": 19335,
            "aisle": "Baking",
            "image": "sugar-in-bowl.png",
            "consistency": "SOLID",
            "name": "sugar",
            "nameClean": "sugar",
            "original": "3/4 cup sugar",
            "originalName": "sugar",
            "amount": 0.75,
            "unit": "cup",
            "meta": [],
            "measures": {
              "us": {
                "amount": 0.75,
                "unitShort": "cups",
                "unitLong": "cups"
              },
              "metric": {
                "amount": 177.441,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 1145,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "butter-sliced.jpg",
            "consistency": "SOLID",
            "name": "butter",
            "nameClean": "unsalted butter",
            "original": "1/2 cup (1 stick) unsalted butter, melted and cooled",
            "originalName": "(1 stick) unsalted butter, melted and cooled",
            "amount": 0.5,
            "unit": "cup",
            "meta": [
              "unsalted",
              "cooled",
              "melted",
              "(1 stick)"
            ],
            "measures": {
              "us": {
                "amount": 0.5,
                "unitShort": "cups",
                "unitLong": "cups"
              },
              "metric": {
                "amount": 118.294,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 2050,
            "aisle": "Baking",
            "image": "vanilla-extract.jpg",
            "consistency": "LIQUID",
            "name": "vanilla extract",
            "nameClean": "vanilla extract",
            "original": "1 teaspoon vanilla extract",
            "originalName": "vanilla extract",
            "amount": 1,
            "unit": "teaspoon",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "tsp",
                "unitLong": "teaspoon"
              },
              "metric": {
                "amount": 1,
                "unitShort": "tsp",
                "unitLong": "teaspoon"
              }
            }
          },
          {
            "id": 1011077,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "milk.png",
            "consistency": "LIQUID",
            "name": "milk",
            "nameClean": "whole milk",
            "original": "1/2 cup whole milk",
            "originalName": "whole milk",
            "amount": 0.5,
            "unit": "cup",
            "meta": [
              "whole"
            ],
            "measures": {
              "us": {
                "amount": 0.5,
                "unitShort": "cups",
                "unitLong": "cups"
              },
              "metric": {
                "amount": 118.294,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 93626,
            "aisle": "Gluten Free;Health Foods;Baking",
            "image": "white-powder.jpg",
            "consistency": "SOLID",
            "name": "xanthan gum",
            "nameClean": "xanthan gum",
            "original": "1 teaspoon xanthan gum",
            "originalName": "xanthan gum",
            "amount": 1,
            "unit": "teaspoon",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "tsp",
                "unitLong": "teaspoon"
              },
              "metric": {
                "amount": 1,
                "unitShort": "tsp",
                "unitLong": "teaspoon"
              }
            }
          }
        ],
        "id": 644800,
        "title": "Gluten Free Blueberry Muffins",
        "readyInMinutes": 45,
        "servings": 12,
        "sourceUrl": "http://www.foodista.com/recipe/V3JWYJCL/gluten-free-blueberry-muffins",
        "image": "https://spoonacular.com/recipeImages/644800-556x370.jpg",
        "imageType": "jpg",
        "summary": "Gluten Free Blueberry Muffins is a <b>gluten free and lacto ovo vegetarian</b> breakfast. One serving contains <b>213 calories</b>, <b>4g of protein</b>, and <b>10g of fat</b>. This recipe serves 12. For <b>50 cents per serving</b>, this recipe <b>covers 3%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. 34 people were impressed by this recipe. It is brought to you by Foodista. If you have lemon zest, salt, butter, and a few other ingredients on hand, you can make it. Taking all factors into account, this recipe <b>earns a spoonacular score of 16%</b>, which is rather bad. <a href=\"https://spoonacular.com/recipes/the-best-healthy-blueberry-oatmeal-muffins-gluten-free-dairy-free-1101951\">The Best Healthy Blueberry Oatmeal Muffins (gluten free & dairy free)</a>, <a href=\"https://spoonacular.com/recipes/gluten-free-dairy-free-blueberry-oatmeal-muffins-890097\">Gluten-Free, Dairy-Free, Blueberry Oatmeal Muffins</a>, and <a href=\"https://spoonacular.com/recipes/gluten-free-dairy-free-blueberry-oatmeal-muffins-1382221\">Gluten-Free, Dairy-Free, Blueberry Oatmeal Muffins</a> are very similar to this recipe.",
        "cuisines": [],
        "dishTypes": [
          "morning meal",
          "brunch",
          "breakfast"
        ],
        "diets": [
          "gluten free",
          "lacto ovo vegetarian"
        ],
        "occasions": [],
        "instructions": "<ol><li>Preheat oven to 375F. Lightly butter or grease a 12-cup muffin pan or line with paper liners.</li><li>Stir together flour, sugar, baking powder, xanthan gum and salt in a medium bowl until blended. Whisk together butter, milk, eggs, lemon zest and vanilla in a large bowl until combined. Stir in flour mixture until partially moistened. Fold in blueberries until evenly mixed. Batter will be thick, do not over stir.</li><li>Divide batter evenly between muffin cups, filling each about three-fourths full.</li><li>Bake 10 minutes. Rotate pan and continue to bake about 10 minutes longer or until muffins are golden brown and toothpick inserted in center comes out clean. Cool in pan 3 minutes. Serve warm or remove to wire rack to cool completely.</li></ol>",
        "analyzedInstructions": [
          {
            "name": "",
            "steps": [
              {
                "number": 1,
                "step": "Preheat oven to 375F. Lightly butter or grease a 12-cup muffin pan or line with paper liners.Stir together flour, sugar, baking powder, xanthan gum and salt in a medium bowl until blended.",
                "ingredients": [
                  {
                    "id": 18369,
                    "name": "baking powder",
                    "localizedName": "baking powder",
                    "image": "white-powder.jpg"
                  },
                  {
                    "id": 93626,
                    "name": "xanthan gum",
                    "localizedName": "xanthan gum",
                    "image": "white-powder.jpg"
                  },
                  {
                    "id": 1001,
                    "name": "butter",
                    "localizedName": "butter",
                    "image": "butter-sliced.jpg"
                  },
                  {
                    "id": 20081,
                    "name": "all purpose flour",
                    "localizedName": "all purpose flour",
                    "image": "flour.png"
                  },
                  {
                    "id": 19335,
                    "name": "sugar",
                    "localizedName": "sugar",
                    "image": "sugar-in-bowl.png"
                  },
                  {
                    "id": 2047,
                    "name": "salt",
                    "localizedName": "salt",
                    "image": "salt.jpg"
                  }
                ],
                "equipment": [
                  {
                    "id": 404671,
                    "name": "muffin tray",
                    "localizedName": "muffin tray",
                    "image": "muffin-tray.jpg"
                  },
                  {
                    "id": 404783,
                    "name": "bowl",
                    "localizedName": "bowl",
                    "image": "bowl.jpg"
                  },
                  {
                    "id": 404784,
                    "name": "oven",
                    "localizedName": "oven",
                    "image": "oven.jpg",
                    "temperature": {
                      "number": 375,
                      "unit": "Fahrenheit"
                    }
                  }
                ]
              },
              {
                "number": 2,
                "step": "Whisk together butter, milk, eggs, lemon zest and vanilla in a large bowl until combined. Stir in flour mixture until partially moistened. Fold in blueberries until evenly mixed. Batter will be thick, do not over stir.Divide batter evenly between muffin cups, filling each about three-fourths full.",
                "ingredients": [
                  {
                    "id": 9050,
                    "name": "blueberries",
                    "localizedName": "blueberries",
                    "image": "blueberries.jpg"
                  },
                  {
                    "id": 9156,
                    "name": "lemon zest",
                    "localizedName": "lemon zest",
                    "image": "zest-lemon.jpg"
                  },
                  {
                    "id": 1052050,
                    "name": "vanilla",
                    "localizedName": "vanilla",
                    "image": "vanilla.jpg"
                  },
                  {
                    "id": 1001,
                    "name": "butter",
                    "localizedName": "butter",
                    "image": "butter-sliced.jpg"
                  },
                  {
                    "id": 20081,
                    "name": "all purpose flour",
                    "localizedName": "all purpose flour",
                    "image": "flour.png"
                  },
                  {
                    "id": 1123,
                    "name": "egg",
                    "localizedName": "egg",
                    "image": "egg.png"
                  },
                  {
                    "id": 1077,
                    "name": "milk",
                    "localizedName": "milk",
                    "image": "milk.png"
                  }
                ],
                "equipment": [
                  {
                    "id": 404676,
                    "name": "muffin liners",
                    "localizedName": "muffin liners",
                    "image": "muffin-or-cupcake-forms.png"
                  },
                  {
                    "id": 404661,
                    "name": "whisk",
                    "localizedName": "whisk",
                    "image": "whisk.png"
                  },
                  {
                    "id": 404783,
                    "name": "bowl",
                    "localizedName": "bowl",
                    "image": "bowl.jpg"
                  }
                ]
              },
              {
                "number": 3,
                "step": "Bake 10 minutes. Rotate pan and continue to bake about 10 minutes longer or until muffins are golden brown and toothpick inserted in center comes out clean. Cool in pan 3 minutes.",
                "ingredients": [],
                "equipment": [
                  {
                    "id": 404644,
                    "name": "toothpicks",
                    "localizedName": "toothpicks",
                    "image": "toothpicks.jpg"
                  },
                  {
                    "id": 404784,
                    "name": "oven",
                    "localizedName": "oven",
                    "image": "oven.jpg"
                  },
                  {
                    "id": 404645,
                    "name": "frying pan",
                    "localizedName": "frying pan",
                    "image": "pan.png"
                  }
                ],
                "length": {
                  "number": 23,
                  "unit": "minutes"
                }
              },
              {
                "number": 4,
                "step": "Serve warm or remove to wire rack to cool completely.",
                "ingredients": [],
                "equipment": [
                  {
                    "id": 405900,
                    "name": "wire rack",
                    "localizedName": "wire rack",
                    "image": "wire-rack.jpg"
                  }
                ]
              }
            ]
          }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/gluten-free-blueberry-muffins-644800"
      },
      {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 11,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 7,
        "healthScore": 14,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 534.63,
        "extendedIngredients": [
          {
            "id": 1001,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "butter-sliced.jpg",
            "consistency": "SOLID",
            "name": "butter",
            "nameClean": "butter",
            "original": "5 Tbsp butter",
            "originalName": "butter",
            "amount": 5,
            "unit": "Tbsp",
            "meta": [],
            "measures": {
              "us": {
                "amount": 5,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              },
              "metric": {
                "amount": 5,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              }
            }
          },
          {
            "id": 20081,
            "aisle": "Baking",
            "image": "flour.png",
            "consistency": "SOLID",
            "name": "flour",
            "nameClean": "wheat flour",
            "original": "5 Tbsp flour",
            "originalName": "flour",
            "amount": 5,
            "unit": "Tbsp",
            "meta": [],
            "measures": {
              "us": {
                "amount": 5,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              },
              "metric": {
                "amount": 5,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              }
            }
          },
          {
            "id": 11333,
            "aisle": "Produce",
            "image": "green-pepper.jpg",
            "consistency": "SOLID",
            "name": "bell peppers",
            "nameClean": "green pepper",
            "original": "2 green bell peppers, small dice",
            "originalName": "green bell peppers, small dice",
            "amount": 2,
            "unit": "small",
            "meta": [
              "green"
            ],
            "measures": {
              "us": {
                "amount": 2,
                "unitShort": "small",
                "unitLong": "smalls"
              },
              "metric": {
                "amount": 2,
                "unitShort": "small",
                "unitLong": "smalls"
              }
            }
          },
          {
            "id": 10111143,
            "aisle": "Produce",
            "image": "celery.jpg",
            "consistency": "SOLID",
            "name": "celery stalks",
            "nameClean": "celery sticks",
            "original": "2 celery stalks, small dice",
            "originalName": "celery stalks, small dice",
            "amount": 2,
            "unit": "small",
            "meta": [],
            "measures": {
              "us": {
                "amount": 2,
                "unitShort": "small",
                "unitLong": "smalls"
              },
              "metric": {
                "amount": 2,
                "unitShort": "small",
                "unitLong": "smalls"
              }
            }
          },
          {
            "id": 10511282,
            "aisle": "Produce",
            "image": "brown-onion.png",
            "consistency": "SOLID",
            "name": "onion",
            "nameClean": "yellow onion",
            "original": "1 yellow onion, small dice",
            "originalName": "yellow onion, small dice",
            "amount": 1,
            "unit": "small",
            "meta": [
              "yellow"
            ],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "small",
                "unitLong": "small"
              },
              "metric": {
                "amount": 1,
                "unitShort": "small",
                "unitLong": "small"
              }
            }
          },
          {
            "id": 10211215,
            "aisle": "Produce",
            "image": "garlic.jpg",
            "consistency": "SOLID",
            "name": "garlic cloves",
            "nameClean": "whole garlic cloves",
            "original": "4 garlic cloves, minced",
            "originalName": "garlic cloves, minced",
            "amount": 4,
            "unit": "",
            "meta": [
              "minced"
            ],
            "measures": {
              "us": {
                "amount": 4,
                "unitShort": "",
                "unitLong": ""
              },
              "metric": {
                "amount": 4,
                "unitShort": "",
                "unitLong": ""
              }
            }
          },
          {
            "id": 2042,
            "aisle": "Spices and Seasonings",
            "image": "thyme.jpg",
            "consistency": "SOLID",
            "name": "thyme",
            "nameClean": "dried thyme",
            "original": "1 Tbsp dried thyme",
            "originalName": "dried thyme",
            "amount": 1,
            "unit": "Tbsp",
            "meta": [
              "dried"
            ],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "Tbsp",
                "unitLong": "Tbsp"
              },
              "metric": {
                "amount": 1,
                "unitShort": "Tbsp",
                "unitLong": "Tbsp"
              }
            }
          },
          {
            "id": 11887,
            "aisle": "Pasta and Rice",
            "image": "tomato-paste.jpg",
            "consistency": "SOLID",
            "name": "tomato paste",
            "nameClean": "tomato paste",
            "original": "2 heaping Tbsp tomato paste",
            "originalName": "heaping Tbsp tomato paste",
            "amount": 2,
            "unit": "Tbsp",
            "meta": [],
            "measures": {
              "us": {
                "amount": 2,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              },
              "metric": {
                "amount": 2,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              }
            }
          },
          {
            "id": 6971,
            "aisle": "Condiments",
            "image": "dark-sauce.jpg",
            "consistency": "LIQUID",
            "name": "worcestershire sauce",
            "nameClean": "worcestershire sauce",
            "original": "1 1/2 Tbsp Worcestershire sauce",
            "originalName": "Worcestershire sauce",
            "amount": 1.5,
            "unit": "Tbsp",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1.5,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              },
              "metric": {
                "amount": 1.5,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              }
            }
          },
          {
            "id": 1002031,
            "aisle": "Spices and Seasonings",
            "image": "chili-powder.jpg",
            "consistency": "SOLID",
            "name": "creole seasoning",
            "nameClean": "creole seasoning",
            "original": "1 Tbsp creole seasoning",
            "originalName": "creole seasoning",
            "amount": 1,
            "unit": "Tbsp",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "Tbsp",
                "unitLong": "Tbsp"
              },
              "metric": {
                "amount": 1,
                "unitShort": "Tbsp",
                "unitLong": "Tbsp"
              }
            }
          },
          {
            "id": 6194,
            "aisle": "Canned and Jarred",
            "image": "chicken-broth.png",
            "consistency": "LIQUID",
            "name": "chicken broth",
            "nameClean": "chicken broth",
            "original": "4 cups chicken broth",
            "originalName": "chicken broth",
            "amount": 4,
            "unit": "cups",
            "meta": [],
            "measures": {
              "us": {
                "amount": 4,
                "unitShort": "cups",
                "unitLong": "cups"
              },
              "metric": {
                "amount": 946.352,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 15270,
            "aisle": "Seafood",
            "image": "shrimp.png",
            "consistency": "SOLID",
            "name": "shrimp",
            "nameClean": "shrimp",
            "original": "1 1/2 lbs peeled and deveined shrimp",
            "originalName": "peeled and deveined shrimp",
            "amount": 1.5,
            "unit": "lbs",
            "meta": [
              "deveined",
              "peeled"
            ],
            "measures": {
              "us": {
                "amount": 1.5,
                "unitShort": "lb",
                "unitLong": "pounds"
              },
              "metric": {
                "amount": 680.389,
                "unitShort": "g",
                "unitLong": "grams"
              }
            }
          },
          {
            "id": 1001,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "butter-sliced.jpg",
            "consistency": "SOLID",
            "name": "butter",
            "nameClean": "butter",
            "original": "1 Tbsp butter",
            "originalName": "butter",
            "amount": 1,
            "unit": "Tbsp",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "Tbsp",
                "unitLong": "Tbsp"
              },
              "metric": {
                "amount": 1,
                "unitShort": "Tbsp",
                "unitLong": "Tbsp"
              }
            }
          },
          {
            "id": 11291,
            "aisle": "Produce",
            "image": "spring-onions.jpg",
            "consistency": "SOLID",
            "name": "scallions",
            "nameClean": "spring onions",
            "original": "scallions",
            "originalName": "scallions",
            "amount": 4,
            "unit": "servings",
            "meta": [],
            "measures": {
              "us": {
                "amount": 4,
                "unitShort": "servings",
                "unitLong": "servings"
              },
              "metric": {
                "amount": 4,
                "unitShort": "servings",
                "unitLong": "servings"
              }
            }
          },
          {
            "id": 11529,
            "aisle": "Produce",
            "image": "tomato.png",
            "consistency": "SOLID",
            "name": "tomato",
            "nameClean": "tomato",
            "original": "diced fresh tomato for garnish",
            "originalName": "diced fresh tomato for garnish",
            "amount": 4,
            "unit": "servings",
            "meta": [
              "fresh",
              "diced",
              "for garnish"
            ],
            "measures": {
              "us": {
                "amount": 4,
                "unitShort": "servings",
                "unitLong": "servings"
              },
              "metric": {
                "amount": 4,
                "unitShort": "servings",
                "unitLong": "servings"
              }
            }
          },
          {
            "id": 20444,
            "aisle": "Pasta and Rice",
            "image": "uncooked-white-rice.png",
            "consistency": "SOLID",
            "name": "rice",
            "nameClean": "rice",
            "original": "rice",
            "originalName": "rice",
            "amount": 4,
            "unit": "servings",
            "meta": [],
            "measures": {
              "us": {
                "amount": 4,
                "unitShort": "servings",
                "unitLong": "servings"
              },
              "metric": {
                "amount": 4,
                "unitShort": "servings",
                "unitLong": "servings"
              }
            }
          }
        ],
        "id": 1098393,
        "title": "Mardi Gras Shrimp Étouffée",
        "readyInMinutes": 90,
        "servings": 4,
        "sourceUrl": "https://www.foodista.com/recipe/VWTYGML5/shrimp-touff-e-mardi-gras-eats",
        "image": "https://spoonacular.com/recipeImages/1098393-556x370.jpg",
        "imageType": "jpg",
        "summary": "Mardi Gras Shrimp Étouffée takes around <b>1 hour and 30 minutes</b> from beginning to end. One portion of this dish contains about <b>40g of protein</b>, <b>20g of fat</b>, and a total of <b>420 calories</b>. For <b>$5.35 per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. This recipe from Foodista has 7 fans. Head to the store and pick up tomato, chicken broth, celery stalks, and a few other things to make it today. It works well as an expensive main course. Taking all factors into account, this recipe <b>earns a spoonacular score of 62%</b>, which is pretty good. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/mardi-gras-shrimp-touffe-1383647\">Mardi Gras Shrimp Étouffée</a>, <a href=\"https://spoonacular.com/recipes/mardi-gras-shrimp-touffe-1380259\">Mardi Gras Shrimp Étouffée</a>, and <a href=\"https://spoonacular.com/recipes/mardi-gras-shrimp-touffe-1378913\">Mardi Gras Shrimp Étouffée</a>.",
        "cuisines": [],
        "dishTypes": [
          "lunch",
          "main course",
          "main dish",
          "dinner"
        ],
        "diets": [],
        "occasions": [],
        "instructions": "<p>Heat up a heavy pot over low heat. Add in the butter and cook for about 10-12 minutes until a light golden brown. Be sure to stir around a few times to prevent burning.</p><p>Whisk in the flour until smooth and cook again for about 8 minutes on low. It should look like a slightly loose peanut butter when its ready.</p><p>Add in the bell peppers, celery and onion. Stir and coat the veggies with the roux. Cook for another 10-15 minutes, until the veggies are softened.</p><p>Stir in the garlic and thyme and cook for a minute, until the garlic is fragrant.</p><p>Add in the tomato paste, Worcestershire sauce, creole seasoning and broth. Simmer on low for 30-40 minutes until slightly thickened. Stir occasionally.</p><p>Stir in the shrimp, shut the heat and put the lid on. Allow to cook for about 5-8 minutes or until cooked through. Stir in a Tbsp of butter right at the end.</p><p>Serve over rice and garnish with sliced scallion and fresh diced tomato.</p>",
        "analyzedInstructions": [
          {
            "name": "",
            "steps": [
              {
                "number": 1,
                "step": "Heat up a heavy pot over low heat.",
                "ingredients": [],
                "equipment": [
                  {
                    "id": 404752,
                    "name": "pot",
                    "localizedName": "pot",
                    "image": "stock-pot.jpg"
                  }
                ]
              },
              {
                "number": 2,
                "step": "Add in the butter and cook for about 10-12 minutes until a light golden brown. Be sure to stir around a few times to prevent burning.",
                "ingredients": [
                  {
                    "id": 1001,
                    "name": "butter",
                    "localizedName": "butter",
                    "image": "butter-sliced.jpg"
                  }
                ],
                "equipment": [],
                "length": {
                  "number": 12,
                  "unit": "minutes"
                }
              },
              {
                "number": 3,
                "step": "Whisk in the flour until smooth and cook again for about 8 minutes on low. It should look like a slightly loose peanut butter when its ready.",
                "ingredients": [
                  {
                    "id": 16098,
                    "name": "peanut butter",
                    "localizedName": "peanut butter",
                    "image": "peanut-butter.png"
                  },
                  {
                    "id": 20081,
                    "name": "all purpose flour",
                    "localizedName": "all purpose flour",
                    "image": "flour.png"
                  }
                ],
                "equipment": [
                  {
                    "id": 404661,
                    "name": "whisk",
                    "localizedName": "whisk",
                    "image": "whisk.png"
                  }
                ],
                "length": {
                  "number": 8,
                  "unit": "minutes"
                }
              },
              {
                "number": 4,
                "step": "Add in the bell peppers, celery and onion. Stir and coat the veggies with the roux. Cook for another 10-15 minutes, until the veggies are softened.Stir in the garlic and thyme and cook for a minute, until the garlic is fragrant.",
                "ingredients": [
                  {
                    "id": 10211821,
                    "name": "bell pepper",
                    "localizedName": "bell pepper",
                    "image": "bell-pepper-orange.png"
                  },
                  {
                    "id": 11143,
                    "name": "celery",
                    "localizedName": "celery",
                    "image": "celery.jpg"
                  },
                  {
                    "id": 11215,
                    "name": "garlic",
                    "localizedName": "garlic",
                    "image": "garlic.png"
                  },
                  {
                    "id": 11282,
                    "name": "onion",
                    "localizedName": "onion",
                    "image": "brown-onion.png"
                  },
                  {
                    "id": 2049,
                    "name": "thyme",
                    "localizedName": "thyme",
                    "image": "thyme.jpg"
                  }
                ],
                "equipment": [],
                "length": {
                  "number": 15,
                  "unit": "minutes"
                }
              },
              {
                "number": 5,
                "step": "Add in the tomato paste, Worcestershire sauce, creole seasoning and broth. Simmer on low for 30-40 minutes until slightly thickened. Stir occasionally.Stir in the shrimp, shut the heat and put the lid on. Allow to cook for about 5-8 minutes or until cooked through. Stir in a Tbsp of butter right at the end.",
                "ingredients": [
                  {
                    "id": 6971,
                    "name": "worcestershire sauce",
                    "localizedName": "worcestershire sauce",
                    "image": "dark-sauce.jpg"
                  },
                  {
                    "id": 1002031,
                    "name": "creole seasoning",
                    "localizedName": "creole seasoning",
                    "image": "chili-powder.jpg"
                  },
                  {
                    "id": 11887,
                    "name": "tomato paste",
                    "localizedName": "tomato paste",
                    "image": "tomato-paste.jpg"
                  },
                  {
                    "id": 1001,
                    "name": "butter",
                    "localizedName": "butter",
                    "image": "butter-sliced.jpg"
                  },
                  {
                    "id": 15270,
                    "name": "shrimp",
                    "localizedName": "shrimp",
                    "image": "shrimp.png"
                  },
                  {
                    "id": 1006615,
                    "name": "broth",
                    "localizedName": "broth",
                    "image": "chicken-broth.png"
                  }
                ],
                "equipment": [],
                "length": {
                  "number": 48,
                  "unit": "minutes"
                }
              },
              {
                "number": 6,
                "step": "Serve over rice and garnish with sliced scallion and fresh diced tomato.",
                "ingredients": [
                  {
                    "id": 11291,
                    "name": "green onions",
                    "localizedName": "green onions",
                    "image": "spring-onions.jpg"
                  },
                  {
                    "id": 11529,
                    "name": "tomato",
                    "localizedName": "tomato",
                    "image": "tomato.png"
                  },
                  {
                    "id": 20444,
                    "name": "rice",
                    "localizedName": "rice",
                    "image": "uncooked-white-rice.png"
                  }
                ],
                "equipment": []
              }
            ]
          }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/mardi-gras-shrimp-touffe-1098393"
      },
      {
        "vegetarian": true,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 27,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 24,
        "healthScore": 5,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 203.3,
        "extendedIngredients": [
          {
            "id": 1001,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "butter-sliced.jpg",
            "consistency": "SOLID",
            "name": "butter",
            "nameClean": "butter",
            "original": "8 tablespoons butter",
            "originalName": "butter",
            "amount": 8,
            "unit": "tablespoons",
            "meta": [],
            "measures": {
              "us": {
                "amount": 8,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              },
              "metric": {
                "amount": 8,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              }
            }
          },
          {
            "id": 11282,
            "aisle": "Produce",
            "image": "brown-onion.png",
            "consistency": "SOLID",
            "name": "onion",
            "nameClean": "onion",
            "original": "1 medium onion, chopped",
            "originalName": "onion, chopped",
            "amount": 1,
            "unit": "medium",
            "meta": [
              "chopped"
            ],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "medium",
                "unitLong": "medium"
              },
              "metric": {
                "amount": 1,
                "unitShort": "medium",
                "unitLong": "medium"
              }
            }
          },
          {
            "id": 11215,
            "aisle": "Produce",
            "image": "garlic.png",
            "consistency": "SOLID",
            "name": "garlic",
            "nameClean": "garlic",
            "original": "2 cloves garlic, sliced",
            "originalName": "garlic, sliced",
            "amount": 2,
            "unit": "cloves",
            "meta": [
              "sliced"
            ],
            "measures": {
              "us": {
                "amount": 2,
                "unitShort": "cloves",
                "unitLong": "cloves"
              },
              "metric": {
                "amount": 2,
                "unitShort": "cloves",
                "unitLong": "cloves"
              }
            }
          },
          {
            "id": 11167,
            "aisle": "Produce",
            "image": "corn-on-the-cob.jpg",
            "consistency": "SOLID",
            "name": "ears corn",
            "nameClean": "corn on the cob",
            "original": "12 ears corn, kernels cut off the cob",
            "originalName": "ears corn, kernels cut off the cob",
            "amount": 12,
            "unit": "",
            "meta": [],
            "measures": {
              "us": {
                "amount": 12,
                "unitShort": "",
                "unitLong": ""
              },
              "metric": {
                "amount": 12,
                "unitShort": "",
                "unitLong": ""
              }
            }
          },
          {
            "id": 20081,
            "aisle": "Baking",
            "image": "flour.png",
            "consistency": "SOLID",
            "name": "flour",
            "nameClean": "wheat flour",
            "original": "1/4 cup flour",
            "originalName": "flour",
            "amount": 0.25,
            "unit": "cup",
            "meta": [],
            "measures": {
              "us": {
                "amount": 0.25,
                "unitShort": "cups",
                "unitLong": "cups"
              },
              "metric": {
                "amount": 59.147,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 1053,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "fluid-cream.jpg",
            "consistency": "LIQUID",
            "name": "heavy cream",
            "nameClean": "cream",
            "original": "1 quart heavy cream",
            "originalName": "heavy cream",
            "amount": 1,
            "unit": "quart",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "qt",
                "unitLong": "quart"
              },
              "metric": {
                "amount": 946.353,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 8164,
            "aisle": "Cereal;Baking",
            "image": "cornmeal.png",
            "consistency": "SOLID",
            "name": "grits",
            "nameClean": "cooked grits",
            "original": "1 cup cooked grits",
            "originalName": "cooked grits",
            "amount": 1,
            "unit": "cup",
            "meta": [
              "cooked"
            ],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "cup",
                "unitLong": "cup"
              },
              "metric": {
                "amount": 236.588,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 11632,
            "aisle": "Canned and Jarred;Ethnic Foods",
            "image": "pickled-jalapenos.png",
            "consistency": "SOLID",
            "name": "jalapeño peppers",
            "nameClean": "pickled jalapenos",
            "original": "3 tablespoons minced canned jalapeño peppers",
            "originalName": "minced canned jalapeño peppers",
            "amount": 3,
            "unit": "tablespoons",
            "meta": [
              "canned",
              "minced"
            ],
            "measures": {
              "us": {
                "amount": 3,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              },
              "metric": {
                "amount": 3,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              }
            }
          },
          {
            "id": 2047,
            "aisle": "Spices and Seasonings",
            "image": "salt.jpg",
            "consistency": "SOLID",
            "name": "salt",
            "nameClean": "table salt",
            "original": "Salt",
            "originalName": "Salt",
            "amount": 10,
            "unit": "servings",
            "meta": [],
            "measures": {
              "us": {
                "amount": 10,
                "unitShort": "servings",
                "unitLong": "servings"
              },
              "metric": {
                "amount": 10,
                "unitShort": "servings",
                "unitLong": "servings"
              }
            }
          },
          {
            "id": 1002030,
            "aisle": "Spices and Seasonings",
            "image": "pepper.jpg",
            "consistency": "SOLID",
            "name": "pepper",
            "nameClean": "black pepper",
            "original": "Freshly ground black pepper",
            "originalName": "Freshly ground black pepper",
            "amount": 10,
            "unit": "servings",
            "meta": [
              "black",
              "freshly ground"
            ],
            "measures": {
              "us": {
                "amount": 10,
                "unitShort": "servings",
                "unitLong": "servings"
              },
              "metric": {
                "amount": 10,
                "unitShort": "servings",
                "unitLong": "servings"
              }
            }
          },
          {
            "id": 1123,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "egg.png",
            "consistency": "SOLID",
            "name": "eggs",
            "nameClean": "egg",
            "original": "9 eggs, beaten",
            "originalName": "eggs, beaten",
            "amount": 9,
            "unit": "",
            "meta": [
              "beaten"
            ],
            "measures": {
              "us": {
                "amount": 9,
                "unitShort": "",
                "unitLong": ""
              },
              "metric": {
                "amount": 9,
                "unitShort": "",
                "unitLong": ""
              }
            }
          },
          {
            "id": 1001009,
            "aisle": "Cheese",
            "image": "shredded-cheddar.jpg",
            "consistency": "SOLID",
            "name": "cheddar cheese",
            "nameClean": "shredded cheddar cheese",
            "original": "1 cup shredded white Cheddar cheese",
            "originalName": "shredded white Cheddar cheese",
            "amount": 1,
            "unit": "cup",
            "meta": [
              "shredded",
              "white"
            ],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "cup",
                "unitLong": "cup"
              },
              "metric": {
                "amount": 236.588,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          }
        ],
        "id": 662501,
        "title": "Sweet Corn Pudding",
        "readyInMinutes": 45,
        "servings": 10,
        "sourceUrl": "https://www.foodista.com/recipe/272H33TY/sweet-corn-pudding",
        "image": "https://spoonacular.com/recipeImages/662501-556x370.jpg",
        "imageType": "jpg",
        "summary": "Sweet Corn Pudding takes approximately <b>45 minutes</b> from beginning to end. For <b>$2.03 per serving</b>, you get a side dish that serves 10. One serving contains <b>631 calories</b>, <b>15g of protein</b>, and <b>52g of fat</b>. 24 people were glad they tried this recipe. If you have butter, jalapeño peppers, eggs, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. It is a good option if you're following a <b>lacto ovo vegetarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 45%</b>. This score is pretty good. Similar recipes include <a href=\"https://spoonacular.com/recipes/sweet-corn-pudding-300093\">Sweet Corn Pudding</a>, <a href=\"https://spoonacular.com/recipes/sweet-corn-pudding-106734\">Sweet Corn Pudding</a>, and <a href=\"https://spoonacular.com/recipes/sweet-corn-pudding-773145\">Sweet Corn Pudding</a>.",
        "cuisines": [],
        "dishTypes": [
          "side dish"
        ],
        "diets": [
          "lacto ovo vegetarian"
        ],
        "occasions": [],
        "instructions": "Preheat the oven to 425. Melt the butter in a heavy-bottomed pot over medium heat. Add the onions and garlic and cook for 3 minutes. Add the corn kernels and cook, stirring, for an additional 3 minutes. Add the flour and stir for 1 minute, then add the cream. Once the cream is incorporated, continue to stir until the mixture comes to a boil. Add the cooked grits, remove from the heat, and stir in jalapeo peppers. Taste and season well with salt and pepper.\nWith a hand-held immersion blender in the pot (or transfer the mixture to a food processor), pure the corn mixture while slowly adding the beaten eggs, until the eggs are thoroughly mixed in.\nPour the mixture into an ovenproof dish and sprinkle with the cheese. Bake for 2530 minutes, until the center puffs and the corn pudding turns golden brown.",
        "analyzedInstructions": [
          {
            "name": "",
            "steps": [
              {
                "number": 1,
                "step": "Preheat the oven to 42",
                "ingredients": [],
                "equipment": [
                  {
                    "id": 404784,
                    "name": "oven",
                    "localizedName": "oven",
                    "image": "oven.jpg"
                  }
                ]
              },
              {
                "number": 2,
                "step": "Melt the butter in a heavy-bottomed pot over medium heat.",
                "ingredients": [
                  {
                    "id": 1001,
                    "name": "butter",
                    "localizedName": "butter",
                    "image": "butter-sliced.jpg"
                  }
                ],
                "equipment": [
                  {
                    "id": 404752,
                    "name": "pot",
                    "localizedName": "pot",
                    "image": "stock-pot.jpg"
                  }
                ]
              },
              {
                "number": 3,
                "step": "Add the onions and garlic and cook for 3 minutes.",
                "ingredients": [
                  {
                    "id": 11215,
                    "name": "garlic",
                    "localizedName": "garlic",
                    "image": "garlic.png"
                  },
                  {
                    "id": 11282,
                    "name": "onion",
                    "localizedName": "onion",
                    "image": "brown-onion.png"
                  }
                ],
                "equipment": [],
                "length": {
                  "number": 3,
                  "unit": "minutes"
                }
              },
              {
                "number": 4,
                "step": "Add the corn kernels and cook, stirring, for an additional 3 minutes.",
                "ingredients": [
                  {
                    "id": 11172,
                    "name": "corn kernels",
                    "localizedName": "corn kernels",
                    "image": "corn.png"
                  }
                ],
                "equipment": [],
                "length": {
                  "number": 3,
                  "unit": "minutes"
                }
              },
              {
                "number": 5,
                "step": "Add the flour and stir for 1 minute, then add the cream. Once the cream is incorporated, continue to stir until the mixture comes to a boil.",
                "ingredients": [
                  {
                    "id": 1053,
                    "name": "cream",
                    "localizedName": "cream",
                    "image": "fluid-cream.jpg"
                  },
                  {
                    "id": 20081,
                    "name": "all purpose flour",
                    "localizedName": "all purpose flour",
                    "image": "flour.png"
                  }
                ],
                "equipment": [],
                "length": {
                  "number": 1,
                  "unit": "minutes"
                }
              },
              {
                "number": 6,
                "step": "Add the cooked grits, remove from the heat, and stir in jalapeo peppers. Taste and season well with salt and pepper.",
                "ingredients": [
                  {
                    "id": 1102047,
                    "name": "salt and pepper",
                    "localizedName": "salt and pepper",
                    "image": "salt-and-pepper.jpg"
                  },
                  {
                    "id": 8164,
                    "name": "cooked grits",
                    "localizedName": "cooked grits",
                    "image": "cornmeal.png"
                  },
                  {
                    "id": 10111333,
                    "name": "peppers",
                    "localizedName": "peppers",
                    "image": "green-pepper.jpg"
                  }
                ],
                "equipment": []
              },
              {
                "number": 7,
                "step": "With a hand-held immersion blender in the pot (or transfer the mixture to a food processor), pure the corn mixture while slowly adding the beaten eggs, until the eggs are thoroughly mixed in.",
                "ingredients": [
                  {
                    "id": 11168,
                    "name": "corn",
                    "localizedName": "corn",
                    "image": "corn.png"
                  },
                  {
                    "id": 1123,
                    "name": "egg",
                    "localizedName": "egg",
                    "image": "egg.png"
                  }
                ],
                "equipment": [
                  {
                    "id": 404776,
                    "name": "immersion blender",
                    "localizedName": "immersion blender",
                    "image": "immersion-blender.png"
                  },
                  {
                    "id": 404771,
                    "name": "food processor",
                    "localizedName": "food processor",
                    "image": "food-processor.png"
                  },
                  {
                    "id": 404752,
                    "name": "pot",
                    "localizedName": "pot",
                    "image": "stock-pot.jpg"
                  }
                ]
              },
              {
                "number": 8,
                "step": "Pour the mixture into an ovenproof dish and sprinkle with the cheese.",
                "ingredients": [
                  {
                    "id": 1041009,
                    "name": "cheese",
                    "localizedName": "cheese",
                    "image": "cheddar-cheese.png"
                  }
                ],
                "equipment": []
              },
              {
                "number": 9,
                "step": "Bake for 2530 minutes, until the center puffs and the corn pudding turns golden brown.",
                "ingredients": [
                  {
                    "id": 11168,
                    "name": "corn",
                    "localizedName": "corn",
                    "image": "corn.png"
                  }
                ],
                "equipment": [
                  {
                    "id": 404784,
                    "name": "oven",
                    "localizedName": "oven",
                    "image": "oven.jpg"
                  }
                ],
                "length": {
                  "number": 2530,
                  "unit": "minutes"
                }
              }
            ]
          }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/sweet-corn-pudding-662501"
      },
      {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 12,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 2,
        "healthScore": 6,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 81.38,
        "extendedIngredients": [
          {
            "id": 1001,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "butter-sliced.jpg",
            "consistency": "SOLID",
            "name": "butter",
            "nameClean": "butter",
            "original": "3 ounces melted butter",
            "originalName": "melted butter",
            "amount": 3,
            "unit": "ounces",
            "meta": [
              "melted"
            ],
            "measures": {
              "us": {
                "amount": 3,
                "unitShort": "oz",
                "unitLong": "ounces"
              },
              "metric": {
                "amount": 85.049,
                "unitShort": "g",
                "unitLong": "grams"
              }
            }
          },
          {
            "id": 11124,
            "aisle": "Produce",
            "image": "sliced-carrot.png",
            "consistency": "SOLID",
            "name": "carrots",
            "nameClean": "carrot",
            "original": "6 Medium Size Carrots, peeled, cored, and cut",
            "originalName": "Medium Size Carrots, peeled, cored, and cut",
            "amount": 6,
            "unit": "",
            "meta": [
              "cored",
              "peeled"
            ],
            "measures": {
              "us": {
                "amount": 6,
                "unitShort": "",
                "unitLong": ""
              },
              "metric": {
                "amount": 6,
                "unitShort": "",
                "unitLong": ""
              }
            }
          },
          {
            "id": 1123,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "egg.png",
            "consistency": "SOLID",
            "name": "eggs",
            "nameClean": "egg",
            "original": "2 large eggs",
            "originalName": "eggs",
            "amount": 2,
            "unit": "large",
            "meta": [],
            "measures": {
              "us": {
                "amount": 2,
                "unitShort": "large",
                "unitLong": "larges"
              },
              "metric": {
                "amount": 2,
                "unitShort": "large",
                "unitLong": "larges"
              }
            }
          },
          {
            "id": 20081,
            "aisle": "Baking",
            "image": "flour.png",
            "consistency": "SOLID",
            "name": "flour",
            "nameClean": "wheat flour",
            "original": "3/4 cup flour",
            "originalName": "flour",
            "amount": 0.75,
            "unit": "cup",
            "meta": [],
            "measures": {
              "us": {
                "amount": 0.75,
                "unitShort": "cups",
                "unitLong": "cups"
              },
              "metric": {
                "amount": 177.441,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 1053,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "fluid-cream.jpg",
            "consistency": "LIQUID",
            "name": "heavy cream",
            "nameClean": "cream",
            "original": "1/4 cup Heavy Cream",
            "originalName": "Heavy Cream",
            "amount": 0.25,
            "unit": "cup",
            "meta": [],
            "measures": {
              "us": {
                "amount": 0.25,
                "unitShort": "cups",
                "unitLong": "cups"
              },
              "metric": {
                "amount": 59.147,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 1077,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "milk.png",
            "consistency": "LIQUID",
            "name": "milk",
            "nameClean": "milk",
            "original": "1 cup milk",
            "originalName": "milk",
            "amount": 1,
            "unit": "cup",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "cup",
                "unitLong": "cup"
              },
              "metric": {
                "amount": 236.588,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 2025,
            "aisle": "Spices and Seasonings",
            "image": "ground-nutmeg.jpg",
            "consistency": "SOLID",
            "name": "nutmeg",
            "nameClean": "nutmeg",
            "original": "1/2 teaspoon Nutmeg, grated or ground",
            "originalName": "Nutmeg, grated or ground",
            "amount": 0.5,
            "unit": "teaspoon",
            "meta": [
              "grated"
            ],
            "measures": {
              "us": {
                "amount": 0.5,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              },
              "metric": {
                "amount": 0.5,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              }
            }
          },
          {
            "id": 1033,
            "aisle": "Cheese",
            "image": "parmesan.jpg",
            "consistency": "SOLID",
            "name": "parmesan cheese",
            "nameClean": "parmesan",
            "original": "1 cup Parmesan Cheese, grated",
            "originalName": "Parmesan Cheese, grated",
            "amount": 1,
            "unit": "cup",
            "meta": [
              "grated"
            ],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "cup",
                "unitLong": "cup"
              },
              "metric": {
                "amount": 236.588,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 2047,
            "aisle": "Spices and Seasonings",
            "image": "salt.jpg",
            "consistency": "SOLID",
            "name": "salt",
            "nameClean": "table salt",
            "original": "1 teaspoon salt",
            "originalName": "salt",
            "amount": 1,
            "unit": "teaspoon",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "tsp",
                "unitLong": "teaspoon"
              },
              "metric": {
                "amount": 1,
                "unitShort": "tsp",
                "unitLong": "teaspoon"
              }
            }
          }
        ],
        "id": 659459,
        "title": "Savory Carrot Souffle",
        "readyInMinutes": 45,
        "servings": 6,
        "sourceUrl": "http://www.foodista.com/recipe/CK45G2Q5/savory-carrot-souffle",
        "image": "https://spoonacular.com/recipeImages/659459-556x370.jpg",
        "imageType": "jpg",
        "summary": "You can never have too many hor d'oeuvre recipes, so give Savory Carrot Souffle a try. This recipe serves 6 and costs 81 cents per serving. One portion of this dish contains roughly <b>12g of protein</b>, <b>23g of fat</b>, and a total of <b>332 calories</b>. 2 people were impressed by this recipe. Head to the store and pick up butter, milk, heavy cream, and a few other things to make it today. Not a lot of people really liked this Mediterranean dish. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is brought to you by Foodista. Overall, this recipe earns a <b>good spoonacular score of 40%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/savory-carrot-souffle-1412011\">Savory Carrot Souffle</a>, <a href=\"https://spoonacular.com/recipes/savory-potato-souffl-67160\">Savory Potato Soufflé</a>, and <a href=\"https://spoonacular.com/recipes/thanksgiving-savory-bacon-butternut-squash-souffle-1412013\">Thanksgiving Savory Bacon Butternut Squash Souffle</a>.",
        "cuisines": [
          "Mediterranean",
          "French",
          "European"
        ],
        "dishTypes": [
          "side dish",
          "antipasti",
          "starter",
          "snack",
          "appetizer",
          "antipasto",
          "hor d'oeuvre"
        ],
        "diets": [],
        "occasions": [],
        "instructions": "<ol><li>Start by cooking the carrots in salted boiling water until tender. Once tender drain all the water and pulse/blend the carrots with 1/2 of the milk till smooth. Set aside.</li><li>In a small sauce pot start cooking the rest of the milk, heavy cream, flour, salt, butter, parmesan cheese, and nutmeg. Stir till thick consistency. Set aside to cool.</li><li>Start  by preheating oven to 350 degrees Farenheit. Whisk/beat the egg whites in a bowl till stiff peak. Set aside.</li><li>Mix the carrot puree and white sauce (bechamel) together and add in the yolks one at a time, then fold in the stiff egg whites. Pour mixture in pre-greased ramekins and set in a bain-marie (water bath). Bake for 1 hour.</li></ol>",
        "analyzedInstructions": [
          {
            "name": "",
            "steps": [
              {
                "number": 1,
                "step": "Start by cooking the carrots in salted boiling water until tender. Once tender drain all the water and pulse/blend the carrots with 1/2 of the milk till smooth. Set aside.In a small sauce pot start cooking the rest of the milk, heavy cream, flour, salt, butter, parmesan cheese, and nutmeg. Stir till thick consistency. Set aside to cool.Start  by preheating oven to 350 degrees Farenheit.",
                "ingredients": [
                  {
                    "id": 1033,
                    "name": "parmesan",
                    "localizedName": "parmesan",
                    "image": "parmesan.jpg"
                  },
                  {
                    "id": 1053,
                    "name": "heavy cream",
                    "localizedName": "heavy cream",
                    "image": "fluid-cream.jpg"
                  },
                  {
                    "id": 11124,
                    "name": "carrot",
                    "localizedName": "carrot",
                    "image": "sliced-carrot.png"
                  },
                  {
                    "id": 1001,
                    "name": "butter",
                    "localizedName": "butter",
                    "image": "butter-sliced.jpg"
                  },
                  {
                    "id": 2025,
                    "name": "nutmeg",
                    "localizedName": "nutmeg",
                    "image": "ground-nutmeg.jpg"
                  },
                  {
                    "id": 20081,
                    "name": "all purpose flour",
                    "localizedName": "all purpose flour",
                    "image": "flour.png"
                  },
                  {
                    "id": 0,
                    "name": "sauce",
                    "localizedName": "sauce",
                    "image": ""
                  },
                  {
                    "id": 14412,
                    "name": "water",
                    "localizedName": "water",
                    "image": "water.png"
                  },
                  {
                    "id": 1077,
                    "name": "milk",
                    "localizedName": "milk",
                    "image": "milk.png"
                  },
                  {
                    "id": 2047,
                    "name": "salt",
                    "localizedName": "salt",
                    "image": "salt.jpg"
                  }
                ],
                "equipment": [
                  {
                    "id": 404752,
                    "name": "pot",
                    "localizedName": "pot",
                    "image": "stock-pot.jpg"
                  },
                  {
                    "id": 404784,
                    "name": "oven",
                    "localizedName": "oven",
                    "image": "oven.jpg"
                  }
                ]
              },
              {
                "number": 2,
                "step": "Whisk/beat the egg whites in a bowl till stiff peak. Set aside.",
                "ingredients": [
                  {
                    "id": 1124,
                    "name": "egg whites",
                    "localizedName": "egg whites",
                    "image": "egg-white.jpg"
                  }
                ],
                "equipment": [
                  {
                    "id": 404661,
                    "name": "whisk",
                    "localizedName": "whisk",
                    "image": "whisk.png"
                  },
                  {
                    "id": 404783,
                    "name": "bowl",
                    "localizedName": "bowl",
                    "image": "bowl.jpg"
                  }
                ]
              },
              {
                "number": 3,
                "step": "Mix the carrot puree and white sauce (bechamel) together and add in the yolks one at a time, then fold in the stiff egg whites.",
                "ingredients": [
                  {
                    "id": 0,
                    "name": "carrot puree",
                    "localizedName": "carrot puree",
                    "image": "no.jpg"
                  },
                  {
                    "id": 1124,
                    "name": "egg whites",
                    "localizedName": "egg whites",
                    "image": "egg-white.jpg"
                  },
                  {
                    "id": 0,
                    "name": "sauce",
                    "localizedName": "sauce",
                    "image": ""
                  },
                  {
                    "id": 1125,
                    "name": "egg yolk",
                    "localizedName": "egg yolk",
                    "image": "egg-yolk.jpg"
                  }
                ],
                "equipment": []
              },
              {
                "number": 4,
                "step": "Pour mixture in pre-greased ramekins and set in a bain-marie (water bath).",
                "ingredients": [
                  {
                    "id": 14412,
                    "name": "water",
                    "localizedName": "water",
                    "image": "water.png"
                  }
                ],
                "equipment": [
                  {
                    "id": 404699,
                    "name": "double boiler",
                    "localizedName": "double boiler",
                    "image": "double-boiler.jpg"
                  },
                  {
                    "id": 404781,
                    "name": "ramekin",
                    "localizedName": "ramekin",
                    "image": "ramekin.jpg"
                  }
                ]
              },
              {
                "number": 5,
                "step": "Bake for 1 hour.",
                "ingredients": [],
                "equipment": [
                  {
                    "id": 404784,
                    "name": "oven",
                    "localizedName": "oven",
                    "image": "oven.jpg"
                  }
                ],
                "length": {
                  "number": 60,
                  "unit": "minutes"
                }
              }
            ]
          }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/savory-carrot-souffle-659459"
      },
      {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 148,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 3,
        "healthScore": 35,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 843.42,
        "extendedIngredients": [
          {
            "id": 12061,
            "aisle": "Nuts",
            "image": "almonds.jpg",
            "consistency": "SOLID",
            "name": "almonds",
            "nameClean": "almonds",
            "original": "1/4 cup almonds",
            "originalName": "almonds",
            "amount": 0.25,
            "unit": "cup",
            "meta": [],
            "measures": {
              "us": {
                "amount": 0.25,
                "unitShort": "cups",
                "unitLong": "cups"
              },
              "metric": {
                "amount": 59.147,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 2002,
            "aisle": "Spices and Seasonings",
            "image": "aniseed-or-anise.jpg",
            "consistency": "SOLID",
            "name": "anise biscotti cookies",
            "nameClean": "anise",
            "original": "6 anise biscotti cookies",
            "originalName": "anise biscotti cookies",
            "amount": 6,
            "unit": "",
            "meta": [],
            "measures": {
              "us": {
                "amount": 6,
                "unitShort": "",
                "unitLong": ""
              },
              "metric": {
                "amount": 6,
                "unitShort": "",
                "unitLong": ""
              }
            }
          },
          {
            "id": 1001,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "butter-sliced.jpg",
            "consistency": "SOLID",
            "name": "butter",
            "nameClean": "butter",
            "original": "1/2 cup (115 gr) butter (at room temp.)",
            "originalName": "(115 gr) butter (at room temp.)",
            "amount": 0.5,
            "unit": "cup",
            "meta": [
              "(115 gr)",
              "(at room temp.)"
            ],
            "measures": {
              "us": {
                "amount": 0.5,
                "unitShort": "cups",
                "unitLong": "cups"
              },
              "metric": {
                "amount": 118.294,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 1123,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "egg.png",
            "consistency": "SOLID",
            "name": "eggs",
            "nameClean": "egg",
            "original": "3 eggs",
            "originalName": "eggs",
            "amount": 3,
            "unit": "",
            "meta": [],
            "measures": {
              "us": {
                "amount": 3,
                "unitShort": "",
                "unitLong": ""
              },
              "metric": {
                "amount": 3,
                "unitShort": "",
                "unitLong": ""
              }
            }
          },
          {
            "id": 93820,
            "aisle": "Cheese",
            "image": "white-cream-fluffy.jpg",
            "consistency": "SOLID",
            "name": "mascarpone cheese",
            "nameClean": "mascarpone",
            "original": "8 ounces container mascarpone cheese, room temperature",
            "originalName": "mascarpone cheese, room temperature",
            "amount": 8,
            "unit": "ounces",
            "meta": [
              "room temperature"
            ],
            "measures": {
              "us": {
                "amount": 8,
                "unitShort": "oz",
                "unitLong": "ounces"
              },
              "metric": {
                "amount": 226.796,
                "unitShort": "g",
                "unitLong": "grams"
              }
            }
          },
          {
            "id": 18334,
            "aisle": "Refrigerated",
            "image": "pie-crust.jpg",
            "consistency": "SOLID",
            "name": "crust - optional",
            "nameClean": "refrigerated pie crust",
            "original": "Crust - Optional",
            "originalName": "Crust - Optional",
            "amount": 1,
            "unit": "serving",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "serving",
                "unitLong": "serving"
              },
              "metric": {
                "amount": 1,
                "unitShort": "serving",
                "unitLong": "serving"
              }
            }
          },
          {
            "id": 19336,
            "aisle": "Baking",
            "image": "powdered-sugar.jpg",
            "consistency": "SOLID",
            "name": "powdered sugar",
            "nameClean": "powdered sugar",
            "original": "1/2 cup powdered sugar",
            "originalName": "powdered sugar",
            "amount": 0.5,
            "unit": "cup",
            "meta": [],
            "measures": {
              "us": {
                "amount": 0.5,
                "unitShort": "cups",
                "unitLong": "cups"
              },
              "metric": {
                "amount": 118.294,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 1036,
            "aisle": "Cheese",
            "image": "ricotta.png",
            "consistency": "SOLID",
            "name": "ricotta cheese",
            "nameClean": "ricotta cheese",
            "original": "1 pound Ricotta cheese, (FF works fine)",
            "originalName": "Ricotta cheese, (FF works fine)",
            "amount": 1,
            "unit": "pound",
            "meta": [
              "fine",
              "(FF works )"
            ],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "lb",
                "unitLong": "pound"
              },
              "metric": {
                "amount": 453.592,
                "unitShort": "g",
                "unitLong": "grams"
              }
            }
          },
          {
            "id": 2047,
            "aisle": "Spices and Seasonings",
            "image": "salt.jpg",
            "consistency": "SOLID",
            "name": "salt",
            "nameClean": "table salt",
            "original": "1 teaspoon salt",
            "originalName": "salt",
            "amount": 1,
            "unit": "teaspoon",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "tsp",
                "unitLong": "teaspoon"
              },
              "metric": {
                "amount": 1,
                "unitShort": "tsp",
                "unitLong": "teaspoon"
              }
            }
          },
          {
            "id": 93813,
            "aisle": "Gourmet",
            "image": "molasses.jpg",
            "consistency": "SOLID",
            "name": "vanilla bean paste",
            "nameClean": "vanilla paste",
            "original": "1 tablespoon vanilla bean paste",
            "originalName": "vanilla bean paste",
            "amount": 1,
            "unit": "tablespoon",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "Tbsp",
                "unitLong": "Tbsp"
              },
              "metric": {
                "amount": 1,
                "unitShort": "Tbsp",
                "unitLong": "Tbsp"
              }
            }
          }
        ],
        "id": 658318,
        "title": "Ricotta and Mascarpone Cheese Tart",
        "readyInMinutes": 45,
        "servings": 1,
        "sourceUrl": "http://www.foodista.com/recipe/XY22K8M8/ricotta-and-mascarpone-cheese-tart",
        "image": "https://spoonacular.com/recipeImages/658318-556x370.jpg",
        "imageType": "jpg",
        "summary": "Ricottan and Mascarpone Cheese Tart might be a good recipe to expand your dessert collection. This recipe serves 1. One portion of this dish contains approximately <b>94g of protein</b>, <b>290g of fat</b>, and a total of <b>3430 calories</b>. For <b>$8.43 per serving</b>, this recipe <b>covers 48%</b> of your daily requirements of vitamins and minerals. 3 people found this recipe to be flavorful and satisfying. Head to the store and pick up crust - optional, anise biscotti cookies, butter, and a few other things to make it today. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is brought to you by Foodista. Overall, this recipe earns a <b>good spoonacular score of 79%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/mascarpone-ricotta-cheese-cake-651189\">Mascarpone & Ricotta Cheese Cake</a>, <a href=\"https://spoonacular.com/recipes/cherry-mascarpone-cheese-tart-50110\">Cherry-Mascarpone Cheese Tart</a>, and <a href=\"https://spoonacular.com/recipes/tomato-and-goat-cheese-tart-with-rosemary-and-mascarpone-474741\">Tomato and Goat Cheese Tart with Rosemary and Mascarpone</a>.",
        "cuisines": [],
        "dishTypes": [
          "dessert"
        ],
        "diets": [],
        "occasions": [],
        "instructions": "<ol><li>Preheat oven to 350 degrees.</li><li>If not using a crust - Grease a fluted tart pan and set aside.</li><li>In a bowl of an electric mixer place all the ingredients ( ricotta cheese to powdered sugar) and blend together until smooth.</li><li>Pour mixture in fluted tart pan and bake for 30 - 35 minutes.  Allow to cool completely.  Place in refrigerator overnight.</li><li>For Crust -</li><li>In a food processor blend biscotti and almonds and butter.  Press into the prepared pan ( I used a mini spring form pan) or you could use a pastry tart.  Bake for 10 minutes, let cool.  Pour the filling into the crust and bake for 30 - 35 minutes, or until just set.</li><li>Let cool completely.  Place in refrigerator overnight.</li></ol>",
        "analyzedInstructions": [
          {
            "name": "",
            "steps": [
              {
                "number": 1,
                "step": "Preheat oven to 350 degrees.If not using a crust - Grease a fluted tart pan and set aside.In a bowl of an electric mixer place all the ingredients ( ricotta cheese to powdered sugar) and blend together until smooth.",
                "ingredients": [
                  {
                    "id": 19336,
                    "name": "powdered sugar",
                    "localizedName": "powdered sugar",
                    "image": "powdered-sugar.jpg"
                  },
                  {
                    "id": 1036,
                    "name": "ricotta cheese",
                    "localizedName": "ricotta cheese",
                    "image": "ricotta.png"
                  },
                  {
                    "id": 0,
                    "name": "crust",
                    "localizedName": "crust",
                    "image": ""
                  }
                ],
                "equipment": [
                  {
                    "id": 404628,
                    "name": "hand mixer",
                    "localizedName": "hand mixer",
                    "image": "hand-mixer.png"
                  },
                  {
                    "id": 406922,
                    "name": "tart form",
                    "localizedName": "tart form",
                    "image": "tart-pan.jpg"
                  },
                  {
                    "id": 404783,
                    "name": "bowl",
                    "localizedName": "bowl",
                    "image": "bowl.jpg"
                  },
                  {
                    "id": 404784,
                    "name": "oven",
                    "localizedName": "oven",
                    "image": "oven.jpg"
                  }
                ]
              },
              {
                "number": 2,
                "step": "Pour mixture in fluted tart pan and bake for 30 - 35 minutes.  Allow to cool completely.",
                "ingredients": [],
                "equipment": [
                  {
                    "id": 404784,
                    "name": "oven",
                    "localizedName": "oven",
                    "image": "oven.jpg"
                  },
                  {
                    "id": 406922,
                    "name": "tart form",
                    "localizedName": "tart form",
                    "image": "tart-pan.jpg"
                  }
                ],
                "length": {
                  "number": 35,
                  "unit": "minutes"
                }
              },
              {
                "number": 3,
                "step": "Place in refrigerator overnight.For Crust -In a food processor blend biscotti and almonds and butter.  Press into the prepared pan ( I used a mini spring form pan) or you could use a pastry tart.",
                "ingredients": [
                  {
                    "id": 98843,
                    "name": "biscotti",
                    "localizedName": "biscotti",
                    "image": "biscotti.jpg"
                  },
                  {
                    "id": 12061,
                    "name": "almonds",
                    "localizedName": "almonds",
                    "image": "almonds.jpg"
                  },
                  {
                    "id": 1001,
                    "name": "butter",
                    "localizedName": "butter",
                    "image": "butter-sliced.jpg"
                  },
                  {
                    "id": 0,
                    "name": "crust",
                    "localizedName": "crust",
                    "image": ""
                  }
                ],
                "equipment": [
                  {
                    "id": 404771,
                    "name": "food processor",
                    "localizedName": "food processor",
                    "image": "food-processor.png"
                  },
                  {
                    "id": 404645,
                    "name": "frying pan",
                    "localizedName": "frying pan",
                    "image": "pan.png"
                  }
                ]
              },
              {
                "number": 4,
                "step": "Bake for 10 minutes, let cool.",
                "ingredients": [],
                "equipment": [
                  {
                    "id": 404784,
                    "name": "oven",
                    "localizedName": "oven",
                    "image": "oven.jpg"
                  }
                ],
                "length": {
                  "number": 10,
                  "unit": "minutes"
                }
              },
              {
                "number": 5,
                "step": "Pour the filling into the crust and bake for 30 - 35 minutes, or until just set.",
                "ingredients": [
                  {
                    "id": 0,
                    "name": "crust",
                    "localizedName": "crust",
                    "image": ""
                  }
                ],
                "equipment": [
                  {
                    "id": 404784,
                    "name": "oven",
                    "localizedName": "oven",
                    "image": "oven.jpg"
                  }
                ],
                "length": {
                  "number": 35,
                  "unit": "minutes"
                }
              },
              {
                "number": 6,
                "step": "Let cool completely.",
                "ingredients": [],
                "equipment": []
              },
              {
                "number": 7,
                "step": "Place in refrigerator overnight.",
                "ingredients": [],
                "equipment": []
              }
            ]
          }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/ricotta-and-mascarpone-cheese-tart-658318"
      },
      {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 27,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 3,
        "healthScore": 36,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 796.98,
        "extendedIngredients": [
          {
            "id": 2069,
            "aisle": "Oil, Vinegar, Salad Dressing",
            "image": "balsamic-vinegar.jpg",
            "consistency": "LIQUID",
            "name": "balsamic vinegar",
            "nameClean": "balsamic vinegar",
            "original": "2 Tbs balsamic vinegar",
            "originalName": "balsamic vinegar",
            "amount": 2,
            "unit": "Tbs",
            "meta": [],
            "measures": {
              "us": {
                "amount": 2,
                "unitShort": "Tbs",
                "unitLong": "Tbs"
              },
              "metric": {
                "amount": 2,
                "unitShort": "Tbs",
                "unitLong": "Tbs"
              }
            }
          },
          {
            "id": 13923,
            "aisle": "Meat",
            "image": "strip-steak.jpg",
            "consistency": "SOLID",
            "name": "beef strip steaks",
            "nameClean": "beef strip loin",
            "original": "4 beef strip steaks",
            "originalName": "beef strip steaks",
            "amount": 4,
            "unit": "",
            "meta": [],
            "measures": {
              "us": {
                "amount": 4,
                "unitShort": "",
                "unitLong": ""
              },
              "metric": {
                "amount": 4,
                "unitShort": "",
                "unitLong": ""
              }
            }
          },
          {
            "id": 10311529,
            "aisle": "Produce",
            "image": "cherry-tomatoes.png",
            "consistency": "SOLID",
            "name": "cherry tomatoes",
            "nameClean": "cherry tomato",
            "original": "12 cherry tomatoes, halved",
            "originalName": "cherry tomatoes, halved",
            "amount": 12,
            "unit": "",
            "meta": [
              "halved"
            ],
            "measures": {
              "us": {
                "amount": 12,
                "unitShort": "",
                "unitLong": ""
              },
              "metric": {
                "amount": 12,
                "unitShort": "",
                "unitLong": ""
              }
            }
          },
          {
            "id": 11156,
            "aisle": "Produce",
            "image": "fresh-chives.jpg",
            "consistency": "SOLID",
            "name": "chives",
            "nameClean": "chives",
            "original": "2 Tbs fresh chives, chopped",
            "originalName": "fresh chives, chopped",
            "amount": 2,
            "unit": "Tbs",
            "meta": [
              "fresh",
              "chopped"
            ],
            "measures": {
              "us": {
                "amount": 2,
                "unitShort": "Tbs",
                "unitLong": "Tbs"
              },
              "metric": {
                "amount": 2,
                "unitShort": "Tbs",
                "unitLong": "Tbs"
              }
            }
          },
          {
            "id": 10211052,
            "aisle": "Produce",
            "image": "green-beans-or-string-beans.jpg",
            "consistency": "SOLID",
            "name": "green beans",
            "nameClean": "fresh green beans",
            "original": "250 g green beans, fresh or frozen",
            "originalName": "green beans, fresh or frozen",
            "amount": 250,
            "unit": "g",
            "meta": [
              "fresh"
            ],
            "measures": {
              "us": {
                "amount": 8.818,
                "unitShort": "oz",
                "unitLong": "ounces"
              },
              "metric": {
                "amount": 250,
                "unitShort": "g",
                "unitLong": "grams"
              }
            }
          },
          {
            "id": 11304,
            "aisle": "Produce",
            "image": "peas.jpg",
            "consistency": "SOLID",
            "name": "peas",
            "nameClean": "petite peas",
            "original": "250 g peas, fresh or frozen",
            "originalName": "peas, fresh or frozen",
            "amount": 250,
            "unit": "g",
            "meta": [
              "fresh"
            ],
            "measures": {
              "us": {
                "amount": 8.818,
                "unitShort": "oz",
                "unitLong": "ounces"
              },
              "metric": {
                "amount": 250,
                "unitShort": "g",
                "unitLong": "grams"
              }
            }
          },
          {
            "id": 2063,
            "aisle": "Produce",
            "image": "rosemary.jpg",
            "consistency": "SOLID",
            "name": "rosemary",
            "nameClean": "fresh rosemary",
            "original": "Fresh rosemary",
            "originalName": "Fresh rosemary",
            "amount": 4,
            "unit": "servings",
            "meta": [
              "fresh"
            ],
            "measures": {
              "us": {
                "amount": 4,
                "unitShort": "servings",
                "unitLong": "servings"
              },
              "metric": {
                "amount": 4,
                "unitShort": "servings",
                "unitLong": "servings"
              }
            }
          },
          {
            "id": 11215,
            "aisle": "Produce",
            "image": "garlic.png",
            "consistency": "SOLID",
            "name": "garlic",
            "nameClean": "garlic",
            "original": "5 cloves garlic, minced",
            "originalName": "garlic, minced",
            "amount": 5,
            "unit": "cloves",
            "meta": [
              "minced"
            ],
            "measures": {
              "us": {
                "amount": 5,
                "unitShort": "cloves",
                "unitLong": "cloves"
              },
              "metric": {
                "amount": 5,
                "unitShort": "cloves",
                "unitLong": "cloves"
              }
            }
          },
          {
            "id": 4053,
            "aisle": "Oil, Vinegar, Salad Dressing",
            "image": "olive-oil.jpg",
            "consistency": "LIQUID",
            "name": "olive oil",
            "nameClean": "olive oil",
            "original": "2 tablespoons olive oil",
            "originalName": "olive oil",
            "amount": 2,
            "unit": "tablespoons",
            "meta": [],
            "measures": {
              "us": {
                "amount": 2,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              },
              "metric": {
                "amount": 2,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              }
            }
          },
          {
            "id": 1002030,
            "aisle": "Spices and Seasonings",
            "image": "pepper.jpg",
            "consistency": "SOLID",
            "name": "pepper",
            "nameClean": "black pepper",
            "original": "¼ tsp pepper",
            "originalName": "pepper",
            "amount": 0.25,
            "unit": "tsp",
            "meta": [],
            "measures": {
              "us": {
                "amount": 0.25,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              },
              "metric": {
                "amount": 0.25,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              }
            }
          },
          {
            "id": 1036,
            "aisle": "Cheese",
            "image": "ricotta.png",
            "consistency": "SOLID",
            "name": "ricotta cheese",
            "nameClean": "ricotta cheese",
            "original": "250 g ricotta cheese",
            "originalName": "ricotta cheese",
            "amount": 250,
            "unit": "g",
            "meta": [],
            "measures": {
              "us": {
                "amount": 8.818,
                "unitShort": "oz",
                "unitLong": "ounces"
              },
              "metric": {
                "amount": 250,
                "unitShort": "g",
                "unitLong": "grams"
              }
            }
          },
          {
            "id": 2047,
            "aisle": "Spices and Seasonings",
            "image": "salt.jpg",
            "consistency": "SOLID",
            "name": "salt",
            "nameClean": "table salt",
            "original": "¼ tsp salt",
            "originalName": "salt",
            "amount": 0.25,
            "unit": "tsp",
            "meta": [],
            "measures": {
              "us": {
                "amount": 0.25,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              },
              "metric": {
                "amount": 0.25,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              }
            }
          },
          {
            "id": 1145,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "butter-sliced.jpg",
            "consistency": "SOLID",
            "name": "butter",
            "nameClean": "unsalted butter",
            "original": "3 tablespoons unsalted butter, divided",
            "originalName": "unsalted butter, divided",
            "amount": 3,
            "unit": "tablespoons",
            "meta": [
              "unsalted",
              "divided"
            ],
            "measures": {
              "us": {
                "amount": 3,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              },
              "metric": {
                "amount": 3,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
              }
            }
          }
        ],
        "id": 661948,
        "title": "Strip steak with roasted cherry tomatoes and vegetable mash",
        "readyInMinutes": 45,
        "servings": 4,
        "sourceUrl": "http://www.foodista.com/recipe/BS5TFNHL/striploin-steak-with-roasted-cherry-tomatoes-and-vegetable-mash",
        "image": "https://spoonacular.com/recipeImages/661948-556x370.jpg",
        "imageType": "jpg",
        "summary": "Strip steak with roasted cherry tomatoes and vegetable mash might be just the main course you are searching for. Watching your figure? This gluten free, primal, and ketogenic recipe has <b>903 calories</b>, <b>56g of protein</b>, and <b>66g of fat</b> per serving. This recipe serves 4. For <b>$7.97 per serving</b>, this recipe <b>covers 38%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista has 3 fans. If you have rosemary, olive oil, garlic, and a few other ingredients on hand, you can make it. It is perfect for <b>valentin day</b>. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 78%</b>, which is good. Similar recipes are <a href=\"https://spoonacular.com/recipes/coffee-rubbed-ny-strip-steak-with-berry-sauce-parsnip-mash-628498\">Coffee-Rubbed NY Strip Steak with Berry Sauce & Parsnip Mash</a>, <a href=\"https://spoonacular.com/recipes/new-york-strip-steak-lavished-with-tomatoes-and-olives-725612\">New York Strip Steak Lavished with Tomatoes and Olives</a>, and <a href=\"https://spoonacular.com/recipes/steak-fajitas-with-grilled-onions-peppers-and-roasted-cherry-tomatoes-with-chimichurri-sauce-555679\">Steak Fajitas with Grilled Onions, Peppers, and Roasted Cherry Tomatoes with Chimichurri Sauce</a>.",
        "cuisines": [],
        "dishTypes": [
          "lunch",
          "main course",
          "main dish",
          "dinner"
        ],
        "diets": [
          "gluten free",
          "primal",
          "ketogenic"
        ],
        "occasions": [
          "valentine's day",
          "father's day"
        ],
        "instructions": "<ol><li>For the marinade, mix the first 5 ingredients, add fresh rosemary.</li><li>Pour marinade over steaks and allow to stand for at least an hour, preferably overnight.</li><li>Cook cherry tomatoes in a grill pan, drizzle over a little olive oil and season to taste. Set aside.</li><li>Remove the steaks from the marinade and cook for 2 minutes on each side in hot olive oil.  Reduce the heat, add butter and cook for another 2-4 minutes, turning once, depending on how rare you like your meat. Transfer to a plate, set aside in a warm place to rest.</li><li>To make the mash, cook green string beans and peas in boiling water for 8-10 minutes until tender, then drain and cool under cold water.</li><li>Tip them into a food processor with the ricotta and a tablespoon of olive oil. Season with salt and pepper, blend them to a rough pure.</li><li>Transfer the mash to a pan where the stakes were cooked and gently heat it for 1 minute.</li><li>To serve, divide the pure among warmed plates and arrange the steaks on top. Finish with a pile of roasted tomatoes, a drizzle of olive oil and some steamed new potatoes.</li></ol>",
        "analyzedInstructions": [
          {
            "name": "",
            "steps": [
              {
                "number": 1,
                "step": "For the marinade, mix the first 5 ingredients, add fresh rosemary.",
                "ingredients": [
                  {
                    "id": 2063,
                    "name": "fresh rosemary",
                    "localizedName": "fresh rosemary",
                    "image": "rosemary.jpg"
                  },
                  {
                    "id": 0,
                    "name": "marinade",
                    "localizedName": "marinade",
                    "image": "seasoning.png"
                  }
                ],
                "equipment": []
              },
              {
                "number": 2,
                "step": "Pour marinade over steaks and allow to stand for at least an hour, preferably overnight.Cook cherry tomatoes in a grill pan, drizzle over a little olive oil and season to taste. Set aside.",
                "ingredients": [
                  {
                    "id": 10311529,
                    "name": "cherry tomato",
                    "localizedName": "cherry tomato",
                    "image": "cherry-tomatoes.png"
                  },
                  {
                    "id": 4053,
                    "name": "olive oil",
                    "localizedName": "olive oil",
                    "image": "olive-oil.jpg"
                  },
                  {
                    "id": 0,
                    "name": "marinade",
                    "localizedName": "marinade",
                    "image": "seasoning.png"
                  },
                  {
                    "id": 23232,
                    "name": "steak",
                    "localizedName": "steak",
                    "image": "ribeye-raw.jpg"
                  }
                ],
                "equipment": [
                  {
                    "id": 404648,
                    "name": "grill pan",
                    "localizedName": "grill pan",
                    "image": "grill-pan.jpg"
                  }
                ]
              },
              {
                "number": 3,
                "step": "Remove the steaks from the marinade and cook for 2 minutes on each side in hot olive oil.  Reduce the heat, add butter and cook for another 2-4 minutes, turning once, depending on how rare you like your meat.",
                "ingredients": [
                  {
                    "id": 4053,
                    "name": "olive oil",
                    "localizedName": "olive oil",
                    "image": "olive-oil.jpg"
                  },
                  {
                    "id": 0,
                    "name": "marinade",
                    "localizedName": "marinade",
                    "image": "seasoning.png"
                  },
                  {
                    "id": 1001,
                    "name": "butter",
                    "localizedName": "butter",
                    "image": "butter-sliced.jpg"
                  },
                  {
                    "id": 23232,
                    "name": "steak",
                    "localizedName": "steak",
                    "image": "ribeye-raw.jpg"
                  },
                  {
                    "id": 1065062,
                    "name": "meat",
                    "localizedName": "meat",
                    "image": "whole-chicken.jpg"
                  }
                ],
                "equipment": [],
                "length": {
                  "number": 6,
                  "unit": "minutes"
                }
              },
              {
                "number": 4,
                "step": "Transfer to a plate, set aside in a warm place to rest.To make the mash, cook green string beans and peas in boiling water for 8-10 minutes until tender, then drain and cool under cold water.Tip them into a food processor with the ricotta and a tablespoon of olive oil. Season with salt and pepper, blend them to a rough pure.",
                "ingredients": [
                  {
                    "id": 1102047,
                    "name": "salt and pepper",
                    "localizedName": "salt and pepper",
                    "image": "salt-and-pepper.jpg"
                  },
                  {
                    "id": 11052,
                    "name": "green beans",
                    "localizedName": "green beans",
                    "image": "green-beans-or-string-beans.jpg"
                  },
                  {
                    "id": 4053,
                    "name": "olive oil",
                    "localizedName": "olive oil",
                    "image": "olive-oil.jpg"
                  },
                  {
                    "id": 1036,
                    "name": "ricotta cheese",
                    "localizedName": "ricotta cheese",
                    "image": "ricotta.png"
                  },
                  {
                    "id": 14412,
                    "name": "water",
                    "localizedName": "water",
                    "image": "water.png"
                  },
                  {
                    "id": 11304,
                    "name": "peas",
                    "localizedName": "peas",
                    "image": "peas.jpg"
                  }
                ],
                "equipment": [
                  {
                    "id": 404771,
                    "name": "food processor",
                    "localizedName": "food processor",
                    "image": "food-processor.png"
                  }
                ],
                "length": {
                  "number": 10,
                  "unit": "minutes"
                }
              },
              {
                "number": 5,
                "step": "Transfer the mash to a pan where the stakes were cooked and gently heat it for 1 minute.To serve, divide the pure among warmed plates and arrange the steaks on top. Finish with a pile of roasted tomatoes, a drizzle of olive oil and some steamed new potatoes.",
                "ingredients": [
                  {
                    "id": 10211352,
                    "name": "new potato",
                    "localizedName": "new potato",
                    "image": "new-potatoes.jpg"
                  },
                  {
                    "id": 4053,
                    "name": "olive oil",
                    "localizedName": "olive oil",
                    "image": "olive-oil.jpg"
                  },
                  {
                    "id": 11529,
                    "name": "tomato",
                    "localizedName": "tomato",
                    "image": "tomato.png"
                  },
                  {
                    "id": 23232,
                    "name": "steak",
                    "localizedName": "steak",
                    "image": "ribeye-raw.jpg"
                  }
                ],
                "equipment": [
                  {
                    "id": 404645,
                    "name": "frying pan",
                    "localizedName": "frying pan",
                    "image": "pan.png"
                  }
                ],
                "length": {
                  "number": 1,
                  "unit": "minutes"
                }
              }
            ]
          }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/strip-steak-with-roasted-cherry-tomatoes-and-vegetable-mash-661948"
      },
      {
        "vegetarian": true,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 12,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 30,
        "healthScore": 3,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 67.81,
        "extendedIngredients": [
          {
            "id": 20081,
            "aisle": "Baking",
            "image": "flour.png",
            "consistency": "SOLID",
            "name": "flour",
            "nameClean": "wheat flour",
            "original": "225g flour",
            "originalName": "flour",
            "amount": 225,
            "unit": "g",
            "meta": [],
            "measures": {
              "us": {
                "amount": 7.937,
                "unitShort": "oz",
                "unitLong": "ounces"
              },
              "metric": {
                "amount": 225,
                "unitShort": "g",
                "unitLong": "grams"
              }
            }
          },
          {
            "id": 18369,
            "aisle": "Baking",
            "image": "white-powder.jpg",
            "consistency": "SOLID",
            "name": "baking powder",
            "nameClean": "baking powder",
            "original": "2 ½ tsp baking powder",
            "originalName": "baking powder",
            "amount": 2.5,
            "unit": "tsp",
            "meta": [],
            "measures": {
              "us": {
                "amount": 2.5,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              },
              "metric": {
                "amount": 2.5,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              }
            }
          },
          {
            "id": 2047,
            "aisle": "Spices and Seasonings",
            "image": "salt.jpg",
            "consistency": "SOLID",
            "name": "salt",
            "nameClean": "table salt",
            "original": "½ tsp salt",
            "originalName": "salt",
            "amount": 0.5,
            "unit": "tsp",
            "meta": [],
            "measures": {
              "us": {
                "amount": 0.5,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              },
              "metric": {
                "amount": 0.5,
                "unitShort": "tsps",
                "unitLong": "teaspoons"
              }
            }
          },
          {
            "id": 93740,
            "aisle": "Gluten Free;Health Foods",
            "image": "almond-meal-or-almond-flour.jpg",
            "consistency": "SOLID",
            "name": "ground almonds",
            "nameClean": "almond meal",
            "original": "75g ground almonds",
            "originalName": "ground almonds",
            "amount": 75,
            "unit": "g",
            "meta": [],
            "measures": {
              "us": {
                "amount": 2.646,
                "unitShort": "oz",
                "unitLong": "ounces"
              },
              "metric": {
                "amount": 75,
                "unitShort": "g",
                "unitLong": "grams"
              }
            }
          },
          {
            "id": 19335,
            "aisle": "Baking",
            "image": "sugar-in-bowl.png",
            "consistency": "SOLID",
            "name": "caster sugar",
            "nameClean": "sugar",
            "original": "80g caster sugar",
            "originalName": "caster sugar",
            "amount": 80,
            "unit": "g",
            "meta": [],
            "measures": {
              "us": {
                "amount": 2.822,
                "unitShort": "oz",
                "unitLong": "ounces"
              },
              "metric": {
                "amount": 80,
                "unitShort": "g",
                "unitLong": "grams"
              }
            }
          },
          {
            "id": 1123,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "egg.png",
            "consistency": "SOLID",
            "name": "eggs",
            "nameClean": "egg",
            "original": "2 eggs",
            "originalName": "eggs",
            "amount": 2,
            "unit": "",
            "meta": [],
            "measures": {
              "us": {
                "amount": 2,
                "unitShort": "",
                "unitLong": ""
              },
              "metric": {
                "amount": 2,
                "unitShort": "",
                "unitLong": ""
              }
            }
          },
          {
            "id": 10219296,
            "aisle": "Nut butters, Jams, and Honey;Health Foods",
            "image": "honey.png",
            "consistency": "LIQUID",
            "name": "runny honey",
            "nameClean": "runny honey",
            "original": "1 ¼ Tbs (50g) runny honey",
            "originalName": "¼ Tbs runny honey",
            "amount": 50,
            "unit": "g",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1.764,
                "unitShort": "oz",
                "unitLong": "ounces"
              },
              "metric": {
                "amount": 50,
                "unitShort": "g",
                "unitLong": "grams"
              }
            }
          },
          {
            "id": 1001116,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "plain-yogurt.jpg",
            "consistency": "LIQUID",
            "name": "natural yoghurt",
            "nameClean": "plain yogurt",
            "original": "250ml natural yoghurt",
            "originalName": "natural yoghurt",
            "amount": 250,
            "unit": "ml",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1.057,
                "unitShort": "cups",
                "unitLong": "cups"
              },
              "metric": {
                "amount": 250,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 4584,
            "aisle": "Oil, Vinegar, Salad Dressing",
            "image": "vegetable-oil.jpg",
            "consistency": "LIQUID",
            "name": "sunflower oil",
            "nameClean": "sunflower oil",
            "original": "150ml sunflower oil",
            "originalName": "sunflower oil",
            "amount": 150,
            "unit": "ml",
            "meta": [],
            "measures": {
              "us": {
                "amount": 5.073,
                "unitShort": "fl. oz",
                "unitLong": "fl. ozs"
              },
              "metric": {
                "amount": 150,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 9156,
            "aisle": "Produce",
            "image": "zest-lemon.jpg",
            "consistency": "SOLID",
            "name": "lemon zest",
            "nameClean": "lemon peel",
            "original": "Finely grated zest of 1 lemon",
            "originalName": "Finely grated zest of lemon",
            "amount": 1,
            "unit": "",
            "meta": [
              "finely grated"
            ],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "",
                "unitLong": ""
              },
              "metric": {
                "amount": 1,
                "unitShort": "",
                "unitLong": ""
              }
            }
          },
          {
            "id": 12152,
            "aisle": "Nuts;Savory Snacks",
            "image": "pistachios.jpg",
            "consistency": "SOLID",
            "name": "pistachios",
            "nameClean": "unsalted pistachios",
            "original": "50g unsalted pistachios, roughly chopped",
            "originalName": "unsalted pistachios, roughly chopped",
            "amount": 50,
            "unit": "g",
            "meta": [
              "unsalted",
              "roughly chopped"
            ],
            "measures": {
              "us": {
                "amount": 1.764,
                "unitShort": "oz",
                "unitLong": "ounces"
              },
              "metric": {
                "amount": 50,
                "unitShort": "g",
                "unitLong": "grams"
              }
            }
          },
          {
            "id": 14412,
            "aisle": "Beverages",
            "image": "water.png",
            "consistency": "LIQUID",
            "name": "water",
            "nameClean": "water",
            "original": "150ml water",
            "originalName": "water",
            "amount": 150,
            "unit": "ml",
            "meta": [],
            "measures": {
              "us": {
                "amount": 5.073,
                "unitShort": "fl. oz",
                "unitLong": "fl. ozs"
              },
              "metric": {
                "amount": 150,
                "unitShort": "ml",
                "unitLong": "milliliters"
              }
            }
          },
          {
            "id": 19335,
            "aisle": "Baking",
            "image": "sugar-in-bowl.png",
            "consistency": "SOLID",
            "name": "caster sugar",
            "nameClean": "sugar",
            "original": "100g caster sugar",
            "originalName": "caster sugar",
            "amount": 100,
            "unit": "g",
            "meta": [],
            "measures": {
              "us": {
                "amount": 3.527,
                "unitShort": "oz",
                "unitLong": "ounces"
              },
              "metric": {
                "amount": 100,
                "unitShort": "g",
                "unitLong": "grams"
              }
            }
          },
          {
            "id": 9152,
            "aisle": "Produce",
            "image": "lemon-juice.jpg",
            "consistency": "LIQUID",
            "name": "juice of lemon",
            "nameClean": "lemon juice",
            "original": "Juice of 1 lemon",
            "originalName": "Juice of lemon",
            "amount": 1,
            "unit": "",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "",
                "unitLong": ""
              },
              "metric": {
                "amount": 1,
                "unitShort": "",
                "unitLong": ""
              }
            }
          },
          {
            "id": 10411111,
            "aisle": "Gourmet",
            "image": "rosewater.png",
            "consistency": "SOLID",
            "name": "rosewater",
            "nameClean": "rose water",
            "original": "1-2tbs rosewater",
            "originalName": "rosewater",
            "amount": 1,
            "unit": "tbs",
            "meta": [],
            "measures": {
              "us": {
                "amount": 1,
                "unitShort": "tbs",
                "unitLong": "tb"
              },
              "metric": {
                "amount": 1,
                "unitShort": "tbs",
                "unitLong": "tb"
              }
            }
          }
        ],
        "id": 636766,
        "title": "Cake with lemon, rosewater and pistachios",
        "readyInMinutes": 45,
        "servings": 12,
        "sourceUrl": "https://www.foodista.com/recipe/F8MSDTTK/cake-with-lemon-rosewater-and-pistachios",
        "image": "https://spoonacular.com/recipeImages/636766-556x370.jpg",
        "imageType": "jpg",
        "summary": "Cake with lemon, rosewater and pistachios might be just the dessert you are searching for. This lacto ovo vegetarian recipe serves 12 and costs <b>68 cents per serving</b>. One portion of this dish contains about <b>6g of protein</b>, <b>18g of fat</b>, and a total of <b>325 calories</b>. 30 people found this recipe to be flavorful and satisfying. A mixture of natural yoghurt, baking powder, salt, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by Foodista. Overall, this recipe earns a <b>pretty good spoonacular score of 41%</b>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/lemon-ginger-cake-with-pistachios-188808\">Lemon-Ginger Cake with Pistachios</a>, <a href=\"https://spoonacular.com/recipes/yellow-lemon-cake-with-candied-lemons-and-pistachios-60493\">Yellow Lemon Cake With Candied Lemons And Pistachios</a>, and <a href=\"https://spoonacular.com/recipes/rosewater-raspberry-sponge-cake-1084668\">Rosewater & raspberry sponge cake</a>.",
        "cuisines": [],
        "dishTypes": [
          "dessert"
        ],
        "diets": [
          "lacto ovo vegetarian"
        ],
        "occasions": [],
        "instructions": "Sift the flour, baking powder and salt into a large bowl. Add the ground almonds and caster sugar and mix.\nMix the eggs, honey, yoghurt, sunflower oil and lemon zest together well in another bowl.\nMake a well in the center of the dry ingredients and slowly pour in the wet ingredients, bringing them together with a whisk until they are just combined.\nAdd some chopped pistachios to the mixture.\nPour the mixture into the 22cm springform cake tin lined with greaseproof paper and bake in the oven at 180C for 50 minutes or until a skewer inserted into the middle comes out clean. Allow to cool in the tin for about 20 minutes.\nMeanwhile, make the syrup. In a small saucepan, boil the water and sugar for about 5 minutes until it is reduced by half. Add the lemon juice and boil for a further 2 minutes, then cool and add the rosewater.\nMake holes on top of the warm cake with a toothpick and spoon the syrup all over the top. Scatter the pistachios over and leave to cool for 1 hour.\nDecorate with rose petals before serving.",
        "analyzedInstructions": [
          {
            "name": "",
            "steps": [
              {
                "number": 1,
                "step": "Sift the flour, baking powder and salt into a large bowl.",
                "ingredients": [
                  {
                    "id": 18369,
                    "name": "baking powder",
                    "localizedName": "baking powder",
                    "image": "white-powder.jpg"
                  },
                  {
                    "id": 20081,
                    "name": "all purpose flour",
                    "localizedName": "all purpose flour",
                    "image": "flour.png"
                  },
                  {
                    "id": 2047,
                    "name": "salt",
                    "localizedName": "salt",
                    "image": "salt.jpg"
                  }
                ],
                "equipment": [
                  {
                    "id": 404783,
                    "name": "bowl",
                    "localizedName": "bowl",
                    "image": "bowl.jpg"
                  }
                ]
              },
              {
                "number": 2,
                "step": "Add the ground almonds and caster sugar and mix.",
                "ingredients": [
                  {
                    "id": 93740,
                    "name": "almond meal",
                    "localizedName": "almond meal",
                    "image": "almond-meal-or-almond-flour.jpg"
                  },
                  {
                    "id": 0,
                    "name": "caster sugar",
                    "localizedName": "caster sugar",
                    "image": "sugar-in-bowl.png"
                  }
                ],
                "equipment": []
              },
              {
                "number": 3,
                "step": "Mix the eggs, honey, yoghurt, sunflower oil and lemon zest together well in another bowl.",
                "ingredients": [
                  {
                    "id": 4584,
                    "name": "sunflower oil",
                    "localizedName": "sunflower oil",
                    "image": "vegetable-oil.jpg"
                  },
                  {
                    "id": 9156,
                    "name": "lemon zest",
                    "localizedName": "lemon zest",
                    "image": "zest-lemon.jpg"
                  },
                  {
                    "id": 1116,
                    "name": "yogurt",
                    "localizedName": "yogurt",
                    "image": "plain-yogurt.jpg"
                  },
                  {
                    "id": 19296,
                    "name": "honey",
                    "localizedName": "honey",
                    "image": "honey.png"
                  },
                  {
                    "id": 1123,
                    "name": "egg",
                    "localizedName": "egg",
                    "image": "egg.png"
                  }
                ],
                "equipment": [
                  {
                    "id": 404783,
                    "name": "bowl",
                    "localizedName": "bowl",
                    "image": "bowl.jpg"
                  }
                ]
              },
              {
                "number": 4,
                "step": "Make a well in the center of the dry ingredients and slowly pour in the wet ingredients, bringing them together with a whisk until they are just combined.",
                "ingredients": [],
                "equipment": [
                  {
                    "id": 404661,
                    "name": "whisk",
                    "localizedName": "whisk",
                    "image": "whisk.png"
                  }
                ]
              },
              {
                "number": 5,
                "step": "Add some chopped pistachios to the mixture.",
                "ingredients": [
                  {
                    "id": 12151,
                    "name": "pistachio nuts",
                    "localizedName": "pistachio nuts",
                    "image": "pistachios.jpg"
                  }
                ],
                "equipment": []
              },
              {
                "number": 6,
                "step": "Pour the mixture into the 22cm springform cake tin lined with greaseproof paper and bake in the oven at 180C for 50 minutes or until a skewer inserted into the middle comes out clean. Allow to cool in the tin for about 20 minutes.",
                "ingredients": [],
                "equipment": [
                  {
                    "id": 404784,
                    "name": "oven",
                    "localizedName": "oven",
                    "image": "oven.jpg",
                    "temperature": {
                      "number": 180,
                      "unit": "Celsius"
                    }
                  },
                  {
                    "id": 404747,
                    "name": "cake form",
                    "localizedName": "cake form",
                    "image": "cake-pan.png"
                  },
                  {
                    "id": 3065,
                    "name": "skewers",
                    "localizedName": "skewers",
                    "image": "wooden-skewers.jpg"
                  }
                ],
                "length": {
                  "number": 70,
                  "unit": "minutes"
                }
              },
              {
                "number": 7,
                "step": "Meanwhile, make the syrup. In a small saucepan, boil the water and sugar for about 5 minutes until it is reduced by half.",
                "ingredients": [
                  {
                    "id": 19335,
                    "name": "sugar",
                    "localizedName": "sugar",
                    "image": "sugar-in-bowl.png"
                  },
                  {
                    "id": 0,
                    "name": "syrup",
                    "localizedName": "syrup",
                    "image": ""
                  },
                  {
                    "id": 14412,
                    "name": "water",
                    "localizedName": "water",
                    "image": "water.png"
                  }
                ],
                "equipment": [
                  {
                    "id": 404669,
                    "name": "sauce pan",
                    "localizedName": "sauce pan",
                    "image": "sauce-pan.jpg"
                  }
                ],
                "length": {
                  "number": 5,
                  "unit": "minutes"
                }
              },
              {
                "number": 8,
                "step": "Add the lemon juice and boil for a further 2 minutes, then cool and add the rosewater.",
                "ingredients": [
                  {
                    "id": 9152,
                    "name": "lemon juice",
                    "localizedName": "lemon juice",
                    "image": "lemon-juice.jpg"
                  },
                  {
                    "id": 10411111,
                    "name": "rose water",
                    "localizedName": "rose water",
                    "image": "rosewater.png"
                  }
                ],
                "equipment": [],
                "length": {
                  "number": 2,
                  "unit": "minutes"
                }
              },
              {
                "number": 9,
                "step": "Make holes on top of the warm cake with a toothpick and spoon the syrup all over the top. Scatter the pistachios over and leave to cool for 1 hour.",
                "ingredients": [
                  {
                    "id": 12151,
                    "name": "pistachio nuts",
                    "localizedName": "pistachio nuts",
                    "image": "pistachios.jpg"
                  },
                  {
                    "id": 0,
                    "name": "syrup",
                    "localizedName": "syrup",
                    "image": ""
                  }
                ],
                "equipment": [
                  {
                    "id": 404644,
                    "name": "toothpicks",
                    "localizedName": "toothpicks",
                    "image": "toothpicks.jpg"
                  }
                ],
                "length": {
                  "number": 60,
                  "unit": "minutes"
                }
              },
              {
                "number": 10,
                "step": "Decorate with rose petals before serving.",
                "ingredients": [],
                "equipment": []
              }
            ]
          }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/cake-with-lemon-rosewater-and-pistachios-636766"
      }
    ]
  }
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(1);
  const fetchAllRecipes = async () => {
    // const response = await fetch(API_BASE_URL+"random?number=25&apiKey="+API_KEY);
    // const recipeData = await response.json();
    // setMovies(recipeData.recipes);
    setRecipe(data.recipes)
    setLoading(0);
  };
  useEffect(() => {
    fetchAllRecipes();
    setLoading(0);
  }, []);
  return (
    <>
      {loading ? (
        <div className="h-56 w-screen grid place-items-center">
          <div className="text-cente">
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-20 h-20 mr-2 text-black animate-spin fill-rose-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <section className="text-gray-600 body-font">
          <div className="px-10 mt-5">
          <SearchBox/>
          </div>
          <div className="text-3xl flex font-bold text-rose-400 pl-10 pt-10 w-screen">
            <span className="border-b-2 border-rose-600">Recipes :</span>
          </div>
          <div className="px-5 py-14 mx-auto">
            <div className="md:flex flex-wrap -m-4">
              {recipe &&
                recipe.map((val, index) => {
                  return (
                   
                      <RecipeComponent key={index} data={val} />
             
                  );
                })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default RecipeSection;

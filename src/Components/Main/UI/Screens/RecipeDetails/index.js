import React, { useEffect, useState } from "react";
import { API_BASE_URL, API_KEY } from "../../../../Core/API";
import { useParams } from "react-router-dom";
import ReactDOM from "react-dom";
const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState();
  const [loading, setLoading] = useState(1);
  const [ingredientNames,setIngredientNames]=useState([])
  const [instructions,setInsctructions]=useState([])
  const data2 = {
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 15,
    gaps: "no",
    preparationMinutes: 5,
    cookingMinutes: 30,
    aggregateLikes: 163,
    healthScore: 27,
    creditsText: "pinkwhen.com",
    sourceName: "pinkwhen.com",
    pricePerServing: 195.54,
    extendedIngredients: [
      {
        id: 10120420,
        aisle: "Pasta and Rice",
        image: "farfalle.png",
        consistency: "SOLID",
        name: "bow tie pasta",
        nameClean: "farfalle",
        original: "3 cups bow tie pasta",
        originalName: "bow tie pasta",
        amount: 3.0,
        unit: "cups",
        meta: [],
        measures: {
          us: { amount: 3.0, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 709.764, unitShort: "ml", unitLong: "milliliters" },
        },
      },
      {
        id: 1033,
        aisle: "Cheese",
        image: "parmesan.jpg",
        consistency: "SOLID",
        name: "parmigiano reggiano",
        nameClean: "parmesan",
        original: "½ cup Parmigiano Reggiano",
        originalName: "Parmigiano Reggiano",
        amount: 0.5,
        unit: "cup",
        meta: [],
        measures: {
          us: { amount: 0.5, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 118.294, unitShort: "ml", unitLong: "milliliters" },
        },
      },
      {
        id: 20420,
        aisle: "Pasta and Rice",
        image: "fusilli.jpg",
        consistency: "SOLID",
        name: "recipe makers chicken bruschetta pasta",
        nameClean: "pasta",
        original: "Kraft Recipe Makers Chicken Bruschetta Pasta",
        originalName: "Kraft Recipe Makers Chicken Bruschetta Pasta",
        amount: 5.0,
        unit: "servings",
        meta: ["kraft"],
        measures: {
          us: { amount: 5.0, unitShort: "servings", unitLong: "servings" },
          metric: { amount: 5.0, unitShort: "servings", unitLong: "servings" },
        },
      },
      {
        id: 10010062,
        aisle: "Meat",
        image: "pork-chops.jpg",
        consistency: "SOLID",
        name: "pork chops",
        nameClean: "pork chops",
        original: "1-1/2 lb. pork chops",
        originalName: "pork chops",
        amount: 1.5,
        unit: "lb",
        meta: [],
        measures: {
          us: { amount: 1.5, unitShort: "lb", unitLong: "pounds" },
          metric: { amount: 680.389, unitShort: "g", unitLong: "grams" },
        },
      },
    ],
    id: 715538,
    title: "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
    readyInMinutes: 35,
    servings: 5,
    sourceUrl: "http://www.pinkwhen.com/make-dinner-tonight/",
    image: "https://spoonacular.com/recipeImages/715538-556x370.jpg",
    imageType: "jpg",
    summary:
      'What to make for dinner tonight?? Bruschetta Style Pork & Pasta takes roughly <b>35 minutes</b> from beginning to end. This recipe serves 5 and costs $1.96 per serving. This main course has <b>591 calories</b>, <b>45g of protein</b>, and <b>13g of fat</b> per serving. If you have bow tie pasta, parmigiano reggiano, recipe makers chicken bruschetta pasta, and a few other ingredients on hand, you can make it. 163 people have made this recipe and would make it again. It is brought to you by Pink When. Plenty of people really liked this Mediterranean dish. With a spoonacular <b>score of 90%</b>, this dish is outstanding. Similar recipes are <a href="https://spoonacular.com/recipes/dinner-tonight-grilled-romesco-style-pork-209128">Dinner Tonight: Grilled Romesco-Style Pork</a>, <a href="https://spoonacular.com/recipes/dinner-tonight-chickpea-bruschetta-31868">Dinner Tonight: Chickpea Bruschetta</a>, and <a href="https://spoonacular.com/recipes/dinner-tonight-shrimp-bruschetta-from-da-zaccaria-209251">Dinner Tonight: Shrimp Bruschetta from \'da Zaccaria</a>.',
    cuisines: ["Mediterranean", "Italian", "European"],
    dishTypes: ["lunch", "main course", "main dish", "dinner"],
    diets: [],
    occasions: [],
    winePairing: {
      pairedWines: ["chianti", "verdicchio", "trebbiano"],
      pairingText:
        "Italian works really well with Chianti, Verdicchio, and Trebbiano. Italians know food and they know wine. Trebbiano and Verdicchio are Italian white wines that pair well with fish and white meat, while Chianti is a great Italian red for heavier, bolder dishes. One wine you could try is Vignamaggio Chianti Classico Monna Lisa Gran Selezione. It has 4.8 out of 5 stars and a bottle costs about 39 dollars.",
      productMatches: [
        {
          id: 481538,
          title: "Vignamaggio Chianti Classico Monna Lisa Gran Selezione",
          description:
            "The wine is only produced in the best vintage years, with grapes from the farm's prime southwest grape growing areas. It is a deep ruby red color. The aroma is very intense, persistent, delicate, with hints of tobacco, oak and berries. A full, long, warm mouth feel.",
          price: "$38.9900016784668",
          imageUrl: "https://spoonacular.com/productImages/481538-312x231.jpg",
          averageRating: 0.9599999785423279,
          ratingCount: 5.0,
          score: 0.8974999785423279,
          link: "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fvignamaggio-chianti-classico-monna-lisa-gran-selezione-2011%2F215229",
        },
      ],
    },
    instructions:
      "wash and rinse pork chops and place into the skillet.cut them into bite sized pieces and add half of the Basil Garlic simmer sauce.boil your water and start working on cooking your bow-tie pasta.when you have finished with boiling and draining your pasta, add it to the pork along with the rest of the Basil Garlic Simmering Sauce, mixing lightly.Next you will top with the Chunky Bruschetta Finishing Sauce, cover with Parmesan, and cover. Cooking on low heat 2 to 3 minutes or until heated through.",
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "wash and rinse pork chops and place into the skillet.cut them into bite sized pieces and add half of the Basil Garlic simmer sauce.boil your water and start working on cooking your bow-tie pasta.when you have finished with boiling and draining your pasta, add it to the pork along with the rest of the Basil Garlic Simmering Sauce, mixing lightly.Next you will top with the Chunky Bruschetta Finishing Sauce, cover with Parmesan, and cover. Cooking on low heat 2 to 3 minutes or until heated through.",
            ingredients: [
              {
                id: 10120420,
                name: "farfalle",
                localizedName: "farfalle",
                image: "farfalle.png",
              },
              {
                id: 10010062,
                name: "pork chops",
                localizedName: "pork chops",
                image: "pork-chops.jpg",
              },
              {
                id: 1033,
                name: "parmesan",
                localizedName: "parmesan",
                image: "parmesan.jpg",
              },
              {
                id: 11215,
                name: "garlic",
                localizedName: "garlic",
                image: "garlic.png",
              },
              {
                id: 2044,
                name: "basil",
                localizedName: "basil",
                image: "basil.jpg",
              },
              {
                id: 20420,
                name: "pasta",
                localizedName: "pasta",
                image: "fusilli.jpg",
              },
              { id: 0, name: "sauce", localizedName: "sauce", image: "" },
              {
                id: 14412,
                name: "water",
                localizedName: "water",
                image: "water.png",
              },
              {
                id: 10010219,
                name: "pork",
                localizedName: "pork",
                image: "pork-tenderloin-raw.png",
              },
            ],
            equipment: [
              {
                id: 404645,
                name: "frying pan",
                localizedName: "frying pan",
                image: "pan.png",
              },
            ],
            length: { number: 2, unit: "minutes" },
          },
        ],
      },
    ],
    report: null,
    tips: {
      health: [
        'You can easily replace regular noodles with whole wheat noodles to add a little extra fiber, protein, vitamins, and minerals to this dish. Just don\'t make the mistake of assuming that because the pasta is whole wheat, you can eat as much as you want. The calories and the <a href="http://www.quickanddirtytips.com/health-fitness/healthy-eating/truth-about-whole-grains?page=all">effect on your blood sugar</a> is not so drastically different! ',
        'The great thing about parmesan cheese is that a little goes a long way, especially if you\'re buying <a href="http://www.forbes.com/sites/larryolmsted/2012/11/19/the-dark-side-of-parmesan-cheese-what-you-dont-know-might-hurt-you/">the real deal</a>.',
      ],
      price: [
        "Most dairy products stay good well past their sell-by date. Instead of throwing out perfectly safe food that is just a few days or maybe even a week or two old, make sure the product smells fine, has a normal texture, and doesn't taste funny. Sniff testing isn't exactly rocket science and it can keep you from wasting food (and money).",
      ],
      cooking: [
        'The best method for cooking pasta is pretty controversial, but most sources seem to reach a consensus. Check out our lesson on <a href="https://spoonacular.com/academy/how-to-cook-pasta">how to cook pasta</a> in the academy.',
        'If parmesan plays a big role in the flavor of your dish (or if you\'re a serious foodie or serious about avoiding additivies) it might be worth your time to track down <a href="http://www.forbes.com/sites/larryolmsted/2012/11/19/the-dark-side-of-parmesan-cheese-what-you-dont-know-might-hurt-you">"true" parmesan</a>, Parmigiano Reggiano.',
      ],
      green: [
        "Parmesan cheese is traditionally made using rennet, an animal-derived enzyme. For this reason, true parmesan cheese is not suitable for vegetarians. You might be able to find a vegetarian hard cheese to substitute.",
      ],
    },
    openLicense: 2,
    suspiciousDataScore: 0.0,
    approved: 2,
    unknownIngredients: [],
    userTags: [],
    originalId: null,
    spoonacularSourceUrl:
      "https://spoonacular.com/what-to-make-for-dinner-tonight-bruschetta-style-pork-pasta-715538",
  };
  const fetchRecipeDetails = () => {
    // const response = await fetch(API_BASE_URL+{id}+"/information?apiKey="+API_KEY);
    // const movieData = await response.json();
    // if (movieData) {
    //   setMovie(movieData);
    //   console.log(movieData)
    // }
    setRecipe(data2);
    console.log(recipe);
    setLoading(0);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchRecipeDetails();
  }, []);
  useEffect(() => {
    if (recipe) {
     setIngredientNames( recipe.extendedIngredients.map((ingredient) => ingredient.name))
     const instructionsList=recipe.instructions.split(".").filter(line => line.trim().length > 0)
    setInsctructions(instructionsList)
    console.log(recipe.instructions)
    console.log(instructions)
    }
  }, [recipe]);
  



  // const movieImage = movie.image
  //   ? movie.image["medium"]
  //   : "https://demofree.sirv.com/nope-not-here.jpg";



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
        <section className="text-gray-600 body-font overflow-hidden" onContent>
          <hr />
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full h-auto object-cover object-center rounded"
                src={recipe.image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-rose-500 tracking-widest flex">
                  {recipe.dishTypes.map((type, index) => {
                    return (
                      <p key={index} className="pr-3 uppercase">
                        {type}
                      </p>
                    );
                  })}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {recipe.title}
                </h1>
                <h2 className="text-sm title-font text-purple-500 font-bold tracking-widest flex"> Cuisines : 
                  {recipe.cuisines.map((type, index) => {
                    return (
                      <p key={index} className="pl-1 pr-2 uppercase">
                        {type}
                      </p>
                    );
                  })}
                </h2>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <span className="text-yellow-600 ml-3">
                      &#9829;
                      {recipe.aggregateLikes ? (
                        <>{recipe.aggregateLikes} </>
                      ) : (
                        <>Not Available </>
                      )}
                      Likes{" "}
                    </span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <p className="leading-relaxed font-bold w-full flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="pl-2">Ready In : {recipe.readyInMinutes} Minutes</p>
                    </p>
                  </span>
                </div>
                <div className="text-3xl pb-5"> Description : </div>
                <div
                  className="text-xl"
                  dangerouslySetInnerHTML={{ __html: recipe.summary }}
                ></div>
              </div>
              <div className=" my-10">
                  <p className="text-3xl font-bold">Key Ingredients :</p>
                        {ingredientNames.map((val,index)=>
                        {
                          return (<li className="text-xl" key={index}>{val}</li>)
                        })}
                </div>

                <div className=" my-10">
                  <p className="text-3xl font-bold">How To Make :</p>
                        {instructions.map((val,index)=>{
                            return(<h1 className="text-xl py-2"><span className="font-bold mr-2">{index+1}.</span><span>{val} .</span></h1> )
                        })}
                </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default RecipeDetails;

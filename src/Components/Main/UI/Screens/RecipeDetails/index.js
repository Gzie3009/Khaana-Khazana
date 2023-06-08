import React, { Children, useEffect, useState } from "react";
import { API_BASE_URL, API_KEY } from "../../../../Core/API";
import { useParams } from "react-router-dom";
const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState();
  const [loading, setLoading] = useState(1);
  const [ingredientNames,setIngredientNames]=useState([])
  const [image,setImage]=useState()
  const fetchRecipeDetails = async () => {
    const response = await fetch(API_BASE_URL+""+id+"/information?apiKey="+API_KEY);
    const recipeData = await response.json();
    setRecipe(recipeData);
    setLoading(0);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchRecipeDetails();
  }, []);
  useEffect(() => {
    if (recipe) {
     setIngredientNames( recipe.extendedIngredients.map((ingredient) => ingredient.name))
    recipe.image? setImage(recipe.image):setImage("https://demofree.sirv.com/nope-not-here.jpg");
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
                src={image}
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
              {ingredientNames?<div className=" my-10">
                  <p className="text-3xl font-bold">Key Ingredients :</p>
                        {ingredientNames && ingredientNames.map((val,index)=>
                        {
                          return (<li className="text-xl" key={index}>{val}</li>)
                        })}
                </div>:null}
                <br></br>
                {recipe.instructions?<div className=" my-10">
                  <p className="text-3xl font-bold">How To Make :</p>
                        <div dangerouslySetInnerHTML={{__html: recipe.instructions}}></div>
                </div>:null}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default RecipeDetails;

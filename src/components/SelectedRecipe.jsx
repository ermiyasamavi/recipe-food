import { useEffect, useState } from "react";

function SelectedRecipe({ selectedId, handelCloseSelected }) {
  const [datiles, setDatiles] = useState([]);

  useEffect(function () {
    async function getDatilsRecipe() {
      const rest = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedId}`
      );
      const data = await rest.json();
      setDatiles(data.meals);
      console.log(data.meals);
    }
    getDatilsRecipe();
  }, []);
  return (
    <div className="w-full  h-fit relative flex justify-end items-center ">
      {datiles?.map((recipe) => {
        return (
          <div key={recipe.idMeal} className="w-full md:w-3/4 h-auto ">
            <button
              onClick={handelCloseSelected}
              className="absolute w-10 h-10 bg-orange-600 flex justify-center text-2xl md:text-3xl rounded-full btn"
            >
              &larr;
            </button>
            <img src={recipe.strMealThumb} alt="" className="w-full h-full" />
            <h1 className="w-auto h-auto  md:h-20 bg-orange-600 text-white py-2  px-4 md:px-20  md:text-3xl font-bold absolute top-64  md:top-1/3  left-16 md:left-80 z-1 rotate-8 flex items-center justify-center skew-y-12 ">
              {recipe.strMeal}
            </h1>
            <div className="w-full h-auto   flex flex-col items-center gap-4 mt-5 border-y border-stone-300">
              <p className="text-orange-600 md:text-2xl">INGREDIENTS</p>
              <div className="grid grid-cols-2 md:grid-cols-3  w-full h-full text-white place-items-center gap-1">
                <p>{recipe.strIngredient1}</p>
                <p>{recipe.strIngredient2}</p>
                <p>{recipe.strIngredient3}</p>
                <p>{recipe.strIngredient4}</p>
                <p>{recipe.strIngredient5}</p>
                <p>{recipe.strIngredient6}</p>
                <p>{recipe.strIngredient7}</p>
              </div>
            </div>
            <p className="mt-5 md:mt-30 text-white text-sm leading-6  md:leading-8 tracking-wide	md:tracking-wider	">
              {recipe.strInstructions}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default SelectedRecipe;

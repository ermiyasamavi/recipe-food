import { useEffect } from "react";
import { useState } from "react";
import Loding from "./Loding";
import Error from "./Error";
import SelectedRecipe from "./SelectedRecipe";
function Main() {
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [targgerFetch, setTarggerFetch] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  function handelSearchRecipe() {
    setTarggerFetch(true);
  }

  function handelSelectedId(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }
  function handelCloseSelected() {
    setSelectedId(null);
  }

  useEffect(
    function () {
      async function fetched() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`
          );
          const data = await res.json();

          if (query !== "") {
            setRecipe(data.meals);
          }
          if (query === "") {
            setRecipe(null);
          }
        } catch (error) {
          console.error(error);
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (targgerFetch) {
        fetched();
        setTarggerFetch(false);
      }
    },
    [targgerFetch]
  );

  return (
    <main className="w-full h-auto bg-gray-900 py-10 md:py-20 flex flex-col items-center">
      <div className="w-96 md:w-1/2 flex justify-between   bg-yellow-50 rounded-full">
        <input
          type="text"
          placeholder="Find Recipe Meals"
          className="bg-transparent md:text-xl font-medium px-2 border-0 outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-orange-600 h-full py-2  w-32 md:w-36 text-white font-semibold md:font-bold hover:bg-yellow-500 rounded-full px-2 md:px-6"
          onClick={handelSearchRecipe}
        >
          Searchs
        </button>
      </div>
      <section className="w-full h-full pt-20 px-5 md:px-20 flex justify-between">
        {isLoading && <Loding />}
        {!isLoading && !error && (
          <div className="w-72 md:w-96 h-full flex flex-col gap-4 md:gap-6">
            {recipe?.map((meal) => {
              return (
                <div
                  className="w-72 md:w-96 h-24 md:h-28 bg-black flex items-center gap-4 border border-yellow-600"
                  key={meal.idMeal}
                >
                  <img
                    src={meal.strMealThumb}
                    alt="image"
                    className="w-20 md:w-32 h-full block"
                  />
                  <div className="flex flex-col items-start gap-3">
                    <h2 className="my-2 text-sm md:text-xl md:font-semibold text-yellow-50">
                      {meal.strMeal}
                    </h2>
                    <button
                      className="text-white bg-orange-600 py-1 px-2 mb-1 rounded-3xl hover:origin-top-1 hover:translate-y-1 text-sm md:text-xl"
                      onClick={() => handelSelectedId(meal.idMeal)}
                    >
                      Get Recipe
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {error && <Error />}
        {selectedId ? (
          <SelectedRecipe
            selectedId={selectedId}
            handelCloseSelected={handelCloseSelected}
          />
        ) : (
          <p className="w-full text-xl text-white flex justify-center">
            NOT RECIPE DATILS
          </p>
        )}
      </section>
    </main>
  );
}

export default Main;

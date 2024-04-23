function Baner() {
  return (
    <header className="header w-full h-[70vh] relative">
      <div className="bg-gradient-to-t from-black to-transparent w-full h-full absolute top-0"></div>
      <div className="w-full md:w-1/2 flex flex-col items-start gap-4 md:gap-8 relative top-40 px-7">
        <h1 className="text-2xl md:text-4xl font-semibold md:font-bold text-amber-600">
          Find Meals <span className="text-yellow-100">For Your</span>{" "}
          Ingredient!
        </h1>
        <p className="text-xl md:text-2xl md:text-bold text-white">
          Real food doesn't have ingredient, real food ingredient
        </p>
      </div>
    </header>
  );
}

export default Baner;

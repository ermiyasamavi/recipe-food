function Login({ onCloseLogin }) {
  return (
    <div className="w-full h-full fixed  top-0 z-10 flex justify-center custom--bg">
      <p
        className="text-white absolute right-5 top-5 text-xl cursor-pointer	"
        onClick={onCloseLogin}
      >
        X
      </p>
      <div className="bg-slate-200	 w-1/2 h-[50vh] flex flex-col items-center gap-10 p-10 md:p-20  ">
        <input
          type="text"
          placeholder="User Name"
          className="w-full outline-none p-2 shadow-2xl"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full outline-none p-2 shadow-2xl"
        />

        <button
          type="submit"
          className="bg-orange-500 py-2 px-6 md:px-10 rounded-3xl hover:bg-orange-600 hover:text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;

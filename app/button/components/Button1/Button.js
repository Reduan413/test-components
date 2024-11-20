import "./style.css";

function Button() {
  return (
    <>
      <button
        className={`text-black hover:text-secondary py-4 px-2 font-normal relative after:absolute after:h-[1px] after:w-0 after:hover:w-full transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-black after:rounded-b-lg  after:bottom-1 after:left-0 `}
      >
        Now Selling
      </button>
      <button
        className={`text-black hover:text-secondary py-4 px-2 font-normal relative after:absolute after:h-[1px] after:w-0 after:hover:w-full after:bg-black after:rounded-b-lg  after:bottom-1 after:left-0 hover:transition-all hover:duration-500`}
      >
        Now Selling2
      </button>
      <button
        type="button"
        class="bg-white text-center w-48 rounded-lg h-14 relative font-sans text-black text-xl font-semibold group"
      >
        <div className="bg-green-400  h-[1px] w-0 flex items-center justify-center absolute left-0 bottom-0 group-hover:w-full z-10 transition-all duration-500"></div>
        <p className="translate-x-2">Go Back</p>
      </button>
      <button className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
        HOVER ME
      </button>
    </>
  );
}

export default Button;

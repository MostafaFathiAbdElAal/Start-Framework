export default function Card({ Name, Alt, id }) {
  // Close window zoom picture "Escape"
  document.addEventListener("keydown", function (e) {
    try {
      e.key === "Escape" ? document.getElementById(id).classList.add("hidden") : null
      if (e.key === "Enter") {
        document.getElementById(id).classList.add("hidden");
      }
    } catch (error) {

    }
  })
  return <>
    <div onKeyUp={
      // open window zoom picture "Enter" for [Accessibility]
      (e) => e.key === "Enter" ? e.target.nextSibling.classList.remove("hidden") : null
    } className="select-none p-5 sm:p-6 md:p-7" tabIndex="4">
      <div className="relative rounded-md group overflow-hidden cursor-pointer"
        onClick={
          (e) => e.target.classList.contains("group") === false ?
            document.getElementById(id).classList.remove("hidden") : null}>
        <img src={Name} className="w-full" alt={Alt} />
        <div className="layer flex justify-center text-white items-center  absolute top-0 bottom-0 left-0 right-0 bg-[#1abc9ce6] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <i className="fa-solid fa-plus text-7xl"></i>
        </div>
      </div>
    </div>
    <div className="select-none hidden zoom fixed z-50 flex items-center top-0 bottom-0 left-0 right-0 bg-[rgb(13,110,253)] bg-opacity-25" id={id}
      onClick={
        (e) => e.target.classList.contains("zoom") ?
          e.target.classList.add("hidden") : null}>
      <div className="w-[100%] sm:w-[85%] md:w-[600px] mx-auto">
        <img className="w-full" src={Name} alt={Alt} />
      </div>
    </div>
  </>
}

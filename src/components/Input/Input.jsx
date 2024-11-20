export default function Input({ spanId, type, placeholder, name, autoComplete }) {
    return <>
        <div className="flex justify-center items-end w-full  h-[67px] relative overflow-hidden">
            <span className="absolute font-serif text-base left-0 bottom-0  transition-[bottom] duration-500 ease-in-out text-[#1abc9c]" aria-hidden="true" id={spanId}>{placeholder} :</span>
            <input type={type} placeholder={placeholder}
                name={name} autoComplete={autoComplete}
                className={`${type} z-10 placeholder:text-[#595c5f] placeholder:text-sm font-semibold text-base focus:outline-none border-b-[1px] border-black p-2 border-opacity-15 w-full`}
                onInput={function (e) {
                    if (e.target.value !== "") {
                        document.querySelectorAll(`#${spanId}`)[0].classList.replace("bottom-0", "bottom-11")
                        e.target.classList.contains("password") ?
                            document.querySelectorAll(`form div:last-of-type input[placeholder=${placeholder}] + span`)[0].classList.replace("w-0", "w-max") : null
                    } else {
                        document.querySelectorAll(`#${spanId}`)[0].classList.replace("bottom-11", "bottom-0")
                        e.target.classList.contains("password") ?
                            document.querySelectorAll(`form div:last-of-type input[placeholder=${placeholder}] + span`)[0].classList.replace("w-max", "w-0") : null
                    }
                }
                } /><span
                    className="fa-solid fa-eye absolute w-0 overflow-hidden z-10 right-2 bottom-2"
                    onClick={
                        (e) =>
                            e.target.previousElementSibling.getAttribute("type") === "password" ?
                                e.target.previousElementSibling.setAttribute("type", "text") :
                                e.target.previousElementSibling.setAttribute("type", "password")
                    }></span>
        </div >
    </>
}
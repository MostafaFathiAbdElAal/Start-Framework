export default function Button({type}) {
    return <>
        <button type={type} className="px-3 py-2 select-none cursor-pointer text-white bg-emerald-500 transition-colors duration-300 hover:bg-emerald-400 mt-4 rounded-md">Send message</button>
    </>
}
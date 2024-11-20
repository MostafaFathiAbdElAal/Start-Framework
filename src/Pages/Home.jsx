import imgAvatar from "../imgs/avataaars.svg"
import DocumentTitle from 'react-document-title'
export default function Home() {
    return <>
        <DocumentTitle title="Home" />
        <section className="bg-[#1abc9c]">
            <div className="container  gap-3 pt-32 pb-5">
                <img src={imgAvatar} className="w-64 mx-auto select-none mb-8" alt="Avatar image" />
                <h2 className="text-white font-bold uppercase text-center text-4xl mb-3">start Framework</h2>
                <div className="flex justify-center w-full text-white items-center gap-4">
                    <div className="w-20 h-1 bg-white"></div>
                    <i className="fa-solid fa-star"></i>
                    <div className="w-20 h-1 bg-white"></div>
                </div>
                <p className='text-base text-white text-center mt-3'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </section>
    </>
}

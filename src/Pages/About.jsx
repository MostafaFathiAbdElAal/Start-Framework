import DocumentTitle from 'react-document-title'
export default function About() {
    return <>
        <DocumentTitle title="About"/>
        <section className="bg-[#1abc9c] py-4 md:py-8 lg:md:py-32">
            <div className="container  gap-3 pt-32 pb-5">
                <h2 className="text-white font-bold uppercase text-center text-4xl mb-3">about component</h2>
                <div className="flex justify-center w-full text-white items-center gap-4">
                    <div className="w-20 h-1 bg-white"></div>
                    <i className="fa-solid fa-star"></i>
                    <div className="w-20 h-1 bg-white"></div>
                </div>
                <div className="flex gap-5 flex-col md:flex-row px-[11vw] mt-3 text-white">
                    <p>Freelancer is a free tailwind theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p>Freelancer is a free tailwind theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </section>
    </>
}

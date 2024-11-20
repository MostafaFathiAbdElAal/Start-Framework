export default function Footer() {
    return <>
        <footer className="text-white">
            <div className="bg-[#2c3e50] space-y-14  sm:space-y-0 w-full flex flex-wrap p-16">
                <div className="col1 w-full sm:w-[33%] space-y-3">
                    <h3 className="font-bold text-2xl text-center">LOCATION</h3>
                    <p className="text-center text-base">Clark, MO 65243</p>
                </div>
                <div className="col2 w-full sm:w-[33%] space-y-3">
                    <h3 className="font-bold text-2xl text-center">AROUND THE WEB</h3>
                    <div className="flex justify-center mt-2"><i className="fa-brands fa-facebook mx-1 icon w-10 h-10 flex content-center  text-center rounded-full border-white border-[1px]"></i>
                        <i className="fa-brands fa-twitter mx-1 icon w-10 h-10 flex text-center rounded-full content-center border-white border-[1px]"></i>
                        <i className="fa-brands fa-linkedin-in mx-1 icon w-10 h-10 flex text-center content-center rounded-full border-white border-[1px]"></i>
                        <i className="fa-solid fa-globe mx-1 icon w-10 h-10 flex text-center rounded-full content-center border-white border-[1px]"></i></div>
                </div>
                <div className="col3 w-full sm:w-[33%] space-y-3">
                    <h3 className="font-bold text-2xl text-center">ABOUT FREELANCER</h3>
                    <p className="text-base text-center">Freelance is a free to use, licensed Tailwind theme created by Route</p>
                </div>
            </div>
            <div className="w-full bg-[#1a252f] p-6">
                <p className="text-balance text-center">Copyright © Your Website 2024</p>
            </div>
        </footer>
    </>
}

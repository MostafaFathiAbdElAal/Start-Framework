import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
export default function NavBar() {
    let [active, setActive] = useState(false)
    //button Bar in navbar
    function toogleActive() {
        // Html elments
        const first = document.querySelectorAll(".bar-Nav-Link")[0]
        const middle = document.querySelectorAll(".bar-Nav-Link")[1]
        const last = document.querySelectorAll(".bar-Nav-Link")[2]
        const allLinkInNav = document.querySelectorAll("nav:last-of-type ul > * > *")
        const arrayAllLink = Array.from(allLinkInNav)
        // SetTimeout for make animation after hidden element on display or show [Accessibility]
        if (!active) {
            setTimeout(function () {
                arrayAllLink.map(function (element) {
                    element.setAttribute("aria-hidden", "false")
                    element.setAttribute("tabIndex", "3")
                })
                document.querySelectorAll("nav")[1].classList.remove("hidden")
                setActive(true)
            }, 0)
            setTimeout(function () {
                middle.classList.add("-translate-y-1")
                last.classList.add("-translate-y-2")
                document.querySelectorAll("nav")[1].classList.replace("h-0", "h-36")
                first.classList.replace("bg-white", "bg-red-700")
                middle.classList.replace("bg-white", "bg-red-700")
                last.classList.replace("bg-white", "bg-red-700")
            }, 20)
            return true
        } else {
            setTimeout(function () {
                middle.classList.remove("-translate-y-1")
                last.classList.remove("-translate-y-2")
                document.querySelectorAll("nav")[1].classList.replace("h-36", "h-0")
                first.classList.replace("bg-red-700", "bg-white")
                middle.classList.replace("bg-red-700", "bg-white")
                last.classList.replace("bg-red-700", "bg-white")
                arrayAllLink.map(function (element) {
                    element.setAttribute("aria-hidden", "true")
                    element.setAttribute("tabIndex", "-1")
                })
            }, 0)
            setActive(false)
            return false
        }
    }
    return <>
        {
            // Animation Heigth navbar when user scroll
            window.addEventListener("scroll", function () {
                const navs_Bar = document.querySelectorAll("nav")[0]
                if (this.scrollY > 30) {
                    navs_Bar.classList.replace("py-7", "py-4")
                    navs_Bar.classList.replace("h-24", "h-20")
                    document.querySelectorAll("nav")[1].classList.replace("top-24", "top-20")
                } else {
                    navs_Bar.classList.replace("h-20", "h-24")
                    navs_Bar.classList.replace("py-4", "py-7")
                    document.querySelectorAll("nav")[1].classList.replace("top-20", "top-24")
                }
            })
        }
        <nav className={`fixed top-0 right-0 left-0 z-50 text-white h-24 transition-[height,padding-block] duration-[600ms] lg:flex lg:justify-between items-center lg:items-start lg:flex-wrap px-2 sm:px-6 md:px-8 overflow-hidden lg:px-28 py-7 bg-[#2c3e50]`}>
            <div className='flex justify-between flex-wrap items-center gap-2'>
                <Link tabIndex="1" to={"/"} role='textbox'><h1 className="text-1xl sm:text-3xl md:text-3xl uppercase font-extrabold  w-fit">Start Framework</h1></Link>
                <div tabIndex="2" className='cursor-pointer barInNav lg:hidden px-3 py-3 ' role='button'
                    onClick={() => toogleActive()} onKeyUp={(e) => e.key === "Enter" ? toogleActive() : null}>
                    <div className='w-5 bar-Nav-Link bg-white h-[2px] mx-auto mt-1 transition-[transform,background] duration-[300ms,50ms]'></div>
                    <div className='w-5 bar-Nav-Link bg-white h-[2px] mx-auto mt-1 transition-[transform,background] duration-[300ms,50ms] ease-in-out'></div>
                    <div className='w-5 bar-Nav-Link bg-white h-[2px] mx-auto mt-1 transition-[transform,background] duration-[300ms,50ms] ease-in-out'></div>
                </div>
            </div>
            <ul className="text-base hidden sm:hidden lg:flex items-start lg:flex-wrap lg:flex-row lg:gap-3">
                <li><NavLink tabIndex="3" className="rounded-md transition-colors duration-200 uppercase font-bold cursor-pointer flex justify-center items-center px-2 py-2" to={"/About"}>About</NavLink></li>
                <li><NavLink tabIndex="3" className="rounded-md transition-colors duration-200 uppercase font-bold cursor-pointer flex justify-center items-center px-2 py-2" to={"/Portfolio"}>portfolio</NavLink></li>
                <li><NavLink tabIndex="3" className="rounded-md transition-colors duration-200 uppercase font-bold cursor-pointer flex justify-center items-center px-2 py-2" to={"/Contact"}>contact</NavLink></li>
            </ul>
        </nav>
        <nav className='bg-[#2c3e50] fixed top-24 overflow-hidden px-2 sm:px-6 md:px-8 h-0 hidden transition-[height,top] duration-[500ms,600ms] left-0 right-0 z-50 lg:hidden'>
            <ul className={`text-base text-white flex items-start flex-wrap flex-col pt-2 content-between`}>
                <li><NavLink tabIndex="3" className="rounded-md transition-colors duration-200 uppercase font-bold cursor-pointer flex justify-center items-center px-2 py-2" to={"/About"}>About</NavLink></li>
                <li><NavLink tabIndex="3" className="rounded-md transition-colors duration-200 uppercase font-bold cursor-pointer flex justify-center items-center px-2 py-2" to={"/Portfolio"}>portfolio</NavLink></li>
                <li><NavLink tabIndex="3" className="rounded-md transition-colors duration-200 uppercase font-bold cursor-pointer flex justify-center items-center px-2 py-2" to={"/Contact"}>contact</NavLink></li>
            </ul>
        </nav>
    </>
}

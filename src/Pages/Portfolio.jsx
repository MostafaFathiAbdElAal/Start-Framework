import img1 from "../imgs/poert1.png"
import img2 from "../imgs/port2.png"
import img3 from "../imgs/port3.png"
import React from 'react'
import Card from '../components/Card/Card'
import DocumentTitle from 'react-document-title'
export default function Portfolio() {
    return <>
        <DocumentTitle title="Portfolio" />
        <div className="container gap-3 pt-28">
            <h2 className="text-[#2c3e50] font-bold uppercase text-center text-4xl mb-3">portfolio component</h2>
            <div className="flex justify-center w-full text-[#2c3e50] items-center gap-4">
                <div className="w-20 h-1 bg-[#2c3e50]"></div>
                <i className="fa-solid fa-star"></i>
                <div className="w-20 h-1 bg-[#2c3e50]"></div>
            </div>
            <div className="flex flex-wrap justify-center">
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <Card Name={img1} id="img1" Alt="House" />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <Card Name={img2} id="img2" Alt="A piece of cake" />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <Card Name={img3} id="img3" Alt="Tent" />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <Card Name={img1} id="img4" Alt="image House" />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <Card Name={img2} id="img5" Alt="A piece of cake" />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <Card Name={img3} id="img6" Alt="Tent" />
                </div>
            </div>
        </div>
    </>
}

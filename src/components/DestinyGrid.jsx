import React from "react";
import * as icons from 'phosphor-react'
import criteria from "../data/criteria";


const DestinyGrid = () => {
    return (
        <div className="p-10">
            <h1 className="text-center text-black font-bold font-roboto">Destiny isn`t A.I, its result of human intelligence.</h1>
            <div className="grid grid-cols-3 justify-between mt-7">
            {criteria.map(({ icon, title, text })=> {
                const Icon = icons[icon]
                return (
                    <div className="flex flex-col items-center">
                    <div className="p-2 rounded-full bg-purple-600">
                    <Icon size={32} color={'white'}/>
                    </div>
                    <h1>{title}</h1>
                    <h2>{text}</h2>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default DestinyGrid
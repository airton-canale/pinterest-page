import React from "react";
import * as icons from 'phosphor-react'
import criteria from "../data/criteria";


const Icons = () => {
    return (
            <div className="grid grid-cols-3 justify-between mt-7 gap-[3rem]">
            {criteria.map(({ icon, title, text })=> {
                const Icon = icons[icon]
                return (
                    <div className="flex flex-col gap-[1rem] items-center">
                    <div className="p-2 rounded-full bg-purple-600">
                    <Icon size={32} color={'white'} />
                    </div>
                    <h1><strong>{title}</strong></h1>
                    <h2 className="text-center text-sm text-zinc-600 w-[110%]">{text}</h2>
                    </div>
                )
            })}
            </div>
    )
}

export default Icons
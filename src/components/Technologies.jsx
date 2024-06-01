import React from 'react'
import { DiMongodb } from 'react-icons/di'
import { RiJavascriptLine, RiReactjsLine, RiRemixRunLine, RiTailwindCssLine } from 'react-icons/ri'
import { SiRedux } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const Technologies = () => {
    return (
        <div className=' border-b border-neutral-800 pb-24'>
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavascriptLine className=' text-7xl text-yellow-400' />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className=' text-7xl text-cyan-400' />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssLine className=' text-7xl text-cyan-500' />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiRemixRunLine className=' text-7xl ' />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className=' text-7xl ' />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiMongodb className=' text-7xl text-green-700' />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiRedux className=' text-7xl text-purple-600' />
                </div>

            </div>

        </div>
    )
}

export default Technologies
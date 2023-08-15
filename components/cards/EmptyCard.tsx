import React from 'react'



function EmptyCard({ title, description }: { title: string, description: string }) {
    return (
        <a href="#">
            <div>
                <div className="flex items-center justify-center  ">
                    <div className=" w-full p-16 border-2 border-dotted border-gray-400 rounded-lg  border-[#2A2D3C]">
                        <h3 className="text-xl font-semibold text-white text-center">
                            {title}
                        </h3>
                        <p className="text-center">{description}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default EmptyCard
import React from 'react'
import { Icon } from '@iconify/react'
import { newCourses } from 'components/defaultNavItems'

function NewCourses() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {newCourses.map((item, index) => {
                    return (
                        <div key={index} className="max-w-sm rounded-md overflow-hidden shadow-lg p-4 bg-black-shadeOne  text-white">
                            <img className="w-full" src={item.image} alt={item.title} />
                            <div className=" py-4">
                                <div className="font-bold text-md ">{item.title}</div>
                            </div>
                            <div className=" pt-4 pb-4 flex gap-3 justify-between">
                                <p className="text-gray-700 text-sm">
                                    {item.description}
                                </p>
                                <span className="flex gap-6">
                                    <Icon icon="akar-icons:circle-plus-fill" style={{ fontSize: '24px' }} />
                                    <Icon icon="carbon:play-filled" style={{ fontSize: '24px' }} />
                                </span>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div >
    )
}

export default NewCourses
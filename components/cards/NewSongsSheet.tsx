import { newSongSheet } from 'components/defaultNavItems'
import React from 'react'

function NewSongsSheet() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {newSongSheet.map((item, index) => {
                    return (
                        <div key={index} className="max-w-sm rounded-md overflow-hidden shadow-lg p-4 bg-black-shadeOne  text-white">
                            <img className="w-full" src={item.image} alt={item.title} />
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default NewSongsSheet
import React from 'react'
import { welcomeItem } from "../defaultNavItems";
import { Icon } from '@iconify/react';

function WelcomeCards() {
    return (
        <>
            {welcomeItem.map((item, index) => {
                return (
                    <div key={index} className="max-w-sm rounded-xl overflow-hidden shadow-lg p-6 flex flex-col justify-center items-center border border-blue-900"
                        style={{
                            background: 'linear-gradient(180deg, rgba(231, 243, 247, 0.15) 0%, rgba(71, 119, 225, 0.0855) 100%)',
                            border: '1px solid #4777E14D'
                        }}>
                        {item.image}
                        <div className="pt-2">
                            <div className="font-bold text-xl">{item.title}</div>
                        </div>
                        <div className="pt-2 pb-4 flex gap-3 justify-center items-center">
                            <a href="">
                                <span className="flex gap-2 items-center">
                                    <p className="text-tiny">
                                        {item.description}
                                    </p>
                                    <Icon icon="akar-icons:arrow-right" style={{ fontSize: '18px' }} />
                                </span>
                            </a>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default WelcomeCards
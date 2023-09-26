import React from 'react'

const ServiceCard = ({ imgURL, label, subtext }) => {
    return (
        <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl shadow-indigo-500/50 px-10 py-16'>
            <div className='flex justify-center items-center rounded-full w-11 h-11 bg-coral-red'>
                <img src={imgURL} alt="service" width={24} height={24} />
            </div>
            <h3 className='mt-5 leading-normal font-bold font-palanquin text-3xl'>{label}</h3>
            <p className='mt-3 font-montserrat text-lg leading-normal text-slate-gray break-words'>{subtext}</p>
        </div>
    )
}

export default ServiceCard;
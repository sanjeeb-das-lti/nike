import { star } from "../assets/icons";

const CustomerReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className="flex justify-center items-center flex-col px-2 rounded-2xl py-2 border border-blue-600/20 shadow-xl shadow-cyan-500/30">
            <img src={imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]" />
            <p className="mt-6 max-w-sm text-start info-text">{feedback}</p>
            <div className="mt-3 flex justify-center items-center gap-2.5">
                <img src={star} alt="rating" width={24} height={24} className="object-contain m-0" />
                <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
            </div>
            <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
        </div>
    )
}

export default CustomerReviewCard;
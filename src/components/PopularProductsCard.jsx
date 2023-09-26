import { star } from "../assets/icons"

const PopularProductsCard = ({ product }) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src={product.imgURL} alt="popular products" className="w-[280px] h-[280px]" />
            <div className="mt-4 flex justify-start gap-2.5">
                <img src={star} alt="rating" width={24} height={24} />
                <p className="font-montserrat text-slate-gray text-xl leading-normal">(4.5)</p>
            </div>
            <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{product.name}</h3>
            <p className="mt-2 font-semibold font-montserrat text-coral-red text-lg leading-normal">{product.price}</p>
        </div>
    )
}

export default PopularProductsCard
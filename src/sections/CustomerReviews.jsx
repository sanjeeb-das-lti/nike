import CustomerReviewCard from "../components/CustomerReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
    return (
        <section id="customer-review"
            className="max-container">
            <h3 className="font-palanquin text-4xl font-bold text-center">
                What Our <span className="text-coral-red">Customers</span> Say?</h3>
            <p className="mt-4 m-auto max-w-lg text-center info-text">
                Hear genuine stories from our satisfied customers about their exceptional experiences with us.
            </p>
            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                {reviews.map((review) => (
                    <CustomerReviewCard key={review.imgURL} {...review} />
                ))}
            </div>
        </section>
    )
}

export default CustomerReviews;
import ReviewCard from "@/app/restaurant/components/ReviewCard";
import {Review} from ".prisma/client";

export default function Reviews({reviews}: {reviews: Review[]}) {
    return (
        <div>
            <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
                What {reviews.length} {reviews.length > 1 ? "people are": "person is"} saying
            </h1>
            <div>
                {reviews.map(review => (
                    <ReviewCard review={review} />
                ))}
            </div>
        </div>
    )
}
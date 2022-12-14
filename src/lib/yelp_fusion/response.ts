import { LunchOptionData } from "./types"
import { LunchOption } from "../../types"

export const formatLunchResponse = (businesses: LunchOptionData[]): LunchOption[]  => {
    return businesses.map(business => {
        const reviews = business.reviews.reviews.map(review => {
            return {
                name: review.user.name,
                reviewText: review.text
            }
        })
        return {
            businessName: business.name,
            address: business.location.display_address.join(" "),
            rating: business.rating,
            reviews
        }
    })
}
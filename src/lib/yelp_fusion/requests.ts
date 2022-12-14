import { SearchOptions } from '../../types'
import { Business, BusinessResponse, ReviewResponse, YelpResponse} from "./types"

export const requestReviewData = async (business: Business): Promise<ReviewResponse> => {
    const url = `https://api.yelp.com/v3/businesses/${business.id}/reviews?limit=3&sort_by=yelp_sort`
    const reviewData = await requestYelpData<ReviewResponse>(url);
    return reviewData
}

export const requestBusinessData = async (queryParams: SearchOptions): Promise<BusinessResponse> => {
    const baseUrl = 'https://api.yelp.com/v3/businesses/';
    const query = Object.entries(queryParams).map(([key, val]) => `${key}=${val}`).join('&');
    const url = encodeURI(`${baseUrl}search?${query}&sort_by=best_match&limit=5`)
    const businessData = await requestYelpData<BusinessResponse>(url);
    return businessData
}

const requestYelpData = async <T extends YelpResponse> (url: string): Promise<T> => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.YELP_KEY}`
        }
    }
    const response = await fetch(url, options)
    return response.json()
}
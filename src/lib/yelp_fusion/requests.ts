import { SearchOptions } from '../../types'
import { YelpFusion } from "./types"

export const requestReviewData = async (business: YelpFusion.Business): Promise<YelpFusion.ReviewResponse> => {
    const url = `https://api.yelp.com/v3/businesses/${business.id}/reviews?limit=3&sort_by=yelp_sort`
    return requestYelpData(url)
}

export const requestBusinessData = async (queryParams: SearchOptions): Promise<YelpFusion.BusinessResponse> => {
    const baseUrl = 'https://api.yelp.com/v3/businesses/';
    const query = Object.entries(queryParams).map(([key, val]) => `${key}=${val}`).join('&');
    const url = encodeURI(`${baseUrl}search?${query}&sort_by=best_match&limit=5`)
    return requestYelpData(url);
}

const requestYelpData = async (url: string) => {
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
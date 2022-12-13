import { SearchOptions } from '../../types'
import { YelpFusion } from "./types"
const YELP_KEY = "_LYi19Jxpy-CCSiATY9hdqm-9RVNKcTd5aiS7-Ng8TxwWsXjnTBsXAIZF5ZvkJ1e4EFCUk3iL-v-p_00mnPkNkuhjB3cW_YC3BJLIFqo03N0G6SmQpMx_2kihCCWY3Yx"

export const requestReviewData = async (business: YelpFusion.Business): Promise<YelpFusion.ReviewResponse> => {
    const url = `https://api.yelp.com/v3/businesses/${business.id}/reviews?limit=3&sort_by=yelp_sort`
    return requestYelpData(url)
}

export const requestBusinessData = async (queryParams: SearchOptions): Promise<YelpFusion.BusinessResponse> => {
    const baseUrl = 'https://api.yelp.com/v3/businesses/';
    const query = Object.entries(queryParams).map(([key, val]) => `${key}=${val}`).join('&');
    console.log(query)
    //const url = `${baseUrl}search?location=Salt%20Lake%20City&categories=sushi&sort_by=best_match&limit=5`
    const url = encodeURI(`${baseUrl}search?${query}&sort_by=best_match&limit=5`)
    return requestYelpData(url);
}

const requestYelpData = async (url: string) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${YELP_KEY}`
        }
    }
    const response = fetch(url, options)
    return (await response).json()
}
import { LunchOption, SearchOptions } from '../../types'
import { requestBusinessData, requestReviewData } from './requests'
import { formatLunchResponse } from './response'
export const yelpFusionSearch = async (queryParams: SearchOptions): Promise<LunchOption[]> => {
    const businessResponse = await requestBusinessData(queryParams)
    const lunchOptions = await Promise.all(businessResponse.businesses.map(async (business) => {
        const reviews = await requestReviewData(business)
        return {...business, reviews}
    }))
    return formatLunchResponse(lunchOptions)
}
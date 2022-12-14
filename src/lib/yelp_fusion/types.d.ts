
export interface BusinessResponse {
    businesses: Business[]
}
export interface ReviewResponse {
    reviews: Review[],
    total: number,
}
export type YelpResponse = BusinessResponse | ReviewResponse
type BusinessCategory = {
    alias: string;
    title: string;
}
type BusinessAddress = {
    address1: string;
    address2: string;
    address3: string | null;
    city: string;
    zip_code: string;
    country: string;
    state: string;
    display_address: string[]
}
type Transaction = 'pickup' | 'delivery' | 'restaurant_reservation'
export interface Business {
    id: string;
    alias: string;
    name: string;
    image_url: string;
    is_closed: boolean;
    url: string;
    review_count: number;
    categories: BusinessCategory[];
    rating: number;
    transactions: Transaction[],
    location: BusinessAddress,
    phone: string;
    display_phone: string;
    distance: number;
}

export interface LunchOptionData extends Business {
    reviews: ReviewResponse
}

export interface Review {
    id: string;
    url: string;
    text: string;
    rating: number;
    user: User;
}

type User = {
    id: string;
    profile_url: string;
    image_url: string;
    name: string;
}
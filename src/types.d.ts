
export interface SearchOptions {
    location?: string;
    categories?: string;
}

export interface LunchOption {
    businessName: string;
    address: string;
    rating: number;
    reviews: Review[];
}

interface Review {
    name: string;
    reviewText: string;
}

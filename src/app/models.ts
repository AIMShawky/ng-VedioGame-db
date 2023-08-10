export interface Game{
    background_image: string;
    name: string;
    released: string;
    metacritic_url: string;
    website: string;
    description: string;
    metacritic: number;
    genres: Array<Genre>;
    parent_platforms:Array<ParentPlatform>;
    publishers: Array<publishers>;
    ratings: Array<Rating>;
    screenshots: Array<Screenshots>;
    trailers: Array<Trailer>;

}


export interface APIResponse <T> {
    results: Array<T>;
}

interface Genre {
    name: string;
}

interface ParentPlatform {
    platform: {
        name?: string;
    };
}

interface publishers {
    name: string;
}

interface Rating {
    id: number;
    count: number;
    title: string;
}

interface Screenshots {
    image: string;
}
 
interface Trailer {
    data: {
        max: string;
    };
}

export interface GameDetails {
    background_image: string;
    name: string;
    description: string;
    parent_platforms: Array<ParentPlatform>;
}
export interface GenreResponse {
    data: genres[];
}

export interface genres {
    mal_id: number;
    name: string;
    url: string;
    count: number;
}



export interface IUser{
    id: number
    email: string
    password?: string
    profilePic?:  string
    createdAt: number
}


export interface IMovie_on_view{
    name: string,
    key: string,
    site: string,
    type: string,
    official: boolean
}
export interface IMovie{
    id: number
    title:  string
    original_title: string
    overview?: string
    poster_path?: string
    backdrop_path?: string,
    original_language:  string
    release_date: string
    popularity: string
    vote_average: string
    vote_count: string
    adult: boolean
    video: boolean
    genre_ids: [number]
    media_type: string
    cast: IMovieCast[]
    searchHistory: ISearchHistory
    runtime?: number;
    createdAt: number
    updatedAt: number
}

export interface IPerson {
    id: number
    adult: boolean
    alsoKnownAs: JSON
    biography: string
    birthday: number
    deathday: number
    gender: number
    homepage: string
    imdbId: string
    knownForDepartment: string
    name: string
    placeOfBirth: string
    popularity: number
    profilePath: string
    movies: IMovieCast
    searchHistory: ISearchHistory
    createdAt: number
    updatedAt: number
}
export interface IMovieCast{
    adult: false,
    gender: number,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string,
    cast_id: number,
    character: string,
    credit_id: string,
    order: number
}

export interface ISearchHistory{
    id: string
    movie: IMovie,
    movieId: number
    person: IPerson
    personId: number
}
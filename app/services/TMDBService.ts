import axios from 'axios'
import Fiction from '../types/Fiction'

export const getFictionsByName = async (name: string) => {
    const TMDB_API_URL = process.env.NEXT_PUBLIC_TMDB_API_URL
    const TMDB_API_TOKEN = process.env.NEXT_PUBLIC_TMDB_API_TOKEN
    const options = {
        method: 'GET',
        url: `${TMDB_API_URL}?query=${name}&include_adult=false&language=en-US&page=1`,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TMDB_API_TOKEN}`
        }
    }

    const shows = await axios
        .request(options)
        .then(function (response: any) {
            return response.data.results.map((fiction: any) => {
                return {
                    id: fiction.id,
                    title: fiction.original_name || fiction.original_title,
                    description: fiction.overview,
                    date: fiction.first_air_date || fiction.release_date,
                    picture_url: fiction.poster_path,
                    media_type: fiction.media_type,
                    vote_average: Math.floor(fiction.vote_average),
                }
            })
        })
        .catch(function (error: any) {
            console.error(error);
            return error
        })
    if (shows) {
        const sortedShows = shows.sort((a: Fiction, b: Fiction) => { return b.vote_average - a.vote_average })
        return sortedShows
    }
    return shows
}
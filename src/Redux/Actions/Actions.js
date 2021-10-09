import {ActionsTypes} from "../Constants/ActionsTypes";



// create actions functions
export const setMovies = (movies)=> {
    return {
        type : ActionsTypes.SET_MOVIES,
        payload : movies,
    }
}



export const getMovie = (movie) => {
    return {
        type : ActionsTypes.GET_MOVIE,
        payload: movie,
    }

}


export const removeMovie = () => {
    return {
        type : ActionsTypes.REMOVE_MOVIE,
    }
}
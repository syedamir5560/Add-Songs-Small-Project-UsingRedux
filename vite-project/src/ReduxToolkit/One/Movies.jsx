import React from 'react'
import { useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMovie } from './Store'
import { removeMovie } from './Store'



function Movies() {

    let [moviesTxt, setMoviesTxt] = useState('')




    let movieData = useSelector(state => state.movies)

    let dispatch = useDispatch()


    let handleMoviesAdd = () => {
        dispatch(addMovie(moviesTxt))
    }

    let handleMoviesRemove = () => {
        dispatch(removeMovie(moviesTxt))
    }


    return (
        <>
            <div className='d-flex flex-column  justify-content-center align-items-center'>
                <input type='text' placeholder='enter movies name' value={moviesTxt} onChange={(e) => setMoviesTxt(e.target.value)}
                    className='form-control w-75 h-50  mt-3 d-inline-block '
                />
                <button className='btn btn-secondary mt-2 p-1 w-75' onClick={handleMoviesAdd}>Add Movies</button>
                {

                    movieData.length > 0 && movieData.map((ele, index) => {
                        return <div className='d-flex justify-content-between my-3 text-light fs-1 '>
                            <h4>{ele}</h4>
                            <button className='btn btn-danger' onClick={handleMoviesRemove}>x</button>
                        </div>
                    })

                }
            </div>

        </>
    )
}

export default Movies
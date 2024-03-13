import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSong } from './Store'
import { removeSong } from './Store'

function Songs() {

    let [songsTxt , setSongsTxt] = useState('')

    let songData = useSelector(state=>state.songs)

    let dispatch = useDispatch()


    let handleSongsAdd = () => {
            dispatch(addSong(songsTxt))
    }


    let handleSongsRemove = () => {
        dispatch(removeSong(songsTxt))
}

    return (

        <div className='d-flex flex-column  justify-content-center align-items-center' >
            <input type='text' placeholder='Enter songs name' 
             className='form-control w-75 h-50  mt-3 d-inline-block'
             value={songsTxt} 
             onChange={(e)=>setSongsTxt(e.target.value)}/>
            <button className='btn btn-secondary mx-3 mt-2 p-1 w-75' onClick={handleSongsAdd}>Add Songs</button>
            {
               songData.length > 0 &&  songData.map((ele,index)=>{
                    return <div className='d-flex justify-content-between align-items-center  my-3 text-light fs-1 '>
                        <h4>{ele}</h4>
                        <button className='btn btn-danger fs-10' onClick={handleSongsRemove}>x</button>
                    </div>
                })
            }
        </div>
        
    )
}

export default Songs
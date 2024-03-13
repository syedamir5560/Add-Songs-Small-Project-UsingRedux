import { configureStore, createSlice } from '@reduxjs/toolkit'




const movieSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload)
        },
        removeMovie(state, action) { 
            let ind = state.indexOf(action.payload)
            state.splice(ind , 1)
        },

        reset(state , action){
            return []
        }
    }
})

const songslice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload)
        },
        removeSong(state, action) {
            let ind = state.indexOf(action.payload)
            state.splice(ind , 1)
        }
    },
    extraReducers(builder){
        builder.addCase(movieSlice.actions.reset,(state,action)=>{
            return []
        })
    }
})

export const { addSong, removeSong } = songslice.actions
export const { addMovie, removeMovie ,reset} = movieSlice.actions

//store

export let store = configureStore({
    reducer: {
        songs: songslice.reducer,
        movies: movieSlice.reducer
    }
})

console.log(store);

// console.log(store.getState());

// store.dispatch({
//     type:'song/addSong',
//     payload:'celina dion stuart-little'
// })

// console.log(store.getState());
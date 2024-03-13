import React from 'react'
import Songs from './Songs'
import Movies from './Movies'
import { reset } from './Store'
import { useDispatch } from 'react-redux'


function Main() {

  // let resetData = useSelector(state=>state.reset) 

  let dispatch = useDispatch()


  let onResetData=()=>{
    dispatch(reset())
  }

  return (
    <div className='row' style={{ height: '90vh' }}>
      <div className="col-6 bg-info">
        <Songs />
      </div>
      <div className="col-6 bg-warning ">
        <Movies />
      </div>
      <div className="col-12 mt-3">
        <button className="btn btn-danger m-3   d-block w-75 m-auto " onClick={onResetData}>RESET DATA</button>
      </div>
    </div>
  )
}

export default Main
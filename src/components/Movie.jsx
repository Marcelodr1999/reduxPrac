import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTitle } from '../slices/movieSlice'
export function Movie() {
//   const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState("")
  const title = useSelector((state) => state.movie.title)
  return (
    <div>
      <div>
        <input type = "text" value={inputValue} onChange={(e) =>{setInputValue(e.target.value)}} ></input>
    {title}
    <button
          onClick={() => console.log(inputValue) }
        >
          Console log
        </button>
        <button
          onClick={() => dispatch(addTitle({title: "movie1"}))}
        >
          Call add title
        </button>
      </div>
    </div>
  )
}
import React from 'react'

function Box(props){
  const clickMe = () => {
    alert("finish react")
  }
  return(
    <div className="box">
        Box{props.num}
      {props.name}
      <button onClick={clickMe}>click!</button>
      </div>
  )
}

export default Box;
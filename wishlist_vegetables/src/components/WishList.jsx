import React, { useState } from 'react'

function WishList() {

  const [list, setList] = useState([])
  const [text, setText] = useState("")
  
  const handleChange=(e)=>{
    setText(e.target.value)
  }
  const handleSubmit=()=>{
      if(list.length==3){
          alert("Please Delete some items")
      }else{
          setList([...list, text])
          setText("")
      }
  }

  const dlt=(key)=>{
      setList(list.filter((elem)=>elem!=list[key]&&elem))
  }

  return (
    <div>
        <h1>WISHLIST</h1>
        <input value={text} type="text" onChange={handleChange} placeholder="Enter some text"/>
        <button type="button" onClick={handleSubmit}>Add To WishList</button>
        <div>
            {list.length==0?"Add Something To Your List":list.map((elem,i)=>(<div key={i}><p >{elem}</p><button onClick={()=>dlt(i)}>delete</button></div>))}
        </div>
    </div>
  )
}

export default WishList
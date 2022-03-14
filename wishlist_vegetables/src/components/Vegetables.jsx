import React, { useState } from 'react'

function Vegetables() {
    const [potato, setPotato] = useState(8)
    const [tomatoes, setTomatoes] = useState(10)
    const [carrots, setCarrots] = useState(5)
    const [onions, setOnions] = useState(7)

  function add(setStt,stt){
    
    setStt(stt+1)
  }
  function sub(setStt,stt){
    if(stt==0){
        alert(`Can't take less than 0`)
    }else{
        setStt(stt-1)
    }
  }
  return (
    <div>
        <h1 style={{textDecoration:"underline"}}>VEGETABLES</h1>
        <div>
            <h1>Tomatoes:{tomatoes} Kgs</h1>
            <button onClick={()=>add(setTomatoes,tomatoes)}>+</button>
            <button onClick={()=>sub(setTomatoes,tomatoes)}>-</button>
        </div>
        <div>
            <h1>Potatoes:{potato} Kgs</h1>
            <button onClick={()=>add(setPotato,potato)}>+</button>
            <button onClick={()=>sub(setPotato,potato)}>-</button>
        </div>
        <div>
            <h1>Carrots:{carrots} Kgs</h1>
            <button onClick={()=>add(setCarrots,carrots)}>+</button>
            <button onClick={()=>sub(setCarrots,carrots)}>-</button>
        </div>
        <div>
            <h1>Onions:{onions} Kgs</h1>
            <button onClick={()=>add(setOnions,onions)}>+</button>
            <button onClick={()=>sub(setOnions,onions)}>-</button>
        </div>
    </div>
  )
}

export default Vegetables
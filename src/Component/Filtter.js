import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Filtter(){
    const [search,setSearch]=useSearchParams()
    return(
        <div>
            <h1>Filtter Page</h1>
            <h3>Your Age Is {search.get("age")}</h3>
            <input type="text" onChange={(e)=>{setSearch({age:e.target.value})}} placeholder="ENTER AGE"/>
            
        </div>
    )
}
 export default Filtter
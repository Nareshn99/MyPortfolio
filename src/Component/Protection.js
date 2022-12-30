import React from 'react'
import { redirect } from "react-router-dom";
function Protection(prop) {
    let cmp=prop.cmp
    let auth=localStorage.getItem('auth')
  return (
    <>
      {auth?<cmp/>:<redirect to="login"></redirect>}
    </>
  )
}

export default Protection
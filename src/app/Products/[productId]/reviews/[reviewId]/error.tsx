"use client"
import React from 'react'

function error({error, reset,}:{error:Error; reset:() => void;}) {
  return (
    <div>{error.message} <button onClick={reset}>Reset</button></div>
  )
}

export default error
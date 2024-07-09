"use client"
import React from 'react'

function getRandomInt(count:number){
  return Math.floor(Math.random() * count);
} 

function ReviewId({params,}:{
    params:{
        productId: string;
        reviewId: string;
    }
}) {

  const random = getRandomInt(2);
  if (random===1) {
    throw new Error("Haha Encountered an Error")

  }

  // if (params.reviewId==="1") {
  //   throw new Error("Hello I am the older error")
  // }


  return (
    <>
    <h1>Review of {params.reviewId} for Product {params.productId}</h1>
    </>
  )
}

export default ReviewId
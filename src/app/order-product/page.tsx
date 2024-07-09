"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

function Order() {
  const router = useRouter();
    const handleProduct = () => {
        console.log("Placing yor order");
        router.push("/");
    }

    const handleCart = () => {
      router.back();
    }
  return (
    <>
    <h1>Order-Product</h1>
    <button onClick={handleProduct}>Order</button>
    <button onClick={handleCart}>Add to Cart</button>
    </>
  )
}

export default Order
import React from 'react'
import { Metadata } from 'next';
import Test from "@/components/test"

export const metadata: Metadata = {
  title: "Products",
};
function page() {
  return (
    <div><h1>All Products</h1>
    <h2>product1</h2>
    <h2>product2</h2> 
    <h2>product3</h2>
    <h2>product4</h2> </div>
    
  )
}

export default page
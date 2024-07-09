import React from 'react'
import { Metadata } from 'next';

type Props={
  params:{
    productId:string;
  };
};

export const generateMetadata = ({params}: Props ):Metadata =>{
  return{
    title:`product${params.productId}`,
  };
};




function page({params}:{
    params:{productId:string};
}) {
  return (
    <div>Details of {params.productId}</div>
  )
}

export default page
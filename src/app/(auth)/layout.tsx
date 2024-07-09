"use client"
import { link } from "fs";
import Link from "next/link";
import { useState } from "react";

const navLinks=[
    {name:"register", href:"/register"},
    {name:"login", href:"/login"},
    {name:"password", href:"/password"},
];

function AuthLayout({
    children,
}:{
    children:React.ReactNode;
}){
    const [input, setInput] = useState("")
    return(
    <div>
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
        {navLinks.map((link)=>{
        return(
            <Link href={link.href} key={link.name}>
                {link.name}</Link>
        );
    })}
    {children}</div>
    );
}

export default AuthLayout;
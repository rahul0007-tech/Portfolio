function AuthLayout({
    children,
}:{
    children:React.ReactNode;
}){
    return(
        <>
        {children}
        <h2>Featured Product</h2>
        </>
    );
}

export default AuthLayout;
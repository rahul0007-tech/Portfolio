import { Children } from "react";

export default function DashboardLayot ({

    children,
    user,
    revenue,
    notification,
    login,
}: {
    children: React.ReactNode;
    user: React.ReactNode;
    revenue: React.ReactNode;
    notification: React.ReactNode;
    login: React.ReactNode;
}
){

    const islogin =false;

    return islogin ?(
        <div>
            <div>{children}</div>
            <div style={{display: "flex"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div>{user}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{display: "flex", flex:1}}>{notification}</div>
            </div>
        </div>
    ):(<div>{login}</div>);

}
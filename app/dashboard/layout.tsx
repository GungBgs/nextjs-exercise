import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({children} : {children: React.ReactNode}) {
    return (
        <div className="flex h-screen">
            <SideNav />
            <div className="flex-1 p-10">
                {children}
            </div>
        </div>
    );
}
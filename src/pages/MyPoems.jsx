import { Outlet } from "react-router";
import Hero from "../components/poems/Hero";

function MyPoems() {
    return (
        <div className="backgroundContainer min-h-screen">
            <Hero></Hero>
            <Outlet></Outlet>
        </div>
    );
}

export default MyPoems;

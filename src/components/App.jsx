import { Outlet } from "react-router";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ScrollToHash from "./ScrollToHash";

function App() {
    return (
        <main>
            <ScrollToHash></ScrollToHash>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </main>
    );
}

export default App;

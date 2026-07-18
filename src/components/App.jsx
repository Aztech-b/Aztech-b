import About from "./About";
import Contact from "./Contact";
import FeaturedProjects from "./FeaturedProjects";
import Footer from "./Footer";
import Main from "./Main";
import NavBar from "./NavBar";
import ToolsAndSkills from "./ToolsAndSkills";

function App() {
    return (
        <>
            <main>
                <NavBar></NavBar>
                <Main></Main>
                <About></About>
                <ToolsAndSkills></ToolsAndSkills>
                <FeaturedProjects></FeaturedProjects>
                <Contact></Contact>
                <Footer></Footer>
            </main>
        </>
    );
}

export default App;

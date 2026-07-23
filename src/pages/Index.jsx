import About from "../components/About";
import Contact from "../components/Contact";
import Curtain from "../components/Curtain";
import FeaturedProjects from "../components/FeaturedProjects";
import Main from "../components/Main";
import ToolsAndSkills from "../components/ToolsAndSkills";

function Index() {
    return (
        <>
            <Main></Main>
            <About></About>
            <ToolsAndSkills></ToolsAndSkills>
            <FeaturedProjects></FeaturedProjects>
            <Contact></Contact>
        </>
    );
}

export default Curtain(Index);

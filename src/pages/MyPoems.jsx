import { Link } from "react-router";
import { List, ListContent, ListItem, ListTitle } from "../components/list";
import Hero from "../components/poems/Hero";

const jsonModules = import.meta.glob("../assets/poems/*.json", { eager: true });
const allPoems = Object.entries(jsonModules).map(([filepath, module]) => {
    return { _filepath: filepath, ...module.default };
});
function MyPoems() {
    return (
        <div className="backgroundContainer min-h-screen">
            <Hero></Hero>

            <div className="content">
                <div className="flex justify-center items-center h-[50vh]">
                    <h1 className="heroHeading">Poems written by me</h1>
                </div>
                <List className="grid grid-flow-col wrap gap-4 items-baseline">
                    {allPoems.map((poem, index) => (
                        <Link key={index} to="#" className={"cursor-pointer"}>
                            <ListItem>
                                <ListTitle>{poem.title}</ListTitle>
                                {poem.preview ? (
                                    <ListContent>
                                        <pre>{poem.preview}</pre>
                                    </ListContent>
                                ) : null}
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </div>
        </div>
    );
}

export default MyPoems;

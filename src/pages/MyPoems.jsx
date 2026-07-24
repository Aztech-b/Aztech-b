import { Link } from "react-router";
import poemsData from "../assets/poems.json";
import { List, ListContent, ListItem, ListTitle } from "../components/list";
import Hero from "../components/poems/Hero";

function MyPoems() {
    return (
        <div className="backgroundContainer min-h-screen">
            <Hero></Hero>

            <div className="content">
                <div className="flex justify-center items-center h-[50vh]">
                    <h1 className="heroHeading">Poems written by me</h1>
                </div>
                <List className="flex flex-wrap gap-4 content-stretch max-w-full">
                    {poemsData.map((poem, index) => (
                        <Link key={index} to="#" className={"cursor-pointer shrink-0 grow"}>
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

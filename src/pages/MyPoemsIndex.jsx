import { motion } from "motion/react";
import { Link } from "react-router";
import poemsData from "../assets/poems.json";
import { List, ListItem, ListTitle, MotionListContent } from "../components/list";

const MotionListTitle = motion.create(ListTitle);

function MyPoemsIndex() {
    return (
        <div className="content">
            <div className="flex justify-center items-center h-[50vh]">
                <h1 className="heroHeading">Poems written by me</h1>
            </div>
            <List className="flex flex-wrap gap-4 content-stretch max-w-full">
                {poemsData.map((poem) => (
                    <Link key={poem.id} to={`/my-poems/${poem.id}`} className={"cursor-pointer shrink-0 grow"}>
                        <ListItem>
                            <MotionListTitle layoutId={`title-${poem.id}`} className="inline-block">
                                {poem.title}
                            </MotionListTitle>
                            {poem.preview ? (
                                <MotionListContent layoutId={`content-${poem.id}`}>
                                    <motion.pre layout>{poem.preview}</motion.pre>
                                </MotionListContent>
                            ) : null}
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );
}

export default MyPoemsIndex;

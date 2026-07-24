import { motion } from "motion/react";
import { useParams } from "react-router";
import poems from "../assets/poems.json";
import { ListContent } from "../components/list";

function Poem() {
    const params = useParams();
    const poem = poems.find((poem) => poem.id === Number(params.id));

    return (
        <div>
            <motion.h2 layoutId={`title-${poem.id}`} className="poemHeading mb-10 inline-block">
                {poem.title}
            </motion.h2>

            <div>
                <ListContent>
                    <motion.pre layoutId={`content-${poem.id}`} layout="position">
                        {poem.content}
                    </motion.pre>
                </ListContent>
            </div>
        </div>
    );
}

export default Poem;

import { motion } from "motion/react";
import { useParams } from "react-router";
import poems from "../assets/poems.json";
import { MotionListContent } from "../components/list";

function Poem() {
    const params = useParams();
    const poem = poems.find((poem) => poem.id === Number(params.id));

    return (
        <div>
            <motion.h2 layoutId={`title-${poem.id}`} className="poemHeading mb-10 inline-block">
                {poem.title}
            </motion.h2>

            <div>
                <MotionListContent layoutId={`content-${poem.id}`}>
                    <motion.pre layout>{poem.content}</motion.pre>
                </MotionListContent>
            </div>
        </div>
    );
}

export default Poem;

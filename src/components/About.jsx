import { Box, Chip, Divider } from "@mui/material";
import { User } from "lucide-react";
import styles from "../styles/about.module.css";

function About() {
    return (
        <>
            <div className={styles.info}>
                <div className={styles.profile}>
                    <User size={"50%"} />
                </div>
                <div>
                    <Divider
                        variant="middle"
                        sx={{ "&::before, &::after": { borderColor: "var(--text-description)", borderWidth: 4 } }}
                        textAlign="left"
                    >
                        <h2>About</h2>
                    </Divider>
                    <p>
                        <span></span>I am a developer specializing in full stack development with a strong proficiency
                        in C#, React, etc. If you’re looking for a passionate developer who brings both technical skills
                        and a unique perspective to your projects, I’m ready to collaborate and help bring your vision
                        to life. Let's explore how I can contribute to your next exciting project.
                    </p>

                    <div className={styles.skills}>
                        <h2>I am a </h2>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
                            <Chip label="Full-stack Developer"></Chip>
                            <Chip label="Front-end JavaScript Developer"></Chip>
                            <Chip label="Back-end NodeJS Developer"></Chip>
                            <Chip label="Unity Game Developer"></Chip>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;

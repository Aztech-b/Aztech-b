import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";
import styles from "../styles/about.module.css";
import { Divider } from "./Divider";

function About() {
    return (
        <>
            <div className={`${styles.info} content`}>
                <div className={styles.profile}>
                    <User size={"50%"} />
                </div>
                <div>
                    <Divider variant="middle" textAlign="left">
                        <h2>About</h2>
                    </Divider>
                    <p>
                        <span></span>I am a developer specializing in full stack development with a strong proficiency
                        in C#, React, etc. If you’re looking for a passionate developer who brings both technical skills
                        and a unique perspective to your projects, I’m ready to collaborate and help bring your vision
                        to life. Let's explore how I can contribute to your next exciting project.
                    </p>

                    <div className={styles.skills}>
                        <h2 className="mt-4 mb-2">I am a </h2>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Badge variant="secondary">Full-stack Developer</Badge>
                            <Badge variant="secondary">Front-end JavaScript Developer</Badge>
                            <Badge variant="secondary">Back-end NodeJS Developer</Badge>
                            <Badge variant="secondary">Unity Game Developer</Badge>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;

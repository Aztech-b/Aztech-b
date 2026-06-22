import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { GitHub, Telegram } from "./globals";

function Contact() {
    return (
        <>
            <Divider>
                <h2>Contact</h2>
            </Divider>
            <p className="description text-2xl text-center mt-40">
                My email:{" "}
                <a className="block text-5xl defaultText" href="mailto:bakdaulet.azkhan@proton.me">
                    bakdaulet.azkhan@proton.me
                </a>
            </p>
            <p className="tracking-[0.75rem] text-center text-2xl text-gray-400 mb-10 mt-10">OR</p>
            <p className="description text-2xl text-center"> Reach me through social media:</p>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 4, height: 48, mt: 2, mb: 20 }}>
                <a className={`h-full w-auto shrink-0`} href={Telegram.link}>
                    {Telegram.icon}
                </a>
                <a className={`h-full w-auto shrink-0`} href={GitHub.link}>
                    {GitHub.icon}
                </a>
            </Box>
        </>
    );
}

export default Contact;

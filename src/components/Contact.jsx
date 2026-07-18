import { Divider } from "./Divider";
import { GitHub, Telegram } from "./globals";

function Contact() {
    return (
        <div className="content">
            <Divider>
                <h2>Contact</h2>
            </Divider>
            <p className="description text-2xl text-center mt-40">
                My email:{" "}
                <a className="block text-5xl text-[#9ca3af]" href="mailto:bakdaulet.azkhan@proton.me">
                    bakdaulet.azkhan@proton.me
                </a>
            </p>
            <p className="tracking-[0.75rem] text-center text-2xl text-gray-400 mb-10 mt-10">OR</p>
            <p className="description text-2xl text-center"> Reach me through social media:</p>
            <div className="flex justify-center gap-8 h-12 mt-4 mb-40">
                <a className={`h-full w-auto shrink-0`} href={Telegram.link}>
                    {Telegram.icon}
                </a>
                <a className={`h-full w-auto shrink-0`} href={GitHub.link}>
                    {GitHub.icon}
                </a>
            </div>
        </div>
    );
}

export default Contact;

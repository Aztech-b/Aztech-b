// 1. Read all .txt files from the folder raw as plain strings

import Hero from "../components/poems/Hero";

// query: '?raw' tells Vite to return file contents instead of asset URLs
const rawFiles = import.meta.glob("../assets/poems/*.txt", { query: "?raw", import: "default", eager: true });

// 2. Transform the glob object into an array of { filename, content }
const filesData = Object.entries(rawFiles).map(([filepath, content]) => {
    // Extracts just "first.txt" from "../assets/poems/first.txt"
    const filename = filepath.split("/").pop();
    return { filename, content };
});

function MyPoems() {
    return (
        <>
            <div className="relative backgroundContainer">
                <Hero></Hero>
                <h1>Text Files</h1>

                {filesData.map((file) => (
                    <article key={file.filename} className="file-card">
                        <h2>{file.filename}</h2>

                        <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>{file.content}</pre>
                    </article>
                ))}
            </div>
        </>
    );
}

export default MyPoems;

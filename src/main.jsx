import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const theme = createTheme({
    palette: {
        mode: "dark",
        background: { default: "#00040a", paper: "#00040b" },
        primary: { main: "#687ea8" },
        secondary: { main: "#002429" },
        text: { primary: "#fffcfc" },
    },
    typography: { fontSize: 14 },
    cssVariables: true,
    components: { MuiDivider: { styleOverrides: { root: { "&::before, &::after": { borderWidth: 4 } } } } },
    shape: { borderRadius: 8 },
});

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline></CssBaseline>
            <App />
        </ThemeProvider>
    </StrictMode>,
);

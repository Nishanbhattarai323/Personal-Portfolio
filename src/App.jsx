import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Skill from "./components/Skill.jsx";
import Projects from "./components/Projects";
import Education from "./components/Education.jsx";
import { ThemeProvider, useThemeContext } from "./components/ThemeContext.jsx"; // Correct import path
import { CssBaseline, GlobalStyles } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

function App() {
  const { darkMode } = useThemeContext(); // Use context to manage dark mode

  // Create the theme dynamically based on darkMode
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline /> {/* Global styles for consistent background and typography */}
      <GlobalStyles styles={{ body: { cursor: "pointer" } }} /> {/* Global cursor styling */}
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Education />
        <Skill />
        <Projects /> 
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}

// Wrap the entire app with ThemeProvider to manage the theme context
const Root = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default Root;

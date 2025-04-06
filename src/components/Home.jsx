import { useState, useEffect } from "react";
import { ArrowDown, Download } from "lucide-react";
import { Link } from "react-scroll";
import { Box, Container, Typography, Button } from "@mui/material";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

export default function Home() {
  const roles = [
    "React.js Developer",
    "Software Engineer",
    "AI Enthusiast",
    "Full Stack Developer",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [colorIndex, setColorIndex] = useState(0);

  const rainbowColors = [
    "#ff0000",
    "#ff7f00",
    "#ffff00",
    "#00ff00",
    "#0000ff",
    "#4b0082",
    "#9400d3",
  ];

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % rainbowColors.length);
    }, 200);
    return () => clearInterval(colorInterval);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, currentRoleIndex, isDeleting, roles, typingSpeed]);

  return (
    <Box
      component="section"
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: { xs: "80px", md: "0px" },
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 6, md: 4 },
          }}
        >
          {/* Profile Image */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "center",
              mb: { xs: 2, md: 0 },
            }}
          >
            <Box
              sx={{
                width: { xs: 200, sm: 250 },
                height: { xs: 240, sm: 300 },
                overflow: "hidden",
                border: "4px solid",
                borderColor: "primary.main",
                boxShadow: 3,
              }}
            >
              <img
                src="/photo.jpg"
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>

          {/* Content */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              textAlign: { xs: "center", md: "left" },
              pl: { md: 4 },
            }}
          >
            <Typography variant="subtitle1" color="primary" sx={{ mb: 2 }}>
              Hello there, I'm
            </Typography>

            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2.5rem", sm: "3rem", md: "3.75rem" },
              }}
            >
              Nishan Bhattarai
            </Typography>

            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: "1.5rem", sm: "2rem" },
                minHeight: "2.5rem",
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <span
                style={{
                  background: `linear-gradient(to right, ${rainbowColors.join(
                    ", "
                  )})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "rainbow 8s linear infinite",
                  backgroundSize: "400% 100%",
                }}
              >
                {currentText}
                <span
                  style={{
                    opacity: 0.5,
                    color: rainbowColors[colorIndex],
                    animation: "blink 1s step-end infinite",
                  }}
                >
                  |
                </span>
              </span>
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 4,
                maxWidth: "lg",
                mx: { xs: "auto", md: 0 },
              }}
            >
              A student developer on a mission to turn code into compassion,
              building solutions that make a difference.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                variant="contained"
                startIcon={<Download />}
                sx={{
                  gap: 1,
                  px: 4,
                  py: 1.5,
                }}
                href="/cv(nishan).pdf"
                download
              >
                Download Resume 📄
              </Button>

              <Button
                variant="outlined"
                startIcon={<ConnectWithoutContactIcon />}
                sx={{
                  gap: 1,
                  px: 4,
                  py: 1.5,
                }}
              >
                <Link to="contact" smooth={true} duration={500}>
                  Let's Connect
                </Link>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Bouncing Arrow */}
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
        }}
        className="bounce-arrow"
      >
        <Link to="about" smooth={true} duration={800}>
          <ArrowDown
            size={40}
            style={{
              color: rainbowColors[colorIndex],
              transition: "color 0.3s ease-in-out",
            }}
          />
        </Link>
      </Box>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(10px); }
          }

          .bounce-arrow {
            animation: bounce 2s infinite;
          }

          @media (max-width: 960px) {
            .bounce-arrow {
              display: none;
            }
          }

          @keyframes rainbow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </Box>
  );
}

import React from "react";
import { Box, Typography, Button, Container, Divider } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact">
      <Box
        component="footer"
        sx={{
          py: 6,
          mt: "auto",
          borderTop: "1px solid",
          borderColor: "divider",
          textAlign: "center",
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ mb: 4 }}>
            {" "}
            {/* Added gap between upper section */}
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{
                fontWeight: "bold",
                background: "linear-gradient(to right, #00FFFF, #0000FF)", // Gradient cyan to blue
                WebkitBackgroundClip: "text", // Clips the background to the text
                color: "transparent", // Makes the text transparent to show gradient
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2.5rem", // Customize the size for impact
                animation: "glowingText 1.5s infinite alternate", // Glow animation
              }}
            >
         Let's Get Connected
            </Typography>
            <Divider sx={{ width: "50%", mx: "auto", my: 1 }} />
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              A student developer on a mission to turn code into compassion.
            </Typography>
          </Box>

          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}
          >
            <a
              href="mailto:nishantbhattarai123@gmail.com"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <FaEnvelope size={20} /> Email
            </a>
            <a
              href="tel:+9779860204559"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <FaPhone size={20} /> Phone
            </a>
          </Box>

          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}
          >
            <a
              href="https://www.facebook.com/nishantbhattar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/_nishan_bhattarai_66/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://github.com/Nishanbhattarai323"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/nishan-bhattarai-85a099351/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
          </Box>

          <Button
            variant="outlined"
            onClick={handleScrollToTop}
            startIcon={<KeyboardArrowUpIcon />}
            sx={{
              color: "text.primary",
              borderColor: "text.secondary",
              "&:hover": { borderColor: "text.primary" },
            }}
          >
            Back to Top
          </Button>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            © 2025 Nishan Bhattarai. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </section>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { WbSunny, DarkMode, Menu, Close } from "@mui/icons-material";
import { useThemeContext } from "./ThemeContext";

const Navbar = () => {
  const { darkMode, toggleTheme } = useThemeContext();
  const navItems = [
    "Home",
    "About",
    "Education",
    "Projects",
    "Skills",
    "Contact",
  ];
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawer = (
    <Box>
      <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={handleDrawerToggle}>
          <Close sx={{ color: darkMode ? "#fff" : "#000" }} />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component="a"
              href={`#${item.toLowerCase()}`}
              onClick={handleDrawerToggle}
              sx={{
                color: darkMode ? "text.primary" : "text.primary",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <ListItemText primary={item} sx={{ textAlign: "center" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          py: 1.5,
          backdropFilter: scrolled ? "blur(10px)" : "none",
          backgroundColor: scrolled
            ? darkMode
              ? "rgba(0, 0, 0, 0.6)"
              : "rgba(255, 255, 255, 0.6)"
            : "transparent",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {/* Logo/Title */}
            <Typography
              variant="h4"
              component="a"
              href="/"
              sx={{
                fontWeight: 700,
                background:
                  "linear-gradient(90deg, #3B82F6 0%, #EC4899 50%, #F59E0B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textDecoration: "none",
                mr: 4,
                display: "inline-block",
                animation: "gradientShift 8s ease infinite",
                backgroundSize: "200% 200%",
                "@keyframes gradientShift": {
                  "0%": {
                    backgroundPosition: "0% 50%",
                  },
                  "50%": {
                    backgroundPosition: "100% 50%",
                  },
                  "100%": {
                    backgroundPosition: "0% 50%",
                  },
                },
              }}
            >
              Nishan Bhattarai
            </Typography>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 2,
                position: "relative",
                height: "100%",
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                  sx={{
                    color: "text.primary",
                    fontWeight: 500,
                    position: "relative",
                    padding: "8px 12px",
                    minWidth: "auto",
                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {item}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "2px",
                      backgroundColor: "primary.main",
                      transform:
                        hoveredItem === item ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "center",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </Button>
              ))}
            </Box>

            {/* Right Section */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton
                onClick={toggleTheme}
                sx={{
                  color: "text.primary",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {darkMode ? <WbSunny /> : <DarkMode />}
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ display: { md: "none" } }}
              >
                <Menu sx={{ color: "text.primary" }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: "250px",
            backgroundColor: darkMode
              ? "rgba(0, 0, 0, 0.9)"
              : "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;

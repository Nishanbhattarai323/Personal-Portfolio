import { useThemeContext } from "./ThemeContext"; // Using the same Theme Context as Navbar
import { GraduationCap, Book, School } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Box,
} from "@mui/material";

const educationData = [
  {
    id: 1,
    degree: "Schooling",
    institution: "SouthWestern School",
    duration: "Till 2074",
    icon: "school",
  },
  {
    id: 2,
    degree: "High School",
    institution: "Trinity International School",
    duration: "2075 - 2077",
    icon: "school",
  },
  {
    id: 3,
    degree: "BSc. CSIT", // Correct degree name
    institution: "Nagarjuna College Of IT",
    duration: "2077 - Present",
    icon: "graduation",
  },
  {
    id: 4,
    degree: "Online Certifications",
    institution: "Various Platforms",
    duration: "2081 - Present",
    courses: "Front end, Python, AI/ML", // Added courses
    icon: "book",
  },
];

const getIcon = (icon) => {
  switch (icon) {
    case "graduation":
      return <GraduationCap style={{ width: 24, height: 24 }} />;
    case "school":
      return <School style={{ width: 24, height: 24 }} />;
    case "book":
      return <Book style={{ width: 24, height: 24 }} />;
    default:
      return <GraduationCap style={{ width: 24, height: 24 }} />;
  }
};

const Education = () => {
  const { darkMode } = useThemeContext(); // Using the same Theme Context as Navbar

  return (
    <Box
      id="education"
      sx={{
        py: 4,
        color: darkMode ? "white" : "black",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <Box textAlign="center" mb={4}>
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
          Education
        </Typography>
        <Typography
          variant="subtitle1"
          color={darkMode ? "gray.400" : "textSecondary"}
        >
          My academic journey and learning experiences
        </Typography>
      </Box>

      {/* Grid layout for cards */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}
      >
        {educationData.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <Card
              sx={{
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  borderColor: "primary.light",
                },
                p: 2,
                height: "100%", // Ensure all cards are the same height
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                bgcolor: darkMode ? "#121212" : "white",
                border: `1px solid ${darkMode ? "#333" : "#ddd"}`,
                borderRadius: 2,
                boxShadow: darkMode ? 5 : 3,
              }}
            >
              <CardHeader
                sx={{ display: "flex", alignItems: "center", gap: 2 }}
                avatar={
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      bgcolor: darkMode
                        ? "rgba(147, 51, 234, 0.2)"
                        : "rgba(147, 51, 234, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "primary.main",
                    }}
                  >
                    {getIcon(item.icon)}
                  </Box>
                }
                title={
                  <Typography
                    variant="h6"
                    sx={{
                      color: darkMode ? "white" : "black",
                      fontWeight: "bold",
                    }}
                  >
                    {item.degree}
                  </Typography>
                }
                subheader={
                  <Typography
                    sx={{ color: darkMode ? "gray.400" : "gray.600" }}
                  >
                    {item.institution}
                  </Typography>
                }
              />
              <CardContent sx={{ pb: 1, flexGrow: 1 }}>
                {" "}
                {/* Allow content to take up remaining space */}
                <Typography
                  variant="body2"
                  color="textSecondary"
                  gutterBottom
                  sx={{ color: darkMode ? "gray.400" : "gray.600" }}
                >
                  {item.duration}
                </Typography>
                {/* Check for courses and display if available */}
                {item.courses && (
                  <Typography
                    variant="body2"
                    sx={{ color: darkMode ? "gray.300" : "black", mb: 2 }}
                  >
                    <strong>Courses:</strong> {item.courses}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Education;

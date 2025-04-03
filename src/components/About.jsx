import { Code, Heart, Book, Coffee, Laptop, Leaf } from "lucide-react";
import { Card, CardContent, Grid, Typography, Box } from "@mui/material";
import { BiCricketBall } from "react-icons/bi";

export default function About() {
  const interests = [
    { icon: <Code className="text-primary" size={24} />, label: "Coding" },
    { icon: <Book className="text-primary" size={24} />, label: "Reading" },
    { icon: <Coffee className="text-primary" size={24} />, label: "Coffee" },
    { icon: <Laptop className="text-primary" size={24} />, label: "Tech" },
    { icon: <Heart className="text-primary" size={24} />, label: "Health" },
    {
      icon: <BiCricketBall className="text-primary" size={24} />,
      label: "Cricket",
    },
  ];

  return (
    <section id="about">
      <Box sx={{ maxWidth: 1200, margin: "0 auto", padding: "40px" }}>
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
          About Me
        </Typography>

        <style jsx global>{`
          @keyframes glowingText {
            0% {
              text-shadow: 0 0 10px cyan, 0 0 20px cyan, 0 0 30px cyan;
            }
            100% {
              text-shadow: 0 0 20px blue, 0 0 30px blue, 0 0 40px cyan;
            }
          }
        `}</style>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{ color: "text.secondary", marginBottom: 4 }}
        >
          Get to know me better
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {/* About Text */}
          <Grid item xs={12} md={6}>
            <Box sx={{ animation: "fade-in 1s" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: 2 }}
              >
                Who am I?
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                I'm a passionate developer with expertise in modern web
                technologies and AI. Currently pursuing my degree in Computer
                Science, I'm dedicated to creating user-centered applications
                that solve real-world problems.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                My journey in tech began when I built my first website. Since
                then, I've expanded my skills to include React.js, .NET, AI,
                Data Science, and Brain Tumor Detection System, always staying
                at the cutting edge of technology.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Beyond coding, I'm passionate about using technology to make
                positive impacts in healthcare and education, with a focus on
                accessibility and inclusion.
              </Typography>
            </Box>
          </Grid>

          {/* Interests */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Card
                sx={{
                  animation: "fade-in 1s",
                  padding: 2,
                  width: "100%",
                  maxWidth: 500,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", marginBottom: 2 }}
                  >
                    My Interests
                  </Typography>
                  <Grid container spacing={2} justifyContent="center">
                    {interests.map((interest, index) => (
                      <Grid
                        item
                        xs={6} // Use xs for mobile screens
                        sm={4} // Use sm for small screens
                        key={index}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: 2,
                            borderRadius: 2,
                            backgroundColor: "background.paper",
                            boxShadow: 3,
                            transition: "transform 0.3s ease",
                            width: 120,
                            "&:hover": {
                              transform: "scale(1.05)",
                            },
                          }}
                        >
                          <Box sx={{ marginBottom: 1 }}>{interest.icon}</Box>
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: "medium", textAlign: "center" }}
                          >
                            {interest.label}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

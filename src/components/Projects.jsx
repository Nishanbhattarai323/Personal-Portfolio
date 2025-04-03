import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import {
  Box,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  CardActions,
} from "@mui/material";

const ProjectCard = ({ project }) => {
  return (
    <Card sx={{ maxWidth: 345, paddingBottom: 4 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={project.image}
        title={project.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {project.description}
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, p: 2 }}>
        {project.tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            variant="outlined"
            size="small"
            color="primary"
          />
        ))}
      </Box>
      <CardActions sx={{ justifyContent: "space-between", pb: 2 }}>
        <Button
          size="small"
          startIcon={<Github />}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </Button>
        <Button
          size="small"
          startIcon={<ExternalLink />}
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </Button>
      </CardActions>
    </Card>
  );
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      description:
        "A responsive portfolio website built with React and Tailwind CSS to showcase projects and skills.",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      github: "#",
      demo: "#",
      category: "react",
    },
    {
      id: 2,
      title: "AI Image Generator",
      description:
        "An AI-powered application that generates unique images from text descriptions using machine learning.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500",
      tags: ["Python", "TensorFlow", "React"],
      github: "#",
      demo: "#",
      category: "ai",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="projects">
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            background: "linear-gradient(to right,rgb(18, 174, 174), #0000FF)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2.5rem",
            animation: "glowingText 1.5s infinite alternate",
          }}
        >
          My Projects
        </Typography>
        <Typography variant="subtitle1" sx={{ textAlign: "center", mb: 4 }}>
          Check out some of my recent work
        </Typography>

        <Tabs
          value={activeTab}
          onChange={(e, newValue) => setActiveTab(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            mb: 4,
            display: "flex",
            justifyContent: "center",
            width: "100%",
            "& .MuiTabs-flexContainer": {
              justifyContent: "center", // Center tabs inside the container
            },
          }}
        >
          <Tab label="All" value="all" />
          <Tab label="React.js" value="react" />
          <Tab label="AI" value="ai" />
          <Tab label="Full Stack" value="fullstack" />
        </Tabs>

        <Grid container spacing={4} justifyContent="center">
          {filteredProjects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

import { Card, CardContent, CardHeader, Typography, Container, Grid } from "@mui/material";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiRedux, SiNextdotjs, SiDotnet, SiExpress, SiMongodb, SiFirebase, SiTensorflow } from "react-icons/si";
import { MdOutlineScience } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import { GiArtificialIntelligence } from "react-icons/gi";

const iconMap = {
  "React.js": <FaReact />, 
  "TypeScript": <SiTypescript />, 
  "HTML/CSS": <FaHtml5 />, 
  "Tailwind CSS": <SiTailwindcss />, 
  "Next.js": <SiNextdotjs />, 
  "Node.js": <FaNodeJs />, 
  ".NET": <SiDotnet />, 
  "Express": <SiExpress />, 
  "MongoDB": <SiMongodb />, 
  "SQL": <FaDatabase />,  
  "Python": <FaPython />, 
  "TensorFlow": <SiTensorflow />, 
  "NLP": <BiBrain />, 
  "Data Science": <MdOutlineScience />, 
  "Machine Learning": <GiArtificialIntelligence />
};

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "HTML/CSS" },
      { name: "Tailwind CSS" },
      { name: "Next.js" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js" },
      { name: ".NET" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "SQL" },
    ],
  },
  {
    category: "AI/ML",
    skills: [
      { name: "Python" },
      { name: "TensorFlow" },
      { name: "NLP" },
      { name: "Data Science" },
      { name: "Machine Learning" },
    ],
  },
];

export default function Skills() {
  return (
    <Container id="skills" sx={{ py: 6 }}>
            <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #00FFFF, #0000FF)', // Gradient cyan to blue
          WebkitBackgroundClip: 'text', // Clips the background to the text
          color: 'transparent', // Makes the text transparent to show gradient
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2.5rem', // Customize the size for impact
          animation: 'glowingText 1.5s infinite alternate', // Glow animation
        }}
      >
        Skill
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom sx={{ marginBottom: "3rem" }}>
        Technologies I've been working with
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {skillsData.map((category) => (
          <Grid item xs={12} sm={6} md={8} key={category.category}>
            <Card sx={{ height: "100%" }}>
              <CardHeader title={category.category} sx={{ textAlign: "center" }} />
              <CardContent>
                {category.skills.map((skill) => (
                  <div key={skill.name} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                    {iconMap[skill.name]}
                    <Typography variant="body1">{skill.name}</Typography>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
import { useState } from "react";
import { Container, Grid, Card, CardContent, CardHeader, Typography, TextField, Button, CircularProgress, Box } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import { useSnackbar } from "notistack";

export default function Contact() {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      enqueueSnackbar("Message sent! Thanks for reaching out.", { variant: "success" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      enqueueSnackbar("Something went wrong. Please try again later.", { variant: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Email color="primary" />, title: "Email", value: "nishantbhattarai123@gmail.com" },
    { icon: <Phone color="primary" />, title: "Phone", value: "+977 9860204559" },
    { icon: <LocationOn color="primary" />, title: "Location", value: "Kathmandu, Nepal" },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom align="center" fontWeight="bold">Contact Me</Typography>
      <Typography variant="subtitle1" paragraph align="center" color="textSecondary">Let's get in touch</Typography>

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom fontWeight="bold">Get In Touch</Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            Whether you have a question, want to start a project, or just want to connect, feel free to reach out.
          </Typography>
          {contactInfo.map((item, index) => (
            <Box key={index} display="flex" alignItems="center" mb={2}>
              {item.icon}
              <Box ml={2}>
                <Typography variant="subtitle1" fontWeight="bold">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">{item.value}</Typography>
              </Box>
            </Box>
          ))}
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ borderRadius: 2 }}>
            <CardHeader title={<Typography variant="h6" fontWeight="bold">Send Message</Typography>} subheader={<Typography color="textSecondary">Fill out the form below to send me a message</Typography>} />
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField fullWidth margin="normal" label="Your Name" name="name" value={formData.name} onChange={handleChange} required />
                <TextField fullWidth margin="normal" label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} required />
                <TextField fullWidth margin="normal" label="Subject" name="subject" value={formData.subject} onChange={handleChange} required />
                <TextField fullWidth margin="normal" label="Your Message" name="message" value={formData.message} onChange={handleChange} required multiline rows={4} />
                <Button type="submit" variant="contained" fullWidth disabled={isSubmitting} sx={{ mt: 2, backgroundColor: "#7B1FA2", color: "white", borderRadius: 2, '&:hover': { backgroundColor: "#6A1B9A" } }}>
                  {isSubmitting ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
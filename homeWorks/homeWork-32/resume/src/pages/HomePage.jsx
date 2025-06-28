import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
} from '@mui/material';

const HomePage = () => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>
      Про мене
    </Typography>
    <Typography variant="body1" paragraph>
      Я Frontend розробник з досвідом у React, Node.js та Express. Маю навички
      створення UI інтерфейсів, REST API та інтеграцій.
    </Typography>

    <Typography variant="h5" gutterBottom>
      Навички
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Frontend</Typography>
            <List>
              <ListItem>React, Next.js</ListItem>
              <ListItem>Material UI, Tailwind CSS</ListItem>
              <ListItem>Redux, Zustand</ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Backend</Typography>
            <List>
              <ListItem>Node.js, Express</ListItem>
              <ListItem>REST API, JWT Auth</ListItem>
              <ListItem>MongoDB, PostgreSQL</ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

    <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
      Досвід
    </Typography>
    <Typography variant="body1">
      - Frontend Developer @ TechCompany (2022 - теперішній час)
      <br />- Junior Web Developer @ Freelance (2020 - 2022)
    </Typography>
  </Container>
);
export default HomePage;

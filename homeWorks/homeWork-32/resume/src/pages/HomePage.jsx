import {
  Box,
  Typography,
  Chip,
  Stack,
  Divider,
  List,
  ListItem,
} from '@mui/material';

export default function HomePage() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h3" sx={{ marginBottom: '24px' }} fontWeight="bold">
        Frontend Developer
      </Typography>

      <Typography variant="h5" sx={{ marginBottom: '24px' }}>
        Tech Stack
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
        mb={3}
        useFlexGap
        sx={{
          rowGap: 1,
          columnGap: 1,
          justifyContent: { xs: 'center', sm: 'flex-start' },
        }}
      >
        <Chip label="React/Next.js" color="primary" />
        <Chip label="JavaScript (ES6+)" color="primary" />
        <Chip label="HTML5" color="secondary" />
        <Chip label="CSS3/SCSS" color="secondary" />
        <Chip label="Node.js/Express (basic)" />
        <Chip label="Git / GitHub" />
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h5" sx={{ marginBottom: '24px' }}>
        Frontend Experience
      </Typography>
      <Typography>
        I have practical experience in UI development in real projects using
        React and modern approaches to architecture:
      </Typography>
      <List>
        <ListItem>
          <span>
            Building SPA applications using{' '}
            <strong>React, React Router, Context API</strong>
          </span>
        </ListItem>
        <ListItem>
          <span>
            Work with REST API, processing asynchronous requests via{' '}
            <strong>Axios</strong>
          </span>
        </ListItem>
        <ListItem>
          <span>
            Semantic and responsive layout{' '}
            <strong>HTML5/CSS3/SCSS, Flexbox, Grid</strong>
          </span>
        </ListItem>
        <ListItem>
          <span>
            Working with the state through{' '}
            <strong>Redux Toolkit, Redux Thunk, Redux Saga</strong>
          </span>
        </ListItem>
        <ListItem>
          <span>
            Component approach, modular styles,{' '}
            <strong>Bootstrap, Material UI, Tailwind CSS</strong>
          </span>
        </ListItem>
        <ListItem>
          <span>
            Form validation using <strong>Formik</strong>
          </span>
        </ListItem>
        <ListItem>
          <span>
            Setting up projects with <strong>Vite, Webpack</strong>
          </span>
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h5" sx={{ marginBottom: '24px' }}>
        Testing Experience
      </Typography>
      <Typography>
        Have experience in <strong>manual testing</strong> and{' '}
        <strong>automation testing</strong> with:
      </Typography>
      <List>
        <ListItem>
          <strong>Cypress</strong> — for E2E testing
        </ListItem>
        <ListItem>
          <strong>Playwright</strong> — for cross-browser testing
        </ListItem>
        <ListItem>
          <strong>Jest</strong> — for unit and integration testing
        </ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h5" sx={{ marginBottom: '24px' }}>
        Work experience
      </Typography>

      <Box>
        <h3>ManualQA Engineer</h3>
        <span>
          <strong>June,2022-October,2024</strong>
        </span>
        <br />
        Managed the entire testing process in the company through acceptance
        testing. Responsible for the development and writing of E2E test
        scripts. Was engaged in task management and creation of bug reports.
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box>
        <h3>Frontend Developer</h3>
        <span>
          <strong>September,2020-April,2022</strong>
        </span>
        <br />
        Developed frontend components for an agricultural platform using React
        and Angular, collaborating with a cross-functional team.
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h5" sx={{ marginBottom: '24px' }}>
        About Me
      </Typography>
      <Typography>
        Participated in the development of a web platform for the agricultural
        industry using React and Angular as a Frontend Developer. Performed QA
        Manual duties, with subsequent transition to automated testing (QA
        Automation).
      </Typography>
    </Box>
  );
}

import { Box, Typography, Link, IconButton, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

function Footer() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        background:
          theme.palette.mode === 'light'
            ? theme.palette.primary.main
            : 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09)), #1e1e1e',
        p: 3,
        mt: 4,
        textAlign: 'center',
        color: 'white',
      }}
    >
      <Typography variant="body1" sx={{ mb: 1 }}>
        Contact me:
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>
        Email:
        <Link href="mailto:aleks.moskalenko.work@gmail.com" color="inherit">
          aleks.moskalenko.work@gmail.com
        </Link>
      </Typography>

      <Stack direction="row" justifyContent="center" spacing={2}>
        <IconButton
          component="a"
          href="https://github.com/AleksMoskalenkoWork"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <GitHubIcon />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.linkedin.com/in/oleksandr--moskalenko"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          component="a"
          href="https://t.me/aleks_moskalenko"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <TelegramIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default Footer;

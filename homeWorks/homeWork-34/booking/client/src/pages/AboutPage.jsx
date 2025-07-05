import { Box, Typography } from '@mui/material';

function AboutPage() {
  return (
    <Box sx={{ margin: '8px' }}>
      <Typography component="h2" sx={{ marginBottom: '12px' }}>
        <strong>About Us</strong>
      </Typography>
      <Typography component="p" sx={{ marginBottom: '12px' }}>
        About Us Welcome to Booking, your trusted partner in travel and
        accommodation. At Booking, we believe that finding the perfect place to
        stay should be simple, reliable, and inspiring. Whether you're planning
        a relaxing vacation, a spontaneous weekend trip, or a business journey,
        we are here to help you book with confidence.
      </Typography>
      <Typography component="p" sx={{ marginBottom: '12px' }}>
        🌍 What We Do We connect travelers with a wide range of accommodations —
        from boutique hotels and luxury resorts to cozy apartments and
        budget-friendly hostels. Our platform offers: Easy-to-use search and
        filters Real-time availability and instant booking Verified reviews and
        ratings Secure payments and 24/7 support
      </Typography>
      <Typography component="p" sx={{ marginBottom: '12px' }}>
        🤝 Our Mission To make travel planning seamless and stress-free by
        delivering a personalized, intuitive, and trustworthy booking experience
        for every user.
      </Typography>
      <Typography component="p" sx={{ marginBottom: '12px' }}>
        🚀 Looking Ahead We are constantly evolving. From integrating smart
        recommendations to offering eco-conscious stays, we're working to shape
        the future of travel — making it smarter, more sustainable, and more
        human.
      </Typography>
    </Box>
  );
}

export default AboutPage;

import { Box, Card, CardContent, Rating, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function PopularHotels() {
  const dispatch = useDispatch();
  const { hotels } = useSelector((state) => state.booking);

  useEffect(() => {
    if (hotels.length === 0) {
      dispatch({ type: 'booking/fetchHotelsSaga' });
    }
  }, [dispatch, hotels.length]);

  const popularHotels = hotels.filter((x) => x.hotel_rating === 4);

  return (
    <>
      <Typography variant="h5">Popular</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          overflowX: 'auto',
          gap: 2,
          width: '100%',
          paddingBottom: '24px',
          paddingTop: '12px',
        }}
      >
        {popularHotels &&
          popularHotels.slice(0, 5).map((x) => (
            <Card
              key={x.id}
              sx={{
                width: { xs: '100%', md: '200px' },
              }}
            >
              <Box
                sx={{
                  width: '200px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Box
                  sx={{
                    height: '75px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '12px',
                  }}
                >
                  <Typography gutterBottom variant="p" component="div">
                    {x.city},{x.country_code}
                  </Typography>
                </Box>
                <CardContent sx={{ width: '100%' }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {x.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {x.address}
                  </Typography>
                  <Rating name="read-only" value={x.hotel_rating} readOnly />
                </CardContent>
              </Box>
            </Card>
          ))}
      </Box>
    </>
  );
}

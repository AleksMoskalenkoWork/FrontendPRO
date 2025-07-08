import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function HotelsPage() {
  const dispatch = useDispatch();
  const { hotels } = useSelector((state) => state.booking);

  useEffect(() => {
    if (hotels.length === 0) {
      dispatch({ type: 'booking/fetchHotelsSaga' });
    }
  }, [dispatch, hotels.length]);

  return (
    <>
      <Typography
        variant="h5"
        sx={{
          paddingTop: '12px',
        }}
      >
        Hotels
      </Typography>
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
        {hotels &&
          hotels.map((x) => (
            <Card
              key={x.id}
              sx={{
                width: { xs: '100%', md: '200px' },
              }}
            >
              <CardActionArea
                sx={{
                  width: '200px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <CardMedia
                  component="img"
                  height="100"
                  image=""
                  alt="HotelImg"
                />
                <CardContent sx={{ width: '100%' }}>
                  <Typography gutterBottom variant="p" component="div">
                    {x.city},{x.country_code}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {x.name}
                  </Typography>
                  <Rating name="read-only" value={x.hotel_rating} readOnly />
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
      </Box>
    </>
  );
}

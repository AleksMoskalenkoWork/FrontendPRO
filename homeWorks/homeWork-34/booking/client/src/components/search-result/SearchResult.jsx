import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';

export default function SearchResult() {
  const { search } = useSelector((state) => state.booking);

  return (
    <>
      <Typography variant="h5">Search result</Typography>
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
        {search && search.length > 0 ? (
          search.map((x) => (
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
          ))
        ) : (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '200px',
            }}
          >
            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
              Hotels not found
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
}

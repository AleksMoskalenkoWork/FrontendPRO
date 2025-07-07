import {
  Box,
  Button,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function FormGroupCmp() {
  const dispatch = useDispatch();
  const { destination, hotels } = useSelector((state) => state.booking);

  useEffect(() => {
    if (destination.length === 0) {
      dispatch({ type: 'booking/fetchDestinationSaga' });
    }
    if (hotels.length === 0) {
      dispatch({ type: 'booking/fetchHotelsSaga' });
    }
  }, [dispatch, destination.length, hotels.length]);

  const bookingForm = useFormik({
    initialValues: {
      destination: '',
      dateFrom: null,
      dateTo: null,
    },
    onSubmit: (values) => {
      console.log('values', values);
      bookingForm.resetForm();
    },
    validate: (values) => {
      const errors = {};

      if (!values.destination) {
        errors.destination = 'Please select a destination';
      }

      return errors;
    },
    enableReinitialize: true,
  });

  return (
    <>
      <FormGroup>
        <Box
          component="form"
          onSubmit={bookingForm.handleSubmit}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 3,
            paddingTop: '8px',
            paddingBottom: '24px',
            marginTop: '12px',
          }}
        >
          <FormControl
            error={
              bookingForm.touched.destination &&
              Boolean(bookingForm.errors.destination)
            }
            sx={{
              width: { xs: '100%', sm: '246px' },
            }}
          >
            <InputLabel id="destinationId">Destination</InputLabel>
            <Select
              labelId="destinationId"
              id="destination"
              name="destination"
              value={bookingForm.values.destination}
              label="Destination"
              onChange={bookingForm.handleChange}
              onBlur={bookingForm.handleBlur}
            >
              {destination &&
                destination.map((x) => (
                  <MenuItem key={x.id} value={x.label}>
                    {x.label}
                  </MenuItem>
                ))}
            </Select>
            {bookingForm.touched.destination &&
              bookingForm.errors.destination && (
                <Typography
                  variant="caption"
                  color="error"
                  sx={{
                    fontSize: '10px',
                    position: 'absolute',
                    bottom: '-20px',
                  }}
                >
                  {bookingForm.errors.destination}
                </Typography>
              )}
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormControl sx={{ width: { xs: '100%', sm: 'auto' } }}>
              <DatePicker
                label="From"
                value={bookingForm.values.dateFrom}
                onChange={(dateFrom) => {
                  bookingForm.setFieldValue('dateFrom', dateFrom);
                }}
              />
            </FormControl>
            <FormControl sx={{ width: { xs: '100%', sm: 'auto' } }}>
              <DatePicker
                label="To"
                value={bookingForm.values.dateTo}
                onChange={(dateTo) => {
                  bookingForm.setFieldValue('dateTo', dateTo);
                }}
              />
            </FormControl>
          </LocalizationProvider>

          <Button
            type="submit"
            sx={{ height: '56px', width: { xs: '100%', sm: 'auto' } }}
          >
            Search
          </Button>
        </Box>
      </FormGroup>
    </>
  );
}

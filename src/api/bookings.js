import { async } from "@firebase/util";

// save or post  a booking in my database
export const saveBooking = async (bookingData) => {
  const url = "http://localhost:5000/bookings";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });
  const data = await response.json();
  return data;
};

// get All Bookings for user
export const getAllBookingsByEmail = async (email) => {
  // const url = "http://localhost:5000/bookings";
  const response = await fetch(`http://localhost:5000/bookings?email=${email}`);
  const data = await response.json();
  return data;
};

// Get All Bookings For Admin
export const getAllBookings = async (email) => {
  const url = "http://localhost:5000/bookings";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// Cancel A Booking

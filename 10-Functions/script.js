"use strict";

///////////////////////////////////////
// Default Parameters

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   ES5
  //   numPassengers ||= 1;
  //   price ||= 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);
createBooking("LH123", undefined, 1000);
*/

///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference

const flight = "LH234";
const sachin = {
  name: "Sachin Wanniarchchi",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 24739479284) alert("Checked in");
  else alert("Wrong passport!");
};

// checkIn(flight, sachin);
// console.log(flight);
// console.log(sachin);

// Is the same as doing...
// const flightNum = flight;
// const passenger = sachin;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(sachin);
checkIn(flight, sachin);

const trains = [
  /* ===================== MUMBAI ↔ PUNE ===================== */
  { id: 301, name: "Sinhagad Express", type: "Intercity", from_city: "Mumbai", to_city: "Pune", departure: "06:10 AM", duration: "3h 30m", pricePerNight: 510 },
  { id: 302, name: "Deccan Queen", type: "Express", from_city: "Mumbai", to_city: "Pune", departure: "07:15 AM", duration: "3h 25m", pricePerNight: 520 },
  { id: 303, name: "Indrayani Express", type: "Express", from_city: "Mumbai", to_city: "Pune", departure: "05:40 PM", duration: "3h 35m", pricePerNight: 505 },

  /* ===================== MUMBAI ↔ NAGPUR ===================== */
  { id: 304, name: "Vidarbha Express", type: "Superfast", from_city: "Mumbai", to_city: "Nagpur", departure: "07:40 PM", duration: "12h", pricePerNight: 980 },

  /* ===================== PUNE ↔ NASHIK ===================== */
  { id: 305, name: "Pune Nashik Passenger", type: "Passenger", from_city: "Pune", to_city: "Nashik", departure: "06:00 AM", duration: "7h", pricePerNight: 260 },

  /* ===================== MUMBAI ↔ NASHIK ===================== */
  { id: 306, name: "Rajya Rani Express", type: "Express", from_city: "Mumbai", to_city: "Nashik", departure: "04:35 PM", duration: "4h 30m", pricePerNight: 420 },

  /* ===================== PUNE ↔ AURANGABAD ===================== */
  { id: 307, name: "Godavari Express", type: "Express", from_city: "Pune", to_city: "Aurangabad", departure: "11:15 PM", duration: "7h", pricePerNight: 540 },

  /* ===================== MUMBAI ↔ KOLHAPUR ===================== */
  { id: 308, name: "Mahalaxmi Express", type: "Express", from_city: "Mumbai", to_city: "Kolhapur", departure: "11:20 PM", duration: "10h", pricePerNight: 780 },

  /* ===================== PUNE ↔ SOLAPUR ===================== */
  { id: 309, name: "Udyan Express", type: "Express", from_city: "Pune", to_city: "Solapur", departure: "06:40 AM", duration: "5h 50m", pricePerNight: 490 },

  /* ===================== SATARA ↔ MUMBAI ===================== */
  { id: 310, name: "Sahyadri Express", type: "Express", from_city: "Satara", to_city: "Mumbai", departure: "08:00 PM", duration: "6h", pricePerNight: 560 },

  /* ===================== NAGPUR ↔ AMRAVATI ===================== */
  { id: 311, name: "Vidarbha Passenger", type: "Passenger", from_city: "Nagpur", to_city: "Amravati", departure: "09:00 AM", duration: "3h", pricePerNight: 180 },

  /* ===================== LATUR ↔ SOLAPUR ===================== */
  { id: 312, name: "Solapur Passenger", type: "Passenger", from_city: "Latur", to_city: "Solapur", departure: "07:00 AM", duration: "4h", pricePerNight: 210 },

  /* ===================== AHMEDNAGAR ↔ PUNE ===================== */
  { id: 313, name: "Ahmednagar Passenger", type: "Passenger", from_city: "Ahmednagar", to_city: "Pune", departure: "05:45 AM", duration: "5h", pricePerNight: 240 },

  /* ===================== RATNAGIRI ↔ MUMBAI ===================== */
  { id: 314, name: "Konkan Kanya Express", type: "Express", from_city: "Ratnagiri", to_city: "Mumbai", departure: "08:30 PM", duration: "8h", pricePerNight: 650 },

  /* ===================== MAHABALESHWAR (SATARA) ↔ PUNE ===================== */
  { id: 315, name: "Sahyadri Passenger", type: "Passenger", from_city: "Satara", to_city: "Pune", departure: "06:30 AM", duration: "4h", pricePerNight: 230 },

  /* ===================== PANDHARPUR ↔ SOLAPUR ===================== */
  { id: 316, name: "Pandharpur Passenger", type: "Passenger", from_city: "Pandharpur", to_city: "Solapur", departure: "05:30 AM", duration: "2h", pricePerNight: 120 },
   /* ===================== JALGAON ↔ DHULE ===================== */
{ id: 317, name: "Dhule Passenger", type: "Passenger", from_city: "Jalgaon", to_city: "Dhule", departure: "07:00 AM", duration: "2h", pricePerNight: 140 },

/* ===================== JALGAON ↔ NASHIK ===================== */
{ id: 318, name: "Tapti Express", type: "Express", from_city: "Jalgaon", to_city: "Nashik", departure: "10:15 PM", duration: "6h", pricePerNight: 460 },

/* ===================== NANDED ↔ AURANGABAD ===================== */
{ id: 319, name: "Marathwada Express", type: "Express", from_city: "Nanded", to_city: "Aurangabad", departure: "09:30 PM", duration: "7h", pricePerNight: 520 },

/* ===================== LATUR ↔ SOLAPUR ===================== */
{ id: 320, name: "Latur Solapur Passenger", type: "Passenger", from_city: "Latur", to_city: "Solapur", departure: "06:15 AM", duration: "4h", pricePerNight: 220 },

/* ===================== KOLHAPUR ↔ RATNAGIRI ===================== */
{ id: 321, name: "Konkan Passenger", type: "Passenger", from_city: "Kolhapur", to_city: "Ratnagiri", departure: "05:45 AM", duration: "7h", pricePerNight: 380 },

/* ===================== LONAVALA ↔ MUMBAI ===================== */
{ id: 322, name: "Intercity Express", type: "Intercity", from_city: "Lonavala", to_city: "Mumbai", departure: "08:30 AM", duration: "3h", pricePerNight: 210 },

/* ===================== LONAVALA ↔ PUNE ===================== */
{ id: 323, name: "Local Passenger", type: "Passenger", from_city: "Lonavala", to_city: "Pune", departure: "09:00 AM", duration: "2h", pricePerNight: 120 },

/* ===================== RAIGAD ↔ PUNE ===================== */
{ id: 324, name: "Raigad Passenger", type: "Passenger", from_city: "Raigad", to_city: "Pune", departure: "06:00 AM", duration: "4h", pricePerNight: 240 },

/* ===================== MAHABALESHWAR ↔ MUMBAI (via SATARA) ===================== */
{ id: 325, name: "Sahyadri Express", type: "Express", from_city: "Satara", to_city: "Mumbai", departure: "10:30 PM", duration: "7h", pricePerNight: 560 },

/* ===================== PANDHARPUR ↔ SOLAPUR ===================== */
{ id: 326, name: "Pandharpur Passenger", type: "Passenger", from_city: "Pandharpur", to_city: "Solapur", departure: "05:30 AM", duration: "2h", pricePerNight: 120 },

/* ===================== SATARA ↔ KOLHAPUR ===================== */
{ id: 327, name: "Kolhapur Passenger", type: "Passenger", from_city: "Satara", to_city: "Kolhapur", departure: "11:00 AM", duration: "3h", pricePerNight: 180 },

/* ===================== AMRAVATI ↔ NAGPUR ===================== */
{ id: 328, name: "Vidarbha Express", type: "Express", from_city: "Amravati", to_city: "Nagpur", departure: "04:45 PM", duration: "3h", pricePerNight: 260 },
/* ===================== MUMBAI ↔ PUNE ===================== */
{ id: 329, name: "Deccan Queen", type: "Intercity", from_city: "Mumbai", to_city: "Pune", departure: "07:15 AM", duration: "3h 30m", pricePerNight: 520 },

/* ===================== NAGPUR ↔ MUMBAI ===================== */
{ id: 330, name: "Vidarbha Express", type: "Express", from_city: "Nagpur", to_city: "Mumbai", departure: "08:00 PM", duration: "14h", pricePerNight: 780 },

/* ===================== NASHIK ↔ PUNE ===================== */
{ id: 331, name: "Godavari Express", type: "Express", from_city: "Nashik", to_city: "Pune", departure: "06:30 AM", duration: "6h", pricePerNight: 460 },

/* ===================== PUNE ↔ AURANGABAD ===================== */
{ id: 332, name: "Ajanta Express", type: "Express", from_city: "Pune", to_city: "Aurangabad", departure: "09:45 PM", duration: "7h", pricePerNight: 560 },

/* ===================== MUMBAI ↔ KOLHAPUR ===================== */
{ id: 333, name: "Sahyadri Express", type: "Express", from_city: "Mumbai", to_city: "Kolhapur", departure: "11:00 PM", duration: "10h", pricePerNight: 640 },

/* ===================== PUNE ↔ SOLAPUR ===================== */
{ id: 334, name: "Solapur Express", type: "Express", from_city: "Pune", to_city: "Solapur", departure: "06:40 AM", duration: "5h 30m", pricePerNight: 480 },

/* ===================== MUMBAI ↔ SATARA ===================== */
{ id: 335, name: "Koyna Express", type: "Express", from_city: "Mumbai", to_city: "Satara", departure: "08:20 AM", duration: "6h", pricePerNight: 520 },

/* ===================== PUNE ↔ AHMEDNAGAR ===================== */
{ id: 336, name: "Ahmednagar Passenger", type: "Passenger", from_city: "Pune", to_city: "Ahmednagar", departure: "07:00 AM", duration: "4h", pricePerNight: 260 },

/* ===================== AMRAVATI ↔ AKOLA ===================== */
{ id: 337, name: "Vidarbha Passenger", type: "Passenger", from_city: "Amravati", to_city: "Akola", departure: "10:30 AM", duration: "2h", pricePerNight: 140 },

/* ===================== AURANGABAD ↔ BEED ===================== */
{ id: 338, name: "Beed Passenger", type: "Passenger", from_city: "Aurangabad", to_city: "Beed", departure: "06:15 AM", duration: "4h", pricePerNight: 220 },

/* ===================== JALGAON ↔ BULDHANA ===================== */
{ id: 339, name: "Khandesh Express", type: "Express", from_city: "Jalgaon", to_city: "Buldhana", departure: "09:00 PM", duration: "4h", pricePerNight: 360 },

/* ===================== NASHIK ↔ DHULE ===================== */
{ id: 340, name: "Dhule Passenger", type: "Passenger", from_city: "Nashik", to_city: "Dhule", departure: "05:45 AM", duration: "4h", pricePerNight: 240 },

/* ===================== SOLAPUR ↔ LATUR ===================== */
{ id: 341, name: "Latur Passenger", type: "Passenger", from_city: "Solapur", to_city: "Latur", departure: "06:00 AM", duration: "4h", pricePerNight: 240 },

/* ===================== RATNAGIRI ↔ KOLHAPUR ===================== */
{ id: 342, name: "Konkan Express", type: "Express", from_city: "Ratnagiri", to_city: "Kolhapur", departure: "07:30 PM", duration: "7h", pricePerNight: 420 },

/* ===================== PUNE ↔ MAHABALESHWAR (via SATARA) ===================== */
{ id: 343, name: "Mahabaleshwar Passenger", type: "Passenger", from_city: "Pune", to_city: "Satara", departure: "05:50 AM", duration: "5h", pricePerNight: 280 },

];

export default trains;

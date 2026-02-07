const cabs = [
  /* ===================== PUNE ↔ MUMBAI ===================== */
  { id: 201, name: "Swift Dzire", category: "Sedan", from_city: "Pune", to_city: "Mumbai", duration: "4h 30m", pricePerNight: 3200 },
  { id: 202, name: "Ertiga", category: "SUV", from_city: "Pune", to_city: "Mumbai", duration: "4h 30m", pricePerNight: 4200 },
  { id: 203, name: "Innova Crysta", category: "Luxury SUV", from_city: "Pune", to_city: "Mumbai", duration: "4h 30m", pricePerNight: 5500 },

  /* ===================== MUMBAI ↔ NAGPUR ===================== */
  { id: 204, name: "Innova Crysta", category: "Luxury SUV", from_city: "Mumbai", to_city: "Nagpur", duration: "14h", pricePerNight: 14000 },
  { id: 205, name: "Eeco", category: "Mini Van", from_city: "Mumbai", to_city: "Nagpur", duration: "14h", pricePerNight: 11000 },

  /* ===================== PUNE ↔ NASHIK ===================== */
  { id: 206, name: "Swift Dzire", category: "Sedan", from_city: "Pune", to_city: "Nashik", duration: "6h", pricePerNight: 3800 },
  { id: 207, name: "Ertiga", category: "SUV", from_city: "Pune", to_city: "Nashik", duration: "6h", pricePerNight: 4700 },

  /* ===================== NASHIK ↔ MUMBAI ===================== */
  { id: 208, name: "Eeco", category: "Mini Van", from_city: "Nashik", to_city: "Mumbai", duration: "5h", pricePerNight: 3000 },

  /* ===================== AURANGABAD ↔ PUNE ===================== */
  { id: 209, name: "Innova Crysta", category: "Luxury SUV", from_city: "Aurangabad", to_city: "Pune", duration: "7h", pricePerNight: 6500 },

  /* ===================== KOLHAPUR ↔ MUMBAI ===================== */
  { id: 210, name: "Ertiga", category: "SUV", from_city: "Kolhapur", to_city: "Mumbai", duration: "10h", pricePerNight: 8200 },

  /* ===================== SOLAPUR ↔ PUNE ===================== */
  { id: 211, name: "Swift Dzire", category: "Sedan", from_city: "Solapur", to_city: "Pune", duration: "5h", pricePerNight: 3500 },

  /* ===================== SATARA ↔ MUMBAI ===================== */
  { id: 212, name: "Innova Crysta", category: "Luxury SUV", from_city: "Satara", to_city: "Mumbai", duration: "6h", pricePerNight: 5200 },

  /* ===================== AHMEDNAGAR ↔ PUNE ===================== */
  { id: 213, name: "Ertiga", category: "SUV", from_city: "Ahmednagar", to_city: "Pune", duration: "5h", pricePerNight: 4200 },

  /* ===================== AKOLA ↔ AMRAVATI ===================== */
  { id: 214, name: "Swift Dzire", category: "Sedan", from_city: "Akola", to_city: "Amravati", duration: "2h", pricePerNight: 1800 },

  /* ===================== BEED ↔ AURANGABAD ===================== */
  { id: 215, name: "Eeco", category: "Mini Van", from_city: "Beed", to_city: "Aurangabad", duration: "4h", pricePerNight: 2800 },

  /* ===================== DHULE ↔ NASHIK ===================== */
  { id: 216, name: "Swift Dzire", category: "Sedan", from_city: "Dhule", to_city: "Nashik", duration: "4h", pricePerNight: 3000 },

  /* ===================== LATUR ↔ NANDED ===================== */
  { id: 217, name: "Ertiga", category: "SUV", from_city: "Latur", to_city: "Nanded", duration: "4h", pricePerNight: 3500 },

  /* ===================== RATNAGIRI ↔ MUMBAI ===================== */
  { id: 218, name: "Innova Crysta", category: "Luxury SUV", from_city: "Ratnagiri", to_city: "Mumbai", duration: "8h", pricePerNight: 9000 },

  /* ===================== MAHABALESHWAR ↔ PUNE ===================== */
  { id: 219, name: "Ertiga", category: "SUV", from_city: "Mahabaleshwar", to_city: "Pune", duration: "5h", pricePerNight: 4800 },

  /* ===================== PANDHARPUR ↔ PUNE ===================== */
  { id: 220, name: "Swift Dzire", category: "Sedan", from_city: "Pandharpur", to_city: "Pune", duration: "6h", pricePerNight: 4200 },
  /* ===================== JALGAON ↔ DHULE ===================== */
{ id: 221, name: "Swift Dzire", category: "Sedan", from_city: "Jalgaon", to_city: "Dhule", duration: "2h", pricePerNight: 1800 },

/* ===================== JALGAON ↔ NASHIK ===================== */
{ id: 222, name: "Ertiga", category: "SUV", from_city: "Jalgaon", to_city: "Nashik", duration: "6h", pricePerNight: 5200 },

/* ===================== NANDED ↔ AURANGABAD ===================== */
{ id: 223, name: "Innova Crysta", category: "Luxury SUV", from_city: "Nanded", to_city: "Aurangabad", duration: "7h", pricePerNight: 7200 },

/* ===================== LATUR ↔ SOLAPUR ===================== */
{ id: 224, name: "Swift Dzire", category: "Sedan", from_city: "Latur", to_city: "Solapur", duration: "4h", pricePerNight: 3200 },

/* ===================== KOLHAPUR ↔ RATNAGIRI ===================== */
{ id: 225, name: "Ertiga", category: "SUV", from_city: "Kolhapur", to_city: "Ratnagiri", duration: "7h", pricePerNight: 6500 },

/* ===================== LONAVALA ↔ MUMBAI ===================== */
{ id: 226, name: "Swift Dzire", category: "Sedan", from_city: "Lonavala", to_city: "Mumbai", duration: "3h", pricePerNight: 2600 },

/* ===================== LONAVALA ↔ PUNE ===================== */
{ id: 227, name: "Eeco", category: "Mini Van", from_city: "Lonavala", to_city: "Pune", duration: "2h", pricePerNight: 2000 },

/* ===================== RAIGAD ↔ PUNE ===================== */
{ id: 228, name: "Ertiga", category: "SUV", from_city: "Raigad", to_city: "Pune", duration: "4h", pricePerNight: 4200 },

/* ===================== MAHABALESHWAR ↔ MUMBAI ===================== */
{ id: 229, name: "Innova Crysta", category: "Luxury SUV", from_city: "Mahabaleshwar", to_city: "Mumbai", duration: "7h", pricePerNight: 7800 },

/* ===================== PANDHARPUR ↔ SOLAPUR ===================== */
{ id: 230, name: "Swift Dzire", category: "Sedan", from_city: "Pandharpur", to_city: "Solapur", duration: "2h", pricePerNight: 1500 },

/* ===================== SATARA ↔ KOLHAPUR ===================== */
{ id: 231, name: "Ertiga", category: "SUV", from_city: "Satara", to_city: "Kolhapur", duration: "3h", pricePerNight: 2800 },

/* ===================== AMRAVATI ↔ NAGPUR ===================== */
{ id: 232, name: "Swift Dzire", category: "Sedan", from_city: "Amravati", to_city: "Nagpur", duration: "3h", pricePerNight: 2400 },
/* ===================== MUMBAI ↔ PUNE ===================== */
{ id: 233, name: "Ertiga", category: "SUV", from_city: "Mumbai", to_city: "Pune", duration: "4h 30m", pricePerNight: 4500 },

/* ===================== NAGPUR ↔ MUMBAI ===================== */
{ id: 234, name: "Innova Crysta", category: "Luxury SUV", from_city: "Nagpur", to_city: "Mumbai", duration: "14h", pricePerNight: 16000 },

/* ===================== NASHIK ↔ PUNE ===================== */
{ id: 235, name: "Swift Dzire", category: "Sedan", from_city: "Nashik", to_city: "Pune", duration: "6h", pricePerNight: 4200 },

/* ===================== PUNE ↔ AURANGABAD ===================== */
{ id: 236, name: "Ertiga", category: "SUV", from_city: "Pune", to_city: "Aurangabad", duration: "7h", pricePerNight: 6200 },

/* ===================== MUMBAI ↔ KOLHAPUR ===================== */
{ id: 237, name: "Innova Crysta", category: "Luxury SUV", from_city: "Mumbai", to_city: "Kolhapur", duration: "10h", pricePerNight: 12000 },

/* ===================== PUNE ↔ SOLAPUR ===================== */
{ id: 238, name: "Swift Dzire", category: "Sedan", from_city: "Pune", to_city: "Solapur", duration: "5h 30m", pricePerNight: 3800 },

/* ===================== MUMBAI ↔ SATARA ===================== */
{ id: 239, name: "Ertiga", category: "SUV", from_city: "Mumbai", to_city: "Satara", duration: "6h", pricePerNight: 5200 },

/* ===================== PUNE ↔ AHMEDNAGAR ===================== */
{ id: 240, name: "Swift Dzire", category: "Sedan", from_city: "Pune", to_city: "Ahmednagar", duration: "4h", pricePerNight: 3200 },

/* ===================== AMRAVATI ↔ AKOLA ===================== */
{ id: 241, name: "Eeco", category: "Mini Van", from_city: "Amravati", to_city: "Akola", duration: "2h", pricePerNight: 1800 },

/* ===================== AURANGABAD ↔ BEED ===================== */
{ id: 242, name: "Swift Dzire", category: "Sedan", from_city: "Aurangabad", to_city: "Beed", duration: "4h", pricePerNight: 3000 },

/* ===================== JALGAON ↔ BULDHANA ===================== */
{ id: 243, name: "Ertiga", category: "SUV", from_city: "Jalgaon", to_city: "Buldhana", duration: "4h", pricePerNight: 4200 },

/* ===================== NASHIK ↔ DHULE ===================== */
{ id: 244, name: "Swift Dzire", category: "Sedan", from_city: "Nashik", to_city: "Dhule", duration: "4h", pricePerNight: 3300 },

/* ===================== SOLAPUR ↔ LATUR ===================== */
{ id: 245, name: "Eeco", category: "Mini Van", from_city: "Solapur", to_city: "Latur", duration: "4h", pricePerNight: 2800 },

/* ===================== RATNAGIRI ↔ KOLHAPUR ===================== */
{ id: 246, name: "Ertiga", category: "SUV", from_city: "Ratnagiri", to_city: "Kolhapur", duration: "7h", pricePerNight: 6500 },

/* ===================== PUNE ↔ MAHABALESHWAR ===================== */
{ id: 247, name: "Swift Dzire", category: "Sedan", from_city: "Pune", to_city: "Mahabaleshwar", duration: "5h", pricePerNight: 3600 },


];

export default cabs;

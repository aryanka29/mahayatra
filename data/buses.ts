const buses = [
  /* ===================== PUNE ↔ MUMBAI ===================== */
  { id: 1, name: "MahaYatra Express", type: "AC Sleeper", from_city: "Pune", to_city: "Mumbai", departure: "06:00 AM", duration: "4h 30m", pricePerNight: 899 },
  { id: 2, name: "Shivneri Travels", type: "AC Seater", from_city: "Pune", to_city: "Mumbai", departure: "07:30 AM", duration: "4h", pricePerNight: 750 },
  { id: 3, name: "Neeta Volvo", type: "Volvo AC", from_city: "Pune", to_city: "Mumbai", departure: "09:00 AM", duration: "4h", pricePerNight: 1100 },
  { id: 4, name: "Purple Travels", type: "AC Sleeper", from_city: "Pune", to_city: "Mumbai", departure: "11:00 AM", duration: "4h 15m", pricePerNight: 999 },
  { id: 5, name: "VRL Travels", type: "AC Sleeper", from_city: "Pune", to_city: "Mumbai", departure: "02:00 PM", duration: "4h 30m", pricePerNight: 1200 },
  { id: 6, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Pune", to_city: "Mumbai", departure: "06:00 PM", duration: "5h", pricePerNight: 650 },

  /* ===================== MUMBAI ↔ NAGPUR ===================== */
  { id: 7, name: "Orange Tours", type: "AC Sleeper", from_city: "Mumbai", to_city: "Nagpur", departure: "05:30 PM", duration: "14h", pricePerNight: 2200 },
  { id: 8, name: "Sanjay Travels", type: "AC Sleeper", from_city: "Mumbai", to_city: "Nagpur", departure: "06:45 PM", duration: "14h 30m", pricePerNight: 2100 },
  { id: 9, name: "Neeta Travels", type: "Volvo AC", from_city: "Mumbai", to_city: "Nagpur", departure: "07:30 PM", duration: "13h 45m", pricePerNight: 2400 },
  { id: 10, name: "Mahalaxmi Travels", type: "AC Sleeper", from_city: "Mumbai", to_city: "Nagpur", departure: "08:15 PM", duration: "14h", pricePerNight: 2300 },
  { id: 11, name: "Ashoka Travels", type: "Non AC Sleeper", from_city: "Mumbai", to_city: "Nagpur", departure: "09:00 PM", duration: "15h", pricePerNight: 1600 },

  /* ===================== PUNE ↔ NASHIK ===================== */
  { id: 12, name: "Purple Travels", type: "AC Sleeper", from_city: "Pune", to_city: "Nashik", departure: "05:00 AM", duration: "6h", pricePerNight: 999 },
  { id: 13, name: "Neeta Travels", type: "AC Seater", from_city: "Pune", to_city: "Nashik", departure: "07:00 AM", duration: "6h 15m", pricePerNight: 850 },
  { id: 14, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Pune", to_city: "Nashik", departure: "10:00 AM", duration: "6h", pricePerNight: 650 },
  { id: 15, name: "VRL Travels", type: "AC Sleeper", from_city: "Pune", to_city: "Nashik", departure: "02:00 PM", duration: "6h 30m", pricePerNight: 1200 },
  { id: 16, name: "Royal Chintamani", type: "AC Sleeper", from_city: "Pune", to_city: "Nashik", departure: "09:00 PM", duration: "6h", pricePerNight: 1100 },

  /* ===================== AURANGABAD ↔ PUNE ===================== */
  { id: 17, name: "Sanjay Travels", type: "Non AC Sleeper", from_city: "Aurangabad", to_city: "Pune", departure: "08:00 AM", duration: "7h", pricePerNight: 950 },
  { id: 18, name: "Neeta Travels", type: "AC Sleeper", from_city: "Aurangabad", to_city: "Pune", departure: "10:00 AM", duration: "7h", pricePerNight: 1200 },
  { id: 19, name: "Ashoka Travels", type: "AC Seater", from_city: "Aurangabad", to_city: "Pune", departure: "01:00 PM", duration: "7h 15m", pricePerNight: 850 },
  { id: 20, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Aurangabad", to_city: "Pune", departure: "04:00 PM", duration: "7h", pricePerNight: 700 },
  { id: 21, name: "VRL Travels", type: "AC Sleeper", from_city: "Aurangabad", to_city: "Pune", departure: "09:30 PM", duration: "7h", pricePerNight: 1300 },

  /* ===================== KOLHAPUR ↔ MUMBAI ===================== */
  { id: 22, name: "VRL Travels", type: "AC Sleeper", from_city: "Kolhapur", to_city: "Mumbai", departure: "07:00 PM", duration: "10h", pricePerNight: 1400 },
  { id: 23, name: "Neeta Travels", type: "AC Sleeper", from_city: "Kolhapur", to_city: "Mumbai", departure: "08:00 PM", duration: "10h 30m", pricePerNight: 1350 },
  { id: 24, name: "Sanjay Travels", type: "Non AC Sleeper", from_city: "Kolhapur", to_city: "Mumbai", departure: "09:00 PM", duration: "11h", pricePerNight: 1000 },
  { id: 25, name: "Royal Chintamani", type: "AC Sleeper", from_city: "Kolhapur", to_city: "Mumbai", departure: "10:00 PM", duration: "10h", pricePerNight: 1500 },
  { id: 26, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Kolhapur", to_city: "Mumbai", departure: "05:30 PM", duration: "11h", pricePerNight: 850 },

  /* ===================== SOLAPUR ↔ PUNE ===================== */
  { id: 27, name: "Ashoka Travels", type: "Non AC Seater", from_city: "Solapur", to_city: "Pune", departure: "06:00 AM", duration: "5h", pricePerNight: 500 },
  { id: 28, name: "Neeta Travels", type: "AC Seater", from_city: "Solapur", to_city: "Pune", departure: "08:00 AM", duration: "5h 30m", pricePerNight: 750 },
  { id: 29, name: "Sanjay Travels", type: "AC Sleeper", from_city: "Solapur", to_city: "Pune", departure: "12:00 PM", duration: "5h", pricePerNight: 900 },
  { id: 30, name: "VRL Travels", type: "AC Sleeper", from_city: "Solapur", to_city: "Pune", departure: "04:00 PM", duration: "5h 15m", pricePerNight: 1100 },
  { id: 31, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Solapur", to_city: "Pune", departure: "07:00 PM", duration: "5h 30m", pricePerNight: 650 },

  /* ===================== SATARA ↔ MUMBAI ===================== */
  { id: 32, name: "Royal Chintamani", type: "AC Sleeper", from_city: "Satara", to_city: "Mumbai", departure: "06:30 PM", duration: "6h", pricePerNight: 1100 },
  { id: 33, name: "Neeta Travels", type: "AC Sleeper", from_city: "Satara", to_city: "Mumbai", departure: "07:30 PM", duration: "6h 15m", pricePerNight: 1200 },
  { id: 34, name: "Sanjay Travels", type: "Non AC Sleeper", from_city: "Satara", to_city: "Mumbai", departure: "08:30 PM", duration: "6h", pricePerNight: 900 },
  { id: 35, name: "VRL Travels", type: "AC Sleeper", from_city: "Satara", to_city: "Mumbai", departure: "09:30 PM", duration: "6h", pricePerNight: 1300 },
  { id: 36, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Satara", to_city: "Mumbai", departure: "05:00 PM", duration: "6h 30m", pricePerNight: 700 },
  /* ===================== AHMEDNAGAR ↔ PUNE ===================== */
  { id: 37, name: "Neeta Travels", type: "AC Seater", from_city: "Ahmednagar", to_city: "Pune", departure: "06:00 AM", duration: "5h", pricePerNight: 650 },
  { id: 38, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Ahmednagar", to_city: "Pune", departure: "08:00 AM", duration: "5h", pricePerNight: 600 },
  { id: 39, name: "Ashoka Travels", type: "Non AC Sleeper", from_city: "Ahmednagar", to_city: "Pune", departure: "11:00 AM", duration: "5h 15m", pricePerNight: 500 },
  { id: 40, name: "VRL Travels", type: "AC Sleeper", from_city: "Ahmednagar", to_city: "Pune", departure: "04:00 PM", duration: "5h", pricePerNight: 900 },
  { id: 41, name: "Sanjay Travels", type: "AC Sleeper", from_city: "Ahmednagar", to_city: "Pune", departure: "09:00 PM", duration: "5h", pricePerNight: 950 },

  /* ===================== AKOLA ↔ AMRAVATI ===================== */
  { id: 42, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Akola", to_city: "Amravati", departure: "06:30 AM", duration: "2h", pricePerNight: 300 },
  { id: 43, name: "Neeta Travels", type: "AC Seater", from_city: "Akola", to_city: "Amravati", departure: "09:00 AM", duration: "2h", pricePerNight: 350 },
  { id: 44, name: "Ashoka Travels", type: "Non AC Seater", from_city: "Akola", to_city: "Amravati", departure: "12:00 PM", duration: "2h", pricePerNight: 250 },
  { id: 45, name: "Sanjay Travels", type: "AC Sleeper", from_city: "Akola", to_city: "Amravati", departure: "05:00 PM", duration: "2h 15m", pricePerNight: 450 },
  { id: 46, name: "VRL Travels", type: "AC Sleeper", from_city: "Akola", to_city: "Amravati", departure: "08:30 PM", duration: "2h", pricePerNight: 500 },

  /* ===================== BEED ↔ AURANGABAD ===================== */
  { id: 47, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Beed", to_city: "Aurangabad", departure: "05:30 AM", duration: "4h", pricePerNight: 550 },
  { id: 48, name: "Neeta Travels", type: "AC Sleeper", from_city: "Beed", to_city: "Aurangabad", departure: "08:00 AM", duration: "4h", pricePerNight: 800 },
  { id: 49, name: "Ashoka Travels", type: "Non AC Sleeper", from_city: "Beed", to_city: "Aurangabad", departure: "11:00 AM", duration: "4h 15m", pricePerNight: 600 },
  { id: 50, name: "Sanjay Travels", type: "AC Sleeper", from_city: "Beed", to_city: "Aurangabad", departure: "04:00 PM", duration: "4h", pricePerNight: 850 },
  { id: 51, name: "VRL Travels", type: "AC Sleeper", from_city: "Beed", to_city: "Aurangabad", departure: "09:00 PM", duration: "4h", pricePerNight: 900 },

  /* ===================== BULDHANA ↔ JALGAON ===================== */
  { id: 52, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Buldhana", to_city: "Jalgaon", departure: "06:00 AM", duration: "4h", pricePerNight: 500 },
  { id: 53, name: "Neeta Travels", type: "AC Seater", from_city: "Buldhana", to_city: "Jalgaon", departure: "09:00 AM", duration: "4h 15m", pricePerNight: 650 },
  { id: 54, name: "Ashoka Travels", type: "Non AC Seater", from_city: "Buldhana", to_city: "Jalgaon", departure: "01:00 PM", duration: "4h", pricePerNight: 450 },
  { id: 55, name: "Sanjay Travels", type: "AC Sleeper", from_city: "Buldhana", to_city: "Jalgaon", departure: "05:30 PM", duration: "4h 30m", pricePerNight: 850 },
  { id: 56, name: "VRL Travels", type: "AC Sleeper", from_city: "Buldhana", to_city: "Jalgaon", departure: "09:30 PM", duration: "4h", pricePerNight: 900 },

  /* ===================== DHULE ↔ NASHIK ===================== */
  { id: 57, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Dhule", to_city: "Nashik", departure: "05:00 AM", duration: "4h", pricePerNight: 550 },
  { id: 58, name: "Neeta Travels", type: "AC Sleeper", from_city: "Dhule", to_city: "Nashik", departure: "08:00 AM", duration: "4h", pricePerNight: 750 },
  { id: 59, name: "Ashoka Travels", type: "Non AC Sleeper", from_city: "Dhule", to_city: "Nashik", departure: "12:00 PM", duration: "4h 15m", pricePerNight: 600 },
  { id: 60, name: "Sanjay Travels", type: "AC Sleeper", from_city: "Dhule", to_city: "Nashik", departure: "05:00 PM", duration: "4h", pricePerNight: 900 },
  { id: 61, name: "VRL Travels", type: "AC Sleeper", from_city: "Dhule", to_city: "Nashik", departure: "10:00 PM", duration: "4h", pricePerNight: 950 },

  /* ===================== LATUR ↔ NANDED ===================== */
  { id: 62, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Latur", to_city: "Nanded", departure: "06:00 AM", duration: "4h", pricePerNight: 600 },
  { id: 63, name: "Neeta Travels", type: "AC Sleeper", from_city: "Latur", to_city: "Nanded", departure: "09:00 AM", duration: "4h", pricePerNight: 850 },
  { id: 64, name: "Ashoka Travels", type: "Non AC Sleeper", from_city: "Latur", to_city: "Nanded", departure: "01:00 PM", duration: "4h 15m", pricePerNight: 650 },
  { id: 65, name: "Sanjay Travels", type: "AC Sleeper", from_city: "Latur", to_city: "Nanded", departure: "06:00 PM", duration: "4h", pricePerNight: 900 },
  { id: 66, name: "VRL Travels", type: "AC Sleeper", from_city: "Latur", to_city: "Nanded", departure: "10:00 PM", duration: "4h", pricePerNight: 950 },

  /* ===================== RAIGAD ↔ MUMBAI ===================== */
  { id: 67, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Raigad", to_city: "Mumbai", departure: "06:00 AM", duration: "3h", pricePerNight: 450 },
  { id: 68, name: "Neeta Travels", type: "AC Seater", from_city: "Raigad", to_city: "Mumbai", departure: "09:00 AM", duration: "3h", pricePerNight: 550 },
  { id: 69, name: "Ashoka Travels", type: "Non AC Seater", from_city: "Raigad", to_city: "Mumbai", departure: "01:00 PM", duration: "3h", pricePerNight: 400 },
  { id: 70, name: "Sanjay Travels", type: "AC Sleeper", from_city: "Raigad", to_city: "Mumbai", departure: "06:00 PM", duration: "3h 15m", pricePerNight: 800 },
  { id: 71, name: "VRL Travels", type: "AC Sleeper", from_city: "Raigad", to_city: "Mumbai", departure: "09:30 PM", duration: "3h", pricePerNight: 850 },

  /* ===================== RATNAGIRI ↔ MUMBAI ===================== */
  { id: 72, name: "Neeta Travels", type: "AC Sleeper", from_city: "Ratnagiri", to_city: "Mumbai", departure: "05:00 PM", duration: "8h", pricePerNight: 1400 },
  { id: 73, name: "VRL Travels", type: "AC Sleeper", from_city: "Ratnagiri", to_city: "Mumbai", departure: "06:00 PM", duration: "8h 30m", pricePerNight: 1500 },
  { id: 74, name: "Sanjay Travels", type: "Non AC Sleeper", from_city: "Ratnagiri", to_city: "Mumbai", departure: "07:00 PM", duration: "9h", pricePerNight: 1100 },
  { id: 75, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Ratnagiri", to_city: "Mumbai", departure: "08:00 PM", duration: "9h", pricePerNight: 900 },
  { id: 76, name: "Royal Chintamani", type: "AC Sleeper", from_city: "Ratnagiri", to_city: "Mumbai", departure: "09:30 PM", duration: "8h", pricePerNight: 1600 },

  /* ===================== KARAD ↔ PUNE ===================== */
  { id: 77, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Karad", to_city: "Pune", departure: "06:00 AM", duration: "4h", pricePerNight: 550 },
  { id: 78, name: "Neeta Travels", type: "AC Sleeper", from_city: "Karad", to_city: "Pune", departure: "09:00 AM", duration: "4h", pricePerNight: 850 },
  { id: 79, name: "Ashoka Travels", type: "Non AC Sleeper", from_city: "Karad", to_city: "Pune", departure: "01:00 PM", duration: "4h 15m", pricePerNight: 600 },
  { id: 80, name: "Sanjay Travels", type: "AC Sleeper", from_city: "Karad", to_city: "Pune", departure: "06:00 PM", duration: "4h", pricePerNight: 900 },
  { id: 81, name: "VRL Travels", type: "AC Sleeper", from_city: "Karad", to_city: "Pune", departure: "10:00 PM", duration: "4h", pricePerNight: 950 },

  /* ===================== LONAVALA ↔ MUMBAI ===================== */
  { id: 82, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Lonavala", to_city: "Mumbai", departure: "06:30 AM", duration: "3h", pricePerNight: 400 },
  { id: 83, name: "Neeta Travels", type: "AC Seater", from_city: "Lonavala", to_city: "Mumbai", departure: "09:30 AM", duration: "3h", pricePerNight: 500 },
  { id: 84, name: "Ashoka Travels", type: "Non AC Seater", from_city: "Lonavala", to_city: "Mumbai", departure: "01:30 PM", duration: "3h", pricePerNight: 350 },
  { id: 85, name: "Sanjay Travels", type: "AC Sleeper", from_city: "Lonavala", to_city: "Mumbai", departure: "06:30 PM", duration: "3h", pricePerNight: 700 },
  { id: 86, name: "VRL Travels", type: "AC Sleeper", from_city: "Lonavala", to_city: "Mumbai", departure: "09:30 PM", duration: "3h", pricePerNight: 750 },

  /* ===================== MAHABALESHWAR ↔ PUNE ===================== */
  { id: 87, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Mahabaleshwar", to_city: "Pune", departure: "06:00 AM", duration: "5h", pricePerNight: 600 },
  { id: 88, name: "Neeta Travels", type: "AC Sleeper", from_city: "Mahabaleshwar", to_city: "Pune", departure: "09:00 AM", duration: "5h", pricePerNight: 850 },
  { id: 89, name: "Ashoka Travels", type: "Non AC Sleeper", from_city: "Mahabaleshwar", to_city: "Pune", departure: "01:00 PM", duration: "5h 15m", pricePerNight: 650 },
  { id: 90, name: "Sanjay Travels", type: "AC Sleeper", from_city: "Mahabaleshwar", to_city: "Pune", departure: "06:00 PM", duration: "5h", pricePerNight: 900 },
  { id: 91, name: "VRL Travels", type: "AC Sleeper", from_city: "Mahabaleshwar", to_city: "Pune", departure: "10:00 PM", duration: "5h", pricePerNight: 950 },

  /* ===================== PANDHARPUR ↔ SOLAPUR ===================== */
  { id: 92, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Pandharpur", to_city: "Solapur", departure: "06:00 AM", duration: "2h", pricePerNight: 300 },
  { id: 93, name: "Neeta Travels", type: "AC Seater", from_city: "Pandharpur", to_city: "Solapur", departure: "09:00 AM", duration: "2h", pricePerNight: 350 },
  { id: 94, name: "Ashoka Travels", type: "Non AC Seater", from_city: "Pandharpur", to_city: "Solapur", departure: "12:00 PM", duration: "2h", pricePerNight: 250 },
  { id: 95, name: "Sanjay Travels", type: "AC Sleeper", from_city: "Pandharpur", to_city: "Solapur", departure: "05:00 PM", duration: "2h", pricePerNight: 450 },
  { id: 96, name: "VRL Travels", type: "AC Sleeper", from_city: "Pandharpur", to_city: "Solapur", departure: "08:30 PM", duration: "2h", pricePerNight: 500 },
  /* ===================== PUNE ↔ SOLAPUR ===================== */
  { id: 97, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Pune", to_city: "Solapur", departure: "06:00 AM", duration: "5h 30m", pricePerNight: 650 },

  /* ===================== PUNE ↔ AHMEDNAGAR ===================== */
  { id: 98, name: "Neeta Travels", type: "AC Seater", from_city: "Pune", to_city: "Ahmednagar", departure: "07:30 AM", duration: "4h", pricePerNight: 550 },

  /* ===================== MUMBAI ↔ NASHIK ===================== */
  { id: 99, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Mumbai", to_city: "Nashik", departure: "05:30 AM", duration: "5h", pricePerNight: 650 },

  /* ===================== MUMBAI ↔ AURANGABAD ===================== */
  { id: 100, name: "Neeta Travels", type: "AC Sleeper", from_city: "Mumbai", to_city: "Aurangabad", departure: "08:00 PM", duration: "8h", pricePerNight: 1200 },

  /* ===================== PUNE ↔ KOLHAPUR ===================== */
  { id: 101, name: "VRL Travels", type: "AC Sleeper", from_city: "Pune", to_city: "Kolhapur", departure: "09:00 PM", duration: "6h", pricePerNight: 1100 },

  /* ===================== SATARA ↔ KOLHAPUR ===================== */
  { id: 102, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Satara", to_city: "Kolhapur", departure: "10:00 AM", duration: "3h", pricePerNight: 350 },

  /* ===================== SATARA ↔ PUNE ===================== */
  { id: 103, name: "Ashoka Travels", type: "Non AC Seater", from_city: "Satara", to_city: "Pune", departure: "02:00 PM", duration: "4h", pricePerNight: 450 },

  /* ===================== NAGPUR ↔ AMRAVATI ===================== */
  { id: 104, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Nagpur", to_city: "Amravati", departure: "07:00 AM", duration: "3h", pricePerNight: 400 },

  /* ===================== NAGPUR ↔ AKOLA ===================== */
  { id: 105, name: "Neeta Travels", type: "AC Seater", from_city: "Nagpur", to_city: "Akola", departure: "01:00 PM", duration: "5h", pricePerNight: 650 },

  /* ===================== JALGAON ↔ DHULE ===================== */
  { id: 106, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Jalgaon", to_city: "Dhule", departure: "09:00 AM", duration: "2h", pricePerNight: 300 },

  /* ===================== JALGAON ↔ NASHIK ===================== */
  { id: 107, name: "VRL Travels", type: "AC Sleeper", from_city: "Jalgaon", to_city: "Nashik", departure: "11:00 PM", duration: "6h", pricePerNight: 950 },

  /* ===================== NANDED ↔ AURANGABAD ===================== */
  { id: 108, name: "Neeta Travels", type: "AC Sleeper", from_city: "Nanded", to_city: "Aurangabad", departure: "08:30 PM", duration: "7h", pricePerNight: 1000 },

  /* ===================== LATUR ↔ SOLAPUR ===================== */
  { id: 109, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Latur", to_city: "Solapur", departure: "06:30 AM", duration: "4h", pricePerNight: 550 },

  /* ===================== KOLHAPUR ↔ RATNAGIRI ===================== */
  { id: 110, name: "Sanjay Travels", type: "AC Sleeper", from_city: "Kolhapur", to_city: "Ratnagiri", departure: "07:00 PM", duration: "7h", pricePerNight: 1200 },

  /* ===================== RATNAGIRI ↔ GOA (via MAH CITY) ===================== */
  { id: 111, name: "Neeta Travels", type: "AC Sleeper", from_city: "Ratnagiri", to_city: "Kolhapur", departure: "06:00 PM", duration: "7h 30m", pricePerNight: 1150 },

  /* ===================== MAHABALESHWAR ↔ MUMBAI ===================== */
  { id: 112, name: "Royal Chintamani", type: "AC Sleeper", from_city: "Mahabaleshwar", to_city: "Mumbai", departure: "09:00 PM", duration: "7h", pricePerNight: 1300 },

  /* ===================== LONAVALA ↔ PUNE ===================== */
  { id: 113, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Lonavala", to_city: "Pune", departure: "08:00 AM", duration: "2h", pricePerNight: 250 },

  /* ===================== RAIGAD ↔ PUNE ===================== */
  { id: 114, name: "Neeta Travels", type: "AC Seater", from_city: "Raigad", to_city: "Pune", departure: "07:00 AM", duration: "4h", pricePerNight: 550 },

  /* ===================== PANDHARPUR ↔ PUNE ===================== */
  { id: 115, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Pandharpur", to_city: "Pune", departure: "05:00 AM", duration: "6h", pricePerNight: 700 },

  /* ===================== BULDHANA ↔ AKOLA ===================== */
  { id: 116, name: "Ashoka Travels", type: "Non AC Seater", from_city: "Buldhana", to_city: "Akola", departure: "12:00 PM", duration: "3h", pricePerNight: 350 },

  /* ===================== AMRAVATI ↔ NAGPUR ===================== */
  { id: 117, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Amravati", to_city: "Nagpur", departure: "04:00 PM", duration: "3h", pricePerNight: 400 },

  /* ===================== AHMEDNAGAR ↔ NASHIK ===================== */
  { id: 118, name: "Neeta Travels", type: "AC Seater", from_city: "Ahmednagar", to_city: "Nashik", departure: "06:00 AM", duration: "4h", pricePerNight: 550 },

  { id: 119, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Nashik", to_city: "Aurangabad", departure: "06:00 AM", duration: "4h", pricePerNight: 550 },
{ id: 120, name: "Neeta Travels", type: "AC Sleeper", from_city: "Nashik", to_city: "Aurangabad", departure: "09:30 PM", duration: "4h 30m", pricePerNight: 850 },
{ id: 119, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Nashik", to_city: "Aurangabad", departure: "06:00 AM", duration: "4h", pricePerNight: 550 },
{ id: 120, name: "Neeta Travels", type: "AC Sleeper", from_city: "Nashik", to_city: "Aurangabad", departure: "09:30 PM", duration: "4h 30m", pricePerNight: 850 },
{ id: 123, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Kolhapur", to_city: "Pune", departure: "06:30 AM", duration: "6h", pricePerNight: 700 },
{ id: 124, name: "Neeta Travels", type: "AC Sleeper", from_city: "Kolhapur", to_city: "Pune", departure: "09:00 PM", duration: "6h 30m", pricePerNight: 1100 },
{ id: 125, name: "Ashoka Travels", type: "AC Sleeper", from_city: "Nagpur", to_city: "Nashik", departure: "04:00 PM", duration: "11h", pricePerNight: 1600 },
{ id: 126, name: "Sanjay Travels", type: "Non AC Sleeper", from_city: "Nagpur", to_city: "Nashik", departure: "06:00 PM", duration: "11h 30m", pricePerNight: 1200 },
{ id: 127, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Amravati", to_city: "Aurangabad", departure: "07:00 AM", duration: "7h", pricePerNight: 700 },
{ id: 128, name: "Neeta Travels", type: "AC Sleeper", from_city: "Amravati", to_city: "Aurangabad", departure: "09:00 PM", duration: "7h 30m", pricePerNight: 1100 },
{ id: 129, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Beed", to_city: "Pune", departure: "05:30 AM", duration: "6h", pricePerNight: 650 },
{ id: 130, name: "Sanjay Travels", type: "AC Sleeper", from_city: "Beed", to_city: "Pune", departure: "10:00 PM", duration: "6h 30m", pricePerNight: 950 },
{ id: 131, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Jalgaon", to_city: "Aurangabad", departure: "06:00 AM", duration: "4h", pricePerNight: 500 },
{ id: 132, name: "Neeta Travels", type: "AC Sleeper", from_city: "Jalgaon", to_city: "Aurangabad", departure: "08:30 PM", duration: "4h 30m", pricePerNight: 800 },
{ id: 133, name: "Ashoka Travels", type: "Non AC Seater", from_city: "Dhule", to_city: "Aurangabad", departure: "07:00 AM", duration: "4h", pricePerNight: 450 },
{ id: 134, name: "Sanjay Travels", type: "AC Sleeper", from_city: "Dhule", to_city: "Aurangabad", departure: "09:00 PM", duration: "4h 30m", pricePerNight: 850 },
{ id: 135, name: "Neeta Travels", type: "AC Sleeper", from_city: "Nanded", to_city: "Pune", departure: "05:00 PM", duration: "8h", pricePerNight: 1300 },
{ id: 136, name: "VRL Travels", type: "AC Sleeper", from_city: "Nanded", to_city: "Pune", departure: "08:30 PM", duration: "8h 30m", pricePerNight: 1400 },
{ id: 137, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Ratnagiri", to_city: "Pune", departure: "06:00 AM", duration: "7h", pricePerNight: 800 },
{ id: 138, name: "Sanjay Travels", type: "AC Sleeper", from_city: "Ratnagiri", to_city: "Pune", departure: "09:00 PM", duration: "7h 30m", pricePerNight: 1200 },
{ id: 139, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Mahabaleshwar", to_city: "Mumbai", departure: "07:00 AM", duration: "6h", pricePerNight: 750 },
{ id: 140, name: "Neeta Travels", type: "AC Sleeper", from_city: "Mahabaleshwar", to_city: "Mumbai", departure: "10:00 PM", duration: "6h 30m", pricePerNight: 1200 },
{ id: 141, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Pandharpur", to_city: "Mumbai", departure: "05:00 AM", duration: "8h", pricePerNight: 850 },
{ id: 142, name: "Sanjay Travels", type: "AC Sleeper", from_city: "Pandharpur", to_city: "Mumbai", departure: "09:00 PM", duration: "8h 30m", pricePerNight: 1300 },
{ id: 143, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Nashik", to_city: "Pune", departure: "06:30 AM", duration: "5h", pricePerNight: 650 },
{ id: 144, name: "Neeta Travels", type: "AC Sleeper", from_city: "Nashik", to_city: "Pune", departure: "10:00 PM", duration: "5h 30m", pricePerNight: 950 },
{ id: 145, name: "Neeta Travels", type: "AC Sleeper", from_city: "Nashik", to_city: "Mumbai", departure: "09:00 AM", duration: "4h", pricePerNight: 850 },
{ id: 146, name: "VRL Travels", type: "AC Sleeper", from_city: "Nashik", to_city: "Mumbai", departure: "11:00 PM", duration: "4h 30m", pricePerNight: 1100 },
{ id: 147, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Aurangabad", to_city: "Mumbai", departure: "07:00 AM", duration: "8h", pricePerNight: 750 },
{ id: 148, name: "Neeta Travels", type: "AC Sleeper", from_city: "Aurangabad", to_city: "Mumbai", departure: "09:30 PM", duration: "8h 30m", pricePerNight: 1200 },
{ id: 149, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Solapur", to_city: "Mumbai", departure: "06:00 AM", duration: "7h", pricePerNight: 750 },
{ id: 150, name: "Sanjay Travels", type: "AC Sleeper", from_city: "Solapur", to_city: "Mumbai", departure: "09:00 PM", duration: "7h 30m", pricePerNight: 1200 },
{ id: 151, name: "Neeta Travels", type: "AC Sleeper", from_city: "Kolhapur", to_city: "Nashik", departure: "05:00 PM", duration: "9h", pricePerNight: 1400 },
{ id: 152, name: "VRL Travels", type: "AC Sleeper", from_city: "Kolhapur", to_city: "Nashik", departure: "09:30 PM", duration: "9h 30m", pricePerNight: 1500 },
{ id: 153, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Satara", to_city: "Nashik", departure: "06:00 AM", duration: "7h", pricePerNight: 700 },
{ id: 154, name: "Neeta Travels", type: "AC Sleeper", from_city: "Satara", to_city: "Nashik", departure: "10:00 PM", duration: "7h 30m", pricePerNight: 1100 },
{ id: 155, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Ahmednagar", to_city: "Mumbai", departure: "05:30 AM", duration: "6h", pricePerNight: 650 },
{ id: 156, name: "Neeta Travels", type: "AC Sleeper", from_city: "Ahmednagar", to_city: "Mumbai", departure: "09:00 PM", duration: "6h 30m", pricePerNight: 1000 },
{ id: 157, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Akola", to_city: "Aurangabad", departure: "07:00 AM", duration: "6h", pricePerNight: 650 },
{ id: 158, name: "Sanjay Travels", type: "AC Sleeper", from_city: "Akola", to_city: "Aurangabad", departure: "08:30 PM", duration: "6h 30m", pricePerNight: 1000 },
{ id: 159, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Buldhana", to_city: "Aurangabad", departure: "06:00 AM", duration: "4h", pricePerNight: 500 },
{ id: 160, name: "Neeta Travels", type: "AC Sleeper", from_city: "Buldhana", to_city: "Aurangabad", departure: "09:00 PM", duration: "4h 30m", pricePerNight: 800 },
{ id: 161, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Jalgaon", to_city: "Pune", departure: "05:00 AM", duration: "7h", pricePerNight: 700 },
{ id: 162, name: "VRL Travels", type: "AC Sleeper", from_city: "Jalgaon", to_city: "Pune", departure: "10:00 PM", duration: "7h 30m", pricePerNight: 1200 },
{ id: 163, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Latur", to_city: "Pune", departure: "06:00 AM", duration: "6h", pricePerNight: 650 },
{ id: 164, name: "Neeta Travels", type: "AC Sleeper", from_city: "Latur", to_city: "Pune", departure: "09:00 PM", duration: "6h 30m", pricePerNight: 1050 },
{ id: 165, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Raigad", to_city: "Nashik", departure: "06:30 AM", duration: "5h", pricePerNight: 600 },
{ id: 166, name: "Sanjay Travels", type: "AC Sleeper", from_city: "Raigad", to_city: "Nashik", departure: "10:00 PM", duration: "5h 30m", pricePerNight: 950 },
{ id: 167, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Lonavala", to_city: "Nashik", departure: "07:00 AM", duration: "4h", pricePerNight: 450 },
{ id: 168, name: "Neeta Travels", type: "AC Sleeper", from_city: "Lonavala", to_city: "Nashik", departure: "09:30 PM", duration: "4h 30m", pricePerNight: 800 },
{ id: 169, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Mahabaleshwar", to_city: "Nashik", departure: "06:00 AM", duration: "7h", pricePerNight: 700 },
{ id: 170, name: "Sanjay Travels", type: "AC Sleeper", from_city: "Mahabaleshwar", to_city: "Nashik", departure: "10:00 PM", duration: "7h 30m", pricePerNight: 1150 },
{ id: 171, name: "MSRTC Shivshahi", type: "AC Seater", from_city: "Pandharpur", to_city: "Nashik", departure: "05:30 AM", duration: "8h", pricePerNight: 800 },
{ id: 172, name: "Neeta Travels", type: "AC Sleeper", from_city: "Pandharpur", to_city: "Nashik", departure: "09:30 PM", duration: "8h 30m", pricePerNight: 1300 },

];

export default buses;

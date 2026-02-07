export interface Room {
  type: string;
  capacity: number;
}

export default interface Hotel {
  id: number;
  name: string;
  city: string;
  rating: number;
  reviews: number;
  pricePerNight: number;
  amenities: string[];
  rooms: Room[];
  images: string[];
}

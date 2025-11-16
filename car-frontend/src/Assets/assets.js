import whatsapp from './whatsapp_icon.png'
import menu from './menu-black.png'
import cross from "./cross-black.png"
import likebutton from './Like-button.png'
import profile from './profile_icon.png'
import Home from './Landing-image.png'
import verified from './verified.png'
import location from './location.png'
import about from './about_real-estate.jpg'
import good from './good.png'
import house from './house-4.png'
import real from './Real.avif'
import star from './star.png'
import white_star from './star-white.png'
import instagram from './instagram.png'
import facebook from './facebook.png'
import twitter from './twitter.png'
import aboutUs from './aboutus.png'
import services from './services.png'
import did from './did.png'
import privacy from './privacy.png'
import home from './home.png'
import phone from './phone.jpg'
import house3 from './house-3.jpg'
import house2 from './house-2.jpg'
import auto2 from './Auto2.mp4'
import car2 from './car2.jpg'
import car3 from './car3.jpg'
import car from './Cars.jpg'
import auto from './Auto.mp4'
import arrow_icon from './arrow.png'
import pause from './pause_icon.png'
import play from './play.png'
import footer from './Footer.png'
import footer2 from './Footer2.png'
import exchange_icon from './exchange_icon.png'
import quality_icon from './quality_icon.png'
import support_img from './support_img.png'
import dropdown_icon from './dropdown_icon.png'
import search_icon from './search_icon.png'
import cross_icon from './cross_icon.png'
import interior from './interior.jpg'
import car_header from './car-header.png'
import tiktok from './tiktok.png'
import benz from './benz.jpg'
import benz1 from './benz1.jpg'
import benz2 from './benz2.jpg'
import benz3 from './benz3.jpg'
import benz4 from './benz4.jpg'
import benz5 from './benz5.jpg'
import benz6 from './benz6.jpg'
import benz7 from './benz7.jpg'


export const assets = {
  whatsapp,menu,cross,likebutton,profile,
  auto,auto2,car,car2,car3,
  arrow_icon,pause,play,
  footer,footer2,

  Home,
  verified,location,
  about,
  good,
  house,house3,house2,
  real,
  star,white_star,
  aboutUs,services,did,privacy,home,phone,
  instagram,facebook,twitter,tiktok,
  exchange_icon,quality_icon,support_img,
  dropdown_icon,search_icon,cross_icon,
  interior,
  car_header,
  benz,benz1,benz2,benz3,benz4,benz5,benz6,benz7
};




// ------------------------------------------------------------------
// ----------------------------------------------------------
// --------------------------------------------------
// ------------------------------------------
// ---------------------------------
// -----------------------
// -------------
// -----
// -
export const products = [
    {
  _id: "aaaa01",
  name: "Toyota Supra",
  brand: "Toyota",
  model: "Le",
  year: 2013,
  mileage: "15,000 km",
  fuelType: "Petrol",
  transmission: "Automatic",
  engine: "3.0L V6",
  drivetrain: "AWD",
  bodyType: "Sedan",
  price: "30,000,000",
  currency: "USD",
  color: "Black",
  rating: 34,
  image: [car, car2, car3],
  video: "https://youtube.com/car-showcase",
  description: "Luxury sedan with premium features, leather seats, panoramic sunroof, and advanced safety systems.",
  location: "Lagos",
  sellerType: "Dealer",
  contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
  availability: "In stock",
  bestseller: true,
  date: 1716621542448,
  views: 230,
  savedBy: []
},

 {
  _id: "bbbb01",
  name: "Toyota HighLander",
  brand: "Toyota",
  model: "Le",
  year: 2010,
  mileage: "15,000 km",
  fuelType: "Petrol",
  transmission: "Automatic",
  engine: "3.0L V6",
  drivetrain: "AWD",
  bodyType: "Sedan",
  price: 9000000,
  currency: "USD",
  color: "Black",
  rating: 134,
  image: [car, car2, car3],
  video: "https://youtube.com/car-showcase",
  description: "Luxury sedan with premium features, leather seats, panoramic sunroof, and advanced safety systems.",
  location: "umuchi, ihiala Aba",
  sellerType: "Dealer", 
  contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
  availability: "In stock",
  bestseller: true,
  date: 1716621542448,
  views: 230,
  savedBy: []
},


 {
  _id: "bbbb01",
  name: "Toyota Avensis",
  brand: "Toyota",
  model: "Corolla",
  year: 2009,
  mileage: "15,000 km",
  fuelType: "Petrol",
  transmission: "Automatic",
  engine: "3.0L V6",
  drivetrain: "AWD",
  bodyType: "Sedan",
  price: 19000000,
  currency: "USD",
  color: "Black",
  rating: 24,
  image: [car, car2, car3],
  video: "https://youtube.com/car-showcase",
  description: "Luxury sedan with premium features, leather seats, panoramic sunroof, and advanced safety systems.",
  location: "Lagos",
  sellerType: "Dealer",
  contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
  availability: "In stock",
  bestseller: true,
  date: 1716621542448,
  views: 230,
  savedBy: []
},

    {
  _id: "benz-12-0012",
  name: "Mercedes Benz ML 350",
  brand: "Mercedes-Benz",
  model: "ML 350",
  year: 2015,
  mileage: "12,000 km",
  fuelType: "Petrol",
  transmission: "Automatic",
  engine: "3.0L V6",
  drivetrain: "AWD",
  bodyType: "Sedan",
  price: 23500000,
  currency: "NGN",
  color: "Gray",
  rating: 64,
  image: [benz,benz1,benz,benz3,benz4,benz5,benz6,benz7],
  video: "https://youtube.com/car-showcase",
  description: "Luxury sedan with premium features, leather seats, panoramic sunroof, and advanced safety systems.",
  location: "Lagos",
  sellerType: "Dealer",
  contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
  availability: "In stock",
  bestseller: true,
  date: 1716621542448,
  views: 230,
  savedBy: []
},

    {
  _id: "12abc34de",
  name: "Mercedes Benz GLE 450",
  brand: "Mercedes-Benz",
  model: "GLE 450",
  year: 2023,
  mileage: "15,000 km",
  fuelType: "Petrol",
  transmission: "Automatic",
  engine: "3.0L V6",
  drivetrain: "AWD",
  bodyType: "Sedan",
  price: 82200000,
  currency: "USD",
  color: "Black",
  rating: 94,
  image: [car, car2, car3, benz, benz1, benz2, benz3, benz4],
  video: "https://youtube.com/car-showcase",
  description: "Luxury sedan with premium features, leather seats, panoramic sunroof, and advanced safety systems.",
  location: "Lagos",
  sellerType: "Dealer",
  contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
  availability: "In stock",
  bestseller: true,
  date: 1716621542448,
  views: 230,
  savedBy: []
},

 {
  _id: "aaaaa",
  name: "Mercedes Benz GLE 450",
  brand: "Mercedes-Benz",
  model: "GLE 450",
  year: 2009,
  mileage: "15,000 km",
  fuelType: "Petrol",
  transmission: "Automatic",
  engine: "3.0L V6",
  drivetrain: "AWD",
  bodyType: "Sedan",
  price: 52200000,
  currency: "USD",
  color: "Black",
  rating: 54,
  image: [car, car2, car3],
  video: "https://youtube.com/car-showcase",
  description: "Luxury sedan with premium features, leather seats, panoramic sunroof, and advanced safety systems.",
  location: "Lagos",
  sellerType: "Dealer",
  contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
  availability: "In stock",
  bestseller: true,
  date: 1716621542448,
  views: 230,
  savedBy: []
},

 {
  _id: "aaaaa",
  name: "Mercedes Benz GLE 450",
  brand: "Mercedes-Benz",
  model: "GLE 450",
  year: 2013,
  mileage: "15,000 km",
  fuelType: "Petrol",
  transmission: "Automatic",
  engine: "3.0L V6",
  drivetrain: "AWD",
  bodyType: "Sedan",
  price: 62200000,
  currency: "USD",
  color: "Black",
  rating: 134,
  image: [car, car2, car3],
  video: "https://youtube.com/car-showcase",
  description: "Luxury sedan with premium features, leather seats, panoramic sunroof, and advanced safety systems.",
  location: "Lagos",
  sellerType: "Dealer",
  contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
  availability: "In stock",
  bestseller: true,
  date: 1716621542448,
  views: 230,
  savedBy: []
},

    {
  _id: "aaaaa",
  name: "Honda Accord Revolution",
  brand: "Honda",
  model: "Accord",
  year: 2023,
  mileage: "15,000 km",
  fuelType: "Petrol",
  transmission: "Automatic",
  engine: "3.0L V6",
  drivetrain: "AWD",
  bodyType: "Sedan",
  price: 12000000,
  currency: "USD",
  color: "Black",
  rating: 134,
  image: [car, car2, car3],
  video: "https://youtube.com/car-showcase",
  description: "Luxury sedan with premium features, leather seats, panoramic sunroof, and advanced safety systems.",
  location: "Lagos",
  sellerType: "Dealer",
  contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
  availability: "In stock",
  bestseller: true,
  date: 1716621542448,
  views: 230,
  savedBy: []
},

    {
  _id: "aaaaa",
  name: "Hyundai Sonata S360",
  brand: "Hyundai",
  model: "Sonata",
  year: 2023,
  mileage: "15,000 km",
  fuelType: "Petrol",
  transmission: "Automatic",
  engine: "3.0L V6",
  drivetrain: "AWD",
  bodyType: "Sedan",
  price: 13500000,
  currency: "USD",
  color: "Black",
  rating: 134,
  image: [car, car2, car3],
  video: "https://youtube.com/car-showcase",
  description: "Luxury sedan with premium features, leather seats, panoramic sunroof, and advanced safety systems.",
  location: "Lagos",
  sellerType: "Dealer",
  contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
  availability: "In stock",
  bestseller: true,
  date: 1716621542448,
  views: 230,
  savedBy: []
},

    {
  _id: "aaaaa",
  name: "Lexus Es 350 Drive Train",
  brand: "Lexus",
  model: "ES 350",
  year: 2023,
  mileage: "15,000 km",
  fuelType: "Petrol",
  transmission: "Automatic",
  engine: "3.0L V6",
  drivetrain: "AWD",
  bodyType: "Sedan",
  price: 9000000,
  currency: "USD",
  color: "Black",
  rating: 134,
  image: [car, car2, car3],
  video: "https://youtube.com/car-showcase",
  description: "Luxury sedan with premium features, leather seats, panoramic sunroof, and advanced safety systems.",
  location: "Lagos",
  sellerType: "Dealer",
  contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
  availability: "In stock",
  bestseller: true,
  date: 1716621542448,
  views: 230,
  savedBy: []
},
  {
  _id: "aaaaa",
  name: "Lexus Rx 350 Drive Train",
  brand: "Lexus",
  model: "Rx 350",
  year: 2023,
  mileage: "15,000 km",
  fuelType: "Petrol",
  transmission: "Automatic",
  engine: "3.0L V6",
  drivetrain: "AWD",
  bodyType: "Sedan",
  price: 34000000,
  currency: "USD",
  color: "Black",
  rating: 134,
  image: [car, car2, car3],
  video: "https://youtube.com/car-showcase",
  description: "Luxury sedan with premium features, leather seats, panoramic sunroof, and advanced safety systems.",
  location: "Lagos",
  sellerType: "Dealer",
  contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
  availability: "In stock",
  bestseller: true,
  date: 1716621542448,
  views: 230,
  savedBy: []
},
  {
  _id: "aaaaa",
  name: "Lexus Es 330 Drive Train",
  brand: "Lexus",
  model: "ES 330",
  year: 2023,
  mileage: "15,000 km",
  fuelType: "Petrol",
  transmission: "Automatic",
  engine: "3.0L V6",
  drivetrain: "AWD",
  bodyType: "Sedan",
  price: 120000,
  currency: "USD",
  color: "Black",
  rating: 134,
  image: [car, car2, car3],
  video: "https://youtube.com/car-showcase",
  description: "Luxury sedan with premium features, leather seats, panoramic sunroof, and advanced safety systems.",
  location: "Lagos",
  sellerType: "Dealer",
  contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
  availability: "In stock",
  bestseller: true,
  date: 1716621542448,
  views: 230,
  savedBy: []
},

    {
  _id: "aaaaa",
  name: "Mercedes Benz S-Class",
  brand: "Mercedes-Benz",
  model: "S-Class",
  year: 2023,
  mileage: "15,000 km",
  fuelType: "Petrol",
  transmission: "Automatic",
  engine: "3.0L V6",
  drivetrain: "AWD",
  bodyType: "Sedan",
  price: 120000,
  currency: "USD",
  color: "Black",
  rating: 134,
  image: [car, car2, car3],
  video: "https://youtube.com/car-showcase",
  description: "Luxury sedan with premium features, leather seats, panoramic sunroof, and advanced safety systems.",
  location: "Lagos",
  sellerType: "Dealer",
  contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
  availability: "In stock",
  bestseller: true,
  date: 1716621542448,
  views: 230,
  savedBy: []
},

    {
  _id: "aaaaa",
  name: "Mercedes Benz S-Class",
  brand: "Mercedes-Benz",
  model: "S-Class",
  year: 2023,
  mileage: "15,000 km",
  fuelType: "Petrol",
  transmission: "Automatic",
  engine: "3.0L V6",
  drivetrain: "AWD",
  bodyType: "Sedan",
  price: 120000,
  currency: "USD",
  color: "Black",
  rating: 134,
  image: [car, car2, car3],
  video: "https://youtube.com/car-showcase",
  description: "Luxury sedan with premium features, leather seats, panoramic sunroof, and advanced safety systems.",
  location: "Lagos",
  sellerType: "Dealer",
  contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
  availability: "In stock",
  bestseller: true,
  date: 1716621542448,
  views: 230,
  savedBy: []
},

    {
  _id: "aaaaa",
  name: "Mercedes Benz AMG",
  brand: "Mercedes-Benz",
  model: "AMG",
  year: 2021,
  mileage: "15,000 km",
  fuelType: "Petrol",
  transmission: "Automatic",
  engine: "3.0L V6",
  drivetrain: "AWD",
  bodyType: "Sedan",
  price: 10000000,
  currency: "USD",
  color: "Black",
  rating: 134,
  image: [car, car2, car3],
  video: "https://youtube.com/car-showcase",
  description: "Luxury sedan with premium features, leather seats, panoramic sunroof, and advanced safety systems.",
  location: "Lagos",
  sellerType: "Dealer",
  contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
  availability: "In stock",
  bestseller: true,
  date: 1716621542448,
  views: 230,
  savedBy: []
},

    {
  _id: "aaaaa",
  name: "Mercedes Benz ABB",
  brand: "Mercedes-Benz",
  model: "C-300",
  year: 2023,
  mileage: "15,000 km",
  fuelType: "Petrol",
  transmission: "Automatic",
  engine: "3.0L V6",
  drivetrain: "AWD",
  bodyType: "Sedan",
  price: 120000,
  currency: "USD",
  color: "Black",
  rating: 134,
  image: [car, car2, car3],
  video: "https://youtube.com/car-showcase",
  description: "Luxury sedan with premium features, leather seats, panoramic sunroof, and advanced safety systems.",
  location: "Lagos",
  sellerType: "Dealer",
  contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
  availability: "In stock",
  bestseller: true,
  date: 1716621542448,
  views: 230,
  savedBy: []
},

    {
  _id: "aaaaa",
  name: "Mercedes Benz S-Class",
  brand: "Mercedes-Benz",
  model: "S-Class",
  year: 2023,
  mileage: "15,000 km",
  fuelType: "Petrol",
  transmission: "Automatic",
  engine: "3.0L V6",
  drivetrain: "AWD",
  bodyType: "Sedan",
  price: 120000,
  currency: "USD",
  color: "Black",
  rating: 134,
  image: [car, car2, car3],
  video: "https://youtube.com/car-showcase",
  description: "Luxury sedan with premium features, leather seats, panoramic sunroof, and advanced safety systems.",
  location: "Lagos",
  sellerType: "Dealer",
  contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
  availability: "In stock",
  bestseller: true,
  date: 1716621542448,
  views: 230,
  savedBy: []
},

    {
  _id: "aaaaa",
  name: "Mercedes Benz S-Class",
  brand: "Mercedes-Benz",
  model: "S-Class",
  year: 2023,
  mileage: "15,000 km",
  fuelType: "Petrol",
  transmission: "Automatic",
  engine: "3.0L V6",
  drivetrain: "AWD",
  bodyType: "Sedan",
  price: 120000,
  currency: "USD",
  color: "Black",
  rating: 134,
  image: [car, car2, car3],
  video: "https://youtube.com/car-showcase",
  description: "Luxury sedan with premium features, leather seats, panoramic sunroof, and advanced safety systems.",
  location: "Lagos",
  sellerType: "Dealer",
  contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
  availability: "In stock",
  bestseller: true,
  date: 1716621542448,
  views: 230,
  savedBy: []
},

    {
  _id: "aaaaa",
  name: "Mercedes Benz S-Class",
  brand: "Mercedes-Benz",
  model: "S-Class",
  year: 2023,
  mileage: "15,000 km",
  fuelType: "Petrol",
  transmission: "Automatic",
  engine: "3.0L V6",
  drivetrain: "AWD",
  bodyType: "Sedan",
  price: 120000,
  currency: "USD",
  color: "Black",
  rating: 134,
  image: [car, car2, car3],
  video: "https://youtube.com/car-showcase",
  description: "Luxury sedan with premium features, leather seats, panoramic sunroof, and advanced safety systems.",
  location: "Lagos",
  sellerType: "Dealer",
  contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
  availability: "In stock",
  bestseller: true,
  date: 1716621542448,
  views: 230,
  savedBy: []
},

    {
  _id: "aaaaa",
  name: "Mercedes Benz S-Class",
  brand: "Mercedes-Benz",
  model: "S-Class",
  year: 2023,
  mileage: "15,000 km",
  fuelType: "Petrol",
  transmission: "Automatic",
  engine: "3.0L V6",
  drivetrain: "AWD",
  bodyType: "Sedan",
  price: 120000,
  currency: "USD",
  color: "Black",
  rating: 134,
  image: [car, car2, car3],
  video: "https://youtube.com/car-showcase",
  description: "Luxury sedan with premium features, leather seats, panoramic sunroof, and advanced safety systems.",
  location: "Lagos",
  sellerType: "Dealer",
  contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
  availability: "In stock",
  bestseller: true,
  date: 1716621542448,
  views: 230,
  savedBy: []
}

]
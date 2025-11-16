// ===================== ASSETS IMPORTS =====================
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
import car2 from './benzinterior.jpg'
import car3 from './carb.jpg'
import car from './front.jpg'
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

// ===================== EXPORT ASSETS =====================
export const assets = {
  whatsapp, menu, cross, likebutton, profile,
  auto, car, car2, car3,
  arrow_icon, pause, play,
  footer, footer2,

  Home, verified, location, about,
  good, house, house2, house3,
  real, star, white_star,
  aboutUs, services, did, privacy, home, phone,
  instagram, facebook, twitter, tiktok,
  exchange_icon, quality_icon, support_img,
  dropdown_icon, search_icon, cross_icon,
  interior, car_header,
  benz, benz1, benz2, benz3, benz4, benz5, benz6, benz7
};


// ===================== PRODUCTS DATA =====================
export const products = [
  {
    _id: "toyota-supra-01",
    name: "Toyota Supra",
    brand: "Toyota",
    model: "LE",
    year: 2013,
    mileage: "15,000 km",
    fuelType: "Petrol",
    transmission: "Automatic",
    engine: "3.0L V6",
    drivetrain: "RWD",
    bodyType: "Coupe",
    price: 30000000,
    currency: "NGN",
    color: "Black",
    rating: 34,
    image: [car, car2, car3],
    video: "https://youtube.com/car-showcase",
    description: "High–performance sports coupe with premium features and advanced engineering.",
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
    _id: "highlander-2010-01",
    name: "Toyota Highlander",
    brand: "Toyota",
    model: "LE",
    year: 2010,
    mileage: "15,000 km",
    fuelType: "Petrol",
    transmission: "Automatic",
    engine: "3.5L V6",
    drivetrain: "AWD",
    bodyType: "SUV",
    price: 9000000,
    currency: "NGN",
    color: "Black",
    rating: 134,
    image: [car2, car3, car],
    video: "https://youtube.com/car-showcase",
    description: "Spacious family SUV with durability, comfort and strong performance.",
    location: "Umuchi, Ihiala Aba",
    sellerType: "Dealer",
    contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
    availability: "In stock",
    bestseller: true,
    date: 1716621542448,
    views: 230,
    savedBy: []
  },

  {
    _id: "toyota-avensis-2009-01",
    name: "Toyota Avensis",
    brand: "Toyota",
    model: "Corolla",
    year: 2009,
    mileage: "15,000 km",
    fuelType: "Petrol",
    transmission: "Automatic",
    engine: "2.4L",
    drivetrain: "FWD",
    bodyType: "Sedan",
    price: 19000000,
    currency: "NGN",
    color: "Black",
    rating: 24,
    image: [car, car2, car3],
    video: "https://youtube.com/car-showcase",
    description: "Reliable sedan with fuel efficiency and premium comfort.",
    location: "Lagos",
    sellerType: "Dealer",
    contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
    availability: "In stock",
    bestseller: false,
    date: 1716621542448,
    views: 230,
    savedBy: []
  },

  // ===================== MERCEDES ML 350 =====================
  {
    _id: "ml350-2015-01",
    name: "Mercedes Benz ML 350",
    brand: "Mercedes-Benz",
    model: "ML 350",
    year: 2015,
    mileage: "12,000 km",
    fuelType: "Petrol",
    transmission: "Automatic",
    engine: "3.0L V6",
    drivetrain: "AWD",
    bodyType: "SUV",
    price: 23500000,
    currency: "NGN",
    color: "Gray",
    rating: 64,
    image: [benz, benz1, benz2, benz3, benz4, benz5, benz6, benz7],
    video: "https://youtube.com/car-showcase",
    description: "Luxury SUV with panoramic sunroof, leather interior and advanced safety tech.",
    location: "Lagos",
    sellerType: "Dealer",
    contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
    availability: "In stock",
    bestseller: true,
    date: 1716621542448,
    views: 230,
    savedBy: []
  },

  // ===================== MERCEDES GLE 450 =====================
  {
    _id: "gle450-2023-01",
    name: "Mercedes Benz GLE 450",
    brand: "Mercedes-Benz",
    model: "GLE 450",
    year: 2023,
    mileage: "15,000 km",
    fuelType: "Petrol",
    transmission: "Automatic",
    engine: "3.0L V6",
    drivetrain: "AWD",
    bodyType: "SUV",
    price: 82200000,
    currency: "NGN",
    color: "Black",
    rating: 94,
    image: [benz, benz1, benz2, benz3],
    video: "https://youtube.com/car-showcase",
    description: "Premium executive SUV with cutting-edge technology and performance.",
    location: "Lagos",
    sellerType: "Dealer",
    contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
    availability: "In stock",
    bestseller: true,
    date: 1716621542448,
    views: 230,
    savedBy: []
  },

  // ===================== HONDA, HYUNDAI, LEXUS & MORE =====================

  {
    _id: "honda-accord-2023-01",
    name: "Honda Accord Revolution",
    brand: "Honda",
    model: "Accord",
    year: 2023,
    mileage: "15,000 km",
    fuelType: "Petrol",
    transmission: "Automatic",
    engine: "2.0L",
    drivetrain: "FWD",
    bodyType: "Sedan",
    price: 12000000,
    currency: "NGN",
    color: "Black",
    rating: 134,
    image: [car3, car2, car],
    video: "https://youtube.com/car-showcase",
    description: "Modern sedan with sleek design and excellent fuel economy.",
    location: "Lagos",
    sellerType: "Dealer",
    contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
    availability: "In stock",
    bestseller: false,
    date: 1716621542448,
    views: 230,
    savedBy: []
  },

  {
    _id: "sonata-2023-01",
    name: "Hyundai Sonata S360",
    brand: "Hyundai",
    model: "Sonata",
    year: 2023,
    mileage: "15,000 km",
    fuelType: "Petrol",
    transmission: "Automatic",
    engine: "2.5L",
    drivetrain: "FWD",
    bodyType: "Sedan",
    price: 13500000,
    currency: "NGN",
    color: "Black",
    rating: 134,
    image: [car, car3, car2],
    video: "https://youtube.com/car-showcase",
    description: "Smooth-driving sedan with premium comfort and safety features.",
    location: "Lagos",
    sellerType: "Dealer",
    contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
    availability: "In stock",
    bestseller: false,
    date: 1716621542448,
    views: 230,
    savedBy: []
  },

  {
    _id: "lexus-es350-2023-01",
    name: "Lexus ES 350 Drive Train",
    brand: "Lexus",
    model: "ES 350",
    year: 2023,
    mileage: "15,000 km",
    fuelType: "Petrol",
    transmission: "Automatic",
    engine: "3.5L V6",
    drivetrain: "FWD",
    bodyType: "Sedan",
    price: 9000000,
    currency: "NGN",
    color: "Black",
    rating: 134,
    image: [car, car2, car3],
    video: "https://youtube.com/car-showcase",
    description: "Elegant premium sedan with world-class comfort.",
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
    _id: "lexus-is350-2013-01",
    name: "Lexus IS 350 Drive Train",
    brand: "Lexus",
    model: "IS 350",
    year: 2023,
    mileage: "45,000 km",
    fuelType: "Petrol",
    transmission: "Automatic",
    engine: "3.5L V6",
    drivetrain: "FWD",
    bodyType: "Sedan",
    price: 12500000,
    currency: "NGN",
    color: "Black",
    rating: 934,
    image: [car, car2, car3],
    video: "https://youtube.com/car-showcase",
    description: "Elegant premium sedan with world-class comfort.",
    location: "Lagos",
    sellerType: "Dealer",
    contactInfo: { phone: "0704-xxxxxxx", email: "dealer@example.com" },
    availability: "In stock",
    bestseller: true,
    date: 1716621542448,
    views: 230,
    savedBy: []
  }
];
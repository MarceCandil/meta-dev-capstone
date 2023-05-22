import LemonDessertImg from 'assets/lemon-dessert.jpg'
import GreekSaladaImg from 'assets/greek-salad.jpg';
import BruchettaImg from 'assets/bruchetta.jpg';

export const SPECIALS = [
  {
    img: GreekSaladaImg,
    title: 'Greek salad',
    price: 12.99,
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    img: BruchettaImg,
    title: 'Bruchetta',
    price: 5.99,
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    img: LemonDessertImg,
    title: 'Lemon Dessert',
    price: 5,
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  }
]

export const NAVIGATION_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#' },
  { name: 'Menu', path: '/menu' },
  { name: 'Reservations', path: '/booking' },
  { name: 'Order Online', path: '/order-online' },
  { name: 'Login', path: '/login' },
]
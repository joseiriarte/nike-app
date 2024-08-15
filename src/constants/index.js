import { facebook, instagram, shieldTick, support, truckFast, twitter } from '../assets/icons';
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from '../assets/images';

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about-us', label: 'About Us' },
  { href: '#products', label: 'Products' },
  { href: '#contact-us', label: 'Contact Us' },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' },
];

export const products = [
  {
    id: 'shoe4',
    imgURL: shoe4,
    name: 'Nike Air Jordan-01',
    price: '$200',
    description:
      'Quicker than 1, 2, 3—the original hoops shoe lets you get going. This version of the Air Jordan 01 features our latest technology for a hands-free experience. The flexible heel collapses when you step in then snaps back into place, making it easy to slip on and off. Add that to its clean, crisp leather and you&#39;ve got ultimate wearability. Yeah, it&#39;s everything you love and then some.',
  },
  {
    id: 'shoe5',
    imgURL: shoe5,
    name: 'Nike Air Jordan-10',
    price: '$210',
    description:
      'Quicker than 1, 2, 3—the original hoops shoe lets you get going. This version of the Air Jordan 10 features our latest technology for a hands-free experience. The flexible heel collapses when you step in then snaps back into place, making it easy to slip on and off. Add that to its clean, crisp leather and you&#39;ve got ultimate wearability. Yeah, it&#39;s everything you love and then some.',
  },
  {
    id: 'shoe6',
    imgURL: shoe6,
    name: 'Nike Air Jordan-100',
    price: '$220',
    description:
      'Quicker than 1, 2, 3—the original hoops shoe lets you get going. This version of the Air Jordan 100 features our latest technology for a hands-free experience. The flexible heel collapses when you step in then snaps back into place, making it easy to slip on and off. Add that to its clean, crisp leather and you&#39;ve got ultimate wearability. Yeah, it&#39;s everything you love and then some.',
  },
  {
    id: 'shoe7',
    imgURL: shoe7,
    name: 'Nike Air Jordan-001',
    price: '$230',
    description:
      'Quicker than 1, 2, 3—the original hoops shoe lets you get going. This version of the Air Jordan 001 features our latest technology for a hands-free experience. The flexible heel collapses when you step in then snaps back into place, making it easy to slip on and off. Add that to its clean, crisp leather and you&#39;ve got ultimate wearability. Yeah, it&#39;s everything you love and then some.',
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: 'Free shipping',
    subtext: 'Enjoy seamless shopping with our complimentary shipping service.',
  },
  {
    imgURL: shieldTick,
    label: 'Secure Payment',
    subtext: 'Experience worry-free transactions with our secure payment options.',
  },
  {
    imgURL: support,
    label: 'Love to help you',
    subtext: 'Our dedicated team is here to assist you every step of the way.',
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Morich Brown',
    rating: 4.5,
    feedback: 'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!',
  },
  {
    imgURL: customer2,
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'Air Force 1', link: '/' },
      { name: 'Air Max 1', link: '/' },
      { name: 'Air Jordan 1', link: '/' },
      { name: 'Air Force 2', link: '/' },
      { name: 'Nike Waffle Racer', link: '/' },
      { name: 'Nike Cortez', link: '/' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'About us', link: '/' },
      { name: 'FAQs', link: '/' },
      { name: 'How it works', link: '/' },
      { name: 'Privacy policy', link: '/' },
      { name: 'Payment policy', link: '/' },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { name: 'customer@nike.com', link: 'mailto:customer@nike.com' },
      { name: '+92554862354', link: 'tel:+92554862354' },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: 'facebook logo' },
  { src: twitter, alt: 'twitter logo' },
  { src: instagram, alt: 'instagram logo' },
];

export const sizes = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5];

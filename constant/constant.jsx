import { FaHome, FaUser, FaAddressBook, FaInfoCircle, FaWheelchair ,FaDove, FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin} from 'react-icons/fa';


export const menuItem = [
    { id: 1, title: "Home", path: "/", icon: <FaHome /> },
    { id: 2, title: "Contact", path: "/contact", icon: <FaUser /> },
    { id: 3, title: "About", path: "/about", icon: <FaAddressBook /> },
    { id: 4, title: "Products", path: "/products", icon: <FaInfoCircle /> },
    { id: 5, title: "Projects", path: "/projects", icon: <FaWheelchair /> },
];

export const categoryList = [
    { id: 1, title: "Beauty", icon: <FaDove />, rank: 12 },
    { id: 2, title: "Business", icon: <FaDove />, rank: 17 },
    { id: 3, title: "Fashion", icon: <FaDove />, rank: 11 },
    { id: 4, title: "Nature", icon: <FaDove />, rank: 9 },
    { id: 1, title: "Technology", icon: <FaDove />, rank: 6 },
    { id: 1, title: "Sports", icon: <FaDove />, rank: 10 },
  ];
  
  export const socialPluggin = [
    {id:1,icon:<FaFacebook />},
    {id:2,icon:<FaWhatsapp />},
    {id:3,icon:<FaInstagram />},
    {id:4,icon:<FaLinkedin />},
    
  ]
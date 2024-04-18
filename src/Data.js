import menuImage1 from "./assets/images/menu1 (1).jpeg";
import menuImage2 from "./assets/images/menu2.jpg";
import menuImage3 from "./assets/images/menu3.webp";
import menuImage4 from "./assets/images/menu4.jpg";
import menuImage5 from "./assets/images/menu5.webp";
import menuImage6 from "./assets/images/menu6.webp";
import cartImage1 from "./assets/images/chicken-chanzi.webp";
import cartImage2 from "./assets/images/cart2.jpeg";
import cartImage3 from "./assets/images/QT-Gujarat.jpg";
import cartImage4 from "./assets/images/menu4.jpg";
import productImage1 from "./assets/images/chicken-chanzi.webp";
import productImage2 from "./assets/images/images.jpg";
import productImage3 from "./assets/images/menu6.webp";
import reviewImage1 from "./assets/images/lok-sabha-polls-congress-demand.webp";
import reviewImage2 from "./assets/images/QT-Gujarat.jpg";
import reviewImage3 from "./assets/images/abc.webp";
import blogImage1 from "./assets/images/chicken-chanzi.webp";
import blogImage2 from "./assets/images/images.jpeg";
import blogImage3 from "./assets/images/images.jpeg";
import { text } from "@fortawesome/fontawesome-svg-core";
import { title } from "process";


const menu = [
  {
    img: menuImage1,
  },
  {
    img: menuImage2,
  },
  {
    img: menuImage3,
  },
  {
    img: menuImage4,
  },
  {
    img: menuImage5,
  },
  {
    img: menuImage6,
  },
];

const cart = [
  {
    img: cartImage1,
  },
  {
    img: cartImage2,
  },
  {
    img: cartImage3,
  },
  {
    img: cartImage4,
  },
];

const product = [
  {
    img: productImage1,
    price:200,
    discountedPrice:150,
    description:"dnchjvdsgbvjhsdbvjlidfnijdvijdfvbjidbvdhvisdfv     nfdjnvjksfnk dfnvjsfnjfs jfjnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"

  },
  {
    img: productImage2,
    price:204,
    discountedPrice:120,
    description:"dnchjvdsgbvjhsdbvjlidfnijdvijdfvbjidbvdhvisdfv     nfdjnvjksfnk dfnvjsfnjfs jfjnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"

  },
  {
    img: productImage3,
    price:250,
    discountedPrice:200,
    description:"dnchjvdsgbvjhsdbvjlidfnijdvijdfvbjidbvdhvisdfv     nfdjnvjksfnk dfnvjsfnjfs jfjnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"
  },
];
const review = [
  {
    img: reviewImage1, 
    text : "fresh and tasty 100%",
    title:"AIMIM Owasi"
  },
  {
    img: reviewImage2,
    text:"made by blossoming aroma",
    title:"congress spokesperson"

  },
  {
    img: reviewImage3,
    text:"first try then buy",
    title:"BJP",

  },
];
const blog = [
  {
    img: blogImage1,
  },
  {
    img: blogImage2,
  },
  {
    img: blogImage3,
  },
];
export { menu, cart, product, review, blog };

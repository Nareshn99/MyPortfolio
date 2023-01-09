import pro1 from "../assets/ecom2.jpeg"
import pro2 from "../assets/sort.jpeg"
import pro3 from "../assets/blog.webp"
import pro4 from "../assets/book.jpeg"
import pro5 from "../assets/int.jpeg"
import "./WorkCard.css"

const ProjectData = [
    {
        imgsrc: pro1,
        title: "E-Commerce Website",
        text:"Role: Backend Developer, Tech Stack: JavaScript, Node,MongoDB. Created an eCommerce website’s backend partwith multiple APIs based on products, users, carts and orders. Here use JWT authentication for protected APIs and also use AWS. Like Amazon and Flipkart etc.",
        view: "https://github.com/Nareshn99/Project-5"
    },
    {
        imgsrc: pro2,
        title: "URL Shortener",
        text:"Role: Backend Developer, Tech Stack: JavaScript, Node,MongoDB. In this project we use Redis & to shorten a long URL to a short URL. Like Bitly and TinyURL etc.",
        view: "https://github.com/Nareshn99/Project-4-url_shortner"
    },
    {
        imgsrc: pro3,
        title: "Blogging Site",
        text:"Role: Backend Developer, Tech Stack: JavaScript, Node,MongoDB. Create a blog website where users can write some blogs and other users can see this blog. Here use JWT authentication for protected APIs. Like One Magazine and URBAN BEARDSMAN",
        view: "https://github.com/Nareshn99/Project1"
    },
    {
        imgsrc: pro4,
        title: "Book Management System",
        text:"Role: Backend Developer, Tech Stack: JavaScript, Node,MongoDB. Create book website where author can write some books and users can buy this book. Here use JWT authentication for protected APIs. Like Kindle.",
        view: "https://github.com/Nareshn99/Project-3-Books-Management"
    },
    {
        imgsrc: pro5,
        title: "Internship Program",
        text:"Role: Backend Developer, Tech Stack: JavaScript, Node,MongoDB. Create college website where student can do internship. Created an internship website backend for college with multiple APIs for college and interns. Create an AWS S3 logo link for college.",
        view: "https://github.com/Nareshn99/Project-2"
    }
]

export default ProjectData

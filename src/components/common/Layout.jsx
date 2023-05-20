import GotoTop from "../GotoTop/GotoTop";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

const menuItem = [
  {
    destination: "/",
    text: "Home",
  },
  {
    destination: "/courses",
    text: "Courses",
  },
  {
    destination: "/blog",
    text: "News and Blogs",
  },
  {
    destination: "/about",
    text: "About Us",
  },
  {
    destination: "/contact",
    text: "Contact Us",
  },
];


export default function Layout({ children }) {
  return (
    <div>
      <Nav  menuItem={menuItem}/>
      <main>{children}</main>
      <GotoTop/>
      <Footer />
    </div>
  );
}

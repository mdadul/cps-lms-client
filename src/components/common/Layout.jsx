import { Footer } from "./Footer";
import { Nav } from "./Nav";

export default function Layout({ children }) {
  return (
    <div>
      {/* <NewCourse /> */}
      <Nav />

    
      <main>{children}</main>
      <Footer />
    </div>
  );
}

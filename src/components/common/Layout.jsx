import GotoTop from "../GotoTop/GotoTop";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export default function Layout({ children }) {
  return (
    <div>
      <Nav/>
      <main>{children}</main>
      <GotoTop/>
      <Footer />
    </div>
  );
}

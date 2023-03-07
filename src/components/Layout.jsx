import { Footer } from "./Footer";
import { Nav } from "./Nav";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        {children}
      </div>
      <Footer />
    </div>
  );
}

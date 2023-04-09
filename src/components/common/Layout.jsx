import { Footer } from "./Footer";
import { Nav } from "./Nav";

export default function Layout({ children }) {
  return (
    <div>
      {/* <NewCourse /> */}
      <Nav />

      {/* New Course Advertisement Starts Here... */}
      {/* <div class="mx-auto max-w-lg px-4 py-5 lg:max-w-screen-lg bg-blue-700 rounded-full">
        <div class="mb-0 bg-blue-600 rounded-full">
          <div class="mb-0 text-3xl text-yellow-50 text-center font-medium leading-normal sm:text-4xl sm:leading-relaxed"><a href="https://docs.google.com/document/d/1c-QCfeBi3PuFTndAzkMdRETCaBkvpBgn0h1q4RehOyM/edit?usp=sharing" target="_blank" rel="noreferrer">Introducing Our New Course: <span class="rounded-full bg-blue-500 px-3 py-0.5 text-white">Web Design- Batch-01</span></a></div>
        </div></div> */}
      {/* New Course Advertisement Ends Here... */}

      <main>{children}</main>
      <Footer />
    </div>
  );
}

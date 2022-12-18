import Footer from "./components/Footer";
import MyProjects from "./components/MyProjects";
import Header from "./components/Header";
import MyExperties from "./components/MyExperties";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <MyExperties />
        <AboutMe />
        <MyProjects />
      </main>
      <footer className="bg-exDark ">
        <Footer />
      </footer>
    </>
  );
}

export default App;

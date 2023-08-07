import Nav from "./layouts/navbar";
import "./App.css";
import Hero from "./component/hero";
import Footer from "./layouts/footer";
import Content from "./component/content";
import Tools from "./component/tools";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <div>
        <Hero />
        <Content />
        <Tools />
      </div>
      <Footer />
    </>
  );
}

export default App;

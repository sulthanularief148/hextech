import { BrowserRouter } from "react-router-dom";
import { Header, About, Services, Contact, Footer, Navbar } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0">
          <Navbar />
          <Header />
          <div className="section-container">
            <About />
          </div>
          <div className="section-container">
            <Services />
          </div>
          <div className="section-container">
            <Contact />
          </div>
          <div className="section-container">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

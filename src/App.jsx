import { BrowserRouter } from "react-router-dom";
import ConfigRoutes from "./RoutesConfig"
import Header from "./components/Header";
import Footer from "./components/Footer"; 

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
            <ConfigRoutes/>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
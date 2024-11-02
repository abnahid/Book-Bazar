import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <div className="container mx-auto max-w-7xl font-Worsens">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;

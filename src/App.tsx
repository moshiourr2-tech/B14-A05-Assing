import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Technology from "./components/Technologies";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return <>
  
 <Nav></Nav>
 <Banner></Banner>
 <Technology></Technology>
 <Footer></Footer>
  

  <ToastContainer
     position="top-right"
     autoClose={2500}
     hideProgressBar ={false}
     newestOnTop
     closeOnClick
     pauseOnHover
     theme="light"></ToastContainer>
  </>;
}

export default App;

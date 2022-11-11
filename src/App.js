import KitchenSection from './Components/kitchenSection';
import Landing from './Components/landing';
import Service from './Components/service';
import Contact from './Components/contact';
import Footer from './Components/footer';
// import AddedCartItem from './Components/addedCartItem';
// import NavBar from './Components/navBar';
// import NavLinks from './Components/navLinks';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App(){
    return <div>
        
           <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing/>} exact />
                    <Route path="/kitchenSection" element={<KitchenSection/>} exact />
                    <Route path="/service" element={<Service/>} exact />
                    <Route path="/contact" element={<Contact/>} exact />
                </Routes>
                <Landing />
                <KitchenSection />
                <Service />
                <Contact />
                <Footer />
           </BrowserRouter>
        </div>;
    
}

export default App;
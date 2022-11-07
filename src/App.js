import KitchenSection from './Components/kitchenSection';
import Landing from './Components/landing';
import Service from './Components/service';
import Contact from './Components/contact';
import Footer from './Components/footer';
import AddedCartItem from './Components/addedCartItem';
// import NavBar from './Components/navBar';
// import NavLinks from './Components/navLinks';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App(){
    return <div>
        
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/kitchenSection" element={<KitchenSection />} />
                    <Route path='/service' element={<Service />} />
                    <Route path='/contact' element={<Contact />} />
                
                </Routes>
            </BrowserRouter>
        
            {/* <NavBar /> */}
            {/* <Landing /> */}
            <KitchenSection />
            <Service />
            <Contact />
            <Footer />
            {/* <AddedCartItem /> */}
        </div>;
    
}

export default App;
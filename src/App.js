import React from 'react';
import Collections from "./components/collections/Collections";
import './components/popular/app.css'
import Mission from "./components/mission/Mission";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Featured from "./components/featured/Featured";
import Popular from "./components/popular/Popular";

const App = () => {
    return (
        <div>
            <Navbar />
            <Mission />
            <Popular />
            <Featured />
            <Collections/>
            <Footer />
        </div>
    );
};


export default App;

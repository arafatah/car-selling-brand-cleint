import Footer from "../../../Shared/Footer";
import Banner from "../../Banner/Banner";
import Brands from "../../Brands/Brands";
import HeroSection from "../../HeroSection/HeroSection";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Brands></Brands>
            <HeroSection></HeroSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;
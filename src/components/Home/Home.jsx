
import Header from "../Header/Header";
import bg from "../../assets/bg_3.jpg";
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import People from "./People";
import TopSports from "./TopSports";

function Home() {
  return (
    <>
      {/* Navbar/Header - Fixed at the top */}
      <div className="fixed w-full top-0 z-50">
        <Header />
      </div>

      {/* Main Content */}
      <div
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Overlay for brightness */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-8 lg:px-16 ">
          <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold leading-tight mb-4 drop-shadow-lg">
            Welcome to <br /> Aspire Sports Club
          </h1>
          <p className="text-white text-lg md:text-xl lg:text-2xl font-medium mb-4 drop-shadow-md">
            We help to Grow, Build, and Make
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center my-4 md:my-6">
            <a href="#" className="text-3xl md:text-4xl text-pink-100 px-2 md:px-3">
              <FaInstagram />
            </a>
            <a href="#" className="text-3xl md:text-4xl text-blue-100 px-2 md:px-3">
              <FaFacebookSquare />
            </a>
            <a href="#" className="text-3xl md:text-4xl text-blue-100 px-2 md:px-3">
              <FaTwitter />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-row items-center justify-center space-x-4">
            <button className="bg-transparent border-2 border-white hover:bg-blue-600 text-white font-bold px-6 py-3">
              Join Us
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-blue-600 text-white font-bold px-6 py-3">
              Know More
            </button>
          </div>
        </div>
      </div>

      {/* People Section */}
      <div className="bg-white w-full py-16 px-6 md:px-8 lg:px-16">
         <People/>
      </div>

      {/* People Section */}
      <div className="bg-white w-full py-16 px-6 md:px-8 lg:px-16">
         <TopSports/>
      </div>
    </>
  );
}

export default Home;

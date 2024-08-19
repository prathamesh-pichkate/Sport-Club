

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <a href="#" className="text-2xl font-bold text-white">
            Aspire Sports Club
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row md:space-x-6">
          <a href="#home" className="text-white hover:text-gray-400 mb-2 md:mb-0">
            Home
          </a>
          <a href="#sports" className="text-white hover:text-gray-400 mb-2 md:mb-0">
            Sports
          </a>
          <a href="#membership" className="text-white hover:text-gray-400 mb-2 md:mb-0">
            Membership
          </a>
          <a href="#features" className="text-white hover:text-gray-400 mb-2 md:mb-0">
            Features
          </a>
          <a href="#contact" className="text-white hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6">
        <p className="text-gray-500">
          © 2024 Aspire Sports Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Box, styled } from "@mui/material";
import Slider from "react-slick";


// Replace this import with the actual path to your splash logo image
import splashLogo from "../assets/img/IMG_7633.png";

// Replace these imports with the actual paths to your photos
import photo1 from "../assets/img/pexels-teddy-yang-2263436.jpg";
import photo2 from "../assets/img/pexels-sebastian-ervi-1763075.jpg";
import photo3 from "../assets/img/pexels-pixabay-433452.jpg";
import photo4 from "../assets/img/pexels-josh-sorenson-976866.jpg";
import photo5 from "../assets/img/pexels-hygor-sakai-2311713.jpg";
import photo6 from "../assets/img/pexels-annam-w-1120162.jpg";
import photo7 from "../assets/img/pexels-alex-andrews-1983046.jpg";
import photo8 from "../assets/img/pexels-abet-llacer-919734.jpg";

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
};

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];

const Dashboard: React.FC = () => {
  return (
    <div>
      {/* Dashboard */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "linear-gradient(to right, #C3EDC0, #FAE392)",
        }}
      >
        {/* Left Circle */}
        <Box
          sx={{
            position: "absolute",
            top: 10,
            left: 5,
            width: "50px",
            height: "50px",
            backgroundColor: "#749BC2",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Bk
        </Box>

        {/* Right Circle */}
        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 5,
            width: "50px",
            height: "50px",
            backgroundColor: "#749BC2",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          N
        </Box>

        {/* Dashboard Box */}
        <Box
          sx={{
            backgroundImage: "linear-gradient(to right, #C3EDC0, #FAE392)",
            backgroundColor: "#ECF8F9",
            padding: "5px",
            textAlign: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            
          }}
        >
          <h2>DashBoard</h2>
        </Box>
      </Box>


      {/* Add the Splash Logo */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <img
          alt="Splash Logo"
          src={splashLogo.src}
          style={{ width: "25rem", height: "10rem", borderRadius: "10px" }}
        />
      </Box>

      {/* Box with photos in sliding carousel */}
      <Box
        className="slick-carousel"
        sx={{
          backgroundColor: "#ECF8F9",
          padding: "30px",
          textAlign: "center",
          margin: "50px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <Slider {...carouselSettings}>
          {photos.map((photo, index) => (
            <div key={index}>
              <img src={photo.toString()} alt={`Photo ${index + 1}`} style={{ width: "100%",maxWidth: "100%" }} />
            </div>
          ))}
        </Slider>
      </Box>

      {/* Four rows and two columns */}
      <Box
        className="grid-box"
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "50px",
          margin: "50px",
        }}
      >
        {/* First row */}
        <Box
          sx={{
            backgroundColor: "#8696FE",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
          
        >
          { <h2>Gaurdian Members</h2 >}
        </Box>
        <Box
          sx={{
            backgroundColor: "#8696FE",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
        >
                    { <h2>Regular Members</h2 >}
        </Box>

        {/* Second row */}
        <Box
          sx={{
            backgroundColor: "#8696FE",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            
          }}
        >
          {<h2>Business Members</h2 >}
        </Box>
        
        <Box
        
          sx={{
            backgroundColor: "#8696FE",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
        >
          {<h2>Social Activities</h2 >}
        </Box>
        {/* Third row */}
        <Box
          sx={{
            backgroundColor: "#8696FE",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
        >
          {<h2>Working Commities</h2 >}
          {/* Content for the third box */}
        </Box>
        <Box
          sx={{
            backgroundColor: "#8696FE",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
        >
          {<h2>Club Opportunities</h2 >}
        </Box>
        {/* fourth row */}
        <Box
          sx={{
            backgroundColor: "#8696FE",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
        >
          {<h2>News & Events</h2 >}
        </Box>
        <Box
          sx={{
            backgroundColor: "#8696FE",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
        >
          {<h2>Club Offers</h2 >}
        </Box>
      </Box>

      {/* Advert Image Banner */}
      <Box
        className="banner-box"
        sx={{
          backgroundColor: "#ECF8F9",
          padding: "50px",
          textAlign: "center",
          margin:"50px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        {<h2>Advert Image Banner</h2 >}
      </Box>

      {/* Advert Videos */}
      <Box
        className="video-box"
        sx={{
          backgroundColor: "#ECF8F9",
          padding: "50px",
          textAlign: "center",
          margin: "50px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >   {<h2>Advert Videos</h2 >}
      </Box>

      {/* Footer Banner */}
      <Box
        className="footer-box"
        sx={{
          backgroundColor: "#8696FE",
          textAlign: "center",
          bottom: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {/* Home Option */}
        <Box>
          <h3>Home</h3>
        </Box>

        {/* Register Option */}
        <Box>
          <h3>Register</h3>
        </Box>

        {/* Login Option */}
        <Box>
          <h3>Login</h3>
        </Box>

        {/* More Option */}
        <Box>
          <h3>More</h3>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
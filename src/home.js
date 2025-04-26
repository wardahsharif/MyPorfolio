import React , { useEffect } from 'react';
import Navbar from './navbar';
import "./App.css";

const Home = () => {

    useEffect(() => {
        const canvas = document.getElementById('codeRain');
        const ctx = canvas.getContext('2d');
    
        // Make canvas full screen
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
    
        const letters = "01<>/&|$".split(""); 
        const fontSize = 14;
        const columns = canvas.width / fontSize; 
        const drops = Array(Math.floor(columns)).fill(1);
    
        function draw() {
          ctx.fillStyle = "rgba(10, 9, 9, 0.05)";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
    
          ctx.fillStyle = "#a29bfe"; // Light purple color
          ctx.font = fontSize + "px monospace";
    
          for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
              drops[i] = 0;
            }
            drops[i]++;
          }
        }
    
        const interval = setInterval(draw, 33);
    
        return () => clearInterval(interval);
      }, []);
    



  return (
    <div className="home-bg">  

      <Navbar/>
      
      <canvas id="codeRain"></canvas>
      
      <section class="home" id="home">
      <div className="home-section">
        <div className="home-content">
          <div className="text">
            <div className="text-one">Hello, my name is {' '}  </div>
           
            <div className="text-three ">
              <span className=" glow-text" style={{ color: "rgb(200, 132, 241)" }}>&lt;</span>
                  Wardah Sharif
                 <span className=" glow-text" style={{ color: "rgb(200, 132, 241)" }}>/&gt;</span>
                 </div>

            <div className="text-two">I'm am a<span style={{ color: "rgb(173, 113, 237)" }}></span></div>
            <div className="text-four">From Sweden</div>
            <div className="button ">
            <a >
              <button class=" contact-btn">Contact Me</button>
            </a>
          </div>
          </div>
        
        </div>
      </div>

      </section>


    </div>
  )
}

export default Home;

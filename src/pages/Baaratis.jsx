import React from "react";
import BaraatisCarousel from "../components/BaraatisCarousel.jsx";

export default function Baaratis() {
  return (
    <div className="baaratis-root">
      <style>{`
        :root {
          --font-josefin: "Josefin Sans", ui-sans-serif, system-ui, -apple-system,
            "Segoe UI", Roboto;
          --font-bodoni: "Bodoni Moda", serif;
          --font-roboto: "Roboto", sans-serif;
        }

        .baaratis-root {
          font-family: var(--font-josefin);
          margin: 0;
          background: #cb94c8;
          color: #222;
          text-align: center;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          overflow-y: auto;
          padding: 72px 0; /* account for fixed navbar */
        }

        header { margin: 0 0 0.5rem; }

        #baaratis-header img {
          width: 360px;
          height: auto;
          max-width: 90%;
        }

        .title-group {
          position: relative;
          display: inline-block;
          text-align: center;
          line-height: 0.85;
          margin-top: 0.25rem;
        }

        .luxury {
          font-family: var(--font-bodoni);
          font-style: italic;
          font-size: 7rem;
          font-weight: 600;
          position: relative;
          left: -25px;
          color: white;
        }

        .on {
          font-family: var(--font-bodoni);
          font-style: italic;
          font-size: 2rem;
          position: absolute;
          top: 25%;
          left: 100%;
          transform: translate(-50%, -50%);
          font-weight: 500;
          color: #4b1f37;
        }

        .wheels {
          font-family: var(--font-bodoni);
          font-style: italic;
          font-size: 7rem;
          font-weight: 600;
          position: relative;
          right: -25px;
          margin-top: -0.5rem;
          color: white;
        }

        .tagline {
          font-family: var(--font-roboto);
          font-size: 1.5rem;
          font-weight: 400;
          margin-top: 1rem;
          color: #3b2335;
        }

        .quote-section {
          margin: 2rem auto 4rem;
          max-width: 1000px;
          text-align: left;
          padding: 0 2rem;
        }

        /* centered main quote */
        .main-quote {
          font-family: var(--font-bodoni);
          font-style: italic;
          font-size: 3.2rem;
          line-height: 1.05;
          color: #4b1f37;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
          text-align: center;
        }

        .content-text {
          font-family: var(--font-roboto);
          font-size: 1.15rem;
          line-height: 1.8;
          color: #3b2335;
          margin-bottom: 1.25rem;
        }

        .vehicle-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2.5rem;
        }

        .vehicle-category {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-family: var(--font-josefin);
          font-size: 1.3rem;
          color: #4b1f37;
        }

        .check-icon {
          color: #5e2f45;
          font-size: 1.6rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: 2px solid rgba(94,47,69,0.12);
          background: rgba(255,255,255,0.02);
        }

        /* larger cards with image thumbnail that appears to come out of the top */
        .vehicles-special {
          margin-top: 3rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 1.25rem;
          align-items: start;
          width: 100%;
        }

        .vehicle-card {
          position: relative;
          background: rgba(255, 255, 255, 0.06);
          padding: 1.6rem;
          border-radius: 1rem;
          backdrop-filter: blur(8px);
          overflow: visible; /* allow thumb to visually come out */
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          min-height: 170px;
          min-width: 0; /* avoid overflow in flex/grid */
        }

        /* thumbnail that visually "comes out" from top but stays within card width */
        .vehicle-card .thumb {
          width: 200px;
          flex: 0 0 200px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(0,0,0,0.18);
          transform: translateY(-30px); /* lifted look */
          background: #fff;
        }

        .vehicle-card .thumb img {
          display: block;
          width: 100%;
          height: auto;
        }

        .vehicle-card .card-content {
          flex: 1;
          padding-top: 6px;
        }

        .vehicle-title {
          font-family: var(--font-bodoni);
          font-style: italic;
          font-size: 1.6rem;
          color: #4b1f37;
          margin-bottom: 0.3rem;
        }

        .vehicle-subtitle {
          font-family: var(--font-roboto);
          color: #3b2335;
          font-size: 1.05rem;
          margin-bottom: 0.6rem;
        }

        .vehicle-subtext {
          font-family: var(--font-roboto);
          color: rgba(59,35,53,0.95);
          font-size: 0.98rem;
          line-height: 1.5;
        }

        /* Responsive: stack image above text on narrow screens */
        @media (max-width: 768px) {
          .baaratis-root { padding-top: 60px; }
          #baaratis-header img { width: 120px; }
          .luxury, .wheels { font-size: 4.5rem; }
          .on { font-size: 1.3rem; }
          .tagline { font-size: 1.1rem; }
          .main-quote { font-size: 2rem; }

          .vehicles-special {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .vehicle-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
            min-height: auto;
            padding: 1rem;
          }

          .vehicle-card .thumb {
            width: 80%;
            flex: 0 0 auto;
            transform: translateY(-18px);
            border-radius: 10px;
          }

          .vehicle-card .card-content {
            padding-top: 10px;
          }
        }

        @media (max-width: 1024px) {
          #baaratis-header img { width: 300px; }
          .vehicle-card { padding: 1.25rem; }
          .vehicle-card .thumb { width: 160px; transform: translateY(-22px); }
        }

        
      `}</style>

      <header id="baaratis-header">
        <img src="/Baraatis.svg" alt="Baraatis Logo" />
      </header>

      <div className="title-group">
        <div className="luxury">Luxury</div>
        <div className="on">on</div>
        <div className="wheels">Wheels</div>
      </div>
      <div className="tagline">for Your Big Days.</div>

      {/* New content section */}
      <div className="quote-section">
        <h1 className="main-quote">
          "Baraati ke toh alag he nakhre<br />
          uthane padte hain"
        </h1>

        <p className="content-text">
          We know what you mean. But Shaadi ka Siyaapa is not a challenge with Shifting
          Gears. Chacha Ji ko yaha se pick up karna hain, Dulhan ke outfit trials
          OR last minute shopping ke chakkar everything can be sorted out.
        </p>

        <p className="content-text">
          You can book a fleet of cars with us. What would you like your Baraati's
          to hail in?
        </p>

        <div className="vehicle-grid">
          <div className="vehicle-category">
            <span className="check-icon">✓</span>
            <span>Carnivals</span>
          </div>
          <div className="vehicle-category">
            <span className="check-icon">✓</span>
            <span>Innovas</span>
          </div>
          <div className="vehicle-category">
            <span className="check-icon">✓</span>
            <span>Fortuners</span>
          </div>
          <div className="vehicle-category">
            <span className="check-icon">✓</span>
            <span>XUV 500s</span>
          </div>
          <div className="vehicle-category">
            <span className="check-icon">✓</span>
            <span>7-seaters</span>
          </div>
          <div className="vehicle-category">
            <span className="check-icon">✓</span>
            <span>Sedan & hatchbacks</span>
          </div>
        </div>

        <div className="vehicles-special">
          <div className="vehicle-card">
            <div className="thumb">
              <img src="/baratees/RoyalEnfield.webp" alt="Royal Enfield" />
            </div>
            <div className="card-content">
              <h3 className="vehicle-title">Bunty aur Babli</h3>
              <p className="vehicle-subtitle">Royal Enfield</p>
              <p className="vehicle-subtext">
                Zindagi ek safar hain suhana — aaj tujhe iss Royal Enfield pe bithake
                le jaana.
              </p>
            </div>
          </div>

          <div className="vehicle-card">
            <div className="thumb">
              <img src="/baratees/DucatiMonster.webp" alt="Ducati Monster" />
            </div>
            <div className="card-content">
              <h3 className="vehicle-title">Jai Veeru</h3>
              <p className="vehicle-subtitle">Ducati Monster</p>
              <p className="vehicle-subtext">
                Jai Veeru style — full-on speed and attitude for the baraatis.
              </p>
            </div>
          </div>

          <div className="vehicle-card">
            <div className="thumb">
              <img src="/baratees/AutoRickshaw.webp" alt="Auto Rickshaw" />
            </div>
            <div className="card-content">
              <h3 className="vehicle-title">Banno ka Swagger</h3>
              <p className="vehicle-subtitle">Auto Rickshaw</p>
              <p className="vehicle-subtext">
                Street-style entry — compact, colourful and full of attitude.
              </p>
            </div>
          </div>

          <div className="vehicle-card">
            <div className="thumb">
              <img src="/baratees/Tractor.webp" alt="Tractor" />
            </div>
            <div className="card-content">
              <h3 className="vehicle-title">Band Baaja Baraat</h3>
              <p className="vehicle-subtitle">Tractor</p>
              <p className="vehicle-subtext">
                Rustic grand entry — perfect for a memorable, loud baraat.
              </p>
            </div>
          </div>
        </div>

        <p className="content-text" style={{ marginTop: "2rem" }}>
          We've got a ride for everyone to make a Dhamakedaar entry.
          For that Dulha's swag, And Baraati ke Nakhre.
        </p>
        
      </div>
      <BaraatisCarousel />
    </div>
  );
}
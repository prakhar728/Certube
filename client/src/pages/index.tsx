import React from 'react';

const Index = () => {

  return (
    <React.Fragment>
      <main>
        <header id='home'>
          <div className="logo"><img  src={'./Logo.png'}/></div>
          <ul className="flex gap-8 justify-center items-center px-6">
            <a href="#home">Home</a>  
            <a href="#why-us">Why us?</a>  
            <a href="#features">Features</a>  
            <a href="https://github.com/prakhar728/NodeZilla">About</a>  
          </ul>
        </header>
        <section>
          <div className="hero-container">
            <h1>Certify Your Learning Journey.</h1>
            <p>Transform your video binging into a journey of learning and achievement with Certube. Showcase your newfound knowledge on your resume and stand out from the crowd!</p>
            <div className="btn-container">
              <button className="btn-primary"><a href="/app">Go to app</a></button>
              <button className="btn-secondary"><a href="https://nodezilla.onrender.com/docs">Explore API</a></button>
            </div>
          </div>
        </section>
      </main>

      <article className="cards-section" id="why-us">
        <h1>Why Certube?</h1>
        <div className="card-container">
          <div className="card">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fff" fill="none"><path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <h4>Saves Time</h4>
            <p>Fetch historic data with us, stop wrorying about setting up and using a Database. Subscribe to changes</p>
          </div>
          <div className="card">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fff" fill="none"><path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <h4>Easy to understand vizualization</h4>
            <p>We spent time working on the interface so you don&apos;t have to spend time understanding the numbers</p>
          </div>
          <div className="card">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fff" fill="none"><path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <h4>Easy Notification</h4>
            <p>Get notified if your favourite node goes down, has a change in it&apos;s value or changes their metadat</p>
          </div>
        </div>
      </article>
      
      <article className="features" id="features">
        <div className="feature-wrapper">
          <div className="feature-info">
            <h2>1. Certified Playlists</h2>
            <p>Transform YouTube playlists into accredited courses that grant blockchain-based certificates, enabling creators to provide recognized educational value to their viewers.</p>
          </div>
          <div className="feature-img"><img src={'./Landing_certificate.svg'} /></div>
        </div>

        <div className="feature-wrapper">
          <div className="feature-info">
            <h2>2. Interactive Learning</h2>
            <p>Leverage advanced interactive tools and community-driven discussions to enhance the learning experience, ensuring that engagement and retention are maximized across diverse subject matter.</p>
            {/* <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            </ul> */}
          </div>
          <div className="feature-img"><img src={'./Landing_learning.svg'} /></div>
        </div>

        <div className="feature-wrapper">
          <div className="feature-info">
            <h2>3. Dynamic Marketplace</h2>
            <p>Access a robust platform for trading educational content, where every transaction is secured and enhanced through blockchain technology, contributing to a vibrant ecosystem of educational exchange.</p>
            
          </div>
          <div className="feature-img"><img src={'./Landing_marketplace.svg'} /></div>
        </div>
      </article>

      <footer>
        <div className="logo"><img  src={'./Logo.png'}/></div>
        <ul className="flex gap-8 justify-center items-center px-6">
          <a href="https://www.google.com">Solutions</a>  
          <a href="https://www.google.com">Developers</a>  
          <a href="https://www.google.com">Ecosystem</a>  
          <a href="https://www.google.com">Blogs</a>  
          <a href="https://www.google.com">About</a>  
        </ul>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

        *{
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          border:0;
          outline:0;
          font-size:100%;
          vertical-align:baseline;
          font-family: "IBM Plex Sans", sans-serif;
        }
        html { 
          -webkit-font-smoothing: antialiased; 
          overflow-y: scroll;
        }

        body::-webkit-scrollbar { 
          display: none 
        }

        ul { 
          list-style: none;
          color: white;
        }

        img { 
          width: 100%; 
        }

        label, input[type=button], input[type=submit], button { 
          cursor: pointer; 
        }

        a {
          color: azure;
          text-decoration: none;
        }


        main {
          height: 100vh;
          width: 100vw;
          color: azure;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
          
          background-image: url('https://i.ibb.co/swngg4j/Group-237.png');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 32px;
        }
        header .logo {
          height: 100px;
          width: 100px;
          border-radius: 8px;
          overflow: hidden;
        }
        .logo img {
          width: 100%;
          height: 100%;
        }
        header ul {
          display: flex;
          gap: 32px;
        }

        section {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80%;
          text-align: center;
        }
        section .hero-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 24px;
          max-width: 800px;
        }
        section .hero-container h1 {
          font-size: 52px;
          font-family: "Merriweather", serif;
          font-weight: 600;
        }
        section .hero-container p {
          font-size: 24px;
        }
        section .hero-container .btn-container {
          padding-top: 16px;
          display: flex;
          gap: 16px;
        }
        section .hero-container .btn-container .btn-primary{
          color: black;
          font-weight: 500;
          border: azure 1px solid;
          border-radius: 16px;
          padding: 16px 24px;
        }
        section .hero-container .btn-container .btn-secondary{
          color: azure;
          font-weight: 500;
          border: azure 1px solid;
          border-radius: 16px;
          background: transparent;
          padding: 16px 24px;
        }
        section .hero-container .label {
          margin-top: 32px;
          padding: 24px 48px;
          border-radius: 24px;
          background-color: rgba(255,255,255, 0.1);
          backdrop-filter: blur(16px);
        }
        section .hero-container .label p {
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          padding-bottom: 16px;
        }
        section .hero-container .label h2 {
          font-size: 48px;
          font-weight: 600;
        }
        section a{
          color:inherit;
          text-decoration: none;
        }

        article { background-color: #131313; }

        article.cards-section {
          padding: 100px 0;
        }
        article.cards-section h1 {
          font-size: 48px;
          font-family: "Merriweather", serif;
          font-weight: 600;
          text-align: center;
          color: azure;
          padding-bottom: 32px;
        }
        article.cards-section .card-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 32px;
        }
        article.cards-section .card-container .card {
          max-width: 400px;
          padding: 24px;
          border-radius: 16px;
          
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
          
          color: azure;
          background-color: rgba(255,255,255, 0.03);
        }
        article.cards-section .card-container .card span {
          background-color: rgba(255,255,255, 0.1);
          padding: 8px;
          width: min-content;
          border-radius: 6px;
        }
        article.cards-section .card-container .card h4 {
          font-size: 20px;
        }
        article.cards-section .card-container .card p {
          font-size: 16px;
        }


        article.features {
          padding: 40px 0;
          color: azure;
        }
        article.features .feature-wrapper {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          justify-content: center;
          align-items: center;

          padding: 32px 0;
          
          max-width: 1080px;
          margin-inline: auto;
        }
        article.features .feature-wrapper h2{
          font-family: "Merriweather", serif;
          font-size: 32px;
          font-weight: 500;
          padding-bottom: 16px;
        }
        article.features .feature-wrapper ul {
          list-style: disc;
          padding: 16px 0 16px 32px ;
          line-height: 2;
        }
        article.features .feature-wrapper p, li{
          font-size: 16px;
          color: dimgray;
        }
        article.features .feature-img {
          height: 480px;
          background-color: transparent;
          border-radius: 24px;

          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .feature-img img {
          height: 100%;
          width:100%;
        }


        footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 32px;
          background-color: #000;
        }
        footer .logo {
          height: 48px;
          width: 48px;
          border-radius: 8px;
        }
        footer ul {
          display: flex;
          gap: 32px;
          color: azure;
        }
      `}</style>

    </React.Fragment>
    
  )
}

Index.useLayout = false;

export default Index


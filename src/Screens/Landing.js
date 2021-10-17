import Video from './video.mp4';
import Image2 from "../img/handshake.svg"
import Image3 from '../img/seo_monochromatic.svg'
import Image1 from '../img/stickmann.png'
import MailIcon from '../img/mailicon.png'
import PhoneIcon from '../img/phoneicon.jfif'
import InternetIcon from '../img/interneticon.jfif'
import './style.css';

function Landing() {
  return (
    <div>
      {/* <div>
        <video autoPlay muted loop className="bg-video" playsInline src={Video}>
        </video>
        <div className="intro">
          <h1 className="name color-wh">Stickland</h1>
          <h2 className="game-name color-wh">SquidGame</h2>
          <p className="color-wh">NFT gaming platform powered by <span>Solana</span>...</p>
        </div>
      </div>
      <div className="details stickland">
        <h2>Stickland</h2>

        <div className="row">
          <p className="col-md-6 p">We are all descendants of the stickmen. The Evolution of stickmen began with a vision to create an ecosystem of like minds across the world infusing inculusiveness and diversity as our MO (Mode of Operation) while also focusing on the dire effect of climate change ravaging the World.
          </p>

        </div>

        <div className="row gradient">
          <p className="col-md-6 p">In this raging meta-verse, 7777 wonderfully vibrant stickmen journey through Stickland's hurdles and compelling challenges to gain the ultimate reward for victory. the Stickland.io is a community-focused NFT gaming ecosystem with a DAO framework which gives exclisive voting rights to stickmen to develop the next hurdle/stages and create progression within our community.
          </p>
          <div class="col-md-6">
            <img src={Stickman} className="svgs stick" alt="Contact" />
          </div>

        </div>

        <div className="row ">
          <p className="col-md-6 p">
            After each challenge is surmounted, the community decides on which tasking future awaits the stickmen in the ever promising land of the Sticks.
          </p>
        </div>

      </div>

      <div className="details squidgame">

        <div className="row gradient">
          <h2 className="">Why Squid Game?</h2>
          <p className="col-md-6 p">
            We can all agree that the era of NFT is upon us. Within a few months, the NFT gaming space has seen a surge in market valuation up to 100 Billion USD with huge potential and fast rising interest from orthodox and newbie gamers around the world. In the light of this sizzling wave, we decided to merge two popular representations, the Stickman and Squid Games, encapsulating them within the NFT Subniche to garner more interest from non-crypto users.
          </p>
          <div class="col-md-6">
            <img src={HandShake} className="svgs" alt="Contact" />
          </div>

        </div>

        <div className="row">
          <p className="col-md-6 p">
            The Stickman representation of Squid Game is only the first of a series of action themed games to be employed in the distant Sticklands ecosystem based pn decisions made by community. This adaptation provides an elaborate way for our users write their own story in highly creative fashion, one that we can assure you, will be fun as it progresses!
          </p>
          <div class="col-md-6">
            <img src={Community} className="svgs" alt="Contact" />
          </div>
        </div>
      </div>
      <div className="footer gradient">
        <div>
          <p>&copy; ALL RIGHTS RESERVED</p>
          <div className="row">
            <a href="mailto:contact@stickland.io" className="col-4">
              <span class="iconify" data-icon="ci:mail"></span>
            </a>

            <a href="+2349039489094" className="col-4">
              <span class="iconify" data-icon="akar-icons:phone"></span>
            </a>

            <a href="www.stickland.io" className="col-4">
              <span class="iconify" data-icon="whh:website"></span>
            </a>
          </div>
        </div>
      </div> */}
      
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#"><img src="img/logo.png" alt="" /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <header class="page-header gradient">
        <div class="container pt-3">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-5">
              <h1>Stickland</h1>
              <h3>Squid Game</h3>
              <p>
              NFT gaming platform powered by <span>Solana</span>...
              </p>

              {/* <button type="button" class="btn btn-outline-success btn-lg">
                Read more
              </button>
              <button type="button" class="btn btn-outline-warning btn-lg">
                Play video
              </button> */}
            </div>
            <div class="col-md-5">
              <img
                src={Image1}
                alt="Header"
                className="h-img"
              />
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,128L48,117.3C96,107,192,85,288,80C384,75,480,85,576,112C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </header>

      <section class="companies">
        <div class="container text-center">
          <div class="row g-5">
            <h2>Stickland</h2>

            <div>
              <p>We are all descendants of the stickmen. The Evolution of stickmen began with a vision to create an ecosystem of like minds across the world infusing inculusiveness and diversity as our MO (Mode of Operation) while also focusing on the dire effect of climate change ravaging the World.
              </p>

            </div>
          </div>
        </div>
      </section>

      <section class="feature gradient">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,117.3C672,139,768,213,864,208C960,203,1056,117,1152,101.3C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <img src={Image2} alt="" />
            </div>

            <div class="col-md-6">
            <p>In this raging meta-verse, 7777 wonderfully vibrant stickmen journey through Stickland's hurdles and compelling challenges to gain the ultimate reward for victory. the Stickland.io is a community-focused NFT gaming ecosystem with a DAO framework which gives exclisive voting rights to stickmen to develop the next hurdle/stages and create progression within our community.
          </p>
          <p>
            After each challenge is surmounted, the community decides on which tasking future awaits the stickmen in the ever promising land of the Sticks.
          </p>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,117.3C672,139,768,213,864,208C960,203,1056,117,1152,101.3C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>

      <h2 className="pad squid">Why Squid Game?</h2>
          <p className="pad">
            We can all agree that the era of NFT is upon us. Within a few months, the NFT gaming space has seen a surge in market valuation up to 100 Billion USD with huge potential and fast rising interest from orthodox and newbie gamers around the world. In the light of this sizzling wave, we decided to merge two popular representations, the Stickman and Squid Games, encapsulating them within the NFT Subniche to garner more interest from non-crypto users.
          </p>
     
      <section class="services gradient">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,96L34.3,106.7C68.6,117,137,139,206,122.7C274.3,107,343,53,411,53.3C480,53,549,107,617,117.3C685.7,128,754,96,823,96C891.4,96,960,128,1029,154.7C1097.1,181,1166,203,1234,202.7C1302.9,203,1371,181,1406,170.7L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
        <div class="container">
          <div class="row align-items-center justify-content-center">
          <p className="col-md-6 p">
            The Stickman representation of Squid Game is only the first of a series of action themed games to be employed in the distant Sticklands ecosystem based pn decisions made by community. This adaptation provides an elaborate way for our users write their own story in highly creative fashion, one that we can assure you, will be fun as it progresses!
          </p>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 210">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,96L34.3,106.7C68.6,117,137,139,206,122.7C274.3,107,343,53,411,53.3C480,53,549,107,617,117.3C685.7,128,754,96,823,96C891.4,96,960,128,1029,154.7C1097.1,181,1166,203,1234,202.7C1302.9,203,1371,181,1406,170.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </section>

      <section class="contact">
        <div class="container">
          <div class="row">
            <div class="col-md-5 c-icons">
              <a href="mailto:contact@stickland.io">
              <img src={MailIcon} className="mail-icon" alt="mail"/>
              </a>
              ||
              <a href="tel:+2349039489094">
              <img src={PhoneIcon} className="mail-icon" alt="phone"/>
              </a>
              ||
              <a href="https://www.stickland.io">
              <img src={InternetIcon} className="mail-icon" alt="internet"/>
              </a>
            </div>
            <div class="col-md-5">
              <img src={Image3} alt="Contact" />
            </div>
          </div>
        </div>
      </section>

      <footer class="gradient">
        <div class="container-fluid text-center">
          <span>
            &copy; ALL RIGHT RESERVED
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Landing;

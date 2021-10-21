// import Video from './video.mp4';
// import Image2 from "../img/handshake.svg"
// import Image3 from '../img/seo_monochromatic.svg'
import Image1 from '../img/cool.png';
// import MailIcon from '../img/mailicon.png'
// import PhoneIcon from '../img/phoneicon.jfif'
// import InternetIcon from '../img/interneticon.jfif'
// import Play from '../img/play.PNG'
// import WebLaunch from '../img/web-launch.PNG'
// import Communi from '../img/communi.PNG'
// import Sell from '../img/sell.PNG'
// import Collect from '../img/collect.PNG'
// import Agree from '../img/agreement.PNG'
// import Launch from '../img/launch-pad.PNG'
import Squid from '../img/squid1.JPG'
// import SquidP from '../img/squid2.JPG'
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

      <nav class="navbar navbar-expand-lg navbar-light bg-nav fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#overview"><img src={Image1} className="logo" alt="" /></a>
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
                <a class="nav-link active" aria-current="page" href="#overview">Overview</a>
              </li>
              {/*<li class="nav-item">
                <a class="nav-link" href="#road-map">Road Map</a>
              </li>*/}
              <li class="nav-item">
                <a class="nav-link" href="#socials">Socials</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header class="page-header gradient" id="overview">
        <div class="container pt-3">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-5 toppers">
              <h1 className="bold-head h-h1">Stickland: Squidgame</h1>
             
              {/* <p className="bold-p">
                NFT gaming platform powered by <span>Solana</span>...
              </p> */}

              {/* <button type="button" class="btn btn-outline-success btn-lg">
                Read more
              </button>
              <button type="button" class="btn btn-outline-warning btn-lg">
                Play video
              </button> */}
            </div>
          </div>
        </div>
      </header>

      <section class="companies">
        <div class="container text-center">
          <div class="row g-5">

            <div>
              <br/>
              <h2 className="bol">Stickland</h2>
              <p> We are all descendants of the <span className="sps">stickmen</span>. The Evolution of stickmen began with a vision to create an ecosystem of like minds across the world infusing inclusiveness and diversity as our <span className="sps">MO (Mode of Operation)</span> while also focusing on the dire effect of climate change ravaging the World.
              </p>

            </div>

          </div>
        </div>
      </section>

      <section class="feature gradient">

        <div class="container text-center">
          <div class="row align-items-center">
            {/* <div class="col-md-6">
              <img
                src={Image1}
                alt="Header"
                className="h-img"
              />
            </div> */}

            <div class="pad">
              <p> In this raging meta-verse, 7777 wonderfully vibrant stickmen journey through Stickland's hurdles and compelling challenges to gain the ultimate reward for victory. the <span className="sps">Stickland.io</span> is a community-focused NFT Lifestyle ecosystem with a DAO framework which gives exclusive voting rights to stickmen to develop the next hurdle/stages and create progression within our community.
              </p>
              <p>
                After each challenge is surmounted, the <span className="sps">community</span> decides on which tasking future awaits the stickmen in the ever promising land of the Sticks.
              </p>
            </div>
          </div>
        </div>
        <div className="hrs">
          <hr width="70%" />
        </div>
      </section>
      {/* <div className="row">
        <div className="col-md-6">
          <h2 className="pad">Stickland P2E and PVP RPG/VR game</h2>
          <p className="pad">Available on web, Android, iOS and Windows for RPG Xbox for VR </p>
        </div>
        <div className="col-md-6">
          <img src={Play} alt="Game" className="new-svgs" />
        </div>
      </div>

      <section class="services gradient">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <p className="col-md-6 p">
              Explore the Rich Sticklands ravaged by the climatic disaster, plagued with a dark, mysterious and long History, Rebuilding lands, Uniting with Lost Clans, aligning with lost patners and Cities and mitigating the effects of climate disasters while enforcing strategies towards effects of Climate change.
              <p>
                Stickland P2E Collectible game with a collection of over 9,999 Unique and Outstanding Stickmen NFT'S.
              </p>
            </p>

          </div>
        </div>
        
      </section>

      <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-6 p">
          <p>
            You may Create Collections of Stickmen or play with exclusive items or patnership Accepted NFT'S and earn rewards for rebuilding the Stickland City, Finding clans and Mitigating Climate change.
          </p>
          <p>
            Through this NFT'S, you will be provisionally owning rare pieces of bespoke, Hand crafted Art which does not just serve as an amazing Stickland Avatar but also provides you membership to the stickland community with all inclusive benefits and Discounts.
          </p>
        </div>

      </div>
      </div>

      <section class="services gradient">
        
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <p className="col-md-6 p">
              <h2>P2E Utility Tokens</h2>
              The Users earn utility tokens by playing the game and completing certain tasks and missions. These tokens can be sold and exchanged amongst stickmen in the stickland. The user can spend this Utility tokens to purchase In-game Items.
              <p>
                The tokens can also be utilized in the Upgrades on evolution and unlock certain privileges which will allow them compete in different scenes and quests.
              </p>
            </p>
          </div>
        </div>
       
      </section> */}

      <div className="container sq-bg">
        <div className="row">
          <div className="col-md-6">
            <h2 className="pad squid bol">Why Squid Game?</h2>
            <p className="pad">
              We can all agree that the era of NFT is upon us. Within a few months, the NFT space has seen a surge in market valuation up to <span className="sps">100 Billion USD</span> with huge potential and fast rising interest from orthodox and newbie Projects and Collectors around the world::. In the light of this sizzling wave, we decided to merge two popular representations, the Stickman and Squid Games, encapsulating them within the NFT Subniche to garner more interest from non-crypto users.
            </p>
          </div>
          {/* <div className="col-md-6">
            <img src={Squid} alt="Squid" className="new-svgs-s" />
          </div> */}
        </div>
      </div>

      <br/>

      <section class="services gradient">

        <div class="container">
          <div class="row align-items-center justify-content-center">
            <p className="col-md-6 pad">
              The Stickman representation of <span className="sps">Squid Game</span> is only the first of a series of action themed games to be employed in the distant Sticklands ecosystem based pn decisions made by community. This adaptation provides an elaborate way for our users to write their own story in highly creative fashion, one that we can assure you, will be fun as it progresses!
            </p>
            <div className="col-md-6">
            <img src={Squid} alt="Squid" className="new-svgs-s" />
          </div>
          </div>
        </div>
       
      </section>
     

      <br />

     <div className="hrs">
        <hr width="70%" />
      </div>
      <div className="solana-div">
        <a href="https://www.solana.com">
                <img src="https://cdn.dorik.com/5f95e1fddbb5f5001186829f/613668d3f58004001180a673/images/powered_glb6f1cb.webp" alt="Powered By Solana" className="solana"/>
              </a>
       </div>
       <div className="hrs" id="road-map">
          <hr width="70%" />
        </div>

      <section class="contact" id="socials">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-6 c-icons">
              <a href="https://twitter.com/SticklandNFT?s=09" target="_blank">
              <i class="fa fa-twitter" aria-hidden="true"></i>
                {/* <img src={MailIcon} className="mail-icon" alt="mail" /> */}
              </a>
              
              <a href="tel:+2349039489094" target="_blank">
              <i class="fa fa-instagram" aria-hidden="true"></i>
                {/* <img src={PhoneIcon} className="mail-icon" alt="phone" /> */}
              </a>
              
              <a href="https://discord.gg/xXdpS5PB" target="_blank">
              <span class="iconify" data-icon="akar-icons:discord-fill"></span>
              </a>
            </div>
            {/* <div class="col-md-5">
              <img src={Image3} alt="Contact" />
            </div> */}
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

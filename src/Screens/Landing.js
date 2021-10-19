// import Video from './video.mp4';
// import Image2 from "../img/handshake.svg"
// import Image3 from '../img/seo_monochromatic.svg'
import Image1 from '../img/sticklogo.jpeg'
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
              <li class="nav-item">
                <a class="nav-link" href="#road-map">Road Map</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#socials">Socials</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header class="page-header gradient">
        <div class="container pt-3">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-5 toppers">
              <h1 className="bold-head h-h1">Stickland: Squidgame...</h1>
              <a href="https://www.solana.com" id="overview">
                <img src="https://cdn.dorik.com/5f95e1fddbb5f5001186829f/613668d3f58004001180a673/images/powered_glb6f1cb.webp" alt="Powered By Solana" className="solana"/>
              </a>
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
              <p>We are all descendants of the stickmen. The Evolution of stickmen began with a <span className="sps">vision</span> to create an ecosystem of like minds across the world infusing inculusiveness and diversity as our MO (Mode of Operation) while also focusing on the dire effect of climate change ravaging the World.
              </p>

            </div>
          </div>
        </div>
      </section>

      <section class="feature gradient">

        <div class="container">
          <div class="row align-items-center">
            {/* <div class="col-md-6">
              <img
                src={Image1}
                alt="Header"
                className="h-img"
              />
            </div> */}

            <div class="col-md-6 pad">
              <p>In this raging meta-verse, 7777 wonderfully vibrant stickmen journey through Stickland's hurdles and compelling challenges to gain the ultimate reward for victory. the <span className="sps">Stickland.io</span> is a community-focused NFT gaming ecosystem with a DAO framework which gives exclisive voting rights to stickmen to develop the next hurdle/stages and create progression within our community.
              </p>
              <p>
                After each challenge is surmounted, the community decides on which tasking future awaits the stickmen in the ever promising land of the Sticks.
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
              We can all agree that the era of NFT is upon us. Within a few months, the NFT gaming space has seen a surge in market valuation up to <span className="sps">100 Billion USD</span> with huge potential and fast rising interest from orthodox and newbie gamers around the world. In the light of this sizzling wave, we decided to merge two popular representations, the Stickman and Squid Games, encapsulating them within the NFT Subniche to garner more interest from non-crypto users.
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
              The Stickman representation of <span className="sps">Squid Game</span> is only the first of a series of action themed games to be employed in the distant Sticklands ecosystem based pn decisions made by community. This adaptation provides an elaborate way for our users write their own story in highly creative fashion, one that we can assure you, will be fun as it progresses!
            </p>
            <div className="col-md-6">
            <img src={Squid} alt="Squid" className="new-svgs-s" />
          </div>
          </div>
        </div>
        <div className="hrs" id="road-map">
          <hr width="70%" />
        </div>
      </section>

      <section class="services gradient roads">

        <div class="container">
          <h2 className="road-h bol">Road Map</h2>
          <div class="row flex-a">

            <div className="col-md-6 pad road-maps">
              <h3><li>Website Launch and NFT launch Countdown</li></h3>
              <p>
                Development of an Interactive Website with Key details on all activities Timelines and project guide. The website will also disseminate Information on Pre sale Countdowns and Public Mint plans. The price per <span className="sps">stickman</span> is 1 sol.
              </p>
            </div>
            {/* <div className="col-md-6">
              <img src={WebLaunch} alt="web" className="new-svgs" />
            </div> */}

          </div>
        </div>
      </section>

      <div className="container">
        <div className="row flex-a">
          {/* <div className="col-md-6">
            <img src={Communi} alt="web" className="new-svgs" />
          </div> */}
          <div className="col-md-6 pad road-maps">
            <h3><li>Community Engagement</li></h3>
            <p>
              We will host regular Community Engagement events to keep the stickmen in Stickland informed on the progress and <span className="sps">Milestones</span> we have achieved and our plans for the future, as well as sharing thier Ideas and Voting to include them into the community's plans. Our Channels are discord, Twitter, Clubhouse.
            </p>
          </div>
        </div>
      </div>

      <section class="services gradient roads">

        <div class="container">
          <div className="row flex-a">
            <div className="col-md-6 pad road-maps">
              <h3><li>Pre Sale and Public Mint</li></h3>
              <p>
                Pre Sales will be Focused on the first 1000 Stickmen in a blind Mint Session through the stickland website where the first <span className="sps">100 stickmen</span> locked away in the Devs wallet Minted personally by the team. The public Mint will then offer the remaining 8,888. The unclaimed stickmen will either be minted by the team members interested or burnt
              </p>
            </div>
            {/* <div className="col-md-6">
              <img src={Sell} alt="web" className="new-svgs" />
            </div> */}
          </div>
        </div>

      </section>

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 210">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,96L34.3,106.7C68.6,117,137,139,206,122.7C274.3,107,343,53,411,53.3C480,53,549,107,617,117.3C685.7,128,754,96,823,96C891.4,96,960,128,1029,154.7C1097.1,181,1166,203,1234,202.7C1302.9,203,1371,181,1406,170.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg> */}

      <div className="container">
        <div className="row flex-a">
          
          <div className="col-md-6 pad road-maps">
            <h3><li>The Stickland P2E Collectibles Game</li></h3>
            <p>
              The production of the <span className="sps">Stickland</span> game begins Immediately after the Stickland Community has been Identified and Created (include the brief on the game as highlighted above)
            </p>
          </div>

        </div>
      </div>

      <section class="services gradient roads">

        <div class="container">
          <div className="row flex-a">
            <div className="col-md-6 pad road-maps">
              <h3><li>Utility and Patnerships</li></h3>
              <p>
                Stickmen will get a chance to participate in pre-sales of upcoming NFT projects and patnerships on our launchpad.Stickland will be <span className="sps">patnering</span> with other successful NFT projects in the eco system to provide a broader and connected community for our stickmen
              </p>
            </div>
            {/* <div className="col-md-6">
              <img src={Agree} alt="web" className="new-svgs" />
            </div> */}

          </div>
        </div>
        
      </section>

      <div className="container">
        <div className="row flex-a">
          {/* <div className="col-md-6">
            <img src={Launch} alt="web" className="new-svgs" />
          </div> */}
          <div className="col-md-6 pad road-maps">
            <h3><li>Stickland Launch Pad</li></h3>
            <p>
              The stickland launchpad will be structured to enable the launch of patnership projects and 1 of 1 NFT'S community projects of our own. Existing Stickmen will have unlimited first time access to the projects launching on the <span className="sps">Stickland Launchpad</span>.
            </p>
          </div>
        </div>
      </div>

      <div className="hrs">
        <hr width="70%" />
      </div>

      <br />
      <br />
      <section class="contact" id="socials">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-6 c-icons">
              <a href="mailto:contact@stickland.io">
              <i class="fa fa-twitter" aria-hidden="true"></i>
                {/* <img src={MailIcon} className="mail-icon" alt="mail" /> */}
              </a>
              
              <a href="tel:+2349039489094">
              <i class="fa fa-instagram" aria-hidden="true"></i>
                {/* <img src={PhoneIcon} className="mail-icon" alt="phone" /> */}
              </a>
              
              <a href="https://www.stickland.io">
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
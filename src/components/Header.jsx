import React, {  useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
  const [activeTab, setActiveTab] = useState('Personal');

useEffect(() => {
  const mainSection = document.querySelector('.main-page-section');
  const tldrSection = document.querySelector('.tldr-section');
  if (!mainSection || !tldrSection) return;

  mainSection.style.margin = '0 auto';
  mainSection.style.transition = 'transform 0.3s ease';
  mainSection.style.width = '100%';
  mainSection.style.boxSizing = 'border-box';

  const handleScroll = () => {
    const mainSectionRect = mainSection.getBoundingClientRect();
    const mainSectionHeight = mainSection.offsetHeight;

    const distanceScrolled = Math.max(0, -mainSectionRect.top); 
    const progress = Math.min(distanceScrolled / mainSectionHeight, 1); 

    const scaleFactor = 1 - (1 - 0.92) * progress;
    mainSection.style.transform = `scaleX(${scaleFactor})`;
  };


  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
    mainSection.style.transform = 'scaleX(1)';
  };
}, []);
  return (
    <>
      <header className="header">
      <div className="header-container">
        <div className="tab-row">
          <button
            className={`tab ${activeTab === 'Personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('Personal')}
          >
            Personal
          </button>
          <button
            className={`tab ${activeTab === 'Business' ? 'active' : ''}`}
            onClick={() => setActiveTab('Business')}
          >
            Business
          </button>
        </div>
        
        <div className="main-nav">
          <div className="logo-and-links">
            <img
              src="https://www.wealthsimple.com/_next/static/media/ws-wordmark-refresh.3499def3.svg"
              alt="Logo"
              className="logo"
            />

            <nav className="nav-links">
              <div className="dropdown">What we offer ▾</div>
              <div className="dropdown">Benefits ▾</div>
              <div className="dropdown">Learn ▾</div>
              <div className="link">Support</div>
            </nav>
          </div>

          <div className="actions-center">
            <button className="login-btn">Log in</button>
            <button className="get-started-btn">Get started</button>
          </div>
        </div>
        </div>
      </header>

      <section className="hero-section">
      <div className="hero-inner">
 <div className="hero-content">
          <p className="hero-subtitle">WEALTHSIMPLE TAX</p>
          <h1 className="hero-title">
  The smartest place <span>to file your taxes</span>
</h1>
<p className="hero-description">
  From auto-fill to auto-save, Wealthsimple Tax makes <br />
  filing quick, seamless, and (almost sort of) enjoyable.
</p>
          <div className="hero-buttons">
            <button className="start-filing">Start filing</button>
            <button className="see-benefits">See all benefits</button>
          </div>
        </div>
      </div>

        <div className="hero-image">
          <img src="/image.webp" alt="Filing graphic" />
        </div>

        <img
          src="/msg.png"
          alt="Chat icon"
          className="chat-icon-img"
        />
      </section>
      
      <section className="landing-section">
        <div className="landing-hero">
          <div className="landing-text">
          <h2>
  <span className="line1">Your money’s</span><br />
  <span className="line2">worth more</span>
</h2>
            <p>
              Get the most out of your money with smart investing<br />
              products and personalized advice to build long-term wealth.
            </p>
            <button className="landing-cta-btn">Get started</button>
          </div>
          <section class="video-section">
  <div class="video-wrapper">
  <video autoPlay muted loop>
  <source src="/wvid.webm" type="video/webm" />
  Your browser does not support the video tag.
</video>

  </div>
</section>

        </div>

        <div className="landing-features">
          <div className="landing-feature">
            <hr />
            <h3>Low fees meet higher yields</h3>
            <p>
              Your money’s always making more<br />
              with low-fee investing and high-interest savings.
            </p>
          </div>
          <div className="landing-feature">
            <hr />
            <h3>Unmatched access</h3>
            <p>
              Get sophisticated investment opportunities<br />
              traditionally reserved for industry insiders and the ultra-wealthy.
            </p>
          </div>
          <div className="landing-feature">
            <hr />
            <h3>Smart & simple</h3>
            <p>
              In just a few taps, set your financial goals in motion,
              and let our easy-to-use products handle the rest.
            </p>
          </div>
        </div>
      </section>
      <section className="trusted-section">
      <div className="trusted-container">
        <div className="trusted-image">
          <img src="/aunty.webp" alt="Customer with flowers" />
        </div>
        <div className="trusted-content">
  <h2 className="trusted-title">
    Trusted by<br />
    over 3 million<br />
    Canadians
  </h2>

  <div className="trusted-spacer"></div> 

  <p className="trusted-description">
    Our business model is simple: put our clients’<br />
    interests first. Sure, that means never charging<br />
    commissions on trades and offering industry-leading<br />
    interest on your chequing account, but it also means<br />
    a lot more. Like total transparency into your<br />
    investments and an innovative cost structure that<br />
    ensures we only do well when you do.
  </p>
</div>

      </div>
      <div className="trusted-stats-wrapper">
      <div className="trusted-stats-container">
  <div className="trusted-stat">
    <div className="stat-line"></div>
    <h3 className="stat-value">$50+ billion</h3>
    <p className="stat-label">Assets under administration</p>
  </div>
  <div className="trusted-stat">
    <div className="stat-line"></div>
    <h3 className="stat-value">$1 million</h3>
    <p className="stat-label">CDIC coverage on eligible deposits</p>
  </div>
  <div className="trusted-stat">
    <div className="stat-line"></div>
    <h3 className="stat-value">4x lower</h3>
    <p className="stat-label">
      Management fees than the average <br />
      Canadian mutual fund
    </p>
  </div>
</div>
</div>
 </section>
 <section className="earnings-section">
  <div className="earnings-container">
    <div className="earnings-content">
      <h2 className="earnings-heading">
        Make more on your<br />everyday earnings
      </h2>
      <hr className="earnings-divider" />
    </div>
  </div>
</section>
<section className="card-promo-section">
      <div className="promo-container">
        <div className="promo-text">
          <p className="promo-category">CASH</p>
          <h2 className="promo-title">
  Earn high interest and<br />extra perks
</h2>
<p className="promo-description">
            Get a minimum 1.75% interest, no monthly fees, and 1% back on your spending in stock, crypto, or cash,
            with Canada’s highest interest chequing account.
          </p>
          <button className="promo-button">Start earning</button>
        </div>
        <div className="promo-image">
          <img src="wphn.webp" alt="Card Promotion" />
        </div>
      </div>
    </section>
    <section className="lowfee-section">
      <div className="lowfee-container">
        <h2 className="lowfee-heading">
          Low-fee investing,<br />your way
        </h2>
        <hr className="lowfee-divider" />
      </div>
    </section>
    <section className="portfolio-section">
  <div className="portfolio-text">
    <h4 className="portfolio-subheading">MANAGED INVESTING</h4>
    <h1 className="portfolio-heading">
      Custom portfolios, <br />
      designed by experts
    </h1>
    <p class="portfolio-description">
  Professionally managed and tailored to your goals,<br />
  we’ll diversify your investments to maximize returns<br />
  and minimize risk.
</p>

    <button className="portfolio-button">Make me a portfolio</button>
  </div>

  <div className="portfolio-image-container">
    <video
      loop
      muted
      autoPlay
      src="infinity.webm"
      className="portfolio-video"
    />
  </div>
</section>
<section className="investing-container">
  <div className="investing-text">
    <div className="investing-subtitle">SELF-DIRECTED INVESTING</div>
    
    <h1 className="investing-title">
      <div>Take full control of</div>
      <div>your trades</div>
    </h1>

    <p className="investing-description">
      <div>Choose from thousands of commission-</div>
      <div>free stocks and ETFs, or buy, sell, and stake</div>
      <div>90+ <a href="#" className="investing-link">cryptocurrencies</a>.</div>
    </p>

    <button className="investing-button">Start trading</button>
  </div>

  <div className="investing-image-wrapper">
    <video autoPlay muted loop src="coin.webm" className="investing-video" />
  </div>
</section>
<section className="section-container">
      <div className="section-image">
        <img src="/meeting.webp" alt="Advisor Meeting" />
      </div>
      <div className="section-content">
        <h1 className="section-title">
          Meeting you <br /> where you’re at
        </h1>
        <div className="section-subcontent">
          <h2 className="section-subtitle">Speak to an advisor</h2>
          <p className="section-description">
          <p className="section-description">
  <span className="link-style">Premium and Generation</span> clients have access to goal setting<br />
  and financial planning.
</p>
          </p>
        </div>
        <div className="section-subcontent">
          <h2 className="section-subtitle">Connect with our team</h2>
          <p className="section-description">
  Have account-related inquiries? Our team is here to<br />
  support you.
</p>
        </div>
        <div className="section-subcontent">
          <h2 className="section-subtitle">Self-serve help</h2>
          <p className="section-description">
  Find answers to your investing questions in our help<br />
  centre, personal finance how-tos, or right in the app.
</p>
        </div>
      </div>
  <p class="image-caption">
    Zoe Wolpert, Advisor, CIM® (Chartered Investment Manager)
  </p>
 </section>
 <section className="benefits-section">
  <div className="benefits-container">
    <div className="benefits-text">
      <h2>
        Benefits<br />
        that grow<br />
        with you
      </h2>
      <p>
        Bringing all your investments to<br />
        Wealthsimple means better access to<br />
        exclusive benefits and partner rewards.
      </p>
      <button className="see-all-btn">See all benefits</button>
    </div>

    <div className="benefits-cards">
      <div className="benefit-card premium-card">
        <div className="card-header">$100,000 IN ASSETS</div>
        <h3>
          Premium <span className="arrow">→</span>
        </h3>
        <ul>
          <li>0.4% management fees on managed investing accounts</li>
          <li>2.25% interest on your Cash account</li>
          <li>Goal setting with an advisor</li>
        </ul>
        <div className="card-bg premium-bg"></div>
      </div>

      <div className="benefit-card generation-card">
        <div className="card-header dark">$500,000 IN ASSETS</div>
        <h3>
          Generation <span className="arrow">→</span>
        </h3>
        <ul>
          <li>0.2%*–0.4% management fees on managed investing accounts</li>
          <li>2.75% interest on your Cash account</li>
          <li>Dedicated team of advisors</li>
        </ul>
        <div className="card-bg generation-bg"></div>
      </div>
    </div>
  </div>
</section>
<section
  className="main-page-section"
><div className="main-page-content">
    <h1 className="main-page-heading">
      <span className="main-page-heading-line">Show your</span>
      <span className="main-page-heading-line second-line">money its worth</span>
    </h1>
    <p className="main-page-subtext">
      <span>Join the 3 million Canadians choosing Wealthsimple</span><br />
      <span>as a trusted place to invest, trade, save, and more.</span>
    </p>
    <button className="main-page-button">Get started</button>
  </div>

  <div className="main-page-video-container">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="main-page-video"
    >
      <source src="/gg.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  </div>
</section>
<section className="tldr-section">
  <div className="tldr-left">
    <img src="tldr.png" alt="TLDR Logo" className="tldr-logo-img" />
    <p className="tldr-description">
      Sign up for our weekly non-boring newsletter about money, markets, and more.
    </p>
    <a href="#" className="tldr-link">
      Meet TLDR
    </a>
  </div>
  <div className="tldr-right">
    <form className="tldr-form">
      <input
        type="email"
        placeholder="Enter your email"
        className="tldr-input"
      />
      <button type="submit" className="tldr-button">
        Subscribe
      </button>
    </form>
    <p className="tldr-disclaimer">
      By providing your email, you are consenting to receive communications
      from Wealthsimple Media Inc. Visit our{" "}
      <a href="#" className="tldr-link">Privacy Policy</a> for more info, or contact us at{" "}
      <a href="mailto:privacy@wealthsimple.com" className="tldr-link">
        privacy@wealthsimple.com
      </a>{" "}
      or 80 Spadina Ave., Toronto, ON.
    </p>
  </div>
 

</section>
<hr className="tldr-bottom-divider" />
<section className="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <h4>About us</h4>
          <ul>
            <li>Our company</li>
            <li>Newsroom</li>
            <li>Careers</li>
            <li>Wealthsimple Foundation</li>
            <li>Giveback program</li>
            <li>Advisor insights</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>Accessibility</li>
            <li>Privacy policy</li>
            <li>Terms of use</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Accounts</h4>
          <ul>
            <li>RRSP</li>
            <li>TFSA</li>
            <li>FHSA</li>
            <li>Registered savings account</li>
            <li>Non-registered account</li>
            <li>Margin</li>
            <li>Spousal RRSP</li>
            <li>RESP</li>
            <li>Corporate</li>
            <li>LIRA</li>
            <li>All accounts</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Products</h4>
          <ul>
            <li>Chequing</li>
            <li>Stocks & ETFs</li>
            <li>Managed investing</li>
            <li>Mortgages</li>
            <li>Tax</li>
            <li>Crypto</li>
            <li>For Business</li>
          </ul>
        </div>
        <div className="footer-column">
  <h4>Social</h4>
  <ul className="social-links">
    <li>
      <img src="/instagram.svg" alt="Instagram" />
      <span>Instagram</span>
    </li>
    <li>
  <span className="x-icon">𝕏</span>
  <span>X</span>
</li>

    <li>
      <img src="/youtube.png" alt="YouTube" />
      <span>YouTube</span>
    </li>
    <li>
      <img src="/linkedin.svg" alt="LinkedIn" />
      <span>LinkedIn</span>
    </li>
  </ul>
</div>
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>Transfer an account</li>
            <li>Help centre</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="end-section">
    <div className="end-divider"></div>
      <div className="end-container">
      <div className="language-selector">
          <button>
            English <span className="dropdown-icon">▾</span>
          </button>
        </div>
        <div className="legal-text">
          <p>© 2016–2025, Wealthsimple Technologies Inc. All Rights Reserved.</p>
          <p>
            For further details see our <a href="#">Legal Disclosures</a>. By using this website, you accept our
            <a href="#"> Terms of Use</a> and <a href="#">Privacy Policy</a>.
          </p>
          <p>
            For information about filing a complaint please visit
            <a href="#"> How to File a Complaint</a>.
          </p>
        </div>
      </div>
    </section>
  </>
  );
}

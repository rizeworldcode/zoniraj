import React, { useState } from 'react';

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('terms');

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="terms-page-wrapper">
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <style>{`
        .terms-page-wrapper {
          background-color: #efe7e5;
          font-family: 'Montserrat', sans-serif;
          color: #2b221d;
          min-height: 100vh;
          padding: 40px 24px 80px 24px;
        }

        .terms-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Breadcrumb */
        .terms-breadcrumb {
          font-size: 11px;
          color: #8c7365;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 24px;
          margin-top: 15px;
          font-weight: 500;
        }
        .terms-breadcrumb a { color: #8c7365; text-decoration: none; }

        /* Header block */
        .terms-header-block {
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid #d4c5bd;
        }
        .terms-category {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          color: #c5a880;
          letter-spacing: 2px;
          margin-bottom: 6px;
        }
        .terms-title {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          font-weight: 500;
          color: #2b221d;
          margin: 0 0 12px 0;
        }
        .terms-subtitle {
          font-size: 14px;
          line-height: 1.6;
          color: #8c7365;
          max-width: 800px;
          margin: 0;
        }

        /* Two column layout */
        .terms-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 40px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .terms-layout {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        /* Navigation Sidebar */
        .terms-sidebar {
          background-color: #ffffff;
          border-radius: 20px;
          border: 1px solid #e1d8ea;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          position: sticky;
          top: 30px;
        }
        .terms-sidebar-title {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #8c7365;
          padding: 20px 24px 14px 24px;
          border-bottom: 1px solid #f2ebe8;
        }
        .terms-sidebar-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 15px 24px;
          text-align: left;
          background: none;
          border: none;
          border-bottom: 1px solid #f7f3f2;
          cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #2b221d;
          transition: background-color 0.2s, color 0.2s;
        }
        .terms-sidebar-btn:last-child {
          border-bottom: none;
        }
        .terms-sidebar-btn:hover {
          background-color: #faf7f5;
        }
        .terms-sidebar-btn.active {
          background-color: #2b221d;
          color: #ffffff;
        }
        .terms-sidebar-btn.active .btn-icon {
          color: #c5a880;
        }
        .btn-icon {
          font-size: 16px;
          color: #a39084;
          width: 20px;
          text-align: center;
        }

        /* Content panels */
        .terms-content-panel {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .terms-section-card {
          background-color: #ffffff;
          border-radius: 20px;
          border: 1px solid #e1d8ea;
          padding: 36px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          scroll-margin-top: 30px;
        }
        @media (max-width: 480px) {
          .terms-section-card {
            padding: 24px 18px;
          }
        }

        .section-header {
          margin-bottom: 24px;
          border-bottom: 1px solid #f2ebe8;
          padding-bottom: 14px;
        }
        .section-header h2 {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 500;
          color: #2b221d;
          margin: 0;
        }
        .section-intro-text {
          font-size: 14px;
          line-height: 1.6;
          color: #746380;
          margin: 0 0 20px 0;
          font-style: italic;
        }

        /* Text Styles */
        .terms-paragraph {
          font-size: 13.5px;
          line-height: 1.7;
          color: #746380;
          margin: 0 0 20px 0;
        }
        .terms-sub-heading {
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-weight: 600;
          color: #2b221d;
          margin: 24px 0 10px 0;
        }

        /* Highlight box */
        .terms-highlight-box {
          background-color: #faf7f5;
          border-left: 3px solid #c5a880;
          padding: 20px;
          border-radius: 4px 12px 12px 4px;
          margin: 24px 0;
        }
        .terms-highlight-box p {
          margin: 0;
          font-size: 13.5px;
          line-height: 1.6;
          color: #5d463c;
          font-weight: 500;
        }

        /* Grid Lists */
        .guides-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin: 20px 0;
        }
        @media (max-width: 600px) {
          .guides-grid {
            grid-template-columns: 1fr;
          }
        }
        .guide-box {
          background-color: #faf7f5;
          border: 1px solid #f2ebe8;
          border-radius: 12px;
          padding: 20px;
          transition: transform 0.2s, border-color 0.2s;
        }
        .guide-box:hover {
          transform: translateY(-2px);
          border-color: #c5a880;
        }
        .guide-box h4 {
          font-size: 13.5px;
          font-weight: 700;
          text-transform: uppercase;
          color: #2b221d;
          margin: 0 0 8px 0;
          letter-spacing: 0.5px;
        }
        .guide-box p {
          font-size: 12.5px;
          line-height: 1.6;
          color: #746380;
          margin: 0;
        }

        /* Numbered Certification steps */
        .cert-step {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
        }
        .cert-step-num {
          width: 36px;
          height: 36px;
          background-color: #2b221d;
          color: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
          flex-shrink: 0;
        }
        .cert-step-content h4 {
          font-family: 'Playfair Display', serif;
          font-size: 16px;
          font-weight: 600;
          color: #2b221d;
          margin: 0 0 6px 0;
        }
        .cert-step-content p {
          font-size: 13px;
          line-height: 1.6;
          color: #746380;
          margin: 0;
        }

        /* Care grid */
        .care-columns-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 20px;
        }
        @media (max-width: 768px) {
          .care-columns-grid {
            grid-template-columns: 1fr;
          }
        }
        .care-column-card {
          background-color: #faf7f5;
          border: 1px solid #f2ebe8;
          border-radius: 16px;
          padding: 24px;
        }
        .care-column-card h4 {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 600;
          color: #2b221d;
          text-align: center;
          margin: 0 0 16px 0;
          padding-bottom: 10px;
          border-bottom: 1.5px solid #d4c5bd;
        }
        .care-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .care-bullets li {
          font-size: 12.5px;
          color: #746380;
          line-height: 1.5;
          position: relative;
          padding-left: 18px;
        }
        .care-bullets li::before {
          content: '•';
          color: #c5a880;
          font-size: 16px;
          position: absolute;
          left: 4px;
          top: -2px;
        }

        /* Table */
        .policy-table-wrapper {
          overflow-x: auto;
          margin: 20px 0;
          border: 1px solid #f2ebe8;
          border-radius: 12px;
        }
        .policy-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 13px;
        }
        .policy-table th {
          background-color: #faf7f5;
          padding: 14px 18px;
          font-weight: 600;
          color: #2b221d;
          border-bottom: 2px solid #d4c5bd;
        }
        .policy-table td {
          padding: 14px 18px;
          color: #746380;
          border-bottom: 1px solid #f2ebe8;
        }
        .policy-table tr:last-child td {
          border-bottom: none;
        }

        /* Contact support Box */
        .support-cta-box {
          background: linear-gradient(135deg, #2b221d, #44352d);
          border-radius: 20px;
          padding: 40px;
          color: #ffffff;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .support-cta-box h3 {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 500;
          color: #ffffff;
          margin: 0 0 12px 0;
        }
        .support-cta-box p {
          font-size: 13.5px;
          color: #d5c8bf;
          line-height: 1.6;
          margin: 0 0 24px 0;
          max-width: 600px;
          margin-inline: auto;
        }
        .support-cta-inner {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 20px 36px;
          border-radius: 14px;
        }
        .support-name {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #c5a880;
          font-weight: 600;
          margin-bottom: 6px;
        }
        .support-phone {
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 0.5px;
        }
      `}</style>

      <div className="terms-container">
        {/* Breadcrumbs */}
        <div className="terms-breadcrumb">
          <a href="#">Home</a> &gt; <span style={{ color: '#2b221d', fontWeight: '600' }}>Terms & Guidelines</span>
        </div>

        {/* Header Block */}
        <div className="terms-header-block">
          <div className="terms-category">Legal & Information</div>
          <h1 className="terms-title">Terms & Guidelines</h1>
          <p className="terms-subtitle">
            Everything you need to know about our products, certification standards, and policies to ensure a secure and confident shopping experience at Zoniraz.
          </p>
        </div>

        <div className="terms-layout">
          {/* SIDEBAR NAVIGATION */}
          <div className="terms-sidebar">
            <div className="terms-sidebar-title">Categories</div>
            <button 
              className={`terms-sidebar-btn ${activeSection === 'terms' ? 'active' : ''}`}
              onClick={() => scrollToSection('terms')}
            >
              <span className="btn-icon">📋</span>
              Terms & Conditions
            </button>
            <button 
              className={`terms-sidebar-btn ${activeSection === 'guides' ? 'active' : ''}`}
              onClick={() => scrollToSection('guides')}
            >
              <span className="btn-icon">🏆</span>
              Jewellery Guides
            </button>
            <button 
              className={`terms-sidebar-btn ${activeSection === 'certificates' ? 'active' : ''}`}
              onClick={() => scrollToSection('certificates')}
            >
              <span className="btn-icon">🎓</span>
              Certification Standards
            </button>
            <button 
              className={`terms-sidebar-btn ${activeSection === 'care' ? 'active' : ''}`}
              onClick={() => scrollToSection('care')}
            >
              <span className="btn-icon">🧼</span>
              Jewellery Care Guide
            </button>
            <button 
              className={`terms-sidebar-btn ${activeSection === 'exchange' ? 'active' : ''}`}
              onClick={() => scrollToSection('exchange')}
            >
              <span className="btn-icon">🔄</span>
              Lifetime Policies
            </button>
            <button 
              className={`terms-sidebar-btn ${activeSection === 'delivery' ? 'active' : ''}`}
              onClick={() => scrollToSection('delivery')}
            >
              <span className="btn-icon">🚚</span>
              Delivery & Payments
            </button>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="terms-content-panel">
            
            {/* TERMS & CONDITIONS */}
            <div id="terms" className="terms-section-card">
              <div className="section-header">
                <h2>Terms & Conditions</h2>
              </div>
              <p className="section-intro-text">
                All the terms and conditions mentioned here will be applicable to the buyer at the time of purchasing any type of product from Zoniraz.com.
              </p>

              <h3 className="terms-sub-heading">Use of the Website</h3>
              <p className="terms-paragraph">
                The customer agrees and acknowledges that this website can be used only by individuals who are 18 years of age and above. Minors are not eligible to use this website and purchase any products. At the time of purchase, the seller will consider the buyer's age as 18 years and above.
              </p>
              <p className="terms-paragraph">
                By using Zoniraz.com, you are eligible to purchase any product at the given price only. The Seller reserves all rights to terminate the Customer’s access, refuse to deliver the product in case of conflict, and refund the money after deducting all expenditures borne by the seller during the sale-purchase agreement between the seller and buyer.
              </p>

              <h3 className="terms-sub-heading">Trademarks</h3>
              <p className="terms-paragraph">
                All the trademarks and logos appearing on the website are registered. Any individual, company, or other firm cannot use the trademark, logo, name of the website, or information given on this website without written permission. If they do so, they will be liable for legal penalties.
              </p>

              <h3 className="terms-sub-heading">Warranties & Pricing</h3>
              <p className="terms-paragraph">
                Representing products, providing their information, and selling them to the customer does not bind the seller or their products to any kind of warranty or guarantee towards the customer.
              </p>
              <p className="terms-paragraph">
                Product prices given on the website are calculated using precious metal and gem prices in the market to provide you the best value. Prices on Zoniraz.com can change without notice due to precious metal and gem market fluctuations.
              </p>

              <div className="terms-highlight-box" style={{ borderLeftColor: '#d93838' }}>
                <p style={{ color: '#2b221d', fontStyle: 'italic', fontSize: '14px' }}>
                  “Zoniraz.com owner will not be liable and responsible for any loss, damage, or personal injury of the buyer and third parties, whatsoever is the cause.”
                </p>
              </div>
            </div>

            {/* JEWELLERY GUIDES */}
            <div id="guides" className="terms-section-card">
              <div className="section-header">
                <h2>Jewellery Guide</h2>
              </div>

              <h3 className="terms-sub-heading" style={{ marginTop: 0 }}>Gold Jewellery Guide</h3>
              <div className="guides-grid">
                <div className="guide-box">
                  <h4>Trustworthy Seller</h4>
                  <p>We are a trustworthy seller with 50 years of experience in the market, selling the right products with accurate quality at the right price.</p>
                </div>
                <div className="guide-box">
                  <h4>Purity Standards</h4>
                  <p>All our gold jewellery is BIS hallmark approved, matching all quality and authentication standards recommended by the government.</p>
                </div>
                <div className="guide-box">
                  <h4>Smart Investment</h4>
                  <p>Buying gold jewellery is an investment because it easily liquidates and provides a reliable rate of return over generations.</p>
                </div>
              </div>

              <h3 className="terms-sub-heading">Diamond Jewellery Guide</h3>
              <div className="guides-grid">
                <div className="guide-box">
                  <h4>Carat Weight</h4>
                  <p>Slight differences in carat weight may not significantly impact the visual appearance but can significantly impact the price.</p>
                </div>
                <div className="guide-box">
                  <h4>Types of Diamonds</h4>
                  <p>We offer Natural Diamonds, Treated Diamonds, and modern Lab-Grown Manmade Diamonds to suit all fashion needs, preferences, and budgets.</p>
                </div>
                <div className="guide-box">
                  <h4>Solitaire Budget</h4>
                  <p>With us, you will be able to buy reasonable rate diamonds for solitaire jewellery evaluated accurately based on standard 4C grading.</p>
                </div>
              </div>
            </div>

            {/* CERTIFICATION STANDARDS */}
            <div id="certificates" className="terms-section-card">
              <div className="section-header">
                <h2>Certification Guide</h2>
              </div>
              <p className="terms-paragraph">
                Certification ensures the absolute purity of the metal and the authenticity of the diamonds.
              </p>

              <div className="cert-step">
                <div className="cert-step-num">1</div>
                <div className="cert-step-content">
                  <h4>BIS Hallmark</h4>
                  <p>
                    BIS Hallmark is the ultimate symbol of gold purity in India. We recommend buying hallmarked jewellery only. All our gold jewellery carries the official BIS triangle mark and purity grade (e.g., 916 for 22K gold).
                  </p>
                </div>
              </div>

              <div className="cert-step">
                <div className="cert-step-num">2</div>
                <div className="cert-step-content">
                  <h4>IGI Certification</h4>
                  <p>
                    The International Gemological Institute provides authenticated certification for gems and diamonds. An IGI report discloses the carat, color, shape, clarity, and cut parameters of your precious solitaires.
                  </p>
                </div>
              </div>
            </div>

            {/* CARE GUIDE */}
            <div id="care" className="terms-section-card">
              <div className="section-header">
                <h2>Jewellery Care Guide</h2>
              </div>
              <p className="terms-paragraph">
                Proper care ensures that your fine jewellery retains its shine, durability, and brilliance forever.
              </p>

              <div className="care-columns-grid">
                <div className="care-column-card">
                  <h4>Gemstones</h4>
                  <ul className="care-bullets">
                    <li>Clean gently with a soft cloth</li>
                    <li>Avoid exposure to high pressure</li>
                    <li>Store separately in a fabric lining</li>
                    <li>Remove during gardening or cleaning</li>
                  </ul>
                </div>
                <div className="care-column-card">
                  <h4>Gold</h4>
                  <ul className="care-bullets">
                    <li>Clean with warm soap solution</li>
                    <li>Avoid chemical sprays/cosmetics</li>
                    <li>Do not sleep wearing delicate jewellery</li>
                    <li>Clean details with a soft toothbrush</li>
                  </ul>
                </div>
                <div className="care-column-card">
                  <h4>Diamonds</h4>
                  <ul className="care-bullets">
                    <li>Store in a dedicated jewellery box</li>
                    <li>Avoid hair sprays, lotions, and oils</li>
                    <li>Touch diamonds gently by the metal</li>
                    <li>Get professional cleaning once a year</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* LIFETIME POLICIES */}
            <div id="exchange" className="terms-section-card">
              <div className="section-header">
                <h2>Lifetime Policies</h2>
              </div>
              <p className="terms-paragraph">
                Zoniraz offers 100% gold exchange value with a strict 0% deduction policy for upgrades. Buy backs are calculated at prevailing market rates after standard processing fees.
              </p>

              <div className="policy-table-wrapper">
                <table className="policy-table">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Exchange Value</th>
                      <th>Buy Back Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: '600' }}>Diamond</td>
                      <td>100% of diamond value</td>
                      <td>90% of diamond value</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: '600' }}>Gold Jewellery</td>
                      <td>100% of gold value</td>
                      <td>95% of gold value</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: '600' }}>Coins</td>
                      <td>100% of gold value</td>
                      <td>100% of gold value</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* DELIVERY & PAYMENTS */}
            <div id="delivery" className="terms-section-card">
              <div className="section-header">
                <h2>Delivery & Payments</h2>
              </div>

              <h3 className="terms-sub-heading" style={{ marginTop: 0 }}>Delivery Duration</h3>
              <p className="terms-paragraph">
                We provide free delivery all over India. Shipping typically takes 24-48 hours for “Available in Stock” items, and up to 2 weeks for custom-made or personalized orders.
              </p>

              <h3 className="terms-sub-heading">Payment Policy</h3>
              <p className="terms-paragraph">
                Zoniraz encourages online payment and provides a secure, hassle-free encrypted payment gateway. We do not provide Cash on Delivery (COD) services for security reasons.
              </p>
            </div>

            {/* CUSTOMER SUPPORT */}
            <div className="support-cta-box">
              <h3>Customer Delight</h3>
              <p>
                “Our goal is customer satisfaction, not just profit. You can trust in our 50 years of expertise.”
              </p>
              <div className="support-cta-inner">
                <span className="support-name">Get in touch with Shantnu</span>
                <span className="support-phone">97848 36060</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

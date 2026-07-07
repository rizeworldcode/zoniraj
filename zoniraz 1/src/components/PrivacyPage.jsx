import React, { useState } from 'react';

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('shipping');

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="privacy-page-wrapper">
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <style>{`
        .privacy-page-wrapper {
          background-color: #efe7e5;
          font-family: 'Montserrat', sans-serif;
          color: #2b221d;
          min-height: 100vh;
          padding: 40px 24px 80px 24px;
        }

        .privacy-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Breadcrumb */
        .privacy-breadcrumb {
          font-size: 11px;
          color: #8c7365;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 24px;
          margin-top: 15px;
          font-weight: 500;
        }
        .privacy-breadcrumb a { color: #8c7365; text-decoration: none; }

        /* Header block */
        .privacy-header-block {
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid #d4c5bd;
        }
        .privacy-category {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          color: #c5a880;
          letter-spacing: 2px;
          margin-bottom: 6px;
        }
        .privacy-title {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          font-weight: 500;
          color: #2b221d;
          margin: 0 0 12px 0;
        }
        .privacy-subtitle {
          font-size: 14px;
          line-height: 1.6;
          color: #8c7365;
          max-width: 800px;
          margin: 0;
        }

        /* Two column layout */
        .privacy-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 40px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .privacy-layout {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        /* Navigation Sidebar */
        .privacy-sidebar {
          background-color: #ffffff;
          border-radius: 20px;
          border: 1px solid #e1d8ea;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          position: sticky;
          top: 30px;
        }
        .privacy-sidebar-title {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #8c7365;
          padding: 20px 24px 14px 24px;
          border-bottom: 1px solid #f2ebe8;
        }
        .privacy-sidebar-btn {
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
        .privacy-sidebar-btn:last-child {
          border-bottom: none;
        }
        .privacy-sidebar-btn:hover {
          background-color: #faf7f5;
        }
        .privacy-sidebar-btn.active {
          background-color: #2b221d;
          color: #ffffff;
        }
        .privacy-sidebar-btn.active .btn-icon {
          color: #c5a880;
        }
        .btn-icon {
          font-size: 16px;
          color: #a39084;
          width: 20px;
          text-align: center;
        }

        /* Content panels */
        .privacy-content-panel {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .privacy-section-card {
          background-color: #ffffff;
          border-radius: 20px;
          border: 1px solid #e1d8ea;
          padding: 36px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          scroll-margin-top: 30px;
        }
        @media (max-width: 480px) {
          .privacy-section-card {
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
        }

        /* Text Styles */
        .privacy-paragraph {
          font-size: 13.5px;
          line-height: 1.7;
          color: #746380;
          margin: 0 0 20px 0;
        }
        .privacy-sub-heading {
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-weight: 600;
          color: #2b221d;
          margin: 24px 0 10px 0;
        }

        /* Highlight box */
        .privacy-highlight-box {
          background-color: #faf7f5;
          border-left: 3px solid #c5a880;
          padding: 20px;
          border-radius: 4px 12px 12px 4px;
          margin: 24px 0;
        }
        .privacy-highlight-box p {
          margin: 0;
          font-size: 13px;
          line-height: 1.6;
          color: #5d463c;
        }

        /* Grid Lists */
        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin: 20px 0;
        }
        @media (max-width: 600px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
        .feature-box {
          background-color: #faf7f5;
          border: 1px solid #f2ebe8;
          border-radius: 12px;
          padding: 20px;
          transition: transform 0.2s, border-color 0.2s;
        }
        .feature-box:hover {
          transform: translateY(-2px);
          border-color: #c5a880;
        }
        .feature-box h4 {
          font-size: 13.5px;
          font-weight: 700;
          text-transform: uppercase;
          color: #2b221d;
          margin: 0 0 8px 0;
          letter-spacing: 0.5px;
        }
        .feature-box p {
          font-size: 12.5px;
          line-height: 1.6;
          color: #746380;
          margin: 0;
        }

        /* Table */
        .rates-table-wrapper {
          overflow-x: auto;
          margin: 20px 0;
          border: 1px solid #f2ebe8;
          border-radius: 12px;
        }
        .rates-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 13px;
        }
        .rates-table th {
          background-color: #faf7f5;
          padding: 14px 18px;
          font-weight: 600;
          color: #2b221d;
          border-bottom: 2px solid #d4c5bd;
        }
        .rates-table td {
          padding: 14px 18px;
          color: #746380;
          border-bottom: 1px solid #f2ebe8;
        }
        .rates-table tr:last-child td {
          border-bottom: none;
        }
        .footnote {
          font-size: 11.5px;
          color: #8c7365;
          margin-top: 10px;
          font-style: italic;
        }
      `}</style>

      <div className="privacy-container">
        {/* Breadcrumbs */}
        <div className="privacy-breadcrumb">
          <a href="#">Home</a> &gt; <span style={{ color: '#2b221d', fontWeight: '600' }}>Privacy & Shipping</span>
        </div>

        {/* Header Block */}
        <div className="privacy-header-block">
          <div className="privacy-category">Policy & Delivery</div>
          <h1 className="privacy-title">Privacy & Shipping</h1>
          <p className="privacy-subtitle">
            Acquaint yourself with our terms and conditions regarding goods delivery, secure handling, and procurement policies.
          </p>
        </div>

        <div className="privacy-layout">
          {/* SIDEBAR NAVIGATION */}
          <div className="privacy-sidebar">
            <div className="privacy-sidebar-title">Categories</div>
            <button 
              className={`privacy-sidebar-btn ${activeSection === 'shipping' ? 'active' : ''}`}
              onClick={() => scrollToSection('shipping')}
            >
              <span className="btn-icon">🚚</span>
              Shipping & Delivery
            </button>
            <button 
              className={`privacy-sidebar-btn ${activeSection === 'rates' ? 'active' : ''}`}
              onClick={() => scrollToSection('rates')}
            >
              <span className="btn-icon">💳</span>
              Rates & Schedules
            </button>
            <button 
              className={`privacy-sidebar-btn ${activeSection === 'legal' ? 'active' : ''}`}
              onClick={() => scrollToSection('legal')}
            >
              <span className="btn-icon">⚖️</span>
              Legal Agreements
            </button>
            <button 
              className={`privacy-sidebar-btn ${activeSection === 'policies' ? 'active' : ''}`}
              onClick={() => scrollToSection('policies')}
            >
              <span className="btn-icon">🛠️</span>
              Order Policies
            </button>
            <button 
              className={`privacy-sidebar-btn ${activeSection === 'liability' ? 'active' : ''}`}
              onClick={() => scrollToSection('liability')}
            >
              <span className="btn-icon">🔒</span>
              Liability & Law
            </button>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="privacy-content-panel">
            
            {/* SHIPPING & DELIVERY */}
            <div id="shipping" className="privacy-section-card">
              <div className="section-header">
                <h2>Shipping & Delivery</h2>
              </div>
              <p className="section-intro-text">
                Welcome to the Shipping and Delivery Information page! You can purchase your items online and ship them directly to your doorstep. We use the best carriers in the business to make sure your order gets to you on time.
              </p>

              <div className="features-grid">
                <div className="feature-box">
                  <h4>Free Delivery</h4>
                  <p>Free two-day shipping is available on in-stock items. Place your order by 5pm, Monday to Friday to qualify.</p>
                </div>
                <div className="feature-box">
                  <h4>Fast Processing</h4>
                  <p>Items ordered before 5:00 pm will be delivered in two business days where available.</p>
                </div>
              </div>
            </div>

            {/* SERVICE RATES & COSTS */}
            <div id="rates" className="privacy-section-card">
              <div className="section-header">
                <h2>Service Rates & Costs</h2>
              </div>
              <p className="privacy-paragraph">
                Below is a summary of our indicative shipping fees, coverages, and schedules:
              </p>

              <div className="rates-table-wrapper">
                <table className="rates-table">
                  <thead>
                    <tr>
                      <th>Service</th>
                      <th>Locations</th>
                      <th>Schedule</th>
                      <th>Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: '600' }}>Royal Mail 1st Class</td>
                      <td>UK & Europe</td>
                      <td>1-3 days</td>
                      <td>₹350</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: '600' }}>Royal Mail Tracker</td>
                      <td>UK All</td>
                      <td>1-3 days</td>
                      <td>₹450</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: '600' }}>Standard Courier</td>
                      <td>UK Mainland</td>
                      <td>1-3 days (7:30am-5:30pm)</td>
                      <td>₹550</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: '600' }}>Standard Courier</td>
                      <td>NI, Eire, Scilly Isles</td>
                      <td>1-3 days</td>
                      <td>₹850</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: '600' }}>Priority Next Day</td>
                      <td>UK Mainland</td>
                      <td>Pre 12pm</td>
                      <td>₹750</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="footnote">
                * Free two-day shipping is not available on customized or engraved products.
              </p>
            </div>

            {/* LEGAL TERMS */}
            <div id="legal" className="privacy-section-card">
              <div className="section-header">
                <h2>Legal Terms</h2>
              </div>

              <h3 className="privacy-sub-heading" style={{ marginTop: 0 }}>Entire Agreement</h3>
              <p className="privacy-paragraph">
                These Terms and Conditions represent the complete agreement of the parties. No additional terms in Buyer's purchase order shall be binding.
              </p>

              <h3 className="privacy-sub-heading">Delivery Estimates</h3>
              <p className="privacy-paragraph">
                All delivery dates are estimates. Seller shall not be liable for any loss or damage resulting from failure to deliver by the specified date.
              </p>

              <h3 className="privacy-sub-heading">Payment Terms</h3>
              <p className="privacy-paragraph">
                Net cash thirty (30) days from invoice date. Overdue amounts accrue interest at 1.5% per month or the highest legal rate.
              </p>
            </div>

            {/* ORDER POLICIES */}
            <div id="policies" className="privacy-section-card">
              <div className="section-header">
                <h2>Order Policies</h2>
              </div>

              <h3 className="privacy-sub-heading" style={{ marginTop: 0 }}>Cancellation Policy</h3>
              <p className="privacy-paragraph">
                Cancellations require written approval. A 25% fee applies once products are delivered to a carrier. Special orders cannot be canceled.
              </p>

              <h3 className="privacy-sub-heading">Return of Material</h3>
              <p className="privacy-paragraph">
                Buyer has five (5) days to inspect and reject Product in writing. Failure to do so constitutes irrevocable acceptance.
              </p>
            </div>

            {/* LIABILITY & JURISDICTION */}
            <div id="liability" className="privacy-section-card">
              <div className="section-header">
                <h2>Liability & Jurisdiction</h2>
              </div>

              <h3 className="privacy-sub-heading" style={{ marginTop: 0 }}>Limitation of Liability</h3>
              <p className="privacy-paragraph">
                Seller's liability shall not exceed the amount paid for the products. Any breach action must be commenced within one (1) year.
              </p>

              <h3 className="privacy-sub-heading">Governing Law</h3>
              <p className="privacy-paragraph">
                This document shall be interpreted and governed by the laws of the State of America, excluding its conflicts of laws rules. The parties specifically exclude the application of the United Nations Convention on the Sale of Goods.
              </p>

              <div className="privacy-highlight-box" style={{ borderLeftColor: '#c5a880' }}>
                <p style={{ fontWeight: '600', color: '#2b221d', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1px', marginBottom: '4px' }}>
                  Taxation Notice
                </p>
                <p style={{ color: '#5d463c', margin: 0, fontSize: '13px' }}>
                  Buyer is responsible for all applicable taxes and governmental charges.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

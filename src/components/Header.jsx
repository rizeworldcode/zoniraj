import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import AuthModal from './AuthModal';
import messageBandsImg from '../assets/message-bands.png';
import postcardsBannerImg from '../assets/postcards-banner.png';
import switchEarringsImg from '../assets/switch-earrings.png';
import dancingHoopsImg from '../assets/dancing-hoops.png';
import stretchableBanglesImg from '../assets/stretchable-bangles.png';
import watchCharmsImg from '../assets/watch-charms.png';
import solitaireSetsImg from '../assets/solitaire-sets.png';
import gulnaaraImg from '../assets/gulnaara.png';
import mangalsutraEarringsImg from '../assets/mangalsutra-earrings.png';
import trendyMangalsutrasImg from '../assets/trendy-mangalsutras.png';
import layeredNecklacesImg from '../assets/layered-necklaces.png';
import infinityNecklacesImg from '../assets/infinity-necklaces.png';
import silverEarringsImg from '../assets/silver-earrings.png';
import silverNecklacesImg from '../assets/silver-necklaces.png';
import silverBraceletsImg from '../assets/silver-bracelets.png';
import silverRingsImg from '../assets/silver-rings.png';
import giftCardsImg from '../assets/gift-cards.png';
import wearYourWinsImg from '../assets/wear-your-wins.png';
import caratlaneIconicsImg from '../assets/caratlane-iconics.png';
import customerFavouritesImg from '../assets/customer-favourites.png';
import nineKtImg from '../assets/nine-kt.png';
import mensPlatinumImg from '../assets/mens-platinum.png';
import anekaImg from '../assets/aneka.png';
import giftsForMomImg from '../assets/gifts-for-mom.png';
import { products } from '../data/products';

export default function Header({ wishlist = {}, setWishlist, cart = {}, setCart }) {
  const { user, logout } = useContext(AuthContext);
  const { cartList } = useContext(CartContext);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [pincode, setPincode] = useState('');
  const [tempPincode, setTempPincode] = useState('');
  const [goldModalOpen, setGoldModalOpen] = useState(false);
  const [goldActiveTab, setGoldActiveTab] = useState('menu'); // 'menu' | 'buy' | 'sell' | 'exchange'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [disabledDropdown, setDisabledDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePincodeSubmit = (e) => {
    e.preventDefault();
    setPincode(tempPincode);
  };

  return (
    <header className={`jaypore-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Bar matching Candere style */}
      <div className="header-top-bar desktop-only-util">
        <div className="top-bar-left">
          <a href="#digital-gold" className="top-bar-link" onClick={(e) => { e.preventDefault(); setGoldModalOpen(true); setGoldActiveTab('menu'); }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="top-bar-icon">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 8v8M8 12h8"></path>
            </svg>
            BUY DIGITAL GOLD
          </a>
        </div>
      </div>

      {/* Main Row: Search on Left, Logo in Center, Actions on Right */}
      <div className="header-main-row">
        {/* Mobile Hamburger toggle */}
        <button 
          className="mobile-menu-toggle-btn" 
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open Navigation Menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mobile-menu-hamburger-icon">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        {/* Left Side: Desktop Search Capsule */}
        <div className="header-left-search desktop-only-util">
          <div className="search-bar-capsule">
            <input type="text" placeholder="Search for Minimalist Jewellery..." />
            <button className="search-capsule-btn" aria-label="Search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Center: Brand Logo */}
        <div className="header-brand" style={{ position: 'relative', width: '280px', height: '50px' }}>
          <a href="#" className="brand-logo-text" style={{ display: 'block', width: '100%', height: '100%' }}>
            <img src="/zoni.png" alt="Zoniraz Logo" style={{ 
              height: '160px', 
              objectFit: 'contain',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10
            }} />
          </a>
        </div>

        {/* Right Side: Pincode + Icon Actions */}
        <div className="header-right-actions">
          {/* Pincode Selector */}
          <div className="nav-item-container nav-pincode-wrapper desktop-only-util">
            <a href="#delivery-stores" className="utility-item nav-item-trigger">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: '16px', height: '16px', marginRight: '4px' }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{pincode ? pincode : 'PINCODE'}</span>
            </a>
            <div className="pincode-dropdown" style={{ right: '0', left: 'auto' }}>
              <p className="pincode-dropdown-text">
                Your PIN Code unlocks Fastest delivery date, Try-at-Home availability, Nearest store and In-store design!
              </p>
              <form onSubmit={handlePincodeSubmit} className="pincode-form">
                <input
                  type="text"
                  placeholder="Enter Pincode"
                  value={tempPincode}
                  onChange={(e) => setTempPincode(e.target.value)}
                  maxLength={6}
                  className="pincode-input"
                />
                <button type="submit" className="pincode-submit-btn">
                  {pincode ? 'Change' : 'Apply'}
                </button>
              </form>
            </div>
          </div>

          <div className="icon-actions">
            {/* Store locator */}
            <a href="#delivery-stores" className="action-link-icon store-icon-link" aria-label="Stores">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </a>

            {/* Profile Dropdown */}
            <div className="nav-item-container nav-profile-wrapper">
              <a 
                href="#profile" 
                className="action-link-icon nav-item-trigger" 
                aria-label="Profile"
                onClick={(e) => {
                  if (!user) {
                    e.preventDefault();
                    setShowAuthModal(true);
                  }
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </a>
              <div className="profile-dropdown" style={{ right: 0 }}>
                {user ? (
                  <>
                    <h4 style={{ textTransform: 'none' }}>Hello, {user.firstName}!</h4>
                    <p className="profile-dropdown-subtitle">Manage profile, addresses & orders.</p>
                    <div className="profile-actions-stack" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <a href="#profile" className="profile-signup-btn" style={{ textAlign: 'center' }}>My Dashboard</a>
                      <button 
                        onClick={logout} 
                        className="profile-login-btn" 
                        style={{ border: '1px solid #d4c5bd', background: 'none', cursor: 'pointer', padding: '10px', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#2b221d', display: 'block', width: '100%', borderRadius: '2px', textAlign: 'center' }}
                      >
                        Log Out
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h4>Your Account</h4>
                    <p className="profile-dropdown-subtitle">Access account & manage your orders.</p>
                    <div className="profile-actions-stack">
                      <button 
                        onClick={() => setShowAuthModal(true)} 
                        className="profile-signup-btn" 
                        style={{ border: 'none', background: '#2b221d', color: '#fff', cursor: 'pointer', padding: '12px', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', width: '100%', borderRadius: '2px', display: 'block', textAlign: 'center' }}
                      >
                        Sign In / Register
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Wishlist */}
            <div className="nav-item-container nav-wishlist-wrapper">
              <a href="#wishlist" className="action-link-icon" aria-label="Wishlist">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                {Object.keys(wishlist).length > 0 && (
                  <span className="wishlist-badge">{Object.keys(wishlist).length}</span>
                )}
              </a>
            </div>

            {/* Cart */}
            <div className="nav-item-container nav-cart-wrapper">
              <a href="#cart" className="action-link-icon" aria-label="Shopping Bag">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                {cartList.reduce((sum, item) => sum + item.quantity, 0) > 0 && (
                  <span className="cart-badge">{cartList.reduce((sum, item) => sum + item.quantity, 0)}</span>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dedicated Mobile Search Row (appears on second row on mobile viewport) */}
      <div className="mobile-search-row">
        <div className="search-bar-inline">
          <button className="search-trigger" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <input type="text" placeholder="Search for engagement rings" />
          <div className="search-actions-inline">
            <button className="search-action-btn camera-search" title="Search by Image">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </button>
            <button className="search-action-btn voice-search" title="Voice Search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="23"></line>
                <line x1="8" y1="23" x2="16" y2="23"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Tier: Category Links */}
      <div className="header-nav-row">
        <nav className="bottom-category-nav">
          
          {/* Rings Container with Mega-dropdown */}
          <div className="nav-item-container" onMouseLeave={() => setDisabledDropdown(null)}>
            <a href="#rings" className="nav-item-trigger" onClick={() => setDisabledDropdown('rings')}>Rings</a>
            <div className={`mega-dropdown ${disabledDropdown === 'rings' ? 'force-hide' : ''}`}>
              <div className="mega-dropdown-inner">
                {/* Column 1 */}
                <div className="mega-column">
                  <h4>Featured</h4>
                  <ul>
                    <li><a href="#latest">Latest Designs</a></li>
                    <li><a href="#bestsellers">Bestsellers</a></li>
                    <li><a href="#fast-delivery">Fast Delivery</a></li>
                    <li><a href="#special-deals">Special Deals</a></li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div className="mega-column">
                  <h4>By Style</h4>
                  <ul>
                    <li><a href="#all-rings">All Rings</a></li>
                    <li><a href="#engagement">Engagement</a></li>
                    <li><a href="#dailywear">Dailywear</a></li>
                    <li><a href="#infinity">Infinity</a></li>
                    <li><a href="#cocktail">Cocktail</a></li>
                    <li><a href="#solitaire">Solitaire</a></li>
                    <li><a href="#couple-rings">Couple Rings</a></li>
                    <li><a href="#bands">Bands</a></li>
                    <li><a href="#promise-rings">Promise Rings</a></li>
                    <li><a href="#silver-shaya">Silver By Shaya</a></li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div className="mega-column">
                  <h4>By Metal & Stone</h4>
                  <ul className="metal-stone-list">
                    <li><span className="dot dot-diamond"></span><a href="#diamond">Diamond</a></li>
                    <li><span className="dot dot-pearl"></span><a href="#pearl">Pearl</a></li>
                    <li><span className="dot dot-navratna"></span><a href="#navratna">Navratna</a></li>
                    <li><span className="dot dot-gemstone"></span><a href="#gemstone">Gemstone</a></li>
                    <li><span className="dot dot-platinum"></span><a href="#platinum">Platinum</a></li>
                    <li><span className="dot dot-gold"></span><a href="#gold">Gold</a></li>
                    <li><span className="dot dot-rose-gold"></span><a href="#rose-gold">Rose Gold</a></li>
                    <li><span className="dot dot-yellow-gold"></span><a href="#yellow-gold">Yellow Gold</a></li>
                    <li><span className="dot dot-white-gold"></span><a href="#white-gold">White Gold</a></li>
                    <li><span className="dot dot-gold-22kt"></span><a href="#22kt-gold">22KT Gold</a></li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div className="mega-column">
                  <h4>By Price</h4>
                  <ul>
                    <li><a href="#under-10k">Under ₹ 10k</a></li>
                    <li><a href="#10k-20k">₹ 10k - ₹ 20k</a></li>
                    <li><a href="#20k-30k">₹ 20k - ₹ 30k</a></li>
                    <li><a href="#30k-50k">₹ 30k - ₹ 50k</a></li>
                    <li><a href="#50k-75k">₹ 50k - ₹ 75k</a></li>
                    <li><a href="#75k-above">₹ 75k & Above</a></li>
                  </ul>
                </div>

                {/* Column 5: Banners */}
                <div className="mega-banners">
                  <div className="mega-banner-card">
                    <img src={messageBandsImg} alt="Message Bands" />
                    <div className="banner-label">Message Bands</div>
                  </div>
                  <div className="mega-banner-card">
                    <img src={postcardsBannerImg} alt="Postcards Banner" />
                    <div className="banner-label">Postcards Banner</div>
                  </div>
                </div>

                {/* Bottom Full-width Row: Demographic filters */}
                <div className="mega-dropdown-footer">
                  <span className="footer-title">Shop For:</span>
                  <div className="footer-links">
                    <a href="#women" className="footer-pill-btn">For Women</a>
                    <a href="#men" className="footer-pill-btn">For Men</a>
                    <a href="#kids" className="footer-pill-btn">For Kids</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Earrings Container with Mega-dropdown */}
          <div className="nav-item-container" onMouseLeave={() => setDisabledDropdown(null)}>
            <a href="#rings" className="nav-item-trigger" onClick={() => setDisabledDropdown('earrings')}>Earrings</a>
            <div className={`mega-dropdown ${disabledDropdown === 'earrings' ? 'force-hide' : ''}`}>
              <div className="mega-dropdown-inner">
                {/* Column 1 */}
                <div className="mega-column">
                  <h4>Featured</h4>
                  <ul>
                    <li><a href="#latest-earrings">Latest Designs</a></li>
                    <li><a href="#bestsellers-earrings">Bestsellers</a></li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div className="mega-column">
                  <h4>By Style</h4>
                  <ul>
                    <li><a href="#all-earrings">All Earrings</a></li>
                    <li><a href="#studs">Studs</a></li>
                    <li><a href="#hoops">Hoops</a></li>
                    <li><a href="#drops">Drops</a></li>
                    <li><a href="#earcuffs">Earcuffs</a></li>
                    <li><a href="#sui-dhagas">Sui Dhagas</a></li>
                    <li><a href="#jhumkas">Jhumkas</a></li>
                    <li><a href="#silver-earrings">Silver Earrings</a></li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div className="mega-column">
                  <h4>By Metal & Stone</h4>
                  <ul className="metal-stone-list">
                    <li><span className="dot dot-diamond"></span><a href="#diamond">Diamond</a></li>
                    <li><span className="dot dot-pearl"></span><a href="#pearl">Pearl</a></li>
                    <li><span className="dot dot-navratna"></span><a href="#navratna">Navratna</a></li>
                    <li><span className="dot dot-gemstone"></span><a href="#gemstone">Gemstone</a></li>
                    <li><span className="dot dot-platinum"></span><a href="#platinum">Platinum</a></li>
                    <li><span className="dot dot-gold"></span><a href="#gold">Gold</a></li>
                    <li><span className="dot dot-rose-gold"></span><a href="#rose-gold">Rose Gold</a></li>
                    <li><span className="dot dot-yellow-gold"></span><a href="#yellow-gold">Yellow Gold</a></li>
                    <li><span className="dot dot-white-gold"></span><a href="#white-gold">White Gold</a></li>
                    <li><span className="dot dot-gold-22kt"></span><a href="#22kt-gold">22kt Gold</a></li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div className="mega-column">
                  <h4>By Price</h4>
                  <ul>
                    <li><a href="#under-10k">Under ₹ 10k</a></li>
                    <li><a href="#10k-20k">₹ 10k - ₹ 20k</a></li>
                    <li><a href="#20k-30k">₹ 20k - ₹ 30k</a></li>
                    <li><a href="#30k-50k">₹ 30k - ₹ 50k</a></li>
                    <li><a href="#50k-75k">₹ 50k - ₹ 75k</a></li>
                    <li><a href="#75k-above">₹ 75K & Above</a></li>
                  </ul>
                </div>

                {/* Column 5: Banners */}
                <div className="mega-banners">
                  <div className="mega-banner-card">
                    <img src={switchEarringsImg} alt="Switch" />
                    <div className="banner-label">Switch</div>
                  </div>
                  <div className="mega-banner-card">
                    <img src={dancingHoopsImg} alt="Dancing Hoops" />
                    <div className="banner-label">Dancing Hoops</div>
                  </div>
                </div>

                {/* Bottom Full-width Row: Demographic filters */}
                <div className="mega-dropdown-footer">
                  <span className="footer-title">Shop For:</span>
                  <div className="footer-links">
                    <a href="#women" className="footer-pill-btn">For Women</a>
                    <a href="#men" className="footer-pill-btn">For Men</a>
                    <a href="#kids" className="footer-pill-btn">For Kids</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bracelets & Bangles Container with Mega-dropdown */}
          <div className="nav-item-container" onMouseLeave={() => setDisabledDropdown(null)}>
            <a href="#rings" className="nav-item-trigger" onClick={() => setDisabledDropdown('bracelets')}>Bracelets & Bangles</a>
            <div className={`mega-dropdown ${disabledDropdown === 'bracelets' ? 'force-hide' : ''}`}>
              <div className="mega-dropdown-inner">
                {/* Column 1 */}
                <div className="mega-column">
                  <h4>Featured</h4>
                  <ul>
                    <li><a href="#latest-bracelets">Latest Designs</a></li>
                    <li><a href="#bestsellers-bracelets">Bestsellers</a></li>
                    <li><a href="#fast-delivery-bracelets">Fast Delivery</a></li>
                    <li><a href="#special-deals-bracelets">Special Deals</a></li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div className="mega-column">
                  <h4>By Style</h4>
                  <ul>
                    <li><a href="#all-bracelets">All Bracelets & Bangles</a></li>
                    <li><a href="#adjustable-bracelets">Adjustable Bracelets</a></li>
                    <li><a href="#chain-bracelets">Chain Bracelets</a></li>
                    <li><a href="#flexible-bracelets">Flexible Bracelets</a></li>
                    <li><a href="#tennis-bracelets">Tennis Bracelets</a></li>
                    <li><a href="#bridal-bangles">Bridal Bangles</a></li>
                    <li><a href="#lightweight-bangles">Lightweight Bangles</a></li>
                    <li><a href="#silver-bracelets">Silver Bracelets</a></li>
                    <li><a href="#oval-bracelets">Oval Bracelets</a></li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div className="mega-column">
                  <h4>By Metal & Stone</h4>
                  <ul className="metal-stone-list">
                    <li><span className="dot dot-diamond"></span><a href="#diamond">Diamond</a></li>
                    <li><span className="dot dot-gemstone"></span><a href="#gemstone">Gemstone</a></li>
                    <li><span className="dot dot-rose-gold"></span><a href="#rose-gold">Rose Gold</a></li>
                    <li><span className="dot dot-platinum"></span><a href="#platinum">Platinum</a></li>
                    <li><span className="dot dot-pearl"></span><a href="#pearl">Pearl</a></li>
                    <li><span className="dot dot-navratna"></span><a href="#navratna">Navratna</a></li>
                    <li><span className="dot dot-yellow-gold"></span><a href="#yellow-gold">Yellow Gold</a></li>
                    <li><span className="dot dot-white-gold"></span><a href="#white-gold">White Gold</a></li>
                    <li><span className="dot dot-gold-22kt"></span><a href="#22kt-gold">22kt Gold</a></li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div className="mega-column">
                  <h4>By Price</h4>
                  <ul>
                    <li><a href="#under-10k">Under ₹ 10K</a></li>
                    <li><a href="#10k-20k">₹ 10k - ₹ 20k</a></li>
                    <li><a href="#20k-30k">₹ 20k - ₹ 30k</a></li>
                    <li><a href="#30k-50k">₹ 30k - ₹ 50k</a></li>
                    <li><a href="#50k-75k">₹ 50k - ₹ 75k</a></li>
                    <li><a href="#above-75k">Above ₹ 75k</a></li>
                  </ul>
                </div>

                {/* Column 5: Banners */}
                <div className="mega-banners">
                  <div className="mega-banner-card">
                    <img src={stretchableBanglesImg} alt="Stretchable Bangles" />
                    <div className="banner-label">Stretchable Bangles</div>
                  </div>
                  <div className="mega-banner-card">
                    <img src={watchCharmsImg} alt="Watch Charms" />
                    <div className="banner-label">Watch Charms</div>
                  </div>
                </div>

                {/* Bottom Full-width Row: Demographic filters */}
                <div className="mega-dropdown-footer">
                  <span className="footer-title">Shop For:</span>
                  <div className="footer-links">
                    <a href="#women" className="footer-pill-btn">For Women</a>
                    <a href="#men" className="footer-pill-btn">For Men</a>
                    <a href="#kids" className="footer-pill-btn">For Kids</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solitaires Container with Mega-dropdown */}
          <div className="nav-item-container" onMouseLeave={() => setDisabledDropdown(null)}>
            <a href="#rings" className="nav-item-trigger" onClick={() => setDisabledDropdown('solitaires')}>Solitaires</a>
            <div className={`mega-dropdown ${disabledDropdown === 'solitaires' ? 'force-hide' : ''}`}>
              <div className="mega-dropdown-inner">
                {/* Column 1 */}
                <div className="mega-column">
                  <h4>Featured</h4>
                  <ul>
                    <li><a href="#latest-solitaires">Latest Designs</a></li>
                    <li><a href="#bestsellers-solitaires">Bestsellers</a></li>
                    <li><a href="#fast-delivery-solitaires">Fast Delivery</a></li>
                    <li><a href="#special-deals-solitaires">Special Deals</a></li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div className="mega-column">
                  <h4>By Style</h4>
                  <ul>
                    <li><a href="#all-solitaires">All Solitaires</a></li>
                    <li><a href="#solitaire-rings">Rings</a></li>
                    <li><a href="#solitaire-earrings">Earrings</a></li>
                    <li><a href="#solitaire-bridal-sets">Bridal Sets</a></li>
                    <li><a href="#solitaire-mangalsutras">Mangalsutras</a></li>
                    <li><a href="#solitaire-pendants">Pendants</a></li>
                    <li><a href="#solitaire-necklaces">Necklaces</a></li>
                    <li><a href="#solitaire-bracelets">Bracelets</a></li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div className="mega-column">
                  <h4>By Metal & Stones</h4>
                  <ul className="metal-stone-list">
                    <li><span className="dot dot-diamond"></span><a href="#diamond">Diamond</a></li>
                    <li><span className="dot dot-platinum"></span><a href="#platinum">Platinum</a></li>
                    <li><span className="dot dot-rose-gold"></span><a href="#rose-gold">Rose Gold</a></li>
                    <li><span className="dot dot-white-gold"></span><a href="#white-gold">White Gold</a></li>
                    <li><span className="dot dot-yellow-gold"></span><a href="#yellow-gold">Yellow Gold</a></li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div className="mega-column">
                  <h4>By Price</h4>
                  <ul>
                    <li><a href="#solitaire-30k-50k">₹ 30K to ₹ 50K</a></li>
                    <li><a href="#solitaire-50k-75k">₹ 50K to ₹ 75K</a></li>
                    <li><a href="#solitaire-75k-1l">₹ 75K to ₹ 1L</a></li>
                    <li><a href="#solitaire-1l-1.5l">₹ 1L to ₹ 1.5L</a></li>
                    <li><a href="#solitaire-1.5l-2l">₹ 1.5L to ₹ 2L</a></li>
                  </ul>
                </div>

                {/* Column 5: Banners */}
                <div className="mega-banners">
                  <div className="mega-banner-card">
                    <img src={solitaireSetsImg} alt="Solitaire Sets" />
                    <div className="banner-label">Solitaire Sets</div>
                  </div>
                  <div className="mega-banner-card">
                    <img src={gulnaaraImg} alt="Gulnaara" />
                    <div className="banner-label">Gulnaara</div>
                  </div>
                </div>

                {/* Bottom Full-width Row: Demographic filters */}
                <div className="mega-dropdown-footer">
                  <span className="footer-title">Shop For:</span>
                  <div className="footer-links">
                    <a href="#women" className="footer-pill-btn">For Women</a>
                    <a href="#men" className="footer-pill-btn">For Men</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mangalsutras Container with Mega-dropdown */}
          <div className="nav-item-container" onMouseLeave={() => setDisabledDropdown(null)}>
            <a href="#rings" className="nav-item-trigger" onClick={() => setDisabledDropdown('mangalsutras')}>Mangalsutras</a>
            <div className={`mega-dropdown ${disabledDropdown === 'mangalsutras' ? 'force-hide' : ''}`}>
              <div className="mega-dropdown-inner">
                {/* Column 1 */}
                <div className="mega-column">
                  <h4>Featured</h4>
                  <ul>
                    <li><a href="#latest-mangalsutras">Latest Designs</a></li>
                    <li><a href="#bestsellers-mangalsutras">Bestsellers</a></li>
                    <li><a href="#fast-delivery-mangalsutras">Fast Delivery</a></li>
                    <li><a href="#special-deals-mangalsutras">Special Deals</a></li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div className="mega-column">
                  <h4>By Style</h4>
                  <ul>
                    <li><a href="#all-mangalsutras">All Mangalsutras</a></li>
                    <li><a href="#modern-mangalsutras">Modern</a></li>
                    <li><a href="#traditional-mangalsutras">Traditional</a></li>
                    <li><a href="#solitaire-mangalsutras-style">Solitaire</a></li>
                    <li><a href="#infinity-mangalsutras">Infinity</a></li>
                    <li><a href="#fancy-mangalsutras">Fancy</a></li>
                    <li><a href="#mangalsutra-rings">Mangalsutra Rings</a></li>
                    <li><a href="#mangalsutra-bracelets">Mangalsutra Bracelets</a></li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div className="mega-column">
                  <h4>By Metal & Stone</h4>
                  <ul className="metal-stone-list">
                    <li><span className="dot dot-diamond"></span><a href="#diamond">Diamond</a></li>
                    <li><span className="dot dot-gemstone"></span><a href="#gemstone">Gemstone</a></li>
                    <li><span className="dot dot-platinum"></span><a href="#platinum">Platinum</a></li>
                    <li><span className="dot dot-gold"></span><a href="#gold">Gold</a></li>
                    <li><span className="dot dot-yellow-gold"></span><a href="#yellow-gold">Yellow Gold</a></li>
                    <li><span className="dot dot-gold-22kt"></span><a href="#22kt-gold">22kt Gold</a></li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div className="mega-column">
                  <h4>By Price</h4>
                  <ul>
                    <li><a href="#mangalsutra-20k-30k">₹ 20k to ₹ 30k</a></li>
                    <li><a href="#mangalsutra-30k-50k">₹ 30k to ₹ 50k</a></li>
                    <li><a href="#mangalsutra-50k-75k">₹ 50k to ₹ 75k</a></li>
                    <li><a href="#mangalsutra-75k-above">₹ 75k and Above</a></li>
                  </ul>
                </div>

                {/* Column 5: Banners */}
                <div className="mega-banners">
                  <div className="mega-banner-card">
                    <img src={mangalsutraEarringsImg} alt="Mangalsutra Earrings" />
                    <div className="banner-label">Mangalsutra Earrings</div>
                  </div>
                  <div className="mega-banner-card">
                    <img src={trendyMangalsutrasImg} alt="Trendy Mangalsutras" />
                    <div className="banner-label">Trendy Mangalsutras</div>
                  </div>
                </div>

                {/* Bottom Full-width Row: Demographic filters */}
                <div className="mega-dropdown-footer">
                  <span className="footer-title">Shop For:</span>
                  <div className="footer-links">
                    <a href="#women" className="footer-pill-btn">For Women</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Necklaces & Pendants Container with Mega-dropdown */}
          <div className="nav-item-container" onMouseLeave={() => setDisabledDropdown(null)}>
            <a href="#rings" className="nav-item-trigger" onClick={() => setDisabledDropdown('necklaces')}>Necklaces & Pendants</a>
            <div className={`mega-dropdown ${disabledDropdown === 'necklaces' ? 'force-hide' : ''}`}>
              <div className="mega-dropdown-inner">
                {/* Column 1 */}
                <div className="mega-column">
                  <h4>Featured</h4>
                  <ul>
                    <li><a href="#latest-necklaces">Latest Designs</a></li>
                    <li><a href="#bestsellers-necklaces">Bestsellers</a></li>
                    <li><a href="#fast-delivery-necklaces">Fast Delivery</a></li>
                    <li><a href="#special-deals-necklaces">Special Deals</a></li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div className="mega-column">
                  <h4>By Style</h4>
                  <ul>
                    <li><a href="#all-necklaces">All Necklaces</a></li>
                    <li><a href="#lightweight-necklaces">Lightweight</a></li>
                    <li><a href="#bridal-necklaces">Bridal</a></li>
                    <li><a href="#evil-eye-necklaces">Evil Eye</a></li>
                    <li><a href="#choker-necklaces">Choker</a></li>
                    <li><a href="#all-pendants">All Pendants</a></li>
                    <li><a href="#alphabet-pendants">Alphabet Pendants</a></li>
                    <li><a href="#heart-pendants">Heart Pendants</a></li>
                    <li><a href="#butterfly-pendants">Butterfly Pendants</a></li>
                    <li><a href="#silver-necklaces">Silver Necklaces</a></li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div className="mega-column">
                  <h4>By Metal & Stone</h4>
                  <ul className="metal-stone-list">
                    <li><span className="dot dot-gold"></span><a href="#gold">Gold</a></li>
                    <li><span className="dot dot-diamond"></span><a href="#diamond">Diamond</a></li>
                    <li><span className="dot dot-pearl"></span><a href="#pearl">Pearl</a></li>
                    <li><span className="dot dot-gemstone"></span><a href="#gemstone">Gemstone</a></li>
                    <li><span className="dot dot-yellow-gold"></span><a href="#yellow-gold">Yellow Gold</a></li>
                    <li><span className="dot dot-rose-gold"></span><a href="#rose-gold">Rose Gold</a></li>
                    <li><span className="dot dot-white-gold"></span><a href="#white-gold">White Gold</a></li>
                    <li><span className="dot dot-gold-22kt"></span><a href="#22kt-gold">22KT Gold</a></li>
                    <li><span className="dot dot-platinum"></span><a href="#platinum">Platinum</a></li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div className="mega-column">
                  <h4>By Price</h4>
                  <ul>
                    <li><a href="#necklace-under-10k">Under ₹ 10K</a></li>
                    <li><a href="#necklace-10k-20k">₹ 10K to ₹ 20K</a></li>
                    <li><a href="#necklace-20k-30k">₹ 20K to ₹ 30K</a></li>
                    <li><a href="#necklace-30k-50k">₹ 30K to ₹ 50K</a></li>
                    <li><a href="#necklace-50k-75k">₹ 50k to ₹ 75k</a></li>
                    <li><a href="#necklace-75k-above">₹ 75K & Above</a></li>
                  </ul>
                </div>

                {/* Column 5: Banners */}
                <div className="mega-banners">
                  <div className="mega-banner-card">
                    <img src={layeredNecklacesImg} alt="Layered Necklaces" />
                    <div className="banner-label">Layered Necklaces</div>
                  </div>
                  <div className="mega-banner-card">
                    <img src={infinityNecklacesImg} alt="Infinity Necklaces" />
                    <div className="banner-label">Infinity Necklaces</div>
                  </div>
                </div>

                {/* Bottom Full-width Row: Demographic filters */}
                <div className="mega-dropdown-footer">
                  <span className="footer-title">Shop For:</span>
                  <div className="footer-links">
                    <a href="#women" className="footer-pill-btn">For Women</a>
                    <a href="#men" className="footer-pill-btn">For Men</a>
                    <a href="#kids" className="footer-pill-btn">For Kids</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Collections Container with Mega-dropdown */}
          <div className="nav-item-container" onMouseLeave={() => setDisabledDropdown(null)}>
            <a href="#rings" className="nav-item-trigger" onClick={() => setDisabledDropdown('collections')}>Collections</a>
            <div className={`mega-dropdown ${disabledDropdown === 'collections' ? 'force-hide' : ''}`}>
              <div className="mega-dropdown-inner">
                {/* Column 1 */}
                <div className="mega-column">
                  <h4>By Occasions</h4>
                  <ul>
                    <li><a href="#coll-anniversary">Anniversary Gifts</a></li>
                    <li><a href="#coll-personalised">Personalised</a></li>
                    <li><a href="#coll-bracelets">Bracelet & Bangles</a></li>
                    <li><a href="#coll-charms">Charms</a></li>
                    <li><a href="#coll-earrings">Earrings</a></li>
                    <li><a href="#coll-necklaces">Necklaces & Pendants</a></li>
                    <li><a href="#coll-rings">Rings</a></li>
                    <li><a href="#coll-solitaires">Solitaires</a></li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div className="mega-column">
                  <h4>By Price</h4>
                  <ul>
                    <li><a href="#coll-under-10k">Under ₹ 10k</a></li>
                    <li><a href="#coll-10k-20k">₹ 10k to ₹ 20k</a></li>
                    <li><a href="#coll-20k-30k">₹ 20k - ₹ 30k</a></li>
                    <li><a href="#coll-30k-50k">₹ 30k to ₹ 50k</a></li>
                    <li><a href="#coll-50k-75k">₹ 50k to ₹ 75k</a></li>
                    <li><a href="#coll-75k-above">₹ 75k & Above</a></li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div className="mega-column">
                  <h4>Gifting</h4>
                  <ul>
                    <li><a href="#coll-wife">Wife</a></li>
                    <li><a href="#coll-daughter">Daughter</a></li>
                    <li><a href="#coll-kids">Kids</a></li>
                    <li><a href="#coll-men">Men</a></li>
                    <li><a href="#coll-mother">Mother</a></li>
                    <li><a href="#coll-self">Self</a></li>
                  </ul>
                </div>

                {/* Column 4 - Empty Spacer */}
                <div className="mega-column" style={{ visibility: 'hidden' }}></div>

                {/* Column 5: Single Banner */}
                <div className="mega-banners">
                  <div className="mega-banner-card" style={{ gridColumn: 'span 2' }}>
                    <img src={giftCardsImg} alt="Gift Cards" />
                    <div className="banner-label">Gift Cards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </nav>
      </div>
      {/* Digital Gold Modal */}
      {goldModalOpen && (
        <div className="gold-modal-overlay">
          <div className="gold-modal-container">
            <button className="gold-modal-close" onClick={() => setGoldModalOpen(false)}>×</button>
            
            {goldActiveTab === 'menu' && (
              <div className="gold-menu-view">
                <h3>Zoniraz Digital Gold</h3>
                <p className="gold-subtitle">Invest, liquidate, or upgrade your gold securely in real-time.</p>
                <div className="gold-options-grid">
                  <div className="gold-option-card">
                    <div className="gold-icon-wrapper">🪙</div>
                    <h4>Buy Gold</h4>
                    <p>Purchase 24KT pure gold starting from just ₹100.</p>
                    <button className="gold-action-btn" onClick={() => setGoldActiveTab('buy')}>Buy Gold</button>
                  </div>
                  <div className="gold-option-card">
                    <div className="gold-icon-wrapper">📉</div>
                    <h4>Sell Gold</h4>
                    <p>Sell your stored gold balance instantly at real-time rates.</p>
                    <button className="gold-action-btn" onClick={() => setGoldActiveTab('sell')}>Sell Gold</button>
                  </div>
                  <div className="gold-option-card">
                    <div className="gold-icon-wrapper">🔄</div>
                    <h4>Exchange Old Gold</h4>
                    <p>Convert your physical old gold ornaments into pure digital gold credits.</p>
                    <button className="gold-action-btn" onClick={() => setGoldActiveTab('exchange')}>Exchange Gold</button>
                  </div>
                </div>
              </div>
            )}

            {goldActiveTab === 'buy' && (
              <div className="gold-tab-view">
                <button className="gold-back-btn" onClick={() => setGoldActiveTab('menu')}>← Back</button>
                <h3>Buy Gold</h3>
                <p className="gold-rate-ticker">Live buying rate: <strong>₹7,345/gm</strong> (inclusive of GST)</p>
                <form className="gold-portal-form" onSubmit={(e) => { e.preventDefault(); alert('Gold purchased successfully!'); setGoldModalOpen(false); }}>
                  <div className="form-group">
                    <label>Amount in Rupees (₹)</label>
                    <input type="number" placeholder="Enter amount (e.g. 5000)" required min="100" />
                  </div>
                  <div className="form-group-or">or</div>
                  <div className="form-group">
                    <label>Weight in Grams (gm)</label>
                    <input type="number" step="0.0001" placeholder="Enter weight (e.g. 0.5)" />
                  </div>
                  <button type="submit" className="gold-submit-btn">Proceed to Buy</button>
                </form>
              </div>
            )}

            {goldActiveTab === 'sell' && (
              <div className="gold-tab-view">
                <button className="gold-back-btn" onClick={() => setGoldActiveTab('menu')}>← Back</button>
                <h3>Sell Gold</h3>
                <p className="gold-rate-ticker">Live selling rate: <strong>₹7,120/gm</strong></p>
                <form className="gold-portal-form" onSubmit={(e) => { e.preventDefault(); alert('Gold sold successfully!'); setGoldModalOpen(false); }}>
                  <div className="form-group">
                    <label>Weight to Sell (gm)</label>
                    <input type="number" step="0.0001" placeholder="Enter weight in grams" required />
                  </div>
                  <button type="submit" className="gold-submit-btn">Proceed to Sell</button>
                </form>
              </div>
            )}

            {goldActiveTab === 'exchange' && (
              <div className="gold-tab-view">
                <button className="gold-back-btn" onClick={() => setGoldActiveTab('menu')}>← Back</button>
                <h3>Exchange Old Gold</h3>
                <p className="gold-rate-ticker">Estimated exchange valuation rate: <strong>₹6,980/gm</strong></p>
                <form className="gold-portal-form" onSubmit={(e) => { e.preventDefault(); alert('Exchange query submitted! Visit nearest store.'); setGoldModalOpen(false); }}>
                  <div className="form-group">
                    <label>Ornaments Description</label>
                    <input type="text" placeholder="e.g. Old necklace, Gold chain" required />
                  </div>
                  <div className="form-group">
                    <label>Approximate Weight (gm)</label>
                    <input type="number" step="0.01" placeholder="Enter estimated weight" required />
                  </div>
                  <div className="form-group">
                    <label>Purity Standard</label>
                    <select required style={{ width: '100%', padding: '10px', border: '1.5px solid var(--color-border-light)', borderRadius: '2px', backgroundColor: 'white' }}>
                      <option value="22kt">22KT Gold (91.6% Pure)</option>
                      <option value="18kt">18KT Gold (75.0% Pure)</option>
                      <option value="14kt">14KT Gold (58.5% Pure)</option>
                    </select>
                  </div>
                  <button type="submit" className="gold-submit-btn">Request Exchange Value</button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Responsive Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            
            {/* Header: Close Button & Quick Utilities */}
            <div className="drawer-header-row">
              <button className="drawer-close-btn" onClick={() => setMobileMenuOpen(false)}>
                ✕
              </button>
              
              <div className="drawer-quick-actions">
                <a href="#delivery-stores" className="drawer-action-box" onClick={() => setMobileMenuOpen(false)}>
                  <span className="box-icon">🏪</span>
                  <span className="box-label">Stores</span>
                </a>
                
                <a href="#digital-gold" className="drawer-action-box" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); setGoldModalOpen(true); setGoldActiveTab('menu'); }}>
                  <span className="box-icon">🪙</span>
                  <span className="box-label">Gold</span>
                </a>
                
                <div className="drawer-action-box flag-box">
                  <span className="flag-icon">🇮🇳</span>
                  <span className="box-label">ENG</span>
                </div>
              </div>
            </div>

            {/* Middle: Category list with arrows */}
            <div className="drawer-categories-list">
              {[
                { name: "Rings", desc: "Browse by Style, Metals & Stones", hash: "#rings", img: silverRingsImg },
                { name: "Earrings", desc: "Browse by Style, Price & More..", hash: "#earrings", img: dancingHoopsImg },
                { name: "Bracelets & Bangles", desc: "Browse by Style, Metal & Kids", hash: "#bracelets", img: stretchableBanglesImg },
                { name: "Solitaires", desc: "For Engagement, Anniversaries & Milestones", hash: "#solitaires", img: solitaireSetsImg },
                { name: "Mangalsutras", desc: "Browse by neckwear, bracelets & more", hash: "#mangalsutras", img: trendyMangalsutrasImg },
                { name: "Necklaces & Pendants", desc: "Browse by Style, Metal & Price", hash: "#necklaces", img: infinityNecklacesImg },
                { name: "Silver by Shaya", desc: "Sterling silver collection", hash: "#silver", img: silverEarringsImg },
                { name: "Gifting", desc: "For All Relationships & Occasions", hash: "#gifting", img: giftsForMomImg },
                { name: "Trending", desc: "Most loved designs", hash: "#trending", img: gulnaaraImg }
              ].map((category, idx) => (
                <a 
                  key={idx}
                  href={category.hash} 
                  className="drawer-category-item" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="drawer-item-left-content">
                    {category.img && <img src={category.img} alt={category.name} className="drawer-category-icon-img" />}
                    <div className="category-meta">
                      <span className="category-name">{category.name}</span>
                      <span className="category-desc">{category.desc}</span>
                    </div>
                  </div>
                  <span className="category-arrow">›</span>
                </a>
              ))}

              {/* OUR STORY & Auth Buttons moved directly under Trending button */}
              <div className="drawer-inline-footer">
                <a href="#our-story" className="drawer-story-link" onClick={() => setMobileMenuOpen(false)}>
                  OUR STORY
                </a>
                <div className="drawer-auth-buttons">
                  {user ? (
                    <button 
                      onClick={() => { setMobileMenuOpen(false); logout(); }} 
                      className="drawer-btn login"
                      style={{ border: 'none', background: 'none', cursor: 'pointer', display: 'block', width: '100%' }}
                    >
                      LOG OUT
                    </button>
                  ) : (
                    <button 
                      onClick={() => { setMobileMenuOpen(false); setShowAuthModal(true); }} 
                      className="drawer-btn login"
                      style={{ border: 'none', background: 'none', cursor: 'pointer', display: 'block', width: '100%' }}
                    >
                      SIGN IN
                    </button>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </header>
  );
}

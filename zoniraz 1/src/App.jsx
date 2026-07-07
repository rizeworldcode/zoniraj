import React, { useContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ShopByCollection from './components/ShopByCollection';
import FindPerfectMatch from './components/FindPerfectMatch';
import TrendingNow from './components/TrendingNow';
import ZonirazWorld from './components/ZonirazWorld';
import NewArrivals from './components/NewArrivals';
import CuratedForYou from './components/CuratedForYou';
import ZonirazAssurance from './components/ZonirazAssurance';
import GoldExchange from './components/GoldExchange';
import ExchangeProgram from './components/ExchangeProgram';
import ZonirazExperience from './components/ZonirazExperience';
import BottomRibbon from './components/BottomRibbon';
import Footer from './components/Footer';
import CategoryPage from './components/CategoryPage';
import WishlistPage from './components/WishlistPage';
import CartPage from './components/CartPage';
import ProductDetailPage from './components/ProductDetailPage';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';
import AboutPage from './components/AboutPage';
import DeliveryPage from './components/DeliveryPage';
import UserDashboard from './components/UserDashboard';
import CheckoutPage from './components/CheckoutPage';
import TermsPage from './components/TermsPage';
import PrivacyPage from './components/PrivacyPage';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import AuthModal from './components/AuthModal';
import { products } from './data/products';

const hashToCategoryMap = {
  // Rings
  'rings': 'rings',
  'all-rings': 'rings',
  'couple-rings': 'rings',
  'engagement': 'rings',
  'dailywear': 'rings',
  'cocktail': 'rings',
  'promise-rings': 'rings',
  'bridal-collection': 'rings',
  'everyday-wear': 'rings',
  'office-wear': 'rings',
  'solitaire-dream': 'rings',
  'heritage-gold': 'rings',
  'bridal': 'rings',
  'everyday': 'rings',
  'office': 'rings',
  'solitaire': 'rings',
  'heritage': 'rings',
  'earrings': 'rings',
  'bracelets': 'rings',
  'solitaires': 'rings',
  'mangalsutras': 'rings',
  'necklaces': 'rings',
  'collections': 'rings',
  'pendants': 'rings',
  'nose-pins': 'rings',
  'mangalsutra': 'rings',
  'bangles': 'rings',
  'auspicious': 'rings',
  'gifting': 'rings',
  'origami': 'rings',
  'women': 'rings',
  'men': 'rings',
  'kids': 'rings'
};

function AppContent() {
  const { user, isAuthModalOpen, setIsAuthModalOpen } = useContext(AuthContext);
  const [currentView, setCurrentView] = React.useState('home');
  const [wishlist, setWishlist] = React.useState({});
  const [cart, setCart] = React.useState({});
  const [selectedProductId, setSelectedProductId] = React.useState(null);
  const [helpCategory, setHelpCategory] = React.useState('delivery');

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '');
      if (hash.startsWith('product-')) {
        const id = parseInt(hash.replace('product-', ''));
        setSelectedProductId(id);
        setCurrentView('product');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === 'wishlist') {
        setCurrentView('wishlist');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === 'cart') {
        setCurrentView('cart');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === 'profile') {
        if (user) {
          setCurrentView('profile');
          window.scrollTo({ top: 0, behavior: 'instant' });
        } else {
          window.location.hash = '';
          setIsAuthModalOpen(true);
        }
      } else if (hash === 'checkout') {
        setCurrentView('checkout');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === 'contact') {
        setCurrentView('contact');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === 'blog' || hash === 'blogs') {
        setCurrentView('blog');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === 'about') {
        setCurrentView('about');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === 'terms' || hash === 'terms-conditions') {
        setCurrentView('terms');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === 'privacy' || hash === 'privacy-policy') {
        setCurrentView('privacy');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === 'delivery' || hash === 'delivery-information') {
        setHelpCategory('delivery');
        setCurrentView('delivery');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === 'shipping' || hash === 'international-shipping') {
        setHelpCategory('international');
        setCurrentView('delivery');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === 'payment' || hash === 'payment-options') {
        setHelpCategory('payment');
        setCurrentView('delivery');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === 'returns') {
        setHelpCategory('returns');
        setCurrentView('delivery');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === 'giftcards') {
        setHelpCategory('giftcards');
        setCurrentView('delivery');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        // Find if hash matches any category key
        let matchedView = null;
        for (const [key, view] of Object.entries(hashToCategoryMap)) {
          if (hash === key || hash.split('-').includes(key) || (key === 'coll-' && hash.startsWith('coll-'))) {
            matchedView = view;
            break;
          }
        }

        if (matchedView) {
          setCurrentView(matchedView);
          window.scrollTo({ top: 0, behavior: 'instant' });
        } else {
          setCurrentView('home');
          setSelectedProductId(null);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [user]);

  const selectedProduct = products.find(p => p.id === selectedProductId) || null;

  return (
    <>
      <Header wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart} />
        {currentView === 'product' ? (
          <ProductDetailPage
            product={selectedProduct}
            wishlist={wishlist}
            setWishlist={setWishlist}
            cart={cart}
            setCart={setCart}
            onBack={() => { window.history.back(); }}
          />
        ) : currentView === 'rings' ? (
          <CategoryPage category="Rings" wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart} />
        ) : currentView === 'contact' ? (
          <ContactPage />
        ) : currentView === 'blog' ? (
          <BlogPage />
        ) : currentView === 'about' ? (
          <AboutPage />
        ) : currentView === 'terms' ? (
          <TermsPage />
        ) : currentView === 'privacy' ? (
          <PrivacyPage />
        ) : currentView === 'delivery' ? (
          <DeliveryPage initialCategory={helpCategory} />
        ) : currentView === 'wishlist' ? (
          <WishlistPage wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart} />
        ) : currentView === 'cart' ? (
          <CartPage cart={cart} setCart={setCart} />
        ) : currentView === 'profile' ? (
          <UserDashboard />
        ) : currentView === 'checkout' ? (
          <CheckoutPage />
        ) : (
          <>
            <Hero />
            <ShopByCollection />
            <FindPerfectMatch />
            <TrendingNow />
            <ZonirazWorld />
            <NewArrivals />
            <CuratedForYou />
            <ZonirazAssurance />
            <GoldExchange />
            <ExchangeProgram />
            <ZonirazExperience />
            <BottomRibbon />
          </>
        )}
        <Footer />
        <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      </>
    );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}

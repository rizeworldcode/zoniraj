import React, { useRef } from 'react';
import earringsImg from '../assets/silver-earrings.png';
import necklacesImg from '../assets/silver-necklaces.png';
import braceletsImg from '../assets/silver-bracelets.png';
import hoopsImg from '../assets/dancing-hoops.png';
import mangalsutraImg from '../assets/mangalsutra-earrings.png';
import charmsImg from '../assets/watch-charms.png';
import layeredImg from '../assets/layered-necklaces.png';
import banglesImg from '../assets/stretchable-bangles.png';

const defaultImages = {
  'rings': earringsImg,
  'earrings': hoopsImg,
  'pendants': necklacesImg,
  'nose-pins': charmsImg,
  'bracelets': braceletsImg,
  'mangalsutra': mangalsutraImg,
  'mangalsutras': mangalsutraImg,
  'necklaces': layeredImg,
  'bangles': banglesImg
};

const staticCategories = [
  { id: 'rings',        label: 'RINGS',           image: earringsImg },
  { id: 'earrings',     label: 'EARRINGS',         image: hoopsImg },
  { id: 'pendants',     label: 'PENDANTS',         image: necklacesImg },
  { id: 'nose-pins',    label: 'NOSE PINS',        image: charmsImg },
  { id: 'bracelets',    label: 'BRACELETS',        image: braceletsImg },
  { id: 'mangalsutra',  label: 'MANGALSUTRA',      image: mangalsutraImg },
  { id: 'necklaces',    label: 'NECKLACES',        image: layeredImg },
  { id: 'bangles',      label: 'BANGLES',          image: banglesImg },
];

export default function FindPerfectMatch({ products = [] }) {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
  };

  // Dynamically extract categories from real backend products
  let categories = staticCategories;
  if (products && products.length > 0) {
    const categoriesMap = {};
    products.forEach(p => {
      if (!p.category) return;
      const catName = String(p.category).trim();
      const cleanName = catName.toLowerCase();

      // Exclude demographics
      if (
        cleanName === "men's jewellery" ||
        cleanName === "women's jewellery" ||
        cleanName === "kids jewellery" ||
        cleanName === "men" ||
        cleanName === "women" ||
        cleanName === "kids"
      ) {
        return;
      }

      const id = cleanName.replace(/ /g, '-');
      if (!categoriesMap[cleanName]) {
        categoriesMap[cleanName] = {
          id,
          label: catName.toUpperCase(),
          image: p.image || p.images?.[0] || ''
        };
      } else {
        if (!categoriesMap[cleanName].image && p.image) {
          categoriesMap[cleanName].image = p.image;
        }
      }
    });

    const parsed = Object.values(categoriesMap);
    if (parsed.length > 0) {
      categories = parsed.map(cat => {
        if (!cat.image || cat.image.includes('placehold.co')) {
          cat.image = defaultImages[cat.id] || defaultImages['rings'];
        }
        return cat;
      });
    }
  }

  return (
    <section className="fpm-section">
      <div className="fpm-header">
        <div>
          <h2 className="fpm-title">Find Your Perfect Match</h2>
          <div className="fpm-underline" />
        </div>
        <div className="fpm-arrows">
          <button className="fpm-arrow" onClick={() => scroll(-1)} aria-label="Scroll left">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
          </button>
          <button className="fpm-arrow" onClick={() => scroll(1)} aria-label="Scroll right">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="fpm-scroll-wrapper" ref={scrollRef}>
        {categories.map((cat) => (
          <a key={cat.id} href={`#${cat.id}`} className="fpm-card">
            <div className="fpm-card-img-wrap">
              <img src={cat.image} alt={cat.label} className="fpm-card-img" />
            </div>
            <span className="fpm-card-label">{cat.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

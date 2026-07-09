import React, { useState, useEffect } from 'react';

const labelMap = {
  'bridal': 'SIGNATURE',
  'everyday': 'LIFESTYLE',
  'office': 'ELEGANT',
  'solitaire': 'FINE JEWELLERY',
  'heritage': 'CLASSIC'
};

export default function AllCollectionsPage({ products = [] }) {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:55000/api/userSide/getCollection')
      .then(res => res.json())
      .then(resData => {
        if (resData.success && resData.data) {
          const mapped = resData.data.map(col => {
            const id = col.slug || col._id;
            const label = col.tags?.[0]?.toUpperCase() || labelMap[col.slug] || 'COLLECTION';
            
            // Search products to calculate count and find real product image as fallback
            const cleanSlug = String(col.slug || '').toLowerCase();
            const matchingProducts = products.filter(p => {
              const tagsList = p.tags ? (Array.isArray(p.tags) ? p.tags : [p.tags]) : [];
              const matchesTag = tagsList.some(t => String(t).toLowerCase() === cleanSlug);
              const matchesName = String(p.name || '').toLowerCase().includes(cleanSlug);
              return matchesTag || matchesName;
            });

            let image = col.image;
            if (!image || image === '/images/site/default-collection.jpg') {
              if (matchingProducts.length > 0 && matchingProducts[0].image) {
                image = matchingProducts[0].image;
              } else {
                image = `http://localhost:55000/uploads/zoni.png`;
              }
            } else if (!image.startsWith('http') && !image.startsWith('/images/')) {
              image = `http://localhost:55000/uploads/${image}`;
            }

            return {
              id,
              label,
              title: col.name,
              image,
              href: `#${id}`,
              productCount: matchingProducts.length
            };
          });
          setCollections(mapped);
        }
      })
      .catch(err => console.error('Error fetching collections:', err))
      .finally(() => setLoading(false));
  }, [products]);

  return (
    <div className="collections-page-wrapper">
      <div className="collections-page-hero">
        <div className="collections-page-hero-overlay" />
        <div className="collections-page-hero-content">
          <span className="collections-subtitle">EXQUISITE CRAFTSMANSHIP</span>
          <h1 className="collections-title">Our Collections</h1>
          <p className="collections-desc">
            Explore curated design collections tailored for life's unforgettable moments, from bold everyday statement pieces to classic heritage bridal jewellery.
          </p>
        </div>
      </div>

      <div className="collections-grid-container">
        {loading ? (
          <div className="collections-spinner-wrap">
            <div className="collections-spinner" />
            <p>Gathering Collections...</p>
          </div>
        ) : (
          <div className="collections-3d-grid">
            {collections.map((col, index) => (
              <a 
                key={col.id} 
                href={col.href} 
                className="collection-3d-card"
                style={{ '--anim-delay': `${index * 0.1}s` }}
              >
                <div className="collection-3d-card-inner">
                  <div className="collection-3d-card-image-wrap">
                    <img src={col.image} alt={col.title} className="collection-3d-image" />
                    <div className="collection-3d-glow" />
                  </div>
                  <div className="collection-3d-card-content">
                    <span className="collection-3d-card-label">{col.label}</span>
                    <h3 className="collection-3d-card-title">{col.title}</h3>
                    <div className="collection-3d-card-footer">
                      <span className="collection-3d-count">{col.productCount} Designs</span>
                      <span className="collection-3d-explore">EXPLORE</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

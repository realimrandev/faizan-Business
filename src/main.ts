import './style.css';
import {
  businessInfo,
  whatsappMessages,
  getWhatsAppUrl,
  getPhoneUrl,
  products,
  services,
  whyChooseUs,
  navLinks,
  categories,
} from './data/businessData';

// ============================================================
// SVG ICONS
// ============================================================
const socialLinks = {
  instagram: 'https://www.instagram.com/faizanautoandoilstore/',
  facebook: 'https://m.facebook.com/story.php?story_fbid=pfbid0kp59fv49oGy6E4CdEqEv2ruw7dGFvYDoqGQwa5xt7TXRPVHXG4VL5w6nh9aygK62l&id=61595045006482&mibextid=Nif5oz',
  tiktok: 'https://www.tiktok.com/@faizan.auto1',
};

const icons = {
  mapPin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  phone: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>`,
  arrowUp: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`,
  shield: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  users: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  messageCircle: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
  clock: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  navigation: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>`,
  send: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  eye: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
};

const iconMap: Record<string, string> = {
  shield: icons.shield,
  users: icons.users,
  mapPin: icons.mapPin,
  messageCircle: icons.messageCircle,
};

// ============================================================
// RENDER THE WEBSITE
// ============================================================

function renderApp(): void {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;
  const whatsappGeneralUrl = getWhatsAppUrl(whatsappMessages.general);
  const phoneUrl = getPhoneUrl();

  app.innerHTML = `
    <!-- LOADING SCREEN -->
    <div class="loader" id="loader">
      <div class="loader-logo">Faizan <span>Auto</span></div>
      <div class="loader-bar"><div class="loader-bar-inner"></div></div>
    </div>

    <!-- NAVIGATION -->
    <nav class="navbar" id="navbar">
      <div class="container">
        <a href="#home" class="nav-logo" id="nav-logo">
          <div class="nav-logo-icon">FA</div>
          <div class="nav-logo-text">Faizan <span>Auto</span></div>
        </a>
        <ul class="nav-links" id="nav-links">
          ${navLinks.map(link => `<li><a href="${link.href}" class="nav-link">${link.label}</a></li>`).join('')}
          <li><a href="${whatsappGeneralUrl}" target="_blank" rel="noopener noreferrer" class="nav-link nav-cta">WhatsApp Us</a></li>
        </ul>
        <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle navigation menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    <!-- HERO SECTION -->
    <section class="hero-section" id="home">
      <div class="hero-bg">
        <img src="/images/hero-bg.jpg" alt="Faizan Auto Spare Parts premium automotive store" loading="eager" fetchpriority="high" />
      </div>
      <div class="hero-content">
        <div class="hero-badge">✦ Your Trusted Auto Parts Store</div>
        <h1 class="hero-title">
          FAIZAN <span class="accent">AUTO</span><br/>
          SPARE PARTS &amp; OIL STORE
        </h1>
        <p class="hero-subtitle">${businessInfo.tagline}. ${businessInfo.description}</p>
        <div class="hero-buttons">
          <a href="#products" class="btn btn-primary" id="hero-shop-btn">
            ${icons.eye} Shop / View Products
          </a>
          <a href="${whatsappGeneralUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" id="hero-whatsapp-btn">
            ${icons.whatsapp} WhatsApp Us
          </a>
        </div>
        <div class="hero-location">
          ${icons.mapPin}
          <span>${businessInfo.shortAddress}</span>
        </div>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section class="section about-section" id="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-image animate-on-scroll">
            <img src="/images/hero-bg.jpg" alt="Faizan Auto Spare Parts Store" loading="lazy" decoding="async" />
            <div class="about-image-overlay">Serving Shahdara since day one</div>
          </div>
          <div class="about-text animate-on-scroll">
            <div class="section-label">About Us</div>
            <h2>Your Trusted <span style="color:var(--accent)">Auto Parts</span> Partner in Shahdara</h2>
            <p>${businessInfo.description}</p>
            <p>Located on Main Kala Khatai Road, we provide a wide range of automotive spare parts, engine oils, car care products, and accessories. Our team is ready to help you find the right product for your vehicle.</p>
            <div class="about-stats">
              <div class="stat-item">
                <div class="stat-number">500+</div>
                <div class="stat-label">Products</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">1000+</div>
                <div class="stat-label">Happy Customers</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">50+</div>
                <div class="stat-label">Brands</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- PRODUCTS SECTION -->
    <section class="section products-section" id="products">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <div class="section-label">Our Products</div>
          <h2 class="section-title">Browse Our Product Range</h2>
          <p class="section-subtitle">Quality automotive products from trusted brands</p>
        </div>
        <div class="products-filter animate-on-scroll" id="product-filters">
          ${categories.map(cat => `<button class="filter-btn${cat === 'All' ? ' active' : ''}" data-category="${cat}">${cat}</button>`).join('')}
        </div>
        <div class="products-grid" id="products-grid">
          ${renderProducts(products)}
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- SERVICES SECTION -->
    <section class="section services-section" id="services">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <div class="section-label">Our Services</div>
          <h2 class="section-title">What We Offer</h2>
          <p class="section-subtitle">A complete range of automotive products and services</p>
        </div>
        <div class="services-grid">
          ${services.map((service, i) => `
            <div class="service-card animate-on-scroll" style="transition-delay: ${i * 0.1}s">
              <span class="service-icon">${service.icon}</span>
              <h3 class="service-title">${service.title}</h3>
              <p class="service-description">${service.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- WHY CHOOSE US SECTION -->
    <section class="section why-us-section" id="why-us">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <div class="section-label">Why Choose Us</div>
          <h2 class="section-title">Why Faizan Auto?</h2>
          <p class="section-subtitle">Reasons our customers keep coming back</p>
        </div>
        <div class="why-grid">
          ${whyChooseUs.map((item, i) => `
            <div class="why-card animate-on-scroll" style="transition-delay: ${i * 0.1}s">
              <div class="why-icon">${iconMap[item.icon] || '⭐'}</div>
              <div>
                <h3 class="why-title">${item.title}</h3>
                <p class="why-description">${item.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- LOCATION SECTION -->
    <section class="section location-section" id="location">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <div class="section-label">Find Us</div>
          <h2 class="section-title">Our Location</h2>
          <p class="section-subtitle">Visit us on Kala Khatai Road, Shahdara</p>
        </div>
        <div class="location-grid">
          <div class="location-map animate-on-scroll">
            <iframe
              src="https://maps.google.com/maps?q=J7WV%2B52+Shahdara+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowfullscreen
              loading="lazy"
              title="Faizan Auto Location on Google Maps"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="location-info">
            <div class="location-detail animate-on-scroll">
              <div class="location-detail-icon">${icons.mapPin}</div>
              <div>
                <div class="location-detail-title">Address</div>
                <div class="location-detail-text">${businessInfo.address}</div>
              </div>
            </div>
            <div class="location-detail animate-on-scroll" style="transition-delay: 0.1s">
              <div class="location-detail-icon">${icons.navigation}</div>
              <div>
                <div class="location-detail-title">Plus Code</div>
                <div class="location-detail-text">
                  <a href="${businessInfo.googleMapsUrl}" target="_blank" rel="noopener noreferrer">${businessInfo.locationCode}</a>
                </div>
              </div>
            </div>
            <div class="location-detail animate-on-scroll" style="transition-delay: 0.2s">
              <div class="location-detail-icon">${icons.phone}</div>
              <div>
                <div class="location-detail-title">Phone / WhatsApp</div>
                <div class="location-detail-text">
                  <a href="${phoneUrl}">${businessInfo.phone}</a>
                </div>
              </div>
            </div>
            <div class="location-detail animate-on-scroll" style="transition-delay: 0.3s">
              <div class="location-detail-icon">${icons.clock}</div>
              <div>
                <div class="location-detail-title">Business Hours</div>
                <div class="location-detail-text">Open Daily — Contact for timings</div>
              </div>
            </div>
            <a href="${businessInfo.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="margin-top: 8px;" id="get-directions-btn">
              ${icons.navigation} Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- CONTACT / INQUIRY SECTION -->
    <section class="section contact-section" id="contact">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <div class="section-label">Contact Us</div>
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-subtitle">Have a question? Reach out via WhatsApp or fill the inquiry form</p>
        </div>
        <div class="contact-grid">
          <div class="contact-form animate-on-scroll" id="inquiry-form-container">
            <h3>Send an Inquiry</h3>
            <p>Fill in the details below and we'll get back to you on WhatsApp.</p>
            <form id="inquiry-form">
              <div class="form-group">
                <label for="inquiry-name">Your Name</label>
                <input type="text" id="inquiry-name" placeholder="Enter your name" required />
              </div>
              <div class="form-group">
                <label for="inquiry-phone">Phone Number</label>
                <input type="tel" id="inquiry-phone" placeholder="03XX XXXXXXX" required />
              </div>
              <div class="form-group">
                <label for="inquiry-product">Product / Inquiry About</label>
                <input type="text" id="inquiry-product" placeholder="e.g. Engine Oil, Brake Pads" required />
              </div>
              <div class="form-group">
                <label for="inquiry-message">Message</label>
                <textarea id="inquiry-message" placeholder="Tell us more about what you need..." required></textarea>
              </div>
              <button type="submit" class="btn btn-whatsapp" style="width:100%; justify-content:center;" id="submit-inquiry-btn">
                ${icons.send} Send via WhatsApp
              </button>
            </form>
          </div>
          <div class="contact-quick animate-on-scroll" style="transition-delay: 0.15s">
            <a href="${whatsappGeneralUrl}" target="_blank" rel="noopener noreferrer" class="quick-card" id="quick-whatsapp">
              <div class="quick-icon whatsapp">${icons.whatsapp}</div>
              <div>
                <div class="quick-title">WhatsApp</div>
                <div class="quick-desc">Chat directly on WhatsApp for quick inquiries</div>
              </div>
            </a>
            <a href="${phoneUrl}" class="quick-card" id="quick-phone">
              <div class="quick-icon phone">${icons.phone}</div>
              <div>
                <div class="quick-title">Call Us</div>
                <div class="quick-desc">${businessInfo.phone}</div>
              </div>
            </a>
            <a href="${businessInfo.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="quick-card" id="quick-maps">
              <div class="quick-icon maps">${icons.mapPin}</div>
              <div>
                <div class="quick-title">Visit Our Store</div>
                <div class="quick-desc">${businessInfo.shortAddress}</div>
              </div>
            </a>
            <div class="social-links-row">
              <a href="${socialLinks.instagram}" target="_blank" rel="noopener noreferrer" class="social-link instagram" id="contact-instagram" aria-label="Follow on Instagram">
                ${icons.instagram}
                <span>Instagram</span>
              </a>
              <a href="${socialLinks.facebook}" target="_blank" rel="noopener noreferrer" class="social-link facebook" id="contact-facebook" aria-label="Follow on Facebook">
                ${icons.facebook}
                <span>Facebook</span>
              </a>
              <a href="${socialLinks.tiktok}" target="_blank" rel="noopener noreferrer" class="social-link tiktok" id="contact-tiktok" aria-label="Follow on TikTok">
                ${icons.tiktok}
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer" id="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3>Faizan <span>Auto</span></h3>
            <p>${businessInfo.description}</p>
            <a href="${whatsappGeneralUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm" id="footer-whatsapp-btn">
              ${icons.whatsapp} WhatsApp Faizan Auto
            </a>
            <div class="footer-social">
              <a href="${socialLinks.instagram}" target="_blank" rel="noopener noreferrer" class="footer-social-btn instagram" id="footer-instagram" aria-label="Instagram">
                ${icons.instagram}
              </a>
              <a href="${socialLinks.facebook}" target="_blank" rel="noopener noreferrer" class="footer-social-btn facebook" id="footer-facebook" aria-label="Facebook">
                ${icons.facebook}
              </a>
              <a href="${socialLinks.tiktok}" target="_blank" rel="noopener noreferrer" class="footer-social-btn tiktok" id="footer-tiktok" aria-label="TikTok">
                ${icons.tiktok}
              </a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              ${navLinks.map(link => `<li><a href="${link.href}">${link.label}</a></li>`).join('')}
            </ul>
          </div>
          <div class="footer-col">
            <h4>Products</h4>
            <ul>
              ${categories.filter(c => c !== 'All').slice(0, 6).map(c => `<li><a href="#products">${c}</a></li>`).join('')}
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="${phoneUrl}">${businessInfo.phone}</a></li>
              <li><a href="${whatsappGeneralUrl}" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="${businessInfo.googleMapsUrl}" target="_blank" rel="noopener noreferrer">Google Maps</a></li>
              <li><a href="#location">${businessInfo.shortAddress}</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${businessInfo.year} ${businessInfo.name}. All rights reserved.</p>
          <p>Kala Khatai Road, Shahdara, Pakistan</p>
        </div>
      </div>
    </footer>

    <!-- FLOATING WHATSAPP BUTTON -->
    <a href="${whatsappGeneralUrl}" target="_blank" rel="noopener noreferrer" class="whatsapp-float" id="whatsapp-float" aria-label="Chat on WhatsApp">
      ${icons.whatsapp}
    </a>

    <!-- SCROLL TO TOP -->
    <button class="scroll-top" id="scroll-top" aria-label="Scroll to top">
      ${icons.arrowUp}
    </button>
  `;

  // Initialize all interactivity
  initLoader();
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initProductFilters();
  initImageFallback();
  initInquiryForm();
  initScrollToTop();
}

// ============================================================
// RENDER PRODUCTS
// ============================================================
// Escapes text before it is placed inside HTML (prevents HTML/script injection)
function escapeHtml(value: string): string {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderProducts(productsToRender: typeof products): string {
  return productsToRender.map((product, i) => {
    const whatsappUrl = getWhatsAppUrl(whatsappMessages.product(product.name));
    return `
      <div class="product-card animate-on-scroll" style="transition-delay: ${Math.min(i * 0.08, 0.5)}s" data-category="${escapeHtml(product.category)}">
        <div class="product-image">
          <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" width="800" height="600" loading="lazy" decoding="async" />
          <span class="product-category-badge">${escapeHtml(product.category)}</span>
        </div>
        <div class="product-info">
          ${product.brand ? `<div class="product-brand">${escapeHtml(product.brand)}</div>` : ''}
          <h3 class="product-name">${escapeHtml(product.name)}</h3>
          <p class="product-description">${escapeHtml(product.description)}</p>
          <div class="product-actions">
            <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm" id="product-whatsapp-${escapeHtml(product.id)}">
              ${icons.whatsapp} Ask
            </a>
            <a href="${getPhoneUrl()}" class="btn btn-secondary btn-sm" id="product-call-${escapeHtml(product.id)}">
              ${icons.phone} Call
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// If a product image fails to load, show the hero image instead (no inline JS, CSP safe)
function initImageFallback(): void {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  grid.addEventListener('error', (e) => {
    const img = e.target;
    if (img instanceof HTMLImageElement && !img.dataset.fallback) {
      img.dataset.fallback = '1';
      img.src = '/images/hero-bg.jpg';
    }
  }, true);
}

// ============================================================
// LOADING SCREEN
// ============================================================
function initLoader(): void {
  const loader = document.getElementById('loader');
  if (!loader) return;

  setTimeout(() => {
    loader.classList.add('hidden');
    setTimeout(() => loader.remove(), 500);
  }, 1800);
}

// ============================================================
// NAVBAR SCROLL EFFECT
// ============================================================
function initNavbar(): void {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const el = section as HTMLElement;
      const top = el.offsetTop;
      const height = el.offsetHeight;
      const id = el.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// ============================================================
// MOBILE MENU
// ============================================================
function initMobileMenu(): void {
  const btn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  if (!btn || !navLinks) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ============================================================
// SCROLL ANIMATIONS (Intersection Observer)
// ============================================================
function initScrollAnimations(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// ============================================================
// PRODUCT FILTERING
// ============================================================
function initProductFilters(): void {
  const filterContainer = document.getElementById('product-filters');
  const grid = document.getElementById('products-grid');
  if (!filterContainer || !grid) return;

  filterContainer.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (!target.classList.contains('filter-btn')) return;

    // Update active state
    filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    target.classList.add('active');

    const category = target.dataset.category || 'All';

    // Filter and re-render
    const filtered = category === 'All'
      ? products
      : products.filter(p => p.category === category);

    grid.innerHTML = renderProducts(filtered);

    // Re-init scroll animations for new cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    grid.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  });
}

// ============================================================
// INQUIRY FORM — Sends via WhatsApp
// ============================================================
function initInquiryForm(): void {
  const form = document.getElementById('inquiry-form') as HTMLFormElement | null;
  if (!form) return;

  // Remove control characters and limit length of anything the visitor types
  const clean = (value: string, max: number): string =>
    value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, max);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = clean((document.getElementById('inquiry-name') as HTMLInputElement).value, 60);
    const phone = clean((document.getElementById('inquiry-phone') as HTMLInputElement).value, 20);
    const product = clean((document.getElementById('inquiry-product') as HTMLInputElement).value, 100);
    const message = clean((document.getElementById('inquiry-message') as HTMLTextAreaElement).value, 500);

    if (!name || !phone || !product || !message) return;

    const whatsappMsg = whatsappMessages.inquiry(name, phone, product, message);
    const url = getWhatsAppUrl(whatsappMsg);

    const win = window.open(url, '_blank', 'noopener,noreferrer');
    // If the phone's pop-up blocker stopped the new tab, open WhatsApp in the same tab
    if (!win) window.location.href = url;
    form.reset();
  });
}

// ============================================================
// SCROLL TO TOP
// ============================================================
function initScrollToTop(): void {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============================================================
// BOOT (Safe initialization for all network & browser environments)
// ============================================================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}

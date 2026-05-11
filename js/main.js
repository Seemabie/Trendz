/* =========================================================
   TRENDZ CLOSET — Main JavaScript
   Shared functionality across all pages
   ========================================================= */

const CONFIG = {
    accessToken: 'EAAMmIb1yWV8BQo2ZCChyp0y9pxHnjdoOT7sZCoQWcGiKvq22QWw2QeRmMTIFPZAtKjT3PR3X7aJb2YYAzWw6CU8YdYZAMQ4VQoaWcZAa97MMuX36EmIlFZBauZBZBBuaZCLM6zuLa0ERwEJh5ZCgiVaIV7pfPwsSzcPQkpYFjT6EAFsK1oJNk3ePB7xIw95Ii0NthE2nUGEwNq',
    pageId: '373134302848785',
    whatsappNumber: '16464097127',
    instagramUrl: 'https://instagram.com/trendzcloset',
    facebookUrl: 'https://facebook.com/trendzcloset',
    address: '17007 118th Ave, Jamaica, NY 11434',
    email: 'hello@trendzcloset.com',
    categories: [
        { name: 'Bridal', slug: 'bridal', albumId: '1530365875758861', tagline: 'For the Forever Day', fallback: 'bridal-gold.jpg' },
        { name: 'Party Wear', slug: 'party-wear', albumId: '1530366075758841', tagline: 'After-Dark Elegance', fallback: 'burgundy-velvet.jpg' },
        { name: 'Casual Wear', slug: 'casual', albumId: '1530366232425492', tagline: 'Effortless Everyday', fallback: 'beige-green.jpg' },
        { name: 'Sarees', slug: 'sarees', albumId: '1530366332425482', tagline: 'Timeless Drapes', fallback: 'rust-orange.jpg' },
        { name: 'Eid Collection', slug: 'eid', albumId: '1530366425758806', tagline: 'Festive & Refined', fallback: 'olive-festive.jpg' },
        { name: 'Sale', slug: 'sale', albumId: '1530366519092130', tagline: 'Limited Pieces', fallback: 'teal-orange.jpg' }
    ],
    albums: {
        newArrivals: '1530366642425451',
        bestsellers: '1520260906769358',
        customerGallery: '1530366789092103'
    }
};

/* ===== ICONS ===== */
const ICONS = {
    wa: '<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M20.52 3.449C12.831-3.984.106 1.407.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 005.683 1.447h.005c9.481 0 17.16-7.658 17.157-17.106-.001-2.572-1.5-5.16-3.66-7.213M16.05 5.137c5.451 0 9.886 4.434 9.889 9.888a9.84 9.84 0 01-1.499 5.244L23.354 24l-3.804-.997a9.86 9.86 0 01-4.722 1.203h-.004c-5.45 0-9.885-4.434-9.888-9.889a9.823 9.823 0 011.628-5.439l-.244.244"/></svg>',
    msg: '<svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.913 1.454 5.512 3.726 7.21V22l3.405-1.869c.909.252 1.871.388 2.869.388 5.523 0 10-4.145 10-9.26C22 6.145 17.523 2 12 2zm.994 12.461l-2.546-2.716L5.5 14.461l5.464-5.804 2.611 2.716 4.881-2.716-5.462 5.804z"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.94 20.1a6.34 6.34 0 0010.86-4.43V8.4a8.16 8.16 0 004.77 1.52V6.49a4.85 4.85 0 01-1.98-0.2z"/></svg>',
    pinterest: '<svg viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>',
    location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    ship: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
    scissors: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/></svg>',
    gem: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M11 3L8 9l4 13 4-13-3-6"/><path d="M2 9h20"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>',
    ruler: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="2" y="9" width="20" height="6" rx="1"/><path d="M6 9v3M10 9v3M14 9v3M18 9v3"/></svg>',
    tape: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M3 12c0-4.97 4.03-9 9-9s9 4.03 9 9c0 2.5-1 4.5-3 4.5h-4l-2 3-2-3H6c-2 0-3-2-3-4.5z"/><circle cx="12" cy="11" r="3"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>'
};

/* ===== FACEBOOK API ===== */
async function fetchAlbumPhotos(albumId, limit = 50) {
    if (!albumId) return [];
    try {
        const res = await fetch(`https://graph.facebook.com/v24.0/${albumId}/photos?fields=source,name,images,created_time&limit=${limit}&access_token=${CONFIG.accessToken}`);
        const data = await res.json();
        if (data.error) { console.warn('FB API:', data.error.message); return []; }
        return data.data || [];
    } catch (e) { console.warn('Fetch error:', e); return []; }
}

function getBestImage(p) {
    return (p.images && p.images[0]) ? p.images[0].source : (p.source || '');
}

function parseCaption(c) {
    if (!c || !c.trim()) return { price: '', description: '', fullCaption: '' };
    const f = c.trim();
    const m = f.match(/\$[\d,]+(?:\.\d{2})?/);
    const price = m ? m[0] : '';
    const desc = price ? f.replace(/\$[\d,]+(?:\.\d{2})?/g, '').replace(/\n{3,}/g, '\n\n').trim() : f;
    return { price, description: desc, fullCaption: f };
}

function makeWALink(cap, price) {
    const item = cap ? cap.substring(0, 100) : 'this piece';
    const p = price ? ' (' + price + ')' : '';
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello Trendz Closet, I'm interested in: " + item + p + ". Could you share more details?")}`;
}

function escapeHtml(t) {
    const d = document.createElement('div');
    d.textContent = t;
    return d.innerHTML;
}

/* ===== PRODUCT CARD BUILDER ===== */
function buildProductCard(photo, options = {}) {
    const pc = parseCaption(photo.name);
    const img = getBestImage(photo);
    const wa = makeWALink(pc.description, pc.price);
    const price = pc.price || 'Contact for Price';
    const sc = pc.description.replace(/'/g, "\\'").replace(/\n/g, "\\n");
    const sp = pc.price.replace(/'/g, "\\'");
    const badge = options.badge ? `<div class="product-badge ${options.badgeClass || ''}">${options.badge}</div>` : '';
    const category = options.category || '';

    return `<div class="product-card reveal" onclick="openLightbox('${img}', '${sc}', '${sp}')">
        <div class="product-image-wrap">
            ${badge}
            <img src="${img}" alt="${pc.description ? escapeHtml(pc.description.substring(0, 60)) : 'Trendz Closet piece'}" loading="lazy">
            <div class="product-quick">
                <a href="${wa}" target="_blank" class="quick-btn" onclick="event.stopPropagation();">${ICONS.wa} Inquire</a>
                <button class="quick-btn icon-only" onclick="event.stopPropagation(); openLightbox('${img}', '${sc}', '${sp}')" aria-label="Quick view">${ICONS.search}</button>
            </div>
        </div>
        <div class="product-info">
            <div class="product-name">${pc.description ? escapeHtml(pc.description.split('\n')[0].substring(0, 80)) : 'Designer Piece'}</div>
            <div class="product-meta">
                <div class="product-price">${price}</div>
                ${category ? `<div class="product-cat">${category}</div>` : ''}
            </div>
        </div>
    </div>`;
}

/* ===== LIGHTBOX ===== */
function openLightbox(imgUrl, caption, price) {
    let lb = document.getElementById('lightbox');
    if (!lb) {
        lb = document.createElement('div');
        lb.id = 'lightbox';
        lb.className = 'lightbox';
        lb.innerHTML = `
            <div class="lightbox-inner">
                <button class="lb-close" onclick="closeLightbox()" aria-label="Close"></button>
                <div class="lb-image"><img id="lbImage" src="" alt="Product"></div>
                <div class="lb-body">
                    <span class="eyebrow">Trendz Closet</span>
                    <h3 id="lbTitle">Designer Piece</h3>
                    <div class="price" id="lbPrice"></div>
                    <div class="lb-divider"></div>
                    <p class="desc" id="lbDesc"></p>
                    <a href="#" target="_blank" class="btn btn-wa lb-buy" id="lbBuy">${ICONS.wa} Inquire on WhatsApp</a>
                    <p class="lb-note">For pricing, sizing & custom orders</p>
                </div>
            </div>`;
        document.body.appendChild(lb);
        lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });
    }
    const fullCaption = caption.replace(/\\n/g, '\n');
    const firstLine = fullCaption.split('\n')[0].substring(0, 80) || 'Designer Piece';
    document.getElementById('lbImage').src = imgUrl;
    document.getElementById('lbTitle').textContent = firstLine;
    document.getElementById('lbPrice').textContent = price || 'Contact for Price';
    document.getElementById('lbDesc').textContent = fullCaption || 'A beautifully crafted designer piece from our curated collection. Reach out on WhatsApp for full details, sizing, and shipping.';
    document.getElementById('lbBuy').href = makeWALink(fullCaption, price);
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (lb && lb.classList.contains('active')) {
        lb.classList.remove('active');
        document.body.style.overflow = '';
    }
}

document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

/* ===== NAVIGATION BUILDER ===== */
function buildNav(activeKey = '') {
    const nav = document.getElementById('mainNav');
    if (!nav) return;

    const links = [
        { key: 'home', label: 'Home', href: 'index.html' },
        { key: 'collections', label: 'Collections', href: 'collections.html' },
        { key: 'bridal', label: 'Bridal', href: 'bridal.html' },
        { key: 'bespoke', label: 'Bespoke', href: 'bespoke.html' },
        { key: 'lookbook', label: 'Lookbook', href: 'lookbook.html' },
        { key: 'journal', label: 'Journal', href: 'journal.html' },
        { key: 'about', label: 'About', href: 'about.html' }
    ];

    const leftLinks = links.slice(0, 3).map(l =>
        `<a href="${l.href}" class="nav-link ${l.key === activeKey ? 'active' : ''}">${l.label}</a>`
    ).join('');

    const rightLinks = links.slice(3).map(l =>
        `<a href="${l.href}" class="nav-link ${l.key === activeKey ? 'active' : ''}">${l.label}</a>`
    ).join('');

    nav.innerHTML = `
        <div class="nav-inner">
            <div class="nav-left">
                <button class="nav-burger" id="navBurger" aria-label="Menu">
                    <span></span><span></span><span></span>
                </button>
                ${leftLinks}
            </div>
            <a href="index.html" class="nav-brand">
                <span class="nav-brand-name">TRENDZ</span>
                <span class="nav-brand-tag">Couture Atelier</span>
            </a>
            <div class="nav-right">
                ${rightLinks}
                <a href="contact.html" class="nav-icon-btn always ${activeKey === 'contact' ? 'active' : ''}">${ICONS.location}<span>Visit</span></a>
            </div>
        </div>`;

    // Mobile drawer
    let drawer = document.getElementById('mobileDrawer');
    if (!drawer) {
        drawer = document.createElement('div');
        drawer.id = 'mobileDrawer';
        drawer.className = 'mobile-drawer';
        drawer.innerHTML = `
            <button class="mobile-drawer-close" id="drawerClose" aria-label="Close"></button>
            <div class="mobile-nav-links">
                ${[...links, { key: 'lookbook', label: 'Customer Gallery', href: 'lookbook.html' }, { key: 'size-guide', label: 'Size Guide', href: 'size-guide.html' }, { key: 'contact', label: 'Visit & Contact', href: 'contact.html' }]
                    .filter((v, i, a) => a.findIndex(x => x.href === v.href) === i)
                    .map((l, i) => `<a href="${l.href}"><span class="num">${String(i + 1).padStart(2, '0')}</span>${l.label}</a>`).join('')}
            </div>
            <div class="mobile-drawer-footer">
                <p>BY APPOINTMENT</p>
                <a href="tel:+16464097127">+1 646 409 7127</a>
            </div>`;
        document.body.appendChild(drawer);

        const overlay = document.createElement('div');
        overlay.className = 'drawer-overlay';
        overlay.id = 'drawerOverlay';
        document.body.appendChild(overlay);
    }

    document.getElementById('navBurger').addEventListener('click', toggleDrawer);
    document.getElementById('drawerClose').addEventListener('click', closeDrawer);
    document.getElementById('drawerOverlay').addEventListener('click', closeDrawer);

    // Scroll behavior
    const handleScroll = () => {
        const isOverHero = window.scrollY < 100 && document.querySelector('.hero, .page-header');
        nav.classList.toggle('opaque', !isOverHero || window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
}

function toggleDrawer() {
    const drawer = document.getElementById('mobileDrawer');
    const overlay = document.getElementById('drawerOverlay');
    const burger = document.getElementById('navBurger');
    drawer.classList.toggle('open');
    overlay.classList.toggle('open');
    burger.classList.toggle('active');
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
}

function closeDrawer() {
    document.getElementById('mobileDrawer').classList.remove('open');
    document.getElementById('drawerOverlay').classList.remove('open');
    document.getElementById('navBurger').classList.remove('active');
    document.body.style.overflow = '';
}

/* ===== FOOTER BUILDER ===== */
function buildFooter() {
    const footer = document.getElementById('mainFooter');
    if (!footer) return;
    footer.innerHTML = `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <h3>TRENDZ</h3>
                    <span class="tag">Couture Atelier</span>
                    <p>An atelier of authentic Pakistani and Indian designer fashion, hand-curated in New York and shipped across the United States. Every piece is sourced from the finest ateliers and stitched with intention.</p>
                </div>
                <div class="footer-col">
                    <h4>Shop</h4>
                    <ul>
                        <li><a href="collections.html">All Collections</a></li>
                        <li><a href="bridal.html">Bridal</a></li>
                        <li><a href="collections.html#party">Party Wear</a></li>
                        <li><a href="collections.html#sarees">Sarees</a></li>
                        <li><a href="collections.html#eid">Eid Edit</a></li>
                        <li><a href="bespoke.html">Bespoke</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Atelier</h4>
                    <ul>
                        <li><a href="about.html">Our Story</a></li>
                        <li><a href="journal.html">The Journal</a></li>
                        <li><a href="lookbook.html">Lookbook</a></li>
                        <li><a href="size-guide.html">Size Guide</a></li>
                        <li><a href="contact.html">Visit Us</a></li>
                        <li><a href="contact.html#faq">FAQ</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Visit</h4>
                    <p class="footer-contact-line">17007 118th Ave<br>Jamaica, NY 11434</p>
                    <p class="footer-contact-line">By Appointment<br>Daily, 11AM &mdash; 7PM</p>
                    <p class="footer-contact-line"><a href="tel:+16464097127">+1 646 409 7127</a></p>
                </div>
            </div>
            <div class="footer-bottom">
                <span class="footer-copy">© 2026 TRENDZ CLOSET. ALL RIGHTS RESERVED.</span>
                <div class="footer-socials">
                    <a href="${CONFIG.instagramUrl}" target="_blank" aria-label="Instagram">${ICONS.instagram}</a>
                    <a href="${CONFIG.facebookUrl}" target="_blank" aria-label="Facebook">${ICONS.facebook}</a>
                    <a href="https://tiktok.com/@trendzcloset" target="_blank" aria-label="TikTok">${ICONS.tiktok}</a>
                    <a href="https://pinterest.com/trendzcloset" target="_blank" aria-label="Pinterest">${ICONS.pinterest}</a>
                </div>
                <span class="footer-copy">CRAFTED WITH DEVOTION</span>
            </div>
        </div>`;
}

/* ===== FLOATING BUTTONS ===== */
function buildFloating() {
    const f = document.getElementById('floatingBtns');
    if (!f) return;
    f.innerHTML = `
        <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello Trendz Closet, I would love to chat about a piece.')}" class="float-btn wa" target="_blank" aria-label="WhatsApp">
            ${ICONS.wa}
            <span class="float-tooltip">Chat on WhatsApp</span>
        </a>
        <a href="https://m.me/trendzcloset" class="float-btn msg" target="_blank" aria-label="Messenger">
            ${ICONS.msg}
            <span class="float-tooltip">Message us</span>
        </a>`;
}

/* ===== ANNOUNCEMENT BAR ===== */
function buildAnnounce(text) {
    const bar = document.getElementById('announce');
    if (!bar) return;
    const messages = text || [
        'Complimentary shipping on orders over $300',
        'Custom stitching available for every piece',
        'New bridal edit drops weekly',
        'Curated in New York · Shipped across the United States'
    ];
    const arr = Array.isArray(messages) ? messages : [messages];
    const set = arr.map(m => `<span>${m}</span>`).join('');
    bar.innerHTML = `<div class="announce-track">${set}${set}</div>`;
}

/* ===== REVEAL ON SCROLL ===== */
function initReveal() {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ===== FAQ ACCORDION ===== */
function initFAQ() {
    document.querySelectorAll('.faq-q').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const wasOpen = item.classList.contains('open');
            item.parentElement.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
            if (!wasOpen) item.classList.add('open');
        });
    });
}

/* ===== UTILITY: SCATTER OBSERVE ===== */
function observeNewReveals() {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal:not(.in)').forEach(el => obs.observe(el));
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
    buildAnnounce();
    buildFloating();
    buildFooter();
    initReveal();
    initFAQ();
});

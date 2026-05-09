/* ============================================
   FRANKIM SERVICES – script.js
   ============================================ */

// ===== PRODUCT DATA =====
const products = [
  // ROOFING
  { id: 1, name: "Box Profile Iron Sheet (Gauge 30)", category: "roofing", price: 850, unit: "per sheet", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80", badge: "Best Seller", desc: "Durable gauge 30 box profile mabati, ideal for residential and commercial roofing." },
  { id: 2, name: "Corrugated Iron Sheet (Gauge 28)", category: "roofing", price: 1100, unit: "per sheet", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", badge: null, desc: "Heavy-duty gauge 28 corrugated iron sheets for long-lasting roofing." },
  { id: 3, name: "Roofing Nails (1kg)", category: "roofing", price: 120, unit: "per kg", image: "https://images.unsplash.com/photo-1581166416958-a1d51baf3975?w=600&q=80", badge: null, desc: "Galvanized roofing nails with rubber washers to prevent leakage." },
  { id: 4, name: "Ridge Cap (3m)", category: "roofing", price: 550, unit: "per piece", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80", badge: null, desc: "Steel ridge caps for a neat and weatherproof roofing finish." },

  // CEMENT
  { id: 5, name: "Bamburi Cement (50kg)", category: "cement", price: 780, unit: "per bag", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80", badge: "Popular", desc: "Portland cement 42.5N – ideal for all structural concrete and masonry work." },
  { id: 6, name: "Savannah Cement (50kg)", category: "cement", price: 760, unit: "per bag", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80", badge: null, desc: "Quality cement for plastering, laying blocks and general construction." },
  { id: 7, name: "Ballast / Aggregate (Per Ton)", category: "cement", price: 4500, unit: "per ton", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80", badge: null, desc: "Clean quarry ballast for concrete mixing. Delivery available." },
  { id: 8, name: "River Sand (Per Ton)", category: "cement", price: 3800, unit: "per ton", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80", badge: null, desc: "Quality river sand for plastering and concrete work." },

  // TIMBER
  { id: 9, name: "Treated Timber 2×4 (12ft)", category: "timber", price: 420, unit: "per piece", image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=600&q=80", badge: "Best Seller", desc: "CCA treated timber for roof rafters and structural framing." },
  { id: 10, name: "Hardwood Timber 3×3 (12ft)", category: "timber", price: 680, unit: "per piece", image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=600&q=80", badge: null, desc: "Dense hardwood timber for heavy-duty framing and carpentry." },
  { id: 11, name: "Plywood Sheet 18mm (8×4ft)", category: "timber", price: 3200, unit: "per sheet", image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=600&q=80", badge: null, desc: "Marine plywood for formwork, doors, and interior fittings." },
  { id: 12, name: "MDF Board 12mm (8×4ft)", category: "timber", price: 2800, unit: "per sheet", image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=600&q=80", badge: null, desc: "Smooth MDF boards for furniture, paneling and interior work." },

  // PIPES
  { id: 13, name: "PVC Pipe 4\" (6m)", category: "pipes", price: 1400, unit: "per length", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", badge: null, desc: "Heavy-duty PVC sewage pipes – Class B, ideal for drainage systems." },
  { id: 14, name: "CPVC Hot Water Pipe 1/2\" (4m)", category: "pipes", price: 480, unit: "per length", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", badge: null, desc: "Chlorinated PVC pipe rated for hot water supply lines up to 93°C." },
  { id: 15, name: "PPR Pipe 20mm (4m)", category: "pipes", price: 320, unit: "per length", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", badge: "Popular", desc: "Polypropylene random copolymer pipe for potable water supply." },
  { id: 16, name: "GI Pipe 1\" (6m)", category: "pipes", price: 2200, unit: "per length", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", badge: null, desc: "Galvanized iron pipe for water supply, borehole and scaffolding." },

  // PAINT
  { id: 17, name: "Dulux Interior Emulsion (20L)", category: "paint", price: 4800, unit: "per tin", image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&q=80", badge: "Best Seller", desc: "Premium washable interior emulsion – smooth, long-lasting finish." },
  { id: 18, name: "Crown Exterior Paint (20L)", category: "paint", price: 5200, unit: "per tin", image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&q=80", badge: null, desc: "Weather-resistant exterior masonry paint for all climate conditions." },
  { id: 19, name: "Satin Wood Varnish (4L)", category: "paint", price: 1800, unit: "per tin", image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&q=80", badge: null, desc: "Clear satin varnish for wood protection, furniture and doors." },
  { id: 20, name: "Primer / Undercoat (4L)", category: "paint", price: 1200, unit: "per tin", image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&q=80", badge: null, desc: "All-purpose primer for walls, wood and metal before painting." },

  // TOOLS
  { id: 21, name: "Wire Nails 3\" (1kg)", category: "tools", price: 90, unit: "per kg", image: "https://images.unsplash.com/photo-1581166416958-a1d51baf3975?w=600&q=80", badge: null, desc: "Bright wire nails for general carpentry and timber work." },
  { id: 22, name: "Masonry Drill Bit Set", category: "tools", price: 850, unit: "per set", image: "https://images.unsplash.com/photo-1581166416958-a1d51baf3975?w=600&q=80", badge: null, desc: "10-piece SDS masonry drill bit set for concrete and block drilling." },
  { id: 23, name: "Trowel (Plastering)", category: "tools", price: 280, unit: "per piece", image: "https://images.unsplash.com/photo-1581166416958-a1d51baf3975?w=600&q=80", badge: null, desc: "Stainless steel plasterer's trowel for smooth plaster finishes." },
  { id: 24, name: "Wheelbarrow (100L)", category: "tools", price: 5500, unit: "per piece", image: "https://images.unsplash.com/photo-1581166416958-a1d51baf3975?w=600&q=80", badge: "Popular", desc: "Heavy-duty steel-tray construction wheelbarrow with puncture-proof tyre." },

  // ELECTRICAL
  { id: 25, name: "2.5mm² Cable (50m roll)", category: "electrical", price: 3800, unit: "per roll", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", badge: null, desc: "Twin & earth 2.5mm² PVC insulated cable – KEBS approved." },
  { id: 26, name: "DB Box 8-Way (Surface)", category: "electrical", price: 1800, unit: "per piece", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", badge: null, desc: "8-way distribution board with earth bus bar for residential wiring." },
  { id: 27, name: "MCB 20A Single Pole", category: "electrical", price: 350, unit: "per piece", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", badge: null, desc: "Miniature circuit breaker – 20A single pole for circuit protection." },
  { id: 28, name: "Conduit Pipe 20mm (3m)", category: "electrical", price: 220, unit: "per piece", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", badge: null, desc: "PVC conduit pipe for electrical wire protection in walls and ceilings." },
];

// ===== CART STATE =====
let cart = JSON.parse(localStorage.getItem('frankimCart') || '[]');
let selectedPayMethod = 'mpesa';
let currentFilter = 'all';

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');
  updateCartUI();
  checkOpenStatus();
  handleNavScroll();
  setMinDate();
});

// ===== NAVBAR SCROLL =====
function handleNavScroll() {
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (nav) {
      nav.classList.toggle('scrolled', window.scrollY > 80);
    }
  });
}

// ===== HAMBURGER =====
function toggleMenu() {
  const links = document.getElementById('navLinks');
  links.classList.toggle('open');
}

// ===== OPEN STATUS =====
function checkOpenStatus() {
  const el = document.getElementById('openStatus');
  if (!el) return;
  const now = new Date();
  const day = now.getDay(); // 0=Sun,1=Mon...6=Sat
  const hour = now.getHours();
  const min = now.getMinutes();
  const time = hour * 60 + min;

  let isOpen = false;
  if (day >= 1 && day <= 6) {
    // Mon-Sat: 7:00-20:00
    isOpen = time >= 420 && time < 1200;
  } else {
    // Sunday: 10:00-16:00
    isOpen = time >= 600 && time < 960;
  }
  el.textContent = isOpen ? '✅ We are OPEN now!' : '🔴 We are currently CLOSED';
  el.className = 'open-status ' + (isOpen ? 'open' : 'closed');
}

// ===== RENDER PRODUCTS =====
function renderProducts(filter) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  currentFilter = filter;

  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="color:var(--gray);text-align:center;padding:40px;grid-column:1/-1;">No products found in this category.</p>';
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=60'"/>
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
      </div>
      <div class="product-info">
        <p class="product-cat">${getCategoryLabel(p.category)}</p>
        <p class="product-name">${p.name}</p>
        <p class="product-desc">${p.desc}</p>
        <p class="product-price">Ksh ${p.price.toLocaleString()} <small>/ ${p.unit}</small></p>
        <div class="product-actions">
          <button class="add-cart-btn" onclick="addToCart(${p.id})">
            <i class="fa fa-cart-plus"></i> Add to Cart
          </button>
          <a href="tel:0733227794" class="call-product-btn" title="Call to order">
            <i class="fa fa-phone"></i>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

function getCategoryLabel(cat) {
  const labels = {
    roofing: 'Roofing & Iron Sheets',
    cement: 'Cement & Concrete',
    timber: 'Timber & Wood',
    pipes: 'Pipes & Plumbing',
    paint: 'Paints & Finishes',
    tools: 'Tools & Hardware',
    electrical: 'Electrical Supplies'
  };
  return labels[cat] || cat;
}

// ===== FILTER TABS =====
function filterProducts(filter, btn) {
  // Update tab active state
  if (btn) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
  }
  renderProducts(filter);

  // Scroll to products section smoothly
  if (btn) {
    document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    // Called from category card
    document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Auto-activate matching tab
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(t => {
      t.classList.remove('active');
      if (t.textContent.toLowerCase().includes(filter.substring(0,4))) {
        t.classList.add('active');
      }
    });
  }
}

// ===== CART FUNCTIONS =====
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast(`<i class="fa fa-check"></i> ${product.name} added to cart`, 'success');
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function saveCart() {
  localStorage.setItem('frankimCart', JSON.stringify(cart));
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  renderCartItems();
}

function getCartTotal() {
  return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function updateCartUI() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  document.getElementById('cartCount').textContent = count;

  const footer = document.getElementById('cartFooter');
  if (footer) footer.style.display = cart.length > 0 ? 'block' : 'none';

  document.getElementById('cartTotal').textContent = `Ksh ${getCartTotal().toLocaleString()}`;
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <i class="fa fa-shopping-basket"></i>
        <p>Your cart is empty</p>
        <small>Browse products and add items to your cart</small>
      </div>`;
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=100&q=60'"/>
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">Ksh ${(item.price * item.qty).toLocaleString()} <small style="font-weight:400;color:#6b7280">(Ksh ${item.price.toLocaleString()} × ${item.qty})</small></p>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
          <button class="remove-item" onclick="removeFromCart(${item.id})" title="Remove"><i class="fa fa-trash"></i></button>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== CART DRAWER TOGGLE =====
function toggleCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  const isOpen = drawer.classList.contains('open');

  if (!isOpen) {
    renderCartItems();
    updateCartUI();
  }

  drawer.classList.toggle('open');
  overlay.classList.toggle('active');
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

// ===== PAYMENT MODAL =====
function openPayment() {
  if (cart.length === 0) {
    showToast('<i class="fa fa-exclamation-circle"></i> Your cart is empty!');
    return;
  }
  // Close cart drawer first
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  drawer.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = '';

  // Set total in modal
  document.getElementById('modalTotal').textContent = `Ksh ${getCartTotal().toLocaleString()}`;

  // Reset to step 1
  document.getElementById('payStep1').style.display = 'block';
  document.getElementById('paySuccess').style.display = 'none';

  // Show modal
  const modal = document.getElementById('paymentModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePayment() {
  document.getElementById('paymentModal').classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal on overlay click
document.getElementById('paymentModal').addEventListener('click', function(e) {
  if (e.target === this) closePayment();
});

function selectPayMethod(method, btn) {
  selectedPayMethod = method;
  document.querySelectorAll('.pay-method-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Show/hide forms
  document.getElementById('mpesaForm').style.display = method === 'mpesa' ? 'block' : 'none';
  document.getElementById('bankForm').style.display = method === 'bank' ? 'block' : 'none';
  document.getElementById('cashForm').style.display = method === 'cash' ? 'block' : 'none';
}

function generateRef() {
  return 'FRK-' + Math.random().toString(36).substring(2, 8).toUpperCase();
}

function showSuccess(message) {
  document.getElementById('payStep1').style.display = 'none';
  document.getElementById('paySuccess').style.display = 'block';
  document.getElementById('successMsg').textContent = message;
  document.getElementById('orderRef').textContent = generateRef();
}

function submitMpesa() {
  const name = document.getElementById('payName').value.trim();
  const phone = document.getElementById('payPhone').value.trim();

  if (!name || !phone) {
    showToast('<i class="fa fa-exclamation-circle"></i> Please fill in your name and phone number.');
    return;
  }
  if (!/^07\d{8}$/.test(phone)) {
    showToast('<i class="fa fa-exclamation-circle"></i> Enter a valid Safaricom number (07XXXXXXXX).');
    return;
  }

  // Simulate STK push
  showToast('<i class="fa fa-mobile-alt"></i> M-Pesa request sent to ' + phone + '...', 'success');
  setTimeout(() => {
    showSuccess(`An M-Pesa payment request has been sent to ${phone}. Please check your phone and enter your PIN to complete the payment. We will call you to confirm delivery.`);
  }, 2000);
}

function submitBank() {
  showSuccess('Thank you! Once we receive your bank transfer, we will confirm your order and arrange delivery. Please keep your transaction ID handy.');
}

function submitCash() {
  const date = document.getElementById('pickupDate').value;
  const dateStr = date ? ` on ${new Date(date).toLocaleDateString('en-KE', { weekday: 'long', day: 'numeric', month: 'long' })}` : '';
  showSuccess(`Your order is confirmed. You can pay cash when you collect from our store or upon delivery${dateStr}. Our team will call you to confirm.`);
}

// ===== CONTACT FORM =====
function handleContactForm(e) {
  e.preventDefault();
  const name = document.getElementById('cName').value.trim();
  const phone = document.getElementById('cPhone').value.trim();

  if (!name || !phone) {
    showToast('<i class="fa fa-exclamation-circle"></i> Please enter your name and phone number.');
    return;
  }

  // Simulate submission
  showToast('<i class="fa fa-check"></i> Enquiry sent! We will call you back shortly.', 'success');
  document.getElementById('contactForm').reset();
}

// ===== TOAST =====
function showToast(message, type = '') {
  const toast = document.getElementById('toast');
  toast.innerHTML = message;
  toast.className = 'toast ' + type;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// ===== SET MIN DATE =====
function setMinDate() {
  const dateInput = document.getElementById('pickupDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }
}

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .cat-card, .about-content, .contact-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

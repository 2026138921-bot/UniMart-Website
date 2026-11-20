/* UniMart front-end prototype. Data is stored in localStorage for assignment demonstration only. */
const STORE = {
  users: "unimart_users",
  listings: "unimart_listings_v9",
  cart: "unimart_cart",
  current: "unimart_current",
  theme: "unimart_theme"
};

const seedUsers = [
  { id: "seller-1", name: "UniMart Seller", email: "seller@unimart.edu.my", phone: "0100000000", password: "seller123", role: "seller", sellerStatus: "approved" },
  { id: "student-1", name: "UniMart Student", email: "student@unimart.edu.my", phone: "0123456789", password: "student123", role: "buyer", sellerStatus: "none" }
];

const seedListings = [
  {
    id: "p1", title: "Homemade Chocolate Cookies", type: "product", category: "Food & Drink",
    description: "Freshly baked cookies, packed in sets of five.", price: 8, quantity: 20,
    options: [{ name: "Original", price: 8.00 }, { name: "Double Chips", price: 9.00 }],
    status: "open", phone: "0123456789", owner: "Nadira", image: "image/cookies.jpg", popular: true
  },
  {
    id: "p2", title: "AACR 2ND EDITION", type: "product", category: "Book",
    description: "Good-condition reference book for library students.", price: 35, quantity: 4,
    status: "open", phone: "0123456789", owner: "Nobodiess", image: "image/aacrbook.jpg", popular: false
  },
  {
    id: "p3", title: "Campus Tote Bag", type: "product", category: "Fashion",
    description: "Simple canvas tote bag for everyday campus use.", price: 15, quantity: 12,
    status: "open", phone: "0123456789", owner: "Luqman", image: "image/bag.jpg", popular: false
  },
  {
    id: "p4", title: "Mini Corndog", type: "product", category: "Food & Drink",
    description: "Crunchy", price: 3, quantity: 5,
    status: "open", phone: "01267457395", owner: "Aiman", image: "image/corndog.jpg", popular: false
  },
  {
    id: "p5", title: "Ramen Packet", type: "product", category: "Food & Drink",
    description: "Limited stock", price: 6, quantity: 5,
    options: [{ name: "Original", price: 6.00 }, { name: "Carbonara", price: 7.00 }, { name: "Hot Chicken", price: 7.00 }],
    status: "open", phone: "0123456789", owner: "R!N", image: "image/ramen.jpg", popular: false
  },
  {
    id: "p6", title: "Ramen Cup", type: "product", category: "Food & Drink",
    description: "Limited stock. Grab cepat guys!!",
    options: [{ name: "Original", price: 6.00 }, { name: "Carbonara", price: 7.00 }],
    price: 6, quantity: 5, status: "open", phone: "01234512308", owner: "Who", image: "image/ramencup.jpg", popular: true
  },
  {
    id: "p7", title: "Spritzer", type: "product", category: "Food & Drink",
    description: "Carbonara & Original only", price: 1.50, quantity: 10,
    options: [{ name: "550 ML", price: 1.50 }, { name: "1250 ML", price: 3.00 }, { name: "6 L", price: 9.00 }],
    status: "open", phone: "0123456789", owner: "Izzat", image: "image/water.jpg", popular: true
  },
  {
    id: "p8", title: "Maggi Cup", type: "product", category: "Food & Drink",
    description: "Carbonara & Original only", price: 3.00, quantity: 5,
    options: [{ name: "Curry", price: 3.00 }, { name: "Tomyam", price: 3.00 }, { name: "Asam Laksa", price: 3.50 }, { name: "Chicken", price: 3.00 }],
    status: "open", phone: "0123456789", owner: "R!N", image: "image/maggi.jpg", popular: true
  },
  {
    id: "s1", title: "Document Printing", type: "service", category: "Printing",
    description: "Black-and-white and colour printing. Send files before collection.", price: 0.3, quantity: 100,
    status: "open", phone: "0123456789", owner: "Yuzuu", unit: "page", image: "image/printing.jpg", popular: true
  },
  {
    id: "s2", title: "Campus Runner", type: "service", category: "Runner",
    description: "Small item pickup and delivery around campus.", price: 5,
    status: "close", phone: "0123456789", owner: "Nur Atikah", image: "image/docRunner.jpg", popular: true
  },
  {
    id: "s3", title: "Laundry Service", type: "service", category: "Laundry",
    description: "Wash and fold service. Contact for turnaround time.", price: 4.00, quantity: 3,
    options: [{ name: "Wash only", price: 4.00 }, { name: "Wash + Dry", price: 7.00 }, { name: "All + Fold", price: 9.00 }],
    status: "open", phone: "0123456789", owner: "D12", image: "image/laundry.jpg", popular: false
  },
  {
    id: "s4", title: "Parcel Runner", type: "service", category: "Runner",
    description: "Parcel will send asap & safetly.", price: 2, quantity: 3,
    options: [{ name: "below 1kg", price: 3.00 }, { name: "1kg & above", price: 6.00 }, { name: "2kg & above", price: 8.00 }],
    status: "open", phone: "0123456789", owner: "RunNow", image: "image/prunner.jpg", popular: true
  },
  {
    id: "s5", title: "MUA", type: "service", category: "Other",
    description: "Makeup for Event, Dinner, Convocation.", price: 70, quantity: 3,
    status: "open", phone: "012345132559", owner: "Mairah", image: "image/makeup.jpg", popular: false
  },
  {
    id: "s6", title: "AI & Similarity Checker", type: "service", category: "AI & Similarity Checker",
    description: "Turnitin reliable checker for your assignment", price: 5, quantity: 100,
    options: [{ name: "AI only", price: 5.00 }, { name: "Similarity only", price: 5.00 }, { name: "AI & Similarity", price: 10.00 }],
    status: "open", phone: "012345132559", owner: "Zack", image: "image/ai.png", popular: false
  },
  {
    id: "s7", title: "AI Checker", type: "service", category: "AI & Similarity Checker",
    description: "Student-friendly price AI Checker ", price: 3.50, quantity: 100,
    status: "open", phone: "012345132559", owner: "Hazim", image: "image/ai.png", popular: false
  },
  {
    id: "s8", title: "Colour Printing", type: "service", category: "Printing",
    description: "Colour ink available!!", price: 0.80, quantity: 100, unit: "page",
    options: [{ name: "Balck/White", price: 0.40 }, { name: "Colour", price: 0.80 }],
    status: "close", phone: "012345132559", owner: "Yaya", image: "image/printing.jpg", popular: true
  },
  {
    id: "l1", title: "Preloved Scientific Calculator", type: "preloved", category: "Other",
    description: "Used calculator in good working condition. Minor signs of use.", price: 35, quantity: 1,
    status: "open", phone: "0131112233", owner: "Aina", image: "image/calculator.jpg", popular: true
  },
  {
    id: "l2", title: "Preloved Denim Jacket", type: "preloved", category: "Fashion",
    description: "Size M. Buyer can inspect before making a deal.", price: 28, quantity: 1,
    status: "open", phone: "0142223344", owner: "Farah", image: "image/jacket.jpg", popular: false
  },
  {
    id: "l3", title: "CTU553 BOOK", type: "preloved", category: "Book",
    description: "Second-hand textbook with some highlighting.", price: 18, quantity: 1,
    status: "open", phone: "0163334455", owner: "Haziq", image: "image/ctubook.jpg", popular: false
  }
];

function getData(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}
function setData(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function users() { let u = getData(STORE.users, null); if (!u) { u = seedUsers; setData(STORE.users, u); } return u; }
function listings() { let l = getData(STORE.listings, null); if (!l) { l = seedListings; setData(STORE.listings, l); } return l; }
function cart() { return getData(STORE.cart, []); }
function current() { return getData(STORE.current, null); }
function money(n) { return "RM" + Number(n || 0).toFixed(2); }
function escapeHTML(value) { return String(value ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }

function toast(message) {
  const old = document.querySelector(".toast-note");
  if (old) old.remove();
  const el = document.createElement("div");
  el.className = "toast-note";
  el.textContent = message;
  el.style.cssText = "position:fixed;right:20px;bottom:20px;z-index:3000;background:#34215f;color:white;padding:12px 18px;border-radius:12px;box-shadow:0 8px 30px #0002;font-size:13px";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

function header() {
  const user = current();
  const isSeller = user?.role === "seller";
  const page = document.body.dataset.page || "";
  const hideSearch = ["products", "services", "preloved"].includes(page);
  const savedProf = JSON.parse(localStorage.getItem("unimart_user_profile") || "{}");
  const cleanName = (savedProf.username || user?.username || user?.name || "User").replace(/^(Demo|UniMart)\s+/i, "");
  return `<header class="topnav">
    <div class="d-flex align-items-center gap-2">
      <button class="nav-toggle" id="mobile-menu" aria-label="Open menu">☰</button>
      ${!hideSearch ? `
        <form class="top-search" id="global-search">
          <span>⌕</span>
          <input id="global-search-input" class="form-control" placeholder="Search marketplace...">
        </form>
      ` : ""}
    </div>
    <div class="topnav-actions">
      <label class="ui-switch" title="Toggle dark mode">
        <input type="checkbox" id="theme-toggle">
        <div class="slider"><div class="circle"></div></div>
      </label>
      ${!isSeller ? `
        <a class="icon-btn position-relative" href="cart.html" title="Cart">
          🛒<span id="cart-count" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
        </a>
      ` : ""}

      <div class="notif-dropdown-wrap" id="notif-dropdown-wrap">
        <button type="button" class="icon-btn" id="notification-button" title="Notifications">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span class="notif-badge-dot" id="notif-unread-dot"></span>
        </button>

        <div class="notif-dropdown-menu" id="notif-dropdown-menu">
          <div class="d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
            <span class="fw-bold small">Notifications</span>
            <button type="button" class="btn btn-link btn-sm p-0 text-decoration-none" id="notif-mark-read" style="font-size: 11.5px;">
              Mark all read
            </button>
          </div>
          <div id="notif-list-container"></div>
        </div>
      </div>

      <a class="icon-btn" href="${isSeller ? "chat.html?mode=seller" : "chat.html"}" title="${isSeller ? "Customer Messages" : "Chat with seller"}" aria-label="Messages">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </a>

      ${user ? `
        <div class="user-dropdown-wrap" id="user-dropdown-wrap">
          <button type="button" class="icon-btn user-pill-btn" id="user-menu-btn" title="${escapeHTML(cleanName)}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span class="user-pill-name">${escapeHTML(cleanName)}</span>
            <span style="font-size: 11px; margin-left: 2px;">▾</span>
          </button>

          <div class="user-dropdown-menu" id="user-dropdown-menu">
            <div class="user-dropdown-info">
              <div class="fw-bold">${escapeHTML(savedProf.fullName || user.name)}</div>
              <div class="small-muted">@${escapeHTML(cleanName)}</div>
              <div class="small-muted text-truncate">${escapeHTML(savedProf.email || user.email)}</div>
            </div>

            <a href="profile.html" class="d-flex align-items-center gap-2 px-3 py-2 text-decoration-none text-dark border-bottom" style="font-size: 13.5px; font-weight: 500;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              <span>Edit Profile</span>
            </a>

            <button type="button" class="user-dropdown-logout" id="top-logout-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </div>
      ` : `<a class="account-link" href="index.html">Login / Register</a>`}
    </div>
  </header>`;
}
function sidebar() {
  const user = current();
  const page = document.body.dataset.page;
  const isSeller = user?.role === "seller";

  const links = isSeller
    ? [
        ["seller.html", '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>', "Dashboard", "seller"],
        ["p_manage.html", '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>', "Product Management", "product_manage"],
        ["order.html", '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>', "Order Management", "orders"],
        ["finance.html", '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>', "Finance", "seller-finance"],
        ["chat.html", '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>', "Chat", "seller-chat"]
      ]
    
: [
        ["home.html", '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>', "Home", "home"],
        ["products.html", '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>', "Products", "products"],
        ["services.html", '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>', "Services", "services"],
        ["preloved.html", '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>', "Preloved", "preloved"],
        ["cart.html", '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>', "My Cart", "cart"],
        ["sellerform.html", '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><path d="M9 22V12h6v10"></path></svg>', "Seller Centre", "seller-form"]
      ];      
  return `
<div class="sidebar-overlay" id="sidebarOverlay"></div>
    <nav class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <a class="brand sidebar-brand" href="${isSeller ? "seller.html" : "home.html"}" title="UniMart">
          <span class="brand-mark">U</span>
          <span class="brand-text">niMart</span>
        </a>
        <button class="sidebar-toggle" id="sidebarToggle" title="Pin / Unpin sidebar">☰</button>
      </div>

      <div class="sidebar-label">${isSeller ? "SELLER PANEL" : "MENU"}</div>
      <div class="sidebar-navigation">
        ${links.map(([url, icon, label, key]) => `
          <a class="side-link ${page === key ? "active" : ""}" href="${url}" title="${label}">
            <span class="side-icon">${icon}</span>
            <span class="side-text">${label}</span>
          </a>`).join("")}
      </div>
    </nav>`;
}

function footer() {
  return `<footer class="footer"><span>© 2026 UniMart · Student Marketplace </span></footer>`;
}
function initShell() {
  const h = document.getElementById("app-header"),
        s = document.getElementById("app-sidebar"),
        f = document.getElementById("app-footer");
  if (h) h.innerHTML = header();
  if (s) s.innerHTML = sidebar();
  if (f) f.innerHTML = footer();

  const isDark = localStorage.getItem(STORE.theme) === "dark";
  if (isDark) document.body.classList.add("dark");

  const themeSwitch = document.getElementById("theme-toggle");
  if (themeSwitch) {
    themeSwitch.checked = isDark;
    themeSwitch.addEventListener("change", e => {
      document.body.classList.toggle("dark", e.target.checked);
      localStorage.setItem(STORE.theme, e.target.checked ? "dark" : "light");
    });
  }

  updateCartCount();

  const sidebarEl = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const mobileMenuBtn = document.getElementById("mobile-menu");

  if (localStorage.getItem("unimart_sidebar_pinned") === "true") {
    sidebarEl?.classList.add("expanded");
  }

  mobileMenuBtn?.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      sidebarEl?.classList.add("mobile-open");
      sidebarOverlay?.classList.add("show");
    } else {
      sidebarEl?.classList.toggle("expanded");
    }
  });

  sidebarOverlay?.addEventListener("click", () => {
    sidebarEl?.classList.remove("mobile-open");
    sidebarOverlay?.classList.remove("show");
  });

  document.getElementById("logout-link")?.addEventListener("click", e => {
    e.preventDefault();
    localStorage.removeItem(STORE.current);
    location.href = "index.html";
  });

  const userMenuBtn = document.getElementById("user-menu-btn");
  const userDropdownMenu = document.getElementById("user-dropdown-menu");

  userMenuBtn?.addEventListener("click", e => {
    e.stopPropagation();
    userDropdownMenu?.classList.toggle("show");
  });

  document.addEventListener("click", e => {
    if (!e.target.closest("#user-dropdown-wrap")) {
      userDropdownMenu?.classList.remove("show");
    }
  });

  document.getElementById("top-logout-btn")?.addEventListener("click", () => {
    localStorage.removeItem(STORE.current);
    location.href = "index.html";
  });

  document.getElementById("chat-button")?.addEventListener("click", () => {
    showModal("Chat with seller", "For preloved items, open the listing and use the seller phone number to contact them directly.");
  });

  document.getElementById("global-search")?.addEventListener("submit", e => {
    e.preventDefault();
    const q = document.getElementById("global-search-input").value.trim();
    location.href = "products.html?q=" + encodeURIComponent(q);
  });
}

function updateCartCount() {
  const count = cart().reduce((n, item) => n + item.qty, 0);
  const el = document.getElementById("cart-count");
  if (el) el.textContent = count;
}

function showModal(title, message) {
  const modal = document.createElement("div");
  modal.className = "modal-backdrop-lite";
  modal.innerHTML = `<div class="simple-modal">
    <h3>${escapeHTML(title)}</h3>
    <p>${escapeHTML(message)}</p>
    <button class="btn btn-primary w-100" id="close-modal">Close</button></div>`;
  document.body.appendChild(modal);
  modal.querySelector("#close-modal").onclick = () => modal.remove();
  modal.addEventListener("click", e => { if (e.target === modal) modal.remove(); });
}

function card(item) {
  const image = item.image || "image/default-product.jpg";
  const isPre = item.type === "preloved";
  const hasOptions = Array.isArray(item.options) && item.options.length > 0;
  const unitLabel = item.type === "service" ? ` / ${escapeHTML(item.unit || "service")}` : "";

  const normalizedOpts = hasOptions
    ? item.options.map(opt => typeof opt === "object"
        ? { name: opt.name, price: Number(opt.price ?? item.price) }
        : { name: String(opt), price: Number(item.price) })
    : [];

  const initialPrice = normalizedOpts.length ? normalizedOpts[0].price : Number(item.price);
  let bottomControls = "";

  if (item.status === "closed") {
    bottomControls = `<div class="mt-auto pt-2"><span class="status-pill status-closed w-100 text-center d-block">Closed</span></div>`;
  } else if (isPre) {
    bottomControls = `<div class="mt-auto pt-2"><a class="btn btn-primary btn-sm w-100" target="_blank" rel="noopener" href="https://wa.me/${escapeHTML(String(item.phone).replace(/\D/g, "").replace(/^0/, "60"))}">Chat with seller · ${escapeHTML(item.phone)}</a></div>`;
  } else {
    const optionBox = normalizedOpts.length
      ? `<select class="form-select form-select-sm item-option flex-grow-1" data-id="${escapeHTML(item.id)}" onchange="updateCardPrice(this)">
           ${normalizedOpts.map(opt => `<option value="${escapeHTML(opt.name)}" data-price="${opt.price}">${escapeHTML(opt.name)} (${money(opt.price)})</option>`).join("")}
         </select>`
      : `<span class="small-muted flex-grow-1">Quantity:</span>`;

    const qtyBox = `
      <div class="input-group input-group-sm" style="width: 92px; flex-shrink: 0;">
        <button class="btn btn-outline-secondary px-2" type="button" onclick="stepCardQty('${escapeHTML(item.id)}', -1)">-</button>
        <input type="number" class="form-control text-center item-qty px-1" data-id="${escapeHTML(item.id)}" value="1" min="1" max="${item.quantity}">
        <button class="btn btn-outline-secondary px-2" type="button" onclick="stepCardQty('${escapeHTML(item.id)}', 1)">+</button>
      </div>`;

    bottomControls = `
      <div class="mt-auto pt-2">
        <div class="d-flex align-items-center gap-2 mb-2">${optionBox}${qtyBox}</div>
        <button class="btn btn-primary add-cart" data-id="${escapeHTML(item.id)}">Add to cart</button>
      </div>`;
  }

  return `<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
    <article class="product-card h-100 d-flex flex-column">
      <div class="product-art">
        <img src="${escapeHTML(image)}" alt="${escapeHTML(item.title)}">
        <span class="type-pill">${escapeHTML(item.category)}</span>
      </div>
      <div class="product-info d-flex flex-column flex-grow-1">
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.description)}</p>
        <div class="d-flex justify-content-between align-items-center mb-2">
          <span class="price" id="price-${escapeHTML(item.id)}">${money(initialPrice)}${unitLabel}</span>
          <span class="small-muted">Stock: ${item.quantity} · ${escapeHTML(item.owner || "UniMart seller")}</span>
        </div>
        ${bottomControls}
      </div>
    </article>
  </div>`;
}

function stepCardQty(id, delta) {
  const input = document.querySelector(`.item-qty[data-id="${id}"]`);
  if (!input) return;
  const max = Number(input.max) || 99;
  input.value = Math.max(1, Math.min(Number(input.value || 1) + delta, max));
}

function updateCardPrice(selectEl) {
  const id = selectEl.dataset.id;
  const newPrice = Number(selectEl.options[selectEl.selectedIndex].dataset.price);
  const priceEl = document.getElementById(`price-${id}`);
  const item = listings().find(x => x.id === id);
  if (priceEl && item) {
    const unitLabel = item.type === "service" ? ` / ${item.unit || "service"}` : "";
    priceEl.textContent = money(newPrice) + unitLabel;
  }
}

function renderListings(type, targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  const all = listings().filter(x => x.type === type);
  const search = document.getElementById("listing-search"), filter = document.getElementById("category-filter");
  const draw = () => {
    const q = (search?.value || "").toLowerCase(), cat = filter?.value || "all";
    const found = all.filter(x => (cat === "all" || x.category === cat) && `${x.title} ${x.description} ${x.category}`.toLowerCase().includes(q));
    target.innerHTML = found.length ? found.map(card).join("") : `<div class="col-12"><div class="empty-state">No listings found. Try another search or category.</div></div>`;
    target.querySelectorAll(".add-cart").forEach(b => b.addEventListener("click", () => addToCart(b.dataset.id)));
  };
  search?.addEventListener("input", draw);
  filter?.addEventListener("change", draw);
  const params = new URLSearchParams(location.search);
  if (search && params.get("q")) search.value = params.get("q");
  draw();
}

function addToCart(id) {
  const item = listings().find(x => x.id === id);
  if (!item || item.type === "preloved") { toast("Preloved listings are contact-only."); return; }
  if (item.status !== "open" || item.quantity < 1) { toast("This listing is currently unavailable."); return; }

  const selectEl = document.querySelector(`.item-option[data-id="${id}"]`);
  const selectedOption = selectEl ? selectEl.value : "";
  const selectedPrice = selectEl ? Number(selectEl.options[selectEl.selectedIndex].dataset.price) : Number(item.price);
  const qtyInput = document.querySelector(`.item-qty[data-id="${id}"]`);
  const requestedQty = Math.max(1, Number(qtyInput?.value) || 1);

  const c = cart();
  const existing = c.find(x => x.id === id && (x.option || "") === selectedOption);
  const totalQtyInCart = c.filter(x => x.id === id).reduce((sum, x) => sum + x.qty, 0);

  if (totalQtyInCart + requestedQty > item.quantity) {
    const remaining = item.quantity - totalQtyInCart;
    toast(remaining > 0 ? `Only ${remaining} more available in stock.` : "Maximum available quantity reached.");
    return;
  }

  if (existing) existing.qty += requestedQty;
  else c.push({ id, option: selectedOption, price: selectedPrice, qty: requestedQty });

  setData(STORE.cart, c);
  updateCartCount();
  if (qtyInput) qtyInput.value = 1;
  toast(selectedOption ? `Added ${requestedQty}× (${selectedOption}) to cart.` : `Added ${requestedQty}× to your cart.`);
}

function dashboard() {
  if (current()?.role === "seller") {
    location.href = "seller.html";
    return;
  }

  const all = listings();
  const prodCount = all.filter(x => x.type === "product" && x.status === "open").length;
  const servCount = all.filter(x => x.type === "service" && x.status === "open").length;
  const prelCount = all.filter(x => x.type === "preloved" && x.status === "open").length;
  const totalOpen = prodCount + servCount + prelCount;

  const prodPct = totalOpen > 0 ? Math.round((prodCount / totalOpen) * 100) : 0;
  const servPct = totalOpen > 0 ? Math.round((servCount / totalOpen) * 100) : 0;
  const prelPct = totalOpen > 0 ? Math.round((prelCount / totalOpen) * 100) : 0;

  if (document.getElementById("stat-products")) document.getElementById("stat-products").textContent = prodPct + "%";
  if (document.getElementById("stat-services")) document.getElementById("stat-services").textContent = servPct + "%";
  if (document.getElementById("stat-preloved")) document.getElementById("stat-preloved").textContent = prelPct + "%";

  const barProd = document.getElementById("bar-products");
  const barServ = document.getElementById("bar-services");
  const barPrel = document.getElementById("bar-preloved");
  if (barProd) barProd.style.width = prodPct + "%";
  if (barServ) barServ.style.width = servPct + "%";
  if (barPrel) barPrel.style.width = prelPct + "%";

  const popProd = document.getElementById("popular-products");
  const popServ = document.getElementById("popular-services");
  if (popProd) popProd.innerHTML = all.filter(x => x.type === "product" && x.popular).slice(0, 4).map(card).join("");
  if (popServ) popServ.innerHTML = all.filter(x => x.type === "service" && x.popular).slice(0, 4).map(card).join("");
  document.querySelectorAll(".add-cart").forEach(b => b.addEventListener("click", () => addToCart(b.dataset.id)));

  const ctx = document.getElementById("categoryChart");
  if (ctx && window.Chart) {
    const counts = ["Food & Drink", "Book", "Fashion", "Other", "Services", "Preloved"].map(cat =>
      cat === "Services" ? all.filter(x => x.type === "service").length :
      cat === "Preloved" ? all.filter(x => x.type === "preloved").length :
      all.filter(x => x.category === cat && x.type === "product").length
    );
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Food & Drink", "Book", "Fashion", "Other", "Services", "Preloved"],
        datasets: [{ label: "Active listings", data: counts, backgroundColor: ["#7953ce", "#9879df", "#b69ce9", "#d0c0f2", "#805fd0", "#aa91e4"], borderRadius: 8 }]
      },
      options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { precision: 0 } }, x: { grid: { display: false } } } }
    });
  }
}

function getWalletBalance() { return Number(localStorage.getItem("unimart_wallet_balance") || 0); }
function setWalletBalance(amount) { localStorage.setItem("unimart_wallet_balance", Number(amount).toFixed(2)); }

function openWalletTopupModal(onSuccess) {
  const modal = document.createElement("div");
  modal.className = "modal-backdrop-lite";
  modal.innerHTML = `
    <div class="simple-modal" style="max-width: 400px; text-align: left;">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h3 class="mb-0">Reload UniMart Wallet</h3>
        <button type="button" class="btn-close" id="close-topup-x"></button>
      </div>
      <p class="small-muted mb-3">Current Balance: <b style="color:#5e38b5;">${money(getWalletBalance())}</b></p>
      <div class="d-flex gap-2 mb-3">
        <button type="button" class="btn btn-sm btn-outline-secondary flex-fill quick-topup" data-amt="10">RM10</button>
        <button type="button" class="btn btn-sm btn-outline-secondary flex-fill quick-topup" data-amt="20">RM20</button>
        <button type="button" class="btn btn-sm btn-outline-secondary flex-fill quick-topup" data-amt="50">RM50</button>
        <button type="button" class="btn btn-sm btn-outline-secondary flex-fill quick-topup" data-amt="100">RM100</button>
      </div>
      <div class="mb-3">
        <label class="form-label small fw-semibold">Enter Reload Amount (RM)</label>
        <input type="number" id="topup-amount-input" class="form-control" min="1" step="0.01" value="20">
      </div>
      <button type="button" class="btn btn-primary w-100 fw-semibold" id="confirm-topup-btn">Confirm Top Up</button>
    </div>`;
  document.body.appendChild(modal);
  const amtInput = modal.querySelector("#topup-amount-input");
  modal.querySelectorAll(".quick-topup").forEach(btn => btn.addEventListener("click", () => { amtInput.value = btn.dataset.amt; }));
  modal.querySelector("#confirm-topup-btn").addEventListener("click", () => {
    const addAmt = Number(amtInput.value);
    if (!addAmt || addAmt <= 0) { toast("Please enter a valid reload amount."); return; }
    const newBal = getWalletBalance() + addAmt;
    setWalletBalance(newBal);
    modal.remove();
    toast(`Successfully reloaded ${money(addAmt)} to UniMart Wallet!`);
    if (typeof onSuccess === "function") onSuccess(newBal);
  });
  modal.querySelector("#close-topup-x").onclick = () => modal.remove();
  modal.addEventListener("click", e => { if (e.target === modal) modal.remove(); });
}

function cartPage() {
  const target = document.getElementById("cart-items");
  if (!target) return;

  const fulfilmentSelect = document.getElementById("fulfilment");
  const paymentSelect = document.getElementById("payment-method");
  const walletBalDisplay = document.getElementById("wallet-balance-display");

  function refreshWalletUI() {
    if (walletBalDisplay) walletBalDisplay.textContent = money(getWalletBalance());
  }

  document.getElementById("open-topup-btn")?.addEventListener("click", () => openWalletTopupModal(() => refreshWalletUI()));
  refreshWalletUI();

  const draw = () => {
    const c = cart(), all = listings();
    const valid = c.map((x, idx) => {
      const item = all.find(p => p.id === x.id);
      const unitPrice = x.price !== undefined ? Number(x.price) : Number(item?.price || 0);
      return { ...x, idx, item, unitPrice };
    }).filter(x => x.item && x.item.type !== "preloved");

    const subtotal = valid.reduce((n, x) => n + x.unitPrice * x.qty, 0);
    const deliveryFee = (valid.length > 0 && fulfilmentSelect?.value === "delivery") ? 3.00 : 0.00;
    const grandTotal = subtotal + deliveryFee;

    target.innerHTML = valid.length ? valid.map(x => `
      <div class="d-flex align-items-center justify-content-between gap-3 py-3 border-bottom">
        <div>
          <b>${escapeHTML(x.item.title)}</b>
          ${x.option ? `<span class="badge bg-light text-dark border ms-1">${escapeHTML(x.option)}</span>` : ""}
          <div class="small-muted">${money(x.unitPrice)} each · <span class="text-primary fw-semibold">Stock: ${x.item.quantity}</span></div>
        </div>
        <div class="d-flex align-items-center gap-2">
          <input class="form-control cart-qty text-center" style="width:75px" type="number" min="1" value="${x.qty}" data-idx="${x.idx}">
          <button class="btn btn-sm btn-outline-secondary remove-cart" data-idx="${x.idx}">Remove</button>
        </div>
      </div>`).join("") : `<div class="empty-state">Your cart is empty. <a class="text-link" href="products.html">Browse products</a></div>`;

    if (document.getElementById("cart-subtotal")) document.getElementById("cart-subtotal").textContent = money(subtotal);
    if (document.getElementById("cart-delivery-fee")) document.getElementById("cart-delivery-fee").textContent = money(deliveryFee);
    if (document.getElementById("cart-total")) document.getElementById("cart-total").textContent = money(grandTotal);

    target.querySelectorAll(".cart-qty").forEach(inp => inp.addEventListener("change", () => {
      const idx = Number(inp.dataset.idx);
      const list = cart();
      const targetRow = list[idx];
      const item = all.find(p => p.id === targetRow.id);
      const requestedQty = Math.max(1, Number(inp.value) || 1);
      const otherVariantsQty = list.reduce((sum, row, i) => (i !== idx && row.id === targetRow.id ? sum + row.qty : sum), 0);
      const maxAllowed = Math.max(1, item.quantity - otherVariantsQty);

      targetRow.qty = Math.min(requestedQty, maxAllowed);
      if (requestedQty > maxAllowed) toast(`Max stock available: ${maxAllowed}`);
      setData(STORE.cart, list);
      draw();
      updateCartCount();
    }));

    target.querySelectorAll(".remove-cart").forEach(btn => btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.idx);
      setData(STORE.cart, cart().filter((_, i) => i !== idx));
      draw();
      updateCartCount();
    }));
  };

  fulfilmentSelect?.addEventListener("change", draw);
  draw();

  document.getElementById("checkout-button")?.addEventListener("click", () => {
    const c = cart();
    if (!c.length) { toast("Your cart is empty."); return; }
    const all = listings();
    const subtotal = c.reduce((sum, x) => {
      const item = all.find(p => p.id === x.id);
      const unitPrice = x.price !== undefined ? Number(x.price) : Number(item?.price || 0);
      return sum + unitPrice * x.qty;
    }, 0);
    const method = fulfilmentSelect ? fulfilmentSelect.value : "pickup";
    const deliveryFee = method === "delivery" ? 3.00 : 0.00;
    const grandTotal = subtotal + deliveryFee;
    const payType = paymentSelect ? paymentSelect.value : "cash";

    if (payType === "wallet") {
      const currentBal = getWalletBalance();
      if (currentBal < grandTotal) {
        showModal("Insufficient UniMart Wallet Balance", `Your balance is ${money(currentBal)}. Please reload your wallet.`);
        return;
      }
      setWalletBalance(currentBal - grandTotal);
      refreshWalletUI();
    }

    setData(STORE.cart, []);
    draw();
    updateCartCount();
    showModal("Order Confirmed", `Your order of ${money(grandTotal)} has been placed.`);
  });
}

function authPage() {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const emailInput = document.getElementById("login-email");
  const passwordInput = document.getElementById("login-password");
  const campusBox = document.getElementById("campus-box");
  const campusSelect = document.getElementById("login-campus");

  // Reset & pastikan akaun demo sentiasa wujud dengan nama dan role yang betul
  const existingUsers = users();
  const demoDefaults = [
    { id: "u-demo-seller", name: "UniMart Seller", email: "seller@unimart.edu.my", phone: "019-8765432", password: "seller123", role: "seller", sellerStatus: "approved" },
    { id: "u-demo-student", name: "UniMart Student", email: "student@unimart.edu.my", phone: "012-3456789", password: "student123", role: "buyer", sellerStatus: "none" }
  ];

  demoDefaults.forEach(demo => {
    const idx = existingUsers.findIndex(u => u.email.toLowerCase() === demo.email.toLowerCase());
    if (idx === -1) existingUsers.push(demo);
    else existingUsers[idx] = { ...existingUsers[idx], ...demo };
  });
  setData(STORE.users, existingUsers);

  document.getElementById("show-register")?.addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.add("d-none");
    registerForm.classList.remove("d-none");
  });

  document.getElementById("show-login")?.addEventListener("click", e => {
    e.preventDefault();
    registerForm.classList.add("d-none");
    loginForm.classList.remove("d-none");
  });

  document.querySelectorAll("[data-toggle-password]").forEach(icon => {
    icon.addEventListener("click", () => {
      const input = document.getElementById(icon.dataset.togglePassword);
      const isPass = input.type === "password";
      input.type = isPass ? "text" : "password";
      icon.classList.toggle("fa-eye", !isPass);
      icon.classList.toggle("fa-eye-slash", isPass);
    });
  });

  function toggleCampusVisibility() {
    const typedEmail = (emailInput?.value || "").trim().toLowerCase();
    const matchedUser = users().find(u => u.email.toLowerCase() === typedEmail);
    const hideCampus = matchedUser ? matchedUser.role === "seller" : typedEmail.startsWith("seller@");

    if (campusBox) campusBox.classList.toggle("d-none", hideCampus);
    if (hideCampus && campusSelect) {
      campusSelect.value = "";
      campusSelect.removeAttribute("required");
    }
  }

  emailInput?.addEventListener("input", toggleCampusVisibility);

  // Butang Demo (Student / Seller)
  document.querySelectorAll("[data-fill-email]").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      emailInput.value = btn.dataset.fillEmail;
      passwordInput.value = btn.dataset.fillPass;
      document.getElementById("login-error")?.classList.add("d-none");
      toggleCampusVisibility();

      if (!btn.dataset.fillEmail.toLowerCase().startsWith("seller@") && campusSelect && !campusSelect.value) {
        campusSelect.value = campusSelect.options[1]?.value || "UiTM Puncak Perdana";
      }
    });
  });

  loginForm?.addEventListener("submit", e => {
    e.preventDefault();
    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value;
    const campus = campusSelect?.value || "";
    const user = users().find(u => u.email.toLowerCase() === email && u.password === password);
    const error = document.getElementById("login-error");

    if (!user) {
      error.textContent = "Invalid email or password. Please try again.";
      error.classList.remove("d-none");
      return;
    }

    const isSellerAccount = user.role === "seller" || email.startsWith("seller@");

    if (!isSellerAccount && !campus) {
      error.textContent = "Please select your campus before logging in.";
      error.classList.remove("d-none");
      return;
    }

    // Simpan sesi baharu dengan tepat
    setData(STORE.current, {
      id: user.id,
      name: user.name,
      email: user.email,
      role: isSellerAccount ? "seller" : "buyer",
      sellerStatus: user.sellerStatus || "none",
      campus: isSellerAccount ? "All Campuses" : campus
    });
sessionStorage.setItem("unimart_just_logged_in", "1");
    const notifStorageKey = isSellerAccount ? "unimart_notifications_seller" : "unimart_notifications_buyer";
    const savedNotifs = JSON.parse(localStorage.getItem(notifStorageKey) || "[]");
    if (savedNotifs.length) {
      savedNotifs[0].unread = true;
      localStorage.setItem(notifStorageKey, JSON.stringify(savedNotifs));
    }
        location.href = isSellerAccount ? "seller.html" : "home.html";
    });

  registerForm?.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("register-email").value.trim().toLowerCase();
    const all = users();
    const msg = document.getElementById("register-message");

    if (all.some(u => u.email.toLowerCase() === email)) {
      msg.textContent = "This email is already registered. Please log in.";
      msg.className = "alert alert-danger";
      msg.classList.remove("d-none");
      return;
    }

    const wantsSeller = document.getElementById("request-seller").checked;
    all.push({
      id: "u-" + Date.now(),
      name: document.getElementById("register-name").value.trim(),
      email,
      phone: document.getElementById("register-phone").value.trim(),
      password: document.getElementById("register-password").value,
      role: wantsSeller ? "seller" : "buyer",
      sellerStatus: wantsSeller ? "pending" : "none"
    });
    setData(STORE.users, all);

    msg.textContent = "Account created. You can now log in.";
    msg.className = "alert alert-success";
    msg.classList.remove("d-none");
    registerForm.reset();
  });
}

function productManagePage() {
  const user = current() || seedUsers[0];
  const type = document.getElementById("listing-type");
  const category = document.getElementById("listing-category");
  if (!type || !category) return;

  function fillCats() {
    const opts = type.value === "product"
      ? ["Food & Drink", "Book", "Fashion", "Other"]
      : type.value === "service"
      ? ["Runner", "AI & Similarity Checker", "Car Rental", "Printing", "Laundry", "Other"]
      : ["Book", "Fashion", "Other"];
    category.innerHTML = opts.map(x => `<option>${x}</option>`).join("");
  }
  type.addEventListener("change", fillCats);
  fillCats();
  let editing = null;

  function drawMine() {
    const own = listings();
    document.getElementById("my-listings").innerHTML = own.length
      ? own.map(x => `<tr>
          <td><b>${escapeHTML(x.title)}</b><div class="small-muted">${escapeHTML(x.category)}</div></td>
          <td>${escapeHTML(x.type)}</td>
          <td>${money(x.price)}</td>
          <td>${x.quantity}</td>
          <td><span class="status-pill ${x.status === "open" ? "status-open" : "status-closed"}">${x.status}</span></td>
          <td>
            <button class="btn btn-sm btn-outline-secondary edit-listing" data-id="${x.id}">Edit</button>
            <button class="btn btn-sm btn-outline-danger delete-listing" data-id="${x.id}">Delete</button>
          </td>
        </tr>`).join("")
      : `<tr><td colspan="6" class="text-center text-secondary py-4">No listings yet.</td></tr>`;

    document.querySelectorAll(".delete-listing").forEach(b => b.addEventListener("click", () => {
      if (!confirm("Delete this listing?")) return;
      setData(STORE.listings, listings().filter(x => x.id !== b.dataset.id));
      drawMine();
      toast("Listing deleted.");
    }));

    document.querySelectorAll(".edit-listing").forEach(b => b.addEventListener("click", () => {
      const x = listings().find(p => p.id === b.dataset.id);
      editing = x.id;
      document.getElementById("listing-title").value = x.title;
      type.value = x.type;
      fillCats();
      category.value = x.category;
      document.getElementById("listing-description").value = x.description;
      document.getElementById("listing-price").value = x.price;
      document.getElementById("listing-quantity").value = x.quantity;
      document.getElementById("listing-status").value = x.status;
      document.getElementById("listing-phone").value = x.phone;
      document.getElementById("listing-form-title").textContent = "Edit listing";
      document.getElementById("save-listing-button").textContent = "Save changes";
      document.getElementById("cancel-edit").classList.remove("d-none");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }));
  }

  document.getElementById("listing-form").addEventListener("submit", e => {
    e.preventDefault();
    const basePrice = Number(document.getElementById("listing-price").value);
    const data = {
      id: editing || "l-" + Date.now(),
      title: document.getElementById("listing-title").value.trim(),
      type: type.value,
      category: category.value,
      description: document.getElementById("listing-description").value.trim(),
      price: basePrice,
      quantity: Number(document.getElementById("listing-quantity").value),
      status: document.getElementById("listing-status").value,
      phone: document.getElementById("listing-phone").value.trim(),
      owner: user.name,
      ownerId: user.id,
      popular: false
    };

    let all = listings();
    all = editing ? all.map(x => x.id === editing ? { ...x, ...data } : x) : [...all, data];
    setData(STORE.listings, all);
    document.getElementById("listing-form").reset();
    editing = null;
    document.getElementById("listing-form-title").textContent = "Add a listing";
    document.getElementById("save-listing-button").textContent = "Publish listing";
    document.getElementById("cancel-edit").classList.add("d-none");
    toast("Listing saved.");
    drawMine();
  });

  document.getElementById("cancel-edit").addEventListener("click", () => {
    editing = null;
    document.getElementById("listing-form").reset();
    fillCats();
    document.getElementById("listing-form-title").textContent = "Add a listing";
    document.getElementById("save-listing-button").textContent = "Publish listing";
    document.getElementById("cancel-edit").classList.add("d-none");
  });

  drawMine();
}

function sellerFormPage() {
  const statusBox = document.getElementById("seller-form-status");
  const regSection = document.getElementById("seller-register-section");
  const regForm = document.getElementById("seller-register-form");
  if (!regForm) return;

  regForm.addEventListener("submit", e => {
    e.preventDefault();
    const fullName = document.getElementById("reg-fullname").value.trim();
    const username = document.getElementById("reg-username").value.trim();
    const studentId = document.getElementById("reg-student-id").value.trim();

    regSection?.classList.add("d-none");
    if (statusBox) {
      statusBox.innerHTML = `<div class="notice-card"><span class="notice-icon">✓</span><div>
        <b>Registration Submitted!</b>
        <p class="mb-0">Thank you, <b>${escapeHTML(fullName)}</b> (@${escapeHTML(username)}). Your Student ID (${escapeHTML(studentId)}) has been submitted for approval.</p>
      </div></div>`;
    }
    regForm.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  users();
  listings();
  initShell();
  const page = document.body.dataset.page;
  if (page === "dashboard") dashboard();
  if (page === "products") renderListings("product", "product-list");
  if (page === "services") renderListings("service", "service-list");
  if (page === "preloved") renderListings("preloved", "preloved-list");
  if (page === "cart") cartPage();
  if (page === "auth") authPage();
  if (page === "product_manage") productManagePage();
  if (page === "seller-form") sellerFormPage();
});
/* =========================================================
   NOTIFICATIONS & UNIBOT AI CHATBOX WIDGET
   ========================================================= */
function pushNotification(type, title, text, link = "#") {
  const NOTIF_KEY = "unimart_notifications";
  const list = JSON.parse(localStorage.getItem(NOTIF_KEY) || "[]");
  list.unshift({
    id: "n-" + Date.now(),
    type,
    title,
    text,
    link,
    time: "Just now",
    unread: true
  });
  localStorage.setItem(NOTIF_KEY, JSON.stringify(list.slice(0, 20)));
}

document.addEventListener("DOMContentLoaded", function () {
  const bellBtn = document.getElementById("notification-button");
  const dropdownMenu = document.getElementById("notif-dropdown-menu");
  const listContainer = document.getElementById("notif-list-container");
  const unreadDot = document.getElementById("notif-unread-dot");
  const markReadBtn = document.getElementById("notif-mark-read");

  if (!bellBtn || !dropdownMenu || !listContainer) return;

  const currentUser = JSON.parse(localStorage.getItem("unimart_current") || "null");
  const isSeller = currentUser?.role === "seller";
  const NOTIF_KEY = isSeller ? "unimart_notifications_seller" : "unimart_notifications_buyer";

  // Senarai notifikasi khusus mengikut peranan (Seller vs Buyer)
  if (!localStorage.getItem(NOTIF_KEY)) {
    const defaultNotifs = isSeller
      ? [
          {
            id: "s-1",
            type: "order",
            title: "New Order #ORD-1024",
            text: "Nur Aisyah ordered 2x Nasi Lemak Ayam Berempah.",
            link: "order.html",
            time: "2 mins ago",
            unread: true
          },
          {
            id: "s-2",
            type: "chat",
            title: "New Chat from Customer",
            text: "Hi kak, boleh COD dekat Kolej Tun Dr. Ismail pukul 5?",
            link: "chat.html",
            time: "10 mins ago",
            unread: true
          },
          {
            id: "s-3",
            type: "other",
            title: "System Update",
            text: "Your shop status is currently set to OPEN.",
            link: "seller.html",
            time: "1 hour ago",
            unread: false
          }
        ]
      : [
          {
            id: "b-1",
            type: "chat",
            title: "Message from Seller (Nadira)",
            text: "Hi! Your Homemade Chocolate Cookies are ready for pickup at Kolej Melati.",
            link: "products.html",
            time: "3 mins ago",
            unread: true
          },
          {
            id: "b-2",
            type: "promo",
            title: "Weekend Campus Promo! 🎉",
            text: "Enjoy RM2 OFF on Document Printing & Food orders above RM10 today!",
            link: "products.html",
            time: "25 mins ago",
            unread: true
          },
          {
            id: "b-3",
            type: "promo",
            title: "Hot Deal: Preloved Books 📚",
            text: "CTU553 & Reference Books starting from RM15. Grab yours before stock runs out!",
            link: "preloved.html",
            time: "2 hours ago",
            unread: false
          }
        ];
    localStorage.setItem(NOTIF_KEY, JSON.stringify(defaultNotifs));
  }

  function renderNotifications() {
    const items = JSON.parse(localStorage.getItem(NOTIF_KEY) || "[]");
    const hasUnread = items.some(i => i.unread);
    if (unreadDot) unreadDot.style.display = hasUnread ? "block" : "none";

    if (!items.length) {
      listContainer.innerHTML = `<div class="p-3 text-center small text-muted">No notifications yet.</div>`;
      return;
    }

    const badgeMap = {
      order: `<span class="badge bg-danger" style="font-size:10px;">New Order</span>`,
      chat: `<span class="badge bg-success" style="font-size:10px;">${isSeller ? "Customer Chat" : "Seller Chat"}</span>`,
      promo: `<span class="badge" style="background-color:#7c3aed;color:#fff;font-size:10px;">Promo</span>`,
      other: `<span class="badge bg-warning text-dark" style="font-size:10px;">Notice</span>`
    };

    listContainer.innerHTML = items.map(item => `
      <a href="${item.link || "#"}" class="notif-item type-${item.type}">
        <span class="notif-dot ${item.type}"></span>
        <div class="flex-grow-1">
          <div class="d-flex justify-content-between align-items-center gap-1 mb-1">
            <span class="fw-bold" style="font-size: 12.5px;">${item.title}</span>
            ${badgeMap[item.type] || ""}
          </div>
          <div class="text-muted" style="font-size: 12px; line-height: 1.35;">${item.text}</div>
          <div class="text-muted mt-1" style="font-size: 10.5px;">${item.time}</div>
        </div>
      </a>
    `).join("");
  }

  renderNotifications();

  // Auto pop-out selama 10 saat selepas pengguna baru log in
  let autoCloseTimer = null;
  if (sessionStorage.getItem("unimart_just_logged_in") === "1") {
    sessionStorage.removeItem("unimart_just_logged_in");
    dropdownMenu.classList.add("show");
    autoCloseTimer = setTimeout(() => {
      dropdownMenu.classList.remove("show");
    }, 3000);
  }

  bellBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (autoCloseTimer) clearTimeout(autoCloseTimer);
    dropdownMenu.classList.toggle("show");
  });

  document.addEventListener("click", function (e) {
    if (!dropdownMenu.contains(e.target) && !bellBtn.contains(e.target)) {
      dropdownMenu.classList.remove("show");
    }
  });

  markReadBtn?.addEventListener("click", function () {
    const items = JSON.parse(localStorage.getItem(NOTIF_KEY) || "[]").map(i => ({ ...i, unread: false }));
    localStorage.setItem(NOTIF_KEY, JSON.stringify(items));
    renderNotifications();
  });
});document.addEventListener("DOMContentLoaded", function () {
  // Jangan paparkan pada halaman login/register
  if (document.body.dataset.page === "auth") return;

  // Kesan pengguna semasa daripada localStorage
  const currentUser = JSON.parse(localStorage.getItem("unimart_current") || "null");
  const isSeller = currentUser && (currentUser.role === "seller" || currentUser.sellerStatus === "approved");
  const userName = currentUser?.name ? currentUser.name.split(" ")[0] : "there";

  // 1. Bina HTML Widget secara automatik
  const launcher = document.createElement("button");
  launcher.className = "ai-widget-launcher";
  launcher.id = "ai-widget-launcher";
  launcher.title = "Ask UniBot AI";
  launcher.innerHTML = `
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2"></rect>
      <circle cx="12" cy="5" r="2"></circle>
      <path d="M12 7v4"></path>
      <line x1="8" y1="16" x2="8" y2="16"></line>
      <line x1="16" y1="16" x2="16" y2="16"></line>
    </svg>
  `;

  const chatBox = document.createElement("div");
  chatBox.className = "ai-widget-box";
  chatBox.id = "ai-widget-box";
  chatBox.innerHTML = `
    <div class="ai-widget-header">
      <div class="d-flex align-items-center gap-2">
        <div style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.2);display:grid;place-items:center;">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="10" rx="2"></rect>
            <circle cx="12" cy="5" r="2"></circle>
            <path d="M12 7v4"></path>
            <line x1="8" y1="16" x2="8" y2="16"></line>
            <line x1="16" y1="16" x2="16" y2="16"></line>
          </svg>
        </div>
        <div>
          <div class="fw-bold" style="font-size:14px;line-height:1.1;">UniBot AI</div>
          <div style="font-size:11px;opacity:0.88;">${isSeller ? "Seller Support Mode" : "Student & Buyer Assistant"}</div>
        </div>
      </div>
      <button type="button" id="ai-widget-close" class="btn btn-sm text-white p-1" style="line-height:1;" title="Close">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <div class="ai-widget-body" id="ai-widget-body"></div>
    <div class="ai-chips-wrap" id="ai-chips-wrap"></div>

    <form class="ai-widget-footer" id="ai-widget-form">
      <input type="text" id="ai-widget-input" placeholder="Ask something..." autocomplete="off" required>
      <button type="submit" title="Send">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    </form>
  `;

  document.body.appendChild(launcher);
  document.body.appendChild(chatBox);

  const bodyEl = document.getElementById("ai-widget-body");
  const chipsEl = document.getElementById("ai-chips-wrap");
  const formEl = document.getElementById("ai-widget-form");
  const inputEl = document.getElementById("ai-widget-input");
  const closeBtn = document.getElementById("ai-widget-close");

  // 2. Cadangan Butang Pantas mengikut peranan (Seller vs Buyer)
  const quickChips = isSeller
    ? [
        "Macam mana nak buka/tutup kedai?",
        "Cara tambah produk baru",
        "Maksud warna notification",
        "Cara export laporan jualan"
      ]
    : [
        "Cara bayar & guna Wallet",
        "Lokasi COD / pickup kampus",
        "Semak item dalam Cart",
        "Macam mana nak jadi Seller?"
      ];

  chipsEl.innerHTML = quickChips
    .map(q => `<button type="button" class="ai-chip">${q}</button>`)
    .join("");

  function appendMessage(text, sender = "bot") {
    const div = document.createElement("div");
    div.className = `ai-msg ${sender}`;
    div.innerHTML = text;
    bodyEl.appendChild(div);
    bodyEl.scrollTop = bodyEl.scrollHeight;
    return div;
  }

  // 3. Otak Jawapan Pintar (Buyer & Seller)
  function getBotReply(rawMsg) {
    const msg = rawMsg.toLowerCase();

    if (isSeller) {
      if (msg.includes("tutup") || msg.includes("buka") || msg.includes("open") || msg.includes("close") || msg.includes("status")) {
        const sellerKey = "unimart_shop_status_" + (currentUser.id || currentUser.email || "default");
        const currentStatus = localStorage.getItem(sellerKey) === "closed" ? "CLOSED" : "OPEN";
        return `Status kedai anda sekarang ialah <b>${currentStatus}</b>. Anda boleh tukar antara <b>OPEN</b> dan <b>CLOSED</b> menggunakan suis <i>Shop Status</i> di bahagian atas <a href="seller.html">Seller Dashboard</a>.`;
      }
      if (msg.includes("produk") || msg.includes("listing") || msg.includes("tambah") || msg.includes("add")) {
        return `Untuk tambah produk baharu, pergi ke halaman <a href="p_manage.html">Product Management</a>, isikan nama produk, kategori, harga, dan simpan pada borang <b>Add a listing</b>.`;
      }
      if (msg.includes("noti") || msg.includes("warna") || msg.includes("merah") || msg.includes("hijau")) {
        return `Kod warna notifikasi anda:<br>🔴 <b>Merah:</b> Pesanan baharu (New Order)<br>🟢 <b>Hijau:</b> Mesej dari pelanggan (Customer Chat)<br>🟡 <b>Kuning:</b> Notis sistem & kemas kini umum.`;
      }
      if (msg.includes("export") || msg.includes("csv") || msg.includes("laporan") || msg.includes("sales")) {
        return `Klik butang ungu <b>Export Sales Report (CSV)</b> di penjuru kanan atas <a href="seller.html">Seller Dashboard</a> untuk memuat turun rekod jualan anda.`;
      }
    }

    if (msg.includes("cart") || msg.includes("troli") || msg.includes("semak")) {
      const cartItems = JSON.parse(localStorage.getItem("unimart_cart") || "[]");
      const totalQty = cartItems.reduce((sum, item) => sum + (Number(item.qty) || 1), 0);
      return totalQty > 0
        ? `Anda mempunyai <b>${totalQty} item</b> dalam troli sekarang. Klik <a href="cart.html">di sini untuk ke Cart</a> dan teruskan pembayaran.`
        : `Troli anda masih kosong. Jom lihat produk menarik di <a href="products.html">Marketplace</a>!`;
    }

    if (msg.includes("bayar") || msg.includes("wallet") || msg.includes("payment") || msg.includes("topup")) {
      return `Anda boleh membuat pembayaran menggunakan <b>UniMart Wallet</b>, Online Banking (FPX), atau Cash on Delivery (COD) semasa checkout di <a href="cart.html">Cart</a>.`;
    }

    if (msg.includes("cod") || msg.includes("pickup") || msg.includes("lokasi") || msg.includes("kampus")) {
      const campus = currentUser?.campus || "kampus pilihan anda";
      return `Penghantaran COD & self-pickup tersedia di sekitar <b>${campus}</b> (Kolej kediaman, perpustakaan, atau kafe fakulti). Anda boleh tetapkan masa COD dengan seller melalui <a href="chat.html">Chat</a>.`;
    }

    if (msg.includes("seller") || msg.includes("jual") || msg.includes("niaga")) {
      return `Untuk mula berniaga di UniMart, daftar akaun baharu di halaman log masuk dan tandakan kotak <b>Request Seller Access</b> (atau log masuk menggunakan akaun demo Seller).`;
    }

    if (msg.includes("hi") || msg.includes("hello") || msg.includes("hai") || msg.includes("salam")) {
      return `Hai ${userName}! 👋 Ada apa yang UniBot boleh bantu hari ini? Pilih topik di bawah atau taip soalan anda.`;
    }

    return `Maaf, saya kurang pasti tentang perkara itu. Anda boleh cuba tanya mengenai <b>status kedai, pembayaran wallet, lokasi COD,</b> atau <b>pengurusan produk</b>.`;
  }

  function handleUserMessage(text) {
    if (!text.trim()) return;
    appendMessage(text, "user");

    const typingEl = appendMessage(`<span class="text-muted"><i class="fas fa-ellipsis-h"></i> UniBot is typing...</span>`, "bot");

    setTimeout(() => {
      typingEl.innerHTML = getBotReply(text);
      bodyEl.scrollTop = bodyEl.scrollHeight;
    }, 550);
  }

  // 4. Mesej alu-aluan awal
  appendMessage(
    isSeller
      ? `Hai <b>${userName}</b>! 👋 Saya <b>UniBot</b>. Perlukan bantuan untuk urus kedai, status Open/Closed, atau laporan jualan anda?`
      : `Hai <b>${userName}</b>! 👋 Saya <b>UniBot</b>. Nak semak cart, lokasi COD kampus, atau cara guna UniMart Wallet?`,
    "bot"
  );

  launcher.addEventListener("click", () => {
    chatBox.classList.toggle("open");
    if (chatBox.classList.contains("open")) inputEl.focus();
  });

  closeBtn.addEventListener("click", () => {
    chatBox.classList.remove("open");
  });

  formEl.addEventListener("submit", e => {
    e.preventDefault();
    const val = inputEl.value;
    inputEl.value = "";
    handleUserMessage(val);
  });

  chipsEl.querySelectorAll(".ai-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      handleUserMessage(chip.textContent);
    });
  });
});
function computePerfData() {
        const allListings = typeof listings === "function" ? listings() : [];
        const user = typeof current === "function" ? current() : null;

        // Tapis hanya item milik seller ini sahaja (jika ada tag owner/sellerEmail),
        // atau ambil 4 item pertama sebagai katalog khusus kedai seller ini
        const sellerItems = allListings.filter(item =>
          (user?.email && item.sellerEmail === user.email) ||
          (user?.name && item.owner === user.name)
        );

        const targetList = sellerItems.length > 0 ? sellerItems : allListings.slice(0, 4);

        return targetList.map((item, idx) => {
          const sold = item.sold !== undefined
            ? Number(item.sold)
            : (item.popular ? (18 + (idx % 5) * 4) : (6 + (idx % 4) * 3));
          const views = item.views !== undefined
            ? Number(item.views)
            : sold * (14 + (idx % 6) * 2);
          const conv = Number(((sold / Math.max(1, views)) * 100).toFixed(1));
          const revenue = Number((sold * Number(item.price || 0)).toFixed(2));
          return { ...item, sold, views, conv, revenue };
        });
      }
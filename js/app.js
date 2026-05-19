/* =====================================================
   BURGER MELA — app.js
===================================================== */

/* ── MENU DATA with real food images ── */
const MENU = [
  // BURGERS
  { name:"Chatpatta Aloo Burger",         price:"",      cat:"burger",   img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80", desc:"Spicy aloo patty with fresh veggies" },
  { name:"Desi Style Aloo Tikki Burger",  price:"₹49",   cat:"burger",   img:"https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80", desc:"Classic desi aloo tikki in a soft bun" },
  { name:"Favourite Aloo Burger",         price:"₹59",   cat:"burger",   img:"https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&q=80", desc:"Our crowd favourite aloo burger" },
  { name:"Kurkura Veggie Classic Burger", price:"₹69",   cat:"burger",   img:"https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&q=80", desc:"Crispy veggie patty, classic flavours" },
  { name:"Crunchy Veggie Decker Delight", price:"₹139",  cat:"burger",   img:"https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80", desc:"Crunchy double-decker veggie burger" },
  { name:"Peri Peri Cheese Burger",       price:"₹139",  cat:"burger",   img:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80", desc:"Fiery peri peri sauce with melted cheese" },
  { name:"Tikha Paneer Burger",           price:"₹199",  cat:"burger",   img:"https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80", desc:"Spicy paneer patty with tangy sauces" },
  { name:"Double Decker Burger",          price:"₹139",  cat:"burger",   img:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&q=80", desc:"Double the patty, double the joy!" },

  // PIZZAS
  { name:"Margherita Pizza",              price:"",      cat:"pizza",    img:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80", desc:"Classic tomato & mozzarella pizza" },
  { name:"Veggie Classic Pizza",          price:"",      cat:"pizza",    img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80", desc:"Loaded with fresh vegetables" },
  { name:"Tandoori Paneer Pizza",         price:"₹149",  cat:"pizza",    img:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80", desc:"Paneer tikka on a tandoori base" },
  { name:"Makhani Pizza",                 price:"₹179",  cat:"pizza",    img:"https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&q=80", desc:"Rich makhani sauce with fresh toppings" },
  { name:"Peri Peri Cheese Pizza",        price:"₹199",  cat:"pizza",    img:"https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=400&q=80", desc:"Spicy peri peri loaded with cheese" },
  { name:"Cheese Burst Pizza",            price:"₹249",  cat:"pizza",    img:"https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=400&q=80", desc:"Oozing cheese burst on every bite" },

  // SANDWICHES
  { name:"Masala Sandwich (3 Pcs.)",      price:"",      cat:"sandwich", img:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80", desc:"Spicy masala stuffed toasted sandwich" },
  { name:"Cheese Sandwich (3 Pcs.)",      price:"₹69",   cat:"sandwich", img:"https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=400&q=80", desc:"Loaded with melted cheese" },
  { name:"Veggie Deluxe Supreme (3 Pcs.)",price:"₹89",   cat:"sandwich", img:"https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&q=80", desc:"Premium veggie stuffed sandwich" },
  { name:"Veggie Tandoori Sandwich",      price:"₹99",   cat:"sandwich", img:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80", desc:"Tandoori flavours in a toasted sandwich" },

  // SIDES & FRIES
  { name:"Salted Fries (S/M/L)",          price:"₹69+",  cat:"sides",    img:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80", desc:"Golden crispy salted fries" },
  { name:"Peri Peri Fries (S/M/L)",       price:"₹83+",  cat:"sides",    img:"https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=400&q=80", desc:"Spicy peri peri seasoned fries" },
  { name:"Vada Pav (1 Piece)",            price:"₹39",   cat:"sides",    img:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80", desc:"Classic Mumbai style vada pav" },
  { name:"Chatpa Chowmein",               price:"₹99",   cat:"sides",    img:"https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&q=80", desc:"Spicy chatpata chowmein noodles" },
  { name:"Hakka Noodles",                 price:"₹119",  cat:"sides",    img:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80", desc:"Classic hakka noodles with veggies" },

  // BEVERAGES
  { name:"Cold Drink (Per Glass)",        price:"₹40",   cat:"drinks",   img:"https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=400&q=80", desc:"Chilled cold drink per glass" },
  { name:"Cold Coffee",                   price:"₹40",   cat:"drinks",   img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80", desc:"Refreshing cold coffee" },
  { name:"Green Apple Mocktail",          price:"₹114",  cat:"drinks",   img:"https://images.unsplash.com/photo-1546171753-97d7676e4602?w=400&q=80", desc:"Refreshing green apple mocktail" },
  { name:"Blue Lagoon Mocktail",          price:"₹114",  cat:"drinks",   img:"https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=400&q=80", desc:"Cool and refreshing blue lagoon" },
  { name:"Strawberry Shake",              price:"₹114",  cat:"drinks",   img:"https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80", desc:"Creamy strawberry milkshake" },
  { name:"Mango Shake",                   price:"₹114",  cat:"drinks",   img:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80", desc:"Thick mango milkshake" },
  { name:"Kit Kat Shake",                 price:"₹114",  cat:"drinks",   img:"https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=400&q=80", desc:"Indulgent Kit Kat milkshake" },

  // MOMOS
  { name:"Soft & Steamed Momos",          price:"₹70",   cat:"momos",    img:"https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80", desc:"Classic steamed momos with chutney" },
  { name:"Fried Momos",                   price:"₹70",   cat:"momos",    img:"https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&q=80", desc:"Crispy golden fried momos" },
  { name:"Crispy & Crunchy Momos",        price:"₹100",  cat:"momos",    img:"https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80", desc:"Extra crispy, extra crunchy momos" },
  { name:"Cheesy Momos",                  price:"₹129",  cat:"momos",    img:"https://images.unsplash.com/photo-1587248720327-8eb72564be1e?w=400&q=80", desc:"Momos loaded with melted cheese" },
];

/* ── Emoji fallback per category ── */
const CAT_EMOJI = { burger:"🍔", pizza:"🍕", sandwich:"🥪", sides:"🍟", drinks:"🥤", momos:"🥟" };

/* ══════════════════════════════════════
   RENDER MENU CARDS
══════════════════════════════════════ */
function renderMenu(filter) {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;
  const items = filter === "all" ? MENU : MENU.filter(i => i.cat === filter);

  grid.innerHTML = items.map(item => `
    <div class="m-card">
      <div class="m-card-img">
        <img
          src="${item.img}"
          alt="${item.name}"
          loading="lazy"
          onerror="this.parentNode.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;height:180px;font-size:62px;background:linear-gradient(135deg,#fff8f0,#ffe8d6)\\'>${CAT_EMOJI[item.cat]||'🍽️'}</div>'"
        />
      </div>
      <div class="m-card-body">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="m-card-foot">
          <span class="m-price">${item.price || "Ask Price"}</span>
          <button class="m-add" onclick="quickAdd('${item.name.replace(/'/g,"\\'")}','${item.price}')">+</button>
        </div>
      </div>
    </div>
  `).join("");
}

/* Add item → fill order form */
function quickAdd(name, price) {
  const field = document.getElementById("fItem");
  if (field) {
    field.value = field.value.trim() ? field.value + ", " + name : name;
  }
  toast(`✅ Added: ${name}${price ? " ("+price+")" : ""}`);
  setTimeout(() => {
    document.getElementById("order")?.scrollIntoView({ behavior:"smooth", block:"center" });
  }, 600);
}

/* ── Category filter pills ── */
document.querySelectorAll(".cat-pill").forEach(btn => {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".cat-pill").forEach(b => b.classList.remove("active"));
    this.classList.add("active");
    renderMenu(this.dataset.cat);
  });
});

/* ══════════════════════════════════════
   NAVBAR — scroll effects + active link
══════════════════════════════════════ */
const navbar = document.getElementById("navbar");
const scrTopBtn = document.getElementById("scrTop");

window.addEventListener("scroll", () => {
  /* sticky shadow */
  navbar?.classList.toggle("stuck", window.scrollY > 60);

  /* scroll-top button */
  scrTopBtn?.classList.toggle("show", window.scrollY > 420);

  /* active nav link */
  let current = "";
  document.querySelectorAll("section[id]").forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 130) current = sec.id;
  });
  document.querySelectorAll(".nm-link").forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
});

scrTopBtn?.addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));

/* ══════════════════════════════════════
   MOBILE DRAWER
══════════════════════════════════════ */
const burgerBtn  = document.getElementById("burgerBtn");
const drawer     = document.getElementById("drawer");
const drawerBg   = document.getElementById("drawerBg");
const drawerClose = document.getElementById("drawerClose");

function openDrawer()  { drawer?.classList.add("on");  drawerBg?.classList.add("on");  document.body.style.overflow = "hidden"; }
function closeDrawer() { drawer?.classList.remove("on"); drawerBg?.classList.remove("on"); document.body.style.overflow = ""; }

burgerBtn?.addEventListener("click", openDrawer);
drawerClose?.addEventListener("click", closeDrawer);
drawerBg?.addEventListener("click", closeDrawer);
document.querySelectorAll(".d-link").forEach(l => l.addEventListener("click", closeDrawer));

/* ══════════════════════════════════════
   FLOATING ACTION BUTTONS
══════════════════════════════════════ */
const fabMain = document.getElementById("fabMain");
const fabMenu = document.getElementById("fabMenu");
const fabIcon = document.getElementById("fabIcon");
const fabWrap = document.getElementById("fabWrap");
let fabOpen   = false;

fabMain?.addEventListener("click", (e) => {
  e.stopPropagation();
  fabOpen = !fabOpen;
  fabMenu?.classList.toggle("open", fabOpen);
  fabMain?.classList.toggle("active", fabOpen);
  if (fabIcon) fabIcon.className = fabOpen ? "fas fa-times" : "fas fa-shopping-bag";
});

document.addEventListener("click", (e) => {
  if (fabOpen && fabWrap && !fabWrap.contains(e.target)) {
    fabOpen = false;
    fabMenu?.classList.remove("open");
    fabMain?.classList.remove("active");
    if (fabIcon) fabIcon.className = "fas fa-shopping-bag";
  }
});

/* ══════════════════════════════════════
   MENU MODAL
══════════════════════════════════════ */
function openModal() {
  document.getElementById("modal")?.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  document.getElementById("modal")?.classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("modal")?.addEventListener("click", (e) => {
  if (e.target === document.getElementById("modal")) closeModal();
});

/* ══════════════════════════════════════
   ORDER NOW MODAL
══════════════════════════════════════ */
function openOrderModal() {
  document.getElementById("orderModal")?.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeOrderModal() {
  document.getElementById("orderModal")?.classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("orderModal")?.addEventListener("click", (e) => {
  if (e.target === document.getElementById("orderModal")) closeOrderModal();
});

/* ══════════════════════════════════════
   WHATSAPP ORDER FORM
══════════════════════════════════════ */
function sendOrder() {
  const name  = document.getElementById("fName")?.value.trim();
  const phone = document.getElementById("fPhone")?.value.trim();
  const item  = document.getElementById("fItem")?.value.trim();
  const addr  = document.getElementById("fAddr")?.value.trim();
  const note  = document.getElementById("fNote")?.value.trim();

  if (!name)                     { toast("⚠️ Please enter your name.");           return; }
  if (!phone || phone.length < 10){ toast("⚠️ Please enter a valid phone number."); return; }
  if (!item)                     { toast("⚠️ Please enter what you want to order."); return; }

  const msg = [
    "🍔 *New Order — Burger Mela*",
    "",
    `👤 *Name:* ${name}`,
    `📞 *Phone:* ${phone}`,
    `🛒 *Order:* ${item}`,
    addr ? `📍 *Address:* ${addr}` : "",
    note ? `📝 *Note:* ${note}`    : "",
  ].filter(Boolean).join("\n");

  window.open("https://wa.me/917568521210?text=" + encodeURIComponent(msg), "_blank");
  toast("✅ Opening WhatsApp — your order is ready!");
}

/* ══════════════════════════════════════
   TOAST
══════════════════════════════════════ */
function toast(msg) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove("show"), 3200);
}

/* ══════════════════════════════════════
   FADE-UP SCROLL ANIMATION
══════════════════════════════════════ */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("vis"); });
}, { threshold: 0.10 });
document.querySelectorAll(".fade-up").forEach(el => io.observe(el));

/* ══════════════════════════════════════
   KEYBOARD ESC — close modals/drawer
══════════════════════════════════════ */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeModal(); closeOrderModal(); closeDrawer(); }
});

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
renderMenu("all");

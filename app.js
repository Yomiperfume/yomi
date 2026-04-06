/* ═══════════════════════════════════════════════
   YOMI — Luxury in Every Breath
   Application Script: app.js
   ═══════════════════════════════════════════════ */

// ═══ EMAILJS INIT ═══
emailjs.init("pHIPmh4IxDdEVW6kN");

// ═══ ALL PRODUCTS ═══
const ALL_PRODUCTS = [
  { id:1,  name:"Y'Prision",          cat:"Men",    img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350437/yprision__mvk9q1.jpg",                                                               desc:"💼 Y' Prision (Men)\n\nFresh and modern, Y' Prision delivers citrus energy with a clean finish.",                                                                                  type:"Fresh, Citrus",          bestFor:"Daily",          longevity:"15–18 Hours", featured:true,  bestseller:true  },
  { id:2,  name:"Fantasia",           cat:"Men",    img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350420/Fantasia_2_whkzug.jpg",                                                              desc:"🌌 Fantasia (Men)\n\nStep into a world of warmth and mystery with Fantasia. Its smooth blend creates a captivating and memorable experience, perfect for evenings.",                 type:"Sweet, Warm, Spicy",     bestFor:"Evening, Casual",longevity:"15–18 Hours", featured:true                   },
  { id:3,  name:"Black Oud",          cat:"Men",    img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350412/Black_Oud_2_m9kcsu.jpg",                                                            desc:"🔥 Black Oud (Men)\n\nBold and intense, Black Oud features deep oud with smoky and woody notes, creating a strong masculine presence.",                                            type:"Oud, Smoky, Woody",      bestFor:"Night, Winter",  longevity:"15–18 Hours", featured:true                   },
  { id:4,  name:"Blue Oud",           cat:"Men",    img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350413/Blue_Oud_2_ktwhvq.jpg",                                                             desc:"🌊 Blue Oud (Men)\n\nA fresh take on oud, Blue Oud combines airy freshness with rich woody depth, making it bold yet wearable daily.",                                             type:"Fresh Oud, Woody, Aquatic",bestFor:"Daily, Evening",longevity:"15–18 Hours", featured:true                   },
  { id:5,  name:"Burhan",             cat:"Men",    img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350415/Burhan_2_wot0so.jpg",                                                               desc:"💼 Burhan (Men)\n\nStrong and masculine, Burhan combines woody and spicy notes to create a confident and professional aura.",                                                      type:"Woody, Spicy, Warm",     bestFor:"Office, Formal", longevity:"15–18 Hours", featured:true                   },
  { id:6,  name:"Tarteel",            cat:"Men",    img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350434/Tarteel__e8odgo.jpg",                                                               desc:"🌿 Tarteel (Men)\n\nFresh and citrusy, Tarteel delivers a light and uplifting scent perfect for daily wear.",                                                                      type:"Fresh, Citrus",          bestFor:"Daytime, Casual",longevity:"15–18 Hours", featured:true                   },
  { id:7,  name:"Golden Dust",        cat:"Men",    img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350420/Golden_dust_2_ezguyj.jpg",                                                          desc:"✨ Golden Dust (Men)\n\nWarm and luxurious, Golden Dust blends sweet amber notes into a rich and glowing fragrance.",                                                              type:"Warm, Sweet, Amber",     bestFor:"Evening",        longevity:"15–18 Hours", featured:true                   },
  { id:8,  name:"Mukhalat Al Emarat", cat:"Men",    img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350413/Mukhalat_al_Emarat__zedhga.jpg",                                                    desc:"🕌 Mukhalat Al Emarat (Men)\n\nA traditional Arabic fragrance with rich oud and spices, Mukhalat Al Emarat is bold and powerful.",                                                 type:"Oud, Oriental, Spicy",   bestFor:"Night",          longevity:"15–18 Hours"                                  },
  { id:9,  name:"Shay Oud",           cat:"Men",    img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350428/shay_Oud__d049vd.jpg",                                                              desc:"🌫️ Shay Oud (Men)\n\nDark and intense, Shay Oud delivers a smoky and powerful oud fragrance for bold personalities.",                                                             type:"Oud, Smoky",             bestFor:"Night",          longevity:"15–18 Hours"                                  },
  { id:10, name:"Rasheeqa",           cat:"Men",    img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350425/Rasheeqa__njp7nf.jpg",                                                              desc:"💎 Rasheeqa (Men)\n\nFresh and musky, Rasheeqa gives a clean and professional feel perfect for daily use.",                                                                        type:"Fresh, Musky",           bestFor:"Office",         longevity:"15–18 Hours"                                  },
  { id:11, name:"Oud Marcouja",       cat:"Men",    img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350418/Oud_marcouja_2_jdgsad.jpg",                                                         desc:"🌲 Oud Marcouja (Men)\n\nEarthy and deep, Oud Marcouja offers a strong woody oud scent for classic fragrance lovers.",                                                             type:"Woody, Oud",             bestFor:"Evening",        longevity:"15–18 Hours"                                  },
  { id:12, name:"Oud Malaki",         cat:"Men",    img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350418/Oud_malaki_bfadf507-ef07-4b0f-9abe-075715959bef_PhotoGrid_-_Copy-ezremove_vghyjn.png", desc:"👑 Oud Malaki (Men)\n\nA premium blend of oud and spices, Oud Malaki delivers luxury and power in every spray.",                                                               type:"Oud, Spicy",             bestFor:"Night",          longevity:"15–18 Hours"                                  },
  { id:13, name:"Baccarat",           cat:"Men",    img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350415/Baccarat_b6b73261-37f8-4255-8b9f-71950d6b6cee_PhotoGrid-ezremove_ga5elm.png",       desc:"💎 Baccarat (Men)\n\nSweet and elegant, Baccarat blends amber and woody notes into a luxurious fragrance.",                                                                       type:"Sweet, Amber",           bestFor:"Luxury Wear",    longevity:"15–18 Hours"                                  },
  { id:14, name:"Sigar",              cat:"Men",    img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350435/Sigar-ezremove_kqtoyx.png",                                                         desc:"🚬 Sigar (Men)\n\nSmoky and bold, Sigar features tobacco-inspired notes with a strong woody base.",                                                                               type:"Smoky, Woody",           bestFor:"Night",          longevity:"15–18 Hours"                                  },
  { id:15, name:"4 O'Clock",          cat:"Men",    img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350418/4_0_clock-ezremove_ireojo.png",                                                     desc:"⏰ 4 O'Clock (Men)\n\nWarm and spicy, 4 O'Clock is perfect for relaxed evenings.",                                                                                                type:"Warm, Spicy",            bestFor:"Evening",        longevity:"15–18 Hours"                                  },
  { id:16, name:"6 AM",               cat:"Men",    img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350416/6_AM-ezremove_cevxca.png",                                                          desc:"🌅 6 AM (Men)\n\nLight and refreshing, 6 AM is made for a fresh start every day.",                                                                                                type:"Fresh, Clean",           bestFor:"Morning",        longevity:"15–18 Hours"                                  },
  { id:17, name:"Raghba",             cat:"Men",    img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350432/Raghba-ezremove_bgyort.png",                                                        desc:"🍯 Raghba (Men)\n\nSweet and warm, Raghba blends vanilla and oud for a rich scent.",                                                                                               type:"Sweet, Oud",             bestFor:"Evening",        longevity:"15–18 Hours"                                  },
  { id:18, name:"Rauvage",            cat:"Men",    img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350436/Rauvage-ezremove_uirqnv.png",                                                       desc:"⚡ Rauvage (Men)\n\nFresh and spicy, Rauvage delivers a bold and modern masculine scent.",                                                                                          type:"Fresh, Citrus, Spicy",   bestFor:"Daily",          longevity:"15–18 Hours"                                  },
  { id:19, name:"Scentury",           cat:"Men",    img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350430/Scentury_2_gjhdbh.png",                                                             desc:"🌿 Scentury (Men)\n\nClean and fresh, Scentury offers a simple yet attractive musky fragrance.",                                                                                  type:"Fresh, Musky",           bestFor:"Daily",          longevity:"15–18 Hours"                                  },
  { id:20, name:"Yaqoot",             cat:"Women",  img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350434/Yaqoot__sxd8hr.jpg",                                                                desc:"🌺 Yaqoot (Women)\n\nElegant and soft, Yaqoot blends floral sweetness into a graceful fragrance that enhances your natural charm.",                                               type:"Floral, Sweet",          bestFor:"Daily Wear",     longevity:"15–18 Hours", featured:true                   },
  { id:21, name:"Burberry Women",     cat:"Women",  img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350411/Burburry_Women_2_plnfhm.jpg",                                                       desc:"🌸 Burberry Women (Women)\n\nA soft blend of fruity and floral notes, Burberry Women delivers a classy and elegant everyday fragrance.",                                           type:"Fruity, Floral",         bestFor:"Daily, Office",  longevity:"15–18 Hours", featured:true,  bestseller:true  },
  { id:22, name:"Pink Shiffon",       cat:"Women",  img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350422/Pink_Shiffon_2_chhzuf.jpg",                                                         desc:"🌸 Pink Chiffon (Women)\n\nSweet, soft, and feminine — Pink Chiffon combines floral notes with a powdery finish for a charming scent.",                                           type:"Sweet, Floral, Powdery", bestFor:"Casual, Daily",  longevity:"15–18 Hours", featured:true                   },
  { id:23, name:"Sultanah",           cat:"Women",  img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350436/Sultanah-ezremove_thuxcv.png",                                                      desc:"🌹 Sultanah (Women)\n\nFloral and oriental, Sultanah gives a royal and elegant fragrance.",                                                                                        type:"Floral, Oriental",       bestFor:"Events",         longevity:"15–18 Hours"                                  },
  { id:24, name:"Black Mama",         cat:"Women",  img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350423/Black_Mama-ezremove_kiil7z.png",                                                    desc:"💃 Black Mama (Women)\n\nFruity and bold, Black Mama is perfect for confident women.",                                                                                             type:"Sweet, Fruity",          bestFor:"Events",         longevity:"15–18 Hours"                                  },
  { id:25, name:"Imperial Valley",    cat:"Unisex", img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350422/Imperial_Valley_2_fyixgf.jpg",                                                      desc:"🏞️ Imperial Valley (Unisex)\n\nBalanced and refined, Imperial Valley offers a fresh woody scent with a touch of sweetness for everyday elegance.",                                type:"Fresh, Woody, Slightly Sweet", bestFor:"All Occasions", longevity:"15–18 Hours", featured:true, bestseller:true },
  { id:26, name:"Ralf",               cat:"Unisex", img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350435/Ralf_fca1c11c-59ee-4d7f-92f3-6bbf91336ff9_PhotoGrid-ezremove_gw5pm7.png",           desc:"💎 Ralf (Unisex)\n\nClean and modern, Ralf offers a smooth and refreshing scent perfect for everyday elegance.",                                                                  type:"Fresh, Clean",           bestFor:"Office",         longevity:"15–18 Hours"                                  },
  { id:27, name:"Joop Jump",          cat:"Unisex", img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350425/Joop_Jump_393b00bc-bfc0-4068-9eff-d5cdc9052cd0_PhotoGrid-ezremove_ovr1jv.png",      desc:"🌿 Joop Jump (Unisex)\n\nEnergetic and vibrant, Joop Jump mixes citrus freshness with sweetness for a lively scent.",                                                             type:"Fresh, Sweet",           bestFor:"Casual",         longevity:"15–18 Hours"                                  },
  { id:28, name:"Creed Aventus",      cat:"Unisex", img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350427/Creed_Aventus_10cd0874-14e0-4ba0-95e7-f159affcc48e_PhotoGrid-ezremove_xfofbr.png",  desc:"👑 Creed Aventus (Unisex)\n\nA powerful mix of fruity freshness and smoky woods, Creed Aventus is a true signature scent.",                                                      type:"Fruity, Woody, Smoky",   bestFor:"Events",         longevity:"15–18 Hours", bestseller:true                 },
  { id:29, name:"Don't Be Shy",       cat:"Unisex", img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350431/Don_t_be_shy_2_rfmwkp.png",                                                         desc:"🍬 Don't Be Shy (Unisex)\n\nSweet and playful, Don't Be Shy blends vanilla and floral notes.",                                                                                    type:"Sweet, Vanilla",         bestFor:"Casual",         longevity:"15–18 Hours"                                  },
  { id:30, name:"Cool Water",         cat:"Unisex", img:"https://res.cloudinary.com/digbzxwkn/image/upload/v1774350422/Cool_Water_2_ofs4xg.png",                                                           desc:"🌊 Cool Water (Unisex)\n\nRefreshing and aquatic, Cool Water delivers a cool, clean scent perfect for everyday freshness.",                                                        type:"Fresh, Aquatic",         bestFor:"Summer, Daily",  longevity:"15–18 Hours"                                  },
];

// ═══ STATE ═══
let cart = [];
let currentProduct = null;
let currentModalSize = { size: '50ml', price: 3500 };

// ═══════════════════════════════════════════════
// PAGE NAVIGATION
// ═══════════════════════════════════════════════
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (page === 'shop') renderShopGrid(ALL_PRODUCTS);
}

function scrollToBestsellers() {
  showPage('home');
  setTimeout(() => {
    const el = document.getElementById('bestsellers');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

// ═══════════════════════════════════════════════
// MOBILE MENU
// ═══════════════════════════════════════════════
let mobileOpen = false;

function toggleMobile() {
  mobileOpen = !mobileOpen;
  document.getElementById('hamburger').classList.toggle('open', mobileOpen);
  const m = document.getElementById('mobile-menu');
  m.style.display = mobileOpen ? 'block' : 'none';
}

// ═══════════════════════════════════════════════
// NAVBAR SCROLL SHADOW
// ═══════════════════════════════════════════════
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// ═══════════════════════════════════════════════
// PRODUCT CARD BUILDER
// ═══════════════════════════════════════════════
function buildCard(p) {
  return `
    <div class="product-card" onclick="openProduct(${p.id})">
      <div class="product-card-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        ${p.bestseller ? '<div class="product-badge">Best Seller</div>' : ''}
      </div>
      <div class="product-card-body">
        <div class="product-card-cat">${p.cat}</div>
        <div class="product-card-name">${p.name}</div>
        <div class="product-card-price">From <strong>Rs. 2,200</strong> · Rs. 3,500</div>
        <div class="size-selector">
          <button class="size-btn selected" onclick="event.stopPropagation();selectCardSize(this,'50ml',3500,${p.id})">50ml</button>
          <button class="size-btn" onclick="event.stopPropagation();selectCardSize(this,'30ml',2200,${p.id})">30ml</button>
        </div>
        <button class="add-cart-btn" onclick="event.stopPropagation();addToCartFromCard(${p.id},this)">Add to Cart</button>
      </div>
    </div>`;
}

// ═══════════════════════════════════════════════
// RENDER GRIDS
// ═══════════════════════════════════════════════
function renderFeatured() {
  const featured = ALL_PRODUCTS.filter(p => p.featured).slice(0, 8);
  document.getElementById('featured-grid').innerHTML = featured.map(p => buildCard(p)).join('');
}

function renderBestsellers() {
  const bs = ALL_PRODUCTS.filter(p => p.bestseller);
  document.getElementById('bestsellers-grid').innerHTML = bs.map(p => buildCard(p)).join('');
}

function renderShopGrid(products) {
  document.getElementById('shop-grid').innerHTML = products.length
    ? products.map(p => buildCard(p)).join('')
    : '<p style="color:var(--gray);grid-column:1/-1;">No products found.</p>';
}

// ═══════════════════════════════════════════════
// SHOP FILTER
// ═══════════════════════════════════════════════
function filterByCategory(cat, el) {
  document.querySelectorAll('.shop-filter-btn').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  const filtered = cat === 'All' ? ALL_PRODUCTS : ALL_PRODUCTS.filter(p => p.cat === cat);
  renderShopGrid(filtered);
}

// ═══════════════════════════════════════════════
// CARD SIZE SELECTION
// ═══════════════════════════════════════════════
const cardSizes = {};

function selectCardSize(btn, size, price, id) {
  const card = btn.closest('.product-card-body');
  card.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  cardSizes[id] = { size, price };
}

function addToCartFromCard(id, btn) {
  const p = ALL_PRODUCTS.find(x => x.id === id);
  const sizeInfo = cardSizes[id] || { size: '50ml', price: 3500 };
  addToCart(p, sizeInfo.size, sizeInfo.price);
}

// ═══════════════════════════════════════════════
// PRODUCT MODAL
// ═══════════════════════════════════════════════
function openProduct(id) {
  const p = ALL_PRODUCTS.find(x => x.id === id);
  currentProduct = p;
  currentModalSize = { size: '50ml', price: 3500 };

  document.getElementById('modal-img').src     = p.img;
  document.getElementById('modal-img').alt     = p.name;
  document.getElementById('modal-cat').textContent  = p.cat;
  document.getElementById('modal-name').textContent = p.name;
  document.getElementById('modal-desc').textContent = p.desc;
  document.getElementById('modal-tags').innerHTML =
    `<span class="modal-tag">🌸 ${p.type}</span><span class="modal-tag">⏰ ${p.longevity}</span><span class="modal-tag">✨ ${p.bestFor}</span>`;
  document.getElementById('modal-price').textContent = 'Rs. 2,200 (30ml) · Rs. 3,500 (50ml)';
  document.querySelectorAll('.modal-size-btn').forEach((b, i) => b.classList.toggle('sel', i === 0));

  openModal('product-modal');
}

function selectModalSize(btn) {
  document.querySelectorAll('.modal-size-btn').forEach(b => b.classList.remove('sel'));
  btn.classList.add('sel');
  currentModalSize = { size: btn.dataset.size, price: parseInt(btn.dataset.price) };
}

function addModalToCart() {
  if (!currentProduct) return;
  addToCart(currentProduct, currentModalSize.size, currentModalSize.price);
  closeModal('product-modal');
}

function closeProductModal(e) {
  if (e.target === e.currentTarget) closeModal(e.currentTarget.id);
}

// ═══════════════════════════════════════════════
// MODAL HELPERS
// ═══════════════════════════════════════════════
function openModal(id) {
  document.getElementById(id).classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// ═══════════════════════════════════════════════
// CART FUNCTIONS
// ═══════════════════════════════════════════════
function addToCart(product, size, price) {
  const key = `${product.id}-${size}`;
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ key, id: product.id, name: product.name, img: product.img, size, price, qty: 1 });
  }
  updateCartUI();
  showNotif(`✓ ${product.name} (${size}) added to cart`);
}

function removeFromCart(key) {
  cart = cart.filter(i => i.key !== key);
  updateCartUI();
}

function updateQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(key);
  else updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cart-count').textContent = count;
  document.getElementById('cart-total').textContent = total.toLocaleString();

  const container = document.getElementById('cart-items-container');
  if (cart.length === 0) {
    container.innerHTML = '<div class="cart-empty">Your cart is empty.<br>Add some fragrances!</div>';
  } else {
    container.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img class="cart-item-img" src="${item.img}" alt="${item.name}">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-size">${item.size}</div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="updateQty('${item.key}',-1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateQty('${item.key}',1)">+</button>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;">
          <span class="cart-item-price">Rs. ${(item.price * item.qty).toLocaleString()}</span>
          <button class="cart-remove" onclick="removeFromCart('${item.key}')">🗑</button>
        </div>
      </div>`).join('');
  }
}

function toggleCart() {
  const sidebar  = document.getElementById('cart-sidebar');
  const overlay  = document.getElementById('cart-overlay');
  const isOpen   = sidebar.classList.contains('open');
  sidebar.classList.toggle('open', !isOpen);
  overlay.classList.toggle('open', !isOpen);
}

// ═══════════════════════════════════════════════
// WHATSAPP ORDER
// ═══════════════════════════════════════════════
function sendCartViaWhatsApp() {
  if (cart.length === 0) { showNotif('Your cart is empty!'); return; }
  const orderLines = cart.map(i => `• ${i.name} (${i.size}) x${i.qty} = Rs. ${(i.price * i.qty).toLocaleString()}`).join('\n');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const msg = `🛒 *New Order from YOMI Website*\n\n${orderLines}\n\n*Total: Rs. ${total.toLocaleString()}*\n\nPlease confirm my order!`;
  window.open(`https://wa.me/923170799929?text=${encodeURIComponent(msg)}`, '_blank');
}

// ═══════════════════════════════════════════════
// CHECKOUT MODAL
// ═══════════════════════════════════════════════
function openCheckout() {
  if (cart.length === 0) { showNotif('Your cart is empty!'); return; }
  const orderLines = cart.map(i => `${i.name} (${i.size}) x${i.qty}`).join('<br>');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('checkout-order-list').innerHTML = orderLines;
  document.getElementById('checkout-order-total').innerHTML = `<strong>Total: Rs. ${total.toLocaleString()}</strong>`;
  document.getElementById('checkout-modal').classList.add('open');
}

function closeCheckout() {
  document.getElementById('checkout-modal').classList.remove('open');
}

function placeOrder() {
  const name    = document.getElementById('o-name').value.trim();
  const phone   = document.getElementById('o-phone').value.trim();
  const phone2  = document.getElementById('o-phone2').value.trim();
  const email   = document.getElementById('o-email').value.trim();
  const address = document.getElementById('o-address').value.trim();

  if (!name || !phone || !email || !address) {
    showNotif('Please fill all required fields.');
    return;
  }

  const order = cart.map(i => `${i.name} (${i.size}) x${i.qty}`).join(', ');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const btn = document.querySelector('.checkout-place-btn');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  emailjs.send("service_bqn3nkk", "template_0urzrix", {
    name, phone, phone2, email, address, order,
    total: `Rs. ${total.toLocaleString()}`
  }).then(() => {
    showNotif('✓ Order placed successfully! We will contact you soon.', 'success');
    cart = [];
    updateCartUI();
    closeCheckout();
    toggleCart();
    ['o-name','o-phone','o-phone2','o-email','o-address'].forEach(id => {
      document.getElementById(id).value = '';
    });
    btn.textContent = '✓ Place Order';
    btn.disabled = false;
  }).catch(() => {
    showNotif('Error sending order. Please try via WhatsApp.');
    btn.textContent = '✓ Place Order';
    btn.disabled = false;
  });
}

// ═══════════════════════════════════════════════
// CONTACT FORM
// ═══════════════════════════════════════════════
function sendContactForm() {
  const name  = document.getElementById('c-name').value.trim();
  const email = document.getElementById('c-email').value.trim();
  const msg   = document.getElementById('c-msg').value.trim();

  if (!name || !email || !msg) {
    showNotif('Please fill all fields.');
    return;
  }

  emailjs.send("service_bqn3nkk", "template_0urzrix", {
    name, email, message: msg,
    order: 'Contact Form', total: 'N/A',
    phone: 'N/A', phone2: 'N/A', address: 'N/A'
  }).then(() => {
    showNotif("✓ Message sent! We'll reply soon.", 'success');
    document.getElementById('c-name').value  = '';
    document.getElementById('c-email').value = '';
    document.getElementById('c-msg').value   = '';
  }).catch(() => {
    showNotif('Error sending message. Please try via WhatsApp.');
  });
}

// ═══════════════════════════════════════════════
// NOTIFICATIONS
// ═══════════════════════════════════════════════
function showNotif(text, type = '') {
  const notif = document.getElementById('notif');
  const el = document.createElement('div');
  el.className = 'notif-item' + (type ? ' ' + type : '');
  el.textContent = text;
  notif.appendChild(el);
  setTimeout(() => el.remove(), 3500);
}

// ═══════════════════════════════════════════════
// INIT — runs after DOM is ready
// ═══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  renderBestsellers();
});

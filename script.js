(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  // Images: Unsplash photo id + optional focal-point crop. Client ki photos aane par yahan path change kar dena.
  const CROPS = [[.5, .3, 1.7], [.25, .6, 1.9], [.75, .55, 1.8], [.5, .8, 2.1]];
  const IMG = (id, w = 600, fp) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70` +
    (fp ? `&crop=focalpoint&fp-x=${fp[0]}&fp-y=${fp[1]}&fp-z=${fp[2]}` : '');

  /* ---------- MEGA MENU CONTENT (yahin se edit karo) ----------
     product = [name, image id, [ [style name, image id], ... ]]
     Style me image id nahi di to product photo ka alag crop dikhta hai.
     Style ki image load na ho to bhi crop par fallback ho jata hai. */
  const MENU = {
    tops: { title: 'Tops', heading: 'Apparel: Tops', items: [
      ['T-Shirts', 'photo-1503342217505-b0a15ec3261c', [['Round Neck', 'photo-1521572163474-6864f9cf17ab'], ['Oversized', 'photo-1583743814966-8936f5b7be1a'], ['Graphic Prints'], ['Full Sleeve', 'photo-1618354691373-d851c5c3a990']]],
      ['Polo Shirts', 'photo-1489987707025-afc232f7ea0f', [['Classic Polo', 'photo-1576566588028-4147f3842f27'], ['Striped Polo'], ['Zip Polo'], ['Long Sleeve']]],
      ['Jackets', 'photo-1591047139829-d91aecb6caea', [['Bomber'], ['Denim Jackets'], ['Leather', 'photo-1551028719-00167b16eac5'], ['Puffer']]],
      ['Overcoats', 'photo-1544022613-e87ca75a784a', [['Wool Overcoat'], ['Trench Coat'], ['Peacoat'], ['Long Coat']]]
    ]},
    bottoms: { title: 'Bottoms', heading: 'Apparel: Bottoms', items: [
      ['Denim', 'photo-1542272604-787c3835535d', [['Slim Fit', 'photo-1541099649105-f69ad21f3246'], ['Straight Fit'], ['Tapered'], ['Distressed', 'photo-1604176354204-9268737828e4']]],
      ['Trousers', 'photo-1473966968600-fa801b869a1a', [['Formal'], ['Pleated'], ['Slim Fit'], ['Cargo']]],
      ['Chinos', 'photo-1560243563-062bfc001d68', [['Slim Fit'], ['Regular Fit'], ['Stretch'], ['Pleated']]],
      ['Joggers', 'photo-1556905055-8f358a7a47b2', [['Cotton'], ['Cargo Joggers'], ['Track Pants'], ['Fleece']]]
    ]},
    tailoring: { title: 'Tailoring', heading: 'Tailoring and occasion wear', items: [
      ['Suits', 'photo-1507679799987-c73779587ccf', [['Two Piece', 'photo-1593030761757-71fae45fa0e7'], ['Three Piece'], ['Wedding Suits'], ['Slim Fit']]],
      ['Blazers', 'photo-1594938298603-c8148c4dae35', [['Casual Blazers'], ['Formal Blazers'], ['Velvet'], ['Checked']]],
      ['Formal Shirts', 'photo-1602810318383-e386cc2a3ccf', [['Solid', 'photo-1596755094514-f87e34085b2c'], ['Striped'], ['Checked'], ['Linen']]],
      ['Tuxedos', 'photo-1617137968427-85924c800a22', [['Classic Black'], ['Midnight Blue'], ['Shawl Collar'], ['Wedding']]]
    ]}
  };

  const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  window.ABHI = { MENU, IMG, slug };
  const mega = $('#mega');
  const menu = $('#menu');
  const body = document.body;
  let openKey = null, ptr = 'mouse', activeLi = null, si = 0, timer = null;

  document.addEventListener('pointerdown', e => { ptr = e.pointerType; }, true);

  /* ---------- render one category into the panel ---------- */
  function render(key) {
    const m = MENU[key];
    mega.innerHTML = `
      <div class="mega-tabs">${Object.entries(MENU).map(([k, v]) =>
        `<button type="button" data-menu="${k}" class="${k === key ? 'on' : ''}">${v.title}</button>`).join('')}</div>
      <div class="mega-body">
        <div class="mega-list">
          <h4>${m.heading}</h4>
          <ul>${m.items.map(([name, img, styles]) => `
            <li>
              <button class="prod" type="button" aria-expanded="false"><span class="pn"><b>${name}</b><small>${styles.length} styles</small></span></button>
              <div class="sub">
                <div class="sub-c">
                <h3>${name}</h3>
                <ul>${styles.map(([l, id], i) => `<li><a href="products.html#${slug(name)}" data-i="${i}"${id ? ` data-img="${id}"` : ''}>${l}</a></li>`).join('')}</ul>
                <a class="all" href="products.html#${slug(name)}">View all ${name.toLowerCase()}</a>
                </div>
                <div class="sub-img" data-img="${img}"><img alt=""><img alt=""><span class="cap"></span></div>
              </div>
            </li>`).join('')}
          </ul>
          <a class="all-cat" href="products.html">View all ${m.title.toLowerCase()}</a>
        </div>
        <div class="mega-slider" aria-hidden="true">
          ${m.items.map(([name, img], i) => `<div class="slide${i ? '' : ' on'}"><img src="${IMG(img, 900)}" alt=""><b>${name}</b></div>`).join('')}
          <div class="dots">${m.items.map((_, i) => `<i class="${i ? '' : 'on'}"></i>`).join('')}</div>
        </div>
      </div>`;
    activeLi = null;
  }

  /* ---------- fade slider (shows until a product is hovered) ---------- */
  function stopSlider() { clearInterval(timer); timer = null; }
  function startSlider() {
    stopSlider();
    si = 0;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer = setInterval(() => {
      const slides = $$('.slide', mega);
      if (!slides.length) return stopSlider();
      si = (si + 1) % slides.length;
      slides.forEach((s, k) => s.classList.toggle('on', k === si));
      $$('.dots i', mega).forEach((d, k) => d.classList.toggle('on', k === si));
    }, 3500);
  }

  /* ---------- image crossfade inside a product box (falls back to the next url if one fails) ---------- */
  function show(box, urls) {
    if (box.dataset.cur === urls[0]) return;
    box.dataset.cur = urls[0];
    const t = box._t = (box._t || 0) + 1;
    const imgs = $$('img', box);
    let k = 0;
    const next = () => {
      if (t !== box._t || k >= urls.length) return;
      const u = urls[k++], probe = new Image();
      probe.onerror = next;
      probe.onload = () => {
        if (t !== box._t) return;
        const cur = imgs.find(i => i.classList.contains('on'));
        const nxt = imgs.find(i => i !== cur);
        nxt.src = u;
        nxt.classList.add('on');
        if (cur) cur.classList.remove('on');
      };
      probe.src = u;
    };
    next();
  }

  /* style link hovered / tapped: show that style's image */
  function pick(a) {
    const sub = a.closest('.sub'), box = $('.sub-img', sub), cap = $('.cap', box);
    $$('ul a', sub).forEach(x => x.classList.toggle('on', x === a));
    const urls = [];
    if (a.dataset.img) urls.push(IMG(a.dataset.img, 700));
    urls.push(IMG(box.dataset.img, 700, CROPS[+a.dataset.i % CROPS.length]));
    show(box, urls);
    cap.textContent = a.textContent;
    cap.classList.add('on');
  }
  function resetSub(li) {
    const sub = $('.sub', li), box = $('.sub-img', sub);
    $$('ul a', sub).forEach(x => x.classList.remove('on'));
    $('.cap', box).classList.remove('on');
    show(box, [IMG(box.dataset.img, 700)]);
  }

  /* ---------- open / close ---------- */
  function syncTriggers() {
    $$('.site-header [data-menu]').forEach(b => {
      const on = b.dataset.menu === 'shop' ? !!openKey : b.dataset.menu === openKey;
      b.classList.toggle('on', on);
      b.setAttribute('aria-expanded', on);
    });
  }
  function openMega(key) {
    if (openKey === key && mega.classList.contains('open')) return;
    render(key);
    openKey = key;
    mega.classList.add('open');
    startSlider();
    syncTriggers();
  }
  function closeMega() {
    openKey = null;
    mega.classList.remove('open');
    stopSlider();
    setActive(null);
    syncTriggers();
  }

  /* ---------- active product (right box with its styles) ---------- */
  function setActive(li) {
    $$('.mega-list>ul>li', mega).forEach(x => {
      const on = x === li;
      x.classList.toggle('active', on);
      $('.prod', x).setAttribute('aria-expanded', on);
    });
    const b = $('.mega-body', mega);
    if (b) b.classList.toggle('has-active', !!li);
    if (li && li !== activeLi) resetSub(li);
    activeLi = li;
  }
  // mouse: hover shows the product (it stays while the pointer is over the right box too)
  mega.addEventListener('pointerover', e => {
    if (e.pointerType !== 'mouse') return;
    const a = e.target.closest('.sub ul a');
    if (a) pick(a);
    const li = e.target.closest('.mega-list>ul>li');
    if (li) setActive(li);
  });
  mega.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') setActive(null); });
  mega.addEventListener('focusin', e => {
    const p = e.target.closest('.prod');
    if (p && p.matches(':focus-visible')) setActive(p.parentElement);
    const a = e.target.closest('.sub ul a');
    if (a && a.matches(':focus-visible')) pick(a);
  });
  mega.addEventListener('error', e => { if (e.target.tagName === 'IMG') e.target.style.display = 'none'; }, true);

  /* ---------- clicks ---------- */
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-menu]');
    if (t) {
      const k = t.dataset.menu;
      if (k === 'shop') openKey ? closeMega() : openMega('tops');
      else if (t.closest('.mega-tabs')) openMega(k);
      else if (ptr === 'mouse' && e.detail) openMega(k);   // mouse: hover has already opened it
      else if (openKey !== k) openMega(k);
      else closeMega();
      return;
    }
    const p = e.target.closest('.prod');
    if (p) {   // touch / keyboard: tap a product to open or close its styles
      if (ptr === 'mouse' && e.detail) return;
      const li = p.parentElement;
      setActive(li.classList.contains('active') ? null : li);
      return;
    }
    const a = e.target.closest('.sub ul a');
    if (a && ptr !== 'mouse' && e.detail && !a.classList.contains('on')) {   // touch: pehle tap pe image, doosre tap pe link
      e.preventDefault();
      return pick(a);
    }
    if (e.target.closest('.mega a')) return closeMega();
    if (openKey && !e.target.closest('.mega')) closeMega();
  });

  /* ---------- desktop: opens on mouse hover, closes when the mouse leaves ---------- */
  const header = $('.site-header');
  let closeT;
  const keep = () => clearTimeout(closeT);
  const later = () => { keep(); closeT = setTimeout(closeMega, 220); };
  header.addEventListener('pointerover', e => {
    if (e.pointerType !== 'mouse' || menu.classList.contains('open')) return;
    const t = e.target.closest('[data-menu]');
    if (e.target.closest('.mega') || (t && t.dataset.menu === 'shop')) keep();
    else if (t) { keep(); openMega(t.dataset.menu); }
    else later();
  });
  header.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') later(); });

  /* ---------- fullscreen menu (phone / tablet) ---------- */
  function setMenu(open) {
    if (open) {
      $$('.thumb img', menu).forEach(i => { if (!i.getAttribute('src')) i.src = IMG(i.dataset.img, 300); });
      closeMega();
    }
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', !open);
    body.classList.toggle('lock', open);
    $$('.menu-btn').forEach(b => b.setAttribute('aria-expanded', open));
    if (open) $('.menu-x').focus({ preventScroll: true });
  }
  $$('.menu-btn').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); setMenu(true); }));
  $('.menu-x').addEventListener('click', () => setMenu(false));
  $$('a', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (menu.classList.contains('open')) setMenu(false); else closeMega();
  });
})();

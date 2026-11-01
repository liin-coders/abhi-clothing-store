(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const WA = '918146035145';
  const IMG = (id, w = 700, fp) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70` +
    (fp ? `&crop=focalpoint&fp-x=${fp[0]}&fp-y=${fp[1]}&fp-z=${fp[2]}` : '');
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const inr = n => '₹' + n.toLocaleString('en-IN');
  const hook = { open() { }, close() { } };

  /* ================= product card (home + products page) ================= */
  const card = (name, price, mrp, sizes, front, back, crop) => {
    const off = Math.round((mrp - price) / mrp * 100);
    const msg = encodeURIComponent(`Hi Abhi Clothing Store, I want to enquire about ${name} (${inr(price)}).`);
    return `<article class="pcard">
      <div class="pimg" data-f="${front}" data-b="${back}" data-fb="${crop}" role="button" tabindex="0" aria-label="View ${name} photos">
        <span class="badge">${off}% off</span>
        <img src="${front}" alt="${name} front" loading="lazy">
        <img src="${back}" alt="${name} back" loading="lazy" onerror="this.onerror=null;this.src='${crop}'">
      </div>
      <div class="pinfo">
        <h3>${name}</h3>
        <div class="price"><b>${inr(price)}</b><s>${inr(mrp)}</s></div>
        <div class="sizes">${sizes.split(' ').map(s => `<span>${s}</span>`).join('')}</div>
        <a class="btn btn-dark" href="https://wa.me/${WA}?text=${msg}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="${WA_PATH()}"/></svg>WhatsApp enquiry</a>
      </div>
    </article>`;
  };
  window.ABHI.card = card;

  /* ================= lightbox: front + back ================= */
  const lb = $('#lb'), lbi = $('.lb-img', lb), lbt = $('.lb-th', lb);
  const showLb = k => {
    lbi.src = lbi.dataset[k === 0 ? 'f' : 'b'];
    $$('button', lbt).forEach((b, i) => b.classList.toggle('on', i === k));
  };
  const openLb = box => {
    lbi.dataset.f = box.dataset.f;
    lbi.dataset.b = box.dataset.b;
    lbi.onerror = () => { lbi.onerror = null; lbi.src = box.dataset.fb; };
    lbt.innerHTML = ['f', 'b'].map((k, i) => `<button type="button" aria-label="${i ? 'Back' : 'Front'} view"><img src="${box.dataset[k]}" alt=""></button>`).join('');
    $$('button', lbt).forEach((b, i) => b.onclick = () => showLb(i));
    showLb(0);
    lb.classList.add('open');
    hook.open();
  };
  const closeLb = () => { lb.classList.remove('open'); hook.close(); };
  document.addEventListener('click', e => { const b = e.target.closest('.pimg'); if (b) openLb(b); });
  document.addEventListener('keydown', e => {
    const b = e.target.closest && e.target.closest('.pimg');
    if (b && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openLb(b); }
    if (e.key === 'Escape' && lb.classList.contains('open')) closeLb();
  });
  lb.addEventListener('click', e => { if (e.target === lb || e.target.closest('.lb-x')) closeLb(); });

  /* ================= 01 HERO SLIDER (home only) ================= */
  const hero = $('.hero');
  if (hero) {
    const slides = $$('.h-slide', hero), dots = $$('.h-dots button', hero);
    let hi = 0, ht, lock = false;
    const goH = i => {
      hi = (i + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle('on', k === hi));
      dots.forEach((d, k) => d.classList.toggle('on', k === hi));
    };
    const stopH = () => clearInterval(ht);
    const playH = () => { stopH(); if (!still) ht = setInterval(() => goH(hi + 1), 5500); };
    $('.h-prev', hero).onclick = () => { goH(hi - 1); playH(); };
    $('.h-next', hero).onclick = () => { goH(hi + 1); playH(); };
    dots.forEach((d, k) => d.onclick = () => { goH(k); playH(); });
    hero.addEventListener('mouseenter', stopH);
    hero.addEventListener('mouseleave', playH);
    hero.addEventListener('wheel', e => {   // trackpad: two-finger swipe left / right
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY) || Math.abs(e.deltaX) < 25) return;
      e.preventDefault();
      if (lock) return;
      lock = true;
      goH(hi + (e.deltaX > 0 ? 1 : -1));
      playH();
      setTimeout(() => lock = false, 900);
    }, { passive: false });
    let x0 = 0;
    hero.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
    hero.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) { goH(hi + (dx < 0 ? 1 : -1)); playH(); }
    });
    playH();
  }

  /* ================= 02 LATEST ARRIVALS (home only) ================= */
  // [name, price, mrp, sizes, front image id, back image id (optional)]
  const P = [
    ['Classic Round Neck Tee', 499, 799, 'S M L XL', 'photo-1503342217505-b0a15ec3261c', 'photo-1521572163474-6864f9cf17ab'],
    ['Pique Polo Shirt', 799, 1299, 'S M L XL XXL', 'photo-1489987707025-afc232f7ea0f', 'photo-1576566588028-4147f3842f27'],
    ['Urban Bomber Jacket', 2199, 3499, 'M L XL', 'photo-1591047139829-d91aecb6caea', 'photo-1551028719-00167b16eac5'],
    ['Wool Blend Overcoat', 4499, 6999, 'M L XL', 'photo-1544022613-e87ca75a784a'],
    ['Slim Fit Denim', 1299, 1999, '30 32 34 36', 'photo-1542272604-787c3835535d', 'photo-1541099649105-f69ad21f3246'],
    ['Stretch Chinos', 999, 1599, '30 32 34 36', 'photo-1560243563-062bfc001d68'],
    ['Two Piece Suit', 5999, 8999, '38 40 42 44', 'photo-1507679799987-c73779587ccf', 'photo-1593030761757-71fae45fa0e7'],
    ['Navy Blazer', 3499, 5499, '38 40 42 44', 'photo-1594938298603-c8148c4dae35', 'photo-1617137968427-85924c800a22']
  ];
  const BACK_CROP = [.5, .8, 2];
  const sec = $('#arrivals');
  if (sec) {
    const track = $('.track', sec);
    track.innerHTML = P.map(([name, price, mrp, sizes, f, b]) =>
      card(name, price, mrp, sizes, IMG(f), b ? IMG(b) : IMG(f, 700, BACK_CROP), IMG(f, 700, BACK_CROP))).join('');
    const w = () => track.children[0].offsetWidth + 20;
    const step = () => {
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 4) track.scrollTo({ left: 0, behavior: 'smooth' });
      else track.scrollBy({ left: w(), behavior: 'smooth' });
    };
    let at;
    const stopA = () => clearInterval(at);
    const playA = () => { stopA(); if (!still) at = setInterval(step, 4000); };
    ['mouseenter', 'touchstart', 'focusin'].forEach(ev => sec.addEventListener(ev, stopA, { passive: true }));
    ['mouseleave', 'touchend', 'focusout'].forEach(ev => sec.addEventListener(ev, playA, { passive: true }));
    $('.s-prev', sec).onclick = () => track.scrollBy({ left: -w(), behavior: 'smooth' });
    $('.s-next', sec).onclick = () => track.scrollBy({ left: w(), behavior: 'smooth' });
    hook.open = stopA;
    hook.close = playA;
    playA();
  }

  function WA_PATH() {
    return 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z';
  }
})();

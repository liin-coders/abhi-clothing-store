(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const { MENU, IMG, card, slug } = window.ABHI;
  const WA = '918146035145';
  const inr = n => '₹' + n.toLocaleString('en-IN');

  /* ================= 03 CATALOG (12 categories x 12 products) ================= */
  const META = { // base price, sizes, singular name
    'T-Shirts': [499, 'S M L XL', 'T-Shirt'],
     'Polo Shirts': [799, 'S M L XL XXL', 'Polo Shirt'],
    'Jackets': [2199, 'M L XL', 'Jacket'], 
    'Overcoats': [4499, 'M L XL', 'Overcoat'],
    // 'Denim': [1299, '30 32 34 36', 'Denim Jeans'], 
    // 'Trousers': [1199, '30 32 34 36', 'Trouser'],
    // 'Chinos': [999, '30 32 34 36', 'Chino'],
    //  'Joggers': [799, 'S M L XL', 'Jogger'],
    // 'Suits': [5999, '38 40 42 44', 'Suit'],
    //  'Blazers': [3499, '38 40 42 44', 'Blazer'],
    // 'Formal Shirts': [999, 'S M L XL', 'Formal Shirt'], 
    // 'Tuxedos': [6999, '38 40 42 44', 'Tuxedo']
  };
  const MOD = ['Classic', 'Essential', 'Signature', 'Heritage', 'Urban', 'Premium', 'Everyday', 'Modern', 'Relaxed', 'Tailored', 'Slim Fit', 'Studio'];
  const M = [.85, 1, 1.1, .95, 1.2, .9, 1.05, 1.15, .8, 1.25, 1, 1.1];
  const D = [22, 30, 35, 25, 40, 28, 33, 45, 20, 38, 26, 32];
  const CR = [[.5, .3, 1.2], [.3, .5, 1.4], [.7, .4, 1.3], [.5, .7, 1.5], [.4, .3, 1.6], [.6, .6, 1.3], [.5, .5, 1.1], [.3, .7, 1.5], [.7, .7, 1.4], [.5, .2, 1.5], [.2, .4, 1.3], [.8, .5, 1.2]];
  const CATS = [], ALL = [];
  Object.values(MENU).forEach(g => g.items.forEach(([name, img, styles]) => {
    const [base, sizes, noun] = META[name], s = slug(name);
    const pool = [img, ...styles.map(x => x[1]).filter(Boolean)];
    CATS.push({ name, s });
    MOD.forEach((m, i) => {
      const price = Math.round(base * M[i] / 10) * 10 - 1;
      const mrp = Math.round(price / (1 - D[i] / 100) / 10) * 10 - 1;
      ALL.push({
        s, cat: name, name: `${m} ${noun}`, price, mrp, sizes,
        f: IMG(pool[i % pool.length], 700, CR[i]),
        b: IMG(pool[(i + 1) % pool.length], 700, CR[(i + 5) % 12]),
        fb: IMG(img, 700, CR[(i + 5) % 12])
      });
    });
  }));

  const shop = $('#shop'), tools = $('#tools');
  const top = Math.ceil(Math.max(...ALL.map(p => p.price)) / 500) * 500;
  const cardOf = p => card(p.name, p.price, p.mrp, p.sizes, p.f, p.b, p.fb);

  if (shop && !tools) {
    // home page: 4 products per category + View all button (opens the catalog page)
    shop.innerHTML = CATS.map(c => `<div class="cat" id="p-${c.s}">
      <div class="cat-h"><h3>${c.name} <span>Collection</span></h3><a class="btn btn-out sm" href="products.html#${c.s}">View all ${c.name.toLowerCase()}</a></div>
      <div class="grid">${ALL.filter(p => p.s === c.s).slice(0, 4).map(cardOf).join('')}</div></div>`).join('');
  }

  if (shop && tools) {
    // catalog page: search, category, size, sort and price range
    const q = $('#q'), fc = $('#fc'), fs = $('#fs'), so = $('#so'), pr = $('#pr'), pv = $('#pv'), cnt = $('#cnt');
    pr.max = top;
    pr.value = top;
    fc.innerHTML = '<option value="">All categories</option>' + CATS.map(c => `<option value="${c.s}">${c.name}</option>`).join('');
    const SZ = ['S', 'M', 'L', 'XL', 'XXL', '30', '32', '34', '36', '38', '40', '42', '44'];
    fs.innerHTML = '<option value="">All sizes</option>' + SZ.map(z => `<option>${z}</option>`).join('');
    const SORT = {
      pa: (a, b) => a.price - b.price, pd: (a, b) => b.price - a.price,
      d: (a, b) => (b.mrp - b.price) / b.mrp - (a.mrp - a.price) / a.mrp, n: (a, b) => a.name.localeCompare(b.name)
    };
    const apply = () => {
      pv.textContent = inr(+pr.value);
      const t = q.value.trim().toLowerCase(), c = fc.value, z = fs.value, max = +pr.value;
      let n = 0;
      const html = CATS.map(cat => {
        if (c && c !== cat.s) return '';
        const list = ALL.filter(p => p.s === cat.s && p.price <= max && (!z || p.sizes.split(' ').includes(z)) &&
          (!t || `${p.name} ${p.cat}`.toLowerCase().includes(t)));
        if (!list.length) return '';
        if (SORT[so.value]) list.sort(SORT[so.value]);
        n += list.length;
        return `<div class="cat" id="p-${cat.s}">
          <div class="cat-h"><h3>${cat.name} <span>Collection</span></h3><small>${list.length} products</small></div>
          <div class="grid">${list.map(cardOf).join('')}</div></div>`;
      }).join('');
      shop.innerHTML = html || '<p class="empty">No products match your search. Try a different word or reset the filters.</p>';
      cnt.textContent = `Showing ${n} product${n === 1 ? '' : 's'}`;
    };
    const setHash = v => { try { history.replaceState(null, '', v ? '#' + v : location.pathname + location.search); } catch (e) { } };
    const fromHash = () => { const h = location.hash.slice(1); fc.value = CATS.some(c => c.s === h) ? h : ''; apply(); };
    $('#qb').onclick = apply;
    q.addEventListener('input', apply);
    q.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); apply(); } });
    [fs, so, pr].forEach(el => el.addEventListener('input', apply));
    fc.addEventListener('input', () => { setHash(fc.value); apply(); });
    tools.addEventListener('reset', () => setTimeout(() => { pr.value = top; setHash(''); apply(); }));
    tools.addEventListener('submit', e => e.preventDefault());
    // mega menu / footer links (products.html#t-shirts) pick the category
    window.addEventListener('hashchange', () => { fromHash(); shop.scrollIntoView({ behavior: 'smooth' }); });
    fromHash();
  }

  /* ================= 05 TESTIMONIALS (fade slider) ================= */
  if ($('#reviews')) {
    const tm = $('#reviews');
    const ts = $$('.tm-s', tm), td = $$('.tm-dots button', tm);
    let ti = 0, tt, tlock = false;
    const goT = i => {
      ti = (i + ts.length) % ts.length;
      ts.forEach((s, k) => s.classList.toggle('on', k === ti));
      td.forEach((d, k) => d.classList.toggle('on', k === ti));
    };
    const playT = () => { clearInterval(tt); if (!matchMedia('(prefers-reduced-motion: reduce)').matches) tt = setInterval(() => goT(ti + 1), 6000); };
    $('.tm-prev', tm).onclick = () => { goT(ti - 1); playT(); };
    $('.tm-next', tm).onclick = () => { goT(ti + 1); playT(); };
    td.forEach((d, k) => d.onclick = () => { goT(k); playT(); });
    tm.addEventListener('mouseenter', () => clearInterval(tt));
    tm.addEventListener('mouseleave', playT);
    tm.addEventListener('wheel', e => {   // trackpad swipe
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY) || Math.abs(e.deltaX) < 25) return;
      e.preventDefault();
      if (tlock) return;
      tlock = true; goT(ti + (e.deltaX > 0 ? 1 : -1)); playT();
      setTimeout(() => tlock = false, 800);
    }, { passive: false });
    let tx = 0;
    tm.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
    tm.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) { goT(ti + (dx < 0 ? 1 : -1)); playT(); } });
    playT();

  }

  /* ================= 06 CONTACT: live hours ================= */
  const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const OPEN = 8 * 60, CLOSE = 21 * 60;   // 8:00 AM to 9:00 PM, Indian time
  const HRS = [[$('#hrs'), $('#live')], [$('#fhrs'), $('#flive')]].filter(([l]) => l);
  function clock() {
    const p = Object.fromEntries(new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kolkata', weekday: 'long', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' })
      .formatToParts(new Date()).map(x => [x.type, x.value]));
    const mins = +p.hour * 60 + +p.minute, isOpen = mins >= OPEN && mins < CLOSE;
    HRS.forEach(([list, badge]) => {
      list.className = isOpen ? 'open' : 'closed';
      badge.className = 'live ' + (isOpen ? 'open' : 'closed');
      $('em', badge).textContent = isOpen ? 'Open now' : 'Closed now';
      list.innerHTML = DAYS.map(d => `<li class="${d === p.weekday ? 'today' : ''}"><span>${d}</span><span>8:00 AM – 9:00 PM${d === p.weekday ? '<i class="dot"></i>' : ''}</span></li>`).join('');
    });
  }
  if (HRS.length) { clock(); setInterval(clock, 30000); }

  /* ================= 06 CONTACT: form -> WhatsApp (nothing goes into the page URL) ================= */
  if ($('#cf')) {
    const cf = $('#cf'), note = $('#note');
    const field = n => cf.elements[n];
    cf.addEventListener('submit', e => {
      e.preventDefault();
      const v = n => field(n).value.trim();
      const bad = [];
      if (v('n').length < 2) bad.push(['n', 'Please enter your name.']);
      if (!/^[6-9]\d{9}$/.test(v('p'))) bad.push(['p', 'Please enter a valid 10-digit mobile number.']);
      if (v('e') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v('e'))) bad.push(['e', 'That email does not look right.']);
      if (!v('s')) bad.push(['s', 'Please select what you are looking for.']);
      if (v('m').length < 5) bad.push(['m', 'Please write a short message.']);
      $$('.f', cf).forEach(l => l.classList.remove('bad'));
      if (bad.length) {
        bad.forEach(([n]) => field(n).closest('.f').classList.add('bad'));
        note.className = 'note err';
        note.textContent = bad[0][1];
        field(bad[0][0]).focus();
        return;
      }
      const text = `*New enquiry - Abhi Clothing Store*\nName: ${v('n')}\nPhone: ${v('p')}\n` + (v('e') ? `Email: ${v('e')}\n` : '') + `Looking for: ${v('s')}\nMessage: ${v('m')}`;
      window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
      note.className = 'note ok';
      note.textContent = 'Opening WhatsApp. Press send there to reach us.';
      cf.reset();
    });
    cf.addEventListener('reset', () => { $$('.f', cf).forEach(l => l.classList.remove('bad')); note.textContent = ''; note.className = 'note'; });
    field('p').addEventListener('input', e => { e.target.value = e.target.value.replace(/\D/g, ''); });

  }

  /* ================= 07 FAQ ================= */
  if ($('.faq-q')) {
    const FAQ = [
      ['What are your store timings?', 'We are open every day from 8:00 AM to 9:00 PM. Walk in any time during these hours.'],
      ['Do you offer custom tailoring?', 'Yes. Suits, shirts and trousers can be stitched to your measurements. Visit the store to choose a fabric and get measured.'],
      ['How long does an alteration take?', 'Simple jobs like hemming are usually ready the same or next day. Bigger changes take a few days, and we confirm the date when you drop the item off.'],
      ['Which payment methods do you accept?', 'Cash, UPI and the major debit and credit cards: Visa, Mastercard, RuPay and American Express.'],
      ['Can I exchange a product?', 'Unworn items with tags and the bill can be exchanged for another size or style within 7 days. Tailored and altered items cannot be exchanged.'],
      ['Do you handle wedding and bulk orders?', 'Yes. Share your date and requirements on WhatsApp and we will plan looks for the groom and the wedding party.']
    ];
    const fq = $('.faq-q'), fa = $('.faq-a');
    fq.innerHTML = FAQ.map(([t], i) => `<button type="button" role="tab" aria-selected="${i === 0}" class="${i === 0 ? 'on' : ''}">${t}</button>`).join('');
    const showQ = i => {
      $$('button', fq).forEach((b, k) => { b.classList.toggle('on', k === i); b.setAttribute('aria-selected', k === i); });
      fa.innerHTML = `<p>${FAQ[i][1]}</p>`;
    };
    fq.addEventListener('click', e => { const b = e.target.closest('button'); if (b) showQ($$('button', fq).indexOf(b)); });
    fq.addEventListener('pointerover', e => { if (e.pointerType === 'mouse') { const b = e.target.closest('button'); if (b && !b.classList.contains('on')) showQ($$('button', fq).indexOf(b)); } });
    showQ(0);

  }

  /* ================= 08 FOOTER: privacy / terms ================= */
  const yr = $('#yr');
  if (yr) yr.textContent = new Date().getFullYear();
  const LEGAL = {
    privacy: ['Privacy Policy', 'We collect only the details you share with us, such as your name and phone number, to reply to your enquiry. We do not sell or share them with anyone. You can ask us to delete your details at any time.'],
    terms: ['Terms and Conditions', 'Prices and availability may change without notice. Photos are for reference and colours may vary slightly. Exchanges follow the policy shown in the FAQ. By using this website you agree to these terms.']
  };
  const dlg = $('#legal');
  $$('[data-legal]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    $('h3', dlg).textContent = LEGAL[a.dataset.legal][0];
    $('p', dlg).textContent = LEGAL[a.dataset.legal][1];
    dlg.showModal();
  }));
  dlg.addEventListener('click', e => { if (e.target === dlg || e.target.closest('.dx')) dlg.close(); });
})();

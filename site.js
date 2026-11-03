(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const { MENU, IMG, card, slug } = window.ABHI;
  const WA = '918146035145';
  const inr = n => '₹' + n.toLocaleString('en-IN');

  /* ================= 03 CATALOG (12 categories x 12 products) ================= */
  // products products.js se aate hain (category ki list mega menu se)
  const CATS = [], ALL = [];
  Object.values(MENU).forEach(g => g.items.forEach(([name]) => CATS.push({ name, s: slug(name) })));
  (window.PRODUCTS || []).forEach(p => ALL.push({
    s: slug(p.category), cat: p.category, name: p.name, price: +p.price, mrp: +p.mrp || +p.price,
    sizes: String(p.sizes || '').trim().replace(/\s+/g, ' '), f: p.front, b: p.back || p.front, fb: p.front
  }));

  const shop = $('#shop'), tools = $('#tools');
  const top = Math.ceil(Math.max(...ALL.map(p => p.price)) / 500) * 500;
  const cardOf = p => card(p.name, p.price, p.mrp, p.sizes, p.f, p.b, p.fb);

  if (shop && !tools) {
    // home page: one product box per category (4 per row) + a centred button to the catalog page
    const ORDER = ['T-Shirts', 'Polo Shirts', 'Jackets', 'Overcoats', 'Denim', 'Trousers', 'Chinos', 'Joggers', 'Blazers', 'Formal Shirts', 'Tuxedos', 'Suits'];
    shop.innerHTML = `<div class="grid">${ORDER.map(n => cardOf(ALL.find(p => p.cat === n))).join('')}</div>
      <div class="more"><a class="btn btn-dark" href="products.html">View all products</a></div>`;
  }

  if (shop && tools) {
    // catalog page: search, category, size, sort and price range
    const q = $('#q'), fc = $('#fc'), fs = $('#fs'), so = $('#so'), pr = $('#pr'), pv = $('#pv'), cnt = $('#cnt');
    pr.min = Math.floor(Math.min(...ALL.map(p => p.price)) / 100) * 100;
    pr.max = top;
    pr.value = top;
    fc.innerHTML = '<option value="">All categories</option>' + CATS.map(c => `<option value="${c.s}">${c.name}</option>`).join('');
    const ORD = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
    const SZ = [...new Set(ALL.flatMap(p => p.sizes.split(' ').filter(Boolean)))].sort((a, b) => {
      const x = ORD.indexOf(a), y = ORD.indexOf(b);
      return x >= 0 && y >= 0 ? x - y : x >= 0 ? -1 : y >= 0 ? 1 : (parseFloat(a) || 0) - (parseFloat(b) || 0);
    });
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
    const setHash = v => { try { history.replaceState(null, '', v ? '#' + v : location.pathname + location.search); } catch (e) {} };
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
  // dukaan ka timing / band-khula status settings.js se aata hai
  const S = window.STORE || {};
  const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const HOURS = S.hours || Object.fromEntries(DAYS.map(d => [d, ['08:00', '21:00']]));
  const toMin = t => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
  const fmt = t => { const [h, m] = t.split(':').map(Number); return `${h % 12 || 12}:${String(m).padStart(2, '0')} ${h >= 12 ? 'PM' : 'AM'}`; };
  const esc = x => String(x).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const HRS = [[$('#hrs'), $('#live')], [$('#fhrs'), $('#flive')]].filter(([l]) => l);
  let remote = '';
  function clock() {
    const p = Object.fromEntries(new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kolkata', weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' })
      .formatToParts(new Date()).map(x => [x.type, x.value]));
    const today = HOURS[p.weekday], now = +p.hour * 60 + +p.minute;
    const holiday = (S.holidays || []).includes(`${p.year}-${p.month}-${p.day}`);
    let isOpen = !holiday && !!today && now >= toMin(today[0]) && now < toMin(today[1]);
    const force = S.mode === 'open' || S.mode === 'closed' ? S.mode : remote;   // zabardasti open / closed
    if (force === 'open') isOpen = true;
    if (force === 'closed') isOpen = false;
    HRS.forEach(([list, badge]) => {
      list.className = isOpen ? 'open' : 'closed';
      badge.className = 'live ' + (isOpen ? 'open' : 'closed');
      $('em', badge).textContent = isOpen ? 'Open now' : 'Closed now';
      list.innerHTML = DAYS.map(d => {
        const h = HOURS[d];
        return `<li class="${d === p.weekday ? 'today' : ''}"><span>${d}</span><span>${h ? `${fmt(h[0])} – ${fmt(h[1])}` : 'Closed'}${d === p.weekday ? '<i class="dot"></i>' : ''}</span></li>`;
      }).join('') + (S.note ? `<li class="hnote">${esc(S.note)}</li>` : '');
    });
    const simple = $('#fsimple');   // phone par chhoti timing line
    if (simple) {
      const hs = DAYS.map(d => HOURS[d]);
      const same = hs.every(x => x && x.join() === hs[0].join());
      const txt = same ? `Mon – Sun: ${fmt(hs[0][0])} – ${fmt(hs[0][1])}` : today ? `Today: ${fmt(today[0])} – ${fmt(today[1])}` : 'Closed today';
      simple.className = 'fh-simple ' + (isOpen ? 'open' : 'closed');
      simple.innerHTML = `<span>${txt}</span><i class="dot"></i>` + (S.note ? `<span class="hnote2">${esc(S.note)}</span>` : '');
    }
  }
  if (HRS.length) {
    clock();
    setInterval(clock, 30000);
    if (S.statusUrl) {   // optional: Google Sheet se live status
      const pull = () => fetch(S.statusUrl, { cache: 'no-store' }).then(r => r.text())
        .then(x => { remote = x.replace(/"/g, '').split(/[,\n]/)[0].trim().toLowerCase(); clock(); }).catch(() => {});
      pull();
      setInterval(pull, 300000);
    }
  }

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
  const FAQ = (window.FAQS || {})[document.body.dataset.faq] || [];   // faqs.js se aata hai
  const fq = $('.faq-q'), fa = $('.faq-a');
  fq.innerHTML = FAQ.map(([q, a], i) => `<div class="qi${i === 0 ? ' on' : ''}"><button type="button" role="tab" aria-selected="${i === 0}" class="${i === 0 ? 'on' : ''}">${q}</button><div class="qa"><div><p>${a}</p></div></div></div>`).join('');
  const small = () => matchMedia('(max-width: 900px)').matches;
  const showQ = i => {
    $$('.qi', fq).forEach((x, k) => {
      const b = $('button', x);
      x.classList.toggle('on', k === i);
      b.classList.toggle('on', k === i);
      b.setAttribute('aria-selected', k === i);
    });
    fa.innerHTML = i < 0 ? '' : `<p>${FAQ[i][1]}</p>`;
  };
  fq.addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b) return;
    showQ(small() && b.classList.contains('on') ? -1 : $$('button', fq).indexOf(b));   // phone: tap the open question to close it
  });
  fq.addEventListener('pointerover', e => {
    if (e.pointerType !== 'mouse' || small()) return;
    const b = e.target.closest('button');
    if (b && !b.classList.contains('on')) showQ($$('button', fq).indexOf(b));
  });
  matchMedia('(max-width: 900px)').addEventListener('change', () => { if (!$('.qi.on', fq)) showQ(0); });
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

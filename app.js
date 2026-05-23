// === ОСНОВНАЯ ЛОГИКА ===
(function() {
  const PAY_CARD = "2200 1234 5678 9012"; // ← ЗАМЕНИ НА НОМЕР КАРТЫ КРИСТИНОЧКИ

  let mode = 1, theme = 'general';

  function esc(s) { return s.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }

  function draw(c) {
    const ix = new Set();
    while (ix.size < c) ix.add(Math.floor(Math.random() * window.CARDS.length));
    return [...ix].map(i => ({ c: window.CARDS[i], r: Math.random() < 0.35 }));
  }

  // === HISTORY ===
  function getHist() {
    try { return JSON.parse(localStorage.getItem('tarot_hist') || '[]'); } catch(e) { return []; }
  }
  function saveHist(entry) {
    const l = getHist();
    l.unshift(entry);
    localStorage.setItem('tarot_hist', JSON.stringify(l.slice(0, 20)));
  }
  function renderHist() {
    const list = getHist();
    const el = document.getElementById('hlist');
    if (!list.length) {
      el.innerHTML = '<div class="history-empty">✦ Здесь появятся твои прошлые расклады ✦</div>';
      return;
    }
    const ti = {general:'✦', love:'♥', work:'⚒', health:'❀'};
    const tl = {general:'Общий', love:'Любовь', work:'Работа', health:'Здоровье'};
    let h = '';
    list.forEach(e => {
      const dt = new Date(e.ts).toLocaleString('ru-RU', {day:'numeric', month:'short', hour:'2-digit', minute:'2-digit'});
      const cn = e.cards.map(c => c.name + (c.reversed ? ' ⤵' : '')).join(' · ');
      h += `<div class="hist-item">
        <div class="hist-head">
          <span class="hist-theme">${ti[e.theme]||'✦'} ${tl[e.theme]||'Общий'} · ${e.mode===1?'карта дня':e.mode+' карты'}</span>
          <span class="hist-date">${dt}</span>
        </div>
        ${e.question ? `<div class="hist-q">❝ ${esc(e.question)} ❞</div>` : ''}
        <div class="hist-cards">${cn}</div>
      </div>`;
    });
    h += '<button id="clrh" class="clear-btn">🗑 Очистить историю</button>';
    el.innerHTML = h;
    document.getElementById('clrh').addEventListener('click', () => {
      localStorage.removeItem('tarot_hist');
      renderHist();
    });
  }

  // === TABS ===
  document.querySelectorAll('.tab').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    const t = b.dataset.tab;
    document.getElementById('tab-draw').style.display = t === 'draw' ? 'block' : 'none';
    document.getElementById('tab-history').style.display = t === 'history' ? 'block' : 'none';
    if (t === 'history') renderHist();
  }));

  // === THEME & MODE BUTTONS ===
  document.querySelectorAll('.chip').forEach(b => b.addEventListener('click', () => {
    theme = b.dataset.theme;
    document.querySelectorAll('.chip').forEach(x => x.classList.toggle('active', x.dataset.theme === theme));
    document.getElementById('d3').textContent = window.THEME_DESCR[theme][3];
    document.getElementById('d5').textContent = window.THEME_DESCR[theme][5];
  }));
  document.querySelectorAll('.mode-card').forEach(b => b.addEventListener('click', () => {
    mode = parseInt(b.dataset.mode);
    document.querySelectorAll('.mode-card').forEach(x => x.classList.toggle('active', parseInt(x.dataset.mode) === mode));
  }));

  // === PAYWALL ===
  function showPW() {
    const pw = document.getElementById('pw');
    pw.style.display = 'block';
    pw.innerHTML = `<div class="paywall">
      <div class="star">✦</div>
      <h2>Карты благодарят за доверие</h2>
      <p>Ты сделал(а) три расклада — пусть это станет началом большого пути.<br>Чтобы карты продолжили говорить с тобой —</p>
      <div class="quote">Скинь на карту денежки Кристиночке</div>
      <div class="card-display">
        <div class="card-num" id="cn">${PAY_CARD}</div>
        <button class="copy-btn" id="cpy">📋 Скопировать номер</button>
        <div class="copy-msg" id="cm"></div>
      </div>
      <div class="pay-options">
        <div class="pay-opt" data-am="10" data-un="0">
          <div class="price">5 €</div>
          <div class="desc">10 раскладов</div>
        </div>
        <div class="pay-opt" data-am="30" data-un="0">
          <div class="badge">★ выгодно</div>
          <div class="price">12 €</div>
          <div class="desc">30 раскладов</div>
        </div>
        <div class="pay-opt" data-am="0" data-un="1">
          <div class="price">25 €</div>
          <div class="desc">безлимит</div>
        </div>
      </div>
      <button class="confirm-btn" id="conf">Я оплатил(а) — открой расклады</button>
      <button class="reset-btn" id="rst">сбросить счётчик (для теста)</button>
    </div>`;

    document.getElementById('cpy').addEventListener('click', () => {
      try {
        navigator.clipboard.writeText(PAY_CARD);
        document.getElementById('cm').textContent = '✓ номер скопирован';
        setTimeout(() => { document.getElementById('cm').textContent = ''; }, 2000);
      } catch(e) {
        document.getElementById('cm').textContent = 'выдели вручную';
      }
    });

    document.querySelectorAll('.pay-opt').forEach(b => b.addEventListener('click', () => {
      document.querySelectorAll('.pay-opt').forEach(x => x.classList.remove('selected'));
      b.classList.add('selected');
    }));

    document.getElementById('conf').addEventListener('click', () => {
      const sel = document.querySelector('.pay-opt.selected');
      if (sel) {
        if (sel.dataset.un === '1') window.unlim = true;
        else window.extra += parseInt(sel.dataset.am);
      } else {
        window.extra += 10;
      }
      saveSt();
      updCnt();
      pw.style.display = 'none';
      pw.innerHTML = '';
      if (tg) tg.HapticFeedback && tg.HapticFeedback.notificationOccurred('success');
    });

    document.getElementById('rst').addEventListener('click', () => {
      window.used = 0; window.extra = 0; window.unlim = false;
      saveSt(); updCnt();
      pw.style.display = 'none'; pw.innerHTML = '';
    });
  }

  // === RENDER RESULT ===
  function render(drawn, q, th, md) {
    const labels = window.THEMES[th][md];
    const layout = md === 1 ? 'single' : 'row';
    let html = '';

    if (q.trim()) {
      html += `<div class="question-box">❝ ${esc(q)} ❞</div>`;
    }

    if (layout === 'single') {
      const item = drawn[0], c = item.c, m = item.r ? c.down : c.up;
      html += `<div class="single-result">
        <div class="label">${labels[0]}</div>
        <div class="tcard">
          <div class="flipper">
            <div class="face back">${window.buildBack()}</div>
            <div class="face front ${item.r ? 'rev' : ''}">${window.buildArt(c)}</div>
          </div>
        </div>
        <div class="cinfo">
          ${item.r ? '<div class="reversed-note">перевёрнутое положение</div>' : ''}
          <div class="meaning-box">${m}</div>
        </div>
      </div>`;
    } else {
      html += `<div class="row-cards cols-${drawn.length}">`;
      drawn.forEach((item, idx) => {
        html += `<div class="row-card-item">
          <div class="label">${labels[idx]}</div>
          <div class="tcard">
            <div class="flipper">
              <div class="face back">${window.buildBack()}</div>
              <div class="face front ${item.r ? 'rev' : ''}">${window.buildArt(item.c)}</div>
            </div>
          </div>
        </div>`;
      });
      html += '</div>';
      html += '<div class="cinfo">';
      drawn.forEach((item, idx) => {
        const c = item.c, m = item.r ? c.down : c.up;
        html += `<div class="meaning-item">
          <div class="head">
            <div>
              <span class="ctitle">${labels[idx]} — ${c.n}</span>
              ${item.r ? '<span class="rev-tag">⤵ перевёрнутая</span>' : ''}
            </div>
          </div>
          <div class="text">${m}</div>
        </div>`;
      });
      html += '<div class="hint-box">❦ Прочти карты вместе как один рассказ — связи между ними важнее каждой по отдельности.</div></div>';
    }

    document.getElementById('res').innerHTML = html;

    // Анимация переворота
    const flippers = document.querySelectorAll('.flipper');
    flippers.forEach((el, i) => {
      setTimeout(() => {
        playFlip();
        el.classList.add('flipped');
        if (tg) tg.HapticFeedback && tg.HapticFeedback.impactOccurred('light');
      }, 400 + i * 350);
    });
    setTimeout(() => {
      document.querySelectorAll('.cinfo').forEach(el => el.classList.add('show'));
    }, 400 + flippers.length * 350 + 600);
  }

  // === DRAW BUTTON ===
  document.getElementById('draw').addEventListener('click', () => {
    if (!canDraw()) {
      document.getElementById('res').innerHTML = '';
      showPW();
      return;
    }
    document.getElementById('pw').style.display = 'none';
    document.getElementById('pw').innerHTML = '';
    const q = document.getElementById('q').value;
    const drawn = draw(mode);
    render(drawn, q, theme, mode);
    consume();
    saveSt();
    updCnt();
    saveHist({
      ts: Date.now(),
      theme: theme,
      mode: mode,
      question: q,
      cards: drawn.map(d => ({ name: d.c.n, reversed: d.r }))
    });
    if (!window.unlim && window.used === FREE && window.extra === 0) {
      setTimeout(() => {
        const hint = document.createElement('div');
        hint.className = 'hint-after';
        hint.innerHTML = '✦ Это был твой последний бесплатный расклад. Следующий — после поддержки Кристиночки ✦';
        document.getElementById('res').appendChild(hint);
      }, 2000);
    }
  });

  // === EXPORT для paywall ===
  window.used = used;
  window.extra = extra;
  window.unlim = unlim;
  Object.defineProperty(window, 'used', { get: () => used, set: v => { used = v; } });
  Object.defineProperty(window, 'extra', { get: () => extra, set: v => { extra = v; } });
  Object.defineProperty(window, 'unlim', { get: () => unlim, set: v => { unlim = v; } });

  // === INIT ===
  updCnt();
})();

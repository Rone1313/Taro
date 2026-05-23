// === РУБАШКА В СЛАВЯНСКОМ СТИЛЕ ===
window.buildBack = function() {
  const dp="#5C1818", g="#D4A437", gl="#E8C45E", cr="#F5E6C8";
  let sun = '';
  for (let i = 0; i < 8; i++) {
    const a = i * 45 * Math.PI / 180;
    sun += `<line x1="${42*Math.cos(a)}" y1="${42*Math.sin(a)}" x2="${60*Math.cos(a)}" y2="${60*Math.sin(a)}" stroke="${g}" stroke-width="2" stroke-linecap="round"/>`;
    const ab = (i * 45 + 22.5) * Math.PI / 180;
    sun += `<line x1="${42*Math.cos(ab)}" y1="${42*Math.sin(ab)}" x2="${50*Math.cos(ab)}" y2="${50*Math.sin(ab)}" stroke="${g}" stroke-width="1" stroke-linecap="round"/>`;
  }
  let kv = '';
  for (let i = 0; i < 8; i++) {
    const a = i * 45 * Math.PI / 180, a2 = (i * 45 + 30) * Math.PI / 180;
    kv += `<path d="M 0 0 L ${22*Math.cos(a)} ${22*Math.sin(a)} L ${13*Math.cos(a2)} ${13*Math.sin(a2)}" fill="none" stroke="${g}" stroke-width="1.4" stroke-linejoin="round"/>`;
  }
  let ornTop = '', ornBot = '';
  for (let i = 0; i < 8; i++) {
    const cx = 14 + (172-14)/8 * (i+0.5);
    ornTop += `<path d="M ${cx-4} 26 L ${cx} 22 L ${cx+4} 26 L ${cx} 30 Z" fill="none" stroke="${g}" stroke-width="0.5"/><circle cx="${cx}" cy="26" r="0.8" fill="${g}"/>`;
    ornBot += `<path d="M ${cx-4} 324 L ${cx} 320 L ${cx+4} 324 L ${cx} 328 Z" fill="none" stroke="${g}" stroke-width="0.5"/><circle cx="${cx}" cy="324" r="0.8" fill="${g}"/>`;
  }
  return `<svg viewBox="0 0 200 350" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style="width:100%;height:100%;display:block;">
    <defs>
      <radialGradient id="bgGr" cx="50%" cy="50%" r="65%"><stop offset="0%" stop-color="#7A2222"/><stop offset="100%" stop-color="${dp}"/></radialGradient>
      <pattern id="dm" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 10 0 L 20 10 L 10 20 L 0 10 Z" fill="none" stroke="${g}" stroke-width="0.4" opacity="0.25"/><circle cx="10" cy="10" r="0.8" fill="${g}" opacity="0.4"/></pattern>
    </defs>
    <rect width="200" height="350" fill="url(#bgGr)"/>
    <rect width="200" height="350" fill="url(#dm)"/>
    <rect x="4" y="4" width="192" height="342" fill="none" stroke="${g}" stroke-width="1.8"/>
    <rect x="9" y="9" width="182" height="332" fill="none" stroke="${g}" stroke-width="0.6" opacity="0.7"/>
    ${ornTop}${ornBot}
    <g transform="translate(100,110)">
      <circle r="42" fill="none" stroke="${g}" stroke-width="1.5"/>
      ${sun}
      <circle r="30" fill="${dp}" stroke="${g}" stroke-width="0.8"/>
      ${kv}
      <circle r="4" fill="${gl}"/>
      <circle r="2" fill="${cr}"/>
    </g>
    <g transform="translate(100,195)">
      <path d="M -8 0 Q -12 -8 -4 -12 Q 4 -14 12 -8 Q 16 0 12 8 Q 4 14 -4 12 Q -12 8 -8 0 Z" fill="${g}" stroke="${gl}" stroke-width="0.5"/>
      <circle cx="10" cy="-10" r="5" fill="${g}" stroke="${gl}" stroke-width="0.5"/>
      <path d="M 12 -15 Q 14 -22 11 -25 M 14 -14 Q 18 -20 17 -24 M 9 -14 Q 8 -22 5 -23" stroke="${gl}" stroke-width="1" fill="none" stroke-linecap="round"/>
      <circle cx="11" cy="-25" r="1.2" fill="${gl}"/>
      <circle cx="17" cy="-24" r="1.2" fill="${gl}"/>
      <circle cx="5" cy="-23" r="1.2" fill="${gl}"/>
      <path d="M 15 -10 L 19 -9 L 15 -8 Z" fill="${gl}"/>
      <circle cx="11" cy="-11" r="0.8" fill="${dp}"/>
      <path d="M -2 -4 Q -18 -12 -22 -2 Q -18 6 -8 4 Z" fill="${gl}" stroke="${g}" stroke-width="0.5"/>
      <path d="M -8 4 Q -20 12 -28 20 Q -22 14 -16 8" fill="${gl}" stroke="${g}" stroke-width="0.5"/>
      <path d="M -10 6 Q -18 18 -22 26 Q -18 18 -12 10" fill="${g}" stroke="${gl}" stroke-width="0.4"/>
      <path d="M -6 8 Q -10 18 -10 26 Q -8 18 -4 12" fill="${gl}" stroke="${g}" stroke-width="0.4"/>
      <circle cx="-26" cy="19" r="1.2" fill="${gl}"/>
      <circle cx="-21" cy="25" r="1" fill="${gl}"/>
      <circle cx="-10" cy="25" r="1.2" fill="${gl}"/>
    </g>
    <g transform="translate(100,275)">
      <path d="M -1.5 14 L -1.5 -8 L 1.5 -8 L 1.5 14 Z" fill="${g}"/>
      <path d="M -1 14 Q -6 18 -10 16 M 1 14 Q 6 18 10 16" stroke="${g}" stroke-width="0.8" fill="none"/>
      <path d="M -1 -3 Q -12 -3 -16 -10 Q -18 -14 -14 -14" stroke="${g}" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      <path d="M 1 -3 Q 12 -3 16 -10 Q 18 -14 14 -14" stroke="${g}" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      <circle cx="-14" cy="-14" r="2" fill="${gl}"/>
      <circle cx="14" cy="-14" r="2" fill="${gl}"/>
      <circle cx="0" cy="-10" r="2.5" fill="${gl}"/>
      <path d="M 0 -10 L -3 -16 L 0 -14 L 3 -16 Z" fill="${gl}"/>
    </g>
    <circle cx="28" cy="50" r="3" fill="${g}" opacity="0.5"/>
    <circle cx="172" cy="50" r="3" fill="${g}" opacity="0.5"/>
    <circle cx="28" cy="300" r="3" fill="${g}" opacity="0.5"/>
    <circle cx="172" cy="300" r="3" fill="${g}" opacity="0.5"/>
  </svg>`;
};

// === ВСПОМОГАТЕЛЬНЫЕ ===
function rays(cx,cy,n,inR,outR,c,o){let s='';for(let i=0;i<n;i++){const a=i*2*Math.PI/n;s+=`<line x1="${cx+inR*Math.cos(a)}" y1="${cy+inR*Math.sin(a)}" x2="${cx+outR*Math.cos(a)}" y2="${cy+outR*Math.sin(a)}" stroke="${c}" stroke-width="1.5" opacity="${o}"/>`;}return s;}
function starPoly(cx,cy,r,c){const p=[];for(let i=0;i<10;i++){const a=(i*36-90)*Math.PI/180;const rd=i%2===0?r:r*0.4;p.push(`${cx+rd*Math.cos(a)},${cy+rd*Math.sin(a)}`);}return`<polygon points="${p.join(' ')}" fill="${c}"/>`;}
function pentag(cx,cy,r,c){const p=[];for(let i=0;i<5;i++){const a=(i*144-90)*Math.PI/180;p.push(`${cx+r*Math.cos(a)},${cy+r*Math.sin(a)}`);}return`<polygon points="${p.join(' ')}" fill="none" stroke="${c}" stroke-width="1"/>`;}

function suitSym(suit,ac,gl,iv,s){
  const sc = s || 1;
  switch(suit){
    case 'wand':  return `<g transform="scale(${sc})"><rect x="-1.5" y="-20" width="3" height="40" fill="${ac}" rx="1.5"/><path d="M -1.5 -20 Q -4 -24 0 -26 Q 4 -24 1.5 -20 Z" fill="${ac}"/><path d="M 0 -26 L -3 -30 L 0 -28 L 3 -30 Z" fill="${gl}"/></g>`;
    case 'cup':   return `<g transform="scale(${sc})"><path d="M -12 -16 Q -12 -6 -8 2 L 8 2 Q 12 -6 12 -16 Z" fill="${ac}" stroke="${gl}" stroke-width="0.8"/><rect x="-2" y="2" width="4" height="6" fill="${ac}"/><ellipse cx="0" cy="10" rx="9" ry="2.5" fill="${ac}" stroke="${gl}" stroke-width="0.6"/></g>`;
    case 'sword': return `<g transform="scale(${sc})"><rect x="-1" y="-20" width="2" height="32" fill="${iv}" stroke="${ac}" stroke-width="0.5"/><path d="M 0 -23 L -2 -20 L 2 -20 Z" fill="${ac}"/><rect x="-6" y="12" width="12" height="2" fill="${gl}"/><rect x="-1.5" y="14" width="3" height="6" fill="${ac}"/></g>`;
    case 'pent':  return `<g transform="scale(${sc})"><circle r="13" fill="${ac}" stroke="${gl}" stroke-width="1"/>${pentag(0,0,8,gl)}</g>`;
  }
  return '';
}

function arrangeSuit(n,suit,ac,gl,iv){
  const layouts = {
    1:[{x:0,y:0,s:1.5}],
    2:[{x:0,y:-30},{x:0,y:30}],
    3:[{x:0,y:-35},{x:-22,y:25},{x:22,y:25}],
    4:[{x:-22,y:-30},{x:22,y:-30},{x:-22,y:30},{x:22,y:30}],
    5:[{x:-22,y:-30},{x:22,y:-30},{x:0,y:0},{x:-22,y:30},{x:22,y:30}],
    6:[{x:-22,y:-35},{x:22,y:-35},{x:-22,y:0},{x:22,y:0},{x:-22,y:35},{x:22,y:35}],
    7:[{x:-22,y:-40},{x:22,y:-40},{x:0,y:-15},{x:-22,y:10},{x:22,y:10},{x:-22,y:40},{x:22,y:40}],
    8:[{x:-22,y:-40},{x:22,y:-40},{x:-22,y:-12},{x:22,y:-12},{x:-22,y:15},{x:22,y:15},{x:-22,y:40},{x:22,y:40}],
    9:[{x:-22,y:-45},{x:0,y:-45},{x:22,y:-45},{x:-22,y:-12},{x:0,y:-12},{x:22,y:-12},{x:-22,y:22},{x:0,y:22},{x:22,y:22}],
    10:[{x:-22,y:-50},{x:0,y:-50},{x:22,y:-50},{x:-12,y:-25},{x:12,y:-25},{x:-22,y:0},{x:0,y:0},{x:22,y:0},{x:-12,y:25},{x:12,y:25}]
  };
  return (layouts[n] || layouts[1]).map(p =>
    `<g transform="translate(${p.x},${p.y})">${suitSym(suit,ac,gl,iv,p.s||0.6)}</g>`
  ).join('');
}

function courtCard(rank,suit,ac,gl,iv){
  const crown = rank === 'K' ?
    `<path d="M -18 -42 L -15 -52 L -8 -45 L 0 -55 L 8 -45 L 15 -52 L 18 -42 L 18 -35 L -18 -35 Z" fill="${gl}"/>` :
    rank === 'q' ?
    `<path d="M -16 -42 L -10 -49 L 0 -45 L 10 -49 L 16 -42 L 16 -35 L -16 -35 Z" fill="${gl}"/>` :
    rank === 'n' ?
    `<path d="M -15 -42 L -12 -49 L 0 -52 L 12 -49 L 15 -42 Z" fill="${ac}" stroke="${gl}" stroke-width="0.5"/>` :
    `<circle cx="0" cy="-42" r="6" fill="${ac}" stroke="${gl}" stroke-width="0.5"/>`;
  const throne = (rank === 'K' || rank === 'q') ?
    `<rect x="-50" y="-5" width="100" height="80" fill="${ac}" opacity="0.4"/><rect x="-45" y="-10" width="90" height="6" fill="${gl}" opacity="0.7"/>` : '';
  return `${throne}${crown}
    <circle cx="0" cy="-25" r="12" fill="${iv}" stroke="${ac}" stroke-width="1"/>
    <path d="M -22 -13 Q -16 -17 0 -17 Q 16 -17 22 -13 L 28 55 L -28 55 Z" fill="${ac}"/>
    <g transform="translate(28,25)">${suitSym(suit,ac,gl,iv,0.6)}</g>
    <g transform="translate(-28,25)">${suitSym(suit,ac,gl,iv,0.6)}</g>`;
}

function minorIll(fig, ac, gl, iv) {
  const last = fig.slice(-1).toLowerCase();
  const suit = last === 'w' ? 'wand' : last === 'c' ? 'cup' : last === 's' ? 'sword' : 'pent';
  const first = fig[0];
  if (['p','n','q','K'].includes(first)) return courtCard(first, suit, ac, gl, iv);
  if (first === 'a') return arrangeSuit(1, suit, ac, gl, iv);
  const m = fig.match(/^(\d+)/);
  const n = m ? parseInt(m[1]) : 1;
  return arrangeSuit(n, suit, ac, gl, iv);
}

// === ЛИЦЕВАЯ ИЛЛЮСТРАЦИЯ КАРТЫ ===
window.buildArt = function(c) {
  const ac = c.ac, bg = c.bg, gd = "#B8860B", gl = "#E8B847", iv = "#F5E6C8";
  const dk = (parseInt(bg.slice(1,3),16)*0.299 + parseInt(bg.slice(3,5),16)*0.587 + parseInt(bg.slice(5,7),16)*0.114) < 140;
  const tc = dk ? iv : ac;

  let ill = '';
  switch (c.fig) {
    case 'fool': ill = `<circle r="60" fill="${gl}" opacity="0.2"/>${rays(0,0,12,40,65,gl,0.4)}<circle cx="0" cy="-10" r="12" fill="${iv}" stroke="${ac}" stroke-width="1.3"/><path d="M -10 0 L 10 0 L 12 45 L -12 45 Z" fill="${ac}"/>`; break;
    case 'mag': ill = `<text x="0" y="-50" text-anchor="middle" font-size="22" fill="${gl}">∞</text><circle cx="0" cy="-15" r="13" fill="${iv}" stroke="${ac}" stroke-width="1.5"/><path d="M -14 -3 L -18 50 L 18 50 L 14 -3 Z" fill="${ac}"/><rect x="-2" y="-40" width="4" height="22" fill="${gl}"/>`; break;
    case 'prst': ill = `<rect x="-50" y="-80" width="5" height="160" fill="${gl}" opacity="0.6"/><rect x="45" y="-80" width="5" height="160" fill="${gl}" opacity="0.6"/><circle cx="0" cy="-15" r="13" fill="${iv}" stroke="${gl}" stroke-width="1.3"/><path d="M -14 -3 L -18 60 L 18 60 L 14 -3 Z" fill="#3A5878"/><circle cx="0" cy="-35" r="4" fill="${gl}"/>`; break;
    case 'emp': ill = `<path d="M -50 70 Q -30 30 0 50 Q 30 30 50 70 Z" fill="${ac}" opacity="0.5"/><circle cx="0" cy="-15" r="13" fill="${iv}" stroke="${ac}" stroke-width="1.5"/><path d="M -14 -3 L -18 50 L 18 50 L 14 -3 Z" fill="${ac}"/>${[-10,-5,0,5,10].map(x=>`<circle cx="${x*1.5}" cy="-35" r="2.5" fill="${gl}"/>`).join('')}`; break;
    case 'emr': ill = `<path d="M -45 -65 L -45 -78 L -30 -78 L -30 -70 L -15 -70 L -15 -78 L 0 -78 L 0 -70 L 15 -70 L 15 -78 L 30 -78 L 30 -70 L 45 -70 L 45 -78 L 45 -65 Z" fill="${gl}"/><rect x="-45" y="-65" width="90" height="8" fill="${gl}" opacity="0.7"/><circle cx="0" cy="-20" r="13" fill="${iv}" stroke="${ac}" stroke-width="1.5"/><path d="M -16 -8 L -20 60 L 20 60 L 16 -8 Z" fill="${ac}"/>`; break;
    case 'hier': ill = `<circle cx="0" cy="-15" r="13" fill="${iv}" stroke="${ac}" stroke-width="1.5"/><path d="M -16 -3 L -20 60 L 20 60 L 16 -3 Z" fill="${ac}"/><rect x="-4" y="-42" width="8" height="22" fill="${gl}"/><rect x="-8" y="-38" width="16" height="4" fill="${gl}"/>`; break;
    case 'lov': ill = `${rays(0,-60,8,20,40,gl,0.5)}<circle cx="0" cy="-60" r="13" fill="${gl}"/><circle cx="-22" cy="10" r="10" fill="${iv}" stroke="${ac}" stroke-width="1"/><path d="M -33 20 L -36 55 L -10 55 L -10 20 Z" fill="${ac}" opacity="0.7"/><circle cx="22" cy="10" r="10" fill="${iv}" stroke="${ac}" stroke-width="1"/><path d="M 10 20 L 10 55 L 36 55 L 33 20 Z" fill="${ac}"/><path d="M 0 -15 Q -6 -22 -6 -15 Q -6 -8 0 -2 Q 6 -8 6 -15 Q 6 -22 0 -15 Z" fill="${gl}"/>`; break;
    case 'char': ill = `<rect x="-40" y="0" width="80" height="40" fill="${ac}" stroke="${gl}" stroke-width="1"/><circle cx="0" cy="-15" r="10" fill="${iv}" stroke="${gl}" stroke-width="1"/><circle cx="-35" cy="45" r="13" fill="none" stroke="${gl}" stroke-width="1.5"/><circle cx="35" cy="45" r="13" fill="none" stroke="${gl}" stroke-width="1.5"/><circle cx="-35" cy="45" r="3" fill="${gl}"/><circle cx="35" cy="45" r="3" fill="${gl}"/>`; break;
    case 'str': ill = `<text x="0" y="-55" text-anchor="middle" font-size="26" fill="${gl}">∞</text><circle cx="-10" cy="-15" r="12" fill="${iv}" stroke="${ac}" stroke-width="1.3"/><ellipse cx="20" cy="20" rx="22" ry="16" fill="${ac}"/><circle cx="32" cy="10" r="8" fill="${ac}"/>`; break;
    case 'her': ill = `<path d="M -25 60 Q -28 -20 -10 -45 Q 0 -50 10 -45 Q 28 -20 25 60 Z" fill="${ac}"/><circle cx="0" cy="-40" r="13" fill="${iv}" stroke="${gl}" stroke-width="0.8" opacity="0.85"/><g transform="translate(25,-10)"><rect x="-7" y="-9" width="14" height="2" fill="${gl}"/><circle r="6" fill="${gl}"/>${rays(0,0,10,7,15,gl,0.6)}</g>`; break;
    case 'whl': ill = `<circle r="55" fill="none" stroke="${gl}" stroke-width="2"/><circle r="20" fill="none" stroke="${gl}" stroke-width="1"/>${[0,45,90,135,180,225,270,315].map(a=>{const aa=a*Math.PI/180;return`<line x1="${20*Math.cos(aa)}" y1="${20*Math.sin(aa)}" x2="${55*Math.cos(aa)}" y2="${55*Math.sin(aa)}" stroke="${gl}" stroke-width="1"/>`;}).join('')}<circle r="6" fill="${gl}"/>`; break;
    case 'jst': ill = `<circle cx="0" cy="-15" r="13" fill="${iv}" stroke="${gl}" stroke-width="1"/><path d="M -16 -3 L -20 60 L 20 60 L 16 -3 Z" fill="${ac}"/><line x1="-30" y1="15" x2="30" y2="15" stroke="${gl}" stroke-width="1.5"/><path d="M -30 15 L -38 35 L -22 35 Z" fill="none" stroke="${gl}" stroke-width="1"/><path d="M 30 15 L 22 35 L 38 35 Z" fill="none" stroke="${gl}" stroke-width="1"/>`; break;
    case 'hng': ill = `<line x1="-50" y1="-65" x2="50" y2="-65" stroke="${ac}" stroke-width="4"/><line x1="-30" y1="-65" x2="-30" y2="55" stroke="${ac}" stroke-width="3"/><line x1="30" y1="-65" x2="30" y2="55" stroke="${ac}" stroke-width="3"/><line x1="-5" y1="-60" x2="-5" y2="-15" stroke="${gl}" stroke-width="1"/><circle cx="-5" cy="-5" r="11" fill="${iv}" stroke="${ac}" stroke-width="1"/>${rays(-5,-5,14,12,22,gl,0.6)}`; break;
    case 'dth': ill = `<ellipse cx="0" cy="-20" rx="14" ry="16" fill="${iv}" stroke="${gl}" stroke-width="1"/><ellipse cx="-5" cy="-22" rx="3" ry="4" fill="${ac}"/><ellipse cx="5" cy="-22" rx="3" ry="4" fill="${ac}"/><path d="M -18 0 L -22 60 L 22 60 L 18 0 Z" fill="${ac}"/><g transform="translate(0,30)"><circle r="8" fill="none" stroke="${gl}" stroke-width="1"/><path d="M 0 -10 Q -5 -5 0 0 Q 5 -5 0 -10 Z" fill="${gl}"/></g>`; break;
    case 'tmp': ill = `<circle cx="0" cy="-25" r="13" fill="${iv}" stroke="${ac}" stroke-width="1"/><path d="M -18 -13 L -22 55 L 22 55 L 18 -13 Z" fill="${ac}"/><ellipse cx="-25" cy="15" rx="10" ry="6" fill="none" stroke="${gl}" stroke-width="1"/><ellipse cx="25" cy="15" rx="10" ry="6" fill="none" stroke="${gl}" stroke-width="1"/>`; break;
    case 'dvl': ill = `<ellipse cx="0" cy="-25" rx="14" ry="16" fill="${ac}"/><path d="M -14 -40 L -10 -50 M 14 -40 L 10 -50" stroke="${gl}" stroke-width="2" stroke-linecap="round"/><circle cx="-5" cy="-27" r="2" fill="${gl}"/><circle cx="5" cy="-27" r="2" fill="${gl}"/><path d="M -18 -5 L -22 55 L 22 55 L 18 -5 Z" fill="${ac}"/><text x="0" y="25" text-anchor="middle" font-size="22" fill="${gl}">⛧</text>`; break;
    case 'twr': ill = `<rect x="-22" y="-30" width="44" height="90" fill="${ac}" stroke="${gl}" stroke-width="0.8"/><rect x="-25" y="-40" width="50" height="10" fill="${gl}"/><rect x="-12" y="-15" width="5" height="9" fill="${bg}"/><rect x="7" y="-15" width="5" height="9" fill="${bg}"/><path d="M -45 -75 L -20 -45 L -35 -60 L -10 -40 Z" fill="${gl}"/>`; break;
    case 'stt': ill = `<g transform="translate(0,-45)">${starPoly(0,0,20,gl)}</g><path d="M -45 30 Q -25 25 0 30 Q 25 25 45 30 L 45 55 L -45 55 Z" fill="${ac}" opacity="0.6"/><path d="M -10 30 L -10 50 L -5 50 L -5 30 Z" fill="${iv}" stroke="${gl}" stroke-width="0.5"/><path d="M 5 30 L 5 50 L 10 50 L 10 30 Z" fill="${iv}" stroke="${gl}" stroke-width="0.5"/>`; break;
    case 'mn': ill = `<circle cx="0" cy="-40" r="28" fill="${iv}" opacity="0.95"/><path d="M -12 -55 Q -22 -40 -12 -25 Q -18 -40 -12 -55 Z" fill="${bg}"/>${rays(0,-40,12,30,42,gl,0.4)}`; break;
    case 'sn': ill = `${rays(0,0,16,30,60,gl,0.7)}<circle r="32" fill="${gl}"/><circle cx="-10" cy="-5" r="2" fill="${ac}"/><circle cx="10" cy="-5" r="2" fill="${ac}"/><path d="M -8 8 Q 0 15 8 8" fill="none" stroke="${ac}" stroke-width="1.5"/>`; break;
    case 'jdg': ill = `<path d="M -5 -65 L 30 -40 L -5 -45 Z" fill="${gl}"/><line x1="-5" y1="-45" x2="-25" y2="-55" stroke="${gl}" stroke-width="2"/>${[-25,0,25].map(x=>`<g transform="translate(${x},20)"><circle r="9" fill="${iv}" stroke="${gl}" stroke-width="0.8"/><path d="M -11 12 L -13 50 L 13 50 L 11 12 Z" fill="${iv}" stroke="${gl}" stroke-width="0.5"/></g>`).join('')}`; break;
    case 'wld': ill = `<ellipse rx="38" ry="58" fill="none" stroke="${gl}" stroke-width="2"/><ellipse rx="33" ry="53" fill="${ac}" opacity="0.3"/><circle cx="0" cy="-10" r="10" fill="${iv}" stroke="${ac}" stroke-width="1"/><path d="M -10 5 L -12 45 L 12 45 L 10 5 Z" fill="${ac}"/>`; break;
    default: ill = minorIll(c.fig, ac, gl, iv);
  }

  return `<svg viewBox="0 0 200 350" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style="width:100%;height:100%;display:block;">
    <rect width="200" height="350" fill="${bg}"/>
    <rect x="4" y="4" width="192" height="342" fill="none" stroke="${gd}" stroke-width="1.5"/>
    <rect x="8" y="8" width="184" height="334" fill="none" stroke="${ac}" stroke-width="0.8" opacity="0.6"/>
    <text x="100" y="34" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="${tc}" letter-spacing="2">${c.num}</text>
    <line x1="60" y1="42" x2="92" y2="42" stroke="${ac}" stroke-width="0.5" opacity="0.6"/>
    <line x1="108" y1="42" x2="140" y2="42" stroke="${ac}" stroke-width="0.5" opacity="0.6"/>
    <circle cx="100" cy="42" r="1.5" fill="${ac}" opacity="0.7"/>
    <g transform="translate(100,175)">${ill}</g>
    <line x1="40" y1="305" x2="160" y2="305" stroke="${ac}" stroke-width="0.5" opacity="0.5"/>
    <circle cx="100" cy="305" r="1.5" fill="${ac}" opacity="0.7"/>
    <text x="100" y="325" text-anchor="middle" font-family="Georgia,serif" font-size="10" font-weight="500" fill="${tc}" letter-spacing="1">${c.n.toUpperCase()}</text>
  </svg>`;
};

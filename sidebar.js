/**
 * Armstrong Family Archive — Global Sidebar Navigation
 * Upload this file once. Update it to change the sidebar for all pages.
 * Version: 2026-08-27
 */
(function() {
  'use strict';

  // ── SIDEBAR CONTENT ──
  // Organized into sections. Add new pages here — no HTML files to touch.
  var sections = [
    {
      label: 'Start Here',
      items: [
        { href: 'welcome.html',       text: 'Home',                   note: 'Armstrong Family Archive' },
        { href: 'start_here.html',    text: '★ Find Your Connection', note: 'New here? Start here' },
        { href: 'for_the_family.html',text: 'Site Guide',             note: 'How to use this archive' },
      ]
    },
    {
      label: 'The Family',
      items: [
        { href: 'bellville_family.html',  text: 'Easter Bell\'s Children', note: 'All 7 branches' },
        { href: 'we_are_bellville.html',  text: 'We Are Bellville',        note: 'The full community' },
        { href: 'related.html',           text: 'How We Are Related',       note: 'Connection map' },
        { href: 'family_tree_chart.html', text: 'Complete Family Tree',     note: 'All names' },
      ]
    },
    {
      label: 'The Story',
      items: [
        { href: 'how_we_got_here.html',  text: 'How We Got Here',    note: 'Nine generations' },
        { href: 'the_thread.html',  text: 'The Thread',    note: 'The full thesis, start to finish' },
        { href: 'molley.html',           text: 'Molley',              note: 'The beginning · ca. 1750' },
        { href: 'patience_story.html',   text: 'Patience',            note: 'Newberry County SC · 1795' },
        { href: 'clarissa_story.html',   text: 'Clarissa',            note: 'South Carolina · ca. 1807' },
        { href: 'rendy_story.html',      text: 'Rendy Blayn',         note: 'Easter Bell\'s mother' },
        { href: 'easter_story.html',     text: 'Easter Bell',         note: '1838 – 1935 · Bellville' },
        { href: 'joseph_story.html',     text: 'Joseph Nichols',      note: '1847 – 1905' },
        { href: 'hellen_story.html',     text: 'Hellen Nichols',      note: '1870 – 1931' },
        { href: 'eva_story.html',        text: 'Eva Armstrong',       note: '1900 – 1977' },
        { href: 'margie_story.html',     text: 'Margie Nell Corbin',  note: '1929 – 1988' },
        { href: 'hjordis.html',          text: 'Hjordis Corbin',      note: 'b. 1960' },
      ]
    },
    {
      label: 'The Archive',
      items: [
        { href: 'family_tree.html',           text: 'Full Family Archive',      note: 'The complete record' },
        { href: 'family_database.html',        text: 'Family Database',             note: 'All 149 people · Evidence audit' },
        { href: 'registry.html',              text: 'Enslaved Persons Registry', note: '200+ named individuals' },
        { href: 'land.html',                  text: 'The Land',                  note: '3 properties · 1856–2017' },
        { href: 'papertrail.html',            text: 'Document Gallery',          note: 'Primary sources' },
        { href: 'john_nichols_community.html',text: 'John Nichols Community',    note: 'The Bellville household' },
        { href: 'timeline.html',              text: 'Family Timeline',           note: 'Dates in history' },
        { href: 'familytime.html',            text: 'Family Dates',              note: 'Celebrations & events' },
        { href: 'photos.html',                text: 'Photos',                    note: 'Family photographs' },
        { href: 'voices.html',                text: 'Family Voices',             note: 'Stories & memories' },
        { href: 'freedom.html',               text: 'Freedom Stories',           note: 'Life after 1865' },
        { href: 'ballard.html',               text: 'Ballard Research',          note: 'Newton Ballard line' },
        { href: 'dna.html',                   text: 'DNA Evidence',              note: 'AncestryDNA · GEDmatch' },
        { href: 'reference.html',             text: 'Ancestral Reference',       note: 'Quick lookup' },
      ]
    },
    {
      label: 'Origins',
      items: [
        { href: 'black_dutch_fork.html',    text: 'Black Dutch Fork',         note: 'South Carolina 1795' },
        { href: 'ester_nicholas.html',      text: 'Ester Nicholas · St. Croix', note: 'Morning Star · 1819 · Open hypothesis' },
        { href: 'family_tree.html#africa-origins', text: 'Where We Come From', note: 'Dahomey · West Africa' },
        { href: 'methodology.html',         text: 'Research Methodology',     note: '7 years · primary sources' },
        { href: 'glossary.html',            text: 'Glossary',                 note: 'Terms explained' },
      ]
    },
    {
      label: 'Connect',
      items: [
        { href: 'contact.html',   text: 'Contact & Collaborate', note: 'Share what you know' },
        { href: 'norman_corbin.html', text: 'Norman Corbin',     note: 'The Corbin family' },
      ]
    },
  ];

  // ── INJECT STYLES ──
  var style = document.createElement('style');
  style.textContent = `
    /* ── HAMBURGER BUTTON ── */
    #afa-burger {
      position: fixed;
      top: 12px;
      right: 16px;
      z-index: 1001;
      width: 40px;
      height: 40px;
      background: rgba(8,6,4,0.92);
      border: 1px solid rgba(201,168,76,0.35);
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 0;
      transition: border-color 0.2s, background 0.2s;
      backdrop-filter: blur(8px);
    }
    #afa-burger:hover {
      border-color: rgba(201,168,76,0.7);
      background: rgba(12,9,6,0.97);
    }
    #afa-burger .bar {
      width: 18px;
      height: 1.5px;
      background: #c9a84c;
      transition: transform 0.25s, opacity 0.2s, width 0.2s;
      border-radius: 1px;
    }
    #afa-burger.open .bar:nth-child(1) {
      transform: translateY(6.5px) rotate(45deg);
    }
    #afa-burger.open .bar:nth-child(2) {
      opacity: 0;
      width: 0;
    }
    #afa-burger.open .bar:nth-child(3) {
      transform: translateY(-6.5px) rotate(-45deg);
    }

    /* ── OVERLAY ── */
    #afa-overlay {
      position: fixed;
      inset: 0;
      background: rgba(4,3,2,0.7);
      z-index: 999;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s;
      backdrop-filter: blur(2px);
    }
    #afa-overlay.open {
      opacity: 1;
      pointer-events: all;
    }

    /* ── SIDEBAR PANEL ── */
    #afa-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: min(320px, 88vw);
      height: 100vh;
      background: #0a0806;
      border-left: 1px solid rgba(201,168,76,0.2);
      z-index: 1000;
      overflow-y: auto;
      overscroll-behavior: contain;
      transform: translateX(100%);
      transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
      display: flex;
      flex-direction: column;
    }
    #afa-sidebar.open {
      transform: translateX(0);
    }
    #afa-sidebar::-webkit-scrollbar { width: 4px; }
    #afa-sidebar::-webkit-scrollbar-track { background: transparent; }
    #afa-sidebar::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.2); }

    /* Sidebar header */
    .afa-sb-header {
      padding: 20px 20px 16px;
      border-bottom: 1px solid rgba(201,168,76,0.12);
      flex-shrink: 0;
    }
    .afa-sb-brand {
      font-family: Georgia, serif;
      font-style: italic;
      font-size: 16px;
      color: #f0ead8;
      text-decoration: none;
      display: block;
      margin-bottom: 4px;
    }
    .afa-sb-tagline {
      font-family: 'Courier New', monospace;
      font-size: 8px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgba(201,168,76,0.5);
    }

    /* Section labels */
    .afa-sb-section {
      padding: 16px 20px 4px;
    }
    .afa-sb-section-label {
      font-family: 'Courier New', monospace;
      font-size: 7.5px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: rgba(255,255,255,0.28);
      display: block;
      padding-bottom: 8px;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      margin-bottom: 4px;
    }

    /* Nav items */
    .afa-sb-item {
      display: block;
      padding: 9px 20px;
      text-decoration: none;
      border-left: 2px solid transparent;
      transition: background 0.15s, border-color 0.15s;
    }
    .afa-sb-item:hover {
      background: rgba(201,168,76,0.05);
      border-left-color: rgba(201,168,76,0.4);
    }
    .afa-sb-item.active {
      background: rgba(201,168,76,0.07);
      border-left-color: #c9a84c;
    }
    .afa-sb-item-text {
      font-family: Georgia, serif;
      font-size: 13px;
      color: #d8d0c8;
      display: block;
      line-height: 1.3;
    }
    .afa-sb-item.active .afa-sb-item-text {
      color: #c9a84c;
    }
    .afa-sb-item-note {
      font-family: 'Courier New', monospace;
      font-size: 8px;
      letter-spacing: 0.5px;
      color: rgba(255,255,255,0.3);
      display: block;
      margin-top: 1px;
    }

    /* Footer */
    .afa-sb-footer {
      margin-top: auto;
      padding: 16px 20px;
      border-top: 1px solid rgba(255,255,255,0.05);
      flex-shrink: 0;
    }
    .afa-sb-footer-text {
      font-family: 'Courier New', monospace;
      font-size: 7.5px;
      letter-spacing: 1px;
      color: rgba(255,255,255,0.18);
      line-height: 1.7;
    }

    /* Hide hamburger on very wide screens if preferred */
    @media (min-width: 1200px) {
      #afa-burger { display: flex; }
    }
  `;
  document.head.appendChild(style);

  // ── BUILD DOM ──

  // Overlay
  var overlay = document.createElement('div');
  overlay.id = 'afa-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  document.body.appendChild(overlay);

  // Sidebar panel
  var sidebar = document.createElement('nav');
  sidebar.id = 'afa-sidebar';
  sidebar.setAttribute('role', 'navigation');
  sidebar.setAttribute('aria-label', 'Site navigation');
  sidebar.setAttribute('aria-hidden', 'true');

  // Header
  var header = document.createElement('div');
  header.className = 'afa-sb-header';
  header.innerHTML = '<a href="welcome.html" class="afa-sb-brand">Armstrong Family Archive</a>'
    + '<span class="afa-sb-tagline">Nine Generations · One Unbroken Thread</span>';
  sidebar.appendChild(header);

  // Detect current page for active state
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Build sections
  sections.forEach(function(section) {
    var sec = document.createElement('div');
    sec.className = 'afa-sb-section';
    var label = document.createElement('span');
    label.className = 'afa-sb-section-label';
    label.textContent = section.label;
    sec.appendChild(label);
    sidebar.appendChild(sec);

    section.items.forEach(function(item) {
      var a = document.createElement('a');
      a.href = item.href;
      a.className = 'afa-sb-item';

      // Active state check
      var itemPage = item.href.split('#')[0].split('/').pop();
      if (itemPage === currentPage) {
        a.classList.add('active');
      }

      a.innerHTML = '<span class="afa-sb-item-text">' + item.text + '</span>'
        + '<span class="afa-sb-item-note">' + item.note + '</span>';

      // Close sidebar on click
      a.addEventListener('click', function() { close(); });
      sidebar.appendChild(a);
    });
  });

  // Footer
  var footer = document.createElement('div');
  footer.className = 'afa-sb-footer';
  footer.innerHTML = '<span class="afa-sb-footer-text">'
    + 'Research by Jasmine M. Lee<br>'
    + 'Dock Ellis Foundation · 2019–2026<br>'
    + 'jlee@dockellisfoundation.com'
    + '</span>';
  sidebar.appendChild(footer);
  document.body.appendChild(sidebar);

  // Hamburger button
  var burger = document.createElement('button');
  burger.id = 'afa-burger';
  burger.setAttribute('aria-label', 'Open navigation menu');
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-controls', 'afa-sidebar');
  burger.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span>';
  document.body.appendChild(burger);

  // ── OPEN / CLOSE ──
  var isOpen = false;

  function open() {
    isOpen = true;
    sidebar.classList.add('open');
    overlay.classList.add('open');
    burger.classList.add('open');
    sidebar.setAttribute('aria-hidden', 'false');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // Focus first link
    var first = sidebar.querySelector('.afa-sb-item');
    if (first) setTimeout(function() { first.focus(); }, 300);
  }

  function close() {
    isOpen = false;
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    burger.classList.remove('open');
    sidebar.setAttribute('aria-hidden', 'true');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    burger.focus();
  }

  burger.addEventListener('click', function() {
    isOpen ? close() : open();
  });

  overlay.addEventListener('click', close);

  // Keyboard: Escape closes
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isOpen) close();
  });

  // Trap focus inside sidebar when open
  sidebar.addEventListener('keydown', function(e) {
    if (e.key !== 'Tab' || !isOpen) return;
    var focusable = sidebar.querySelectorAll('a, button, [tabindex="0"]');
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

})();

/** 
 * Armstrong Family Archive — Global Sidebar Navigation
 * The menu is organized by what visitors are trying to do,
 * not by the order the archive's files were created.
 * Version: 2026-10-03
 */
(function() {
  'use strict';
  if (document.getElementById('afa-burger')) return;

  // ── SIDEBAR CONTENT ──
  var sections = [
    {
      label: 'Begin Here',
      items: [
        { href: 'index.html',          text: 'Home',                 note: 'Choose where to begin' },
        { href: 'start_here.html',     text: 'Find Where You Fit',   note: 'Start with someone you know' },
        { href: 'welcome.html',        text: 'Our Story',            note: 'The family story as the research allows it' },
        { href: 'our_story.html',      text: 'What I’ve Learned',    note: 'Jasmine’s personal reflection' },
        { href: 'for_the_family.html', text: 'Explore the Archive',  note: 'Guide to everything else' }
        ,{ href: 'family_tree.html#family-letter', text: 'Jasmine’s Letter to the Family', note: 'A personal letter · opens as a pop-up' }
      ]
    },
    {
      label: 'The Family',
      items: [
        { href: 'family_tree.html',          text: 'Full Family Tree',             note: 'The complete family experience' },
        { href: 'the_thread.html',           text: 'The Thread',                   note: 'The working family thesis' },
        { href: 'waldrop_family_story.html', text: 'The Matriarchs of the Family', note: 'Molley, Patience, Rachel, and Clarissa' },
        { href: 'bellville_family.html',     text: 'The Family in Bellville',      note: 'Easter Bell’s nine branches' },
        { href: 'related.html',              text: 'How We Are Related',           note: 'Connections across the family' },
        { href: 'photos.html',               text: 'Photos',                       note: 'Family photographs' },
        { href: 'voices.html',               text: 'Family Voices',                note: 'Stories and memories' }
      ]
    },
    {
      label: 'Enslavement & Historical Records',
      items: [
        { href: 'enslaver_estate_network_prototype.html', text: 'Enslaver & Estate Network', note: 'Start here · people, estates, transfers and evidence' },
        { href: 'bell_family.html',                    text: 'The Bells',                         note: 'Bell family slaveholding records' },
        { href: 'john_nichols.html',                  text: 'John Nichols',                       note: 'Enslavement and land records' },
        { href: 'john_nichols_community.html',        text: 'John Nichols Community',             note: 'Household and community research' },
        { href: 'waldrop_enslavers.html',             text: 'The Waldrops',                       note: 'Waldrop enslavement records' },
        { href: 'davenport_family.html',              text: 'The Davenports',                     note: 'Early South Carolina records' },
        { href: 'ownership_network.html',             text: 'Ownership Network',                  note: 'Legal-record network; not a family tree' },
        { href: 'enslavement_community_network.html', text: 'Enslavement & Community Network',   note: 'Wider historical research network' }
      ]
    },
    {
      label: 'The Research',
      items: [
        { href: 'how_we_got_here.html',      text: 'The Journey',               note: 'Where the research leads across places and time' },
        { href: 'papertrail.html',           text: 'The Documents',             note: 'Primary records and evidence' },
        { href: 'research_archive.html',     text: 'Research Archive',           note: 'Full documentary research layer' },
        { href: 'registry.html',             text: 'Enslaved Persons Registry',  note: 'Named people and evidence status' },
        { href: 'land.html',                 text: 'The Land',                  note: 'Property and land records' },
        { href: 'dna.html',                  text: 'DNA Evidence',               note: 'DNA matches and analysis' },
        { href: 'family_database.html',      text: 'Evidence Audit',             note: 'Working people-and-evidence database' },
        { href: 'reference.html',            text: 'Ancestral Reference',         note: 'Quick lookup' },
        { href: 'methodology.html',          text: 'Research Methodology',        note: 'How the research is evaluated' },
        { href: 'glossary.html',             text: 'Glossary',                   note: 'Research terms explained' },
        { href: 'precinct1_analysis.html',   text: 'Bellville Census Deep Analysis', note: 'Detailed census, slave-schedule, and probate analysis' },
        { href: 'location_checksheet.html',  text: 'Where Everyone Was, When',       note: 'Quick reference for testing dates and locations' }
      ]
    },
    {
      label: 'History & Community',
      items: [
        { href: 'we_are_bellville.html',  text: 'We Are Bellville',       note: 'The wider Bellville community' },
        { href: 'elders.html',            text: 'The Elders of Bellville',note: 'Early residents and family clusters' },
        { href: 'freedom.html',           text: 'Freedom Stories',        note: 'Life after emancipation' },
        { href: 'timeline.html',          text: 'Family Timeline',        note: 'People, places, and dates' },
        { href: 'familytime.html',        text: 'Family Dates',           note: 'Celebrations and events' },
        { href: 'black_dutch_fork.html',  text: 'Black Dutch Fork',       note: 'South Carolina community context' }
      ]
    },
    {
      label: 'People & Historical Networks',
      items: [
        { href: 'molley.html',       text: 'Molley',              note: 'The earliest working ancestor in this line' },
        { href: 'patience_story.html', text: 'Patience',            note: 'Newberry County, South Carolina' },
        { href: 'clarissa_story.html', text: 'Clarissa',            note: 'South Carolina · working reconstruction' },
        { href: 'rendy_story.html', text: 'Rendy Blayn',           note: 'Easter Bell’s mother' },
        { href: 'easter_story.html', text: 'Easter Bell',           note: '1838–1935 · Bellville' },
        { href: 'joseph_story.html', text: 'Joseph Nichols',         note: '1847–1905 · Bellville' },
        { href: 'hellen_story.html', text: 'Hellen Nichols',         note: '1870–1931' },
        { href: 'eva_story.html',    text: 'Eva Armstrong',          note: '1900–1977' },
        { href: 'margie_story.html', text: 'Margie Nell Corbin',     note: '1929–1988' },
        { href: 'hjordis.html',      text: 'Hjordis Corbin',          note: 'b. 1960' }
        ,{ href: 'bessie.html', text: 'Aunt Bessie Rawls', note: 'Orange County family memory · relationship under research' }
      ]
    },
    {
      label: 'Other Lines & Open Research',
      items: [
        { href: 'ballard.html',                     text: 'Ballard Research',           note: 'Newton Ballard line' },
        { href: 'norman_corbin.html',               text: 'Norman Corbin',              note: 'Corbin family research' },
        { href: 'ester_nicholas.html',              text: 'Ester Nicholas · St. Croix', note: 'Open research hypothesis' },
        { href: 'family_tree.html#africa-origins',  text: 'Where We Come From',         note: 'Africa origins research' }
      ]
    },
    {
      label: 'Connect',
      items: [
        { href: 'contact.html', text: 'Contact & Collaborate', note: 'Share records, memories, or corrections' }
      ]
    }
  ];

  // ── INJECT STYLES ──
  var style = document.createElement('style');
  style.textContent = `
    #afa-burger {
      position: fixed;
      top: 12px;
      right: 16px;
      z-index: 12002;
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
    #afa-burger.open .bar:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
    #afa-burger.open .bar:nth-child(2) { opacity: 0; width: 0; }
    #afa-burger.open .bar:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

    #afa-overlay {
      position: fixed;
      inset: 0;
      background: rgba(4,3,2,0.7);
      z-index: 12000;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s;
      backdrop-filter: blur(2px);
    }
    #afa-overlay.open { opacity: 1; pointer-events: all; }

    #afa-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      width: min(340px, 90vw);
      height: 100vh;
      background: #0a0806;
      border-left: 1px solid rgba(201,168,76,0.2);
      z-index: 12001;
      overflow-y: auto;
      overscroll-behavior: contain;
      transform: translateX(100%);
      transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), visibility 0.3s;
      visibility: hidden;
      display: flex;
      flex-direction: column;
    }
    #afa-sidebar.open { transform: translateX(0); visibility: visible; }
    #afa-sidebar::-webkit-scrollbar { width: 4px; }
    #afa-sidebar::-webkit-scrollbar-track { background: transparent; }
    #afa-sidebar::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.2); }

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

    .afa-sb-section { padding: 16px 20px 4px; }
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
    .afa-sb-item.active .afa-sb-item-text { color: #c9a84c; }
    .afa-sb-item-note {
      font-family: 'Courier New', monospace;
      font-size: 8px;
      letter-spacing: 0.5px;
      color: rgba(255,255,255,0.3);
      display: block;
      margin-top: 1px;
    }

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

    @media (min-width: 1200px) {
      #afa-burger { display: flex; }
    }
  `;
  document.head.appendChild(style);

  // ── RETIRE LEGACY PAGE-LEVEL NAVIGATION ──
  function retireLegacyNav() {
    document.querySelectorAll('.gnav-links, .topbar .nav, .topbar .toplinks, header.top .navlinks, #menu-btn, #nav-drawer, #nav-overlay, #archiveHamburger, #archiveDrawer, #drawerScrim').forEach(function(nav) {
      nav.style.display = 'none';
    });
  }

  retireLegacyNav();

  // ── BUILD DOM ──
  var overlay = document.createElement('div');
  overlay.id = 'afa-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  document.body.appendChild(overlay);

  var sidebar = document.createElement('nav');
  sidebar.id = 'afa-sidebar';
  sidebar.setAttribute('role', 'navigation');
  sidebar.setAttribute('aria-label', 'Site navigation');
  sidebar.setAttribute('aria-hidden', 'true');

  var header = document.createElement('div');
  header.className = 'afa-sb-header';
  header.innerHTML = '<a href="index.html" class="afa-sb-brand">Armstrong Family Archive</a>'
    + '<span class="afa-sb-tagline">Nine Generations · One Unbroken Thread</span>';
  sidebar.appendChild(header);

  var currentPage = window.location.pathname.split('/').pop() || 'index.html';

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

      var itemPage = item.href.split('#')[0].split('/').pop();
      if (itemPage === currentPage) a.classList.add('active');

      a.innerHTML = '<span class="afa-sb-item-text">' + item.text + '</span>'
        + '<span class="afa-sb-item-note">' + item.note + '</span>';

      a.addEventListener('click', function() { close(); });
      sidebar.appendChild(a);
    });
  });

  var footer = document.createElement('div');
  footer.className = 'afa-sb-footer';
  footer.innerHTML = '<span class="afa-sb-footer-text">'
    + 'Research by Jasmine M. Lee<br>'
    + 'Dock Ellis Foundation · 2019–2026<br>'
    + 'jlee@dockellisfoundation.com'
    + '</span>';
  sidebar.appendChild(footer);
  document.body.appendChild(sidebar);

  var burger = document.createElement('button');
  burger.id = 'afa-burger';
  burger.setAttribute('aria-label', 'Open navigation menu');
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-controls', 'afa-sidebar');
  burger.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span>';
  document.body.appendChild(burger);

  var isOpen = false;

  function open() {
    isOpen = true;
    sidebar.classList.add('open');
    overlay.classList.add('open');
    burger.classList.add('open');
    sidebar.setAttribute('aria-hidden', 'false');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Close navigation menu');
    document.body.style.overflow = 'hidden';
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
    burger.setAttribute('aria-label', 'Open navigation menu');
    document.body.style.overflow = '';
    burger.focus();
  }

  burger.addEventListener('click', function() {
    isOpen ? close() : open();
  });

  overlay.addEventListener('click', close);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isOpen) close();
  });

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
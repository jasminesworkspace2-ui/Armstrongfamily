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
    "label": "Begin Here",
    "items": [
      {
        "href": "index.html",
        "text": "Home",
        "note": "Choose a path into the archive"
      },
      {
        "href": "welcome.html",
        "text": "Our Story",
        "note": "The historical family reconstruction"
      },
      {
        "href": "start_here.html",
        "text": "Find Where You Fit",
        "note": "Find your connection through someone you know"
      },
      {
        "href": "for_the_family.html",
        "text": "Explore the Archive",
        "note": "A guide to each page and where to begin"
      },
      {
        "href": "our_story.html",
        "text": "What I’ve Learned",
        "note": "Jasmine’s personal reflection on the research"
      }
    ]
  },
  {
    "label": "The Family",
    "items": [
      {
        "href": "family_tree.html",
        "text": "Full Family Tree",
        "note": "Names, branches, photographs and family stories"
      },
      {
        "href": "the_thread.html",
        "text": "The Thread",
        "note": "The working thesis behind the family reconstruction"
      },
      {
        "href": "waldrop_family_story.html",
        "text": "The Matriarchs of the Family",
        "note": "Molley, Patience, Rachel and Clarissa’s family narrative"
      },
      {
        "href": "bellville_family.html",
        "text": "The Family in Bellville",
        "note": "Easter Bell’s family branches and later generations"
      },
      {
        "href": "related.html",
        "text": "How We Are Related",
        "note": "Compare relationships across family lines"
      },
      {
        "href": "photos.html",
        "text": "Photos & Documents",
        "note": "Family photographs and original document images"
      },
      {
        "href": "voices.html",
        "text": "Family Voices",
        "note": "Family memories and surviving stories"
      },
      {
        "href": "family_tree.html#family-letter",
        "text": "Jasmine’s Letter to the Family",
        "note": "Jasmine’s personal letter · opens as a pop-up"
      }
    ]
  },
  {
    "label": "Enslavement & Historical Records",
    "items": [
      {
        "href": "enslaver_estate_network_prototype.html",
        "text": "Enslaver & Estate Network",
        "note": "Start here: select a person and follow the evidence"
      },
      {
        "href": "bell_family.html",
        "text": "The Bells",
        "note": "Bell household slaveholding, estates and land records"
      },
      {
        "href": "john_nichols.html",
        "text": "John Nichols",
        "note": "Origins, Waldrop marriage, land and historical records"
      },
      {
        "href": "john_nichols_community.html",
        "text": "John Nichols Community",
        "note": "Enslaved population, freedom-era households and heirs"
      },
      {
        "href": "waldrop_enslavers.html",
        "text": "The Waldrops",
        "note": "Households, property records and individual heir dossiers"
      },
      {
        "href": "davenport_family.html",
        "text": "The Davenports",
        "note": "Deeds, wills, recipients and named enslaved people"
      },
      {
        "href": "ownership_network.html",
        "text": "Ownership Network",
        "note": "Compare ownership and transfer claims across records"
      },
      {
        "href": "enslavement_community_network.html",
        "text": "Enslavement & Community Network",
        "note": "Neighboring households and wider research leads"
      }
    ]
  },
  {
    "label": "The Research",
    "items": [
      {
        "href": "how_we_got_here.html",
        "text": "The Journey",
        "note": "Places, chronology and the documentary journey"
      },
      {
        "href": "papertrail.html",
        "text": "The Documents",
        "note": "Read record language and document transcriptions"
      },
      {
        "href": "research_archive.html",
        "text": "Research Archive",
        "note": "Detailed household, estate and network research files"
      },
      {
        "href": "registry.html",
        "text": "Enslaved Persons Registry",
        "note": "Search named people by record, estate and community"
      },
      {
        "href": "land.html",
        "text": "The Land",
        "note": "Surveys, landholding, deeds and property records"
      },
      {
        "href": "dna.html",
        "text": "DNA Evidence",
        "note": "DNA matches, population models and research questions"
      },
      {
        "href": "family_database.html",
        "text": "Evidence Audit",
        "note": "Cross-check people, claims, sources and evidence levels"
      },
      {
        "href": "reference.html",
        "text": "Family Line Reference",
        "note": "Quick summaries of family lines and research questions"
      },
      {
        "href": "methodology.html",
        "text": "Research Methodology",
        "note": "How facts, supported connections and leads are evaluated"
      },
      {
        "href": "glossary.html",
        "text": "Glossary",
        "note": "Genealogy and historical-record terms explained"
      },
      {
        "href": "precinct1_analysis.html",
        "text": "Bellville Census Deep Analysis",
        "note": "Detailed Austin County census and estate analysis"
      },
      {
        "href": "location_checksheet.html",
        "text": "Where Everyone Was, When",
        "note": "Check whether a record fits a person’s date and place"
      }
    ]
  },
  {
    "label": "History & Community",
    "items": [
      {
        "href": "we_are_bellville.html",
        "text": "We Are Bellville",
        "note": "The wider community surrounding the Texas family"
      },
      {
        "href": "elders.html",
        "text": "The Elders of Bellville",
        "note": "Early Bellville residents and community clusters"
      },
      {
        "href": "freedom.html",
        "text": "Freedom Stories",
        "note": "Voting, land, work and family after emancipation"
      },
      {
        "href": "timeline.html",
        "text": "Family Timeline",
        "note": "Family events and records across generations"
      },
      {
        "href": "familytime.html",
        "text": "Family Dates",
        "note": "Birthdays, anniversaries and dates in the record"
      },
      {
        "href": "black_dutch_fork.html",
        "text": "Black Dutch Fork",
        "note": "South Carolina community context"
      }
    ]
  },
  {
    "label": "Family Lives",
    "items": [
      {
        "href": "molley.html",
        "text": "Molley",
        "note": "The early record and people named with Molley"
      },
      {
        "href": "patience_story.html",
        "text": "Patience",
        "note": "The South Carolina–Mississippi–Louisiana record trail"
      },
      {
        "href": "clarissa_story.html",
        "text": "Clarissa",
        "note": "Individual story and Mississippi–Louisiana records"
      },
      {
        "href": "rendy_story.html",
        "text": "Rendy Blayn",
        "note": "Name variants and maternal-line research leads"
      },
      {
        "href": "easter_story.html",
        "text": "Easter Bell",
        "note": "Slavery-era questions, freedom-era households and family"
      },
      {
        "href": "joseph_story.html",
        "text": "Joseph Nichols",
        "note": "Marriage, voting, landholding and Bellville records"
      },
      {
        "href": "hellen_story.html",
        "text": "Hellen Nichols",
        "note": "Hellen’s individual family story"
      },
      {
        "href": "eva_story.html",
        "text": "Eva Armstrong",
        "note": "Eva’s Texas and California family story"
      },
      {
        "href": "margie_story.html",
        "text": "Margie Nell Corbin",
        "note": "Margie’s life, children and later generations"
      },
      {
        "href": "hjordis.html",
        "text": "Hjordis Corbin",
        "note": "Hjordis’s individual family file"
      },
      {
        "href": "bessie.html",
        "text": "Aunt Bessie Rawls",
        "note": "Family memory and a relationship being researched"
      }
    ]
  },
  {
    "label": "Other Family Lines & Open Research",
    "items": [
      {
        "href": "ballard.html",
        "text": "Ballard Research",
        "note": "Family lines, DNA evidence and open origin questions"
      },
      {
        "href": "newton_ballard.html",
        "text": "Newton Ballard",
        "note": "Individual primary-source record and family context"
      },
      {
        "href": "ballard_tracking.html",
        "text": "Ballard Community Tracking Chart",
        "note": "Compare 1840–1850 households and community records"
      },
      {
        "href": "norman_corbin.html",
        "text": "Norman Corbin",
        "note": "Norman’s life, family, writings and California story"
      },
      {
        "href": "ester_nicholas.html",
        "text": "Ester Nicholas · St. Croix",
        "note": "A separate St. Croix identity hypothesis"
      },
      {
        "href": "family_tree.html#africa-origins",
        "text": "Where We Come From",
        "note": "The family tree’s Africa-origins research section"
      }
    ]
  },
  {
    "label": "Connect",
    "items": [
      {
        "href": "contact.html",
        "text": "Contact & Collaborate",
        "note": "Share a record, photograph, memory or correction"
      }
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

    .afa-sb-section { padding: 0; border-bottom:1px solid rgba(201,168,76,.12); }
    .afa-sb-section > summary { cursor:pointer; list-style:none; padding:16px 20px; margin:0; border:0; color:#d6cab4; font-size:11px; letter-spacing:1.5px; }
    .afa-sb-section > summary::-webkit-details-marker { display:none; }
    .afa-sb-section > summary:after { content:'+'; float:right; color:#c9a84c; font-size:13px; }
    .afa-sb-section[open] > summary:after { content:'−'; }
    .afa-sb-items { padding-bottom:8px; }
    #afa-sidebar [hidden] { display:none!important; }
    .afa-menu-search { width:100%; margin-top:16px; padding:11px; color:#f0ead8; background:#15120e; border:1px solid rgba(201,168,76,.25); border-radius:4px; font:12px Georgia,serif; }
    .afa-menu-status { display:block; padding-top:6px; color:#b8aa90; font:10px/1.6 Georgia,serif; }
    #afa-sidebar :focus-visible { outline:2px solid #c9a84c;outline-offset:-2px; }

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
      font-size: 15px;
      color: #d8d0c8;
      display: block;
      line-height: 1.3;
    }
    .afa-sb-item.active .afa-sb-item-text { color: #c9a84c; }
    .afa-sb-item-note {
      font-family: 'Courier New', monospace;
      font-size: 12px;
      line-height: 1.5;
      letter-spacing: 0;
      color: #a99f8d;
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

  var expandedBeforeSearch = null;
  sections.forEach(function(section, index) {
    var sec = document.createElement('details');
    sec.className = 'afa-sb-section';
    var containsPage = section.items.some(function(item) { return item.href.indexOf('#') === -1 && item.href === currentPage; });
    sec.open = containsPage || (index === 0 && !sections.some(function(s) { return s.items.some(function(i) { return i.href.indexOf('#') === -1 && i.href === currentPage; }); }));
    var summary = document.createElement('summary');
    summary.className = 'afa-sb-section-label';
    summary.textContent = section.label;
    sec.appendChild(summary);
    var group = document.createElement('div'); group.className = 'afa-sb-items';
    section.items.forEach(function(item) {
      var a = document.createElement('a'); a.href = item.href; a.className = 'afa-sb-item';
      if (item.href.indexOf('#') === -1 && item.href === currentPage) { a.classList.add('active'); a.setAttribute('aria-current','page'); }
      var title = document.createElement('span'); title.className = 'afa-sb-item-text'; title.textContent = item.text;
      var note = document.createElement('span'); note.className = 'afa-sb-item-note'; note.textContent = item.note;
      a.appendChild(title); a.appendChild(note); a.addEventListener('click', close); group.appendChild(a);
    });
    sec.appendChild(group); sidebar.appendChild(sec);
  });
  var menuSearch = document.createElement('input'); menuSearch.type = 'search'; menuSearch.placeholder = 'Find a page…'; menuSearch.setAttribute('aria-label','Find a page in the archive'); menuSearch.className = 'afa-menu-search';
  header.appendChild(menuSearch);
  var menuStatus = document.createElement('span'); menuStatus.className='afa-menu-status'; menuStatus.setAttribute('role','status'); menuStatus.setAttribute('aria-live','polite'); header.appendChild(menuStatus);
  menuSearch.addEventListener('input', function() {
    var q=menuSearch.value.trim().toLowerCase(); var groups=[].slice.call(sidebar.querySelectorAll('details')); var count=0;
    if(q && !expandedBeforeSearch) expandedBeforeSearch=groups.map(function(g){return g.open;});
    groups.forEach(function(g,i){var hits=0;g.querySelectorAll('.afa-sb-item').forEach(function(a){var hit=!q||a.textContent.toLowerCase().indexOf(q)!==-1;a.hidden=!hit;if(hit){hits++;count++;}});g.hidden=!!q&&!hits;if(q&&hits)g.open=true;if(!q&&expandedBeforeSearch)g.open=expandedBeforeSearch[i];});
    menuStatus.textContent=q?(count?count+' matching page'+(count===1?'':'s'):'No matching pages. Try a person, place or topic.') : '';
    if(!q) expandedBeforeSearch=null;
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
    var first = menuSearch;
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
    var focusable = [].slice.call(sidebar.querySelectorAll('a, button, input, summary, [tabindex="0"]')).filter(function(el){ return el.getClientRects().length > 0; });
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
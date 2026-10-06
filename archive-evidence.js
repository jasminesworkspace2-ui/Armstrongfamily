/* Shared claim boundaries. Reported record fields remain distinct from resolved identities. */
(function(){
function init(){
var page=location.pathname.split('/').pop()||'index.html';
var pages=['welcome.html','family_tree.html','bellville_family.html','related.html','rendy_story.html','easter_story.html','joseph_story.html','papertrail.html','reference.html','registry.html','family_database.html','molley.html','clarissa_story.html','patience_story.html','ownership_network.html','ester_nicholas.html','research_archive.html','john_nichols.html','john_nichols_community.html','timeline.html','how_we_got_here.html'];
if(pages.includes(page)){
var note=document.createElement('aside');note.className='afa-evidence-note';note.setAttribute('aria-label','Current evidence boundaries');
note.innerHTML='<strong>Read the earlier family links with care.</strong><p>Easter’s mother remains independently unidentified. The certificate’s reported name “Rinde Bland” starts the Rendy/Blayn/Bland investigation. Joseph’s parents and the bridge from the Patience–Clarissa family to Joseph remain unresolved.</p><details><summary>Dates, family groups and source limits</summary><ul><li>Joseph and Easter: the controlling reviewed license records 23 December 1869. The 18 December 1865 index date is a conflicting reference, not an established second wedding.</li><li>The current 1839 research transcription places Tom under Rachel, and William, Amanda and Harriet under Clarissa. Exact source wording must be distinguished from an edited summary.</li><li>The Sims Patience and the later Davenport Patience are not merged without a continuity bridge. Molley’s place in the later family remains a research question.</li><li>Unnamed slave-schedule entries, DNA hints and shared surnames do not establish a named person, parent or enslaver.</li></ul><p><a href="methodology.html">Evidence standards</a> · <a href="research_archive.html#open">Open research tasks</a></p></details>';
var hero=document.querySelector('header.hero,section.hero,.hero');if(hero)hero.insertAdjacentElement('afterend',note);else{var main=document.querySelector('main');if(main)main.prepend(note);else{var context=document.getElementById('afa-page-context');if(context)context.after(note);}}
}
document.querySelectorAll('table').forEach(function(table){
if(table.closest('.afa-table-scroll'))return;var wrap=document.createElement('div');wrap.className='afa-table-scroll';wrap.tabIndex=0;wrap.setAttribute('role','region');var caption=table.querySelector('caption');wrap.setAttribute('aria-label',(caption?caption.textContent.trim():'Research table')+' — scroll horizontally if needed');table.before(wrap);wrap.appendChild(table);if(matchMedia('(max-width:700px)').matches && table.scrollWidth>wrap.clientWidth){var hint=document.createElement('p');hint.className='afa-table-hint';hint.textContent='Swipe this table sideways to see all columns.';wrap.before(hint);}
});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

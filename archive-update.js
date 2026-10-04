/* Armstrong Family Archive — Global Research Update
 * Change only CURRENT_UPDATE when new research is published.
 */
(function(){
  const CURRENT_UPDATE = {
    date: "October 2026",
    label: "New Research",
    title: "Easter Bell Nichols research file updated",
    message: "New documentary research, evidence notes, and unresolved questions have been added to Easter Bell Nichols's file.",
    href: "easter_story.html#slavery",
    linkText: "Read the research"
  };

  const key = "armstrongArchiveUpdateDismissed:" + CURRENT_UPDATE.date + ":" + CURRENT_UPDATE.title;
  if (sessionStorage.getItem(key) === "1") return;

  function inject(){
    if (document.getElementById("global-archive-update")) return;
    const banner = document.createElement("aside");
    banner.id = "global-archive-update";
    banner.className = "global-archive-update";
    banner.setAttribute("role","status");
    banner.setAttribute("aria-label","Latest archive research update");
    banner.innerHTML =
      '<div class="global-archive-update-inner">' +
        '<span class="global-archive-update-mark" aria-hidden="true">+</span>' +
        '<div class="global-archive-update-copy">' +
          '<span class="global-archive-update-kicker">' + CURRENT_UPDATE.label + ' · ' + CURRENT_UPDATE.date + '</span>' +
          '<strong>' + CURRENT_UPDATE.title + '</strong>' +
          '<span>' + CURRENT_UPDATE.message + '</span>' +
        '</div>' +
        '<a class="global-archive-update-link" href="' + CURRENT_UPDATE.href + '">' + CURRENT_UPDATE.linkText + ' <span aria-hidden="true">→</span></a>' +
        '<button class="global-archive-update-close" type="button" aria-label="Dismiss archive update">×</button>' +
      '</div>';

    banner.querySelector("button").addEventListener("click", function(){
      sessionStorage.setItem(key,"1");
      banner.remove();
    });

    document.body.insertBefore(banner, document.body.firstChild);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
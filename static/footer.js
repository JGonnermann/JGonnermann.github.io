(function() {
  document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('.page-footer footer');
    if (!footer) return;
    
    // Create legal links
    const legalLinks = document.createElement('p');
    legalLinks.className = 'text-center mt-2';
    legalLinks.innerHTML = '<a href="/legal" class="hover:underline mr-4">Legal Notice</a> | <a href="/privacy" class="hover:underline ml-4">Privacy Notice</a>';
    
    // Create build info
    const buildInfo = document.createElement('p');
    buildInfo.className = 'text-center text-xs mt-2 text-slate-500 dark:text-slate-400';
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    buildInfo.innerHTML = 'Build: ' + dateStr;
    
    // Insert after copyright
    const copyright = footer.querySelector('p.powered-by.text-center');
    if (copyright) {
      footer.insertBefore(legalLinks, copyright.nextSibling);
      footer.insertBefore(buildInfo, copyright.nextSibling);
    } else {
      footer.appendChild(legalLinks);
      footer.appendChild(buildInfo);
    }
  });
})();


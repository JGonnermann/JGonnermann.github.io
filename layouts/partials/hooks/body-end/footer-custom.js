<script>
(function() {
  // Find the existing footer
  const footer = document.querySelector('.page-footer footer');
  if (!footer) return;
  
  // Create the legal links container
  const legalLinks = document.createElement('div');
  legalLinks.className = 'text-center mb-2';
  legalLinks.innerHTML = '<a href="/legal" class="hover:underline mr-4">Legal Notice</a> | <a href="/privacy" class="hover:underline ml-4">Privacy Notice</a>';
  
  // Create build info
  const buildInfo = document.createElement('p');
  buildInfo.className = 'text-center text-xs mt-2 text-slate-500 dark:text-slate-400';
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  buildInfo.innerHTML = `Build: ${dateStr}`;
  
  // Insert legal links before the copyright notice
  const copyright = footer.querySelector('p.powered-by');
  if (copyright && copyright.nextSibling) {
    footer.insertBefore(legalLinks, copyright);
  }
  
  // Insert build info at the end
  footer.appendChild(buildInfo);
})();
</script>


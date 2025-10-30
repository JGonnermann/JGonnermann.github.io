(function() {
  document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('.page-footer footer');
    if (!footer) return;
    
    // Create a single line footer
    const customFooter = document.createElement('div');
    customFooter.className = 'text-center text-sm mb-4';
    
    // Get current date
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    // Build the footer content
    customFooter.innerHTML = 
      '© Jana Gonnermann-Müller | Last modified: ' + dateStr + ' | ' +
      '<a href="/privacy" class="hover:underline">Privacy Notice</a> | ' +
      '<a href="/legal" class="hover:underline">Legal Notice</a>';
    
    // Replace the entire footer content
    footer.innerHTML = '';
    footer.appendChild(customFooter);
  });
})();

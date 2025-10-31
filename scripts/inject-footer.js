#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Inject custom footer content into HTML files
 * This script adds Legal Notice link and last modified date to the footer
 */

const publicDir = path.join(__dirname, '..', 'public');

// Read footer JavaScript template
const footerScript = `(function() {
  const footer = document.querySelector('.page-footer footer');
  if (!footer) return;
  
  // Get current date
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  
  // Find Privacy Notice link and add Legal Notice after it
  const privacyLink = footer.querySelector('a[href="/privacy/"]');
  if (privacyLink && privacyLink.parentNode) {
    const legalLink = document.createElement('a');
    legalLink.href = '/legal';
    legalLink.className = 'hover:underline';
    legalLink.textContent = 'Legal Notice';
    
    // Insert separator and legal link after privacy
    privacyLink.parentNode.insertBefore(document.createTextNode(' | '), privacyLink.nextSibling);
    privacyLink.parentNode.insertBefore(legalLink, privacyLink.nextSibling.nextSibling);
  }
  
  // Add last modified date to copyright
  const copyright = footer.querySelector('p.powered-by.text-center');
  if (copyright) {
    const innerText = copyright.innerText || copyright.textContent || '';
    if (!innerText.includes('Last modified')) {
      copyright.innerHTML = copyright.innerHTML.replace(
        /(© \\d{4}.*?)(<\\/p>)/,
        '$1 | Last modified: ' + dateStr + '$2'
      );
    }
  }
})();`;

function injectFooterIntoHTML(htmlContent) {
  // Check if footer script is already injected
  if (htmlContent.includes('Legal Notice') && htmlContent.includes('Last modified:')) {
    return htmlContent;
  }
  
  // Find the closing </body> tag
  const bodyEndIndex = htmlContent.lastIndexOf('</body>');
  if (bodyEndIndex === -1) {
    return htmlContent;
  }
  
  // Inject the script before </body>
  const scriptTag = `<script>${footerScript}</script>`;
  return htmlContent.slice(0, bodyEndIndex) + scriptTag + htmlContent.slice(bodyEndIndex);
}

function processHTMLFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processHTMLFiles(fullPath);
    } else if (file.endsWith('.html')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        const modified = injectFooterIntoHTML(content);
        if (content !== modified) {
          fs.writeFileSync(fullPath, modified, 'utf8');
          console.log(`Injected footer script into: ${fullPath}`);
        }
      } catch (err) {
        console.error(`Error processing ${fullPath}:`, err.message);
      }
    }
  }
}

// Main execution
console.log('Injecting footer scripts into HTML files...');
processHTMLFiles(publicDir);
console.log('Footer injection complete!');


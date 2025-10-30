#!/bin/bash
# Script to generate legal and privacy pages from config files

# Load YAML file and extract values
# This is a simple approach - for production, consider using yq or similar tools

# Generate Legal Notice
cat > content/legal/index.md << 'EOF'
---
title: Legal Notice
date: 2025-01-20
type: page
---

## Impressum / Legal Notice

{{< legal-section >}}

EOF

# Generate Privacy Notice
cat > content/privacy/index.md << 'EOF'
---
title: Privacy Notice
date: 2025-01-20
type: page
---

## Privacy Policy / Datenschutzerklärung

{{< privacy-section >}}

EOF

echo "Legal pages generated. Please update content manually or use Hugo shortcodes."


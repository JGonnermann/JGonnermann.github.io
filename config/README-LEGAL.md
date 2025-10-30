# Legal and Privacy Configuration

This directory contains configuration files for legal and privacy information.

## Files

- `legal.yaml` - Configuration for the Legal Notice / Impressum
- `privacy.yaml` - Configuration for the Privacy Policy / Datenschutzerklärung

## How to Update

These config files serve as a central place to manage your legal information. To update the legal or privacy pages:

1. Edit the appropriate YAML file in `config/`
2. Manually update the corresponding markdown file in `content/legal/index.md` or `content/privacy/index.md`
3. The config files make it easier to keep track of all legal information in one place

## Configuration Structure

### legal.yaml

Contains:
- Contact information (name, email, address)
- Organization details
- Liability disclaimers
- Last updated date

### privacy.yaml

Contains:
- Data controller information
- Data collection practices
- Server log information
- Third-party services
- User rights
- Compliance information

## Example Usage

After updating `legal.yaml` or `privacy.yaml`, copy the relevant information to the markdown files:

```markdown
**Name:** {{ value from legal.yaml }}
**Email:** {{ email from legal.yaml }}
```

The config files serve as a documentation/reference, making it easier to maintain consistent legal information across different documents.


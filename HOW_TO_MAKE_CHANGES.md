# How to Make Changes - Simple Guide

This guide explains the easiest ways to make common changes to the edunest.co website.

## 📝 Quick Start

### 1. **Change Text Content (Easiest Method)**

All text content is stored in translation files. This is the **simplest way** to update content:

**Location:** `src/translations/`
- `es.js` - Spanish text
- `en.js` - English text

**How to change text:**
1. Open `src/translations/es.js` for Spanish or `src/translations/en.js` for English
2. Find the section you want to change (e.g., `hero`, `services`, `about`, `contact`)
3. Edit the text directly
4. Save the file
5. The changes will appear automatically in development mode

**Example - Change Hero Banner Text:**
```javascript
// In src/translations/es.js or en.js
hero: {
  mainHeading: 'YOUR NEW TEXT HERE',
  description: 'Your new description here',
  // ...
}
```

### 2. **Change Menu Items**

**Location:** `src/components/Menu.jsx`

**To hide/show menu items:**
- Comment out (add `/* */` around) the `<li>` element you want to hide
- Uncomment to show it again

**To change menu order:**
- Move the `<li>` elements up or down in the file

**Example:**
```jsx
{/* Hidden menu item
<li>
  <Link to={getLocalizedPath('/portfolio')}>
    {t('nav.portfolio')}
  </Link>
</li>
*/}
```

### 3. **Change Images**

**Location:** `public/assets/img/`

**To replace an image:**
1. Place your new image in `public/assets/img/`
2. Update the image path in the component or translation file
3. Keep the same filename OR update all references to the new filename

**Common image locations:**
- Hero banner images: Referenced in `src/components/HeroBanner.jsx`
- Service images: In `public/assets/img/services/`
- Portfolio images: In `public/assets/img/portfolio/`

### 4. **Change Portfolio Items**

**Location:** `src/data/portfolioData.js`

**To add/edit portfolio items:**
1. Open `src/data/portfolioData.js`
2. Add or modify objects in the array
3. Each item has: `title`, `description`, `image`, `category`, etc.

### 5. **Change Colors/Styles**

**Location:** `public/assets/css/main.css`

**To change colors:**
1. Search for color codes (e.g., `#e3a127` for the gold color)
2. Replace with your desired color
3. Or search for CSS classes and modify them

**Common color codes in this project:**
- Gold/Orange: `#e3a127`
- Gray: `#6c757d`
- Dark: Various shades

### 6. **Change Contact Information**

**Location:** `src/translations/es.js` and `src/translations/en.js`

**Find the `contact` section:**
```javascript
contact: {
  address: 'Your address here',
  contactPerson: 'Contact person name',
  // ...
}
```

### 7. **Add/Remove Navigation Items**

**Location:** `src/components/Menu.jsx`

**Steps:**
1. Copy an existing menu item (`<li>`)
2. Modify the `to` path and text
3. Add the translation key to `src/translations/es.js` and `en.js` under `nav`

### 8. **Change Page Content**

Most page content comes from translation files. Check:
- `src/translations/es.js` - Spanish content
- `src/translations/en.js` - English content

**Page-specific sections:**
- `hero` - Hero banner
- `about` - About section
- `services` - Services/Solutions
- `steps` - Process steps
- `faq` - FAQ section
- `contact` - Contact section
- `personajes3d` - 3D Avatars page

## 🔄 Development Workflow

### Making Changes:

1. **Start development server:**
   ```bash
   npm start
   ```
   This runs the app at `http://localhost:3000` and auto-refreshes when you save changes.

2. **Edit files:**
   - Make your changes in the files mentioned above
   - Save the file
   - Browser will automatically refresh

3. **Test both languages:**
   - Visit `http://localhost:3000/es/` for Spanish
   - Visit `http://localhost:3000/en/` for English
   - Use the language selector in the header to switch

### Building for Production:

```bash
npm run build
```

This creates an optimized version in the `build/` folder.

## 📁 File Structure Quick Reference

```
src/
├── translations/        ← ALL TEXT CONTENT (Easiest to edit)
│   ├── es.js          ← Spanish
│   └── en.js          ← English
├── components/         ← UI Components
│   ├── Menu.jsx       ← Navigation menu
│   └── HeroBanner.jsx ← Hero section
├── pages/             ← Page components
└── data/              ← Data files (portfolio, etc.)

public/
└── assets/
    ├── img/          ← Images
    └── css/          ← Styles
```

## ✅ Best Practices

1. **Always update both languages** (`es.js` and `en.js`) when changing text
2. **Use translation files** instead of hardcoding text in components
3. **Test changes** in both Spanish and English
4. **Keep image filenames consistent** or update all references
5. **Comment out** instead of deleting when hiding items (easier to restore)

## 🆘 Common Tasks

### Hide a menu item:
→ Edit `src/components/Menu.jsx`, comment out the `<li>` element

### Change a button text:
→ Edit `src/translations/es.js` and `en.js`, find the section (e.g., `hero.ctaButton`)

### Change page title:
→ Edit `src/translations/es.js` and `en.js`, find the relevant section

### Add a new section:
→ Add translations to `es.js` and `en.js`, then reference them in the component using `t('your.key.here')`

### Change logo:
→ Replace `public/assets/img/edunest-dark.svg` and `edunest-light.svg`

## 💡 Pro Tips

- **Search in files:** Use your editor's search to find where text appears
- **Translation keys:** Use the dot notation like `hero.mainHeading` to find translations
- **Component files:** Most components use `t('key')` to get translations - search for the key in translation files
- **Images:** Keep original images in `public/assets/img/` - they're automatically available

---

**Need help?** Check the component files - they show which translation keys they use (e.g., `t('hero.mainHeading')` means look for `hero.mainHeading` in translation files).


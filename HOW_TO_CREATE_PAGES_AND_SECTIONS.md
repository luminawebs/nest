# How to Create New Pages and Sections - Simple Guide

This guide shows you the **simplest way** to create new pages and sections in the edunest.co website.

## 🎯 Quick Overview

**Creating a new page requires 3 simple steps:**
1. Create the page component file
2. Add the route in `LanguageRouter.js`
3. Add translations (optional but recommended)

**Creating a new section requires 2 simple steps:**
1. Add the section to a page component
2. Add translations for the section content

---

## 📄 Creating a New Page

### Step 1: Create the Page Component

Create a new file in `src/pages/` with a simple template:

**Example: `src/pages/MyNewPage.jsx`**

```jsx
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

const MyNewPage = () => {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLanguage();

  return (
    <main className="main">
      <section id="hero" className="hero section">
        <div className="container">
          <h1>{t('myNewPage.title')}</h1>
          <p>{t('myNewPage.description')}</p>
        </div>
      </section>
    </main>
  );
};

export default MyNewPage;
```

**Or use MinimalistLayout for a simpler page:**

```jsx
import React from 'react';
import MinimalistLayout from '../components/MinimalistLayout';
import { useTranslation } from '../hooks/useTranslation';

const MyNewPage = () => {
  const { t } = useTranslation();

  return (
    <MinimalistLayout title={t('myNewPage.title')}>
      <section className="page-content">
        <div className="container">
          <h1>{t('myNewPage.title')}</h1>
          <p>{t('myNewPage.description')}</p>
        </div>
      </section>
    </MinimalistLayout>
  );
};

export default MyNewPage;
```

### Step 2: Add the Route

Open `src/components/LanguageRouter.js` and add:

1. **Import the page (at the top):**
```jsx
const MyNewPage = lazy(() => import('../pages/MyNewPage'));
```

2. **Add the route (in the Routes section):**
```jsx
<Route path="/my-new-page" element={<MyNewPage />} />
```

**Full example in LanguageRouter.js:**
```jsx
// At the top with other imports
const MyNewPage = lazy(() => import('../pages/MyNewPage'));

// In the Routes section
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/my-new-page" element={<MyNewPage />} />
  {/* ... other routes */}
</Routes>
```

### Step 3: Add Translations (Optional but Recommended)

Add translations to both language files:

**In `src/translations/es.js`:**
```javascript
export const es = {
  // ... existing translations
  myNewPage: {
    title: 'Mi Nueva Página',
    description: 'Descripción de la nueva página'
  }
};
```

**In `src/translations/en.js`:**
```javascript
export const en = {
  // ... existing translations
  myNewPage: {
    title: 'My New Page',
    description: 'Description of the new page'
  }
};
```

### Step 4: Add to Menu (Optional)

To add a link in the navigation menu, edit `src/components/Menu.jsx`:

```jsx
<li>
  <Link
    to={getLocalizedPath('/my-new-page')}
    onClick={() => handleNavItemClick('My New Page', 'main_navigation')}
  >
    {t('nav.myNewPage')}
  </Link>
</li>
```

And add the translation:
```javascript
// In translations files
nav: {
  // ... existing nav items
  myNewPage: 'Mi Nueva Página' // Spanish
  myNewPage: 'My New Page'      // English
}
```

**That's it!** Your new page is now accessible at:
- `/es/my-new-page` (Spanish)
- `/en/my-new-page` (English)

---

## 🧩 Creating a New Section

### Option 1: Add Section to Existing Page (Simplest)

**Example: Adding a "Testimonials" section to HomePage**

1. **Open `src/pages/HomePage.jsx`**

2. **Add the section before the closing `</main>` tag:**
```jsx
{/* Testimonials Section */}
<section id="testimonials" className="testimonials section">
  <div className="container section-title" data-aos="fade-up">
    <h2>{t('testimonials.title')}</h2>
    <div>
      <span>{t('testimonials.subtitle')}</span>
    </div>
  </div>
  
  <div className="container" data-aos="fade-up" data-aos-delay="100">
    <div className="row">
      <div className="col-lg-12">
        <p>{t('testimonials.description')}</p>
        {/* Add your content here */}
      </div>
    </div>
  </div>
</section>
```

3. **Add translations in `src/translations/es.js` and `en.js`:**
```javascript
testimonials: {
  title: 'Testimonios',
  subtitle: 'Lo que dicen nuestros clientes',
  description: 'Descripción de testimonios...'
}
```

### Option 2: Create a Reusable Section Component

1. **Create `src/components/TestimonialsSection.jsx`:**
```jsx
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const TestimonialsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>{t('testimonials.title')}</h2>
      </div>
      
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-12">
            <p>{t('testimonials.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
```

2. **Import and use it in any page:**
```jsx
import TestimonialsSection from '../components/TestimonialsSection';

// In your page component:
<TestimonialsSection />
```

---

## 📋 Page Templates

### Simple Page Template

```jsx
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

const SimplePage = () => {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLanguage();

  return (
    <main className="main">
      <section id="hero" className="hero section">
        <div className="container">
          <h1>{t('simplePage.title')}</h1>
          <p>{t('simplePage.description')}</p>
        </div>
      </section>
    </main>
  );
};

export default SimplePage;
```

### Page with Multiple Sections Template

```jsx
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const MultiSectionPage = () => {
  const { t } = useTranslation();

  return (
    <main className="main">
      {/* Section 1 */}
      <section id="section1" className="section">
        <div className="container">
          <h2>{t('multiSection.section1.title')}</h2>
          <p>{t('multiSection.section1.content')}</p>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section2" className="section">
        <div className="container">
          <h2>{t('multiSection.section2.title')}</h2>
          <p>{t('multiSection.section2.content')}</p>
        </div>
      </section>
    </main>
  );
};

export default MultiSectionPage;
```

### Minimalist Page Template (No Header/Footer)

```jsx
import React from 'react';
import MinimalistLayout from '../components/MinimalistLayout';
import { useTranslation } from '../hooks/useTranslation';

const MinimalistPage = () => {
  const { t } = useTranslation();

  return (
    <MinimalistLayout title={t('minimalistPage.title')}>
      <section className="page-content">
        <div className="container">
          <h1>{t('minimalistPage.title')}</h1>
          <p>{t('minimalistPage.description')}</p>
        </div>
      </section>
    </MinimalistLayout>
  );
};

export default MinimalistPage;
```

---

## 🎨 Section Templates

### Basic Section Template

```jsx
<section id="my-section" className="my-section section">
  <div className="container section-title" data-aos="fade-up">
    <h2>{t('mySection.title')}</h2>
    <div>
      <span>{t('mySection.subtitle')}</span>
    </div>
  </div>
  
  <div className="container" data-aos="fade-up" data-aos-delay="100">
    <div className="row">
      <div className="col-lg-12">
        <p>{t('mySection.content')}</p>
      </div>
    </div>
  </div>
</section>
```

### Section with Cards Template

```jsx
<section id="cards-section" className="cards-section section">
  <div className="container section-title" data-aos="fade-up">
    <h2>{t('cardsSection.title')}</h2>
  </div>
  
  <div className="container" data-aos="fade-up" data-aos-delay="100">
    <div className="row">
      {[1, 2, 3].map((item, index) => (
        <div key={index} className="col-lg-4 col-md-6">
          <div className="card">
            <h3>{t(`cardsSection.card${index + 1}.title`)}</h3>
            <p>{t(`cardsSection.card${index + 1}.description`)}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

## ✅ Checklist for New Pages

- [ ] Created page component in `src/pages/`
- [ ] Added import in `src/components/LanguageRouter.js`
- [ ] Added route in `src/components/LanguageRouter.js`
- [ ] Added translations in `src/translations/es.js`
- [ ] Added translations in `src/translations/en.js`
- [ ] (Optional) Added menu item in `src/components/Menu.jsx`
- [ ] Tested in both languages (`/es/` and `/en/`)

---

## ✅ Checklist for New Sections

- [ ] Added section to page component OR created reusable component
- [ ] Added translations in `src/translations/es.js`
- [ ] Added translations in `src/translations/en.js`
- [ ] Added unique `id` attribute for anchor links
- [ ] Tested in both languages

---

## 🚀 Quick Start Examples

### Example 1: Create "About Us" Page

1. **Create `src/pages/AboutPage.jsx`:**
```jsx
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <main className="main">
      <section className="hero section">
        <div className="container">
          <h1>{t('aboutPage.title')}</h1>
          <p>{t('aboutPage.description')}</p>
        </div>
      </section>
    </main>
  );
};
export default AboutPage;
```

2. **Add to `LanguageRouter.js`:**
```jsx
const AboutPage = lazy(() => import('../pages/AboutPage'));
// ... in Routes:
<Route path="/about" element={<AboutPage />} />
```

3. **Add translations:**
```javascript
// es.js and en.js
aboutPage: {
  title: 'Sobre Nosotros' / 'About Us',
  description: '...'
}
```

### Example 2: Add "Team" Section to HomePage

1. **Add to `src/pages/HomePage.jsx` before `</main>`:**
```jsx
<section id="team" className="team section">
  <div className="container">
    <h2>{t('team.title')}</h2>
    <p>{t('team.description')}</p>
  </div>
</section>
```

2. **Add translations:**
```javascript
team: {
  title: 'Nuestro Equipo' / 'Our Team',
  description: '...'
}
```

---

## 💡 Pro Tips

1. **Always use translations** - Don't hardcode text, use `t('key')` instead
2. **Use existing components** - Check `src/components/` for reusable components
3. **Follow naming conventions** - Use kebab-case for routes (`/my-new-page`)
4. **Test both languages** - Always check `/es/` and `/en/` versions
5. **Use MinimalistLayout** - For simple pages without header/footer
6. **Add unique IDs** - For sections that need anchor links (`#section-id`)

---

## 📁 File Structure Reference

```
src/
├── pages/              ← Create new pages here
│   ├── HomePage.jsx
│   ├── MyNewPage.jsx   ← Your new page
│   └── ...
├── components/         ← Reusable components
│   ├── LanguageRouter.js  ← Add routes here
│   └── ...
└── translations/       ← Add translations here
    ├── es.js          ← Spanish
    └── en.js          ← English
```

---

**That's it!** You now know the simplest way to create pages and sections. Start with the templates above and customize as needed.


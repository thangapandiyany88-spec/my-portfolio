# Thanga Pandiyan — Personal Developer Portfolio Website

A modern, responsive, dark-mode developer portfolio website for **Thanga Pandiyan**, a B.Tech Artificial Intelligence & Data Science student (2nd Year) at Anand Institute and aspiring Web Developer.

---

## 💻 Tech Stack & Languages

- **HTML5**: Semantic document structure, SEO metadata, Open Graph tags, accessible ARIA attributes.
- **CSS3**: Custom design tokens, glassmorphism (`backdrop-filter: blur()`), flexbox & grid responsive layouts, smooth hover transitions, CSS keyframe animations, `@media` responsive queries.
- **JavaScript (Vanilla ES6+)**: Interactive sticky navbar, mobile navigation drawer, scroll progress bar, intersection observers for active nav highlighting & scroll reveal animations, contact form validation & Web Gmail compose integration.
- **Third-Party Libraries & Assets**:
  - [Google Fonts](https://fonts.google.com): `Inter` (sans-serif) & `Fira Code` (monospace).
  - [Font Awesome 6.5](https://fontawesome.com): Scalable vector icons.
  - Custom SVG Favicon (`assets/favicon/favicon.svg`).

---

## 📁 Project Folder & File Guide

Below is the complete breakdown of every file and folder in this project:

```
c:\thanga pandiyan\
│
├── 📄 index.html                       # 🏠 MAIN WEBSITE FILE
│                                       # Contains the HTML5 code for all 10 sections:
│                                       # Navbar, Hero, About, Skills, Projects, Education,
│                                       # Certifications, Resume, Contact, and Footer.
│
├── 📁 css/                             # 🎨 STYLING & DESIGN FOLDER
│   └── 📄 style.css                    # Master stylesheet containing:
│                                       # - Dark theme color palette & CSS variables
│                                       # - Glassmorphism blur card styles
│                                       # - Responsive Flexbox & Grid layouts
│                                       # - Smooth hover & keyframe animations
│                                       # - Mobile responsive media queries (@media)
│
├── 📁 js/                              # ⚡ JAVASCRIPT LOGIC FOLDER
│   └── 📄 script.js                    # Interactive logic containing:
│                                       # - Central PORTFOLIO_CONFIG (GitHub URL & Email)
│                                       # - Sticky navigation header behavior
│                                       # - Mobile hamburger menu drawer toggle
│                                       # - Scroll progress bar & active nav highlighting
│                                       # - Contact form validation & Gmail compose opener
│                                       # - Dynamic copyright year generator
│
└── 📁 assets/                          # 📦 MEDIA & DOCUMENTS FOLDER
    ├── 📁 favicon/                     # Browser Tab Icons
    │   └── 📄 favicon.svg              # Custom glowing 'TP' logo icon for browser tab
    │
    ├── 📁 resume/                      # Resume Documents
    │   └── 📄 Thanga_Pandiyan_Resume.pdf # Your Resume PDF file (viewable/downloadable)
    │
    └── 📁 certificates/                # Course Certificates
        ├── 📄 python.pdf               # Python Certificate PDF document
        ├── 📄 c.pdf                    # C Certificate PDF document
        └── 📄 cpp.pdf                  # C++ Certificate PDF document
```

---

## ✨ Features & Included Sections

1. **Navigation Bar**: Sticky blur header, logo `THANGA PANDIYAN`, smooth scroll navigation, mobile hamburger drawer, and `Let's Connect` CTA.
2. **Hero / Home**: Headline `Hi, I'm Thanga Pandiyan`, subtitle `Web Developer`, developer terminal box element (`thangapandiyan.js`), floating tech badges, `View My Projects`, `Download Resume`, and `GitHub` links.
3. **About Me**: Narrative intro, quick facts card (Name, Role, Course, Year, College).
4. **Skills**: Categorized into **Programming Languages** (Python, C, C++), **Web Development** (HTML5, CSS3, JavaScript), and **Tools** (Basic Development Tools) formatted as glass badges.
5. **Projects**: Cards for **Student Hub** & **MentorHub** (*Peer-to-Peer Academic Mentoring & Doubt Clearing Hub*) with tech tags and action buttons.
6. **Education**: Timeline card for **B.Tech AI & Data Science** at **Anand Institute** (2nd Year).
7. **Certifications**: Professional cards for **Python**, **C**, and **C++** linking directly to PDF documents.
8. **Resume**: Dedicated callout section with `View Resume` and `Download Resume` buttons.
9. **Contact Section**: Email (`thangapandiyany88@gmail.com`), GitHub (`thangapandiyany88-spec`), interactive contact form with instant Web Gmail compose opening & email copy buttons.
10. **Footer**: Dynamic year copyright (`© 2026 Thanga Pandiyan`), quick social links, and floating back-to-top button.

---

## 🚀 Running Locally

1. Open your terminal in the project directory:
   ```bash
   cd "c:\thanga pandiyan"
   ```
2. Start a local HTTP web server:
   ```bash
   python -m http.server 8080
   ```
3. Open your browser and navigate to:
   [http://localhost:8080](http://localhost:8080)

---

## 🌐 How to Host This Website (Free)

### Method 1: GitHub Pages (Recommended)

1. Open your terminal in the project folder:
   ```bash
   cd "c:\thanga pandiyan"
   ```
2. Initialize Git, commit files, and connect to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio website"
   git branch -M main
   git remote add origin https://github.com/thangapandiyany88-spec/my-portfolio.git
   git push -u origin main
   ```
3. Enable GitHub Pages on GitHub:
   - Go to your repository page: [https://github.com/thangapandiyany88-spec/my-portfolio](https://github.com/thangapandiyany88-spec/my-portfolio)
   - Go to **Settings** > **Pages** (on the left sidebar).
   - Under **Build and deployment** > **Branch**, select `main` > click **Save**.
4. Your website will automatically go live at:
   👉 **`https://thangapandiyany88-spec.github.io/my-portfolio/`**

---

### Method 2: Netlify (Drag & Drop)

1. Create a free account at [Netlify.com](https://www.netlify.com).
2. Go to **Sites** > **Add new site** > **Deploy manually**.
3. Drag and drop the `c:\thanga pandiyan` folder directly into the browser.
4. Your website will instantly be live with a URL like `https://thangapandiyan.netlify.app`.

---

## 👤 Author & Contact

- **Name**: Thanga Pandiyan
- **Role**: Web Developer & B.Tech AI-DS Student (2nd Year)
- **College**: Anand Institute
- **Email**: [thangapandiyany88@gmail.com](mailto:thangapandiyany88@gmail.com)
- **GitHub**: [thangapandiyany88-spec](https://github.com/thangapandiyany88-spec)

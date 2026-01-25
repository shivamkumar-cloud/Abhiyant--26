# Abhiyant '26 - NCC Fest Website 🌟

![NCC Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/National_Cadet_Corps_India.svg/1200px-National_Cadet_Corps_India.svg.png)

## 📋 Project Overview

A modern, interactive, and responsive website for **Abhiyant '26** - The premier National Cadet Corps (NCC) Fest of Pusa Institute of Technology. This website showcases the spirit of NCC with a theme-based design, interactive features, and comprehensive information about the fest.

**Live Demo:** [https://abhiyant-26.vercel.app](https://abhiyant-26.vercel.app) *(Note: Replace with your actual deployment URL)*

---

## ✨ Features

### 🎨 Design & Theme
- **NCC Themed Design**: Uses official NCC colors (Navy Blue, Dark Blue, Red, Gold)
- **Responsive Layout**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean interface with smooth animations and transitions
- **NCC Flag Bookmark**: Styled NCC flag element below the navbar

### 🚀 Interactive Elements
- **Auto-sliding Galleries**: Multiple image galleries with 2-second auto-slide intervals
- **Events Slider**: Interactive events showcase with manual/auto controls
- **Rank Panel**: Animated officer cards with hover effects and details
- **Smooth Navigation**: Single-page navigation with smooth scrolling
- **Mobile-Friendly Menu**: Hamburger menu for mobile devices

### 📱 Sections
1. **Hero Section** - Eye-catching introduction with call-to-action
2. **About NCC** - Information about NCC and college unit with image gallery
3. **Rank Panel** - Display of Senior/Junior Under Officers with photos
4. **Events Section** - All 10 Abhiyant '26 events in interactive slider
5. **Gallery** - Photo gallery of NCC activities
6. **Contact** - Contact information and social links
7. **Footer** - Complete footer with credits and links

---

## 👥 Rank Panel Officers

### Senior Under Officers
1. **Satyam** - Battalion Leader & Gold Medalist
2. **Arpit Rawat** - Adjutant & Best Cadet

### Junior Under Officers
3. **Shivam Kumar** - Web Team Incharge & Developer
4. **Gaurav** - Logistics Head & Operations

---

## 🗓️ Abhiyant '26 Events (25th February 2026)

1. Guards Of Honour
2. Squad Drill
3. Best Cadet
4. Extempore Competition
5. Flag Area
6. Volleyball
7. Tug of War
8. Cultural Event
9. Tent Pitching
10. Photography & Videography

---

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript (ES6)** - Interactive features and sliders
- **Font Awesome** - Icon library
- **Google Fonts** - Typography (Montserrat, Oswald)

### Deployment
- **Vercel** - Recommended hosting platform
- **GitHub Pages** - Alternative deployment option

---

## 📁 Project Structure

```
abhiyant-26-website/
│
├── index.html          # Main HTML file
├── style.css          # All CSS styles
├── script.js          # JavaScript functionality
│
├── images/            # Image assets (create this folder)
│   ├── ncc-logo.png
│   ├── cadets/
│   │   ├── satyam.jpg
│   │   ├── arpit.jpg
│   │   ├── shivam.jpg
│   │   └── gaurav.jpg
│   └── events/
│       ├── drill.jpg
│       └── ...
│
└── README.md          # This documentation file
```

---

## 🚀 Quick Start Guide

### Option 1: Local Setup
1. **Clone or download** the project files
2. **Create an `images` folder** in the project directory
3. **Add your images** to the images folder
4. **Open `index.html`** in any modern web browser
5. **Replace placeholder images** with your actual NCC photos

### Option 2: Deploy on Vercel (Recommended)
1. **Sign up** at [vercel.com](https://vercel.com) (free)
2. **Click "New Project"**
3. **Drag & drop** your project folder
4. **Click "Deploy"** - Your site goes live instantly!

### Option 3: Deploy on GitHub Pages
1. **Create a GitHub repository**
2. **Upload all project files**
3. **Go to Settings → Pages**
4. **Select main branch** as source
5. **Save** - Your site will be at `username.github.io/repo-name`

---

## 🎯 Customization Guide

### 1. Replace Images
```html
<!-- In index.html, replace: -->
<img src="https://unsplash.com/..." alt="Placeholder">

<!-- With your images: -->
<img src="images/your-photo.jpg" alt="Description">
```

### 2. Update Colors
In `style.css`, modify these CSS variables:
```css
:root {
    --ncc-navy: #000080;      /* Change navy blue */
    --ncc-darkblue: #000050;  /* Change dark blue */
    --ncc-red: #8B0000;       /* Change red */
    --ncc-gold: #FFD700;      /* Change gold */
}
```

### 3. Update Content
- **Officer Information**: Update names and details in Rank Panel section
- **Event Details**: Modify event descriptions in Events section
- **Contact Info**: Update contact details in Footer
- **Dates/Times**: Update event dates and timings

---

## 📱 Responsive Breakpoints

| Device | Breakpoint | Features |
|--------|------------|----------|
| Mobile | < 480px | Hamburger menu, stacked layout |
| Tablet | 480px - 768px | Two-column layouts, adjusted spacing |
| Desktop | > 768px | Full layouts, hover effects |

---

## 🔧 JavaScript Functions

### Core Functions:
1. **`updateGallery()`** - Controls the About NCC image slider
2. **`initEventsSlider()`** - Manages the events carousel
3. **`initSimpleRankPanel()`** - Handles rank card animations
4. **Smooth Scrolling** - For navigation links
5. **Mobile Menu Toggle** - Hamburger menu functionality

### Auto-Slide Intervals:
- **About Gallery**: 2 seconds
- **Events Slider**: 2 seconds (with pause/play controls)

---

## 🎨 Design Principles

1. **NCC Identity** - Strict adherence to NCC colors and ethos
2. **Military Precision** - Clean, organized, disciplined layout
3. **Patriotic Elements** - Indian and NCC flags incorporated
4. **Unity & Discipline** - Theme reflected throughout design

---

## 📞 Contact & Support

### Project Developer
**Junior Under Officer Shivam Kumar**  
NCC PIT Unit, Pusa Institute of Technology

### Contact Information
- **Email**: ncc.pit@example.com *(Replace with actual email)*
- **Instagram**: [@pit_ncc](https://instagram.com/pit_ncc)
- **College**: Pusa Institute of Technology, New Delhi

---

## 📝 License & Credits

### License
© 2024 - 2026 ABHIYANT '26 NCC Fest, Pusa Institute of Technology. All Rights Reserved.

### Credits
- **Design & Development**: Junior Under Officer Shivam Kumar
- **Content**: NCC PIT Unit
- **Images**: NCC Archives & Unsplash (for placeholders)
- **Icons**: Font Awesome
- **Fonts**: Google Fonts

### Acknowledgments
- National Cadet Corps, India
- Pusa Institute of Technology Administration
- All NCC Cadets and Officers
- Web Development Team

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Images not loading | Check image paths in HTML |
| Sliders not working | Ensure JavaScript is enabled in browser |
| Mobile menu not opening | Check console for JavaScript errors |
| Layout broken on mobile | Clear browser cache and reload |
| Slow loading | Compress images before uploading |

---

## 🔄 Updates & Maintenance

### Regular Updates Needed:
1. **Event Dates** - Update for each year's fest
2. **Officer Information** - Update rank panel annually
3. **Gallery Images** - Add new photos after events
4. **Contact Information** - Keep updated

### Version History:
- **v1.0** (Current): Initial release with all core features
- **Future Updates**: Registration system, live updates, more interactivity

---

## 🤝 Contributing

While this is primarily a college project, suggestions are welcome:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

---

## 🌐 Social Media Integration

### Ready for Integration:
- Instagram: `@pit_ncc`
- YouTube: Add channel link
- Facebook: Add page link
- Email: `ncc.pit@example.com`

### Hashtags for Promotion:
- `#Abhiyant26`
- `#NCCPIT`
- `#NCCFest`
- `#PusaInstitute`

---

**JAI HIND! 🇮🇳**  
*Unity & Discipline - The NCC Motto*

---
*Last Updated: November 2024*  
*Project Status: Active & Maintained*
# Quick Testing Guide - Responsive Design

## 🚀 Quick Start

```bash
npm run dev
```
Then open: **http://localhost:5174**

---

## 📱 Test Viewports (Using Browser DevTools)

### How to Open DevTools:
- **Windows/Linux**: Press `F12`
- **Mac**: Press `Cmd + Option + I`

### Test These Sizes:

| Device | Width | Height | What to Check |
|--------|-------|--------|---|
| iPhone SE | 375px | 667px | Mobile nav, single column cards |
| Android | 540px | 720px | Spacing, button sizes |
| iPad | 768px | 1024px | 2-column grids, balanced layout |
| iPad Pro | 1024px | 1366px | Full navigation, 3-column layout |
| Desktop | 1440px | 900px | Complete layout, all features |

---

## ✅ Quick Checklist

### Mobile (375px)
- [ ] Hamburger menu visible and clickable
- [ ] Page width fits without scrolling horizontally
- [ ] Text is large enough to read easily
- [ ] Buttons are full-width and easy to tap
- [ ] Cards stack vertically (1 per row)

### Tablet (768px)
- [ ] Navigation menu expanded or visible
- [ ] Cards display 2 per row
- [ ] Good balance of padding and content
- [ ] Images clear and appropriately sized

### Desktop (1440px)
- [ ] Full navigation visible
- [ ] Cards in 3-4 column layout where applicable
- [ ] Adequate whitespace
- [ ] All hover effects work smoothly

---

## 🔍 What to Look For

### ✓ Good Signs:
- No horizontal scrollbar on any size
- Text readable without zooming
- Buttons/links clearly clickable (44px+ on mobile)
- Images properly scaled
- Layouts adapt smoothly at different sizes
- No content cutoff or overlap

### ✗ Red Flags:
- Horizontal scrollbar present
- Text too small to read
- Buttons hard to click
- Images distorted or too large
- Layout breaks at certain widths
- Content overlapping

---

## 🛠️ Testing Pages

**Homepage**: `/`
- Check grid layouts at different sizes
- Verify category cards responsive

**About**: `/about`
- Test services grid responsive behavior
- Check image sizes

**Contact**: `/contact`
- Verify form inputs responsive
- Test map iframe sizing

**Categories**:
- `/groceries` - Test bulk sections
- `/beverage` - Check category layouts
- `/personalCare` - Verify grid responsiveness
- `/homeCare` - Test card stacking
- `/agro` - Check typography scaling
- `/starch` - Test spacing
- `/processedFruits` - Verify full responsiveness

---

## 🎯 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Text too small | Browser zoom or check font-size clamp values |
| Cards don't wrap | Check grid media queries at 900px, 640px |
| Buttons hard to tap | Should be full-width on mobile (640px breakpoint) |
| Overflow on mobile | Check padding and margin clamp values |
| Images distorted | Verify object-fit is set correctly |

---

## 💡 Key Responsive Features

1. **Typography Scaling**: Uses `clamp()` for smooth font scaling
2. **Responsive Grids**: Auto-fit columns that wrap naturally
3. **Mobile Navigation**: Hamburger menu on small screens
4. **Flexible Spacing**: Padding/margins scale with viewport
5. **Touch Targets**: Buttons 44px+ on mobile
6. **Image Scaling**: Max-width 100%, height auto

---

## 📊 Breakpoint Quick Reference

```css
/* Single column, mobile optimized */
@media (max-width: 480px) { ... }

/* 2-column layouts begin */
@media (max-width: 640px) { ... }

/* Tablet landscape */
@media (max-width: 768px) { ... }

/* 2-3 column layout changes */
@media (max-width: 900px) { ... }

/* Full desktop layout */
@media (min-width: 1440px) { ... }
```

---

## 🎨 Font Scaling Examples

All fonts use `clamp(min, scalar, max)`:

```css
h1: clamp(1.9rem, 2vw + 1.4rem, 3rem)
h2: clamp(1.5rem, 1.6vw + 1rem, 2.3rem)
h3: clamp(1.2rem, 1vw + 0.8rem, 1.6rem)
body: clamp(15px, 1.1vw + 12px, 18px)
```

This means fonts grow smoothly as viewport widens, without jarring size changes.

---

## ⚡ Performance Tips

- Keep DevTools open while testing to spot layout shifts
- Test on slow network (DevTools throttling)
- Check Performance tab for repaints/reflows
- Mobile-first approach = better mobile performance

---

## 📸 Screenshot Testing

Try taking screenshots at different viewport sizes:
- 375px - Mobile
- 768px - Tablet
- 1440px - Desktop

Save and compare to see layout changes.

---

## 🔄 If Something Looks Wrong

1. **Clear Cache**: Ctrl+Shift+Delete (or Cmd+Shift+Delete on Mac)
2. **Hard Reload**: Ctrl+Shift+R (or Cmd+Shift+R)
3. **Check DevTools Console**: Look for any CSS/JS errors
4. **Test in Incognito Mode**: Rules out extensions interfering

---

## 🎉 You're All Set!

Your website is fully responsive. Enjoy testing! 🚀

---

**Still need help?**
- Check RESPONSIVE_DESIGN_READY.md for full details
- Review responsive-utils.css for patterns
- Reference RESPONSIVE_DESIGN_COMPLETE.md for technical info

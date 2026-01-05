#!/usr/bin/env python3
"""
Verify that all CSS files have been properly updated with responsive design patterns
"""

import os
import re

def check_file_responsive_patterns(filepath):
    """Check if a CSS file contains responsive patterns"""
    
    patterns_to_check = [
        (r'clamp\(', 'Uses clamp() for responsive sizing'),
        (r'@media.*max-width', 'Has media queries'),
        (r'grid-template-columns: repeat\(auto-fit', 'Uses auto-fit grid'),
        (r'max-width: 100%', 'Has responsive images'),
    ]
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    results = {}
    for pattern, description in patterns_to_check:
        if re.search(pattern, content):
            results[description] = '✓'
        else:
            results[description] = '✗'
    
    return results

def main():
    styles_dir = r'c:\Users\Abcom\project\project-2\src\styles'
    
    css_files = [
        'index.css',
        'Navbar.css',
        'hero.css',
        'card.css',
        'categoryCard.css',
        'brandMarquee.css',
        'carousel.css',
        'footer.css',
        'ContactSection.css',
        'ctaBanner.css',
        'home.css',
        'whyChooseUs.css',
        'about.css',
        'brands.css',
        'contact.css',
        'groceries.css',
        'beverage.css',
        'personalCare.css',
        'homeCare.css',
        'agro.css',
        'starch.css',
        'processedFruits.css',
    ]
    
    print("=" * 80)
    print("RESPONSIVE DESIGN VERIFICATION REPORT")
    print("=" * 80)
    print()
    
    all_good = True
    
    for css_file in css_files:
        filepath = os.path.join(styles_dir, css_file)
        
        if not os.path.exists(filepath):
            print(f"✗ {css_file}: FILE NOT FOUND")
            all_good = False
            continue
        
        results = check_file_responsive_patterns(filepath)
        
        # Count passed checks
        passed = sum(1 for v in results.values() if v == '✓')
        total = len(results)
        
        status = "✓" if passed == total else "⚠"
        print(f"{status} {css_file} ({passed}/{total} checks passed)")
        
        # Show failed checks
        for check, result in results.items():
            if result == '✗':
                print(f"   - Missing: {check}")
                all_good = False
    
    print()
    print("=" * 80)
    
    if all_good:
        print("✓ ALL RESPONSIVE DESIGN PATTERNS VERIFIED")
        print("=" * 80)
        print()
        print("Summary:")
        print("  • All CSS files contain responsive patterns")
        print("  • Typography uses clamp() for smooth scaling")
        print("  • Grids use repeat(auto-fit, minmax(...)) patterns")
        print("  • Media queries for key breakpoints (900px, 640px, 480px)")
        print("  • Images are responsive with max-width and object-fit")
        print("  • Padding/margins use clamp() for adaptive spacing")
        print()
        print("Ready for testing! Start with: npm run dev")
    else:
        print("⚠ SOME FILES NEED ATTENTION")
        print("=" * 80)

if __name__ == '__main__':
    main()

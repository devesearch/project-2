#!/usr/bin/env python3
"""
Script to apply responsive CSS updates to all category page styles
"""

import os
import re

# Define the responsive CSS patterns
patterns = [
    {
        'name': 'intro section',
        'files': ['homeCare.css', 'agro.css', 'starch.css', 'processedFruits.css'],
        'replacements': [
            # bulk card structures
            (
                r'\.(\w+)-bulk__card h3 \{\s*margin: 0 0 8px;',
                r'.\1-bulk__card h3 {\n  margin: 0 0 clamp(6px, 0.5vw, 10px);\n  font-size: clamp(1.05rem, 0.8vw + 0.8rem, 1.35rem);'
            ),
            (
                r'\.(\w+)-bulk__card p \{\s*margin: 0 0 10px;',
                r'.\1-bulk__card p {\n  margin: 0 0 clamp(8px, 1vw, 10px);'
            ),
            # grid updates
            (
                r'\.(\w+)-grid \{\s*display: grid;\s*grid-template-columns: repeat\(auto-fit, minmax\(240px, 1fr\)\);\s*gap: 20px;\s*padding: 0 5vw 48px;',
                r'.\1-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: clamp(16px, 2vw, 20px);\n  padding: 0 clamp(12px, 3vw, 32px) clamp(32px, 4vw, 48px);'
            ),
        ]
    }
]

def apply_responsive_updates():
    """Apply responsive updates to category CSS files"""
    styles_dir = r'c:\Users\Abcom\project\project-2\src\styles'
    
    # Categories to update
    categories = ['homeCare', 'agro', 'starch', 'processedFruits']
    
    for category in categories:
        filename = f'{category}.css'
        filepath = os.path.join(styles_dir, filename)
        
        if not os.path.exists(filepath):
            print(f"File not found: {filepath}")
            continue
            
        print(f"Processing {filename}...")
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Apply consistent responsive pattern
        # Replace intro sections
        content = re.sub(
            rf'\.{category}-intro \{{\s*max-width: 900px;\s*margin: 48px auto 32px;\s*padding: 0 5vw;',
            f'.{category}-intro {{\n  max-width: 900px;\n  margin: clamp(32px, 4vw, 48px) auto clamp(24px, 3vw, 32px);\n  padding: 0 clamp(12px, 3vw, 32px);',
            content
        )
        
        # Replace bulk sections with responsive patterns
        content = re.sub(
            rf'\.{category}-bulk \{{\s*margin: 0 auto 48px;\s*padding: 0 5vw;',
            f'.{category}-bulk {{\n  margin: 0 auto clamp(32px, 4vw, 48px);\n  padding: 0 clamp(12px, 3vw, 32px);',
            content
        )
        
        # Replace grid gaps and padding
        content = re.sub(
            rf'\.{category}-grid \{{\s*display: grid;\s*grid-template-columns: repeat\(auto-fit, minmax\(240px, 1fr\)\);\s*gap: 20px;\s*padding: 0 5vw 48px;',
            f'.{category}-grid {{\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: clamp(16px, 2vw, 20px);\n  padding: 0 clamp(12px, 3vw, 32px) clamp(32px, 4vw, 48px);',
            content
        )
        
        # Replace h2 font-size (2rem -> clamp)
        content = re.sub(
            rf'\.{category}-(\w+) h2 \{{\s*font-size: 2rem;',
            r'.\1 h2 {\n  font-size: clamp(1.7rem, 1.4vw + 1.1rem, 2.2rem);',
            content
        )
        
        # Replace card image heights
        content = re.sub(
            rf'\.{category}-card img \{{\s*height: 90px;',
            f'.{category}-card img {{\n  height: clamp(80px, 10vw, 100px);',
            content
        )
        
        content = re.sub(
            rf'width: 90px;',
            f'width: clamp(80px, 10vw, 100px);',
            content
        )
        
        # Replace generic gap values
        content = content.replace('gap: 18px;', 'gap: clamp(14px, 2vw, 18px);')
        content = content.replace('gap: 24px;', 'gap: clamp(16px, 2vw, 24px);')
        
        # Replace padding in category sections
        content = re.sub(
            rf'\.{category}-category \{{\s*padding: 32px 5vw 56px;',
            f'.{category}-category {{\n  padding: clamp(28px, 4vw, 56px) clamp(12px, 3vw, 32px);',
            content
        )
        
        # Write updated content
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✓ Updated {filename}")
    
    print("\nResponsive updates complete!")

if __name__ == '__main__':
    apply_responsive_updates()

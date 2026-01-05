#!/usr/bin/env python3
"""
Complete responsive CSS finalization for all category pages
"""

import os
import re

def add_responsive_media_queries(category, content):
    """Add comprehensive responsive media queries to category CSS"""
    
    # Define the responsive media queries pattern
    media_queries = f"""
@media (max-width: 900px) {{
  .{category}-grid {{
    grid-template-columns: repeat(2, 1fr);
  }}
}}

@media (max-width: 640px) {{
  .{category}-grid {{
    grid-template-columns: 1fr;
  }}

  .{category}-intro {{
    font-size: clamp(0.92rem, 0.3vw + 0.8rem, 1rem);
    margin: clamp(28px, 3vw, 40px) auto clamp(20px, 2vw, 24px);
  }}

  .{category}-category h2,
  .{category}-brands h2 {{
    font-size: clamp(1.4rem, 1vw + 0.9rem, 1.8rem);
  }}
  
  .{category}-bulk__button {{
    width: 100%;
    display: block;
  }}
}}

@media (max-width: 480px) {{
  .{category}-bulk {{
    gap: clamp(12px, 1.5vw, 16px);
  }}

  .{category}-bulk__cards {{
    gap: clamp(12px, 1.5vw, 14px);
  }}

  .{category}-grid {{
    gap: clamp(12px, 1.5vw, 16px);
  }}

  .bullet-grid {{
    gap: clamp(4px, 0.8vw, 6px) clamp(8px, 1.5vw, 12px);
  }}
}}
"""
    
    # Remove old media queries if they exist
    content = re.sub(r'@media \(max-width: 600px\) \{[^}]*\}', '', content)
    
    # Append new media queries
    return content + media_queries

def update_card_styles(category, content):
    """Update card images and add hover effects"""
    
    # Fix card image heights
    content = re.sub(
        rf'\.{category}-card img \{{\s*height: 90px;',
        f'.{category}-card img {{\n  height: clamp(80px, 10vw, 100px);',
        content
    )
    
    # Add hover effect if not present
    if '.{category}-card:hover' not in content:
        content = re.sub(
            rf'(\.{category}-card \{{[^}}]*box-shadow: [^;]+;)',
            rf'\1\n  transition: transform 200ms ease, box-shadow 200ms ease;\n}}\n\n.{category}-card:hover {{\n  transform: translateY(-4px);\n  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.08);',
            content
        )
    
    # Update category section padding
    content = re.sub(
        rf'\.{category}-category \{{\s*padding: (.*?);',
        rf'.\1-category {{\n  padding: clamp(28px, 4vw, 56px) clamp(12px, 3vw, 32px);',
        content
    )
    
    # Update brands section padding
    content = re.sub(
        rf'\.{category}-brands \{{\s*padding: 12px 0 64px;',
        rf'.{category}-brands {{\n  padding: clamp(12px, 2vw, 16px) 0 clamp(48px, 6vw, 64px);',
        content
    )
    
    return content

def finalize_category_css(filepath, category):
    """Finalize all responsive CSS for a category"""
    
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return False
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update typography for consistency
    content = content.replace('font-size: 1.05rem;', 'font-size: clamp(0.95rem, 0.4vw + 0.8rem, 1.15rem);')
    content = content.replace('margin: 18px auto 0;', 'margin: clamp(14px, 2vw, 18px) auto 0;')
    
    # Fix h2 sizes
    content = re.sub(
        rf'\.{category}-(\w+) h2 \{{\s*font-size: 2rem;',
        rf'.\1 h2 {{\n  font-size: clamp(1.7rem, 1.4vw + 1.1rem, 2.2rem);',
        content
    )
    
    # Update categories h2
    content = re.sub(
        rf'\.{category}-category h2,\s*\.{category}-brands h2 \{{\s*font-size: 2rem;',
        rf'.{category}-category h2,\n.{category}-brands h2 {{\n  font-size: clamp(1.7rem, 1.4vw + 1.1rem, 2.2rem);',
        content
    )
    
    # Update margin-bottom for h2
    content = re.sub(
        rf'\.{category}-category h2,\s*\.{category}-brands h2 \{{\s*font-size: clamp\([^)]+\);\s*margin-bottom: 18px;',
        rf'.{category}-category h2,\n.{category}-brands h2 {{\n  font-size: clamp(1.7rem, 1.4vw + 1.1rem, 2.2rem);\n  margin-bottom: clamp(14px, 2vw, 18px);',
        content
    )
    
    # Update card styles
    content = update_card_styles(category, content)
    
    # Add responsive media queries
    content = add_responsive_media_queries(category, content)
    
    # Write updated content
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True

def main():
    styles_dir = r'c:\Users\Abcom\project\project-2\src\styles'
    categories = [
        ('homeCare', 'homeCare.css'),
        ('agro', 'agro.css'),
        ('starch', 'starch.css'),
        ('processedFruits', 'processedFruits.css'),
    ]
    
    for cat_name, filename in categories:
        filepath = os.path.join(styles_dir, filename)
        print(f"Finalizing {filename}...")
        if finalize_category_css(filepath, cat_name):
            print(f"✓ {filename} finalized")
        else:
            print(f"✗ Failed to process {filename}")
    
    print("\nAll category CSS files finalized!")

if __name__ == '__main__':
    main()

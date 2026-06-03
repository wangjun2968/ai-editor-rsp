const fs = require('fs');
const path = require('path');

const categories = [
  { slug: 'ai-photo-editor', name: 'AI Photo Editor', desc: 'Free AI photo editor online. Remove backgrounds, enhance images, apply AI filters.' },
  { slug: 'capcut-templates', name: 'CapCut Templates', desc: 'Free CapCut templates for Reels and TikTok. Copy trending template links.' },
  { slug: 'background-remover', name: 'Background Remover', desc: 'Remove image backgrounds for free with AI. Create transparent PNGs.' },
  { slug: 'festival-photo-editing', name: 'Festival Photo Editing', desc: 'Free festival photo editing with AI. Diwali, Holi, Christmas themes.' },
  { slug: 'trending-reels-editing', name: 'Trending Reels Editing', desc: 'Free trending reels editing tools. Create viral Instagram Reels.' },
  { slug: 'aesthetic-photo-editing', name: 'Aesthetic Photo Editing', desc: 'Free aesthetic photo editing with AI. Moody, vintage, film effects.' },
  { slug: 'wedding-photo-editing', name: 'Wedding Photo Editing', desc: 'Free wedding photo editing with AI. Retouch bridal portraits.' },
  { slug: 'vintage-photo-editing', name: 'Vintage Photo Editing', desc: 'Free vintage photo editing with AI. 90s, VHS, polaroid effects.' },
];

const tools = [
  { slug: 'ai-background-remover', name: 'AI Background Remover', desc: 'Remove image backgrounds automatically with AI.' },
  { slug: 'ai-photo-enhancer', name: 'AI Photo Enhancer', desc: 'Enhance photo quality with AI. Upscale images.' },
  { slug: 'ai-face-swap', name: 'AI Face Swap', desc: 'Swap faces in photos with AI.' },
  { slug: 'ai-cartoon-maker', name: 'AI Cartoon Maker', desc: 'Convert photos to cartoons with AI.' },
  { slug: 'trending-capcut-templates', name: 'Trending CapCut Templates', desc: 'Latest trending CapCut templates for viral Reels.' },
  { slug: 'lyrics-capcut-templates', name: 'Lyrics CapCut Templates', desc: 'CapCut templates with lyrics for song edits.' },
  { slug: '3d-zoom-capcut', name: '3D Zoom CapCut Template', desc: '3D zoom CapCut templates for viral video effects.' },
  { slug: 'velocity-capcut', name: 'Velocity Edit Templates', desc: 'Velocity edit CapCut templates with beat sync.' },
  { slug: 'instant-bg-remover', name: 'Instant Background Remover', desc: 'Remove backgrounds instantly with AI.' },
  { slug: 'product-bg-remover', name: 'Product Photo Background Remover', desc: 'Remove backgrounds from product photos.' },
  { slug: 'portrait-bg-remover', name: 'Portrait Background Remover', desc: 'Remove backgrounds from portraits and selfies.' },
  { slug: 'batch-bg-remover', name: 'Batch Background Remover', desc: 'Remove backgrounds from multiple images in batch.' },
  { slug: 'diwali-photo-editor', name: 'Diwali Photo Editor', desc: 'Edit photos for Diwali with AI effects.' },
  { slug: 'holi-photo-editor', name: 'Holi Photo Editor', desc: 'Edit photos for Holi with color effects.' },
  { slug: 'christmas-photo-editor', name: 'Christmas Photo Editor', desc: 'Edit photos for Christmas with snow effects.' },
  { slug: 'new-year-photo-editor', name: 'New Year Photo Editor', desc: 'Edit photos for New Year celebrations.' },
  { slug: 'reels-template-maker', name: 'Reels Template Maker', desc: 'Create custom Instagram Reels templates.' },
  { slug: 'text-animation-reels', name: 'Text Animation for Reels', desc: 'Add text animations to Instagram Reels.' },
  { slug: 'transition-effects', name: 'Reels Transition Effects', desc: 'Free transition effects for Instagram Reels.' },
  { slug: 'reels-cover-maker', name: 'Reels Cover Maker', desc: 'Create eye-catching Instagram Reels covers.' },
  { slug: 'moody-photo-editor', name: 'Moody Photo Editor', desc: 'Create moody and cinematic photos with AI.' },
  { slug: 'film-photo-effect', name: 'Film Photo Effect', desc: 'Apply film effects to photos.' },
  { slug: 'pastel-photo-editor', name: 'Pastel Photo Editor', desc: 'Create pastel aesthetic photos with AI.' },
  { slug: 'aesthetic-preset-maker', name: 'Aesthetic Preset Maker', desc: 'Create custom aesthetic presets for photos.' },
  { slug: 'bridal-retouch', name: 'Bridal Retouch AI', desc: 'Professional bridal portrait retouching with AI.' },
  { slug: 'wedding-color-enhancer', name: 'Wedding Color Enhancer', desc: 'Enhance wedding photo colors with AI.' },
  { slug: 'wedding-album-maker', name: 'Wedding Album Maker', desc: 'Create wedding photo albums with AI.' },
  { slug: 'couple-photo-editor', name: 'Couple Photo Editor', desc: 'Edit couple and pre-wedding photos with AI.' },
  { slug: 'retro-90s-filter', name: 'Retro 90s Filter', desc: 'Apply 90s photo filters with AI.' },
  { slug: 'vhs-photo-effect', name: 'VHS Photo Effect', desc: 'Create VHS-style photos with AI.' },
  { slug: 'polaroid-maker', name: 'Polaroid Photo Maker', desc: 'Create polaroid-style photos with AI.' },
  { slug: 'old-photo-restorer', name: 'Old Photo Restorer', desc: 'Restore old photos with AI.' },
];

function generateHTML(title, desc, canonical) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="${desc}" />
  <title>${title}</title>
  <link rel="canonical" href="${canonical}" />
  <script type="text/javascript">
    // Hash Router redirect for SEO static pages
    var path = window.location.pathname;
    var hashPath = path.replace(/^\\/ai-editor-rsp\\//, '/').replace(/^\\//, '');
    if (hashPath && !window.location.hash) {
      window.location.replace('./#' + hashPath);
    }
  </script>
</head>
<body>
  <p>Loading <a href="./">AI Editor RSP</a>...</p>
</body>
</html>`;
}

const distDir = path.join(__dirname, '..', 'dist');

// Generate category pages
for (const cat of categories) {
  const dir = path.join(distDir, 'category', cat.slug);
  fs.mkdirSync(dir, { recursive: true });
  const html = generateHTML(
    `${cat.name} — Free AI Editor | AI Editor RSP`,
    cat.desc,
    `https://rspeditor.in/category/${cat.slug}`
  );
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}

// Generate tool pages
for (const tool of tools) {
  const dir = path.join(distDir, 'tool', tool.slug);
  fs.mkdirSync(dir, { recursive: true });
  const html = generateHTML(
    `${tool.name} — Free AI Tool | AI Editor RSP`,
    tool.desc,
    `https://rspeditor.in/tool/${tool.slug}`
  );
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}

console.log('Static HTML files generated successfully!');
console.log(`- ${categories.length} category pages`);
console.log(`- ${tools.length} tool pages`);

import fs from 'fs';
import path from 'path';
import { optimize } from 'svgo';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Convert kebab-case to PascalCase
function kebabToPascal(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// SVGO configuration
const svgoConfig = {
  plugins: [
    'preset-default',
    {
      name: 'removeViewBox',
      active: false,
    },
    {
      name: 'removeDimensions',
      active: true,
    },
  ],
};

// Generate React component from SVG
function generateComponent(svgContent, componentName) {
  // Optimize SVG
  const result = optimize(svgContent, svgoConfig);
  const optimizedSvg = result.data;
  
  // Extract SVG attributes and content
  const svgMatch = optimizedSvg.match(/<svg([^>]*)>(.*?)<\/svg>/s);
  if (!svgMatch) {
    throw new Error(`Invalid SVG format for ${componentName}`);
  }
  
  const [, attributes, content] = svgMatch;
  
  // Clean up attributes and add React-specific ones
  let cleanAttributes = attributes
    .replace(/width="[^"]*"/g, '')
    .replace(/height="[^"]*"/g, '')
    .replace(/class="/g, 'className="')
    .replace(/fill="none"/g, '')
    .replace(/xmlns="[^"]*"/g, '')
    .trim();
  
  if (!cleanAttributes.includes('viewBox')) {
    cleanAttributes += ' viewBox="0 0 24 24"';
  }
  
  return `import React from 'react';

export interface ${componentName}Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const ${componentName}: React.FC<${componentName}Props> = ({ 
  size = 24, 
  color = 'currentColor',
  ...props 
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    ${cleanAttributes}
    {...props}
  >
    ${content}
  </svg>
);

${componentName}.displayName = '${componentName}';
`;
}

// Main generation function
function generateIcons() {
  const iconsDir = path.join(__dirname, '../icons');
  const srcDir = path.join(__dirname, '../src');
  const componentsDir = path.join(srcDir, 'components');
  
  // Create directories
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }
  
  // Read all SVG files
  const svgFiles = fs.readdirSync(iconsDir).filter(file => file.endsWith('.svg'));
  
  if (svgFiles.length === 0) {
    console.log('No SVG files found in icons directory');
    return;
  }
  
  const exports = [];
  
  svgFiles.forEach(file => {
    const filePath = path.join(iconsDir, file);
    const svgContent = fs.readFileSync(filePath, 'utf8');
    const baseName = path.basename(file, '.svg');
    const componentName = kebabToPascal(baseName);
    
    try {
      const componentCode = generateComponent(svgContent, componentName);
      const componentPath = path.join(componentsDir, `${componentName}.tsx`);
      
      fs.writeFileSync(componentPath, componentCode);
      exports.push(`export { ${componentName} } from './components/${componentName}';`);
      
      console.log(`✓ Generated ${componentName} from ${file}`);
    } catch (error) {
      console.error(`✗ Failed to generate ${componentName}:`, error.message);
    }
  });
  
  // Create components index file
  const componentsIndexContent = exports.map(exp => {
    const componentName = exp.match(/export { (\w+) }/)[1];
    return `export { ${componentName}, type ${componentName}Props } from './${componentName}';`;
  }).join('\n');
  
  fs.writeFileSync(path.join(componentsDir, 'index.ts'), componentsIndexContent);
  
  // Generate main index file
  const indexContent = `// Auto-generated icon exports
${exports.join('\n')}

// Re-export all types
export type { ${exports.map(exp => exp.match(/export { (\w+) }/)[1] + 'Props').join(', ')} } from './components';
`;
  
  fs.writeFileSync(path.join(srcDir, 'index.ts'), indexContent);
  
  console.log(`\n🎉 Generated ${exports.length} icon components!`);
}

// Run the generator
try {
  generateIcons();
} catch (error) {
  console.error('Error generating icons:', error);
  process.exit(1);
}
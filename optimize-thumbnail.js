import sharp from 'sharp';

async function optimizeThumbnail() {
  const inputPath = 'public/images/video-thumbnail-original.jpg';
  
  try {
    console.log('🔄 Optimizing YouTube thumbnail...');
    
    // Thumbnail pequeño para móviles (380x214 - exacto para 378x213 display)
    await sharp(inputPath)
      .resize(380, 214, { 
        fit: 'cover',
        position: 'center'
      })
      .webp({ 
        quality: 85,
        effort: 6 
      })
      .toFile('public/images/video-thumbnail-small.webp');
    
    console.log('✅ Created small thumbnail: 380x214 WebP');
    
    // Thumbnail mediano para tablets (760x428)
    await sharp(inputPath)
      .resize(760, 428, { 
        fit: 'cover',
        position: 'center'
      })
      .webp({ 
        quality: 85,
        effort: 6 
      })
      .toFile('public/images/video-thumbnail-medium.webp');
    
    console.log('✅ Created medium thumbnail: 760x428 WebP');
    
    // Thumbnail grande para desktop (1200x676)
    await sharp(inputPath)
      .resize(1200, 676, { 
        fit: 'cover',
        position: 'center'
      })
      .webp({ 
        quality: 85,
        effort: 6 
      })
      .toFile('public/images/video-thumbnail-large.webp');
    
    console.log('✅ Created large thumbnail: 1200x676 WebP');
    
    // Fallback JPG pequeño
    await sharp(inputPath)
      .resize(380, 214, { 
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ 
        quality: 85,
        progressive: true
      })
      .toFile('public/images/video-thumbnail-small.jpg');
    
    console.log('✅ Created fallback JPG: 380x214');
    
    // Verificar tamaños
    const stats = await Promise.all([
      sharp('public/images/video-thumbnail-original.jpg').metadata(),
      sharp('public/images/video-thumbnail-small.webp').metadata(),
      sharp('public/images/video-thumbnail-medium.webp').metadata(),
      sharp('public/images/video-thumbnail-large.webp').metadata()
    ]);
    
    console.log('\n📊 Size comparison:');
    console.log(`Original: ${stats[0].width}x${stats[0].height}`);
    console.log(`Small: ${stats[1].width}x${stats[1].height}`);
    console.log(`Medium: ${stats[2].width}x${stats[2].height}`);
    console.log(`Large: ${stats[3].width}x${stats[3].height}`);
    
    console.log('\n🎯 Optimization complete!');
    
  } catch (error) {
    console.error('❌ Error optimizing thumbnail:', error);
  }
}

optimizeThumbnail();
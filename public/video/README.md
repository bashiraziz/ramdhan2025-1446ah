# Adding Videos to the Media Gallery

Videos placed in the `/public/images` directory will automatically appear in the Media Gallery.

## How to Add Video Thumbnails

For each video, you can add a thumbnail image that will be displayed in the gallery:

1. **Same name method**: Create an image with the same name as your video but with an image extension
   - Example: For `distribution.mp4`, create `distribution.jpg` or `distribution.png`

2. **Poster naming convention**: Add `-poster` or `-thumbnail` to the filename
   - Example: `distribution-poster.jpg` or `distribution-thumbnail.png`

3. **Automatic fallback**: If no thumbnail is provided, a default placeholder will be used

## Supported Video Formats

- MP4 (.mp4) - Recommended for best browser compatibility
- WebM (.webm) - Good for web optimization
- Ogg (.ogg) - Alternative format

## Tips for Better Videos

- Keep videos short (30-90 seconds) for better user experience
- Compress videos to reduce file size (aim for under 10MB if possible)
- Use 720p resolution (1280×720) for a good balance of quality and file size
- Add descriptive filenames to help with organization
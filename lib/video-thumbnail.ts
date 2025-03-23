/**
 * Creates a URL for a default video thumbnail with customizable text
 * @param videoName The name of the video to display in the thumbnail
 * @returns A URL string for the placeholder image
 */
export function createDefaultVideoThumbnail(videoName: string): string {
    const encodedText = encodeURIComponent(`Video: ${videoName}`)
    return `/api/placeholder?height=400&width=600&text=${encodedText}`
  }  
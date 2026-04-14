export function getVideoId(url: string): string | null {
  // Check for playlist first
  const playlistMatch = url.match(/[?&]list=([^#\&\?]+)/);
  if (playlistMatch && playlistMatch[1]) {
    return playlistMatch[1];
  }

  // Check for standard video or live URL
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|live\/)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length >= 10) {
    return match[2];
  }

  return null;
}

export function isYouTubeUrl(url: string): boolean {
  return getVideoId(url) !== null;
}

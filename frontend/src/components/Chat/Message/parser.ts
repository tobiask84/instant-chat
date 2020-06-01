// https://stackoverflow.com/questions/5830387/how-do-i-find-all-youtube-video-ids-in-a-string-using-a-regex
export const getYoutubeUrls = (string: string): string[] => {
  const re = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gi;
  return string.match(re);
};

// https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
export const extractYoutubeId = (url: string) => {
  const regExp = /.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
};

export const getAllYoutubeIds = (string: string) => {
  let youtubeIds: (string | false)[];
  const youtubeUrls = getYoutubeUrls(string);
  if (youtubeUrls && youtubeUrls.length > 0) {
    youtubeIds = youtubeUrls
      .map((url: string) => extractYoutubeId(url))
      .filter((id) => !!id);
  }
  return youtubeIds;
};

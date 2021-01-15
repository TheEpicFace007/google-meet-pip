"use strict";

(async () =>
{
  console.log(document.POPOUT_ADDON)
  if (!document.POPOUT_ADDON)
  {
    document.POPOUT_ADDON = { video_popouted: undefined };
  }

  for (const video of document.querySelectorAll("video"))
  {
    try
    {
      if (video.style.display == "none")
        continue;
      const videoUser = video.parentElement.parentElement.parentElement.parentElement.innerText.toLowerCase();
      if (videoUser == "vous" || videoUser == "you" || videoUser == "user")
        continue;
        
      document.POPOUT_ADDON.video_popouted = video;
      await video.requestPictureInPicture();
    }
    catch { }
  }
})();

document.querySelectorAll("video").forEach(async (video) =>
{
  try
  {
    await video.requestPictureInPicture();
  }
  catch
  {
  }
})
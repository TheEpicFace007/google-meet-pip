const enablePip = <HTMLButtonElement>document.getElementById("enable-pip");
const disablePip = <HTMLButtonElement>document.getElementById("disable-pip");

enablePip.onclick = (ev) =>
{
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) =>
  {
    if (tabs[0].id)
    {
      chrome.tabs.executeScript(tabs[0].id,
        { file: "enablePopout.js" },
        () => { });
    }
  });
};
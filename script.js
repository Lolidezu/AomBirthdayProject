/*function openVideo(link) {
  var videoContainer = document.getElementById("video-container");
  var videoFrame = document.createElement("iframe");
  videoFrame.src = link.replace("/preview");
  videoFrame.width = "560";
  videoFrame.height = "315";
  videoFrame.allow = "autoplay; fullscreen; picture-in-picture";
  videoFrame.allowFullscreen = true;
  videoFrame.style.border = "none";
  videoContainer.innerHTML = "";
  videoContainer.appendChild(videoFrame);
}

*/
function openVideo(link) {
  var videoContainer = document.getElementById("video-container");
  var videoFrame = document.createElement("iframe");
  if (link.includes('drive.google.com')) {
    link = link.replace("/view", "/preview");
    var fileID = link.match(/\/d\/(.+)\//)[1];
    link = `https://drive.google.com/file/d/${fileID}/preview`;
  }
  videoFrame.src = link;
  videoFrame.width = "560";
  videoFrame.height = "315";
  videoFrame.allow = "autoplay; fullscreen; picture-in-picture";
  videoFrame.allowFullscreen = true;
  videoFrame.style.border = "none";
  videoContainer.innerHTML = "";
  videoContainer.appendChild(videoFrame);
}


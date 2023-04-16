const vid22 = document.createElement('video');
vid22.setAttribute('controls', true);
vid22.setAttribute('style', 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.5); z-index: 9999; width: 960px; height: 540px; opacity: 0; transition: all 0.3s ease; border: 5px solid black;');
vid22.setAttribute('id', 'my-video');

document.querySelectorAll('.part').forEach(part => {
  part.addEventListener('click', () => {
    const partId = parseInt(part.id.replace('part', ''));
    if (partId === -2) {
      if ((vid22.paused)){
        vid22.setAttribute('src', 'https://drive.google.com/uc?export=download&id=1ORmozfzFagbBa-6_WnNyY1yFkYX1aO1_');
        vid22.play();
        document.body.appendChild(vid22);
        setTimeout(() => vid22.style.opacity = 1, 0);
        setTimeout(() => vid22.style.transform = 'translate(-50%, -50%) scale(1)', 0);
      }
      else if ((!vid22.paused)){
        vid22.pause();
        vid22.removeAttribute('src');
        setTimeout(() => vid22.parentNode.removeChild(vid22), 300);
        vid22.style.opacity = 0;
        vid22.style.transform = 'translate(-50%, -50%) scale(0.5)';
      }
    }
    if (partId === -3) {
      if ((vid22.paused)){
        vid22.setAttribute('src', 'https://drive.google.com/uc?export=download&id=1qts73siYcpTO2J73V6g-n_LgUM87N4zr');
        vid22.play();
        document.body.appendChild(vid22);
        setTimeout(() => vid22.style.opacity = 1, 0);
        setTimeout(() => vid22.style.transform = 'translate(-50%, -50%) scale(1)', 0);
      }
      else if ((!vid22.paused)){
        vid22.pause();
        vid22.removeAttribute('src');
        setTimeout(() => vid22.parentNode.removeChild(vid22), 300);
        vid22.style.opacity = 0;
        vid22.style.transform = 'translate(-50%, -50%) scale(0.5)';
      }
      
    }
    if (partId === -1 || partId === -4) {
      vid22.pause();
      vid22.removeAttribute('src');
      setTimeout(() => vid22.parentNode.removeChild(vid22), 300);
      vid22.style.opacity = 0;
      vid22.style.transform = 'translate(-50%, -50%) scale(0.5)';
    }
    

  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && vid22.parentNode) {
    vid22.pause();
    vid22.removeAttribute('src');
    setTimeout(() => vid22.parentNode.removeChild(vid22), 300);
    vid22.style.opacity = 0;
    vid22.style.transform = 'translate(-50%, -50%) scale(0.5)';
  }
});

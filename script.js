const vid22 = document.createElement('video');
vid22.setAttribute('controls', true);
vid22.setAttribute('style', 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 9999; width: 800px; height: 600px;');
vid22.setAttribute('id', 'my-video');

document.querySelectorAll('.part').forEach(part => {
  part.addEventListener('click', () => {
    const partId = parseInt(part.id.replace('part', ''));
    if (partId === -2) {
      vid22.setAttribute('src', 'https://drive.google.com/uc?export=download&id=1ORmozfzFagbBa-6_WnNyY1yFkYX1aO1_');
      vid22.play();
      document.body.appendChild(vid22);
    }
    if (partId === -3) {
      vid22.setAttribute('src', 'https://drive.google.com/uc?export=download&id=1qts73siYcpTO2J73V6g-n_LgUM87N4zr');
      vid22.play();
      document.body.appendChild(vid22);
    }
    if (partId === -1 || partId === -4) {
      vid22.pause();
      vid22.removeAttribute('src');
      vid22.parentNode.removeChild(vid22);
    }
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && vid22.parentNode) {
    vid22.pause();
    vid22.removeAttribute('src');
    vid22.parentNode.removeChild(vid22);
  }
});

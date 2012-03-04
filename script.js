var i, x, idElementsToRemove = ['tools', 'navigator', 'bmp', 'logo', 'bottom'];
for (i=0; i < idElementsToRemove.length; i++) {
  x = document.getElementById(idElementsToRemove[i]);
  x.parentNode.removeChild(x);
};

x = document.getElementsByClassName('close-window-player')[0];
x.parentNode.removeChild(x);

x = document.getElementsByTagName('object');
for (i=0; i < x.length; i++) {
  x[i].setAttribute('height', '100%');
  x[i].setAttribute('width', '100%');
};

x = document.getElementsByTagName('video');
for (i=0; i < x.length; i++) {
  x[i].setAttribute('height', '100%');
  x[i].setAttribute('width', '100%');
};
const markers = document.querySelectorAll('.marker');
markers.forEach(marker => {
      marker.addEventListener('click', () => {
        const currentColor = marker.style.backgroundColor;
        marker.style.backgroundColor = currentColor == 'blue' ? 'red' : 'blue';
    });
});
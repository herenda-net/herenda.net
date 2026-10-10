// CV Page Interactive Helpers: Print handler and photo toggle
(function () {
  var printBtn = document.getElementById('cv-print-btn');
  if (printBtn) {
    printBtn.addEventListener('click', function () {
      window.print();
    });
  }

  var togglePhotoBtn = document.getElementById('cv-toggle-photo-btn');
  if (togglePhotoBtn) {
    togglePhotoBtn.addEventListener('click', function () {
      var isHidden = document.body.classList.toggle('hide-photo');
      togglePhotoBtn.innerHTML = isHidden 
        ? '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> Show Photo'
        : '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="1" y1="1" x2="23" y2="23"></line><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> Hide Photo';
    });
  }
})();

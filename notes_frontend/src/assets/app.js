(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(function () {
    // Header buttons demo interactions
    var searchBtn = document.querySelector('.btn.search');
    var infoBtn = document.querySelector('.btn.info');
    var fab = document.querySelector('.fab');

    if (searchBtn) {
      searchBtn.addEventListener('click', function () {
        // Demo: focus first card title to simulate search jump
        var first = document.querySelector('.card-title');
        if (first) {
          first.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    }

    if (infoBtn) {
      infoBtn.addEventListener('click', function () {
        alert('Notes App - Home Screen\nOcean Professional theme applied.');
      });
    }

    if (fab) {
      fab.addEventListener('click', function () {
        // Demo: add a subtle ripple effect
        var r = document.createElement('span');
        r.style.position = 'absolute';
        r.style.width = '70px';
        r.style.height = '70px';
        r.style.borderRadius = '50%';
        r.style.left = '0';
        r.style.top = '0';
        r.style.background = 'rgba(37,99,235,0.25)'; // primary ripple
        r.style.transform = 'scale(0)';
        r.style.transition = 'transform 300ms ease, opacity 500ms ease';
        fab.appendChild(r);
        requestAnimationFrame(function () {
          r.style.transform = 'scale(1.4)';
          r.style.opacity = '0';
        });
        setTimeout(function () {
          if (r && r.parentNode) r.parentNode.removeChild(r);
        }, 550);
      });
    }
  });
})();

const malmoBtnEl = document.querySelector('.malmo-btn');
const aikBtnEl = document.querySelector('.aik-btn');
const malmoListEl = document.querySelector('.malmo-list');
const showImgEl = document.querySelector('.show-image');
const aikListEl = document.querySelector('.aik-list');

// IIFE.
(function () {
  // Custom Event for Malmö FF
  malmoBtnEl.addEventListener('click', (event) => {
    malmoListEl.classList.remove('hidden');
    const malmoEvent = new CustomEvent('malmoEvent', { detail: malmoBtnEl });
    document.dispatchEvent(malmoEvent);
  });

  //  Custom Event for AIK
  aikBtnEl.addEventListener('click', (event) => {
    aikListEl.classList.remove('hidden');
    const aikEvent = new CustomEvent('aikEvent', {
      detail: aikBtnEl,
    });
    document.dispatchEvent(aikEvent);
  });

  // Event listerners for custom events.
  document.addEventListener('malmoEvent', (event) => {
    malmoBtnEl.classList.add('mff-highlight');
    aikListEl.classList.add('hidden');
    aikBtnEl.classList.remove('aik-highlight');
  });

  document.addEventListener('malmoEvent', (event) => {
    showImgEl.innerHTML =
      '<img class="mff-img" src="./img/mff.png" alt="MFF Logo"/>';
  });

  document.addEventListener('aikEvent', (event) => {
    aikBtnEl.classList.add('aik-highlight');
    malmoListEl.classList.add('hidden');
    malmoBtnEl.classList.remove('mff-highlight');
  });

  document.addEventListener('aikEvent', (event) => {
    showImgEl.innerHTML =
      '<img class="aik-img" src="./img/aik.png" alt="AIK Logo"/>';
  });
})();

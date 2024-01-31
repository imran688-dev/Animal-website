const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const carousel = document.querySelector('.carousel');
const listItem = document.querySelector('.carousel .list');
const thumbnailDom = document.querySelector('.carousel .thumbnail');

nextBtn.onclick = function () {
  showSlider('next');
}

prevBtn.onclick = function () {
  showSlider('prev');
}


let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
  nextBtn.click();
}, timeAutoNext);

function showSlider(type) {
  let itemSlider = document.querySelectorAll('.carousel .list .item');
  let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

  if (type === 'next') {
    listItem.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carousel.classList.add('next');
  } else {
    let positionLastItem = itemSlider.length - 1;
    listItem.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    carousel.classList.add('prev');
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carousel.classList.remove('next');
    carousel.classList.remove('prev');
  }, timeRunning);


  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nextBtn.click();
  }, timeAutoNext);


}
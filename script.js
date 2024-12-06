// mencari class slider
const slider = document.querySelector('.slider');
const list = document.querySelector('.list');
const thumbnail = document.querySelector('.thumbnail');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

// ketika tombol next di klik

next.addEventListener('click', () => {
  initSlider('next');
});
prev.addEventListener('click', () => {
  initSlider('prev');
});

// mencari semua item di dalam list
const initSlider = (type) => {
  const sliderItems = list.querySelectorAll('.item');
  const thumbnailItem = thumbnail.querySelectorAll('.item');

//   memindahkan gambar dan thumbnail ke depan
  if (type === 'next') {
    list.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItem[0]);
    slider.classList.add('next');
  }else {
    const lastItemPosition = sliderItems.length - 1;
    list.prepend(sliderItems[lastItemPosition]);
    thumbnail.prepend(thumbnailItem[lastItemPosition]);
    slider.classList.add('prev');
  }

  // timer 2 detik

setTimeout(() => {
    slider.classList.remove('next');
    slider.classList.remove('prev');
}, 2000);
};

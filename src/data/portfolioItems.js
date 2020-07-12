export default {
  items: [
    {
      label: 'Book of the Month',
      img: '/img/botm_logo.png',
      srcset: '/img/botm_logo_200.png 200w, /img/botm_logo_300.png 300w, /img/botm_logo_400.png 400w, /img/botm_logo_500.png 500w, /img/botm_logo_800.png 800w',
      src: '/img/botm_logo_800.png',
      url: '/portfolio/botm',
      bkgdColor: '#182747',
      textContrast: 'light',
      fullWidth: false,
    },
    {
      label: 'Showtime',
      srcset: '/img/series_logo_200.jpg 200w, /img/series_logo_300.jpg 300w, /img/series_logo_400.jpg 400w, /img/series_logo_500.jpg 500w, /img/series_logo_580.jpg 580w',
      img: '/img/series_logo_580.jpg',
      url: '/portfolio/showtime',
      bkgdColor: '#000000',
      textContrast: 'light',
      fullWidth: false,
    },
    {
      label: 'Personal projects',
      srcset: 'img/relax_200.jpg 200w, img/relax_300.jpg 300w, img/relax_400.jpg 400w, img/relax_500.jpg 500w, img/relax_800.jpg 800w',
      img: 'img/relax_800.jpg',
      url: '/portfolio/personal',
      bkgdColor: '#E5F2D6',
      textContrast: 'dark',
      fullWidth: true,
    }
  ],
};

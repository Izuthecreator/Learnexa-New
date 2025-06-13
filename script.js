// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelectorAll('.courses-card').forEach(card => {
//       const hoverText = card.querySelector('.hover-text');

//       if (!hoverText) return;

//       hoverText.style.overflow = 'hidden';
//       hoverText.style.maxHeight = '0px';
//       hoverText.style.opacity = '0';
//       hoverText.style.transition = 'max-height 0.6s ease, opacity 0.6s ease';

//       card.addEventListener('mouseenter', () => {
//         const scrollHeight = hoverText.scrollHeight + 'px';
//         hoverText.style.maxHeight = scrollHeight;
//         hoverText.style.opacity = '1';
//       });

//       card.addEventListener('mouseleave', () => {
//         hoverText.style.maxHeight = '0px';
//         hoverText.style.opacity = '0';
//       });
//     });
//   });   
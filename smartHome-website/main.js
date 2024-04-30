const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('.nav__items');

// open nav menu
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})

// close nav menu
closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
})

// show/ hide faqs

// const faqs = document.querySelectorAll('.faq');

// faqs.forEach(faq => {
//     faq.addEventListener('click', () => {
//         faq.classList.toggle('open');
//         // change icon
//         const icon = faq.querySelector('.faq__icon i');
//         if (icon.classList.contains('fa-plus')) {
//             icon.classList.remove('fa-plus');
//             icon.classList.add('fa-minus');
//         } else {
//             icon.classList.remove('fa-minus');
//             icon.classList.add('fa-plus');
//         }
//     });
// });

// show/ hide faqs

// show/ hide faqs
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        // change icon
        const icon = faq.querySelector('.faq__icon');
        icon.textContent = faq.classList.contains('open') ? '-' : '+';
    })
})

// add background style to navbar
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})


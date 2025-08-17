"use strict";

document.addEventListener('DOMContentLoaded', () => {

    const btnUp = document.querySelector('.btn-up');

    if (btnUp) {
        btnUp.addEventListener('click', () => window.scrollTo(0, 0));
    }

    // Modal

    const modal = document.querySelector('.modal');
    const modalBody = document.querySelector('.modal__body');
    const modalOverlay = document.querySelector('.modal__overlay');
    const detailsBtns = document.querySelectorAll('.btn-details');
    const modalCloseBtn = document.querySelector('.modal__close');

    function getScrollbarWidth() {
        return window.innerWidth - document.documentElement.clientWidth;
    }

    function lockScroll() {
        const scrollbarWidth = getScrollbarWidth();
        document.body.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
        document.body.classList.add('scroll-lock');
    }

    function unlockScroll() {
        document.body.classList.remove('scroll-lock');
    }

    function closeModal() {
        if (window.innerWidth < 740) {
                modalBody.classList.add('body-hide');
                setTimeout(function() {
                    modal.classList.remove('modal-show');
                    unlockScroll();
                    modalBody.classList.remove('body-hide');
                }, 550);
            } else {
                modal.classList.remove('modal-show');
                unlockScroll();
            }
    }

    if (modal) {
        detailsBtns.forEach(button => {
            button.addEventListener('click', () => {
                modal.classList.add('modal-show');
                lockScroll();
            });
        });

        modalCloseBtn.addEventListener('click', () => {
            closeModal();
        });

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }



});
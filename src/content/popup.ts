import { createPopper } from '@popperjs/core';

export function createPopup(params: {
    target?: HTMLElement | null;
    message: string;
}) {
    if (!params.target) {
        window.alert(params.message);
        return;
    }

    const popupContainer = document.createElement('div');
    popupContainer.textContent = params.message;
    popupContainer.classList.add('iso8601-local-converter-popup');
    const btnClose = document.createElement('button');
    btnClose.textContent = '🞭';
    btnClose.classList.add('iso8601-local-converter-popup__close');
    btnClose.addEventListener('click', () => {
        popupContainer.remove();
    });
    popupContainer.appendChild(btnClose);
    const arrow = document.createElement('div');
    arrow.classList.add('iso8601-local-converter-popup__arrow');
    arrow.dataset.popperArrow = 'true';
    popupContainer.appendChild(arrow);
    document.body.appendChild(popupContainer);

    createPopper(params.target, popupContainer, {
        placement: 'top',
    });
}

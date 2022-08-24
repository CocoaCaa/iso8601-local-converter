import { createPopup } from './popup';

export function convertAndPopupDateTime(params: { text?: string }) {
    const selection = document.getSelection();
    if (!selection?.anchorNode) {
        return;
    }
    const selectedElement = selection.anchorNode;
    if (!selectedElement.textContent) {
        return;
    }
    const selectedParent = selection.anchorNode.parentElement;
    const selectedText = params.text ?? selectedElement.textContent;
    const isIsoDate = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(selectedText);
    if (!isIsoDate) {
        createPopup({
            target: selectedParent,
            message: 'Cannot get date/time from element',
        });
        return;
    }

    const isIncludedTimezone = /(\+|-)\d{2}:\d{2}/.test(selectedText);
    const convertedDate = new Date(
        `${selectedText}${!isIncludedTimezone ? '+00:00' : ''}`,
    );

    if (isNaN(convertedDate.getTime())) {
        createPopup({
            target: selectedParent,
            message: 'Cannot get date/time from element',
        });
        return;
    }

    createPopup({
        target: selectedParent,
        message: convertedDate.toString(),
    });
}

import { CONTEXT_MENU_ID_CONVERT_LOCAL_DATETIME } from '../common';
import { convertAndPopupDateTime } from './convert-datetime';

chrome.runtime.onMessage.addListener(function (
    request: { command?: string; selectionText?: string },
    sender,
    sendResponse,
) {
    if (request?.command !== CONTEXT_MENU_ID_CONVERT_LOCAL_DATETIME) {
        return;
    }

    convertAndPopupDateTime({ text: request.selectionText });
});

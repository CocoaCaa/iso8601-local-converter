import { CONTEXT_MENU_ID_CONVERT_LOCAL_DATETIME } from './common';

chrome.contextMenus.create({
    id: CONTEXT_MENU_ID_CONVERT_LOCAL_DATETIME,
    title: 'Convert to local date/time',
    contexts: ['page', 'selection'],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
        case CONTEXT_MENU_ID_CONVERT_LOCAL_DATETIME:
            if (tab?.id) {
                chrome.tabs.sendMessage(tab.id, {
                    command: CONTEXT_MENU_ID_CONVERT_LOCAL_DATETIME,
                    selectionText: info.selectionText,
                });
            }
            break;
    }
});

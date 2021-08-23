import {browser, by, element} from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get('https://kbx11.urchinsys.com:8008/') as Promise<any>;
    }

    getTitleText() {
        return element(by.css('body > div.dx-overlay-wrapper.dx-popup-wrapper.dx-overlay-modal.dx-overlay-shader > div > div.dx-popup-content > div > div:nth-child(1)'))
            .getText() as Promise<string>;
    }

    getOkButton() {
        return element(by.css('body > div.dx-overlay-wrapper.dx-popup-wrapper.dx-overlay-modal.dx-overlay-shader > div > div.dx-popup-content > div > div:nth-child(2) > dx-button'));
    }

    getArrButton() {
        return element(by.css('#app-wrapper > app-data-grid > div.temp > div'));
    }

    getInp() {
        return element(by.css('#gridContainer > div > div.dx-datagrid-header-panel > div > div > div.dx-toolbar-before > div:nth-child(1) > div > div > div > div > div.dx-texteditor-input-container > input'))
            .getText();
    }
}

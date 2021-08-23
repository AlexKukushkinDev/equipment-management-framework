import {AppPage} from './app.po';
import {browser, logging, protractor} from 'protractor';

describe('workspace-project App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
        browser.manage().timeouts().implicitlyWait(20000);
    });

    it('should display welcome message', (done) => {
        page.navigateTo().then(() => {
            const until = protractor.ExpectedConditions;
            browser.wait(until.presenceOf(page.getOkButton()), 10000, 'Element taking too long to appear in the DOM');
            page.getOkButton().click();
            // browser.driver.findElement();
            expect(page.getArrButton().isPresent()).toBe(true);
            done();
        });
        // browser.executeScript('window.localStorage.setItem("token", "00D2a0000008ygc!ARUAQD6nal89ZJvkN79L0vv4yE0lYX0NFCZqM9_O5V.oByeCncmyFpAgIiyqkmeM4lmtU.rWcRAvrsW6BUx0QlgpoJB0YeLJ")');
        // browser.executeScript('window.location.reload()');
        // browser.pause();

    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        // const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        // expect(logs).not.toContain(jasmine.objectContaining({
        //     level: logging.Level.SEVERE,
        // } as logging.Entry));
    });
});

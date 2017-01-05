import { browser, element, by } from 'protractor';

export class Angular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('Practice-root h1')).getText();
  }
}

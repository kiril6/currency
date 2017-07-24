import { IntercoopAngularPage } from './app.po';

describe('intercoop-angular App', () => {
  let page: IntercoopAngularPage;

  beforeEach(() => {
    page = new IntercoopAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

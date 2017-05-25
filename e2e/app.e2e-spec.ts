import { BiginnerAppPage } from './app.po';

describe('biginner-app App', () => {
  let page: BiginnerAppPage;

  beforeEach(() => {
    page = new BiginnerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

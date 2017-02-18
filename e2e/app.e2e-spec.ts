import { KwickieAppTaskaPage } from './app.po';

describe('kwickie-app-taska App', function() {
  let page: KwickieAppTaskaPage;

  beforeEach(() => {
    page = new KwickieAppTaskaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

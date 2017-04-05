import { EpijumpPage } from './app.po';

describe('epijump App', () => {
  let page: EpijumpPage;

  beforeEach(() => {
    page = new EpijumpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

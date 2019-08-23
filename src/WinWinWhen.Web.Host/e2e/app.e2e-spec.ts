import { WinWinWhenTemplatePage } from './app.po';

describe('WinWinWhen App', function() {
  let page: WinWinWhenTemplatePage;

  beforeEach(() => {
    page = new WinWinWhenTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

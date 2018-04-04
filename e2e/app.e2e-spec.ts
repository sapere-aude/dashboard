import { DbappPage } from './app.po';

describe('dbapp App', () => {
  let page: DbappPage;

  beforeEach(() => {
    page = new DbappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

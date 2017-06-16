import { MovieClientPage } from './app.po';

describe('movie-client App', () => {
  let page: MovieClientPage;

  beforeEach(() => {
    page = new MovieClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { MyacFormsPage } from './app.po';

describe('myac-forms App', function() {
  let page: MyacFormsPage;

  beforeEach(() => {
    page = new MyacFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

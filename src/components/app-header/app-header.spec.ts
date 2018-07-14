import { TestWindow } from '@stencil/core/testing';
import { AppHeader } from './app-header';

const getElement = (html = null) => {
  const testWindow = new TestWindow();

  return testWindow.load({
    components: [AppHeader],
    html: html || '<app-header></app-header>'
  });
};

describe('app-header', () => {
  it('should build', () => {
    expect(new AppHeader()).toBeTruthy();
  });

  describe('rendering', () => {
    it('creates the element', async () => {
      const element = await getElement();

      expect(element).toBeTruthy();
    });

    it('contains header', async () => {
      const element = await getElement();

      expect(element.querySelector('header')).toBeTruthy();
    });

    it('contains passed data', async () => {
      const element = await getElement('<app-header>Example</app-header>');

      expect(element.textContent).toEqual('Example');
    });
  });
});

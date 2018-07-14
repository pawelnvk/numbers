import { TestWindow } from '@stencil/core/testing';
import { AppMain } from './app-main';

const getElement = (html = null) => {
  const testWindow = new TestWindow();

  return testWindow.load({
    components: [AppMain],
    html: html || '<app-main></app-main>'
  });
};

describe('app-main', () => {
  it('should build', () => {
    expect(new AppMain()).toBeTruthy();
  });

  describe('rendering', () => {
    it('creates the element', async () => {
      const element = await getElement();

      expect(element).toBeTruthy();
    });

    it('contains main', async () => {
      const element = await getElement();

      expect(element.querySelector('main')).toBeTruthy();
    });

    it('contains passed data', async () => {
      const element = await getElement('<app-main>Example</app-main>');

      expect(element.textContent).toEqual('Example');
    });
  });
});

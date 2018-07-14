import { TestWindow } from '@stencil/core/testing';
import { AppText } from './app-text';

const getElement = (html = null) => {
  const testWindow = new TestWindow();

  return testWindow.load({
    components: [AppText],
    html: html || '<app-text></app-text>'
  });
};

describe('app-text', () => {
  it('should build', () => {
    expect(new AppText()).toBeTruthy();
  });

  describe('rendering', () => {
    it('creates the element', async () => {
      const element = await getElement();

      expect(element).toBeTruthy();
    });

    it('contains text', async () => {
      const element = await getElement();

      expect(element.querySelector('p')).toBeTruthy();
    });

    it('contains passed data', async () => {
      const element = await getElement('<app-text>Example</app-text>');

      expect(element.textContent).toEqual('Example');
    });
  });
});

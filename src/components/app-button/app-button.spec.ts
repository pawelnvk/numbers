import { TestWindow } from '@stencil/core/testing';
import { AppButton } from './app-button';

const getElement = (html = null) => {
  const testWindow = new TestWindow();

  return testWindow.load({
    components: [AppButton],
    html: html || '<app-button></app-button>'
  });
};

describe('app-button', () => {
  it('should build', () => {
    expect(new AppButton()).toBeTruthy();
  });

  describe('rendering', () => {
    it('creates the element', async () => {
      const element = await getElement();

      expect(element).toBeTruthy();
    });

    it('contains button', async () => {
      const element = await getElement();

      expect(element.querySelector('button')).toBeTruthy();
    });

    it('contains passed data', async () => {
      const element = await getElement('<app-button>Example</app-button>');

      expect(element.textContent).toEqual('Example');
    });
  });
});

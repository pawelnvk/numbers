import { TestWindow } from '@stencil/core/testing';
import { AppForm } from './app-form';

const getElement = (html = null) => {
  const testWindow = new TestWindow();

  return testWindow.load({
    components: [AppForm],
    html: html || '<app-form></app-form>'
  });
};

describe('app-form', () => {
  it('should build', () => {
    expect(new AppForm()).toBeTruthy();
  });

  describe('rendering', () => {
    it('creates the element', async () => {
      const element = await getElement();

      expect(element).toBeTruthy();
    });

    it('contains form', async () => {
      const element = await getElement();

      expect(element.querySelector('form')).toBeTruthy();
    });

    it('contains passed data', async () => {
      const element = await getElement('<app-form>Example</app-form>');

      expect(element.textContent).toEqual('Example');
    });
  });
});

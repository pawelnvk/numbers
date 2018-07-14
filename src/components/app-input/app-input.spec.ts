import { TestWindow } from '@stencil/core/testing';
import { AppInput } from './app-input';

const getElement = (html = null) => {
  const testWindow = new TestWindow();

  return testWindow.load({
    components: [AppInput],
    html: html || '<app-input />'
  });
};

describe('app-input', () => {
  it('should build', () => {
    expect(new AppInput()).toBeTruthy();
  });

  describe('rendering', () => {
    it('creates the element', async () => {
      const element = await getElement();

      expect(element).toBeTruthy();
    });

    it('contains input', async () => {
      const element = await getElement();

      expect(element.querySelector('input')).toBeTruthy();
    });

    it('passes name to input', async () => {
      const element = await getElement('<app-input name="Example" />');

      expect(element.querySelector('input').name).toEqual('Example');
    });

    it('passes placeholder to input', async () => {
      const element = await getElement('<app-input placeholder="Example" />');

      expect(element.querySelector('input').placeholder).toEqual('Example');
    });
  });
});

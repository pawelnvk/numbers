import { TestWindow } from '@stencil/core/testing';
import { AppRoot } from './app-root';

const getElement = () => {
  const testWindow = new TestWindow();

  return testWindow.load({
    components: [AppRoot],
    html: '<app-root />'
  });
};

describe('app-root', () => {
  it('should build', () => {
    expect(new AppRoot()).toBeTruthy();
  });

  describe('rendering', () => {
    it('creates the element', async () => {
      const element = await getElement();

      expect(element).toBeTruthy();
    });

    it('contains app-header', async () => {
      const element = await getElement();

      expect(element.querySelector('app-header')).toBeTruthy();
    });

    it('contains app-main', async () => {
      const element = await getElement();

      expect(element.querySelector('app-main')).toBeTruthy();
    });

    it('contains app-form', async () => {
      const element = await getElement();

      expect(element.querySelector('app-form')).toBeTruthy();
    });

    it('contains app-input', async () => {
      const element = await getElement();

      expect(element.querySelector('app-input')).toBeTruthy();
    });

    it('contains app-button', async () => {
      const element = await getElement();

      expect(element.querySelector('app-button')).toBeTruthy();
    });
  });
});

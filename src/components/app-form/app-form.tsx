import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'app-form',
  styleUrl: 'app-form.scss',
  scoped: true
})
export class AppForm {
  @Prop() onFormSubmit: (values: Object) => void;

  @Element() wrapper: HTMLElement;

  handleFormSubmit = (event: UIEvent) => {
    event.preventDefault();

    const values = {};
    const inputs = Array.from(this.wrapper.querySelectorAll('input'));

    inputs.forEach((node: HTMLInputElement) => {
      values[node.name] = node.value;
    });

    this.onFormSubmit(values);
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <slot />
      </form>
    );
  }
}

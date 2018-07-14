import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-input',
  styleUrl: 'app-input.scss',
  scoped: true
})
export class AppInput {
  @Prop() name: string = ''

  @Prop() placeholder: string = ''

  render() {
    return (
      <input
        class="input"
        name={this.name}
        placeholder={this.placeholder}
        type="text"
      />
    );
  }
}

import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-button',
  styleUrl: 'app-button.scss',
  scoped: true
})
export class AppButton {
  @Prop() type: string = 'button';

  render() {
    return (
      <button class="button" type={this.type}>
        <slot />
      </button>
    );
  }
}

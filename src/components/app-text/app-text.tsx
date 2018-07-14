import { Component } from '@stencil/core';

@Component({
  tag: 'app-text',
  styleUrl: 'app-text.scss',
  scoped: true
})
export class AppText {
  render() {
    return (
      <p class="text">
        <slot />
      </p>
    );
  }
}

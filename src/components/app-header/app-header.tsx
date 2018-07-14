import { Component } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss',
  scoped: true
})
export class AppHeader {
  render() {
    return (
      <header class="header">
        <slot />
      </header>
    );
  }
}

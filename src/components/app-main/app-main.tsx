import { Component } from '@stencil/core';

@Component({
  tag: 'app-main',
  styleUrl: 'app-main.scss',
  scoped: true
})
export class AppMain {
  render() {
    return (
      <main class="main">
        <slot />
      </main>
    );
  }
}

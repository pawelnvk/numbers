import { Component, State } from '@stencil/core';

import { getNumberFact } from '../../api/numbers';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  scoped: true
})
export class AppRoot {
  @State() fact: string = null;

  handeFormSubmit = ({ number }) => {
    if (!number) {
      this.fact = null;

      return;
    }

    getNumberFact(number)
      .then(({ text }) => {
        this.fact = text;
      });
  }

  render() {
    return (
      <div class="root">
        <app-header>
          <h1 class="root__heading">Facts about numbers</h1>
        </app-header>

        <app-main>
          <app-form
            class="root__section"
            onFormSubmit={this.handeFormSubmit}
          >
            <app-input
              class="root__form-item"
              name="number"
              placeholder="enter number"
            />

            <app-button class="root__form-item" type="submit">
              Search
            </app-button>
          </app-form>

          {this.fact && <app-text class="root__section">{this.fact}</app-text>}
        </app-main>
      </div>
    );
  }
}

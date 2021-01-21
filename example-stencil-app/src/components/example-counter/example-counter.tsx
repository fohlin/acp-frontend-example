import { Component, Host, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'example-counter',
  styleUrl: 'example-counter.css',
  shadow: false,
})
export class Counter {
  /**
   * Name to display
   */
  @Prop() name: string;
  /**
   * How many times user has clicked
   */
  @State() counter = 0;

  private increment() {
    this.counter++;
  }

  render() {
    return (
      <Host class={ this.counter >= 10 ? 'wow': '' }>
        <h3>
          Hey { this.name }!
          Clicking is fun.
        </h3>
        <p>You have clicked { this.counter } times.</p>
        <p>
          <button type="button" onClick={() => { this.increment() }}>
            Clicky 🥳
          </button>
        </p>
      </Host>
    );
  }

}

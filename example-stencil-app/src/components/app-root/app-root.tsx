import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  shadow: false,
})
export class AppRoot {
  render() {
    return (
      <div>
        <h1>Welcome 🐝🐱🐬</h1>
        <p>
          This is quite normal HTML, so far.
        </p>

        <h2>Our cool example-counter component</h2>
        <example-counter name="Bee"></example-counter>
        <example-counter name="Cat"></example-counter>

        <h2>API call with our example-fetch component 😎</h2>
        <example-fetch></example-fetch>
      </div>
    );
  }
}

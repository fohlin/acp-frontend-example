import { Component, h, State } from '@stencil/core';
import { requestVersion } from './api';

@Component({
  tag: 'example-fetch',
  styleUrl: 'example-fetch.css',
  shadow: true,
})
export class ExampleFetch {
  @State() version: string = 'loading';

  // Will run before first render - see https://stenciljs.com/docs/component-lifecycle
  async componentWillLoad() {
    const result = await requestVersion();
    this.version = result.version || '...error :('
  }

  render() {
    return (
      <p>API version is { this.version }</p>
    );
  }

}

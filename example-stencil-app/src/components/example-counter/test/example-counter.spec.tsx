import { newSpecPage } from '@stencil/core/testing';
import { Counter } from '../example-counter';

describe('example-counter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Counter],
      html: `<example-counter name="Bob"></example-counter>`,
    });
    expect(page.root.innerHTML).toContain('You have clicked 0 times');

    const button = page.root.querySelector('button');
    button.click();
    await page.waitForChanges();
    expect(page.root.innerHTML).toContain('You have clicked 1 times');
  });
});

import { Component } from '@stencil/core';


@Component({
  tag: 'grid-toggle',
  styleUrl: 'grid-toggle.scss',
  shadow: true
})
export class GridToggle {
  render() {
      return <button><slot/></button>;
  }
}

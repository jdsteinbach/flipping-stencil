import { Component } from '@stencil/core';

@Component({
  tag: 'grid-description',
  styleUrl: 'grid-description.scss',
  shadow: true
})
export class GridDescription {
  render() {
    return <slot />;
  }
}

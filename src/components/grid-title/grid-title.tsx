import { Component } from '@stencil/core';


@Component({
    tag: 'grid-title',
    styleUrl: 'grid-title.scss',
    shadow: true
})
export class GridTitle {
  render() {
    return <h1><slot /></h1>;
  }
}

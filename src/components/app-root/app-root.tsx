import { Component, State } from '@stencil/core';


@Component({
    tag: 'app-root',
    styleUrl: 'app-root.scss',
    shadow: true
})
export class AppRoot {
  @State() gridClass = false;

  private toggleGridHandler() {
    this.gridClass = !this.gridClass
  }

  render() {
    return [
      <grid-toggle onClick={() => this.toggleGridHandler()}>Toggle Grid</grid-toggle>,
      <grid-root gridClass={this.gridClass}></grid-root>
    ];
  }
}

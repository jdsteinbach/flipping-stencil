import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'grid-image',
  styleUrl: 'grid-image.scss',
  shadow: true
})
export class GridImage {
  @Prop() src: string;

  render() {
    return (
      <img src={this.src}/>
  );
  }
}

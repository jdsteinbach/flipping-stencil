import { Component, Element, Prop } from '@stencil/core';

// not sure how to get the WAAPI adapter version here
import Flipping from 'flipping';

import imgSrc from '../../global/image'

@Component({
    tag: 'grid-root',
    styleUrl: 'grid-root.scss',
    shadow: true
})
export class Grid {
  @Element() el: HTMLElement;

  // This isn't actually setting `this.el` to the Flipping parentElement
  private flipping = new Flipping({parentElement: this.el})

  @Prop() gridClass = false;

  componentDidLoad() {
    // When I log this.el, it correctly refers to the component,
    // but this.flipping.parentElement is just the default html element
    console.log(`${this.el.tagName} fired componentDidLoad`, this.el, this.flipping);
    this.flipping.read();
  }

  componentWillUpdate() {
    console.log(`${this.el.tagName} fired componentWillUpdate`);
    this.flipping.read();
  }

  componentDidUpdate() {
    console.log(`${this.el.tagName} fired componentDidUpdate`);
    this.flipping.flip();
  }

  hostData() {
    return {
      class: this.gridClass ? 'flipped' : ''
    }
  }

  render() {
    return [
      <grid-image data-flip-key="image" src={imgSrc} />,
      <grid-title data-flip-key="title" data-flip-no-scale>I like to move it!</grid-title>,
      <grid-description data-flip-key="description" data-flip-no-scale>I like to move it, move it!<br />She likes to move it, move it!<br />He likes to move it, move it!<br />You like to … move it!</grid-description>
    ];
  }
}

import { Component, AfterViewInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'd3sample-animation',
  templateUrl: './animation.component.html'
})
export class AnimationComponent implements AfterViewInit {
  private svg: any;

  public ngAfterViewInit() {
    this.initSvg();
    this.drawCircle();
    this.addAnimation();
  }

  private initSvg() {
    // Select base container, append SVG
    // Border to indicate SVG area
    this.svg = d3.select('#svg-container')
      .append('svg')
      .attr('width', 300)
      .attr('height', 300)
      .style('border', 'solid 1px red');
  }

  private drawCircle() {
    // Draw circle
    this.svg.append('circle')
      .attr('cx', 130)
      .attr('cy', 20)
      .attr('r', 20)
      .style('fill', 'purple');
  }

  private addAnimation() {
    // 1. Apply directly to selection
    // this.svg.select('circle')
    //   .transition()
    //   .delay(1500)
    //   .duration(3000)
    //   .style('fill', 'red');

    // 2. Apply using re-useable transition
    let transitionConfig = d3.transition()
      .delay(1500)
      .duration(3000);

    // Apply transition to circle
    this.svg.select('circle')
      .transition(transitionConfig)
      .style('fill', 'red');
  }
}
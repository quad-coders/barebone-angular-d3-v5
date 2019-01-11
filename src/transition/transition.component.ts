import { Component, AfterViewInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'd3sample-transition',
  templateUrl: './transition.component.html'
})
export class TransitionComponent implements AfterViewInit {
  private svg: any;

  public ngAfterViewInit() {
    this.initSvg();
    this.drawCircle();
    this.addTransition();
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

  private addTransition() {
    // 1. Apply to selection directly
    // this.svg.select('circle')
    //   .transition()
    //   .style('fill', 'red')
    //   .duration(3000)
    //   .transition()
    //   .style('fill', 'black')
    //   .duration(3000);

    // 2. Apply using re-useable transition
    let transitionConfig = d3.transition()
      .duration(3000);

    // Apply transition to circle
    this.svg.select('circle')
      .transition(transitionConfig)
      .style('fill', 'red')
      .transition(transitionConfig)
      .style('fill', 'black');
  }
}
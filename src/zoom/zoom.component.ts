import { Component, AfterViewInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'd3sample-zoom',
  templateUrl: './zoom.component.html'
})
export class ZoomComponent implements AfterViewInit {
  private svg: any;
  private svgWidth: number;
  private svgHeight: number;
  private group: any;

  ngAfterViewInit() {
    this.initSvg();
    this.initGroup();
    this.drawCircle();
    this.addZoom();
  }

  private initSvg() {
    // SVG area
    this.svgWidth = this.svgHeight = 300;

    // Select base container, append SVG
    // Border to indicate SVG area
    this.svg = d3.select('#svg-container')
      .append('svg')
      .attr('width', this.svgWidth)
      .attr('height', this.svgHeight)
      .style('border', 'solid 1px red');
  }

  private initGroup() {
    // Append group
    this.group = this.svg.append('g');
  }

  private drawCircle() {
    // Draw circle
    this.group.append('circle')
      .attr('cx', 110)
      .attr('cy', 70)
      .attr('r', 20)
      .style('fill', 'green');
  }

  private addZoom() {
    // Apply invisible rectangle on top layer of SVG element
    this.svg.append('rect')
      .attr('width', this.svgWidth)
      .attr('height', this.svgHeight)
      .style('fill', 'none')
      .style('pointer-events', 'all')
      // Zoom event
      .call(d3.zoom()
        .scaleExtent([1 / 2, 4])
        .on('zoom', () => this.zooming(this.group)));
  }

  private zooming(elem) {
    // Use transform for zooming
    elem.attr('transform', d3.event.transform);
  }
}
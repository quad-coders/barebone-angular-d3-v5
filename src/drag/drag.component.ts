import { Component, AfterViewInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'd3sample-drag',
  templateUrl: './drag.component.html'
})
export class DragComponent implements AfterViewInit {
  private svg: any;

  ngAfterViewInit() {
    this.initSvg();
    this.drawDragableCircle();
    this.drawStaticCircle();
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

  private drawDragableCircle() {
    // Circles properties
    let circles = [
      { x: 130, y: 20, color: 'purple' },
      { x: 80, y: 160, color: 'cyan' }
    ];

    // Draw circles
    this.svg.selectAll('circle')
      .data(circles)
      .enter()
      .append('circle')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', 20)
      .style('fill', (d) => d.color)
      // Add drag events
      .call(d3.drag()
        .on('start', this.dragStarted)
        .on('drag', this.dragging)
        .on('end', this.dragEnded));
  }

  private drawStaticCircle() {
    // Draw static circle, not draggable
    this.svg.append('circle')
      .attr('cx', 110)
      .attr('cy', 20)
      .attr('r', 20)
      .style('fill', 'black');
  }

  private dragStarted(d) {
    // Drag started, raise command put the dragged object on top
    d3.select(this)
      .raise()
      .style('stroke', 'green')
      .style('stroke-width', '2px');
  }

  private dragging(d) {
    // Draging in progress
    d3.select(this)
      .attr('cx', d.x = d3.event.x)
      .attr('cy', d.y = d3.event.y);
  }

  private dragEnded(d) {
    // Drag ended
    d3.select(this)
      .style('stroke', 'none');
  }
}
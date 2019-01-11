import { Component, AfterViewInit } from '@angular/core';

import * as d3 from 'd3';
import * as d3Transform from 'd3-transform';

@Component({
  selector: 'd3sample-transformation',
  templateUrl: './transformation.component.html'
})
export class TransformationComponent implements AfterViewInit {
  private svg: any;
  private group: any;

  public ngAfterViewInit() {
    this.initSvg();
    this.initGroup();
    this.addTransform();
    this.drawRectangle();
    this.drawCircle();
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

  private initGroup() {
    // Append group
    this.group = this.svg.append('g');
  }

  private addTransform() {
    // 1. Apply directly to selection
    // this.group.attr('transform', 'translate(60, 60) rotate(30)');

    // 2. Apply using D3 Transform library. Must install and import d3-transform
    let transformConfig = d3Transform.transform()
      .translate([60, 60])
      .rotate(30);
    this.group.attr('transform', transformConfig);
  }

  private drawRectangle() {
    // Draw rectangle
    this.group.append("rect")
      .attr("x", 20)
      .attr("y", 20)
      .attr("width", 60)
      .attr("height", 30)
      .style("fill", "green");
  }

  private drawCircle() {
    // Draw circle
    this.group.append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 30)
      .style("fill", "red")
  }
}
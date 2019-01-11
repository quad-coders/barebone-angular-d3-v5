import { Component, AfterViewInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'd3sample-basic-shape',
  templateUrl: './basic-shape.component.html'
})
export class BasicShapeComponent implements AfterViewInit {
  private svg: any;

  public ngAfterViewInit() {
    this.initSvg();
    this.drawLine();
    this.drawRectangle();
    this.drawCircle();
    this.drawEllipse();
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

  private drawLine() {
    // Draw line
    this.svg.append("line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", 50)
      .attr("y2", 50)
      .style("stroke", "rgb(255,0,0)")
      .style("stroke-width", 2);
  }

  private drawRectangle() {
    // Draw rectangle
    this.svg.append("rect")
      .attr("x", 55)
      .attr("y", 0)
      .attr("width", 50)
      .attr("height", 30)
      .style("fill", "green");
  }

  private drawCircle() {
    // Draw circle
    this.svg.append("circle")
      .attr("cx", 130)
      .attr("cy", 20)
      .attr("r", 20)
      .style("fill", "purple");
  }

  private drawEllipse() {
    // Draw ellipse
    this.svg.append("ellipse")
      .attr("cx", 185)
      .attr("cy", 20)
      .attr("rx", 30)
      .attr("ry", 20)
      .style("fill", "orange")
  }
}

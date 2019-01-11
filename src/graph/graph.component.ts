import { Component, AfterViewInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'd3sample-graph',
  templateUrl: './graph.component.html'
})
export class GraphComponent implements AfterViewInit {
  public ngAfterViewInit() {
    this.drawGraph();
  }

  private drawGraph() {
    // Set the dimensions and margins
    let svgWidth = 960;
    let svgHeight = 500;
    let margin = { top: 20, right: 20, bottom: 20, left: 50 }
    let graphWidth = svgWidth - margin.left - margin.right;
    let graphHeight = svgHeight - margin.top - margin.bottom;

    // Graph data
    let data = [
      { year: '2012-01-01', population: 76 },
      { year: '2013-01-01', population: 55 },
      { year: '2014-01-01', population: 71 },
      { year: '2015-01-01', population: 25 },
      { year: '2016-01-01', population: 63 },
      { year: '2017-01-01', population: 54 },
      { year: '2018-01-01', population: 87 },
    ];

    // Select base container, append SVG
    // Border to indicate SVG area
    let svg = d3.select('#svg-container')
      .append('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight)
      .style('border', 'solid 1px red')
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // Set x and y scale mapping, range is how it displayed on screen, domain is scale for underlaying data
    let x = d3.scaleTime()
      .range([0, graphWidth])
      .domain(d3.extent(data, (d) => new Date(d.year)));
    let y = d3.scaleLinear()
      .range([graphHeight, 0])
      .domain([0, d3.max(data, (d) => d.population)]);

    // Define the line function
    let graphLine = d3.line()
      .x((d) => x(new Date(d.year)))
      .y((d) => y(d.population));

    // Draw the line
    svg.append('path')
      .data([data])
      .attr('d', graphLine)
      .style('fill', 'none')
      .style('stroke', 'green')
      .style('stroke-width', '5px');

    // Draw x Axis
    svg.append('g')
      .attr('transform', 'translate(0,' + graphHeight + ')')
      .call(d3.axisBottom(x));

    // Draw y Axis
    svg.append('g')
      .call(d3.axisLeft(y));
  }
}
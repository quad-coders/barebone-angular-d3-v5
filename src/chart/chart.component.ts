import { Component, AfterViewInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'd3sample-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements AfterViewInit {
  public ngAfterViewInit() {
    this.drawBarChart();
    this.drawCircleChart();
    this.drawPieChart();
    this.drawDonutChart();
  }

  private drawBarChart() {
    // Chart data
    let data = [10, 5, 12, 15];
    // Scale factor
    let scaleFactor = 20;
    let barHeight = 30;

    // Select base container
    // Border to indicate SVG area
    let svgContainer = d3.select('#svg-container')
      .append('div')
      .attr('id', 'barChart')
      .style('border', 'solid 1px red');

    // Chart title
    svgContainer
      .append('h5')
      .text('Bar Chart');

    // Create SVG element
    let svg = svgContainer
      .append('svg')
      .attr('width', 400)
      .attr('height', barHeight * data.length);

    // Apply transformation
    let bar = svg.selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('transform', (d, i) => 'translate(0,' + i * barHeight + ')');

    // Draw the bar
    bar.append('rect')
      .attr('width', (d) => d * scaleFactor)
      .attr('height', barHeight - 1)
      .style('fill', 'gray');

    // Draw the text
    bar.append('text')
      .attr('x', (d) => d * scaleFactor)
      .attr('y', barHeight / 2)
      .attr('dy', '.35em')
      .text((d) => d)
      .style('fill', 'yellow')
      .style('font', '12px sans-serif')
      .style('text-anchor', 'end');
  }

  private drawCircleChart() {
    // Chart data
    let data = [10, 20, 30];
    // Colors to use
    let colors = ['green', 'purple', 'yellow'];

    // Select base container
    // Border to indicate SVG area
    let svgContainer = d3.select('#svg-container')
      .append('div')
      .attr('id', 'circleChart')
      .style('border', 'solid 1px red');

    // Chart title
    svgContainer
      .append('h5')
      .text('Circle Chart');

    // Create SVG element
    let svg = svgContainer
      .append('svg')
      .attr('width', 400)
      .attr('height', 200);

    // Apply transformation
    let circle = svg.selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('transform', (d, i) => 'translate(0,0)');

    // Draw the circle
    circle.append('circle')
      .attr('cx', (d, i) => i * 75 + 50)
      .attr('cy', (d, i) => 75)
      .attr('r', (d) => d * 1.5)
      .attr('fill', (d, i) => colors[i]);

    // Draw the text
    circle.append('text')
      .attr('x', (d, i) => i * 75 + 25)
      .attr('y', 80)
      .attr('stroke', 'red')
      .attr('font-size', '10px')
      .attr('font-family', 'sans-serif')
      .text((d) => d);
  }

  private drawPieChart() {
    this.drawPieChartWithInnerRadius(0);
  }

  private drawDonutChart() {
    this.drawPieChartWithInnerRadius(100);
  }

  private drawPieChartWithInnerRadius(innerRadius: number) {
    let width = 400;
    let height = 450;
    // Determine radius of pie chart based on SVG area
    let radius = Math.min(width, height) / 2;

    // Chart data
    let data = [
      { states: 'California', percent: '67.13' },
      { states: 'New Mexico', percent: '54.58' },
      { states: 'Minnesota', percent: '73.99' },
      { states: 'Pennsylvania', percent: '25.48' },
      { states: 'Missouri', percent: '71.3' },
      { states: 'Georgia', percent: '55.98' },
      { states: 'District of Columbia', percent: '76.4' }
    ];

    // Select base container
    // Border to indicate SVG area
    let svgContainer = d3.select('#svg-container')
      .append('div')
      .attr('id', 'pieChart')
      .style('border', 'solid 1px red');

    // Chart title
    let chartTitle = 'Pie Chart';
    if (innerRadius > 0) {
      chartTitle = 'Donut Chart';
    }
    svgContainer
      .append('h5')
      .text(chartTitle);

    // Create SVG element
    let svg = svgContainer
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Append chart title
    svg.append('g')
      .attr('transform', 'translate(' + (width / 2 - 120) + ',' + 20 + ')')
      .append('text')
      .text('Top population')
      .style('fill', 'green')
      .style('font-weight', 'italic');

    // Append g and apply transformation to center it
    let g = svg.append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + ((height / 2) + 20) + ')');

    // Color palette to use
    let color = d3.scaleOrdinal([
      'gray', 'green', 'brown', 'orange', 'yellow', 'red', 'purple'
    ]);

    // Define pie function
    let pie = d3.pie()
      .value((d) => d.percent);

    // Define arc function for the pie chart
    let pieArc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(radius - 10);

    // Define arc function for the label
    let labelArc = d3.arc()
      .innerRadius(radius - 100)
      .outerRadius(radius);

    // Slices in the pie chart
    let slices = g.selectAll('g')
      .data(pie(data))
      .enter()
      .append('g');

    // Draw line in each slice and fill with color
    slices.append('path')
      .attr('d', pieArc)
      .attr('fill', (d) => color(d.data.states))
      .style('stroke', '#fff');

    // Add text to each slice
    slices.append('text')
      .attr('transform', (d) => 'translate(' + labelArc.centroid(d) + ')')
      .text((d) => d.data.states)
      .style('font', '12px arial')
      .style('text-anchor', 'middle');
  }
}
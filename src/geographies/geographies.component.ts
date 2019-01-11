import { Component, AfterViewInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'd3sample-geographies',
  templateUrl: './geographies.component.html'
})
export class GeographiesComponent implements AfterViewInit {
  private geoJsonMap: any;
  private mapUrl: string;
  private mapScale: number;
  private mapTranslate: [number, number];

  public ngAfterViewInit() {
    let self = this;

    // World map, world-geojson-map.json
    this.mapUrl = 'https://gist.githubusercontent.com/quad-coders/0fe7b9f9f32e4efcc034c38c44eb8e93/raw/758676477bf28df734d8d2762ade161f05f44f02/world-geojson-map';
    this.mapScale = 150;
    this.mapTranslate = [475, 275];

    // US states map, us-states-geojson-map.json
    // this.mapUrl = 'https://gist.githubusercontent.com/quad-coders/c069ac212855e1a2b47bf56cfcd6f3b5/raw/7ea7654ac3b6a6a6be22c39b2278fe3898b4a3f2/us-states-geojson-map'
    // this.mapScale = 450;
    // this.mapTranslate = [1400, 650];

    // Get geo-json (http://geojson.org/) of the map
    d3.json(this.mapUrl).then((data) => {
      self.geoJsonMap = data;
      self.drawMap();
    });
  }

  private drawMap() {
    // Select base container, append SVG
    // Border to indicate SVG area
    let svg = d3.select('#svg-container')
      .append('svg')
      .attr('width', 1000)
      .attr('height', 600)
      .style('border', 'solid 1px red')
      .append('g')
      .attr('transform', 'translate(20,20)');

    // Define geo projection function
    let projection = d3.geoEquirectangular()
      .scale(this.mapScale)
      .translate(this.mapTranslate);

    // Define geo path function, for drawing path
    let geoGenerator = d3.geoPath()
      .projection(projection);

    // Draw the map
    let u = svg.selectAll('path')
      .data(this.geoJsonMap.features)
      .enter()
      .append('path')
      .attr('d', geoGenerator);
  }
}
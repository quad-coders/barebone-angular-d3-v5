import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { BasicShapeComponent } from '../basic-shape/basic-shape.component';
import { TransformationComponent } from '../transformation/transformation.component';
import { TransitionComponent } from '../transition/transition.component';
import { AnimationComponent } from '../animation/animation.component';
import { ChartComponent } from '../chart/chart.component';
import { GraphComponent } from '../graph/graph.component';
import { GeographiesComponent } from '../geographies/geographies.component';
import { DragComponent } from '../drag/drag.component';
import { ZoomComponent } from '../zoom/zoom.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'basic-shape',
    component: BasicShapeComponent
  },
  {
    path: 'transformation',
    component: TransformationComponent
  },
  {
    path: 'transition',
    component: TransitionComponent
  },
  {
    path: 'animation',
    component: AnimationComponent
  },
  {
    path: 'chart',
    component: ChartComponent
  },
  {
    path: 'graph',
    component: GraphComponent
  },
  {
    path: 'geographies',
    component: GeographiesComponent
  },
  {
    path: 'drag',
    component: DragComponent
  },
  {
    path: 'zoom',
    component: ZoomComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

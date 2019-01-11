import { NgModule } from '@angular/core';

import { BasicShapeComponent } from '../basic-shape/basic-shape.component';
import { TransformationComponent } from '../transformation/transformation.component';
import { TransitionComponent } from '../transition/transition.component';
import { AnimationComponent } from '../animation/animation.component';
import { ChartComponent } from '../chart/chart.component';
import { GraphComponent } from '../graph/graph.component';
import { GeographiesComponent } from '../geographies/geographies.component';
import { DragComponent } from '../drag/drag.component';
import { ZoomComponent } from '../zoom/zoom.component';

@NgModule({
  declarations: [
    BasicShapeComponent,
    TransformationComponent,
    TransitionComponent,
    AnimationComponent,
    ChartComponent,
    GraphComponent,
    GeographiesComponent,
    DragComponent,
    ZoomComponent
  ]
})
export class D3SampleModule { }

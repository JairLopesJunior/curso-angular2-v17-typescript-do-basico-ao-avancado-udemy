import { Component } from '@angular/core';
import { ControlFlowForComponent } from '../control-flow/control-flow-for/control-flow-for.component';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [ControlFlowForComponent],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss'
})
export class DeferrableViewsComponent {

  isTrue = false;
}

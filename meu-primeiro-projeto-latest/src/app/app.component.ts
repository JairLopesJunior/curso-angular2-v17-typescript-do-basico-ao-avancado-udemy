import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlFlowIfComponent } from '../control-flow/control-flow-if/control-flow-if.component';
import { ControlFlowForComponent } from '../control-flow/control-flow-for/control-flow-for.component';
import { ControlFlowSwitchComponent } from '../control-flow/control-flow-switch/control-flow-switch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ControlFlowIfComponent,
    ControlFlowForComponent,
    ControlFlowSwitchComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlFlowIfComponent } from '../control-flow/control-flow-if/control-flow-if.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ControlFlowIfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}

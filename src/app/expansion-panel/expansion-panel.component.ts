import {ChangeDetectionStrategy, Component, signal} from '@angular/core';


@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanelComponent {
  readonly panelOpenState = signal(true);
}

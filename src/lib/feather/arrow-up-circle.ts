import { Component } from '@angular/core';

@Component({
  selector: 'i-arrow-up-circle',
  styles: [`
    .feather {
      width: var(--width, 24px);
      height: var(--height, 24px);
      fill: var(--fill, none);
      stroke: var(--stroke, currentColor);
      stroke-width: var(--stroke-width, 2px);
      stroke-linecap: var(--stroke-linecap, round);
      stroke-linejoin: var(--stroke-linejoin, round);
    }
  `],
  templateUrl: '../../../node_modules/feather-icons/dist/icons/arrow-up-circle.svg'
})
export class IconArrowUpCircle {}
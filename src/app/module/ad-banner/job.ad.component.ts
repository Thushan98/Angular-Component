import { Component, Input } from '@angular/core';

import { AdComponent } from '../../model/ad.component';

@Component({
  styleUrls: ['./ad-banner.component.scss'],
  template: `
    <div class="job-ad">
      <h4>{{ data.headline }}</h4>
      {{ data.body }}
    </div>
  `,
})
export class JobAdComponent implements AdComponent {
  @Input() data: any;
}

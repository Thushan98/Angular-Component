import { Injectable } from '@angular/core';
import { AdItem } from '../directives/ad-banner/ad-item';
import { JobAdComponent } from '../module/ad-banner/job.ad.component';

@Injectable({
  providedIn: 'root'
})
export class AdBannerService {

  getAds() {
    return [
      new AdItem(
        JobAdComponent,
        { name: 'Bombasto', bio: 'Brave as they come' }
      ),
      new AdItem(
        JobAdComponent,
        { name: 'Dr. IQ', bio: 'Smart as they come' }
      ),
      new AdItem(
        JobAdComponent,
        { headline: 'Hiring for several positions', body: 'Submit your resume today!' }
      ),
      new AdItem(
        JobAdComponent,
        { headline: 'Openings in all departments', body: 'Apply today' }
      )
    ];
  }
}

import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AdBannerDirective } from 'src/app/directives/ad-banner/ad-banner.directive';
import { AdComponent } from 'src/app/model/ad.component';
import { AdItem } from 'src/app/directives/ad-banner/ad-item';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit{
  @Input() ads: AdItem[] = [];

  currentAdIndex = -1;

  @ViewChild(AdBannerDirective, {static: true}) adHost!: AdBannerDirective;

  private clearTimer: VoidFunction | undefined;

  ngOnInit(): void {
      this.loadComponent();
      this.getAds();
  }

  ngOnDestroy() {
    this.clearTimer?.();
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(adItem.component);
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    const interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
    this.clearTimer = () => clearInterval(interval);
  }

}

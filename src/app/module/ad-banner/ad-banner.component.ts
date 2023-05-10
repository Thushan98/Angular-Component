import { Component, OnInit } from '@angular/core';
import { AdItem } from 'src/app/directives/ad-banner/ad-item';
import { AdBannerService } from 'src/app/services/ad-banner.service';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss'],
})
export class AdBannerComponent implements OnInit {
  ads: AdItem[] = [];

  constructor(private adService: AdBannerService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}

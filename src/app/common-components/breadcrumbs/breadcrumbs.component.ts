import { Component, Input, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { BreadCrumbs } from './BreadCrumbs';
import { Subject } from 'rxjs';
import { takeUntil, filter, distinctUntilChanged } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  @Input()
  breadcrumbs: BreadCrumbs[]=[];

  private readonly destroySub = new Subject<void>();
  constructor(private router: Router, private activateRoute: ActivatedRoute){}

  ngOnInit() {
    this.router.events
    .pipe(
      takeUntil(this.destroySub),
      filter(event => event instanceof NavigationEnd),
      distinctUntilChanged()
    )
    .subscribe(() => {
      this.breadcrumbs = this.buildBreadCrumb(this.activateRoute.root);
    })
  }

  buildBreadCrumb(route: ActivatedRoute, url = '', breadcrumbs: BreadCrumbs[]=[]): BreadCrumbs[]{
    //if no routeconfig is available we arre on the root path
    let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['breadcrumb'] : '';
    let path = route.routeConfig && route.routeConfig.path ? route.routeConfig.path : '';

    //if the route is dynamic route such as :id, remove it
    const lastRoutePart = path.split('/').pop() || '';
    const isDynamicRoute = lastRoutePart.startsWith(':');
    if(isDynamicRoute && !!route.snapshot){
      const paraName = lastRoutePart.split(':')[1];
      path = path.replace(lastRoutePart, route.snapshot.params[paraName]);
      label = route.snapshot.params[paraName];
    }

    //in routeconfig the complete path is not availble rebuild it each time
    const nextUrl = path ? `${url}/${path}` : url;
    const breadcrumb: BreadCrumbs = {
      label: label,
      url: nextUrl
    };
    //only add route non-empty label

    const newBreadcrumbs = breadcrumb.label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
    if(route.firstChild){
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }

  ngOnDestroy(): void {
    this.destroySub.next();
    this.destroySub.complete();
  }
}

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  Output,
  ViewChild,
  ViewEncapsulation,
  EventEmitter,
} from '@angular/core';

import { IndicatorPos, TogglerIcon } from './types';
import { DSSideNavChildItem, DSSideNavItem } from './side-nav-item-model';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { sidenavToggeling } from '../animation';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [sidenavToggeling],
  host: {
    class: 'side-nav-container',
    '[class.side-nav-container--collapsed]': '!isExpanded',
  },
})
export class DSSidenavComponent implements AfterViewInit, OnDestroy {
  readonly IndicatorPos = IndicatorPos;

  toggleIcon: TogglerIcon = 'arrow_back_ios';
  indicatorPos: IndicatorPos = IndicatorPos.NONE;
  unsubscribe = new Subject<boolean>();
  private _isExpanded = true;
  private hasActiveChildren = false;

  @Input()
  get isExpanded(): boolean {
    return this._isExpanded;
  }

  set isExpanded(value: boolean) {
    this._isExpanded = value;
    this.toggleIcon = value ? 'arrow_back_ios' : 'apps';
  }

  @ViewChild('sidenav') sidenav!: ElementRef<HTMLDivElement> | undefined;
  @Output() toggled = new EventEmitter<boolean>();
  @Input() items: Array<DSSideNavItem> = [];

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit(): void {
    this.watchScrollChanges();
  }

  getActiveChildrenState(selectedItem: DSSideNavItem | DSSideNavChildItem) {
    return !!selectedItem?.children?.some(
      (e) => e.isActive || e?.children?.some((g) => g.isActive)
    );
  }

  public onItemClick(item: DSSideNavItem | DSSideNavChildItem): void {
    item.isExpanded = !item.isExpanded;
    this.setNavItemState(item);
    if (item?.onClick) {
      item.onClick;
    }
    if (!this.isExpanded && !!item?.children) {
      this.isExpanded = true;
      item.isExpanded = true;
    }
  }

  private setNavItemState(selectedItem: DSSideNavItem | DSSideNavChildItem) {
    this.hasActiveChildren = this.getActiveChildrenState(selectedItem);
    this.items.forEach((item) => {
      if (!selectedItem?.children) {
        if (item.id === selectedItem.id) {
          selectedItem.isActive = !item.isActive;
        } else {
          item.isActive = false;
        }
      } else {
        if (!selectedItem.isExpanded) {
          selectedItem.isActive = this.hasActiveChildren;
        } else {
          selectedItem.isActive = false;
        }
      }
      item?.children?.forEach((child) => {
        if (!selectedItem?.children) {
          if (child.id === selectedItem.id) {
            selectedItem.isActive = !child.isActive;
          } else {
            child.isActive = false;
          }
        }
        child?.children?.forEach((grandChild) => {
          if (!selectedItem?.children) {
            if (grandChild.id === selectedItem.id) {
              selectedItem.isActive = !grandChild.isActive;
            } else {
              grandChild.isActive = false;
            }
          }
        });
      });
    });
  }

  public toggleSideNav(): void {
    this.isExpanded = !this.isExpanded;
    this.toggleIcon = this.isExpanded ? 'arrow_back_ios' : 'apps';
    this.toggled.emit(this.isExpanded);
  }

  public setToggleIcon(state: 'in' | 'out'): void {
    switch (state) {
      case 'in':
        this.toggleIcon = this.isExpanded ? 'arrow_back_ios' : 'apps';
        break;
      case 'out':
        this.toggleIcon = this.isExpanded ? 'arrow_back_ios' : 'apps';
        break;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
  }

  private watchScrollChanges(): void {
    this.setIndicatorsPosition();
    this.changeDetectorRef.detectChanges();
    fromEvent(this.sidenav!.nativeElement, 'scroll')
      .pipe(debounceTime(50), takeUntil(this.unsubscribe))
      .subscribe((_event: Event) => {
        this.setIndicatorsPosition();
        this.changeDetectorRef.detectChanges();
      });
  }

  private setIndicatorsPosition(): void {
    const { scrollHeight, scrollTop, offsetHeight } = this.sidenav?.nativeElement || { scrollHeight: 0, scrollTop: 0, offsetHeight: 0 };
    const { clientHeight } = this.elementRef.nativeElement;

    if (scrollTop !== 0 && scrollTop === scrollHeight - offsetHeight) {
      this.indicatorPos = IndicatorPos.TOP;
      return;
    }
    if (scrollTop == 0 && scrollHeight > clientHeight) {
      this.indicatorPos = IndicatorPos.BOTTOM;
      return;
    }
    if (scrollTop !== 0 && scrollHeight > clientHeight) {
      this.indicatorPos = IndicatorPos.BOTH;
      return;
    }
    this.indicatorPos = IndicatorPos.NONE;
  }
}

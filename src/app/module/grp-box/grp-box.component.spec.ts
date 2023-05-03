import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpBoxComponent } from './grp-box.component';

describe('GrpBoxComponent', () => {
  let component: GrpBoxComponent;
  let fixture: ComponentFixture<GrpBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrpBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GrpBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

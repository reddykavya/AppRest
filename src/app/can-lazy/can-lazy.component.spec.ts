import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanLazyComponent } from './can-lazy.component';

describe('CanLazyComponent', () => {
  let component: CanLazyComponent;
  let fixture: ComponentFixture<CanLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

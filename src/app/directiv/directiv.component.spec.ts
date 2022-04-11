import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivComponent } from './directiv.component';

describe('DirectivComponent', () => {
  let component: DirectivComponent;
  let fixture: ComponentFixture<DirectivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

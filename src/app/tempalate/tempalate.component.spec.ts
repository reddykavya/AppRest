import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempalateComponent } from './tempalate.component';

describe('TempalateComponent', () => {
  let component: TempalateComponent;
  let fixture: ComponentFixture<TempalateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempalateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempalateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

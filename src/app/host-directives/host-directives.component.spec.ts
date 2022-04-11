import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostDirectivesComponent } from './host-directives.component';

describe('HostDirectivesComponent', () => {
  let component: HostDirectivesComponent;
  let fixture: ComponentFixture<HostDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

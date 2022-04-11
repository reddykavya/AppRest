import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataaComponent } from './form-dataa.component';

describe('FormDataaComponent', () => {
  let component: FormDataaComponent;
  let fixture: ComponentFixture<FormDataaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDataaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDataaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

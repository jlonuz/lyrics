import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputVersosFormComponent } from './input-versos-form.component';

describe('InputVersosFormComponent', () => {
  let component: InputVersosFormComponent;
  let fixture: ComponentFixture<InputVersosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputVersosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputVersosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

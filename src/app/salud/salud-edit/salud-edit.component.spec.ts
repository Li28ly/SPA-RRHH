import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludEditComponent } from './salud-edit.component';

describe('SaludEditComponent', () => {
  let component: SaludEditComponent;
  let fixture: ComponentFixture<SaludEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaludEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

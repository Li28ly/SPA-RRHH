import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludAddComponent } from './salud-add.component';

describe('SaludAddComponent', () => {
  let component: SaludAddComponent;
  let fixture: ComponentFixture<SaludAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaludAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

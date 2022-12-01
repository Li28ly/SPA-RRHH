import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludAdminComponent } from './salud-admin.component';

describe('SaludAdminComponent', () => {
  let component: SaludAdminComponent;
  let fixture: ComponentFixture<SaludAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaludAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

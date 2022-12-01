import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionAdminComponent } from './pension-admin.component';

describe('PensionAdminComponent', () => {
  let component: PensionAdminComponent;
  let fixture: ComponentFixture<PensionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PensionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

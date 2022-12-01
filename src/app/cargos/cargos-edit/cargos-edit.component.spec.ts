import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargosEditComponent } from './cargos-edit.component';

describe('CargosEditComponent', () => {
  let component: CargosEditComponent;
  let fixture: ComponentFixture<CargosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargosEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

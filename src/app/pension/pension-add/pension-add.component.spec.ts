import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionAddComponent } from './pension-add.component';

describe('PensionAddComponent', () => {
  let component: PensionAddComponent;
  let fixture: ComponentFixture<PensionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PensionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejer2PadreComponent } from './ejer2-padre.component';

describe('Ejer2PadreComponent', () => {
  let component: Ejer2PadreComponent;
  let fixture: ComponentFixture<Ejer2PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejer2PadreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ejer2PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

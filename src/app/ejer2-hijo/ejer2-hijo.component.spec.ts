import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejer2HijoComponent } from './ejer2-hijo.component';

describe('Ejer2HijoComponent', () => {
  let component: Ejer2HijoComponent;
  let fixture: ComponentFixture<Ejer2HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejer2HijoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ejer2HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

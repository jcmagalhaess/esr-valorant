import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLiveNowComponent } from './card-live-now.component';

describe('CardLiveNowComponent', () => {
  let component: CardLiveNowComponent;
  let fixture: ComponentFixture<CardLiveNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLiveNowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardLiveNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCardLiveNowComponent } from './schedule-card-live-now.component';

describe('ScheduleCardLiveNowComponent', () => {
  let component: ScheduleCardLiveNowComponent;
  let fixture: ComponentFixture<ScheduleCardLiveNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleCardLiveNowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduleCardLiveNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

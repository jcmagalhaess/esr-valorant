import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleMenuEventsComponent } from './schedule-menu-events.component';

describe('ScheduleMenuEventsComponent', () => {
  let component: ScheduleMenuEventsComponent;
  let fixture: ComponentFixture<ScheduleMenuEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleMenuEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduleMenuEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

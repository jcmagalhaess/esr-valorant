import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleScoreboardComponent } from './schedule-scoreboard.component';

describe('ScheduleScoreboardComponent', () => {
  let component: ScheduleScoreboardComponent;
  let fixture: ComponentFixture<ScheduleScoreboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleScoreboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

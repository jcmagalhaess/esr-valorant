import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleMatchesComponent } from './schedule-matches.component';

describe('ScheduleMatchesComponent', () => {
  let component: ScheduleMatchesComponent;
  let fixture: ComponentFixture<ScheduleMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleMatchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduleMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

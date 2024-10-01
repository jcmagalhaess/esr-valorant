import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleMenuRegionComponent } from './schedule-menu-region.component';

describe('ScheduleMenuRegionComponent', () => {
  let component: ScheduleMenuRegionComponent;
  let fixture: ComponentFixture<ScheduleMenuRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleMenuRegionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduleMenuRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

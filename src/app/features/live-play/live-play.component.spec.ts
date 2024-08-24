import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivePlayComponent } from './live-play.component';

describe('LivePlayComponent', () => {
  let component: LivePlayComponent;
  let fixture: ComponentFixture<LivePlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivePlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LivePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMatchesComponent } from './view-matches.component';

describe('ViewMatchesComponent', () => {
  let component: ViewMatchesComponent;
  let fixture: ComponentFixture<ViewMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMatchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

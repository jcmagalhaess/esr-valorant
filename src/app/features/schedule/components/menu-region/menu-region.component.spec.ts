import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRegionComponent } from './menu-region.component';

describe('MenuRegionComponent', () => {
  let component: MenuRegionComponent;
  let fixture: ComponentFixture<MenuRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuRegionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

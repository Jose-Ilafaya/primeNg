import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasetaComponent } from './maseta.component';

describe('MasetaComponent', () => {
  let component: MasetaComponent;
  let fixture: ComponentFixture<MasetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NbDialogService } from '@nebular/theme';

import { HomeComponent } from './home.component';

class MockDialogService { }

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [ {provide: NbDialogService, useClass: MockDialogService} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

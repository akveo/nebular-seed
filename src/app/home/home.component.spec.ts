import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NbButtonModule, NbCardModule, NbDialogModule, NbDialogService, NbThemeModule } from '@nebular/theme';

import { HomeComponent } from './home.component';

class MockDialogService { }

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NbThemeModule.forRoot(),
        NbCardModule,
        NbButtonModule,
        NbDialogModule.forRoot()
      ],
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

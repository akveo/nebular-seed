import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NbActionsModule, NbButtonModule, NbCardModule, NbDialogModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NbThemeModule.forRoot(),
        NbCardModule,
        NbButtonModule,
        NbDialogModule.forRoot(),
        RouterTestingModule,
        NbLayoutModule,
        NbActionsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});

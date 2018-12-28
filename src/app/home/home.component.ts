import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }

  ngOnInit() { }

  openDialog(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }

}

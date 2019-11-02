import { SpinnerService } from './../services/spinner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html'
})
export class SpinnerComponent implements OnInit {
  public visible: boolean;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinnerService.spinnerChange.subscribe((visible: boolean) => {
      setTimeout(() => {
        this.visible = visible;
      }, 1);
    });
  }
}

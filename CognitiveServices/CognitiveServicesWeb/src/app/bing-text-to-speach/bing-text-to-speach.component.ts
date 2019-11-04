import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bing-text-to-speach',
  templateUrl: './bing-text-to-speach.component.html',
  styleUrls: ['./bing-text-to-speach.component.scss']
})
export class BingTextToSpeachComponent implements OnInit {
  @Input() textToSpeech: string;

  constructor() { }

  ngOnInit() {
  }

  public play(): void {
    // todo
  }
}

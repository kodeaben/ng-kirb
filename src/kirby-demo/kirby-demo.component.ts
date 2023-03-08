import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kirby-demo',
  templateUrl: './kirby-demo.component.html',
  styleUrls: ['./kirby-demo.component.css'],
})
export class KirbyDemoComponent implements OnInit {
  public progress = 0;
  constructor() {
    setInterval(() => {
      this.progress = Math.random() * 100;
    }, 1 * 1000);
  }

  ngOnInit() {}
}

import { Component, Input, OnInit } from '@angular/core';

export type example = '1' | '2';

@Component({
  selector: 'app-test-interface',
  templateUrl: './test-interface.component.html',
  styleUrls: ['./test-interface.component.css'],
})
export class TestInterfaceComponent implements OnInit {
  private val: example;

  constructor() {}

  @Input() set test(value: example) {
    this.val = value;
  }
  ngOnInit() {}
}

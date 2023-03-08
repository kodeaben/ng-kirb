import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { KirbyModule } from '@kirbydesign/designsystem';
import { RouterModule } from '@angular/router';

import { KirbyDemoComponent } from './kirby-demo.component';

@NgModule({
  imports: [CommonModule, BrowserModule, KirbyModule, RouterModule.forRoot([])],
  /**
 declarations: [ShowcaseButtonComponent, TestInterfaceComponent],
 *  */
  bootstrap: [KirbyDemoComponent],
})
export class KirbyDemoModule {}

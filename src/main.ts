import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';
import { KirbyModule } from '@kirbydesign/designsystem';
import 'zone.js';
import { ShowcaseButtonComponent } from './showcase-button/showcase-button.component';
import { TestInterfaceComponent } from './test-interface/test-interface.component';

@Component({
  selector: 'kirby-demo',
  template: `<app-showcase-button></app-showcase-button>`,
})
export class KirbyDemo {}

@NgModule({
  imports: [CommonModule, BrowserModule, KirbyModule, RouterModule.forRoot([])],
  declarations: [KirbyDemo, ShowcaseButtonComponent, TestInterfaceComponent],
  bootstrap: [KirbyDemo],
})
export class KirbyDemoModule {}

platformBrowserDynamic()
  .bootstrapModule(KirbyDemoModule)
  .catch((err) => console.error(err));

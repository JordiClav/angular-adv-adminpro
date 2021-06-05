import { Component, Input, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitfunctions();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {


  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    customInitfunctions();
  }

}

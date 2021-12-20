import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  // styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  isExpanded: boolean = true;

  DEFAULT_LIST: Array<any> = [
    { id: 1, icon: 'home', icon_type: 'ng-mat', name: 'Dashboard' },
    { id: 2, icon: 'important_devices', icon_type: 'ng-mat', name: 'Info' },
    { id: 3, icon: 'person', icon_type: 'ng-mat', name: 'User' },
    { id: 4, icon: 'folder', icon_type: 'ng-mat', name: 'File Manager' },
    { id: 5, icon: 'bx-chat', icon_type: 'boxicon', name: 'Messages' },
    { id: 6, icon: 'bx-pie-chart-alt-2', icon_type: 'boxicon', name: 'Analytics' },
    { id: 7, icon: 'settings', icon_type: 'ng-mat', name: 'Setting' },
  ]

  constructor() { }

  ngOnInit(): void { }
}

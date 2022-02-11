import { Component, OnInit } from '@angular/core';
import { ApiSharedService } from 'src/app/api-shared.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})

export class SideNavComponent implements OnInit {

  constructor(private apiService: ApiSharedService) { }

  FunctionTabList: any = [];

  ngOnInit(): void {
    this.refreshFuncTabs();

    let arrows = $('.arrow');
    $.each(arrows, function (index) {
      $(arrows[index]).on('click', function (e) {
        let arrowParent = $(e.target).parent().parent();
        arrowParent.toggleClass('show-menu');
      });
    });
  }

  refreshFuncTabs(): void {
    this.apiService.getFuncTabs().subscribe(data => {
      this.FunctionTabList = data;
    });
  }

  menuClick(): void {
    let sidebar = $('.sidebar');
    sidebar.toggleClass('close');
  }
}

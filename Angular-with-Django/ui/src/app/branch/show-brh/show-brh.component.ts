import { Component, OnInit } from '@angular/core';
import { ApiSharedService } from 'src/app/api-shared.service';

import { Branch } from 'src/app/models/branch/branch';

@Component({
  selector: 'app-branch-show-brh',
  templateUrl: './show-brh.component.html',
  styleUrls: ['./show-brh.component.css']
})
export class ShowBrhComponent implements OnInit {

  constructor(private apiService: ApiSharedService) { }

  BranchList: Branch[] = [];

  modalIsOpen: boolean = false;

  dialogTitle: string = '';
  dialogWidth: number | undefined;
  dialogHeight: number | undefined;

  ngOnInit(): void {
    this.refreshBranch();
  }

  refreshBranch() : void {
    this.apiService.getBranches().subscribe(data => {
      this.BranchList = data;
    });
  }

  branch: Branch = new Branch(0, '');

  addBranch(): void {
    this.modalIsOpen = true;
    this.dialogTitle = 'Add Branch';
    this.dialogWidth = 800;

    this.branch = new Branch(0, '');
  }

  editBranch(target: Branch) {
    this.modalIsOpen = true;
    this.dialogTitle = 'Edit Branch';

    this.branch = target;
  }

  closeDialog(event: boolean): void {
    this.modalIsOpen = event;
    this.refreshBranch();
  }

}

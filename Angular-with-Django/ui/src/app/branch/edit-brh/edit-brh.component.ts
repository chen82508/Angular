import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ApiSharedService } from 'src/app/api-shared.service';

import { Branch } from 'src/app/models/branch/branch';

@Component({
  selector: 'app-branch-edit-brh',
  templateUrl: './edit-brh.component.html',
  styleUrls: ['./edit-brh.component.css']
})
export class EditBrhComponent implements OnInit {

  constructor(private apiService: ApiSharedService) { }

  @Input("brhSN")
  sy_brh_sn: number = 0;
  @Input("brhName")
  sy_brh_nam: string = '';

  @Output()
  closeEvent = new EventEmitter<boolean>();

  ngOnInit(): void {

  }

  confirmData(): void {
    let val: Branch = new Branch(this.sy_brh_sn, this.sy_brh_nam);
    console.log(val);
    if (this.sy_brh_sn === 0) {
      this.apiService.addBranch(val).subscribe(result => {
        alert(result.toString());
      });
    }
    else {
      this.apiService.updateBranch(val).subscribe(result => {
        alert(result.toString());
      });
    }

    if (true) {
      this.closeEvent.emit(true);
    }
  }

  deleteData(): void {
    if (confirm('Are you sure about that?')) {

    }
  }

}

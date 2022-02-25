import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LocalStorageService} from "../../login/local-storage.service";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  userID:string = ''

  @Input() messageData;
  constructor(private activatedRoute: ActivatedRoute,
              private localStorageService: LocalStorageService
              ) { }
  /*Get the ID using Activated Router*/
  ngOnInit() {
    this.activatedRoute.params.subscribe((data) => {
      this.userID = data.id;
    });

    /*Removing data from localStorage using ID*/
    if(this.userID !== '') {
      this.localStorageService.removeValues(this.userID);
    }
  }

}

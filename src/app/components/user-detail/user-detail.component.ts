import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{
  
  public userID!: number;
  public userDetails!: User;
  
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService){

  }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val =>{
      this.userID = val['id'];
      this.fetchUserDetails(this.userID);
    })
  }

  fetchUserDetails(userID: number){
    this.api.getRegisteredUserById(userID).subscribe(res=>{
      this.userDetails = res;
      console.log(this.userDetails);
      
    })
  }

}

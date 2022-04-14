import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collegeinsight';

  constructor(public us:UserService,private router:Router){}

    onSignup(formData:any){

      console.log(formData)
      this.us.createUser(formData).subscribe(
        res=>{
          if(res.message==="User created"){
            alert("User created")
            //navigate to login component
          }
          else{
            alert(res.message)
          }
        },
        err=>{
          console.log(err)
          alert("Something went wrong in user creation")
        }
      )
      }

  userLogout(){
    localStorage.clear();
    this.us.userLoginStatus=false;
  }

}
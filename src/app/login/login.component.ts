import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 //inject UserService obj
 constructor(private us:UserService,private router:Router) { }


 ans:any;
 ngOnInit(): void {
 }

 onLogin(userCredentials:any){
   //console.log(userCredentials)
   this.us.loginUser(userCredentials).subscribe(
    res=>{
        this.ans=res;
        //console.log(this.ans.message)
      if(this.ans.message==="login success"){
        //save token to localstorage
        alert(this.ans.message)
        localStorage.setItem("username",userCredentials.username)
//update userloginstatus
      this.us.userLoginStatus=true;
      this.router.navigateByUrl("/home")
      }
      else{
        alert(this.ans.message)
      }
    },
    err=>{
      console.log(err)
      alert("Something went wrong in login")
    }
   )
 }
 


}
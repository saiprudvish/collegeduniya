import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  colleges:any;
  datss:any;
  constructor(private us:UserService,private router:Router) { }

  ngOnInit(): void {
    this.us.getdata().subscribe(
      res=>{
          this.datss=res.message;
          console.log(this.datss)
      },
      err=>{
        console.log(err)
      }
    )
  }
  status:boolean=false;
getData(obj:any){
  //console.log(obj)
 this.us.getUser(obj).subscribe(
   res=>{
         this.colleges=res.message;
         console.log(this.colleges)
          this.status=true;
         //this.router.navigateByUrl("/profile")
  },
  err=>{
    console.log(err)
    alert("Something went wrong in college data")
  }
 )
}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  objs:any;
  constructor(private us:UserService,private ar:ActivatedRoute) { }

  ngOnInit(): void {
      //get id from url
       
      var url = this.ar.snapshot.paramMap.get('code')
      //console.log(url)
      //get data of movie with this current id
      this.us.getusersData(url).subscribe(
        obj=>{
    
          this.objs=obj.message;
         console.log(this.objs)


        },
        err=>{
          console.log("err in reading data",err)
        }
      )
  }
  

}

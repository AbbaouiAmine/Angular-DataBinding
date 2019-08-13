import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  info={"nom":"ABBAOUI","prenom":"Amine","email":"abbaouiamine@gmail.com"} 

  comments=[];
  comment={"date":null,"message":"TestMessage"}
  new_comment=false;

  addComment()
  {
this.comment.date=new Date();
this.comments.push({"date":this.comment.date,"message":this.comment.message});
this.comment.message='';
  }
}

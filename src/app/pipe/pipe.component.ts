import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
      datapack:any=[{

     code:'001',name:'ram',gender:'male', phone:123
      },
      {

        code:'002',name:'sam',gender:'female', phone:1234
         },
         {

          code:'003',name:'jam',gender:'male', phone:1234
           },
    ];
  constructor() { }

  ngOnInit() {
  }

}

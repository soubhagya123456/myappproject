import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CscService } from '../csc.service';
import { database } from '../database';
@Component({
  selector: 'app-anda',
  templateUrl: './anda.component.html',
  styleUrls: ['./anda.component.css']
})
export class AndaComponent implements OnInit {
    
  createAccountForm: FormGroup;
  
  mydata : database[];
  codedata: {};
  statesdata: {};
  constructor(private mydatabase: CscService) { }

  ngOnInit() {

    this.mydatabase.getdata()
    .subscribe(
       data=>
       {
         this.mydata = data;
       }
    );

  //   this.cscService.getCountries().subscribe(
  //     data => this.namedata = data
  //   );

  //   this.createAccountForm = new FormGroup({
  //     country: new FormControl(''),
  //     state: new FormControl(''),
  //     city: new FormControl('')
  //   });
   }
  
  // onChangeCountry(code: number) {
  //   if (code) {
  //     this.cscService.getStates(code).subscribe(
  //       data => {
  //         this.statesdata = data;
  //         this.codedata = null;
  //       }
  //     );
  //   } else {
  //     this.statesdata = null;
  //     this.codedata = null;
  //   }
  // }

  // onChangeState(states: number) {
  //   if (states) {
  //     this.cscService.getCities(states).subscribe(
  //       data => this.codedata = data
  //     );
  //   } else {
  //     this.codedata = null;
  //   }
  // }

}

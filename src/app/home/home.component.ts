import { Component, OnInit } from '@angular/core';
import { VacationService } from '../services/vacations.service';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit  {
  
   vacationList:any;
  
  constructor(private vacations:VacationService) 
  { this.vacations.get().subscribe(data => {console.log(data); this.vacationList = data;}); }

  ngOnInit() {
  
  }
  

}

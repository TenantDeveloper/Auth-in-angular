import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacationService } from '../services/vacations.service';

@Component({
  selector: 'app-vacancy-details',
  templateUrl: './vacancy-details.component.html',
  styleUrls: ['./vacancy-details.component.css']
})
export class VacancyDetailsComponent implements OnInit {
   vacancy:any;
  constructor(private route: ActivatedRoute , private vacationService:VacationService) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.vacationService.getDetails(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      console.log(data);
      this.vacancy = data;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FetchService } from '../../services/Fetch.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  occupations: string[] = [];
  states: {name: string, abbreviation: string}[] = [];
  failure: string = "";
  success: string = "";
  constructor(private fetchService: FetchService) { }

  ngOnInit(): void {
    this.fetchService.getOptions().subscribe(response => {
      this.occupations = response.occupations;
      this.states = response.states;
      console.log(this.occupations);
      console.log(this.states);
    })
  }

  submit(form: any) {
    if(!form.valid) {
      form.control.markAllAsTouched();
      return;
    }
    this.fetchService.createUser(form.value).subscribe(response => {
      console.log(response);
      this.success = "Account successfully created!";
    }, error => {
      console.log("Error occurred", error);
      this.failure = "Account could not be created. Please try again later."
    });
   }

}

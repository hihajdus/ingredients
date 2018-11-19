import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aplication';

  get getAge() {
    return (new Date().getFullYear()) - this.person.birthdate
  }
  person = {
    name : 'Karolina' ,
    birthdate : 1988 ,
    company:{
      name : 'hi!hajdus'
    }
  }

  counter = 0;

  constructor() {
    setInterval(()=>{
      this.counter++;
    },500)
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unoInteraccion2021Prof';
  nombre = 'lolo';
  fecha = new Date(Date.now());
  mio = ' ';
  escribe() {
    console.log(this.title);
  }
}

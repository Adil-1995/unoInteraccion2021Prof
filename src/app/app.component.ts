import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*
  Aqui podemos mirar como hemos pasado la informacion del nombre
  al hijo
  */
  title = 'titulo';
  nombre = 'lolo';  
  vacia=''
  fecha = new Date(Date.now());
  mio = 'mio ';
  escribe() {
    console.log(this.title);
  }
  
}

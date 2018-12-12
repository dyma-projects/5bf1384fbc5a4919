import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  // Un clic sur le composant "exercice2" doit afficher "clic" dans la console.
  onClick(){
    console.log('clic');
  }
}

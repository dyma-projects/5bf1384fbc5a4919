import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public link: string = "https://angular.dyma.fr";
  public liaisonMoustache: string = "Liaison avec {{}}";
  constructor() { }

  ngOnInit() {
  }

  afficherSurLeConsole(){
    console.log("Liaison avec (), affichage dans le console");
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  phrafes = ["Moviéndo los árboles, mi piel parece agrietable", "el sonido usa de pestañas para sonar","Somos el desasociego y lo inquebrantable","Como se desenreda el punto en reversar al ovillarte los ojos","Está hecho! tan fuerte cómo pudimos felizmente ser","así la llaman, Valiente! bajando la colina","Somos frágiles viajeros sin destino","Somos el hoyo negro que nos capturó"];
  constructor() { }

  ngOnInit() {
  }

}

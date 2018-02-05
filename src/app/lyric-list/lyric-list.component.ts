import { Component, OnInit } from '@angular/core';
import { PHRASES } from '../phrases';

@Component({
  selector: 'app-lyric-list',
  templateUrl: './lyric-list.component.html',
  styleUrls: ['./lyric-list.component.css']
})
export class InputComponent implements OnInit {
   
  phrases = PHRASES;

  constructor() { }

  ngOnInit() {
  }

}

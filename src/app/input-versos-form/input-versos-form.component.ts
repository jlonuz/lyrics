import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PHRASES } from '../phrases';

@Component({
  selector: 'app-input-versos-form',
  templateUrl: './input-versos-form.component.html',
  styleUrls: ['./input-versos-form.component.css']
})
export class InputVersosFormComponent implements OnInit {

  inputVersosForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.inputVersosForm = this.fb.group({
      verso: ['', Validators.required]
    });
  }

  ngOnInit() {}
  addPhrases(){
    PHRASES.push(this.inputVersosForm.value.verso);
  }
}

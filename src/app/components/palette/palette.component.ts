import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {

  inputDOM: HTMLInputElement | null = document.querySelector('input');
  inputValue: any = this.inputDOM?.value;

  constructor() { }

  ngOnInit(): void {
    this.getValue();
  }

  getValue() {
  console.log(this.inputValue);
  }
  

}

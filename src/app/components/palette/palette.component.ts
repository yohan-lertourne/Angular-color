import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palette',
  templateUrl: 'palette.component.html',
  styleUrls: ['palette.component.scss']
})

export class PaletteComponent implements OnInit {

  h: number = 100;
  s: number = 60;
  l: number = 50;

  Square1: string = `background-color: hsl(${this.h}, ${this.s}%, ${this.l}%)`;
  Square2: string = `background-color: hsl(${this.h + 30}, ${this.s}%, ${this.l}%)`;
  Square3: string = `background-color: hsl(${this.h + 180}, ${this.s}%, ${this.l}%)`;

  constructor() { }

  ngOnInit(): void { }

  realTime(): void {
    this.Square1 = `background-color: hsl(${this.h}, ${this.s}%, ${this.l}%)`;
    this.Square2 = `background-color: hsl(${this.h + 30}, ${this.s}%, ${this.l}%)`;
    this.Square3 = `background-color: hsl(${this.h + 180}, ${this.s}%, ${this.l}%)`;
  }
}
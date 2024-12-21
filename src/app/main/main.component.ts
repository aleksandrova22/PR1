import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [FormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  today = new Date;
  dayNg = new Date("01-01-2025");
  timeX = Math.ceil(Math.abs(this.dayNg.getTime() - this.today.getTime()) / (1000 * 3600 * 24));
  val = 100;
  condition = false;
  toggleCondition() { this.condition = !this.condition }




}

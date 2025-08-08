import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-under-construction',
  imports: [CommonModule, RouterModule],
  templateUrl: './under-construction.html',
  styleUrl: './under-construction.css',
  standalone: true,
})
export class UnderConstruction {}

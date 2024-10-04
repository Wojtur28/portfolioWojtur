import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle, MatCardTitle
} from '@angular/material/card';
import {MatAnchor, MatButton} from '@angular/material/button';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    MatCard,
    MatCardHeader,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatCardSubtitle,
    MatCardTitle,
    MatAnchor
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {


}

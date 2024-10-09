import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  logos = [
    {src: 'assets/images/java.png', alt: 'Java logo'},
    {src: 'assets/images/springboot.png', alt: 'Springboot logo'},
    {src: 'assets/images/postgres.png', alt: 'Postgresql logo'},
    {src: 'assets/images/angular.png', alt: 'Angular logo'},
    {src: 'assets/images/docker.png', alt: 'Docker logo'},
    {src: 'assets/images/githubaction.png', alt: 'Github action logo'},
  ]

}

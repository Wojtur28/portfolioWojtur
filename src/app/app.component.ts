import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {ProjectsComponent} from './projects/projects.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatButton, MatMenu, MatMenuItem, MatMenuTrigger, NavbarComponent, FooterComponent, HomeComponent, ProjectsComponent, AboutComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

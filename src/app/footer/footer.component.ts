import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIconAnchor} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatToolbar,
    MatIconAnchor,
    MatIcon,
    MatGridList,
    MatGridTile
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}

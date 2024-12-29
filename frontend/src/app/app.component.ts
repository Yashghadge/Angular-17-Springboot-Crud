import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar'
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatSlideToggleModule,MatToolbarModule,EmployeeListComponent,MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';


  constructor(private renderer: Renderer2) {}


}

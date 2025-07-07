import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../layout/navbar/navbar';
import { Footer } from '../layout/footer/footer'; 
import { RouteAnimation } from '../shared/route-animation/route-animation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Navbar, RouteAnimation, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'AkankshaRokde';
}

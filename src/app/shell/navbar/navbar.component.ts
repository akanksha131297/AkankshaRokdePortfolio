import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-navbar',
	imports: [RouterModule],
	standalone: true,
	templateUrl: './navbar.html',
	styleUrls: ['./navbar.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
	menuOpen = false;

	toggleMenu() {
		this.menuOpen = !this.menuOpen;
	}
	closeMenu() {
		this.menuOpen = false;
	}
}



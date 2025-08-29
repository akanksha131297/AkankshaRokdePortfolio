import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavbarComponent } from './shell/navbar/navbar.component';
import { FooterComponent } from './shell/footer/footer.component';
import { RouteAnimationComponent } from './shared/route-animation/route-animation.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [NavbarComponent, RouteAnimationComponent, FooterComponent],
	templateUrl: './app.html',
	styleUrls: ['./app.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	protected title = 'AkankshaRokde';
}



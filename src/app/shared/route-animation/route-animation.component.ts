import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
	trigger,
	transition,
	style,
	query,
	group,
	animate,
} from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-route-animation',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './route-animation.html',
	styleUrls: ['./route-animation.css'],
	animations: [
		trigger('routeAnimations', [
			transition('* <=> *', [
				query(
					':enter, :leave',
					style({ position: 'fixed', width: '100%' }),
					{ optional: true }
				),
				group([
					query(
						':enter',
						[
							style({ transform: 'translateX(100%)' }),
							animate('0.5s ease-out', style({ transform: 'translateX(0%)' })),
						],
						{ optional: true }
					),
					query(
						':leave',
						[
							style({ transform: 'translateX(0%)' }),
							animate('0.5s ease-out', style({ transform: 'translateX(-100%)' })),
						],
						{ optional: true }
					),
				]),
			]),
		]),
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteAnimationComponent {
	prepareRoute(outlet: RouterOutlet) {
		return (
			outlet &&
			outlet.activatedRouteData &&
			outlet.activatedRouteData['animation']
		);
	}
}



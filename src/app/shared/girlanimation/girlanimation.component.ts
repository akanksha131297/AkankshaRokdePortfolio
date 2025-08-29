import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieComponent, provideLottieOptions, AnimationOptions } from 'ngx-lottie';
import player from 'lottie-web';
@Component({
	selector: 'app-girlanimation',
 standalone: true,
	imports: [CommonModule, LottieComponent],
	templateUrl: './girlanimation.html',
	styleUrls: ['./girlanimation.css'],
	 providers: [
		provideLottieOptions({
			player: () => player
		})
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GirlanimationComponent {
	lottieOptions: AnimationOptions = {
		path: 'assets/animations/girl_lap.json',
		loop: true,
		autoplay: true,
	};
}



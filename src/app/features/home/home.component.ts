import { Component, ChangeDetectionStrategy } from '@angular/core'; 
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-home',
	 imports: [LottieComponent, CommonModule],
	templateUrl: './home.html',
	standalone: true,
	styleUrls: ['./home.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
		lottieOptions: AnimationOptions = {
		path: 'assets/animations/girl_lap.json',
		loop: true,
		autoplay: true,
	};
		bubblesVisible = false;
	private bubblesTimeout: ReturnType<typeof setTimeout> | null = null;
	 showDescription = false;

	onMouseMove(event: MouseEvent) {
		// Show bubbles on cursor move
		this.bubblesVisible = true;
		 this.showDescription = true;


		// Reset bubbles hide timer (hide bubbles after 3 seconds of no mouse movement)
		if (this.bubblesTimeout) clearTimeout(this.bubblesTimeout);
		this.bubblesTimeout = setTimeout(() => {
			this.bubblesVisible = false;
			 this.showDescription = false;

		}, 6000);
	}
}



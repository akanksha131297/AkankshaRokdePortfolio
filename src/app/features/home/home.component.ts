import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-home',
	imports: [LottieComponent, CommonModule, RouterLink],
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

	constructor(private cdr: ChangeDetectorRef) {}

	onMouseMove() {
		this.bubblesVisible = true;
		this.showDescription = true;

		if (this.bubblesTimeout) clearTimeout(this.bubblesTimeout);
		this.bubblesTimeout = setTimeout(() => {
			this.bubblesVisible = false;
			this.showDescription = false;
			this.cdr.markForCheck();
		}, 6000);
		this.cdr.markForCheck();
	}
}

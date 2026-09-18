import {
	Component,
	OnInit,
	OnDestroy,
	Inject,
	PLATFORM_ID,
	ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { GirlanimationComponent } from '../../shared/girlanimation/girlanimation.component';

@Component({
	selector: 'app-about',
	standalone: true,
	imports: [CommonModule, GirlanimationComponent],
	templateUrl: './about.html',
	styleUrls: ['./about.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit, OnDestroy {
	intervalId: ReturnType<typeof setInterval> | null = null;
	userClicked = false;
	currentIndex = 0;
	slideCount = 4;
	autoSlideInterval: number = 5000;
	bubblesVisible = false;
	private hideTimeout?: ReturnType<typeof setTimeout> | null;
	isBrowser: boolean;

	constructor(@Inject(PLATFORM_ID) private platformId: Object) {
		this.isBrowser = isPlatformBrowser(platformId);
	}

	ngOnInit() {
		if (this.isBrowser) {
			this.startAutoSlide();
		}
	}

	startAutoSlide() {
		this.intervalId = setInterval(() => {
			if (!this.userClicked) {
				this.currentIndex = (this.currentIndex + 1) % this.slideCount;
			}
		}, this.autoSlideInterval);
	}

	onDotClick(index: number) {
		this.currentIndex = index;
		this.userClicked = true;
		if (this.intervalId) clearInterval(this.intervalId as unknown as number);
	}

	ngOnDestroy() {
		if (this.intervalId) clearInterval(this.intervalId as unknown as number);
		if (this.hideTimeout) clearTimeout(this.hideTimeout as unknown as number);
	}

	onMouseMove(event: MouseEvent) {
		if (!this.isBrowser) return;

		this.bubblesVisible = true;
		if (this.hideTimeout) clearTimeout(this.hideTimeout as unknown as number);
		this.hideTimeout = setTimeout(() => {
			this.bubblesVisible = false;
		}, 3000);
	}
}



import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Girlanimation } from '../../shared/girlanimation/girlanimation';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, Girlanimation],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit, OnDestroy {
  intervalId: any;
  userClicked = false;
  currentIndex = 0;
  slideCount = 3;
  autoSlideInterval: any;
  bubblesVisible = false;
  private hideTimeout?: any;
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
    }, 5000);
  }

  onDotClick(index: number) {
    this.currentIndex = index;
    this.userClicked = true;
    if (this.intervalId) clearInterval(this.intervalId);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isBrowser) return;

    this.bubblesVisible = true;
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
    this.hideTimeout = setTimeout(() => {
      this.bubblesVisible = false;
    }, 3000);
  }
}

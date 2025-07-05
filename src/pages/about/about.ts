import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Girlanimation } from '../../shared/girlanimation/girlanimation'; 


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, Girlanimation],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit {
  intervalId: any;
  userClicked = false; 
  currentIndex = 0;
  slideCount = 3; // number of slides (dots)
  autoSlideInterval: any;
  bubblesVisible = false;
  private hideTimeout?: any;
    ngOnInit() {
          this.startAutoSlide();
     }
    
startAutoSlide() {
  this.intervalId = setInterval(() => {
      if (!this.userClicked) {
        this.currentIndex = (this.currentIndex + 1) % 3;
      }
    }, 5000);
}
 onDotClick(index: number) {
    this.currentIndex = index;
    this.userClicked = true; // ✅ Stop further auto sliding
    if (this.intervalId) clearInterval(this.intervalId); // Optional: fully stop the interval
  }


ngOnDestroy() {
  if (this.intervalId) clearInterval(this.intervalId);
}
 onMouseMove(event: MouseEvent) {
    this.bubblesVisible = true;

    // Clear previous timeout if any
    if (this.hideTimeout) clearTimeout(this.hideTimeout);

    // Hide bubbles after 3 seconds of no mouse move
    this.hideTimeout = setTimeout(() => {
      this.bubblesVisible = false;
    }, 3000);
  }
}

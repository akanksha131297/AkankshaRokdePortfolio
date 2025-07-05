import { Component } from '@angular/core'; 
import { LottieComponent  } from 'ngx-lottie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
   imports: [LottieComponent, CommonModule],
  templateUrl: './home.html',
  standalone: true,
  styleUrl: './home.css'
})
export class Home {
    lottieOptions = {
   path: 'assets/animations/girl_lap.json',
    loop: true,
    autoplay: true,
  };
    bubblesVisible = false;
  private bubblesTimeout: any;
   showDescription = false;

  onMouseMove(event: MouseEvent) {
    // Show bubbles on cursor move
    this.bubblesVisible = true;
     this.showDescription = true;


    // Reset bubbles hide timer (hide bubbles after 3 seconds of no mouse movement)
    clearTimeout(this.bubblesTimeout);
    this.bubblesTimeout = setTimeout(() => {
      this.bubblesVisible = false;
       this.showDescription = false;

    }, 5000);
  }
}
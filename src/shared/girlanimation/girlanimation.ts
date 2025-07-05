import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieComponent, provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';
@Component({
  selector: 'app-girlanimation',
 standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './girlanimation.html',
  styleUrl: './girlanimation.css',
   providers: [
    provideLottieOptions({
      player: () => player
    })
  ],
})
export class Girlanimation {
lottieOptions = {
    path: 'assets/animations/girl_lap.json',
    loop: true,
    autoplay: true,
  };
}

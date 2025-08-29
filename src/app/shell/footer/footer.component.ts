import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [RouterModule],
	templateUrl: './footer.html',
	styleUrls: ['./footer.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {}



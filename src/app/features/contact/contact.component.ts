import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GirlanimationComponent } from '../../shared/girlanimation/girlanimation.component'; 
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../core/services/email.service';

@Component({
	selector: 'app-contact',
	standalone: true,
	 imports: [CommonModule, FormsModule , GirlanimationComponent, ReactiveFormsModule],
	templateUrl: './contact.html',
	styleUrls: ['./contact.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
	contactForm!: FormGroup;
	constructor(private fb: FormBuilder, private emailService: EmailService) {
		this.contactForm = this.fb.group({
			name: ['', [Validators.required, Validators.minLength(2)]],
			email: ['', [Validators.required, Validators.email]],
			message: ['', [Validators.required, Validators.minLength(10)]],
		});
	}
	 sendEmail() {
		 if (this.contactForm.invalid) return;
		 this.emailService
			 .sendContactEmail(this.contactForm.value)
			 .then(() => {
				 alert('Email sent successfully!');
				 this.contactForm.reset();
			 })
			 .catch((err) => {
				 alert('Failed to send email. Try again.');
				 console.error(err);
			 });
	 }
}



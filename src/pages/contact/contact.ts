import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Girlanimation } from '../../shared/girlanimation/girlanimation'; 
import emailjs from 'emailjs-com';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
   imports: [CommonModule, FormsModule , Girlanimation, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  contactForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
   sendEmail() {
     if (this.contactForm.invalid) return;
    emailjs.send(
      'service_t64t5o9',
      'template_ovn6nxn',
       this.contactForm.value,
      'gImFMnijBGlEiZgsj'
    ).then(() => {
      alert('Email sent successfully!');
      this.contactForm.reset();
    }, (err) => {
      alert('Failed to send email. Try again.');
      console.error(err);
    });
  }
 
}

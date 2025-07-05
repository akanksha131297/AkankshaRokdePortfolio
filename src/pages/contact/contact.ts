import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Girlanimation } from '../../shared/girlanimation/girlanimation'; 
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
   imports: [CommonModule, FormsModule , Girlanimation],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  formData = {
    name: '',
    email: '',
    message: ''
  };
   sendEmail() {
    emailjs.send(
      'service_t64t5o9',
      'template_ovn6nxn',
      this.formData,
      'gImFMnijBGlEiZgsj'
    ).then(() => {
      alert('Email sent successfully!');
      this.formData = { name: '', email: '', message: '' };
    }, (err) => {
      alert('Failed to send email. Try again.');
      console.error(err);
    });
  }
 
}

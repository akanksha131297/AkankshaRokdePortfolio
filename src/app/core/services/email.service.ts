import { Inject, Injectable } from '@angular/core';
import { EMAIL_JS_CONFIG, EmailJsConfig } from '../tokens/email.tokens';
import emailjs from 'emailjs-com';

export type ContactFormPayload = Record<string, unknown> & {
	name: string;
	email: string;
	message: string;
};

@Injectable({ providedIn: 'root' })
export class EmailService {
	constructor(@Inject(EMAIL_JS_CONFIG) private readonly config: EmailJsConfig) {}

	sendContactEmail(payload: ContactFormPayload): Promise<void> {
		return emailjs
			.send(this.config.serviceId, this.config.templateId, payload, this.config.publicKey)
			.then(() => undefined);
	}
}



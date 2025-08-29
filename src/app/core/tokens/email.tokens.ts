import { InjectionToken } from '@angular/core';

export interface EmailJsConfig {
	serviceId: string;
	templateId: string;
	publicKey: string;
}

export const EMAIL_JS_CONFIG = new InjectionToken<EmailJsConfig>('EMAIL_JS_CONFIG');



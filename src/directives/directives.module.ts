import { NgModule } from '@angular/core';
import { BrPhoneMaskDirective } from './br-phone-mask/br-phone-mask';
import { BrCurrencyMaskDirective } from './br-currency-mask/br-currency-mask';
@NgModule({
	declarations: [BrPhoneMaskDirective,
    BrCurrencyMaskDirective],
	imports: [],
	exports: [BrPhoneMaskDirective,
    BrCurrencyMaskDirective]
})
export class DirectivesModule {}

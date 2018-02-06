import { NgModule } from '@angular/core';
import { BrPhoneMaskDirective } from './br-phone-mask/br-phone-mask';
import { BrCurrencyMaskDirective } from './br-currency-mask/br-currency-mask';
import { ParallaxDirective } from './parallax/parallax';
@NgModule({
	declarations: [BrPhoneMaskDirective,
    BrCurrencyMaskDirective,
    ParallaxDirective],
	imports: [],
	exports: [BrPhoneMaskDirective,
    BrCurrencyMaskDirective,
    ParallaxDirective]
})
export class DirectivesModule {}

import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TooltipController } from './tooltip.cotroller';
import { TooltipBox } from './tooltip-box.component';
import { Tooltip } from './tooltip.directive';
var TooltipsModule = (function () {
    function TooltipsModule() {
    }
    TooltipsModule.forRoot = function () {
        return {
            ngModule: TooltipsModule,
            providers: [TooltipController]
        };
    };
    TooltipsModule.decorators = [
        { type: NgModule, args: [{
                    entryComponents: [TooltipBox],
                    declarations: [Tooltip, TooltipBox],
                    imports: [IonicModule],
                    exports: [Tooltip]
                },] },
    ];
    return TooltipsModule;
}());
export { TooltipsModule };
//# sourceMappingURL=tooltips.module.js.map
import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from 'ionic-angular';
import { Tooltip } from './tooltip.directive';
import { TooltipsModule } from './tooltips.module';
var TestPage = (function () {
    function TestPage(_viewport) {
        this._viewport = _viewport;
        this.active = false;
    }
    TestPage.prototype.getButtonNativeElement = function () {
        return this.button.nativeElement;
    };
    TestPage.prototype.getTooltip = function () {
        return this.tooltip;
    };
    TestPage.prototype.ngAfterViewInit = function () {
        this.tooltip.appRef.components.push({
            _component: this
        });
    };
    TestPage.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-view',
                    template: '<button #btn tooltip="Hello world" [duration]="1000" [active]="active">Click me</button>'
                },] },
    ];
    /** @nocollapse */
    TestPage.ctorParameters = function () { return [
        { type: ViewContainerRef, },
    ]; };
    TestPage.propDecorators = {
        "button": [{ type: ViewChild, args: ['btn',] },],
        "tooltip": [{ type: ViewChild, args: [Tooltip,] },],
    };
    return TestPage;
}());
describe('Tooltip', function () {
    var de, comp, fixture, tooltip, getTooltipBox;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TestPage],
            imports: [
                IonicModule.forRoot(TestPage),
                BrowserAnimationsModule,
                // needed for TooltipsModule
                TooltipsModule.forRoot(),
            ]
        }).compileComponents();
    }));
    beforeEach(function () {
        console.log(!!fixture, !!comp, !!de, !!tooltip);
        fixture = TestBed.createComponent(TestPage);
        fixture.autoDetectChanges(true);
        comp = fixture.componentInstance;
        de = fixture.debugElement;
        tooltip = comp.getTooltip();
        getTooltipBox = function () { return tooltip.tooltipElement.instance; };
    });
    it('container page should exist', function () {
        expect(comp).toBeDefined();
        expect(comp instanceof TestPage).toBeTruthy();
    });
    it('should display TooltipBox on click for 1s', function () {
        tooltip.onClick();
        fixture.detectChanges();
        expect(tooltip.tooltipElement).toBeDefined();
        setTimeout(function () {
            fixture.detectChanges();
            expect(tooltip.tooltipElement).toBeUndefined();
        }, 1000);
    });
    it('should display TooltipBox on press for 1s', function () {
        tooltip.event = 'press';
        tooltip.onPress();
        fixture.detectChanges();
        expect(tooltip.tooltipElement).toBeDefined();
        setTimeout(function () {
            fixture.detectChanges();
            expect(tooltip.tooltipElement).toBeUndefined();
        }, 1000);
    });
    it('should display TooltipBox when active', function () {
        tooltip.active = true;
        expect(tooltip.tooltipElement).toBeDefined();
        expect(tooltip.active).toBeTruthy();
    });
    it('should contain "Hello world"', function () {
        tooltip.active = true;
        fixture.detectChanges();
        expect(getTooltipBox().getNativeElement().innerText).toEqual('Hello world');
    });
});
//# sourceMappingURL=tooltip.spec.js.map
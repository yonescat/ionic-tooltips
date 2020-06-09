import { Tooltip } from './tooltip.directive';
export declare class TooltipController {
    allowMultiple: boolean;
    activeTooltips: Tooltip[];
    addTooltip(instance: Tooltip): void;
    removeTooltip(instance: Tooltip): void;
    hideAll(): void;
}

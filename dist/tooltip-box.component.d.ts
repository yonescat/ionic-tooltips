import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
export declare class TooltipBox implements AfterViewInit {
    elementRef: ElementRef;
    private rnd;
    fadeState: string;
    text: string;
    tooltipHtml: string;
    arrow: string;
    posTop: number;
    posLeft: number;
    getNativeElement(): HTMLElement;
    init: Promise<void>;
    private initResolve;
    constructor(elementRef: ElementRef, rnd: Renderer2);
    ngAfterViewInit(): void;
}

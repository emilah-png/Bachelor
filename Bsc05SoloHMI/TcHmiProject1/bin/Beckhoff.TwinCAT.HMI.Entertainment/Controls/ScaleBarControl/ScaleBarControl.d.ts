declare module TcHmi.Controls.Entertainment {
    export class ScaleBar extends TcHmi.Controls.System.TcHmiControl {
        /**
            * @description Constructor of the control
            * @param {JQuery} element Element from HTML (internal, do not use)
            * @param {JQuery} pcElement precompiled Element (internal, do not use)
            * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
            * @returns {void}
            */
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __elementTemplateRoot: JQuery;
        protected __elementContainer: JQuery;
        protected __elementMainTick: JQuery | undefined;
        protected __elementSubTick: JQuery | undefined;
        /**html attribute: data-tchmi-Orientation*/
        protected __Orientation: Orientation | null | undefined;
        /**html attribute: data-tchmi-Alignment*/
        protected __Alignment: HorizontalAlignment | null | undefined;
        /**html attribute: data-tchmi-Show-End-Ticks*/
        protected __ShowEndTicks: boolean;
        /**html attribute: data-tchmi-Min-Value*/
        protected __MinValue: number | undefined;
        /**html attribute: data-tchmi-Max-Value*/
        protected __MaxValue: number | undefined;
        /**html attribute: data-tchmi-Tick-Color*/
        protected __TickColor: SolidColor | null | undefined;
        /**html attribute: data-tchmi-Main-Tick-Size*/
        protected __MainTickSize: SizeUnit | null | undefined;
        /**html attribute: data-tchmi-Sub-Tick-Size*/
        protected __SubTickSize: SizeUnit | null | undefined;
        /**html attribute: data-tchmi-Tick-Range*/
        protected __TickRange: TickRange | null | undefined;
        /**html attribute: data-tchmi-Start-Ticks-With-Min-Value*/
        protected __StartTicksWithMinValue: boolean;
        protected __MainTickCount: number;
        protected __SubTickCount: number;
        protected __internalMaxValue: number;
        protected __internalMinValue: number;
        /**
            * If raised, the control object exists in control cache and constructor of each inheritation level was called.
            * Call attribute processor functions here to initialize default values!
            */
        __previnit(): void;
        /**
            * @description Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
            * @returns {void}
            */
        __init(): void;
        /**
        * @description Is called by tachcontrol() after the control instance gets part of the current DOM.
        * Is only allowed to be called from the framework itself!
        */
        __attach(): void;
        /**
        * @description Is called by tachcontrol() after the control instance is no longer part of the current DOM.
        * Is only allowed to be called from the framework itself!
        */
        __detach(): void;
        /**
        * @description Destroy the current control instance.
        * Will be called automatically if system destroys control!
        */
        destroy(): void;
        protected __setInternalMinMaxValue(): void;
        setOrientation(valueNew: string | null): void;
        getOrientation(): Orientation | null | undefined;
        setAlignment(valueNew: HorizontalAlignment | null): void;
        getAlignment(): HorizontalAlignment | null | undefined;
        setShowEndTicks(valueNew: boolean): void;
        getShowEndTicks(): boolean;
        setMinValue(valueNew: number | undefined): void;
        getMinValue(): number | undefined;
        setMaxValue(valueNew: number | undefined): void;
        getMaxValue(): number | undefined;
        setStartTicksWithMinValue(valueNew: boolean): void;
        getStartTicksWithMinValue(): boolean;
        setTickColor(valueNew: SolidColor | null | undefined): void;
        getTickColor(): SolidColor | null | undefined;
        setMainTickSize(valueNew: SizeUnit | undefined): void;
        getMainTickSize(): SizeUnit | null | undefined;
        setSubTickSize(valueNew: SizeUnit | undefined): void;
        getSubTickSize(): SizeUnit | null | undefined;
        protected __processTickConfiguration(): void;
        setTickRange(valueNew: TickRange | undefined): void;
        getTickRange(): TickRange | null | undefined;
        protected __processTicks(): void;
    }
    interface SizeUnit {
        MeasurementValueThickness: number;
        MeasurementUnitThickness: FontSizeUnit;
        MeasurementValueLength: number;
        MeasurementUnitLength: FontSizeUnit;
    }
    interface TickRange {
        mainTickRange: number;
        subTickRange: number;
    }
    type Orientation = 'Vertical' | 'Horizontal' | 'HorizontalInverted' | 'VerticalInverted';
    export {};
}

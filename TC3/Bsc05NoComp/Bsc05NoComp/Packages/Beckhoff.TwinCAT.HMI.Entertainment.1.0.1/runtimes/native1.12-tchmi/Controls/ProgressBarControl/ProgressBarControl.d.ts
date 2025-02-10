declare module TcHmi.Controls.Entertainment {
    type Orientation = 'Vertical' | 'Horizontal' | 'HorizontalInverted' | 'VerticalInverted';
    export class ProgressBar extends TcHmi.Controls.System.TcHmiControl {
        /**
         * @description Constructor of the control
         * @param {JQuery} element Element from HTML (internal, do not use)
         * @param {JQuery} pcElement precompiled Element (internal, do not use)
         * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
         * @returns {void}
         */
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __elementTemplateRoot: JQuery;
        protected __elementBar: JQuery;
        /** html attribute: data-tchmi-progress-color*/
        protected __ProgressColor: Color | null | undefined;
        /** html attribute: data-tchmi-orientation*/
        protected __Orientation: Orientation | null | undefined;
        /** html attribute: data-tchmi-progress*/
        protected __Progress: number | null | undefined;
        /** html attribute: data-tchmi-last-Value*/
        protected __LastValue: number | null | undefined;
        /** html attribute: data-tchmi-base-animation-time*/
        protected __BaseAnimationTime: number | null | undefined;
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
        setOrientation(valueNew: string | null): void;
        getOrientation(): Orientation | null | undefined;
        setProgressColor(valueNew: Color | null | undefined): void;
        getProgressColor(): Color | null | undefined;
        protected __processProgressColor(): void;
        setProgress(valueNew: number | null): void;
        getProgress(): number | null | undefined;
        getLastValue(): number | null | undefined;
        protected __processProgress(): void;
        setBaseAnimationTime(valueNew: number | null): void;
        getBaseAnimationTime(): number | null | undefined;
        protected __processBaseAnimationTime(): void;
    }
    export {};
}

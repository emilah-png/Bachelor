declare module TcHmi.Controls.Entertainment {
    class ProgressRing extends TcHmi.Controls.System.TcHmiControl {
        /**
            * @description Constructor of the control
            * @param {JQuery} element Element from HTML (internal, do not use)
            * @param {JQuery} pcElement precompiled Element (internal, do not use)
            * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
            * @returns {void}
            */
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __elementTemplateRoot: JQuery;
        protected __elementSvgContainer: JQuery;
        protected __elementSvgCircle: JQuery;
        protected __elementText: JQuery;
        /** html attribute: data-tchmi-text-font-size */
        protected __textFontSize: number | undefined;
        /** html attribute: data-tchmi-text-font-size-unit */
        protected __textFontSizeUnit: FontSizeUnit | undefined;
        /** html attribute: data-tchmi-text-font-family*/
        protected __textFontFamily: FontFamily | null | undefined;
        /** html attribute: data-tchmi-text-font-style*/
        protected __textFontStyle: FontStyle | undefined;
        /** html attribute: data-tchmi-text-font-weight*/
        protected __textFontWeight: FontWeight | undefined;
        /** html attribute: data-tchmi-word-wrap*/
        protected __wordWrap: boolean | undefined;
        /** html attribute: data-tchmi-text-padding*/
        protected __textPadding: TcHmi.FourSidedCss | null | undefined;
        /** html attribute: data-tchmi-text-horizontal-alignment*/
        protected __textHorizontalAlignment: TcHmi.HorizontalAlignment | null | undefined;
        /** html attribute: data-tchmi-text-position*/
        protected __textPosition: TcHmi.VerticalAlignment | null | undefined;
        /** html attribute: data-tchmi-text-textcolor*/
        protected __textColor: SolidColor | null | undefined;
        protected __ProgressColor: SolidColor | null | undefined;
        protected __FillColor: SolidColor | null | undefined;
        protected __LineWidth: number | null | undefined;
        protected __Progress: number | null | undefined;
        protected __RotateIntervalTime: number | null | undefined;
        protected __TransitionTime: number | null | undefined;
        protected __CircleStartPoint: number | null | undefined;
        protected __ShowValue: boolean | null | undefined;
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
        setProgressColor(valueNew: SolidColor | null | undefined): void;
        getProgressColor(): SolidColor | null | undefined;
        protected __processProgressColor(): void;
        setFillColor(valueNew: SolidColor | null | undefined): void;
        getFillColor(): SolidColor | null | undefined;
        protected __processFillColor(): void;
        setLineWidth(valueNew: number | null): void;
        getLineWidth(): number | null | undefined;
        protected __processLineWidth(): void;
        setProgress(valueNew: number | null): void;
        getProgress(): number | null | undefined;
        protected __processProgress(): void;
        setRotateIntervalTime(valueNew: number | null): void;
        getRotateIntervalTime(): number | null | undefined;
        protected __processRotateIntervalTime(): void;
        setTransitionTime(valueNew: number | null): void;
        getTransitionTime(): number | null | undefined;
        protected __processTransitionTime(): void;
        setCircleStartPoint(valueNew: number | null): void;
        getCircleStartPoint(): number | null | undefined;
        protected __processCircleStartPoint(): void;
        setShowValue(valueNew: boolean | null): void;
        /**
        * Returns the current value of wordWrap.
        * @returns The current value of wordWrap.
        */
        getShowValue(): boolean | null | undefined;
        /**
        * Processes the current wordWrap attribute value.
        */
        protected __processShowValue(): void;
        setTextFontSize(valueNew: number | null): void;
        /**
        * Returns the current value of textFontSize.
        * @returns The current value of textFontSize.
        */
        getTextFontSize(): number | undefined;
        /**
        * Processes the current textFontSize attribute value.
        */
        protected __processTextFontSize(): void;
        setTextFontSizeUnit(valueNew: FontSizeUnit | null): void;
        /**
        * Returns the current value of textFontSizeUnit.
        * @returns The current value of textFontSizeUnit.
        */
        getTextFontSizeUnit(): FontSizeUnit | undefined;
        setTextFontFamily(valueNew: FontFamily | null): void;
        /**
        * Returns the current value of textFontFamily.
        * @returns The current value of textFontFamily.
        */
        getTextFontFamily(): string | null | undefined;
        /**
        * Processes the current textFontFamily attribute value.
        */
        protected __processTextFontFamily(): void;
        setTextFontStyle(valueNew: FontStyle | null): void;
        /**
        * Returns the current value of textFontStyle.
        * @returns The current value of textFontStyle.
        */
        getTextFontStyle(): FontStyle | undefined;
        /**
        * Processes the current textFontStyle attribute value.
        */
        protected __processTextFontStyle(): void;
        setTextFontWeight(valueNew: FontWeight | null): void;
        /**
        * Returns the current value of textFontWeight.
        * @returns The current value of textFontWeight.
        */
        getTextFontWeight(): FontWeight | undefined;
        /**
        * Processes the current textFontWeight attribute value.
        */
        protected __processTextFontWeight(): void;
        setWordWrap(valueNew: boolean | null): void;
        /**
        * Returns the current value of wordWrap.
        * @returns The current value of wordWrap.
        */
        getWordWrap(): boolean | undefined;
        /**
        * Processes the current wordWrap attribute value.
        */
        protected __processWordWrap(): void;
        setTextPadding(valueNew: FourSidedCss | null): void;
        protected __onResolverForTextPaddingWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>) => void;
        /**
        * Returns the current value of the member variable textPadding.
        */
        getTextPadding(): FourSidedCss | null | undefined;
        /**
        * Processes the current value of textPadding and forwards it to the target span element in template html.
        * The current value of textPadding is only forwarded if it is no binding expression.
        */
        protected __processTextPadding(): void;
        setTextHorizontalAlignment(valueNew: TcHmi.HorizontalAlignment | null): void;
        /**
        * Returns the current value of horizontalTextAligment.
        * @returns The current value of horizontalTextAligment.
        */
        getTextHorizontalAlignment(): HorizontalAlignment | null | undefined;
        /**
        * Processes the current textHorizontalAlignment attribute value.
        */
        protected __processTextHorizontalAlignment(): void;
        setTextPosition(valueNew: TcHmi.VerticalAlignment | null): void;
        /**
        * Returns the current value of textVerticalAlignment.
        * @returns The current value of textVerticalAlignment.
        *                                                  Possible Values: "Top", "Bottom", "Center"
        */
        getTextPosition(): VerticalAlignment | null | undefined;
        /**
        * Processes the current textVerticalAlignment attribute value.
        */
        protected __processTextPosition(): void;
        setTextColor(valueNew: SolidColor | null): void;
        getTextColor(): SolidColor | null | undefined;
        protected __processTextColor(): void;
    }
}

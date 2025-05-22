declare module TcHmi.Controls.Entertainment.TabletNavigation {
    export class NavigationControl extends TcHmi.Controls.System.TcHmiControl {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __TouchEvent: TouchEvent | null;
        protected __MouseEvent: TouchEvent | null;
        protected __LastGridSize: number | undefined;
        protected __ItemCount: number | undefined;
        /** html attribute: data-tchmi-Item-List*/
        protected __ItemList: Item.IButtonElement[] | null | undefined;
        /** html attribute: data-tchmi-Button-Color*/
        protected __ButtonColor: Color | null | undefined;
        /** html attribute: data-tchmi-Button-Color-Active*/
        protected __ButtonColorActive: Color | null | undefined;
        /** html attribute: data-tchmi-Text-Color*/
        protected __TextColor: SolidColor | null | undefined;
        /** html attribute: data-tchmi-Text-Color-Active*/
        protected __TextColorActive: SolidColor | null | undefined;
        /** html attribute: data-tchmi-Page-Indicator-Color*/
        protected __PageIndicatorColor: Color | null | undefined;
        /** html attribute: data-tchmi-Page-Indicator-Color-Active*/
        protected __PageIndicatorColorActive: Color | null | undefined;
        /** html attribute: data-tchmi-diag-circle-color-info*/
        protected __DiagColorInfo: Color | null | undefined;
        /** html attribute: data-tchmi-diag-circle-color-info*/
        protected __DiagColorWarning: Color | null | undefined;
        /** html attribute: data-tchmi-diag-circle-color-alarm*/
        protected __DiagColorAlarm: Color | null | undefined;
        /** html attribute: data-tchmi-diag-circle-color-critical*/
        protected __DiagColorCritical: Color | null | undefined;
        /** html attribute: data-tchmi-Button-Border-Color*/
        protected __ButtonBorderColor: SolidColor | null | undefined;
        /** html attribute: data-tchmi-Button-Border-Active*/
        protected __ButtonBorderColorActive: SolidColor | null | undefined;
        /** html attribute: data-tchmi-ButtonePadding*/
        protected __ButtonPadding: FourSidedCss | undefined;
        /** html attribute: data-tchmi-ButtonBorderRadius*/
        protected __ButtonBorderRadius: BorderRadius | null | undefined;
        /** html attribute: data-tchmi-text-font-size*/
        protected __textFontSize: number | undefined;
        /** html attribute: data-tchmi-text-font-size-unit*/
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
        /** html attribute: data-tchmi-Interaction*/
        protected __Interaction: Interaction | null | undefined;
        /** html attribute: data-tchmi-CurButtonSize*/
        protected __ButtonSize: number | undefined;
        /** html attribute: data-tchmi-GapSize*/
        protected __GapSize: number | undefined;
        /** html attribute: data-tchmi-NoInteractionTime*/
        protected __NoInteractionTime: number | undefined;
        /** html attribute: data-tchmi-PageIndicatorPosition*/
        protected __PageIndicatorPosition: Position | undefined | null;
        /** html attribute: data-tchmi-DiagState*/
        protected __GridSize: number;
        /** html attribute: data-tchmi-DiagState*/
        protected __GridCount: number | undefined;
        /** html attribute: data-tchmi-DiagState*/
        protected __CurrentPage: number | undefined;
        protected __SwipeAnimationDuration: number;
        protected __TimerSwipeAnimation: number | undefined;
        protected __lastContentPage: string | undefined | null;
        protected __Touch: number;
        protected __NoInteractionTimer: number | undefined;
        protected __tmpItemList: Item.IButtonElement[] | null | undefined;
        protected __DefaultTargetContent: string | null | undefined;
        protected __TargetRegionControl: TcHmi.Controls.System.TcHmiRegion | null | undefined;
        protected __TargetRegionControlSymbolDestroyWatch: DestroyFunction | null | undefined;
        protected __TargetRegionControlSymbol: TcHmi.Symbol<TcHmi.Controls.System.TcHmiRegion> | null | undefined;
        protected __elementButtonControl: TcHmi.Controls.Entertainment.TabletNavigation.Button[] | null | undefined;
        protected __elementTemplateRoot: JQuery | null | undefined;
        protected __elementContainer: JQuery | null | undefined;
        protected __elementGrid: JQuery | null | undefined;
        protected __elementButton: JQuery | null | undefined;
        protected __elementButtonIcon: JQuery | null | undefined;
        protected __elementButtonIconActive: JQuery | null | undefined;
        protected __elementButtonText: JQuery | null | undefined;
        protected __elementButtonDiagCircle: JQuery | null | undefined;
        protected __elementButtonGarage: JQuery | null | undefined;
        protected __elementPageIndicator: JQuery | null | undefined;
        protected __elementPageIndicatorContainer: JQuery | null | undefined;
        protected __elementPageIndicatorInnerContainer: JQuery | null | undefined;
        /** Event handlers */
        protected __mouseDownHandler: (event: MouseEvent) => void;
        protected __mouseUpHandler: (event: MouseEvent) => void;
        protected __touchStartHandler: (event: TouchEvent) => void;
        protected __touchEndorCancelHandler: (event: TouchEvent) => void;
        protected __onIndicatorClickHandler: (event: MouseEvent) => void;
        protected __onIndicatorTouchDownHandler: (event: TouchEvent) => void;
        protected __onIndicatorTouchEndOrCancelHandler: (event: TouchEvent) => void;
        protected __destroyEventTouchMove: DestroyFunction | null;
        protected __destroyEventMouseMove: DestroyFunction | null;
        protected __destroyEventPageIndicator: DestroyFunction | null;
        protected __destroyOnResizedListener: DestroyFunction | null;
        protected __destroyButtonListener: DestroyFunction[] | null;
        protected __ClickTimeoutId: number;
        protected __touchLockTimeoutId: number;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        protected __onResized(): () => void;
        protected setItemList(valueNew: Item.IButtonElement[]): void;
        getItemList(): Item.IButtonElement[] | null | undefined;
        protected __onResolverForItemsDataCallback(): (data: any) => void;
        setButtonColor(valueNew: Color | null): void;
        getButtonColor(): Color | null | undefined;
        protected __processButtonColor(): void;
        setButtonColorActive(valueNew: Color | null): void;
        getButtonColorActive(): Color | null | undefined;
        protected __processButtonColorActive(): void;
        setTextColor(valueNew: SolidColor | null): void;
        protected __onResolverForTextColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
        getTextColor(): SolidColor | null | undefined;
        protected __processTextColor(): void;
        setTextColorActive(valueNew: SolidColor): void;
        getTextColorActive(): SolidColor | null | undefined;
        protected __processTextColorActive(): void;
        setPageIndicatorColor(valueNew: Color | null): void;
        getPageIndicatorColor(): Color | null | undefined;
        protected __processPageIndicatorColor(): void;
        setPageIndicatorColorActive(valueNew: Color): void;
        getPageIndicatorColorActive(): Color | null | undefined;
        protected __processPageIndicatorColorActive(): void;
        setDiagCircleColorInfo(valueNew: Color | null): void;
        getDiagCircleColorInfo(): Color | null | undefined;
        protected __processDiagCircleColorInfo(): void;
        setDiagCircleColorWarning(valueNew: Color | null): void;
        getDiagCircleColorWarning(): Color | null | undefined;
        protected __processDiagCircleColorWarning(): void;
        setDiagCircleColorAlarm(valueNew: Color | null): void;
        getDiagCircleColorAlarm(): Color | null | undefined;
        protected __processDiagCircleColorAlarm(): void;
        setDiagCircleColorCritical(valueNew: Color | null): void;
        getDiagCircleColorCritical(): Color | null | undefined;
        protected __processDiagCircleColorCritical(): void;
        setButtonBorderColor(valueNew: SolidColor | null): void;
        getButtonBorderColor(): SolidColor | null | undefined;
        protected __processButtonBorderColor(): void;
        setButtonBorderColorActive(valueNew: SolidColor | null): void;
        getButtonBorderColorActive(): SolidColor | null | undefined;
        protected __processButtonBorderColorActive(): void;
        setButtonBorderRadius(valueNew: BorderRadius | null): void;
        /**
        * Returns the current border-radius value.
        * @preserve (Part of the public API)
        */
        getButtonBorderRadius(): BorderRadius | null | undefined;
        /**
        * The watch callback for the borderRadius object resolver.
        */
        protected __onResolverForButtonBorderRadiusWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<BorderRadius>) => void;
        /**
        * Processes the current border-radius attribute.
        */
        protected __processButtonBorderRadius(): void;
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
        setInteraction(valueNew: Interaction | null | undefined): void;
        getInteraction(): Interaction | null | undefined;
        setButtonSize(valueNew: number | null): void;
        getButtonSize(): number | undefined;
        setGapSize(valueNew: number | null): void;
        getGapSize(): number | undefined;
        setTargetRegionControlSymbol(valueNew: TcHmi.Symbol<TcHmi.Controls.System.TcHmiRegion> | null): void;
        protected __onTargetRegionControlSymbol(): (data: TcHmi.Symbol.IReadResultObject<TcHmi.Controls.System.TcHmiRegion>) => void;
        /**
        * TargetRegionControlSymbol getter
        */
        getTargetRegionControlSymbol(): Symbol<System.TcHmiRegion> | null | undefined;
        protected __processTargetRegionControlSymbol(ctrl?: TcHmi.Controls.System.TcHmiRegion | null): void;
        setDefaultTargetContent(valueNew: string | null): void;
        getDefaultTargetContent(): string | null | undefined;
        setNoInteractionTime(valueNew: number | null): void;
        getNoInteractionTime(): number | undefined;
        protected __processNoInteractionTime(): void;
        setButtonPadding(valueNew: FourSidedCss | null): void;
        getButtonPadding(): FourSidedCss | undefined;
        protected __onResolverForButtonPadding: (data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>) => void;
        protected __processButtonPadding(): void;
        setPageIndicatorPosition(valueNew: Position | null | undefined): void;
        /**
        * Returns the current value of textVerticalAlignment.
        * @returns The current value of textVerticalAlignment.
        *   Possible Values: "Top", "Bottom", "Center"
        */
        getPageIndicatorPosition(): Position | null | undefined;
        /**
        * Processes the current textVerticalAlignment attribute value.
        */
        protected __processPageIndicatorPosition(): void;
        protected navigate(target?: number | string): void;
        protected __createItems(): void;
        protected __calcGridSize(): void;
        protected __calcGridCount(): void;
        protected __processGrids(): void;
        protected __processPageIndicator(): void;
        protected __processGridFields(): void;
        protected __processButtonText(): void;
        protected __spreadButtons(): void;
        protected __processButtonSize(): void;
        protected __processGapSize(): void;
        protected __onMouseDown(): (event: MouseEvent) => void;
        protected __onMouseUp(): (event: MouseEvent) => void;
        protected __onTouchStart(): (event: TouchEvent) => void;
        protected __onTouchEnd(): (event: TouchEvent) => void;
        protected __onIndicatorClick(): (event: MouseEvent) => void;
        protected __onIndicatorTouchDown(): (event: TouchEvent) => void;
        protected __onIndicatorTouchEndOrCancel(): (event: TouchEvent) => void;
    }
    export module Item {
        interface IButtonElement {
            ButtonText?: string;
            Icon?: string;
            Icon_Active?: string;
            ContentPage?: string;
            DiagState?: Severity;
        }
    }
    export enum Severity {
        None = 0,
        Information = 1,
        Warning = 2,
        Alarm = 3,
        Critical = 4
    }
    type Position = 'None' | 'Top' | 'Right' | 'Bottom' | 'Left';
    type Interaction = "None" | "Only Vertical" | "Only Horizontal" | "Both";
    export {};
}

/*
 * Generated 11/16/2020 11:16:00 AM
 * Copyright (C) 2020
 */
module TcHmi.Controls.Entertainment.TabletNavigation {
	export class NavigationControl extends TcHmi.Controls.System.TcHmiControl {

		constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList) {
			/** Call base class constructor */
			super(element, pcElement, attrs);
			this.__mouseDownHandler = this.__onMouseDown();
			this.__mouseUpHandler = this.__onMouseUp();
			this.__touchStartHandler = this.__onTouchStart();
			this.__touchEndorCancelHandler = this.__onTouchEnd();

			this.__onIndicatorClickHandler = this.__onIndicatorClick();
			this.__onIndicatorTouchDownHandler = this.__onIndicatorTouchDown();
			this.__onIndicatorTouchEndOrCancelHandler = this.__onIndicatorTouchEndOrCancel();
		}
		//internal variables 
		//#region "internal variables"
		//Internal 
		protected __TouchEvent: TouchEvent | null;
		protected __MouseEvent: TouchEvent | null;

		protected __LastGridSize: number | undefined = 0;
		protected __ItemCount: number | undefined = 0;


		//Attributes
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


		//Attributes only get
		/** html attribute: data-tchmi-DiagState*/
		protected __GridSize = 0;	//data-tchmi-GridSize
		/** html attribute: data-tchmi-DiagState*/
		protected __GridCount: number | undefined = 0;	//data-tchmi-GridCount
		/** html attribute: data-tchmi-DiagState*/
		protected __CurrentPage: number | undefined = 0;	//data-tchmi-CurrentPage

		//further variables
		protected __SwipeAnimationDuration: number = 200;
		protected __TimerSwipeAnimation: number | undefined;
		protected __lastContentPage: string | undefined | null;
		protected __Touch: number = -1;
		protected __NoInteractionTimer: number | undefined;
		protected __tmpItemList: Item.IButtonElement[] | null | undefined; // tmp variable for optimizing button creation

		//Slave Controls
		protected __DefaultTargetContent: string | null | undefined;
		protected __TargetRegionControl: TcHmi.Controls.System.TcHmiRegion | null | undefined;
		protected __TargetRegionControlSymbolDestroyWatch: DestroyFunction | null | undefined;
		protected __TargetRegionControlSymbol: TcHmi.Symbol<TcHmi.Controls.System.TcHmiRegion> | null | undefined;
		protected __elementButtonControl: TcHmi.Controls.Entertainment.TabletNavigation.Button[] | null | undefined;

		//Elements
		protected __elementTemplateRoot!: JQuery | null | undefined;
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
		protected __destroyEventTouchMove: DestroyFunction | null = null;
		protected __destroyEventMouseMove: DestroyFunction | null = null;
		protected __destroyEventPageIndicator: DestroyFunction | null = null;
		protected __destroyOnResizedListener: DestroyFunction | null = null;
		protected __destroyButtonListener: DestroyFunction[] | null = null;

		protected __ClickTimeoutId: number = 0;
		protected __touchLockTimeoutId: number = 0;
		//#endregion

		//system functions
		//#region "__previnit"
		public __previnit() {
			// Fetch template root element
			this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_Entertainment_TabletNavigation_NavigationControl-template');
			if (this.__elementTemplateRoot.length === 0) {
				throw new Error('Invalid Template.html');
			}
			this.__elementContainer = this.__elementTemplateRoot.find('.TcHmi_Controls_Entertainment_TabletNavigation_NavigationControl-container');
			if (this.__elementTemplateRoot.length === 0) {
				throw new Error('Invalid Template.html, missing element: div (.TcHmi_Controls_Entertainment_TabletNavigation_NavigationControl-container) ');
			}
			this.__elementButtonGarage = this.__elementTemplateRoot.find('.TcHmi_Controls_Entertainment_TabletNavigation_NavigationControl-buttonGarage');
			if (this.__elementButtonGarage.length === 0) {
				throw new Error('Invalid Template.html, missing element: div (.TcHmi_Controls_Entertainment_TabletNavigation_NavigationControl-buttonGarage) ');
			}
			this.__elementPageIndicatorContainer = this.__elementTemplateRoot.find('.TcHmi_Controls_Entertainment_TabletNavigation_NavigationControl-pageIndicator-container');
			if (this.__elementPageIndicatorContainer.length === 0) {
				throw new Error('Invalid Template.html, missing element: div (.TcHmi_Controls_Entertainment_TabletNavigation_NavigationControl-pageIndicator-container) ');
			}
			this.__elementPageIndicatorInnerContainer = this.__elementTemplateRoot.find('.TcHmi_Controls_Entertainment_TabletNavigation_NavigationControl-pageIndicator-innerContainer');
			if (this.__elementPageIndicatorInnerContainer.length === 0) {
				throw new Error('Invalid Template.html, missing element: div (.TcHmi_Controls_Entertainment_TabletNavigation_NavigationControl-pageIndicator-innerContainer) ');
			}
			// Call __previnit of base class
			super.__previnit();
		}
		//#endregion
		//#region "__init"
		public __init() {
			super.__init();
			this.__element[0].addEventListener('mousedown', this.__mouseDownHandler);
			this.__element[0].addEventListener('touchstart', this.__touchStartHandler);
		}
		//#endregion
		//#region "__attach"
		public __attach() {
			super.__attach();
			this.__destroyOnResizedListener = TcHmi.EventProvider.register(this.getId() + '.onResized', this.__onResized());
			document.addEventListener('mouseup', this.__mouseUpHandler);
			document.addEventListener('touchcancel', this.__touchEndorCancelHandler);
			document.addEventListener('touchend', this.__touchEndorCancelHandler);

			if (this.__elementPageIndicatorContainer) {
				this.__elementPageIndicatorContainer[0].addEventListener('click', this.__onIndicatorClickHandler);
				this.__elementPageIndicatorContainer[0].addEventListener('touchstart', this.__onIndicatorTouchDownHandler);
				this.__elementPageIndicatorContainer[0].addEventListener('touchend', this.__onIndicatorTouchEndOrCancelHandler);
			}

			this.__createItems();
			this.__processGapSize();
			this.__processButtonSize();

			if (this.__DefaultTargetContent && this.__TargetRegionControl) {
				this.__TargetRegionControl.setTargetContent(this.__DefaultTargetContent);
				this.__lastContentPage = this.__DefaultTargetContent;
			}
		}
		//#endregion
		//#region "__detach"
		public __detach() {
			super.__detach();
			if (this.__destroyOnResizedListener) {
				this.__destroyOnResizedListener();
				this.__destroyOnResizedListener = null;
			}
			if (this.__destroyEventTouchMove) {
				this.__destroyEventTouchMove()
				this.__destroyEventTouchMove = null;
			}
			if (this.__destroyEventMouseMove) {
				this.__destroyEventMouseMove()
				this.__destroyEventMouseMove = null;
			}

			if (this.__destroyEventPageIndicator) {
				this.__destroyEventPageIndicator()
				this.__destroyEventMouseMove = null;
			}

			// destroy all Button Event listener
			if (this.__destroyButtonListener) {
				for (let EventDestroy of this.__destroyButtonListener)
					EventDestroy();
				this.__destroyButtonListener = [];
			}
			document.removeEventListener('mouseup', this.__mouseUpHandler);
			document.removeEventListener('touchcancel', this.__touchEndorCancelHandler);
			document.removeEventListener('touchend', this.__touchEndorCancelHandler);

			if (this.__elementPageIndicatorContainer) {
				this.__elementPageIndicatorContainer[0].removeEventListener('click', this.__onIndicatorClick);
				this.__elementPageIndicatorContainer[0].removeEventListener('touchstart', this.__onIndicatorTouchDown);
				this.__elementPageIndicatorContainer[0].addEventListener('touchend', this.__onIndicatorTouchEndOrCancelHandler);
			}

			// destroy all object resolvers
			this.__objectResolvers.forEach(function (resolverInfo) {
				if (resolverInfo.watchDestroyer) {
					resolverInfo.watchDestroyer();
					resolverInfo.watchDestroyer = null;
				}
			});
		}
		//#endregion 
		//#region "destroy"
		public destroy() {
			/**
			* While __keepAlive is set to true control must not be destroyed.
			*/

			if (this.__keepAlive) {
				return;
			}

			this.__element[0].removeEventListener('mousedown', this.__mouseDownHandler);
			this.__element[0].removeEventListener('touchstart', this.__touchStartHandler);
			if (this.__elementPageIndicatorContainer) {
				this.__elementPageIndicatorContainer[0].removeEventListener('click', this.__onIndicatorClick);
				this.__elementPageIndicatorContainer[0].removeEventListener('touchstart', this.__onIndicatorTouchDown);
				this.__elementPageIndicatorContainer[0].removeEventListener('touchend', this.__onIndicatorTouchEndOrCancelHandler);
			}


			if (this.__destroyOnResizedListener) {
				this.__destroyOnResizedListener();
				this.__destroyOnResizedListener = null;
			}
			// destroy all Button Event listener
			if (this.__destroyButtonListener) {
				for (let EventDestroy of this.__destroyButtonListener)
					EventDestroy();
				this.__destroyButtonListener = [];
			}
			if (this.__destroyEventTouchMove) {
				this.__destroyEventTouchMove()
				this.__destroyEventTouchMove = null;
			}
			if (this.__destroyEventMouseMove) {
				this.__destroyEventMouseMove()
				this.__destroyEventMouseMove = null;
			}

			if (this.__TargetRegionControlSymbolDestroyWatch) {
				this.__TargetRegionControlSymbolDestroyWatch();
				this.__TargetRegionControlSymbolDestroyWatch = null;
			}
			if (this.__TargetRegionControlSymbol) {
				this.__TargetRegionControlSymbol.destroy();
				this.__TargetRegionControlSymbol = null;
			}

			super.destroy();
		}
		//#endregion "destroy"
		protected __onResized() {
			return () => {
				this.__calcGridSize();
			}
		}
		//attribut set/get/process			
		//#region "data-tchmi-Items"
		protected setItemList(valueNew: Item.IButtonElement[]) {
			// validate Items data and create object resolver
			let convertedValue = TcHmi.ValueConverter.toObject<Item.IButtonElement[] | null>(valueNew);

			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal<Item.IButtonElement[]>('ItemList');
			}

			// check if there is an existing resolver
			let resolverInfo = this.__objectResolvers.get('Button');

			// destroy exisiting resolver if it already exists
			if (resolverInfo) {
				if (resolverInfo.watchDestroyer) {
					resolverInfo.watchDestroyer();
				}
				resolverInfo.resolver.destroy();
			}

			// create a new object resolver
			let resolver = new Symbol.ObjectResolver(convertedValue);

			// reference to object resolver callback
			// this function will be called if the values of the symbols changes
			let cb = this.__onResolverForItemsDataCallback();

			// create object resolver for MyCustomDatatype
			this.__objectResolvers.set('Button', {
				resolver: resolver,
				watchCallback: cb,
				watchDestroyer: resolver.watch(cb)
			});
		}
		public getItemList() {
			return this.__ItemList;
		}
		protected __onResolverForItemsDataCallback() {
			// get control reference
			return (data: any) => {
				// While not attached attribute should only be processed once during initializing phase.
				if (this.__isAttached === false && data.destroy) {
					data.destroy();
				}

				// check if there is a change in the data object
				if (tchmi_equal(data.value, this.__ItemList)) {
					return;
				}

				// proceed with new data object
				this.__ItemList = data.value;

				// inform the system that the values has changed
				TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'ItemList' });

				// process with the new data object
				this.__createItems();
			};
		}
		//#endregion "data-tchmi-Items"
		//#region "data-tchmi-ButtonColor"

		public setButtonColor(valueNew: Color | null) {
			let convertedValue = TcHmi.ValueConverter.toObject<Color | null>(valueNew);

			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal<Color>('ButtonColor');
			}

			if (tchmi_equal(convertedValue, this.__ButtonColor)) {
				return;
			}

			this.__ButtonColor = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'ButtonColor' });

			this.__processButtonColor();
		}
		public getButtonColor() {
			return this.__ButtonColor;
		}

		protected __processButtonColor() {

			if (isLinearGradientColor(this.__ButtonColor))
				this.__element.css("--buttonColor", TcHmi.StyleProvider.resolveLinearGradientColorAsCssValue(this.__ButtonColor));
			else if (isSolidColor(this.__ButtonColor))
				this.__element.css("--buttonColor", TcHmi.StyleProvider.resolveSolidColorAsCssValue(this.__ButtonColor));
			else
				this.__element.css("--buttonColor", "");

		}
		//#endregion "data-tchmi-ButtonColor"
		//#region "data-tchmi-ButtonColorActive"
		public setButtonColorActive(valueNew: Color | null) {
			let convertedValue = TcHmi.ValueConverter.toObject<Color | null>(valueNew);

			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal<Color>('ButtonColorActive');
			}

			if (tchmi_equal(convertedValue, this.__ButtonColorActive)) {
				return;
			}

			this.__ButtonColorActive = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'ButtonColorActive' });
			this.__processButtonColorActive();
		}
		public getButtonColorActive() {
			return this.__ButtonColorActive;
		}
		protected __processButtonColorActive() {
			if (isLinearGradientColor(this.__ButtonColorActive))
				this.__element.css("--buttonColorActive", TcHmi.StyleProvider.resolveLinearGradientColorAsCssValue(this.__ButtonColorActive));
			else if (isSolidColor(this.__ButtonColorActive))
				this.__element.css("--buttonColorActive", TcHmi.StyleProvider.resolveSolidColorAsCssValue(this.__ButtonColorActive));
			else
				this.__element.css("--buttonColorActive", "");
		}
		//#endregion "data-tchmi-ButtonColorActive"
		//#region "data-tchmi-TextColor"
		public setTextColor(valueNew: SolidColor | null) {
			let convertedValue = TcHmi.ValueConverter.toObject<SolidColor>(valueNew);

			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('TextColor') as SolidColor | null;
			}
			let resolverInfo = this.__objectResolvers.get('textColor');

			if (resolverInfo) {
				if (resolverInfo.watchDestroyer) {
					resolverInfo.watchDestroyer();
				}
				resolverInfo.resolver.destroy();
			}

			let resolver = new Symbol.ObjectResolver(convertedValue);

			this.__objectResolvers.set('textColor', {
				resolver: resolver,
				watchCallback: this.__onResolverForTextColorWatchCallback,
				watchDestroyer: resolver.watch(this.__onResolverForTextColorWatchCallback)
			});
		}
		protected __onResolverForTextColorWatchCallback = (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => {
			if (this.__isAttached === false) { // While not attached attribute should only be processed once during initializing phase.
				this.__suspendObjectResolver('textColor');
			}

			if (data.error !== TcHmi.Errors.NONE) {
				if (TCHMI_CONSOLE_LOG_LEVEL >= TcHmi.System.LOG_LEVEL.Error) { TcHmi.Log.error('[Source=Control, Module=TcHmi.Controls.Entertainment.TabletNavigation.NavigationControl, Id=' + this.getId() + ', Attribute=TextColor] Resolving symbols from object failed with error: ' + TcHmi.Log.buildMessage(data.details)); }
				return;
			}

			if (tchmi_equal(data.value, this.__TextColor)) {
				return;
			}

			this.__TextColor = data.value;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'TextColor' });


			this.__processTextColor();
		};
		public getTextColor() {
			return this.__TextColor;
		}
		protected __processTextColor() {

			if (isSolidColor(this.__TextColor))
				this.__element.css("--textColor", TcHmi.StyleProvider.resolveSolidColorAsCssValue(this.__TextColor));
			else
				this.__element.css("--textColor", "");
		}
		//#endregion "data-tchmi-TextColor"
		//#region "data-tchmi-TextColorActive"
		public setTextColorActive(valueNew: SolidColor) {
			let convertedValue = TcHmi.ValueConverter.toObject(valueNew) as SolidColor | null;

			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal<SolidColor>('TextColorActive');
			}

			if (tchmi_equal(convertedValue, this.__TextColorActive)) {
				return;
			}
			this.__TextColorActive = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'TextColorActive' });
			this.__processTextColorActive();
		}
		public getTextColorActive() {
			return this.__TextColorActive;
		}
		protected __processTextColorActive() {

			if (isSolidColor(this.__TextColorActive))
				this.__element.css("--textColorActive", TcHmi.StyleProvider.resolveSolidColorAsCssValue(this.__TextColorActive));
			else
				this.__element.css("--textColorActive", "");
		}
		//#endregion "data-tchmi-TextColorActive"
		//#region "data-tchmi-PageIndicator"
		public setPageIndicatorColor(valueNew: Color | null) {
			let convertedValue = TcHmi.ValueConverter.toObject<Color>(valueNew);

			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('PageIndicatorColor') as Color | null;
			}

			if (tchmi_equal(convertedValue, this.__PageIndicatorColor)) {
				return;
			}

			this.__PageIndicatorColor = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'PageIndicatorColor' });

			this.__processPageIndicatorColor();
		}
		public getPageIndicatorColor() {
			return this.__PageIndicatorColor;
		}
		protected __processPageIndicatorColor() {

			if (isLinearGradientColor(this.__PageIndicatorColor))
				this.__element.css("--pageIndicatorColor", TcHmi.StyleProvider.resolveLinearGradientColorAsCssValue(this.__PageIndicatorColor));
			else if (isSolidColor(this.__PageIndicatorColor))
				this.__element.css("--pageIndicatorColor", TcHmi.StyleProvider.resolveSolidColorAsCssValue(this.__PageIndicatorColor));
			else
				this.__element.css("--pageIndicatorColor", "");
		}
		//#endregion "data-tchmi-TextColor"
		//#region "data-tchmi-PageIndicatorColorActive"
		public setPageIndicatorColorActive(valueNew: Color) {
			let convertedValue = TcHmi.ValueConverter.toObject(valueNew) as Color | null;

			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal<Color>('PageIndicatorColorActive');
			}

			if (tchmi_equal(convertedValue, this.__PageIndicatorColorActive)) {
				return;
			}
			this.__PageIndicatorColorActive = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'PageIndicatorColorActive' });
			this.__processPageIndicatorColorActive();
		}
		public getPageIndicatorColorActive() {
			return this.__PageIndicatorColorActive;
		}
		protected __processPageIndicatorColorActive() {

			if (isLinearGradientColor(this.__PageIndicatorColorActive))
				this.__element.css("--pageIndicatorColorActive", TcHmi.StyleProvider.resolveLinearGradientColorAsCssValue(this.__PageIndicatorColorActive));
			else if (isSolidColor(this.__PageIndicatorColorActive))
				this.__element.css("--pageIndicatorColorActive", TcHmi.StyleProvider.resolveSolidColorAsCssValue(this.__PageIndicatorColorActive));
			else
				this.__element.css("--pageIndicatorColorActive", "");
		}
		//#endregion "data-tchmi-PageIndicatorColorActive"
		//#region "data-tchmi-DiagCircleColorInfo"
		public setDiagCircleColorInfo(valueNew: Color | null) {
			let convertedValue = TcHmi.ValueConverter.toObject<Color>(valueNew);

			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('DiagCircleColorInfo') as Color | null;
			}

			if (tchmi_equal(convertedValue, this.__DiagColorInfo)) {
				return;
			}

			this.__DiagColorInfo = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'DiagCircleColorInfo' });

			this.__processDiagCircleColorInfo();
		}
		public getDiagCircleColorInfo() {
			return this.__DiagColorInfo;
		}
		protected __processDiagCircleColorInfo() {

			if (isLinearGradientColor(this.__DiagColorInfo))
				this.__element.css("--diagColorInfo", TcHmi.StyleProvider.resolveLinearGradientColorAsCssValue(this.__DiagColorInfo));
			else if (isSolidColor(this.__DiagColorInfo))
				this.__element.css("--diagColorInfo", TcHmi.StyleProvider.resolveSolidColorAsCssValue(this.__DiagColorInfo));
			else
				this.__element.css("--diagColorInfo", "");

		}
		//#endregion
		//#region "data-tchmi-DiagCircleColorWarning"
		public setDiagCircleColorWarning(valueNew: Color | null) {
			let convertedValue = TcHmi.ValueConverter.toObject<Color>(valueNew);

			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('DiagCircleColorWarning') as Color | null;
			}

			if (tchmi_equal(convertedValue, this.__DiagColorWarning)) {
				return;
			}

			this.__DiagColorWarning = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'DiagCircleColorWarning' });

			this.__processDiagCircleColorWarning();
		}
		public getDiagCircleColorWarning() {
			return this.__DiagColorWarning;
		}
		protected __processDiagCircleColorWarning() {

			if (isLinearGradientColor(this.__DiagColorWarning))
				this.__element.css("--diagColorWarning", TcHmi.StyleProvider.resolveLinearGradientColorAsCssValue(this.__DiagColorWarning));
			else if (isSolidColor(this.__DiagColorWarning))
				this.__element.css("--diagColorWarning", TcHmi.StyleProvider.resolveSolidColorAsCssValue(this.__DiagColorWarning));
			else
				this.__element.css("--diagColorWarning", "");
		}
		//#endregion 
		//#region "data-tchmi-DiagCircleColorAlarm"
		public setDiagCircleColorAlarm(valueNew: Color | null) {
			let convertedValue = TcHmi.ValueConverter.toObject<Color>(valueNew);

			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('DiagCircleColorAlarm') as Color | null;
			}

			if (tchmi_equal(convertedValue, this.__DiagColorAlarm)) {
				return;
			}

			this.__DiagColorAlarm = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'DiagCircleColorAlarm' });

			this.__processDiagCircleColorAlarm();
		}
		public getDiagCircleColorAlarm() {
			return this.__DiagColorAlarm;
		}
		protected __processDiagCircleColorAlarm() {
			if (isLinearGradientColor(this.__DiagColorAlarm))
				this.__element.css("--diagColorAlarm", TcHmi.StyleProvider.resolveLinearGradientColorAsCssValue(this.__DiagColorAlarm));
			else if (isSolidColor(this.__DiagColorAlarm))
				this.__element.css("--diagColorAlarm", TcHmi.StyleProvider.resolveSolidColorAsCssValue(this.__DiagColorAlarm));
			else
				this.__element.css("--diagColorAlarm", "");
		}
		//#endregion 
		//#region "data-tchmi-DiagCircleColorAlarm"
		public setDiagCircleColorCritical(valueNew: Color | null) {
			let convertedValue = TcHmi.ValueConverter.toObject<Color>(valueNew);

			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('DiagCircleColorCritical') as Color | null;
			}

			if (tchmi_equal(convertedValue, this.__DiagColorCritical)) {
				return;
			}

			this.__DiagColorCritical = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'DiagCircleColorCritical' });

			this.__processDiagCircleColorCritical();
		}
		public getDiagCircleColorCritical() {
			return this.__DiagColorCritical;
		}
		protected __processDiagCircleColorCritical() {
			if (isLinearGradientColor(this.__DiagColorCritical))
				this.__element.css("--diagColorCritical", TcHmi.StyleProvider.resolveLinearGradientColorAsCssValue(this.__DiagColorCritical));
			else if (isSolidColor(this.__DiagColorCritical))
				this.__element.css("--diagColorCritical", TcHmi.StyleProvider.resolveSolidColorAsCssValue(this.__DiagColorCritical));
			else
				this.__element.css("--diagColorCritical", "");
		}
		//#endregion
		//#region "data-tchmi-ButtonBorderColor"
		public setButtonBorderColor(valueNew: SolidColor | null) {
			let convertedValue = TcHmi.ValueConverter.toObject<SolidColor>(valueNew);

			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('ButtonBorderColor') as SolidColor | null;
			}

			if (tchmi_equal(convertedValue, this.__ButtonBorderColor)) {
				return;
			}

			this.__ButtonBorderColor = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'ButtonBorderColor' });

			this.__processButtonBorderColor();
		}
		public getButtonBorderColor() {
			return this.__ButtonBorderColor;
		}
		protected __processButtonBorderColor() {

			if (isSolidColor(this.__ButtonBorderColor))
				this.__element.css("--buttonBorderColor", TcHmi.StyleProvider.resolveSolidColorAsCssValue(this.__ButtonBorderColor));
			else
				this.__element.css("--buttonBorderColor", "");
		}

		public setButtonBorderColorActive(valueNew: SolidColor | null) {
			let convertedValue = TcHmi.ValueConverter.toObject<SolidColor>(valueNew);

			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('ButtonBorderColorActive') as SolidColor | null;
			}

			if (tchmi_equal(convertedValue, this.__ButtonBorderColorActive)) {
				return;
			}

			this.__ButtonBorderColorActive = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'ButtonBorderColorActive' });

			this.__processButtonBorderColorActive();
		}
		public getButtonBorderColorActive() {
			return this.__ButtonBorderColorActive;
		}
		protected __processButtonBorderColorActive() {

			if (isSolidColor(this.__ButtonBorderColorActive))
				this.__element.css("--buttonBorderColorActive", TcHmi.StyleProvider.resolveSolidColorAsCssValue(this.__ButtonBorderColorActive));
			else
				this.__element.css("--buttonBorderColorActive", "");
		}

		//#endregion "data-tchmi-ButtonBorderColor"
		//#region "data-tchmi-ButtonBorderRadius"
		public setButtonBorderRadius(valueNew: BorderRadius | null) {
			let convertedValue = TcHmi.ValueConverter.toObject<BorderRadius>(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('ButtonBorderRadius') as BorderRadius | null;
			}

			let resolverInfo = this.__objectResolvers.get('buttonBorderRadius');

			if (resolverInfo) {
				if (resolverInfo.watchDestroyer) {
					resolverInfo.watchDestroyer();
				}
				resolverInfo.resolver.destroy();
			}

			let resolver = new Symbol.ObjectResolver(convertedValue);

			this.__objectResolvers.set('buttonBorderRadius', {
				resolver: resolver,
				watchCallback: this.__onResolverForButtonBorderRadiusWatchCallback,
				watchDestroyer: resolver.watch(this.__onResolverForButtonBorderRadiusWatchCallback)
			});
		}
		/**
		* Returns the current border-radius value.
		* @preserve (Part of the public API)
		*/
		public getButtonBorderRadius() {
			return this.__ButtonBorderRadius;
		}

		/**
		* The watch callback for the borderRadius object resolver.
		*/
		protected __onResolverForButtonBorderRadiusWatchCallback = (data: Symbol.ObjectResolver.IWatchResultObject<BorderRadius>) => {
			if (this.__isAttached === false) { // While not attached attribute should only be processed once during initializing phase.
				this.__suspendObjectResolver('buttonBorderRadius');
			}

			if (data.error !== TcHmi.Errors.NONE) {
				if (TCHMI_CONSOLE_LOG_LEVEL >= TcHmi.System.LOG_LEVEL.Error) { TcHmi.Log.error('[Source=Control, Module=TcHmi.Controls.Entertainment.TabletNavigation.NavigationControl, Id=' + this.getId() + ', Attribute=ButtonBorderRadius] Resolving symbols from object failed with error: ' + TcHmi.Log.buildMessage(data.details)); }
				return;
			}

			if (tchmi_equal(data.value, this.__ButtonBorderRadius)) {
				return;
			}

			this.__ButtonBorderRadius = data.value;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'ButtonBorderRadius' });

			this.__processButtonBorderRadius();
		};

		/**
		* Processes the current border-radius attribute.
		*/
		protected __processButtonBorderRadius() {
			if (this.__elementButtonIcon)
				TcHmi.StyleProvider.processBorderRadius(this.__elementButtonIcon, this.__ButtonBorderRadius);
		}
		//#endregion "data-tchmi-ButtonBorderRadius"
		//#region "data-tchmi-TextFontSize"
		public setTextFontSize(valueNew: number | null) {
			let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('TextFontSize') as number;
			}

			if (convertedValue === this.__textFontSize) {
				return;
			}

			this.__textFontSize = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'TextFontSize' });


			this.__processTextFontSize();
		}

		/**
		* Returns the current value of textFontSize.
		* @returns The current value of textFontSize.
		*/
		public getTextFontSize() {
			return this.__textFontSize;
		}

		/**
		* Processes the current textFontSize attribute value.
		*/
		protected __processTextFontSize() {

			if (this.__elementButtonText && this.__textFontSize && this.__textFontSizeUnit)
				this.__elementButtonText.css("font-size", (this.__textFontSize ?? 100) + (this.__textFontSizeUnit ?? "%"));
		}
		//#endregion "data-tchmi-TextFontSize"
		//#region "data-tchmi-TextFontSizeUnit"
		public setTextFontSizeUnit(valueNew: FontSizeUnit | null) {
			let convertedValue = TcHmi.ValueConverter.toFontSizeUnit(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('TextFontSizeUnit') as FontSizeUnit;
			}

			if (convertedValue === this.__textFontSizeUnit) {
				return;
			}

			this.__textFontSizeUnit = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'TextFontSizeUnit' });


			this.__processTextFontSize();
		}

		/**
		* Returns the current value of textFontSizeUnit.
		* @returns The current value of textFontSizeUnit.
		*/
		public getTextFontSizeUnit() {
			return this.__textFontSizeUnit;
		}

		//#endregion "data-tchmi-TextFontSizeUnit"				
		//#region "data-tchmi-TextFontFamily"
		public setTextFontFamily(valueNew: FontFamily | null) {
			let convertedValue = TcHmi.ValueConverter.toFontFamily(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('TextFontFamily') as FontFamily | null;
			}

			if (convertedValue === this.__textFontFamily) {
				return;
			}

			this.__textFontFamily = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'TextFontFamily' });


			this.__processTextFontFamily();
		}

		/**
		* Returns the current value of textFontFamily.
		* @returns The current value of textFontFamily.
		*/
		public getTextFontFamily() {
			return this.__textFontFamily;
		}

		/**
		* Processes the current textFontFamily attribute value.
		*/
		protected __processTextFontFamily() {
			this.__elementButtonText?.css("font-family", this.__textFontFamily ?? "");
		}
		//#endregion "data-tchmi-TextFontFamily"
		//#region "data-tchmi-TextFontStyle"
		public setTextFontStyle(valueNew: FontStyle | null) {
			let convertedValue = TcHmi.ValueConverter.toFontStyle(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('TextFontStyle') as FontStyle;
			}


			if (convertedValue === this.__textFontStyle) {
				return;
			}

			this.__textFontStyle = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'TextFontStyle' });


			this.__processTextFontStyle();
		}

		/**
		* Returns the current value of textFontStyle.
		* @returns The current value of textFontStyle.
		*/
		public getTextFontStyle() {
			return this.__textFontStyle;
		}

		/**
		* Processes the current textFontStyle attribute value.
		*/
		protected __processTextFontStyle() {
			if (this.__elementButtonText)
				this.__elementButtonText.css("font-style", this.__textFontStyle ?? "Auto");
		}
		//#endregion "data-tchmi-TextFontStyle"
		//#region "data-tchmi-TextFontWeight"
		public setTextFontWeight(valueNew: FontWeight | null) {
			let convertedValue = TcHmi.ValueConverter.toFontWeight(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('TextFontWeight') as FontWeight;
			}

			if (convertedValue === this.__textFontWeight) {
				return;
			}

			this.__textFontWeight = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'TextFontWeight' });


			this.__processTextFontWeight();
		}

		/**
		* Returns the current value of textFontWeight.
		* @returns The current value of textFontWeight.
		*/
		public getTextFontWeight() {
			return this.__textFontWeight;
		}

		/**
		* Processes the current textFontWeight attribute value.
		*/
		protected __processTextFontWeight() {
			if (this.__elementButtonText)
				this.__elementButtonText.css("font-weight", this.__textFontWeight ?? "Auto");
		}

		//#endregion "data-tchmi-TextFontWeight"
		//#region "data-tchmi-WordWrap"
		public setWordWrap(valueNew: boolean | null) {
			let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('WordWrap') as boolean;
			}
			if (convertedValue === this.__wordWrap) {
				return;
			}

			this.__wordWrap = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'WordWrap' });


			this.__processWordWrap();
		}

		/**
		* Returns the current value of wordWrap.
		* @returns The current value of wordWrap.
		*/
		public getWordWrap() {
			return this.__wordWrap;
		}

		/**
		* Processes the current wordWrap attribute value.
		*/
		protected __processWordWrap() {

			if (this.__elementButtonText && this.__wordWrap) {
				this.__elementButtonText.css("white-space", 'pre-wrap');
				this.__elementButtonText.css("word-wrap", 'break-word');
				this.__elementButtonText.css("overflow-wrap", 'break-word');
			}
			else if (this.__elementButtonText) {
				this.__elementButtonText.css("white-space", "");
				this.__elementButtonText.css("word-wrap", "");
				this.__elementButtonText.css("overflow-wrap", "");
			}

		}

		//#endregion "data-tchmi-WordWrap"
		//#region "data-tchmi-TextPadding"
		public setTextPadding(valueNew: FourSidedCss | null) {
			let convertedValue = TcHmi.ValueConverter.toObject<FourSidedCss>(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('TextPadding') as FourSidedCss | null;
			}

			let resolverInfo = this.__objectResolvers.get('TextPadding');

			if (resolverInfo) {
				if (resolverInfo.watchDestroyer) {
					resolverInfo.watchDestroyer();
				}
				resolverInfo.resolver.destroy();
			}

			let resolver = new Symbol.ObjectResolver(convertedValue);

			this.__objectResolvers.set('TextPadding', {
				resolver: resolver,
				watchCallback: this.__onResolverForTextPaddingWatchCallback,
				watchDestroyer: resolver.watch(this.__onResolverForTextPaddingWatchCallback)
			});
		}

		protected __onResolverForTextPaddingWatchCallback = (data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>) => {
			if (this.__isAttached === false) { // While not attached attribute should only be processed once during initializing phase.
				this.__suspendObjectResolver('TextPadding');
			}

			if (data.error !== TcHmi.Errors.NONE) {
				if (TCHMI_CONSOLE_LOG_LEVEL >= TcHmi.System.LOG_LEVEL.Error) { TcHmi.Log.error('[Source=Control, Module=TcHmi.Controls.Entertainment.TabletNavigation.NavigationControl, Id=' + this.getId() + ', Attribute=TextPadding] Resolving symbols from object failed with error: ' + TcHmi.Log.buildMessage(data.details)); }
				return;
			}

			if (tchmi_equal(data.value, this.__textPadding)) {
				return;
			}

			this.__textPadding = data.value;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'TextPadding' });


			this.__processTextPadding();
		};

		/**
		* Returns the current value of the member variable textPadding.
		*/
		public getTextPadding() {
			return this.__textPadding;
		}

		/**
		* Processes the current value of textPadding and forwards it to the target span element in template html.
		* The current value of textPadding is only forwarded if it is no binding expression.
		*/
		protected __processTextPadding() {

			if (!this.__elementButtonText || !this.__elementButtonControl)
				return;
			for (let i = 0; i < this.__elementButtonControl.length; i++) {
				if (this.__elementButtonText && this.__elementButtonText[i])
					TcHmi.StyleProvider.processContentPadding(this.__elementButtonText[i], this.__textPadding ?? { left: 0, top: 0, right: 0, bottom: 0 });
			}
		}
		//#endregion "data-tchmi-TextPadding"				
		//#region "data-tchmi-TextHorizontalAlignment"
		public setTextHorizontalAlignment(valueNew: TcHmi.HorizontalAlignment | null) {
			let convertedValue = TcHmi.ValueConverter.toHorizontalAlignment(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal<TcHmi.HorizontalAlignment>('TextHorizontalAlignment');
			}

			if (convertedValue === this.__textHorizontalAlignment) {
				return;
			}

			this.__textHorizontalAlignment = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'TextHorizontalAlignment' });


			this.__processTextHorizontalAlignment();
		}

		/**
		* Returns the current value of horizontalTextAligment.
		* @returns The current value of horizontalTextAligment.
		*/
		public getTextHorizontalAlignment() {
			return this.__textHorizontalAlignment;
		}

		/**
		* Processes the current textHorizontalAlignment attribute value.
		*/
		protected __processTextHorizontalAlignment() {
			if (!this.__elementButtonText)
				return;

			this.__elementButtonText.css("text-align", this.__textHorizontalAlignment?.toLowerCase() ?? "middle");

		}

		//#endregion "data-tchmi-TextHorizontalAlignment"
		//#region "data-tchmi-TextPosition"
		public setTextPosition(valueNew: TcHmi.VerticalAlignment | null) {
			let convertedValue = TcHmi.ValueConverter.toVerticalAlignment(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal<VerticalAlignment>('TextPosition');
			}

			if (convertedValue === this.__textPosition) {
				return;
			}

			this.__textPosition = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'TextPosition' });


			this.__processTextPosition();
		}

		/**
		* Returns the current value of textVerticalAlignment.
		* @returns The current value of textVerticalAlignment.
		*                                                  Possible Values: "Top", "Bottom", "Center"
		*/
		public getTextPosition() {
			return this.__textPosition;
		}

		/**
		* Processes the current textVerticalAlignment attribute value.
		*/
		protected __processTextPosition() {
			if (!this.__elementButtonText)
				return;

			if (this.__textPosition === "Top") this.__elementButtonText.css("top", "2.5%");
			else if (this.__textPosition === "Center") this.__elementButtonText.css("top", "42.5%");
			else this.__elementButtonText.css("top", "82.5%");

		}
		//#endregion "data-tchmi-TextPosition"
		//#region "data-tchmi-Interaction"
		public setInteraction(valueNew: Interaction | null | undefined) {
			let convertedValue = valueNew;
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('Interaction');
			}

			if (tchmi_equal(convertedValue, this.__Interaction)) {
				return;
			}
			if (convertedValue)
				this.__Interaction = convertedValue;
			else
				this.__Interaction = "None";

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'Interaction' });

		}
		public getInteraction() {
			return this.__Interaction;
		}
		//#endregion "data-tchmi-Interaction"
		//#region "data-tchmi-ButtonSize"
		public setButtonSize(valueNew: number | null) {
			let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal<number>('ButtonSize');
			}

			if (tchmi_equal(convertedValue, this.__ButtonSize)) {
				return;
			}
			this.__ButtonSize = <number>convertedValue;
			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'ButtonSize' });
			this.__calcGridSize();
		}
		public getButtonSize() {
			return this.__ButtonSize;
		}
		//#endregion "data-tchmi-ButtonSize"
		//#region "data-tchmi-GapSize"
		public setGapSize(valueNew: number | null) {
			let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal<number>('GapSize');
			}

			if (tchmi_equal(convertedValue, this.__GapSize)) {
				return;
			}
			this.__GapSize = <number>convertedValue;
			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'GapSize' });
			this.__calcGridSize();
		}
		public getGapSize() {
			return this.__GapSize;
		}
		//#endregion "data-tchmi-GapSize"
		//#region "data-tchmi-TargetRegionControl"
		public setTargetRegionControlSymbol(valueNew: TcHmi.Symbol<TcHmi.Controls.System.TcHmiRegion> | null) {
			let newSymbol = valueNew;
			if (newSymbol === null) {
				let symbolExpression = this.getAttributeDefaultValueInternal<string>('TargetRegionControlSymbol');
				if (symbolExpression) {
					newSymbol = new TcHmi.Symbol(symbolExpression);
				}
			}
			if (this.__TargetRegionControlSymbol === newSymbol) {
				return;
			}
			if (this.__TargetRegionControlSymbolDestroyWatch) {
				this.__TargetRegionControlSymbolDestroyWatch();
				this.__TargetRegionControlSymbolDestroyWatch = null;
			}
			if (newSymbol instanceof TcHmi.Symbol) {
				this.__TargetRegionControlSymbol = newSymbol;
				this.__TargetRegionControlSymbolDestroyWatch = this.__TargetRegionControlSymbol.watch(this.__onTargetRegionControlSymbol());
			} else {
				this.__TargetRegionControlSymbol = null;
				this.__processTargetRegionControlSymbol();
			}
			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'TargetRegionControlSymbol' });
		}

		protected __onTargetRegionControlSymbol() {
			return (data: TcHmi.Symbol.IReadResultObject<TcHmi.Controls.System.TcHmiRegion>) => {
				if (data.error !== TcHmi.Errors.NONE) {
					if (data.details && data.error !== TcHmi.Errors.E_CONTROL_INSTANCE_NOT_FOUND) { // Ignore E_CONTROL_INSTANCE_NOT_FOUND as control may get available later
						if (TCHMI_CONSOLE_LOG_LEVEL >= TcHmi.System.LOG_LEVEL.Error) { TcHmi.Log.error('[Source=Control, Module=TcHmi.Controls.Entertainment.TabletNavigation.NavigationControl, Id=' + this.getId() + ', Property=TargetRegionControlSymbol, ' + (this.__TargetRegionControlSymbol ? 'Symbol = ' + this.__TargetRegionControlSymbol!.getExpression().toString() + '' : '') + '] ' + Log.buildMessage(data.details)); }
					}
					return;
				}
				this.__processTargetRegionControlSymbol(data.value);
			};
		}
		/**
		* TargetRegionControlSymbol getter
		*/
		public getTargetRegionControlSymbol() {
			return this.__TargetRegionControlSymbol;
		}

		protected __processTargetRegionControlSymbol(ctrl?: TcHmi.Controls.System.TcHmiRegion | null) {
			if (!this.__TargetRegionControlSymbol) {
				this.__TargetRegionControl = null;
				TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'TargetRegionControl' });
				return;
			}
			if (ctrl === undefined) {
				ctrl = null;
			}
			if (this.__TargetRegionControl !== ctrl) {
				this.__TargetRegionControl = ctrl;
				TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'TargetRegionControl' });
			}
		}
		public setDefaultTargetContent(valueNew: string | null) {
			let convertedValue = TcHmi.ValueConverter.toString(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal<string>('DefaultTargetContent');
			}

			if (tchmi_equal(convertedValue, this.__DefaultTargetContent)) {
				return;
			}
			this.__DefaultTargetContent = <string>convertedValue;
			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'DefaultTargetContent' });

		}
		public getDefaultTargetContent() {
			return this.__DefaultTargetContent;
		}
		//#endregion "data-tchmi-TargetRegionControl"
		//#region "data-tchmi-NoInteractionTime"
		public setNoInteractionTime(valueNew: number | null) {
			let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal<number>('NoInteractionTime');
			}

			if (tchmi_equal(convertedValue, this.__NoInteractionTime)) {
				return;
			}
			this.__NoInteractionTime = <number>convertedValue;
			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'NoInteractionTime' });
			this.__processNoInteractionTime();
		}
		public getNoInteractionTime() {
			return this.__NoInteractionTime;
		}
		protected __processNoInteractionTime() {

			if (this.__NoInteractionTimer) {
				clearTimeout(this.__NoInteractionTimer);
				this.__NoInteractionTimer = 0;
			}
			this.__NoInteractionTimer = setTimeout(() => {
				if (this.__elementButtonControl) {
					// deactivate button
					for (let button of this.__elementButtonControl)
						button.Deactivate();
				}

				// Set DefaultContent in TargetRegion
				if (this.__TargetRegionControl && this.__DefaultTargetContent
					&& (this.__DefaultTargetContent !== this.__lastContentPage)) {
					this.__TargetRegionControl.setTargetContent(this.__DefaultTargetContent);
					TcHmi.EventProvider.raise(this.__id + '.onPageCalled', this.__DefaultTargetContent);
					this.__lastContentPage = this.__DefaultTargetContent;
				}
			}, this.__NoInteractionTime);
		}
		//#endregion "data-tchmi-NoInteractionTime"
		//#region "data-tchmi-ButtonPadding"
		public setButtonPadding(valueNew: FourSidedCss | null) {
			let convertedValue = TcHmi.ValueConverter.toObject<FourSidedCss>(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('ButtonPadding') as FourSidedCss | null;
			}

			let resolverInfo = this.__objectResolvers.get('buttonPadding');

			if (resolverInfo) {
				if (resolverInfo.watchDestroyer) {
					resolverInfo.watchDestroyer();
				}
				resolverInfo.resolver.destroy();
			}

			let resolver = new Symbol.ObjectResolver(convertedValue);

			this.__objectResolvers.set('buttonPadding', {
				resolver: resolver,
				watchCallback: this.__onResolverForButtonPadding,
				watchDestroyer: resolver.watch(this.__onResolverForButtonPadding)
			});
		}
		public getButtonPadding() {
			return this.__ButtonPadding;
		}
		protected __onResolverForButtonPadding = (data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>) => {
			if (this.__isAttached === false) {
				this.__suspendObjectResolver('buttonPadding');
			}

			if (data.error !== TcHmi.Errors.NONE) {
				if (TCHMI_CONSOLE_LOG_LEVEL >= TcHmi.System.LOG_LEVEL.Error) { TcHmi.Log.error('[Source=Control, Module=TcHmi.Controls.Entertainment.TabletNavigation.NavigationControl, Id=' + this.getId() + ', Attribute=ButtonPadding] Resolving symbols from object failed with error: ' + TcHmi.Log.buildMessage(data.details)); }
				return;
			}

			if (tchmi_equal(data.value, this.__ButtonPadding)) {
				return;
			}

			this.__ButtonPadding = data.value;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'ButtonPadding' });


			this.__processButtonPadding();
		};

		protected __processButtonPadding() {
			TcHmi.StyleProvider.processContentPadding(this.__element, this.__ButtonPadding);
			this.__calcGridSize();
		}
		//#endregion "data-tchmi-ButtonPadding"
		//#region "data-tchmi-PageIndicatorPosition"
		public setPageIndicatorPosition(valueNew: Position | null | undefined) {
			let convertedValue = valueNew;
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal<Position>('PageIndicatorPosition');
			}

			if (convertedValue === this.__PageIndicatorPosition) {
				return;
			}

			this.__PageIndicatorPosition = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'PageIndicatorPosition' });

			this.__processPageIndicatorPosition();
		}

		/**
		* Returns the current value of textVerticalAlignment.
		* @returns The current value of textVerticalAlignment.
		*   Possible Values: "Top", "Bottom", "Center"
		*/
		public getPageIndicatorPosition() {
			return this.__PageIndicatorPosition;
		}

		/**
		* Processes the current textVerticalAlignment attribute value.
		*/
		protected __processPageIndicatorPosition() {
			if (!this.__elementPageIndicatorContainer || !this.__elementPageIndicatorInnerContainer)
				return;

			if (this.__PageIndicatorPosition === "Top") {
				this.__elementPageIndicatorInnerContainer.removeClass("Vertical");
				this.__elementPageIndicatorContainer.removeClass("Right Bottom Left");
				this.__elementPageIndicatorContainer.addClass("Top");
			}
			else if (this.__PageIndicatorPosition === "Right") {
				this.__elementPageIndicatorInnerContainer.addClass("Vertical");
				this.__elementPageIndicatorContainer.removeClass("Left Bottom Top");
				this.__elementPageIndicatorContainer.addClass("Right");
			}
			else if (this.__PageIndicatorPosition === "Bottom") {
				this.__elementPageIndicatorInnerContainer.removeClass("Vertical");
				this.__elementPageIndicatorContainer.removeClass("Right Left Top");
				this.__elementPageIndicatorContainer.addClass("Bottom");
			}
			else if (this.__PageIndicatorPosition === "Left") {
				this.__elementPageIndicatorInnerContainer.addClass("Vertical");
				this.__elementPageIndicatorContainer.removeClass("Right Bottom Top");
				this.__elementPageIndicatorContainer.addClass("Left");
			}
			else this.__elementPageIndicatorContainer.removeClass("Right Bottom Left Top");

		}
		//#endregion "data-tchmi-TextPosition"

		// public function can be called with direction (string) or pagenumber (number)
		//#region "Navigate"
		protected navigate(target?: number | string) {
			var grid;
			if (this.__CurrentPage === undefined || !this.__GridCount)
				return;

			let lastCalledPage = this.__CurrentPage;
			if (target !== undefined && (typeof target === 'number')) {
				let page = TcHmi.ValueConverter.toNumber(target);
				if (this.__TimerSwipeAnimation) {
					clearTimeout(this.__TimerSwipeAnimation);
					this.__TimerSwipeAnimation = 0;
				}

				if (page! > this.__GridCount - 1) page = this.__GridCount - 1;

				else if (page! < 0) target = 0;

				if (page == this.__CurrentPage)
					return;

				if (page! < this.__CurrentPage)
					target = (this.__PageIndicatorPosition === "Right" || this.__PageIndicatorPosition === "Left") ? 'Down' : 'Right';
				else if (page! > this.__CurrentPage)
					target = (this.__PageIndicatorPosition === "Right" || this.__PageIndicatorPosition === "Left") ? 'Up' : 'Left';

				//call Navigate again after animation finished to go page by page to the desired page
				this.__TimerSwipeAnimation = setTimeout(() => {
					this.navigate(page!);
				}, this.__SwipeAnimationDuration);
			}
			if (target !== undefined && (typeof target !== 'number')) {
				//filter invalid Navigations for Interaction 
				target = target.toLowerCase();
				if (this.__Interaction === "None") return;
				if (((target === 'left') || (target === 'right')) && (this.__Interaction === "Only Vertical")) return;
				if (((target === 'up') || (target === 'down')) && (this.__Interaction === "Only Horizontal")) return;

				this.__CurrentPage = (target === 'up' || target === 'left') ? this.__CurrentPage + 1 : this.__CurrentPage - 1;

				if (this.__CurrentPage > this.__GridCount - 1) {
					this.__CurrentPage = this.__GridCount - 1;
					return;
				}
				else if (this.__CurrentPage < 0) {
					this.__CurrentPage = 0;
					return;
				}

				if (!this.__elementGrid || !this.__elementGrid[lastCalledPage])
					return;
				//change Activation of Pageindicator
				if (this.__elementPageIndicator && this.__elementPageIndicator[lastCalledPage])
					$(this.__elementPageIndicator[lastCalledPage]).removeClass("Active");
				//animation old previous page out
				grid = $(this.__elementGrid[lastCalledPage]);
				//remove old animation class					
				grid.removeClass("animationTopOut animationRightOut	animationBottomOut animationLeftOut	animationTopIn animationRightIn	animationBottomIn animationLeftIn");

				if (target === 'up')
					grid.addClass('animationTopOut');
				else if (target === 'right')
					grid.addClass('animationRightOut');
				else if (target === 'down')
					grid.addClass('animationBottomOut');
				else
					grid.addClass('animationLeftOut');

				//change Activation of Pageindicator

				if (this.__elementPageIndicator && this.__elementPageIndicator[this.__CurrentPage])
					$(this.__elementPageIndicator[this.__CurrentPage]).addClass("Active");

				//animation new previous page in
				grid = $(this.__elementGrid[this.__CurrentPage])
				//remove old animation class
				grid.removeClass("animationTopOut animationRightOut	animationBottomOut animationLeftOut	animationTopIn animationRightIn	animationBottomIn animationLeftIn");


				// set diplay to gried (needed for initial state: 1 Grid visible; others displayed "none")
				grid.css("display", "grid");
				//grid.__element.css("display", "grid");
				if (target === 'up')
					grid.addClass('animationBottomIn');
				else if (target === 'right')
					grid.addClass('animationLeftIn');
				else if (target === 'down')
					grid.addClass('animationTopIn');
				else
					grid.addClass('animationRightIn');

				TcHmi.EventProvider.raise(this.__id + '.onPageChanged', this.__CurrentPage);
			}
			else {
				if (!this.__elementGrid)
					return;


				if (this.__CurrentPage > this.__GridCount - 1) {
					this.__CurrentPage = this.__GridCount - 1;
				}
				else if (this.__CurrentPage < 0) {
					this.__CurrentPage = 0;
				}

				for (let i = 0; i < this.__GridCount; i++) {
					grid = $(this.__elementGrid[i]);
					if (grid) {
						// change visibility of pages 
						if (i === this.__CurrentPage) {
							if (this.__elementPageIndicator && this.__elementPageIndicator[i])
								this.__elementPageIndicator.eq(i).addClass("Active");
							grid.css("display", "grid");
							grid.removeClass('animationTopOut animationRightOut animationBottomOut animationLeftOut');
						}
						else {
							if (this.__elementPageIndicator && this.__elementPageIndicator[i])
								$(this.__elementPageIndicator[i]).removeClass("Active");
							grid.css("display", "none");
						}
					}
				}
			}
		}
		//#endregion				

		/// Further Functions 
		//#region "__createItems"
		protected __createItems() {
			if (!this.__ItemList || !this.__elementButtonGarage)
				return;

			//if number of elements is still equal --> just update parameter
			if (this.__elementButtonControl &&
				this.__ItemList.length == this.__elementButtonControl.length) {
				this.__elementButtonControl.forEach((element, index) => {
					element.Update(this.__ItemList![index]);
				})
			}
			//if number changes --> get new set of buttons
			else {
				//get rid of old Buttons	
				if (this.__destroyButtonListener) {
					for (let EventDestroy of this.__destroyButtonListener)
						EventDestroy();
				}
				this.__destroyButtonListener = [];

				if (this.__elementButtonControl) {
					for (let ButtonControl of this.__elementButtonControl)
						ButtonControl.destroy();
				}
				this.__elementButtonControl = [];
				//create new Buttons
				for (let i = 0; i < this.__ItemList.length; i++) {
					var Button = TcHmi.ControlFactory.createEx<TcHmi.Controls.Entertainment.TabletNavigation.Button>(
						'Button',
						this.__id + '_Button_' + i,
						{
							'data-tchmi-button-text': this.__ItemList[i].ButtonText,
							'data-tchmi-icon': 'url(' + this.__ItemList[i].Icon + ')',
							'data-tchmi-icon-active': 'url(' + this.__ItemList[i].Icon_Active + ')',
							'data-tchmi-content-page': this.__ItemList[i].ContentPage,
							'data-tchmi-diag-state': this.__ItemList[i].DiagState
						},
						this
					);
					if (Button) {
						this.__elementButtonControl.push(Button)
						this.__elementButtonGarage.append(Button.getElement());

						this.__destroyButtonListener.push(TcHmi.EventProvider.register(Button.getId() + ".onPressed", (evt, data) => {

							if (this.__elementButtonControl) {
								//deactivate other buttons
								for (let button of this.__elementButtonControl)
									button.Deactivate();
							}


							let CurButton = TcHmi.Controls.get<TcHmi.Controls.Entertainment.TabletNavigation.Button>(evt.name.split('.')[0]);

							//1. Activate Button 
							if (!CurButton)
								return;
							CurButton.Activate();

							if (!this.__TargetRegionControl)
								return;

							//2. set Content of targetRegionControl
							let content = CurButton.getContentPage();

							if (content) {
								if (content !== this.__lastContentPage) {
									this.__TargetRegionControl.setTargetContent(content);
									TcHmi.EventProvider.raise(this.__id + '.onPageCalled', content);
									this.__lastContentPage = content;
								}
							}
							else if (this.__DefaultTargetContent && (this.__DefaultTargetContent !== this.__lastContentPage)) {
								this.__TargetRegionControl.setTargetContent(this.__DefaultTargetContent);
								TcHmi.EventProvider.raise(this.__id + '.onPageCalled', this.__DefaultTargetContent);
								this.__lastContentPage = this.__DefaultTargetContent;
							};
						}));
					}
				}
				this.__elementButton = this.__elementButtonGarage.children();
				this.__elementButtonIcon = this.__elementButton.find(".TcHmi_Controls_Entertainment_TabletNavigation_Button-icon");
				this.__elementButtonText = this.__elementButton.find(".TcHmi_Controls_Entertainment_TabletNavigation_Button-text");
				this.__elementButtonDiagCircle = this.__elementButton.find(".TcHmi_Controls_Entertainment_TabletNavigation_Button-diagCircle");
				this.__processButtonBorderRadius();
				this.__processButtonColor();
				this.__processButtonBorderColor();
				this.__processButtonText();

			}
			this.__calcGridSize();
			TcHmi.EventProvider.raise(this.__id + ".onButtonsCreated");
		};
		//#endregion 				
		//#region "__calcGridSize"
		protected __calcGridSize() {
			let width = this.getRenderedWidth();
			let height = this.__element.height();
			let gap = this.__GapSize ? this.__GapSize : 0;
			// calculate slots for Buttons per grid
			if (!(this.__ButtonSize && width && height))
				return;
			let fieldRow = Math.floor((width + gap) / (this.__ButtonSize + gap));
			if (!fieldRow) fieldRow = 1;
			let fieldColumn = Math.floor((height + gap) / (this.__ButtonSize + gap));
			if (!fieldColumn) fieldColumn = 1;


			this.__GridSize = fieldRow * fieldColumn;
			//this.__GridSize = (Math.floor(width / this.__ButtonSize) === 0 ? 1 : Math.floor(width / this.__ButtonSize)) * (Math.floor(height / this.__ButtonSize) === 0 ? 1 : Math.floor(height / this.__ButtonSize));
			if (this.__GridSize === 0 || !this.__elementContainer || !this.__elementButton)
				return;
			// check if Calc and Create of Grids can be left out
			if (this.__elementGrid &&
				this.__elementGrid[0] &&
				this.__GridSize === this.__elementGrid[0].children.length &&
				this.__elementButton.length <= this.__elementGrid.length * this.__GridSize)
				this.__spreadButtons();
			else {
				this.__calcGridCount();
			}
			this.__processGapSize();
			this.__processButtonSize();
		}
		//#endregion				
		//#region "__calcGridCount"
		protected __calcGridCount() {
			if (!this.__GridSize || !this.__ItemList) {
				return;
			}
			this.__GridCount = (Math.ceil(this.__ItemList.length / this.__GridSize));

			this.__processGrids();
		}
		//#endregion				
		//#region "__processGrids"
		protected __processGrids() {
			if (!this.__GridCount || !this.__elementContainer || !this.__elementButton || !this.__elementButtonGarage)
				return;
			let i;

			for (i = 0; i < this.__elementButton.children().length; i++) { // park Buttons in garage --> grids can be manipulated now
				if (this.__elementButton[i])
					this.__elementButtonGarage.append(this.__elementButton[i]); // Reminder: vllt unnötig?
			}
			if (this.__elementContainer[0].childElementCount === this.__GridCount) {	//no further Grids needed
				this.__processGridFields();
				return;
			}
			else if (this.__elementContainer[0].childElementCount > this.__GridCount) {	// too many grids --> delete not needed grids
				for (i = this.__elementContainer[0].childElementCount; i > this.__GridCount; i--) {
					if (this.__elementContainer[0].lastElementChild)
						this.__elementContainer[0].removeChild(this.__elementContainer[0].lastElementChild);
				}
			}
			else {
				for (i = this.__elementContainer[0].childElementCount; i < this.__GridCount; i++) {//further Grids needed --> generate further grids 
					let grid = $(document.createElement("div"));
					grid.addClass("TcHmi_Controls_Entertainment_TabletNavigation_NavigationControl-grid").attr("id", "TcHmi_Controls_Entertainment_TabletNavigation_NavigationControl_Grid_" + i);
					this.__elementContainer.append(grid);
				}
			}
			this.__elementGrid = this.__elementContainer.children();
			this.__processPageIndicator();
			this.__processGridFields();
		}
		//#endregion				
		//#region "__processPageIndicator"
		protected __processPageIndicator() {
			if (!this.__elementPageIndicatorInnerContainer)
				return;

			this.__elementPageIndicatorInnerContainer.empty();

			if (!this.__GridCount || this.__GridCount < 2)
				return;

			this.__elementPageIndicator = null;
			for (let i = 0; i < this.__GridCount; i++) {
				let Indicator = $(document.createElement("div"));
				Indicator.addClass("TcHmi_Controls_Entertainment_TabletNavigation_NavigationControl-pageIndicator-indicator");
				Indicator.attr("id", "indicator_" + i);
				this.__elementPageIndicatorInnerContainer.append(Indicator);
			}
			this.__elementPageIndicator = this.__elementPageIndicatorInnerContainer.find(".TcHmi_Controls_Entertainment_TabletNavigation_NavigationControl-pageIndicator-indicator");
		}
		//#endregion				
		//#region "__processGridFields"
		protected __processGridFields() {
			if (!this.__GridCount || !this.__elementGrid)
				return;
			let i, ii;
			for (i = 0; i < this.__GridCount; i++) {
				if (!this.__elementGrid[i])
					return;
				let grid = this.__elementGrid[i];
				if (grid.children.length > this.__GridSize) {
					for (ii = grid.children.length; ii > this.__GridSize; ii--)
						$(grid.children[ii - 1]).remove();
				}
				else {
					for (ii = grid.children.length; ii < this.__GridSize; ii++) { // Generate Fields and fill Grid
						let field = $(document.createElement("div"));
						field.addClass("TcHmi_Controls_Entertainment_TabletNavigation_NavigationControl-grid-field");
						field.appendTo(grid);
					}
				}
			}
			this.__spreadButtons();
		}

		//#endregion				
		//#region "__processButtonText"
		protected __processButtonText() {
			this.__processTextColor();
			this.__processTextColorActive();
			this.__processTextFontFamily();
			this.__processTextFontSize();
			this.__processTextFontStyle();
			this.__processTextFontWeight();
			this.__processTextHorizontalAlignment();
			this.__processTextPadding();
			this.__processTextPosition();
			this.__processWordWrap();
		}
		//#endregion 
		//#region "__spreadButtons"
		protected __spreadButtons() {
			let grid;
			if (!this.__GridCount || !this.__elementGrid)
				return;
			for (let i = 0; i < this.__GridCount; i++) {
				//after creating Grids and Fields --> insert Button-Controls in Grids --> 1 field = 1 Button
				if (!this.__elementGrid[i])
					return;
				grid = this.__elementGrid[i];
				for (let n = 0; n < this.__GridSize; n++) {
					if (!this.__elementButton || !this.__elementButton[n + i * this.__GridSize] || !grid.children[n])
						break;
					grid.children[n].append(this.__elementButton[n + i * this.__GridSize]);
				}
			}
			this.navigate();
		}
		//#endregion				
		//#region "__processButtonSize"
		protected __processButtonSize() {
			if (this.__elementGrid)
				this.__elementGrid.css("--fieldSize", this.__ButtonSize + "px");
		};
		//#endregion				
		//#region "__processGapSize"
		protected __processGapSize() {
			if (this.__elementGrid)
				this.__elementGrid.css("grid-gap", this.__GapSize + "px");
		};
		//#endregion				

		// touch functions
		//#region "__onMouseDown"
		protected __onMouseDown() {
			return (event: MouseEvent) => {
				let startMouseEvent = event;
				startMouseEvent.preventDefault();
				if (this.__destroyEventMouseMove) {
					this.__destroyEventMouseMove();
					this.__destroyEventMouseMove = null;
				}
				this.__destroyEventMouseMove = TcHmi.EventProvider.register(this.__id + '.onMouseMove', (event, data: MouseEvent) => {
					if (!startMouseEvent)
						return;
					data.preventDefault();

					let limit = 35; // Used to determine how far the mouse has to be moved to trigger animation.
					// Calculate how far the mouse was moved since __onMouseDown.

					let deltaX = data.clientX - startMouseEvent.clientX;
					let deltaY = data.clientY - startMouseEvent.clientY;

					if (deltaX > limit) {
						this.navigate('Right');
						if (this.__destroyEventMouseMove) {
							this.__destroyEventMouseMove();
							this.__destroyEventMouseMove = null;
						}
					}
					else if (deltaX < -limit) {
						this.navigate('Left');
						if (this.__destroyEventMouseMove) {
							this.__destroyEventMouseMove();
							this.__destroyEventMouseMove = null;
						}
					}
					else if (deltaY > limit) {
						this.navigate('Down');
						if (this.__destroyEventMouseMove) {
							this.__destroyEventMouseMove();
							this.__destroyEventMouseMove = null;
						}
					}
					else if (deltaY < -limit) {
						this.navigate('Up');

						if (this.__destroyEventMouseMove) {
							this.__destroyEventMouseMove();
							this.__destroyEventMouseMove = null;
						}
					}
				});
			}
		}
		//#endregion				
		//#region "__onMouseUp"
		protected __onMouseUp() {
			return (event: MouseEvent) => {
				this.__processNoInteractionTime();
				if (!this.__destroyEventMouseMove)
					return;
				this.__destroyEventMouseMove();
				this.__destroyEventMouseMove = null;
			}
		}
		//#endregion						
		//#region "__onTouchStart"
		protected __onTouchStart() {
			return (event: TouchEvent) => {
				let startTouchEvent = event;
				startTouchEvent.preventDefault();
				if (this.__destroyEventTouchMove) {
					this.__destroyEventTouchMove();
					this.__destroyEventTouchMove = null;
				}
				this.__destroyEventTouchMove = TcHmi.EventProvider.register(this.__id + '.onTouchMove', (event, data: TouchEvent) => {
					if (!startTouchEvent)
						return;
					data.preventDefault();

					let limit = 35; // Used to determine how far the touch (finger) has to be moved to trigger animation.
					// Calculate how far touch (finger) was moved since onTouchStart.

					let deltaX = data.touches[0].clientX - startTouchEvent.touches[0].clientX;
					let deltaY = data.touches[0].clientY - startTouchEvent.touches[0].clientY;


					if (deltaX > limit) {
						this.navigate('Right');
						if (this.__destroyEventTouchMove) {
							this.__destroyEventTouchMove();
							this.__destroyEventTouchMove = null;
						}
					}
					else if (deltaX < -limit) {
						this.navigate('Left');
						if (this.__destroyEventTouchMove) {
							this.__destroyEventTouchMove();
							this.__destroyEventTouchMove = null;
						}
					}
					else if (deltaY > limit) {
						this.navigate('Down');
						if (this.__destroyEventTouchMove) {
							this.__destroyEventTouchMove();
							this.__destroyEventTouchMove = null;
						}
					}
					else if (deltaY < -limit) {
						this.navigate('Up');
						if (this.__destroyEventTouchMove) {
							this.__destroyEventTouchMove();
							this.__destroyEventTouchMove = null;
						}
					}
				});
			}
		}
		//#endregion
		//#region "__onTouchEnd"
		// Destroy possibly registered onTouchMove event while touch interaction is finished
		protected __onTouchEnd() {
			return (event: TouchEvent) => {
				this.__processNoInteractionTime();
				if (!this.__destroyEventTouchMove)
					return;
				this.__destroyEventTouchMove();
				this.__destroyEventTouchMove = null;
			}
		}
		//#endregion

		//#region "__onIndicatorClick"
		protected __onIndicatorClick() {
			return (event: MouseEvent) => {

				if (!event.target)
					return;

				let id;
				if ($(event.target).hasClass('TcHmi_Controls_Entertainment_TabletNavigation_NavigationControl-pageIndicator-indicator'))
					id = $(event.target).attr('id');

				if (id) {
					id = parseInt(id.replace('indicator_', ''));
					this.navigate(id);
				}
			}
		}
		//#endregion
		//#region "__onIndicatorTouchDown"
		protected __onIndicatorTouchDown() {
			return (event: TouchEvent) => {

				if (!event.target)
					return;
				let id;

				if ($(event.target).hasClass('TcHmi_Controls_Entertainment_TabletNavigation_NavigationControl-pageIndicator-indicator'))
					id = $(event.target).attr('id');

				if (!id)
					return;

				id = parseInt(id.replace('indicator_', ''));
				this.__Touch = id;

				let startTouchEvent = event;
				startTouchEvent.preventDefault();

				if (this.__destroyEventPageIndicator) {
					this.__destroyEventPageIndicator();
					this.__destroyEventPageIndicator = null;
				}
				this.__destroyEventPageIndicator = TcHmi.EventProvider.register(this.__id + '.onTouchMove', (event, data: TouchEvent) => {
					if (!startTouchEvent)
						return;

					data.preventDefault();

					let limit = 10; // Used to determine how far the touch (finger) has to be moved to trigger animation.
					// Calculate how far touch (finger) was moved since onTouchStart.

					let deltaX = data.touches[0].clientX - startTouchEvent.touches[0].clientX;
					let deltaY = data.touches[0].clientY - startTouchEvent.touches[0].clientY;

					if ((deltaX > limit) || (deltaX < -limit) || (deltaY > limit) || (deltaY < -limit)) {
						this.__Touch = -1;

						if (this.__destroyEventPageIndicator) {
							this.__destroyEventPageIndicator();
							this.__destroyEventPageIndicator = null;
						}
					}
				});

				if (this.__touchLockTimeoutId) {
					clearTimeout(this.__touchLockTimeoutId);
					this.__touchLockTimeoutId = 0;
				}
				this.__touchLockTimeoutId = setTimeout(() => {
					this.__Touch = -1;
				}, 500);
			}
		}
	

		protected __onIndicatorTouchEndOrCancel() {
			return (event: TouchEvent) => {
				if (this.__destroyEventPageIndicator) {
					this.__destroyEventPageIndicator();
					this.__destroyEventPageIndicator = null;
				}

				if (this.__Touch > -1)
					this.navigate(this.__Touch)
				this.__Touch = -1;

			};
		}
		//#endregion
	}
	export module Item {
		export interface IButtonElement {
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
}

TcHmi.Controls.registerEx('NavigationControl', 'TcHmi.Controls.Entertainment.TabletNavigation', TcHmi.Controls.Entertainment.TabletNavigation.NavigationControl);

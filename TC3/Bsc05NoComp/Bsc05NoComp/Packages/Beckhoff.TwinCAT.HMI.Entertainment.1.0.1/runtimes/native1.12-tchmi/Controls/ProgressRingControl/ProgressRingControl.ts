/*
 * Generated 8/28/2020 4:24:35 PM
 * Copyright (C) 2020
 */
module TcHmi.Controls.Entertainment {
	export class ProgressRing extends TcHmi.Controls.System.TcHmiControl {

		/*
		Attribute philosophy
		--------------------
		- Local variables are not set while definition in class, so they have the value 'undefined'.
		- On compile the Framework sets the value from HTML or from theme (possibly 'null') via normal setters
		- The "changed detection" in the setter will result in processing the value only once while compile
		- Attention: If we have a Server Binding on an Attribute the setter can be very late or never (leaving the value = undefined).
		*/


		/**
			* @description Constructor of the control
			* @param {JQuery} element Element from HTML (internal, do not use)
			* @param {JQuery} pcElement precompiled Element (internal, do not use)
			* @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
			* @returns {void}
			*/
		constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList) {
			/** Call base class constructor */
			super(element, pcElement, attrs);
		}

		protected __elementTemplateRoot!: JQuery;
		protected __elementSvgContainer!: JQuery;
		protected __elementSvgCircle!: JQuery;
		protected __elementText!: JQuery;

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


		//internal references to attributes 
		//data-tchmi-ProgressColor
		protected __ProgressColor: SolidColor | null | undefined;
		//data-tchmi-ProgressColor
		protected __FillColor: SolidColor | null | undefined;
		//data-tchmi-Progress
		protected __LineWidth: number | null | undefined;
		//data-tchmi-Progress
		protected __Progress: number | null | undefined;
		//data-tchmi-RotateIntervalTime
		protected __RotateIntervalTime: number | null | undefined;
		//data-tchmi-TransitionTime
		protected __TransitionTime: number | null | undefined;
		//data-tchmi-CircleStartPoint
		protected __CircleStartPoint: number | null | undefined;
		//data-tchmi-ShowValue
		protected __ShowValue: boolean | null | undefined;


		/**
			* If raised, the control object exists in control cache and constructor of each inheritation level was called.
			* Call attribute processor functions here to initialize default values!
			*/
		public __previnit() {
			// Fetch template root element
			this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_Entertainment_ProgressRing-template');
			if (this.__elementTemplateRoot.length === 0) {
				throw new Error('Invalid Template.html');
			} // Fetch SVG element
			this.__elementSvgContainer = this.__elementTemplateRoot.find('.TcHmi_Controls_Entertainment_ProgressRing-SVG-container');
			if (this.__elementSvgContainer.length === 0) {
				throw new Error('Invalid Template.html, missing element: SVG (.TcHmi_Controls_Entertainment_ProgressRing-SVG-container)');
			} // Fetch SVG circle element
			this.__elementSvgCircle = this.__elementSvgContainer.find('.TcHmi_Controls_Entertainment_ProgressRing-SVG-circle');
			if (this.__elementSvgCircle.length === 0) {
				throw new Error('Invalid Template.html, missing element: Circle (.TcHmi_Controls_Entertainment_ProgressRing-SVG-container)');
			} // Fetch Text element
			this.__elementText = this.__element.find('.TcHmi_Controls_Entertainment_ProgressRing-text');
			if (this.__elementText.length === 0) {
				throw new Error('Invalid Template.html, missing element: Circle (.TcHmi_Controls_Entertainment_ProgressRing-text)');
			}
			// Call __previnit of base class
			super.__previnit();
		}
		/** 
			* @description Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values. 
			* @returns {void}
			*/
		public __init() {
			super.__init();
		}

		/**
		* @description Is called by tachcontrol() after the control instance gets part of the current DOM.
		* Is only allowed to be called from the framework itself!
		*/
		public __attach() {
			super.__attach();

			/**
				* Initialize everything which is only available while the control is part of the active dom.
				*/
		}

		/**
		* @description Is called by tachcontrol() after the control instance is no longer part of the current DOM.
		* Is only allowed to be called from the framework itself!
		*/
		public __detach() {
			super.__detach();

			/**
				* Disable everything which is not needed while the control is not part of the active dom.
				* No need to listen to events for example!
				*/
		}

		/**
		* @description Destroy the current control instance. 
		* Will be called automatically if system destroys control!
		*/
		public destroy() {
			/**
			* While __keepAlive is set to true control must not be destroyed.
			*/
			if (this.__keepAlive) {
				return;
			}

			super.destroy();

			/**
			* Free resources like child controls etc.
			*/
		}

		////////////////Attribut Setter/Getter
		public setProgressColor(valueNew: SolidColor | null | undefined) {
			let convertedValue = TcHmi.ValueConverter.toObject<SolidColor>(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('ProgressColor');
			}

			if (convertedValue === this.__ProgressColor) {
				return;
			}

			this.__ProgressColor = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'ProgressColor' });
			this.__processProgressColor();
		}

		public getProgressColor() {
			return this.__ProgressColor;
		}

		protected __processProgressColor() {
			TcHmi.StyleProvider.processStrokeColor(this.__elementSvgCircle, this.__ProgressColor);
		}

		public setFillColor(valueNew: SolidColor | null | undefined) {
			let convertedValue = TcHmi.ValueConverter.toObject<SolidColor>(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('FillColor');
			}

			if (convertedValue === this.__FillColor) {
				return;
			}

			this.__FillColor = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'FillColor' });
			this.__processFillColor();
		}

		public getFillColor() {
			return this.__FillColor;
		}

		protected __processFillColor() {
			TcHmi.StyleProvider.processFillColor(this.__elementSvgCircle, this.__FillColor);
		}

		public setLineWidth(valueNew: number | null) {
			let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
			if (convertedValue === null || convertedValue === undefined) {
				convertedValue = this.getAttributeDefaultValueInternal('LineWidth');
			}

			if (convertedValue === this.__LineWidth) {
				return;
			}

			this.__LineWidth = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'LineWidth' });

			// call process function to process the new value
			this.__processLineWidth();
		}

		public getLineWidth() {
			return this.__LineWidth;
		}

		protected __processLineWidth() {
			this.__elementSvgCircle.css("stroke-width", this.__LineWidth ?? 0);
		}

		public setProgress(valueNew: number | null) {
			let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('Progress');
			}

			if (convertedValue === this.__Progress) {
				return;
			}

			this.__Progress = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'Progress' });

			// call process function to process the new value
			this.__processProgress();
		}

		public getProgress() {
			return this.__Progress;
		}

		protected __processProgress() {
			if (!this.__Progress) {
				this.__Progress = 0;
				this.__elementSvgCircle[0].style.strokeDasharray = 0 + ", 251.33";
			}
			else {
				this.__Progress = this.__Progress > 100 ? 100 : (this.__Progress < 0 ? 0 : this.__Progress);
				// limit range 0-100 // use 1 dash of dasharray for the progress to manipulate it dinamically
				// Calculation: strokedasharray=Progress(0-100)*2*pi*r(40)/100 -->100 = full circumference
				this.__elementSvgCircle[0].style.strokeDasharray = (this.__Progress * (251.33 / 100)) + ", 251.33";
			}

			this.__elementText[0].textContent = (this.__Progress) + "%";
		}

		public setRotateIntervalTime(valueNew: number | null) {
			let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('RotateIntervalTime');
			}

			if (convertedValue === this.__RotateIntervalTime) {
				return;
			}

			this.__RotateIntervalTime = convertedValue as number;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'RotateIntervalTime' });
			this.__processRotateIntervalTime();
		}

		public getRotateIntervalTime() {
			return this.__RotateIntervalTime;
		}

		protected __processRotateIntervalTime() {
			if (this.__RotateIntervalTime === undefined || this.__RotateIntervalTime === null)
				return;

			if (TCHMI_DESIGNER !== true) {
				// don’t make animations in designer
				this.__elementSvgContainer.css("animation", "spin " + (this.__RotateIntervalTime / 1000) + "s linear infinite");
			}
		}

		public setTransitionTime(valueNew: number | null) {
			let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('RotateIntervalTime');
			}

			if (convertedValue === this.__TransitionTime) {
				return;
			}

			this.__TransitionTime = convertedValue as number;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'RotateIntervalTime' });
			this.__processTransitionTime();
		}

		public getTransitionTime() {
			return this.__TransitionTime;
		}

		protected __processTransitionTime() {
			if (this.__TransitionTime === undefined || this.__TransitionTime === null)
				return;

			this.__elementSvgCircle.css("transition", "stroke-dasharray " + (this.__TransitionTime / 1000) + "s");

		}


		public setCircleStartPoint(valueNew: number | null) {
			let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('CircleStartPoint') as number;
			}

			if (convertedValue === this.__CircleStartPoint) {
				return;
			}

			this.__CircleStartPoint = convertedValue % 360;


			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'CircleStartPoint' });

			// call process function to process the new value
			this.__processCircleStartPoint();
		}

		public getCircleStartPoint() {
			return this.__CircleStartPoint;
		}

		protected __processCircleStartPoint() {

			this.__elementSvgCircle[0].setAttribute("transform", "rotate(" + ((this.__CircleStartPoint ?? 0) - 90) + " 50 50)");

		}
		public setShowValue(valueNew: boolean | null) {
			let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('ShowValue') as boolean;
			}
			if (convertedValue === this.__ShowValue) {
				return;
			}

			this.__ShowValue = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'ShowValue' });


			this.__processShowValue();
		}

		/**
		* Returns the current value of wordWrap.
		* @returns The current value of wordWrap.
		*/
		public getShowValue() {
			return this.__ShowValue;
		}

		/**
		* Processes the current wordWrap attribute value.
		*/
		protected __processShowValue() {
			if (this.__ShowValue)
				this.__elementText.css("visibility", "visible")
			else
				this.__elementText.css("visibility", "collapse")

		}
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

			if (this.__elementText)
				this.__elementText.css("font-size", (this.__textFontSize ?? 200) + (this.__textFontSizeUnit ?? "%"));
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
			if (this.__elementText)
				this.__elementText.css("font-family", this.__textFontFamily ?? "");
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
			if (this.__elementText)
				this.__elementText.css("font-style", this.__textFontStyle ?? "Auto");
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
			if (this.__elementText)
				this.__elementText.css("font-weight", this.__textFontWeight ?? "Auto");
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

			if (this.__elementText && this.__wordWrap) {
				this.__elementText.css("white-space", 'pre-wrap');
				this.__elementText.css("word-wrap", 'break-word');
				this.__elementText.css("overflow-wrap", 'break-word');
			}
			else if (this.__elementText) {
				this.__elementText.css("white-space", "");
				this.__elementText.css("word-wrap", "");
				this.__elementText.css("overflow-wrap", "");
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
				if (TCHMI_CONSOLE_LOG_LEVEL >= TcHmi.System.LOG_LEVEL.Error) { TcHmi.Log.error('[Source=Control, Module=TcHmi.Controls.ProgressRing, Id=' + this.getId() + ', Attribute=TextPadding] Resolving symbols from object failed with error: ' + TcHmi.Log.buildMessage(data.details)); }
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

			if (!this.__elementText || !this.__elementText)
				return;
			for (let i = 0; i < this.__elementText.length; i++) {
				if (this.__elementText && this.__elementText[i])
					TcHmi.StyleProvider.processContentPadding(this.__elementText[i], this.__textPadding ?? { left: 0, top: 0, right: 0, bottom: 0 });
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
			if (!this.__elementText)
				return;

			this.__elementText.css("text-align", this.__textHorizontalAlignment?.toLowerCase() ?? "middle");
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
			if (!this.__elementText)
				return;

			if (this.__textPosition === "Top") this.__elementText.css("top", "10%");
			else if (this.__textPosition === "Center") this.__elementText.css("top", "50%");
			else this.__elementText.css("top", "90%");

		}

		public setTextColor(valueNew: SolidColor | null) {
			let convertedValue = TcHmi.ValueConverter.toObject<SolidColor>(valueNew);

			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('TextColor') as SolidColor | null;
			}

			if (tchmi_equal(convertedValue, this.__textColor)) {
				return;
			}

			this.__textColor = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'TextColor' });

			this.__processTextColor();
		}
		public getTextColor() {
			return this.__textColor;
		}
		protected __processTextColor() {
			TcHmi.StyleProvider.processTextColor(this.__elementText, this.__textColor);
		}
	}
}
TcHmi.Controls.registerEx('ProgressRing', 'TcHmi.Controls.Entertainment', TcHmi.Controls.Entertainment.ProgressRing);

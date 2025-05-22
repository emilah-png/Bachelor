/*
 * Generated 8/18/2020 3:29:26 PM
 * Copyright (C) 2020
 */
module TcHmi.Controls.Entertainment {
	export class ScaleBar extends TcHmi.Controls.System.TcHmiControl {

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



		//references to elements
		protected __elementTemplateRoot!: JQuery;
		protected __elementContainer   !: JQuery;
		protected __elementMainTick	   !: JQuery | undefined;
		protected __elementSubTick	   !: JQuery | undefined;

		//internal references to attributes 
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


		//further variables
		protected __MainTickCount: number;
		protected __SubTickCount: number;

		protected __internalMaxValue: number = 100;
		protected __internalMinValue: number = 0;



		/**
			* If raised, the control object exists in control cache and constructor of each inheritation level was called.
			* Call attribute processor functions here to initialize default values!
			*/
		public __previnit() {
			// Fetch template root element
			this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_Entertainment_ScaleBar-template');
			if (this.__elementTemplateRoot.length === 0) {
				throw new Error('Invalid Template.html');
			}
			this.__elementContainer = this.__elementTemplateRoot.find('.TcHmi_Controls_Entertainment_ScaleBar-container');
			if (this.__elementContainer.length === 0) {
				throw new Error('Invalid Template.html, missing element: div (.TcHmi_Controls_Entertainment_ScaleBar-container)');
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

			this.__processTicks();

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


		}
		protected __setInternalMinMaxValue() {

			if (this.__MinValue !== undefined && this.__MaxValue !== undefined) {
				this.__internalMinValue = this.__MinValue > this.__MaxValue ? this.__MaxValue : this.__MinValue;
				this.__internalMaxValue = this.__MaxValue < this.__MinValue ? this.__MinValue : this.__MaxValue;
			} else {
				this.__internalMinValue = 0;
				this.__internalMaxValue = 100;
			}
			this.__processTicks();

		}
		////////////////Attribut Setter/Getter
		public setOrientation(valueNew: string | null) {
			let convertedValue = TcHmi.ValueConverter.toString(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('Orientation') as string;
			}

			if (convertedValue === this.__Orientation) {
				return;
			}

			this.__Orientation = convertedValue as Orientation;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'Orientation' });
			this.__processTicks();
		}

		public getOrientation() {
			return this.__Orientation;
		}


		public setAlignment(valueNew: HorizontalAlignment | null) {
			let convertedValue = TcHmi.ValueConverter.toHorizontalAlignment(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('Alignment');
			}

			if (convertedValue === this.__Alignment) {
				return;
			}

			this.__Alignment = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'Alignment' });
			this.__processTickConfiguration();
		}

		public getAlignment() {
			return this.__Alignment;
		}


		public setShowEndTicks(valueNew: boolean) {
			let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('ShowEndTicks');
			}

			if (convertedValue === this.__ShowEndTicks) {
				return;
			}

			this.__ShowEndTicks = convertedValue as boolean;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'ShowEndTicks' });
			this.__processTicks();
		}

		public getShowEndTicks() {
			return this.__ShowEndTicks;
		}


		public setMinValue(valueNew: number | undefined) {

			let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('MinValue');
			}

			if (convertedValue === this.__MinValue) {
				return;
			}

			this.__MinValue = convertedValue as number;
			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'MinValue' });

			if (this.__MaxValue === undefined || this.__MinValue === undefined) {
				return;
			}
			this.__setInternalMinMaxValue();
		}

		public getMinValue() {
			return this.__MinValue;
		}


		public setMaxValue(valueNew: number | undefined) {


			let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('MaxValue');
			}

			if (convertedValue === this.__MaxValue) {
				return;
			}

			this.__MaxValue = convertedValue as number;
			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'MaxValue' });

			if (this.__MaxValue === undefined || this.__MinValue === undefined) {
				return;
			}
			this.__setInternalMinMaxValue();
		}

		public getMaxValue() {
			return this.__MaxValue;
		}


		public setStartTicksWithMinValue(valueNew: boolean) {
			let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('StartTicksWithMinValue');
			}

			if (convertedValue === this.__StartTicksWithMinValue) {
				return;
			}

			this.__StartTicksWithMinValue = convertedValue as boolean;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'StartTicksWithMinValue' });
			this.__processTicks();
		}

		public getStartTicksWithMinValue() {
			return this.__StartTicksWithMinValue;
		}


		public setTickColor(valueNew: SolidColor | null | undefined) {
			let convertedValue = TcHmi.ValueConverter.toObject<SolidColor>(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('TickColor') as SolidColor | null;
			}

			if (convertedValue === this.__TickColor) {
				return;
			}

			this.__TickColor = convertedValue;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'TickColor' });
			this.__processTickConfiguration();
		}

		public getTickColor() {
			return this.__TickColor;
		}


		public setMainTickSize(valueNew: SizeUnit | undefined) {
			let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('MainTickSize');
			}

			if (convertedValue === this.__MainTickSize) {
				return;
			}

			this.__MainTickSize = convertedValue as SizeUnit;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'MainTickSize' });
			this.__processTickConfiguration();
		}

		public getMainTickSize() {
			return this.__MainTickSize;
		}


		public setSubTickSize(valueNew: SizeUnit | undefined) {
			let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('SubTickSize');
			}

			if (convertedValue === this.__SubTickSize) {
				return;
			}

			this.__SubTickSize = convertedValue as SizeUnit;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'SubTickSize' });
			this.__processTickConfiguration();
		}

		public getSubTickSize() {
			return this.__SubTickSize;
		}

		protected __processTickConfiguration() {
			if (!this.__isAttached)
				return;

			if (this.__elementMainTick)
				this.__TickColor?.color ? this.__elementMainTick.css("background", this.__TickColor.color) : this.__elementMainTick.css("background", "");
			if (this.__elementSubTick)
				this.__TickColor ? this.__elementSubTick.css("background", this.__TickColor.color) : this.__elementSubTick.css("background", "");

			let CssAlignmentProperty = (this.__Orientation === "Horizontal" || this.__Orientation == "HorizontalInverted") ? "top" : "left";

			let CssSizeProperty1 = "";
			let CssSizeProperty2 = "";
			if (this.__Orientation == "Horizontal") {
				CssSizeProperty1 = "width";
				CssSizeProperty2 = "height";
			}
			else if (this.__Orientation == "Vertical") {
				CssSizeProperty1 = "height";
				CssSizeProperty2 = "width";
			}
			else if (this.__Orientation == "HorizontalInverted") {
				CssSizeProperty1 = "width";
				CssSizeProperty2 = "height";
			}
			else if (this.__Orientation == "VerticalInverted") {
				CssSizeProperty1 = "height";
				CssSizeProperty2 = "width";
			}


			//this is for Aligning the Ticks dependend on Orientation
			if (this.__Alignment === "Left") {
				this.__elementMainTick?.css(CssAlignmentProperty, "0");
				this.__elementSubTick?.css(CssAlignmentProperty, "0%");
				if (this.__Orientation == "Horizontal") {
					this.__elementMainTick?.css("transform", "translate(-50%, 0%)");
					this.__elementSubTick?.css("transform", "translate(-50%, 0%)");
				}
				else if (this.__Orientation == "HorizontalInverted") {
					this.__elementMainTick?.css("transform", "translate(50%,100%)");
					this.__elementSubTick?.css("transform", "translate(50%,0%)");
				}
				else if (this.__Orientation == "VerticalInverted") {
					this.__elementMainTick?.css("transform", "translate(0%,-50%)");
					this.__elementSubTick?.css("transform", "translate(0%,-50%)");
				}
				else {
					this.__elementMainTick?.css("transform", "translate(0%, 50%)");
					this.__elementSubTick?.css("transform", "translate(0%, 50%)");
				}
			}
			else if (this.__Alignment === "Center") {
				this.__elementMainTick?.css(CssAlignmentProperty, "50%");
				this.__elementSubTick?.css(CssAlignmentProperty, "50%");
				if (this.__Orientation == "Horizontal") {
					this.__elementMainTick?.css("transform", "translate(-50%, -50%)");
					this.__elementSubTick?.css("transform", "translate(-50%, -50%)");
				}
				else if (this.__Orientation == "Vertical") {
					this.__elementMainTick?.css("transform", "translate(-50%,50%)");
					this.__elementSubTick?.css("transform", "translate(-50%,50%)");
				}
				else if (this.__Orientation == "HorizontalInverted") {
					this.__elementMainTick?.css("transform", "translate(50%,-50%)");
					this.__elementSubTick?.css("transform", "translate(50%,-50%)");
				}
				else if (this.__Orientation == "VerticalInverted") {
					this.__elementMainTick?.css("transform", "translate(-50%,-50%)");
					this.__elementSubTick?.css("transform", "translate(-50%,-50%)");
				}
			}
			else {
				this.__elementMainTick?.css(CssAlignmentProperty, "100%");
				this.__elementSubTick?.css(CssAlignmentProperty, "100%");
				if (this.__Orientation == "Horizontal") {
					this.__elementMainTick?.css("transform", "translate(-50%,-100%)");
					this.__elementSubTick?.css("transform", "translate(-50%,-100%)");
				}
				else if (this.__Orientation == "HorizontalInverted") {
					this.__elementMainTick?.css("transform", "translate(50%,-100%)");
					this.__elementSubTick?.css("transform", "translate(50%,-100%)");
				}
				else if (this.__Orientation == "VerticalInverted") {
					this.__elementMainTick?.css("transform", "translate(-100%,-50%)");
					this.__elementSubTick?.css("transform", "translate(-100%,-50%)");
				}
				else {
					this.__elementMainTick?.css("transform", "translate(-100%, 50%)");
					this.__elementSubTick?.css("transform", "translate(-100%, 50%)");
				}
			}

			if (!this.__MainTickSize?.MeasurementUnitLength
				|| !this.__MainTickSize?.MeasurementUnitThickness
				|| !this.__MainTickSize?.MeasurementValueLength
				|| !this.__MainTickSize?.MeasurementValueThickness) {
				throw new Error('Invalid Main-TickSize Configuration');
				return;
			}
			if (!this.__SubTickSize?.MeasurementUnitLength
				|| !this.__SubTickSize?.MeasurementUnitThickness
				|| !this.__SubTickSize?.MeasurementValueLength
				|| !this.__SubTickSize?.MeasurementValueThickness) {
				throw new Error('Invalid Sub-TickSize Configuration');
				return;
			}

			// this is for sizing the ticks dependend on Orientation
			this.__elementMainTick?.css(CssSizeProperty1, TcHmi.ValueConverter.toString(this.__MainTickSize!.MeasurementValueThickness) + (this.__MainTickSize!.MeasurementUnitThickness));
			this.__elementSubTick?.css(CssSizeProperty1, TcHmi.ValueConverter.toString(this.__SubTickSize!.MeasurementValueThickness) + (this.__SubTickSize!.MeasurementUnitThickness));
			this.__elementMainTick?.css(CssSizeProperty2, TcHmi.ValueConverter.toString(this.__MainTickSize!.MeasurementValueLength) + (this.__MainTickSize!.MeasurementUnitLength));
			this.__elementSubTick?.css(CssSizeProperty2, TcHmi.ValueConverter.toString(this.__SubTickSize!.MeasurementValueLength) + (this.__SubTickSize!.MeasurementUnitLength));

		}

		public setTickRange(valueNew: TickRange | undefined) {
			let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal('TickRange');
			}

			if (convertedValue === this.__TickRange) {
				return;
			}

			this.__TickRange = convertedValue as TickRange;

			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'TickRange' });

			this.__processTicks();
		}

		public getTickRange() {
			return this.__TickRange;
		}
		////////////////further Functions

		protected __processTicks() {// needs to be directly called if size of control or TickSize changes!!

			this.__elementContainer.empty();
			//calculate number of Ticks
			if (this.__TickRange && (this.__internalMaxValue !== undefined) && (this.__internalMinValue !== undefined)) {
				this.__MainTickCount = Math.floor((this.__internalMaxValue - this.__internalMinValue) / this.__TickRange.mainTickRange) + 1;
				this.__SubTickCount = Math.floor((this.__internalMaxValue - this.__internalMinValue) / this.__TickRange.subTickRange) + 1;
			}
			else {
				return;
			}


			let positionCss = '';
			if (this.__Orientation == 'Horizontal')
				positionCss = 'left';
			else if (this.__Orientation == 'Vertical')
				positionCss = 'bottom';
			else if (this.__Orientation == 'HorizontalInverted')
				positionCss = 'right';
			else if (this.__Orientation == 'VerticalInverted')
				positionCss = 'top';


			let OffsetSub = this.__StartTicksWithMinValue ? 0 : // offset to next Tick
				(this.__internalMinValue < 0 ?			// needed because different modulo calculation for negativ values.. 
					(Math.abs(this.__internalMinValue) % this.__TickRange.subTickRange) :
					this.__TickRange.subTickRange - (this.__internalMinValue % this.__TickRange.subTickRange));

			let OffsetMain = this.__StartTicksWithMinValue ? 0 : // offset to next Tick
				(this.__internalMinValue < 0 ?			// needed because different modulo calculation for negativ values.. 
					(Math.abs(this.__internalMinValue) % this.__TickRange.mainTickRange) :
					(this.__TickRange.mainTickRange - this.__internalMinValue % this.__TickRange.mainTickRange));

			let internalTickValue, tick;
			for (let i = 0; i < this.__SubTickCount; i++) {// get Offset ; e.g. min Value = 6 Range is 10 --> Offset 4

				if (this.__StartTicksWithMinValue)
					internalTickValue = this.__TickRange.subTickRange * i;
				else
					internalTickValue = this.__TickRange.subTickRange * i + this.__internalMinValue + OffsetSub;

				if ((internalTickValue) % (Math.abs(this.__TickRange.mainTickRange)) === 0) {
					continue;
				}
				if ((internalTickValue === this.__internalMinValue && !this.__ShowEndTicks) ||
					(internalTickValue === this.__internalMaxValue && !this.__ShowEndTicks)) {
					continue;
				}

				tick = $('<div class="TcHmi_Controls_Entertainment_ScaleBar-subTick"></div>');

				if (this.__StartTicksWithMinValue)
					tick.css(positionCss, ((internalTickValue) / (this.__internalMaxValue - this.__internalMinValue)) * 100 + '%');
				else
					tick.css(positionCss, ((internalTickValue - this.__internalMinValue) / (this.__internalMaxValue - this.__internalMinValue)) * 100 + '%');

				this.__elementContainer.append(tick);
			}

			for (let i = 0; i < this.__MainTickCount; i++) {// get Offset ; e.g. min Value = 6 Range is 10 --> Offset 4

				if (this.__StartTicksWithMinValue)
					internalTickValue = this.__TickRange.mainTickRange * i - this.__TickRange.mainTickRange;
				else
					internalTickValue = this.__TickRange.mainTickRange * i + this.__internalMinValue + OffsetMain - this.__TickRange.mainTickRange;

				if ((internalTickValue === this.__internalMinValue && !this.__ShowEndTicks) ||
					(internalTickValue === this.__internalMaxValue && !this.__ShowEndTicks)) {
					continue;
				}

				let tick = $('<div class="TcHmi_Controls_Entertainment_ScaleBar-mainTick"></div>');
				if (this.__StartTicksWithMinValue)
					tick.css(positionCss, ((internalTickValue) / (this.__internalMaxValue - this.__internalMinValue)) * 100 + '%');
				else
					tick.css(positionCss, ((internalTickValue - this.__internalMinValue) / (this.__internalMaxValue - this.__internalMinValue)) * 100 + '%');

				this.__elementContainer.append(tick);
			}
			this.__elementSubTick = this.__elementContainer.find('.TcHmi_Controls_Entertainment_ScaleBar-subTick');
			this.__elementMainTick = this.__elementContainer.find('.TcHmi_Controls_Entertainment_ScaleBar-mainTick');

			this.__processTickConfiguration();

		}
	}

	//define interface/datatype for sizeunit
	interface SizeUnit {
		MeasurementValueThickness: number;
		MeasurementUnitThickness: FontSizeUnit;
		MeasurementValueLength: number;
		MeasurementUnitLength: FontSizeUnit;
	}
	//define interface/datatype for TickRange
	interface TickRange {
		mainTickRange: number;
		subTickRange: number;
	}

	type Orientation = 'Vertical' | 'Horizontal' | 'HorizontalInverted' | 'VerticalInverted';
}
TcHmi.Controls.registerEx('ScaleBar', 'TcHmi.Controls.Entertainment', TcHmi.Controls.Entertainment.ScaleBar);

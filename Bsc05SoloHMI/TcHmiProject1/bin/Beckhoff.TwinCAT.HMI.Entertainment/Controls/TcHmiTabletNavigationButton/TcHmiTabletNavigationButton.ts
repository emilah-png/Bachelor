/*
 * Generated 11/16/2020 12:00:14 PM
 * Copyright (C) 2020
 */
module TcHmi.Controls.Entertainment.TabletNavigation {
	export class Button extends TcHmi.Controls.System.TcHmiControl {

		constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList) {
			/** Call base class constructor */
			super(element, pcElement, attrs);
			this.__mousedownHandler = this.__onMouseDown();
			this.__mouseupHandler = this.__onMouseUp();
			this.__mouseleaveHandler = this.__onMouseLeave();
			this.__touchstartHandler = this.__onTouchStart();
			this.__touchEndOrCancelHandler = this.__onTouchEndOrCancel();
		}

		//#region "internal Variables"
		//Attributes
		/** html attribute: data-tchmi-icon*/
		protected __Icon: string | null | undefined;
		/** html attribute: data-tchmi-icon-active*/
		protected __Icon_Active: string | null | undefined;
		/** html attribute: data-tchmi-content-page*/
		protected __ContentPage: string | null | undefined;
		/** html attribute: data-tchmi-button-text*/
		protected __ButtonText: string | null | undefined;
		/** html attribute: data-tchmi-diag-state*/
		protected __DiagState: Severity | null | undefined;

		protected __elementTemplateRoot!: JQuery;
		protected __elementIcon!: JQuery;
		protected __elementText!: JQuery;
		protected __elementDiagCircle!: JQuery;

		protected __destroyEventTouchMove: DestroyFunction | null = null;
		protected __destroyEventMouseMove: DestroyFunction | null = null;

		/** Event handlers */
		protected __mousedownHandler: (event: MouseEvent) => void;
		protected __mouseupHandler: (event: MouseEvent) => void;
		protected __mouseleaveHandler: (event: MouseEvent) => void;
		protected __touchstartHandler: (event: TouchEvent) => void;
		protected __touchEndOrCancelHandler: (event: TouchEvent) => void;

		protected __Mouse: boolean = false;
		protected __Touch: boolean = false;

		protected __ClickTimeoutId: number = 0;
		protected __touchLockTimeoutId: number = 0;
		//#endregion				

		//#region "__previnit" 
		/**
			* If raised, the control object exists in control cache and constructor of each inheritation level was called.
			* Call attribute processor functions here to initialize default values!
			*/
		public __previnit() {
			// Fetch template root element
			this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_Entertainment_TabletNavigation_Button-template');
			if (this.__elementTemplateRoot.length === 0) {
				throw new Error('Invalid Template.html');
			}
			this.__elementIcon = this.__elementTemplateRoot.find('.TcHmi_Controls_Entertainment_TabletNavigation_Button-icon');
			if (this.__elementIcon.length === 0) {
				throw new Error('Invalid Template.html, missing img element .TcHmi_Controls_Entertainment_TabletNavigation_Button-icon');
			}

			this.__elementText = this.__elementTemplateRoot.find('.TcHmi_Controls_Entertainment_TabletNavigation_Button-text');
			if (this.__elementText.length === 0) {
				throw new Error('Invalid Template.html, missing div element .TcHmi_Controls_Entertainment_TabletNavigation_Button-text');
			}
			this.__elementDiagCircle = this.__elementTemplateRoot.find('.TcHmi_Controls_Entertainment_TabletNavigation_Button-diagCircle');
			if (this.__elementDiagCircle.length === 0) {
				throw new Error('Invalid Template.html, missing div element .TcHmi_Controls_Entertainment_TabletNavigation_Button-diagCircle');
			}
			// Call __previnit of base class
			super.__previnit();
		}
		//#endregion				
		//#region "__init" 
		/** 
			* @description Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values. 
			* @returns {void}
			*/
		public __init() {
			super.__init();

		}
		//#endregion
		//#region "__attach" 
		/**
		* @description Is called by tachcontrol() after the control instance gets part of the current DOM.
		* Is only allowed to be called from the framework itself!
		*/
		public __attach() {
			super.__attach();

			this.__element[0].addEventListener('mousedown', this.__mousedownHandler);
			this.__element[0].addEventListener('mouseleave', this.__mouseleaveHandler);
			this.__element[0].addEventListener('touchstart', this.__touchstartHandler);
			this.__element[0].addEventListener('touchend', this.__touchEndOrCancelHandler);
			this.__element[0].addEventListener('touchcancel', this.__touchEndOrCancelHandler);

			if (TCHMI_DESIGNER !== true)
				// don’t make animations in designer
				this.__elementDiagCircle.css("animation", "Blink 4s infinite");


			/**
				* Initialize everything which is only available while the control is part of the active dom.
				*/
		}
		//#endregion				
		//#region "__detach" 
		/**
		* @description Is called by tachcontrol() after the control instance is no longer part of the current DOM.
		* Is only allowed to be called from the framework itself!
		*/
		public __detach() {
			super.__detach();

			if (this.__destroyEventTouchMove) {
				this.__destroyEventTouchMove()
				this.__destroyEventTouchMove = null;
			}
			if (this.__destroyEventMouseMove) {
				this.__destroyEventMouseMove()
				this.__destroyEventMouseMove = null;
			}
			this.__element[0].removeEventListener('mousedown', this.__mousedownHandler);
			this.__element[0].removeEventListener('mouseleave', this.__mouseleaveHandler);
			this.__element[0].removeEventListener('touchstart', this.__touchstartHandler);
			this.__element[0].removeEventListener('touchend', this.__touchEndOrCancelHandler);
			this.__element[0].removeEventListener('touchcancel', this.__touchEndOrCancelHandler);
			/**
				* Disable everything which is not needed while the control is not part of the active dom.
				* No need to listen to events for example!
				*/
		}
		//#endregion				
		//#region "destroy 
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
		//#endregion

		//Attributes
		//#region "ButtonText" 
		public setButtonText(valueNew: string | null | undefined) {
			let convertedValue = TcHmi.ValueConverter.toString(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal<string>('ButtonText');
			}

			if (tchmi_equal(convertedValue, this.__ButtonText)) {
				return;
			}
			this.__ButtonText = convertedValue;
			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'ButtonText' });
			this.__processButtonText();
		}

		public getButtonText() {
			return this.__ButtonText;
		}

		protected __processButtonText() {
			this.__elementText[0].innerHTML = <string>this.__ButtonText;
		}

		//#endregion
		//#region "Icon" 
		public setIcon(valueNew: string | null | undefined) {
			let convertedValue = TcHmi.ValueConverter.toString(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal<string>('Icon');
			}

			if (tchmi_equal(convertedValue, this.__Icon)) {
				return;
			}
			this.__Icon = convertedValue;
			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'Icon' });
			this.__processIcon();
		}

		public getIcon() {
			return this.__Icon;
		}
		protected __processIcon() {

			if (this.__elementIcon.hasClass('Active') && this.__Icon_Active)
				this.__elementIcon.css("content", this.__Icon_Active);
			else if (!this.__elementIcon.hasClass('Active') && this.__Icon)
				this.__elementIcon.css("content", this.__Icon);
			else
				this.__elementIcon.css("content", "url()");
		}

		//#endregion
		//#region "Icon_Active"
		public setIcon_Active(valueNew: string | null | undefined) {
			let convertedValue = TcHmi.ValueConverter.toString(valueNew);

			if (convertedValue === (null) || convertedValue === "url()") {
				if (this.__Icon) convertedValue = this.__Icon; //No active Icon? --> use normal Icon
				else convertedValue = this.getAttributeDefaultValueInternal<string>('Icon_Active');
			}

			if (tchmi_equal(convertedValue, this.__Icon_Active)) {
				return;
			}
			this.__Icon_Active = convertedValue;
			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'Icon_Active' });
			this.__processIcon();
		}

		public getIcon_Active() {
			return this.__Icon_Active;
		}

		//#endregion				
		//#region "ContentPage" 
		public setContentPage(valueNew: string | null | undefined) {
			let convertedValue = TcHmi.ValueConverter.toString(valueNew);
			if (convertedValue === null) {
				convertedValue = this.getAttributeDefaultValueInternal<string>('ContentPage');
			}

			if (tchmi_equal(convertedValue, this.__ContentPage)) {
				return;
			}

			this.__ContentPage = convertedValue;
			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'ContentPage' });
		}

		public getContentPage() {
			return this.__ContentPage;
		}

		//#endregion				
		//#region "DiagState"
		public setDiagState(valueNew: Severity | null | undefined) {
			let convertedValue = <Severity | null | undefined>(valueNew);

			if (convertedValue === null || convertedValue === undefined) {
				convertedValue = this.getAttributeDefaultValueInternal<Severity>('DiagState');
			}

			if (tchmi_equal(convertedValue, this.__DiagState)) {
				return;
			}
			this.__DiagState = Number(convertedValue);
			TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'DiagState' });
			this.__processDiagState();
		}

		public getDiagState() {
			return this.__DiagState;
		}

		protected __processDiagState() {
			if (!this.__DiagState)
				this.__DiagState = 0;

			switch (Number(this.__DiagState)) {
				case Severity.Information:
					this.__elementDiagCircle.addClass("Information");
					this.__elementDiagCircle.removeClass("Warning Alarm Critical");
					this.__elementDiagCircle.css("visibility", "visible");
					break;
				case Severity.Warning:
					this.__elementDiagCircle.addClass("Warning");
					this.__elementDiagCircle.removeClass("Information Alarm Critical");
					this.__elementDiagCircle.css("visibility", "visible");
					break;
				case Severity.Alarm:
					this.__elementDiagCircle.removeClass("Information Warning Critical");
					this.__elementDiagCircle.addClass("Alarm");
					this.__elementDiagCircle.css("visibility", "visible");
					break;
				case Severity.Critical:
					this.__elementDiagCircle.removeClass("Information Warning Alarm");
					this.__elementDiagCircle.addClass("Critical");
					this.__elementDiagCircle.css("visibility", "visible");
					break;
				default:
					this.__elementDiagCircle.removeClass("Information Warning Alarm Critical");
					this.__elementDiagCircle.css("visibility", "collapse");
					break;
			}
		}

		//#endregion

		//functions - public 
		//#region "Activate" 
		public Activate() {
			if (this.__elementIcon) {
				this.__elementIcon.addClass("Active");
			}
			if (this.__elementText)
				this.__elementText.addClass("Active");

			this.__processIcon();
		}
		//#endregion				
		//#region "Deactivate"
		public Deactivate() {
			if (this.__elementIcon) {
				this.__elementIcon.removeClass("Active");
			}
			if (this.__elementText)
				this.__elementText.removeClass("Active");

			this.__processIcon();
		}

		//#endregion
		//#region "Update"
		public Update(item: Item.IButtonElement) {

			this.setButtonText(item.ButtonText);
			this.setContentPage(item.ContentPage);
			this.setDiagState(item.DiagState);
			this.setIcon("url(" + item.Icon + ")");
			this.setIcon_Active("url(" + item.Icon_Active + ")");

		}

		//#endregion


		//functions - protected 
		//#region "__onMouseDown"
		/*
			* Returns an event handler for the mousedown event.
			*/
		protected __onMouseDown() {
			return (event: MouseEvent) => {

				if (event.button !== 0) {
					return;
				}

				this.__Mouse = true;

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

					let limit = 10; // Used to determine how far the touch (finger) has to be moved to trigger animation.
					// Calculate how far touch (finger) was moved since onTouchStart.

					let deltaX = data.clientX - startMouseEvent.clientX;
					let deltaY = data.clientY - startMouseEvent.clientY;

					if ((deltaX > limit) || (deltaX < -limit) || (deltaY > limit) || (deltaY < -limit)) {
						this.__Mouse = false;

						if (this.__destroyEventMouseMove) {
							this.__destroyEventMouseMove();
							this.__destroyEventMouseMove = null;
						}
					}
				});

				if (this.__ClickTimeoutId) {
					clearTimeout(this.__ClickTimeoutId);
					this.__ClickTimeoutId = 0;
				}
				this.__ClickTimeoutId = setTimeout(() => {
					this.__Mouse = false;
				}, 500);
			};
		}

		//#endregion
		//#region "__onMouseUp" 
		/**
			* Returns an event handler for the mouseup event.
			*/
		protected __onMouseUp() {
			return (event: MouseEvent) => {
				if (this.__destroyEventMouseMove) {
					this.__destroyEventMouseMove();
					this.__destroyEventMouseMove = null;
				}
				if (event.button !== 0 || !this.__Mouse) {
					return;
				}

				this.__Mouse = false;
				TcHmi.EventProvider.raise(this.__id + ".onPressed", this.__ContentPage);

			};
		}

		//#endregion
		//#region "__onMouseLeave" 
		/**
			* Returns an event handler for the mouseleave event.
		*/
		protected __onMouseLeave() {
			return (event: MouseEvent) => {
				if (this.__destroyEventMouseMove) {
					this.__destroyEventMouseMove();
					this.__destroyEventMouseMove = null;
				}
				if (!this.__Mouse) {
					return;
				}
				this.__Mouse = false;
			};
		}

		//#endregion
		//#region "__onTouchStart" 
		/**
			* Returns an event handler for the touchstart event.
		*/
		protected __onTouchStart() {
			return (event: TouchEvent) => {

				this.__Touch = true;

				let touchStartEvent = event;
				touchStartEvent.preventDefault();
				if (this.__destroyEventTouchMove) {
					this.__destroyEventTouchMove();
					this.__destroyEventTouchMove = null;
				}
				this.__destroyEventTouchMove = TcHmi.EventProvider.register(this.__id + '.onTouchMove', (event, data: TouchEvent) => {
					if (!TouchEvent)
						return;
					data.preventDefault();

					let limit = 10; // Used to determine how far the touch (finger) has to be moved to trigger animation.
					// Calculate how far touch (finger) was moved since onTouchStart.

					let deltaX = data.touches[0].clientX - touchStartEvent.touches[0].clientX;
					let deltaY = data.touches[0].clientY - touchStartEvent.touches[0].clientY;

					if ((deltaX > limit) || (deltaX < -limit) || (deltaY > limit) || (deltaY < -limit)) {
						this.__Touch = false;

						if (this.__destroyEventTouchMove) {
							this.__destroyEventTouchMove();
							this.__destroyEventTouchMove = null;
						}
					}
				});

				if (this.__touchLockTimeoutId) {
					clearTimeout(this.__touchLockTimeoutId);
					this.__touchLockTimeoutId = 0;
				}
				this.__touchLockTimeoutId = setTimeout(() => {
					this.__Touch = false;
				}, 500);
			};
		}

		//#endregion
		//#region "__ontouchEndOrCancel" 
		/**
			* Returns an event handler for the touchend and touchcancel events.
		*/
		protected __onTouchEndOrCancel() {
			return (event: TouchEvent) => {

				if (this.__destroyEventTouchMove) {
					this.__destroyEventTouchMove();
					this.__destroyEventTouchMove = null;
				}
				if (!this.__Touch) {
					return;
				}
				this.__Touch = false;
				TcHmi.EventProvider.raise(this.__id + ".onPressed", this.__ContentPage);
			};
		}

		//#endregion

	}
}
TcHmi.Controls.registerEx('Button', 'TcHmi.Controls.Entertainment.TabletNavigation', TcHmi.Controls.Entertainment.TabletNavigation.Button);
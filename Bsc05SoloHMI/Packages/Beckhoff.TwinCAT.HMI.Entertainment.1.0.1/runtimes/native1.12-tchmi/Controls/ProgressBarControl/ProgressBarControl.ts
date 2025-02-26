/*
 * Generated 8/20/2020 10:28:47 AM
 * Copyright (C) 2020
 */
module TcHmi.Controls.Entertainment {

        type Orientation = 'Vertical' | 'Horizontal' | 'HorizontalInverted' | 'VerticalInverted';

    export class ProgressBar extends TcHmi.Controls.System.TcHmiControl {

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
        protected __elementBar !: JQuery;

        //internal references to attributes


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
        public __previnit() {
            // Fetch template root element
            this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_Entertainment_ProgressBar-template');
            if (this.__elementTemplateRoot.length === 0) {
                throw new Error('Invalid Template.html');
            }

            this.__elementBar = this.__elementTemplateRoot.find('.TcHmi_Controls_Entertainment_ProgressBar-bar');
            if (this.__elementBar.length === 0) {
                throw new Error('Invalid Template.html, missing element: div (.TcHmi_Controls_Entertainment_ProgressBar-bar)');
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
            this.__processProgress();
        }

        public getOrientation() {
            return this.__Orientation;
        }


        public setProgressColor(valueNew: Color | null | undefined) {
            let convertedValue = TcHmi.ValueConverter.toObject<Color>(valueNew);
            if (convertedValue === null) {
                convertedValue = this.getAttributeDefaultValueInternal('ProgressColor');
            }

            if (tchmi_equal(convertedValue, this.__ProgressColor)) {
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
            TcHmi.StyleProvider.processBackgroundColor(this.__elementBar[0], this.__ProgressColor);
        }


        public setProgress(valueNew: number | null) {
            let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
            if (convertedValue === null) {
                convertedValue = this.getAttributeDefaultValueInternal('Progress');
            }

            if (convertedValue === this.__Progress) {
                return;
            }

            this.__LastValue = this.__Progress;

            this.__Progress = convertedValue! > 100 ? 100 : (convertedValue! < 0 ? 0 : convertedValue);;

            TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'Progress' });

            // call process function to process the new value
            this.__processProgress();
        }

        public getProgress() {
            return this.__Progress;
        }

        public getLastValue() {
            return this.__LastValue;
        }

        protected __processProgress() {
            if (!this.__Progress)
                this.__Progress = 0;

            if (this.__Orientation === "Vertical") {
                this.__elementBar[0].style.height = this.__Progress + "%";
                this.__elementBar[0].style.width = "100%";
                this.__elementBar[0].style.top = "";
                this.__elementBar[0].style.right = "";
                this.__elementBar[0].style.bottom = "0";
                this.__elementBar[0].style.left = "0";
            }
            else if (this.__Orientation === "Horizontal") {
                this.__elementBar[0].style.width = this.__Progress + "%";
                this.__elementBar[0].style.height = "100%";
                this.__elementBar[0].style.bottom = "0";
                this.__elementBar[0].style.left = "0";
                this.__elementBar[0].style.top = "";
                this.__elementBar[0].style.right = "";
            }
            else if (this.__Orientation === "HorizontalInverted") {
                this.__elementBar[0].style.width = this.__Progress + "%";
                this.__elementBar[0].style.height = "100%";
                this.__elementBar[0].style.bottom = "0";
                this.__elementBar[0].style.right = "0";
                this.__elementBar[0].style.top = "";
                this.__elementBar[0].style.left = "";
            }
            else if (this.__Orientation === "VerticalInverted") {
                this.__elementBar[0].style.height = this.__Progress + "%";
                this.__elementBar[0].style.width = "100%";
                this.__elementBar[0].style.top = "0";
                this.__elementBar[0].style.left = "0";
                this.__elementBar[0].style.bottom = "";
                this.__elementBar[0].style.right = "";
            }
        }

        public setBaseAnimationTime(valueNew: number | null) {
            let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
            if (convertedValue === null) {
                convertedValue = this.getAttributeDefaultValueInternal('BaseAnimationTime');

            }

            if (convertedValue === this.__BaseAnimationTime) {
                return;
            }

            this.__BaseAnimationTime = convertedValue as number;

            TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'BaseAnimationTime' });
            this.__processBaseAnimationTime();
        }

        public getBaseAnimationTime() {
            return this.__BaseAnimationTime;
        }

        protected __processBaseAnimationTime() {

            this.__elementBar.css("transition", "height " + ((this.__BaseAnimationTime ?? 0) / 1000) + "s, width " + ((this.__BaseAnimationTime ?? 0) / 1000) + "s");
        }
    }
}
TcHmi.Controls.registerEx('ProgressBar', 'TcHmi.Controls.Entertainment', TcHmi.Controls.Entertainment.ProgressBar);

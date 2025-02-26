declare namespace TcHmi.BuildingAutomation.Controls.System {
    /**
     * The UiIconFdbStp is the base control for different controls like SensorAnalog or Motor.
     * @category Hidden control
     */
    class UiIconFdbStp<E extends number, T extends BA.BaView.BaTemplateStructure> extends Common.UiIcon implements BA.IBaTemplateHandler<T> {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __loadBaChildren: boolean;
        protected __loadTexts: boolean;
        /**
         * Overwrite in derived class to set the default template description that will be used for this control.
         * @category BA
         */
        protected __defaultBaTemplateDescription: BA.BaView.BaTemplateDescription<T> | undefined;
        baTemplateHandler: BA.BaTemplateHandler<T>;
        protected __displayPosition: Components.UiIcon.DisplayPosition | null;
        protected __showFeedback: boolean | null;
        protected __showSetpoint: boolean | null;
        protected __displayMode: E;
        private __feedback;
        private __setpoint;
        private __command;
        static setpointDisplayName: string;
        static feedbackDisplayName: string;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /** @ignore
         * Processor for the ShowFeedback attribute.
         * @category Internal
         */
        protected __processShowFeedback(): void;
        /** @ignore
         * Processor for the ShowSetpoint attribute.
         * @category Internal
         */
        protected __processShowSetpoint(): void;
        /** @ignore
         * Process the DisplaysData.
         * @category Internal
         */
        protected __processDisplaysData(): void;
        /**
        * Sets feedback.
        * @category Public
        * @param p The new value or NULL.
        * @returns UiIconFdbStp.
        */
        setFeedback(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | string | null | undefined): this;
        /**
         * Gets feedback.
         * @category Public
         * @returns The feedback.
         */
        getFeedback(): string | BA.BaBasicObject<any> | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol<any> | null | undefined;
        /**
        * Sets setpoint.
        * @category Public
        * @param p The new value or NULL.
        * @returns UiIconFdbStp.
        */
        setSetpoint(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | string | null | undefined): this;
        /**
         * Gets setpoint.
         * @category Public
         * @returns The setpoint.
         */
        getSetpoint(): string | BA.BaBasicObject<any> | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol<any> | null | undefined;
        /**
         * Sets command.
         * @category Public
         * @param p The new value or NULL.
         * @returns UiIconFdbStp.
         */
        setCommand(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | string | null | undefined): this;
        /**
         * Gets command.
         * @category Public
         * @returns The command.
         */
        getCommand(): string | BA.BaBasicObject<any> | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol<any> | null | undefined;
        setBaTemplateDescription(p: BA.BaTemplateDescriptionDesigner | null | undefined): this;
        getBaTemplateDescription(): BA.BaView.BaTemplateDescription<any> | null | undefined;
        /**
        * Sets visibility of feedback.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns UiIconFdbStp.
        */
        setShowFeedback(p: boolean | null | undefined): this;
        /**
         * Gets visibility of feedback.
         * @category Attribute getter
         * @returns The ShowFeedback attribute.
         */
        getShowFeedback(): boolean | null;
        /**
        * Sets visibility of setpoint.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns UiIconFdbStp.
        */
        setShowSetpoint(p: boolean | null | undefined): this;
        /**
         * Gets visibility of setpoint.
         * @category Attribute getter
         * @returns The ShowSetpoint attribute.
         */
        getShowSetpoint(): boolean | null;
        /**
        * Sets display position.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns UiIconFdbStp.
        */
        setDisplayPositionDesigner(p: Components.UiIcon.DisplayPosition | null | undefined): this;
        /**
         * Gets display position.
         * @category Attribute getter
         * @returns The DisplayPosition attribute.
         */
        getDisplayPositionDesigner(): Components.UiIcon.DisplayPosition | null;
        /**
        * Sets display mode.
        * @category Attribute setter
        * @param p The new value or null.
        * @returns UiIconFdbStp.
        */
        setDisplayMode(p: E | null | undefined): this;
        /**
         * Processor for the DisplayMode attribute.
         * @category Internal
         */
        protected __processDisplayMode(): void;
        /**
         * Gets display mode.
         * @category Attribute getter
         * @returns The DisplayMode attribute.
         */
        getDisplayMode(): E;
        processBaObject(): void;
        protected __processIcon(): void;
    }
    namespace UiIconFdbStp {
        const CustomDisplayModeValue = 999;
    }
}
//# sourceMappingURL=UiIconFdbStp.d.ts.map
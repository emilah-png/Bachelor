declare namespace TcHmi.BuildingAutomation.Controls.Common {
    /**
     * A control which can be used to page between different contents.
     * @category Control
    */
    class Paginator extends TcHmi.Controls.System.TcHmiRegion implements Logger.ILogger {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        logger: Logger;
        private static __switchLimit;
        private __pages;
        private __showNavigationButtons;
        private __separateNavigationButtons;
        private __enableSwipeGesture;
        private __forwardIcon;
        private __backwardIcon;
        private __startPos;
        private __curDeltaX;
        private __curPageIdx;
        private __touchStartHandler;
        private __touchMoveHandler;
        private __touchEndHandler;
        private __forwardHandler;
        private __backwardHandler;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Loads the next content page.
         * @category Internal
         */
        private __loadNextContent;
        /**
         * Loads the previous content page.
         * @category Internal
         */
        private __loadPrevContent;
        /**
         * Moves the template root to the center.
         * @category Internal
         */
        private __moveToCenter;
        /**
         * Checks if the element is a slider or part of slider.
         * @category Internal
         * @param e The element to be checked.
         * @returns True if the element is a slider or is part of a slider, otherwise false.
         */
        private __isSliderElement;
        /**
         * Navigates to the next page when called.
         * @category Public
         */
        goForward(): void;
        /**
         * Navigates to the previous page when called.
         * @category Public
         */
        goBackward(): void;
        /**
         * Navigates to a specific page.
         * @param id The id of the page.
         */
        goToPage(id: number): void;
        /**
         * Setter for the Pages attribute.
         * @category Attribute setter and getter
         * @param p The new Pages or null.
         * @returns The Paginator.
         */
        setPages(p: string[] | null | undefined): this;
        /**
         * Processor for the Pages attribute.
         * @category Attribute setter and getter
         */
        protected __processPages(): void;
        /**
         * Getter for the Pages attribute.
         * @category Attribute setter and getter
         * @returns The Pages attribute.
         */
        getPages(): string[] | null | undefined;
        /**
         * Setter for the ShowNavigationButtons attribute.
         * @category Attribute setter and getter
         * @param p The new ShowNavigationButtons or null.
         * @returns The Paginator.
         */
        setShowNavigationButtons(p: boolean | null | undefined): this;
        /**
         * Processor for the ShowNavigationButtons attribute.
         * @category Attribute setter and getter
         */
        protected __processShowNavigationButtons(): void;
        /**
         * Getter for the ShowNavigationButtons attribute.
         * @category Attribute setter and getter
         * @returns The ShowNavigationButtons attribute.
         */
        getShowNavigationButtons(): boolean;
        /**
         * Setter for the SeparateNavigationButtons attribute.
         * @category Attribute setter and getter
         * @param p The new SeparateNavigationButtons or null.
         * @returns The Paginator.
         */
        setSeparateNavigationButtons(p: boolean | null | undefined): this;
        /**
         * Processor for the SeparateNavigationButtons attribute.
         * @category Attribute setter and getter
         */
        protected __processSeparateNavigationButtons(): void;
        /**
         * Getter for the SeparateNavigationButtons attribute.
         * @category Attribute setter and getter
         * @returns The SeparateNavigationButtons attribute.
         */
        getSeparateNavigationButtons(): boolean;
        /**
         * Setter for the EnableSwipeGesture attribute.
         * @category Attribute setter and getter
         * @param p The new EnableSwipeGesture or null.
         * @returns The Paginator.
         */
        setEnableSwipeGesture(p: boolean | null | undefined): this;
        /**
         * Processor for the EnableSwipeGesture attribute.
         * @category Attribute setter and getter
         */
        protected __processEnableSwipeGesture(): void;
        /**
         * Getter for the EnableSwipeGesture attribute.
         * @category Attribute setter and getter
         * @returns The EnableSwipeGesture attribute.
         */
        getEnableSwipeGesture(): boolean;
    }
}
//# sourceMappingURL=Paginator.d.ts.map
declare namespace TcHmi.BuildingAutomation.Globals {
    /** Defines the BA template profiles which will be displayed with a special control (e.g. schedule, trend, scale, etc.). */
    const SubjectInfosWithDialogs: string[];
    /**
     * Helper methods for the global keyboard.
     */
    namespace Controls.Keyboard {
        /** The zIndex of the keyboard. */
        let ZIndex: number;
        /**
         * Creates the keyboard when a input with string input was selected on a touch screen.
         */
        function initKeyboard(): void;
        /**
         * Updates internal 'Layout' value
         */
        function updateLayout(): void;
        /**
         * Sets visibility of the global keyboard.
         */
        function setVisibilityKeyboard(visibility: boolean): void;
    }
}
//# sourceMappingURL=Globals.d.ts.map
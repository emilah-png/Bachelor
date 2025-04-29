declare namespace TcHmi.BuildingAutomation.Helper {
    /**
     * Helper methods for the keyboard.
     */
    namespace Keyboard {
        /**
         * Gets the layout file for the current language keyboard.
         */
        function getLayoutPath(): string;
        /**
         * Checks if the client is a mobile device.
         */
        function isMobile(): boolean;
    }
    /**
     * Helper methods for graphs.
     */
    namespace Color {
        /**
         * Converts cardesian coordinates to polar.
         * @category Converter
         * @param x The x coordinate.
         * @param y The y coordinate.
         * @returns The polar coordinate [radius, phi].
         */
        function convertXYToPolar(x: number, y: number): number[];
        /**
         * Converts polar coordinates to cardesian.
         * @category Converter
         * @param r
         * @param phi
         * @returns The xy coordinates [x, y].
         */
        function convertPolarToXY(r: number, phi: number): number[];
        /**
         * Converts rad into deg.
         * @category Converter
         * @param rad Range from -π, π
         * @returns The deg value.
         */
        function convertRadToDeg(rad: number): number;
    }
}
//# sourceMappingURL=Helper.d.ts.map
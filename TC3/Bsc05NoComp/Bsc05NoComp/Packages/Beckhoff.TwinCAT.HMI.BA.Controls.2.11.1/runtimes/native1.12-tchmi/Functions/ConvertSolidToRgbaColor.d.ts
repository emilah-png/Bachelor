declare namespace TcHmi.BuildingAutomation.Functions {
    /**
     * Converts a solid color (TcHmi-Format) into a RGBA color.
     * @category Color converter
     * @param c The solid color (TcHmi-Format) which should be converted into a RGBA color.
     * @returns The RGBA color or null.
    */
    function ConvertSolidToRgbaColor(solid: SolidColor | null | undefined): Color.RGBAColor | null;
}
//# sourceMappingURL=ConvertSolidToRgbaColor.d.ts.map
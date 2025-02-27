declare namespace TcHmi.BuildingAutomation.Functions {
    /**
     * Calculates a color between two colors to a corresponding value.
     * @param startColor Start color of the fade.
     * @param startValue Start value of the fade.
     * @param endColor End color of the fade.
     * @param endValue End value of the fade.
     * @param value Value for which the color should be calculated.
     */
    function GetFadeColor(startColor: SolidColor | null | undefined, startValue: number | null | undefined, endColor: SolidColor | null | undefined, endValue: number | null | undefined, value: number | null | undefined): SolidColor | null;
}
//# sourceMappingURL=GetFadeColor.d.ts.map
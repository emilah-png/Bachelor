declare module TcHmi {
    module Controls {
        module TcHmiOpenHabControls {
            class OhBase extends TcHmi.Controls.System.TcHmiControl {
                tchmiFQN: string;
                protected __elementContainer: JQuery;
                /** ###############################################################################
                 * S T A R T   Text properties/attributes
                 */
                protected __textColor: TcHmi.SolidColor | null | undefined;
                protected __textFontFamily: FontFamily | null | undefined;
                protected __textFontSize: number | undefined;
                protected __textFontSizeUnit: FontSizeUnit | undefined;
                protected __textFontStyle: FontStyle | undefined;
                protected __textFontWeight: FontWeight | undefined;
                /**
                 * E N D   Text properties/attributes
                 */
                /** ###############################################################################
                 *
                 * S T A R T   TextColor
                 *
                 */
                setTextColor(valueNew: SolidColor | null): void;
                getTextColor(): SolidColor | null | undefined;
                protected __onResolverForTextColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                protected __processTextColor(): void;
                /**
                 *
                 * E N D   TextColor
                 *
                 */
                /** ###############################################################################
                 *
                 * S T A R T   TextFontFamily
                 *
                 */
                setTextFontFamily(valueNew: FontFamily | null): void;
                getTextFontFamily(): string | null | undefined;
                protected __processTextFontFamily(): void;
                /**
                 *
                 * E N D   TextFontFamily
                 *
                 */
                /** ###############################################################################
                 *
                 * S T A R T   setTextFontSize
                 *
                 */
                setTextFontSize(valueNew: number | null): void;
                getTextFontSize(): number | undefined;
                protected __processTextFontSize(): void;
                /**
                 *
                 * E N D   setTextFontSize
                 *
                 */
                /** ###############################################################################
                 *
                 * S T A R T   setTextFontSizeUnit
                 *
                 */
                setTextFontSizeUnit(valueNew: FontSizeUnit | null): void;
                getTextFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
                protected __processTextFontSizeUnit(): void;
                /**
                 *
                 * E N D   setTextFontSizeUnit
                 *
                 */
                /** ###############################################################################
                 *
                 * S T A R T   setTextFontStyle
                 *
                 */
                setTextFontStyle(valueNew: FontStyle | null): void;
                getTextFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
                protected __processTextFontStyle(): void;
                /**
                 *
                 * E N D   setTextFontStyle
                 *
                 */
                /** ###############################################################################
                 *
                 * S T A R T   setTextFontWeight
                 *
                 */
                setTextFontWeight(valueNew: FontWeight | null): void;
                getTextFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
                protected __processTextFontWeight(): void;
            }
        }
    }
}

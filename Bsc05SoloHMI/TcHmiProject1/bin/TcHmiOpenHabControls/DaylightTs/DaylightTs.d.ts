declare module TcHmi {
    module Controls {
        module TcHmiOpenHabControls {
            class DaylightTs extends TcHmi.Controls.TcHmiOpenHabControls.BaseControlTs {
                #private;
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementTemplateRoot: JQuery;
                __previnit(): void;
                __init(): void;
                private __intervalId;
                __attach(): void;
                __detach(): void;
                destroy(): void;
                /** ###############################################################################
                 * S T A R T
                 */
                protected __daylightNow: string | null;
                protected __daylightSunset: string | null;
                protected __daylightSunrise: string | null;
                getSunset(): string | null;
                getSunrise(): string | null;
                setSunset(valueNew: string): void;
                setSunrise(valueNew: string): void;
                private __imgNow;
                private __imgSunrise;
                private __imgSunset;
                private __textNow;
                private __textSunrise;
                private __textSunset;
                protected __updateTime(forcePositionCalculation: boolean): void;
                protected __processValues(): void;
                protected __percentageDayDone: number;
                protected __percentageSunrise: number;
                protected __percentageSunset: number;
                protected __calculatePercentages(): void;
            }
        }
    }
}

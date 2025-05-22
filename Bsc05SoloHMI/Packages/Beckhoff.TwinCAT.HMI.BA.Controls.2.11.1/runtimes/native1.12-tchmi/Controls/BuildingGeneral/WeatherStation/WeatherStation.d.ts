declare namespace TcHmi.BuildingAutomation.Controls.BuildingGeneral {
    /**
     * A control to display different weather information from a weather station.
     * @category Control
     */
    class WeatherStation<T extends WeatherStation.BaTemplateDefinition> extends Controls.System.BaseTemplate<T> {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __attrHandler: AttributeHandler<WeatherStation.IAttributes>;
        protected __defaultBaTemplateDescription: any;
        private __displayMode;
        private __dataWeather;
        private __reqIdents;
        private __babos;
        private __dataGroups;
        private __svgCompass;
        /** @ignore
         * Root DIV element of WeatherStation groups.
         * @category HTML elements
         */
        private __htmlGroups;
        /** @ignore
         * Collection of datasets which contains HTML elements to write values directly.
         * @category HTML elements
         */
        private __htmlDatasets;
        /** @ignore
         * Root DIV element of the compass.
         * @category HTML elements
         */
        private __htmlCompass;
        /** @ignore
        * Localized string.
        * @category Internal
        */
        private __strYes;
        /** @ignore
        * Localized string.
        * @category Internal
        */
        private __strNo;
        /** @ignore
        * Localized string.
        * @category Internal
        */
        private __strBrightness;
        /** @ignore
        * Localized string.
        * @category Internal
        */
        private __strNorth;
        /** @ignore
        * Localized string.
        * @category Internal
        */
        private __strEast;
        /** @ignore
        * Localized string.
        * @category Internal
        */
        private __strSouth;
        /** @ignore
        * Localized string.
        * @category Internal
        */
        private __strWest;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Callback when the size of the WeatherStationDraft has changed.
         * @category Event callbacks
         */
        onResized(): void;
        /** @ignore
        * Construct data structures.
        * @category Internal
        */
        private __constructDataStructures;
        /** @ignore
        * Construct the weather station.
        * @category Internal
        */
        private __constructWeatherStation;
        /** @ignore
        * Update the value with the given identifier.
        * @category Internal
        * @param identifier Identifier of the value to be updated.
        */
        private __updateValue;
        /** @ignore
        * Determine the current DisplayMode.
        * @category Internal
        */
        private __adjustDisplayMode;
        /** @ignore
        * Full update of the weather station.
        * @category Internal
        */
        private __updateWeatherStation;
        /** @ignore
        * Add all needed BaVariableWatches.
        * @category Internal
        */
        private __addBaVarWatches;
        /** @ignore
        * Remove all BaVariableWatches.
        * @category Internal
        */
        private __removeBaVarWatches;
        /** @ignore
        * Reset data to default values.
        * @category Internal
        */
        private __resetDataWeather;
        /** @ignore
        * Sets the angle for the compass.
        * @category Internal
        * @param angle New angle.
        */
        private __setCompassDirection;
        /**
        * Sets visibility of position data.
        * @category Attribute setter
        * @param visibility New value.
        */
        setVisibilityPosition(visibility: boolean): void;
        /**
         * Gets visibility of position data.
         * @category Attribute getter
         */
        getVisibilityPosition(): boolean;
        /**
        * Sets visibility of temperature data.
        * @category Attribute setter
        * @param visibility New value.
        */
        setVisibilityTemperature(visibility: boolean): void;
        /**
         * Gets visibility of temperature data.
         * @category Attribute getter
         */
        getVisibilityTemperature(): boolean;
        /**
        * Sets visibility of air pressure data.
        * @category Attribute setter
        * @param visibility New value.
        */
        setVisibilityAirPressure(visibility: boolean): void;
        /**
         * Gets visibility of air pressure data.
         * @category Attribute getter
         */
        getVisibilityAirPressure(): boolean;
        /**
        * Sets visibility of humidity data.
        * @category Attribute setter
        * @param visibility New value.
        */
        setVisibilityHumidity(visibility: boolean): void;
        /**
         * Gets visibility of humidity data.
         * @category Attribute getter
         */
        getVisibilityHumidity(): boolean;
        /**
        * Sets visibility of sun data.
        * @category Attribute setter
        * @param visibility New value.
        */
        setVisibilitySun(visibility: boolean): void;
        /**
         * Gets visibility of sun data.
         * @category Attribute getter
         */
        getVisibilitySun(): boolean;
        /**
        * Sets visibility of brightness data.
        * @category Attribute setter
        * @param visibility New value.
        */
        setVisibilityBrightness(visibility: boolean): void;
        /**
         * Gets visibility of brightness data.
         * @category Attribute getter
         */
        getVisibilityBrightness(): boolean;
        /**
        * Sets visibility of wind data.
        * @category Attribute setter
        * @param visibility New value.
        */
        setVisibilityWind(visibility: boolean): void;
        /**
         * Gets visibility of wind data.
         * @category Attribute getter
         */
        getVisibilityWind(): boolean;
        /**
        * Sets visibility of wind compass.
        * @category Attribute setter
        * @param visibility New value.
        */
        setVisibilityWindCompass(visibility: boolean): void;
        /**
         * Gets visibility of wind compass.
         * @category Attribute getter
         */
        getVisibilityWindCompass(): boolean;
        processBaObject(): void;
    }
    namespace WeatherStation {
        interface IAttributes extends Controls.System.BaseTemplate.IAttributes {
        }
        type BaTemplateDefinition = {
            Dstb?: {};
            Rain?: {};
            WthT?: {};
            DewPtT?: {};
            PrssAbs?: {};
            PrssRel?: {};
            HumAbs?: {};
            HumRel?: {};
            Brightness_N?: {};
            Brightness_E?: {};
            Brightness_S?: {};
            Brightness_W?: {};
            Dawn?: {};
            GlobRadn?: {};
            WndDir?: {};
            WndSpd?: {};
            Latd?: {};
            Lngt?: {};
            SunAzm?: {};
            SunElv?: {};
        };
        const BaTemplateDefinition: BA.BaView.BaTemplateDefinition<BaTemplateDefinition>;
        let BaTemplateDescription: BA.BaView.BaTemplateDescription<BaTemplateDefinition>;
    }
}
//# sourceMappingURL=WeatherStation.d.ts.map
declare namespace TcHmi.BuildingAutomation.Icons {
    namespace Controls {
        class Localization extends TcHmi.Controls.System.TcHmiControl {
            constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        }
    }
    namespace Locale {
        const Localization: BuildingAutomation.Locale.GenericLocalization<string>;
    }
}
//# sourceMappingURL=Localization.d.ts.map
declare namespace TcHmi.BuildingAutomation.Functions {
    function GetBaIconPath(path: string | null | undefined): string;
}
//# sourceMappingURL=GetBaIconPath.d.ts.map
declare namespace TcHmi.BuildingAutomation.Locale {
    class GenericLocalization<T extends string> extends TcHmi.Locale.ControlLocalization {
        constructor(type: string);
        private __type;
        watchText(key: T, callback: (this: void, data: TcHmi.Locale.IWatchTextResultObject) => void): TcHmi.DestroyFunction;
        watchTextEx(key: T, options: {
            level: TcHmi.Locale.Level;
        } | undefined, callback: (this: void, data: TcHmi.Locale.IWatchTextResultObject) => void): TcHmi.DestroyFunction;
        getText(key: T): string;
        getSymbolExpression(key: T): string;
    }
}
//# sourceMappingURL=GenericLocalization.d.ts.map
declare namespace TcHmi.BuildingAutomation.Icons {
    function createIIconData(path: string, category: string, description?: string, color?: RGBAColor): IIconData;
    interface IIconData {
        path: string;
        category: string;
        description?: string;
        color?: RGBAColor;
    }
    /**
     * Validates the interface 'IIconData'.
     * @param p The input that should be checked.
     * @returns True if the input is valid and false if not.
    */
    function isIIconData(p: any): p is IIconData;
    /**
     * Gets the base path where the TcHmiBa icons are placed.
     * @returns The base path where the TcHmiBa icons are placed.
     */
    function getBaIconsPath(): "Beckhoff.TwinCAT.HMI.BA.Icons/Icons" | "TcHmiBaIcons/Icons/raw";
    const Path: string;
    function getLocaleSymbolExp(str: string): string;
    namespace HVAC {
        const Path: string;
        const Boiler: IIconData;
        const Burner: IIconData;
        const CO2_c: IIconData;
        const CO2_s: IIconData;
        const Controller: IIconData;
        const Cooler: IIconData;
        const Current_c: IIconData;
        const Current_s: IIconData;
        const Damper: IIconData;
        const Damper_diagonal: IIconData;
        const Damper_horizontal: IIconData;
        const Damper_vertical: IIconData;
        const Enthalpy_c: IIconData;
        const Enthalpy_s: IIconData;
        const Erc_plate: IIconData;
        const Erc_rotation: IIconData;
        const Fan: IIconData;
        const Filter: IIconData;
        const Fire_damper: IIconData;
        const Fire_damper_diagonal: IIconData;
        const Fire_damper_horizontal: IIconData;
        const Fire_damper_vertical: IIconData;
        const Fu: IIconData;
        const GlobalRadiation_c: IIconData;
        const GlobalRadiation_s: IIconData;
        const Hc: IIconData;
        const HeatAmount_c: IIconData;
        const HeatAmount_s: IIconData;
        const Heater: IIconData;
        const Humidifier: IIconData;
        const Humidity_abs_c: IIconData;
        const Humidity_abs_s: IIconData;
        const Humidity_c: IIconData;
        const Humidity_s: IIconData;
        const Motor: IIconData;
        const Pid: IIconData;
        const Pressure_c: IIconData;
        const Pressure_s: IIconData;
        const Pump: IIconData;
        const Shut_off_valve: IIconData;
        const Temperature_c: IIconData;
        const Temperature_outside_c: IIconData;
        const Temperature_s: IIconData;
        const Valve_threedirection_0: IIconData;
        const Valve_threedirection_1: IIconData;
        const Valve_threedirection_2: IIconData;
        const Valve_threedirection_3: IIconData;
        const Valve_threedirection_4: IIconData;
        const Valve_twodirection_0: IIconData;
        const Valve_twodirection_1: IIconData;
        const Valve_twodirection_2: IIconData;
        const Valve_twodirection_3: IIconData;
        const VAV: IIconData;
        const VOC_c: IIconData;
        const VOC_s: IIconData;
        const Voltage_c: IIconData;
        const Voltage_s: IIconData;
        const VolumeFlow_c: IIconData;
        const VolumeFlow_s: IIconData;
    }
    namespace NodeType {
        const Path: string;
        const Aggregate: IIconData;
        const Building: IIconData;
        const BuildingElement: IIconData;
        const Component: IIconData;
        const ControlCabinet: IIconData;
        const Floor: IIconData;
        const Function: IIconData;
        const General: IIconData;
        const InformationFocus: IIconData;
        const Location: IIconData;
        const Other: IIconData;
        const Plant: IIconData;
        const Room: IIconData;
        const Trade: IIconData;
        const Unknown: IIconData;
    }
    namespace ObjectType {
        const Path: string;
        const Accumulator: IIconData;
        const AnalogInput: IIconData;
        const AnalogOutput: IIconData;
        const AnalogValue: IIconData;
        const Averaging: IIconData;
        const BinaryInput: IIconData;
        const BinaryOutput: IIconData;
        const BinaryValue: IIconData;
        const Calendar: IIconData;
        const Command: IIconData;
        const Device: IIconData;
        const EventClass: IIconData;
        const EventEnrollment: IIconData;
        const File: IIconData;
        const GlobalGroup: IIconData;
        const Loop: IIconData;
        const MultiStateInput: IIconData;
        const MultiStateOutput: IIconData;
        const MultiStateValue: IIconData;
        const NotificationClass: IIconData;
        const Object: IIconData;
        const Prog: IIconData;
        const Project: IIconData;
        const PulseConverter: IIconData;
        const Schedule: IIconData;
        const StructuredView: IIconData;
        const Trend: IIconData;
    }
    namespace Outdoor {
        const Path: string;
        const Compass: IIconData;
    }
    namespace Building {
        const Path: string;
        const BurglarAlarm: IIconData;
        const Cleaning: IIconData;
        const CommunicationError: IIconData;
        const FireAlarm: IIconData;
        const IceAlarm: IIconData;
        const Maintenance: IIconData;
        const NightWatch: IIconData;
        const StormAlarm: IIconData;
        const SunProtection: IIconData;
        const ThermalAutomation: IIconData;
    }
    namespace RoomAutomation {
        const Path: string;
        const Automatic: IIconData;
        const Brightness_c: IIconData;
        const Brightness_s: IIconData;
        const Cooling: IIconData;
        const Heating: IIconData;
        /** The lamp icon is filled and the fill color can be animated. */
        const Lamp: IIconData;
        /** The lamp icon is not filled and only the stroke color can be animated. */
        const Lamp2: IIconData;
        const MaintenancePosition: IIconData;
        const Manual: IIconData;
        const Presence: IIconData;
        const ResetManual: IIconData;
        const RoofDome: IIconData;
        const SafetyPosition: IIconData;
        const Socket: IIconData;
        const Sun: IIconData;
        const Sunblind: IIconData;
        const SunblindAngleAdjustmentDown: IIconData;
        const SunblindAngleAdjustmentUp: IIconData;
        const SwitchOffDelay: IIconData;
        const Temperature: IIconData;
        const Ventilation: IIconData;
        const Window: IIconData;
    }
    namespace Standard {
        const Path: string;
        const Avatar: IIconData;
        const CalendarMonth: IIconData;
        const CalendarToday: IIconData;
        const CalendarYear: IIconData;
        const Close: IIconData;
        const Cancel: IIconData;
        const Confirm: IIconData;
        const ConfirmAll: IIconData;
        const DateTime: IIconData;
        const Delete: IIconData;
        const Down: IIconData;
        const Down_Arrow: IIconData;
        const Down_double: IIconData;
        const Graph: IIconData;
        const Hand: IIconData;
        const Home: IIconData;
        const Left: IIconData;
        const Left_Arrow: IIconData;
        const Left_double: IIconData;
        const Lens: IIconData;
        const List: IIconData;
        const Lock: IIconData;
        const Login: IIconData;
        const Logout: IIconData;
        const Maximize: IIconData;
        const MenuBurger: IIconData;
        const MenuDots: IIconData;
        const Minus: IIconData;
        const NotFound: IIconData;
        const OnOff: IIconData;
        const Pause: IIconData;
        const Play: IIconData;
        const Plus: IIconData;
        const Reset: IIconData;
        const Right: IIconData;
        const Right_Arrow: IIconData;
        const Right_double: IIconData;
        const Stop: IIconData;
        const Time: IIconData;
        const Tools: IIconData;
        const Up: IIconData;
        const Up_Arrow: IIconData;
        const Up_double: IIconData;
    }
    namespace Errors {
        const Path: string;
        const Communication: IIconData;
        const Error: IIconData;
    }
    namespace Events {
        const Path: string;
        namespace Event {
            const Path: string;
            const Alarm: IIconData;
            const AlarmIndicated: IIconData;
            const Disturbance: IIconData;
            const DisturbanceIndicated: IIconData;
            const Maintenance: IIconData;
            const MaintenanceIndicated: IIconData;
            const Notification: IIconData;
            const NotificationIndicated: IIconData;
            const Other: IIconData;
            const OtherIndicated: IIconData;
        }
        namespace Flag {
            const Path: string;
            const Fault: IIconData;
            const InAlarm: IIconData;
            const OutOfService: IIconData;
            const Overridden: IIconData;
        }
        namespace Lock {
            const Path: string;
            const LockHigh: IIconData;
            const LockMedium: IIconData;
        }
        namespace Priority {
            const Path: string;
            const Critical: IIconData;
            const ManualLocal: IIconData;
            const ManualRemote: IIconData;
            const Safety: IIconData;
        }
    }
}
//# sourceMappingURL=TcHmiBaIcons.d.ts.map
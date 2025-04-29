// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var ElektroCode;
        (function (ElektroCode) {
            function CustomNumpad(OpenNumpad, VariableValue, MinValue, MaxValue, HeaderText, Scale, NumpadFontSize, HeaderFontSize, ValueFontSize, MinMaxFontSize) {
                var __customContainer;
                var __customTextblockHeader;
                var __customTextblockCurrentValue;
                var __customTextblockSetValue;
                var __customTextblockMinValue;
                var __customTextblockMaxValue;
                var __customNumpad;

                var _focus;
                var _enter;

                var containerId = "containerId_" + Math.random().toString(16).slice(2);
                var textblockHeaderID = "textblockHeaderID_" + Math.random().toString(16).slice(2);
                var textblockCurrentValueID = "textblockCurrentValueID_" + Math.random().toString(16).slice(2);
                var textblockSetValueID = "textblockSetValueID_" + Math.random().toString(16).slice(2);
                var textblockMinValueID = "textblockMinValueID_" + Math.random().toString(16).slice(2);
                var textblockMaxValueID = "textblockMaxValueID_" + Math.random().toString(16).slice(2);
                var customNumpadID = "customNumpadID_" + Math.random().toString(16).slice(2);

                var VariableValue1;

                if (this) {
                    VariableValue1 = this.__f.fnParams[1].symbolExpression;
                }

                if (__customContainer == undefined) {
                    __customContainer = TcHmi.ControlFactory.createEx(
                        'TcHmi.Controls.System.TcHmiContainer',
                        containerId,
                        {
                            'data-tchmi-type': 'TcHmi.Controls.System.TcHmiContainer',
                            'data-tchmi-width': 220 * Scale,
                            'data-tchmi-width-unit': 'px',
                            'data-tchmi-height': 335 * Scale,
                            'data-tchmi-height-unit': 'px',
                            'data-tchmi-opacity': 1.0,
                            'data-tchmi-zindex': 20,
                            'data-tchmi-visibility': 'Collapsed',
                            'data-tchmi-background-color': { "color": "rgba(64, 64, 64, 1)" },
                        },
                        TcHmi.View.get()
                    );

                    __customTextblockHeader = TcHmi.ControlFactory.createEx(
                        'TcHmi.Controls.Beckhoff.TcHmiTextblock',
                        textblockHeaderID,
                        {
                            'data-tchmi-type': 'TcHmi.Controls.Beckhoff.TcHmiTextblock',
                            'data-tchmi-width': 200 * Scale,
                            'data-tchmi-width-unit': 'px',
                            'data-tchmi-height': 35 * Scale,
                            'data-tchmi-height-unit': 'px',
                            'data-tchmi-top': 5,
                            'data-tchmi-top-unit': 'px',
                            'data-tchmi-left': 10 * Scale,
                            'data-tchmi-left-unit': 'px',
                            'data-tchmi-opacity': 1.0,
                            'data-tchmi-zindex': 20,
                            'data-tchmi-visibility': 'Visible',
                            'data-tchmi-text-horizontal-alignment': 'Left',
                            'data-tchmi-text-vertical-alignment': 'Center',
                            'data-tchmi-text-font-size': HeaderFontSize,
                            'data-tchmi-text': HeaderText,
                            'data-tchmi-text-color': { "color": "rgba(255, 255, 255, 1)" },
                            'data-tchmi-background-color': { "color": "rgba(64, 64, 64, 1)" }
                        }
                    );

                    __customTextblockCurrentValue = TcHmi.ControlFactory.createEx(
                        'TcHmi.Controls.Beckhoff.TcHmiTextblock',
                        textblockCurrentValueID,
                        {
                            'data-tchmi-type': 'TcHmi.Controls.Beckhoff.TcHmiTextblock',
                            'data-tchmi-width': 80 * Scale,
                            'data-tchmi-width-unit': 'px',
                            'data-tchmi-height': 50 * Scale,
                            'data-tchmi-height-unit': 'px',
                            'data-tchmi-top': 45 * Scale,
                            'data-tchmi-top-unit': 'px',
                            'data-tchmi-left': 10 * Scale,
                            'data-tchmi-left-unit': 'px',
                            'data-tchmi-opacity': 0.6,
                            'data-tchmi-zindex': 21,
                            'data-tchmi-visibility': 'Visible',
                            'data-tchmi-text-horizontal-alignment': 'Left',
                            'data-tchmi-text-vertical-alignment': 'Center',
                            'data-tchmi-text-font-size': ValueFontSize,
                            'data-tchmi-text': VariableValue1,
                            'data-tchmi-text-color': { "color": "rgba(19, 89, 214, 1)" },
                            'data-tchmi-background-color': { "color": "rgba(255, 255, 255, 0)" },
                            'data-tchmi-content-padding': {
                                "left": 10,
                                "right": 1,
                                "top": 1,
                                "bottom": 1,
                                "leftUnit": "px",
                                "rightUnit": "px",
                                "topUnit": "px",
                                "bottomUnit": "px"
                            }
                        }
                    );

                    __customTextblockSetValue = TcHmi.ControlFactory.createEx(
                        'TcHmi.Controls.Beckhoff.TcHmiNumericInput',
                        textblockSetValueID,
                        {
                            'data-tchmi-type': 'TcHmi.Controls.Beckhoff.TcHmiNumericInput',
                            'data-tchmi-width': 200 * Scale,
                            'data-tchmi-width-unit': 'px',
                            'data-tchmi-height': 50 * Scale,
                            'data-tchmi-height-unit': 'px',
                            'data-tchmi-top': 45 * Scale,
                            'data-tchmi-top-unit': 'px',
                            'data-tchmi-right': 10 * Scale,
                            'data-tchmi-right-unit': 'px',
                            'data-tchmi-opacity': 1.0,
                            'data-tchmi-zindex': 20,
                            'data-tchmi-visibility': 'Visible',
                            'data-tchmi-value-horizontal-alignment': 'Right',
                            'data-tchmi-value-vertical-alignment': 'Center',
                            'data-tchmi-min-value': MinValue,
                            'data-tchmi-max-value': MaxValue,
                            'data-tchmi-auto-select-text': true,
                            'data-tchmi-value-font-size': ValueFontSize,
                            'data-tchmi-value': VariableValue1,
                            'data-tchmi-value-color': { "color": "rgba(19, 89, 214, 1)" },
                            'data-tchmi-background-color': { "color": "rgba(255, 255, 255, 1)" },
                            'data-tchmi-content-padding': {
                                "left": 1,
                                "right": 10,
                                "top": 1,
                                "bottom": 1,
                                "leftUnit": "px",
                                "rightUnit": "px",
                                "topUnit": "px",
                                "bottomUnit": "px"
                            }
                        }
                    );
                    function myFunction() {
                        _focus = document.querySelector("#" + textblockSetValueID + ' input');
                        _focus.focus();

                        if (_focus.value > MaxValue || _focus.value === '') {
                            __customTextblockMaxValue.setTextColor({ color: "rgba(200, 15, 15, 1)" });
                        } else if (_focus.value <= MaxValue) {
                            __customTextblockMaxValue.setTextColor({ color: "rgba(255, 255, 255, 1)" });
                        }

                        if (_focus.value < MinValue || _focus.value === '') {
                            __customTextblockMinValue.setTextColor({ color: "rgba(200, 15, 15, 1)" });
                        } else if (_focus.value >= MinValue) {
                            __customTextblockMinValue.setTextColor({ color: "rgba(255, 255, 255, 1)" });
                        }
                    }

                    setTimeout(myFunction, 50);

                    __customTextblockMinValue = TcHmi.ControlFactory.createEx(
                        'TcHmi.Controls.Beckhoff.TcHmiTextblock',
                        textblockMinValueID,
                        {
                            'data-tchmi-type': 'TcHmi.Controls.Beckhoff.TcHmiTextblock',
                            'data-tchmi-width': 100 * Scale,
                            'data-tchmi-width-unit': 'px',
                            'data-tchmi-height': 25 * Scale,
                            'data-tchmi-height-unit': 'px',
                            'data-tchmi-top': 95 * Scale,
                            'data-tchmi-top-unit': 'px',
                            'data-tchmi-left': 10 * Scale,
                            'data-tchmi-left-unit': 'px',
                            'data-tchmi-opacity': 1.0,
                            'data-tchmi-zindex': 20,
                            'data-tchmi-visibility': 'Visible',
                            'data-tchmi-text-horizontal-alignment': 'Left',
                            'data-tchmi-text-vertical-alignment': 'Center',
                            'data-tchmi-text-font-size': MinMaxFontSize,
                            'data-tchmi-text': 'Min : ' + MinValue,
                            'data-tchmi-text-color': { "color": "rgba(200, 15, 15, 1)" },
                            'data-tchmi-background-color': { "color": "rgba(64, 64, 64, 1)" },
                            'data-tchmi-content-padding': {
                                "left": 2,
                                "right": 1,
                                "top": 1,
                                "bottom": 1,
                                "leftUnit": "px",
                                "rightUnit": "px",
                                "topUnit": "px",
                                "bottomUnit": "px"
                            }
                        }
                    );

                    __customTextblockMaxValue = TcHmi.ControlFactory.createEx(
                        'TcHmi.Controls.Beckhoff.TcHmiTextblock',
                        textblockMaxValueID,
                        //'customTextblockMaxValue_' + this.__textbox[0].offsetParent.id.toString(),
                        {
                            'data-tchmi-type': 'TcHmi.Controls.Beckhoff.TcHmiTextblock',
                            'data-tchmi-width': 100 * Scale,
                            'data-tchmi-width-unit': 'px',
                            'data-tchmi-height': 25 * Scale,
                            'data-tchmi-height-unit': 'px',
                            'data-tchmi-top': 95 * Scale,
                            'data-tchmi-top-unit': 'px',
                            'data-tchmi-right': 10 * Scale,
                            'data-tchmi-right-unit': 'px',
                            'data-tchmi-opacity': 1.0,
                            'data-tchmi-zindex': 20,
                            'data-tchmi-visibility': 'Visible',
                            'data-tchmi-text-horizontal-alignment': 'Right',
                            'data-tchmi-text-vertical-alignment': 'Center',
                            'data-tchmi-text-font-size': MinMaxFontSize,
                            'data-tchmi-text': 'Max : ' + MaxValue,
                            'data-tchmi-text-color': { "color": "rgba(200, 15, 15, 1)" },
                            'data-tchmi-background-color': { "color": "rgba(64, 64, 64, 1)" },
                            'data-tchmi-content-padding': {
                                "left": 1,
                                "right": 2,
                                "top": 1,
                                "bottom": 1,
                                "leftUnit": "px",
                                "rightUnit": "px",
                                "topUnit": "px",
                                "bottomUnit": "px"
                            }
                        }
                    );

                    __customNumpad = TcHmi.ControlFactory.createEx(
                        'TcHmi.Controls.Beckhoff.TcHmiKeyboard',
                        customNumpadID,
                        //'CustomNumpad_' + this.__textbox[0].offsetParent.id.toString(),
                        {
                            'data-tchmi-layout-file': 'ElektroCode/KeyboardLayouts/Numpad.json',
                            'data-tchmi-scale-mode': 'ScaleToFit',
                            'data-tchmi-bottom': 10,
                            'data-tchmi-bottom-unit': 'px',
                            'data-tchmi-left': 10 * Scale,
                            'data-tchmi-left-unit': 'px',
                            'data-tchmi-width': 200 * Scale,
                            'data-tchmi-width-unit': 'px',
                            'data-tchmi-height': 200 * Scale,
                            'data-tchmi-height-unit': 'px',
                            'data-tchmi-opacity': 1.0,
                            'data-tchmi-zindex': 20,
                            'data-tchmi-visibility': 'Visible',
                            'data-tchmi-background-color': { "color": "rgba(64, 64, 64, 1)" },
                            //'data-tchmi-key-background-color': this.__keyBackgroundColor,
                            'data-tchmi-label-color': { "color": "rgba(19, 89, 214, 1)" },
                            'data-tchmi-label-font-size': NumpadFontSize
                        }
                    );

                    function myFunction2() {
                        _enter = document.querySelector("#" + customNumpadID + ' [data-code="NumpadEnter"]');
                        _enter.addEventListener('touchstart', function () {
                            if (_focus.value <= MaxValue && _focus.value >= MinValue) {
                                TcHmi.Symbol.writeEx(VariableValue1, _focus.value, function (data) {
                                    if (data.error === TcHmi.Errors.NONE) {
                                        TcHmi.TopMostLayer.removeEx(__customContainer.__element);
                                    } else {
                                        // Handle error...
                                    }
                                });
                            }
                        });

                        _enter.addEventListener('click', function () {
                            if (_focus.value <= MaxValue && _focus.value >= MinValue) {
                                TcHmi.Symbol.writeEx(VariableValue1, _focus.value, function (data) {
                                    if (data.error === TcHmi.Errors.NONE) {
                                        TcHmi.TopMostLayer.removeEx(__customContainer.__element);
                                    } else {
                                        // Handle error...
                                    }
                                });
                            }
                        });
                    }

                    setTimeout(myFunction2, 50);

                    __customContainer.addChild(__customTextblockHeader);
                    __customContainer.addChild(__customTextblockCurrentValue);
                    __customContainer.addChild(__customTextblockSetValue);
                    __customContainer.addChild(__customTextblockMinValue);
                    __customContainer.addChild(__customTextblockMaxValue);
                    __customContainer.addChild(__customNumpad);
                }

                if (__customContainer != undefined && OpenNumpad == true) {
                    __customContainer.setVisibility("Visible");

                    TcHmi.TopMostLayer.addEx(__customContainer.__element, {
                        centerHorizontal: true,
                        centerVertical: true,
                        removeCb: (data) => {
                            if (data.canceled) {
                                // user clicked on background
                                TcHmi.TopMostLayer.removeEx(__customContainer.__element);
                            }
                        }
                    });
                } else if (__customContainer != undefined && OpenNumpad == false) {
                    TcHmi.TopMostLayer.removeEx(__customContainer.__element);
                    __customContainer.destroy();
                }

                __customNumpad.__element.on('click touchend', (e) => {
                    _focus.focus();
                    if (_focus.value > MaxValue || _focus.value === '') {
                        __customTextblockMaxValue.setTextColor({ color: "rgba(200, 15, 15, 1)" });
                    } else if (_focus.value <= MaxValue) {
                        __customTextblockMaxValue.setTextColor({ color: "rgba(255, 255, 255, 1)" });
                    }

                    if (_focus.value < MinValue || _focus.value === '') {
                        __customTextblockMinValue.setTextColor({ color: "rgba(200, 15, 15, 1)" });
                    } else if (_focus.value >= MinValue) {
                        __customTextblockMinValue.setTextColor({ color: "rgba(255, 255, 255, 1)" });
                    }
                });

                __customContainer.__element.on('click touchend', (e) => {
                    _focus.focus();
                });
            }
            ElektroCode.CustomNumpad = CustomNumpad;
        })(ElektroCode = Functions.ElektroCode || (Functions.ElektroCode = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('CustomNumpad', 'TcHmi.Functions.ElektroCode', TcHmi.Functions.ElektroCode.CustomNumpad);
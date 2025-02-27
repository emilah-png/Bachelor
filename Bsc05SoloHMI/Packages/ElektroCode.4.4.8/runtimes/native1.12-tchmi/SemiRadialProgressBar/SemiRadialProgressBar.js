// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

/*
 * Generated 3/20/2023 9:12:10 AM
 * Copyright (C) 2023
 */
var TcHmi;
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    let Controls;
    (function (/** @type {globalThis.TcHmi.Controls} */ Controls) {
        let ElektroCode;
        (function (ElektroCode) {
            class SemiRadialProgressBar extends TcHmi.Controls.System.TcHmiControl {
                constructor(element, pcElement, attrs) {
                    super(element, pcElement, attrs);
                    this.__container;
                    this.__bar;

                    this.__value;
                    this.__kalinlik;
                    this.__kalinlikValue;
                    this.__duration;
                    this.__startColor;
                    this.__endColor;
                    this.__valueColor;
                    this.__fontSize;
                    this.__birim;

                    this.__rgbStartColor;
                    this.__rgbEndColor;
                    this.__rgbValueColor;
                    this.__setFontSize;

                    this.__setValue;
                }
                __previnit() {
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_ElektroCode_SemiRadialProgressBar-Template');
                    this.__container = this.__element.find('.containerSemi');
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html');
                    }
                    super.__previnit();
                }
                __init() {
                    super.__init();
                }
                __attach() {
                    super.__attach();
                    var _self = this;

                    if (_self.__bar == null) {
                        setTimeout(() => {
                            _self.__bar = new ProgressBar.SemiCircle(_self.__container[0], {
                                strokeWidth: _self.__kalinlikValue,
                                color: _self.__rgbValueColor,
                                trailWidth: _self.__kalinlik,
                                easing: 'easeInOut',
                                duration: _self.__duration,
                                text: {
                                    value: '',
                                    alignToBottom: false
                                },
                                from: { color: _self.__rgbStartColor },
                                to: { color: _self.__rgbEndColor },

                                step: (state, bar) => {
                                    bar.path.setAttribute('stroke', state.color);
                                    var value = (Math.round(bar.value() * 1000) * 0.1).toFixed(1);
                                    if (value === 0) {
                                        bar.setText('0');
                                    } else {
                                        bar.setText(value + _self.__birim);
                                    }

                                    bar.text.style.color = state.color;
                                }
                            });

                            this.__bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
                            this.__bar.text.style.fontSize = _self.__setFontSize;
                            this.__bar.animate(_self.__setValue);
                        }, 100);
                    }
                }
                __detach() {
                    super.__detach();
                }
                destroy() {
                    if (this.__keepAlive) {
                        return;
                    }
                    super.destroy();
                }

                //*******************VALUE*******************************************************************//
                setPieValue(val) {
                    this.__value = val;
                    this.__setValue = val * 0.01;
                    if (this.__bar != null) {
                        if (val < 0) {
                            this.__bar.animate(0);
                            this.__setValue = 0;
                        } else if (val > 100) {
                            this.__bar.animate(1);
                            this.__setValue = 1;
                        } else {
                            this.__setValue = val * 0.01;
                            this.__bar.animate(this.__setValue);
                        }
                    }

                    TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'pieValue' });
                }

                getPieValue() {
                    return this.__value;
                }
                //*******************VALUE*******************************************************************//
                //
                //
                //*******************BİRİM*******************************************************************//
                setPieValueBirim(val) {
                    this.__birim = val;
                    TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'pieValueBirim' });
                }

                getPieValueBirim() {
                    return this.__birim;
                }
                //*******************BİRİM*******************************************************************//
                //
                //
                //*******************KALINLIK-1****************************************************************//
                setStrokeWidth(val) {
                    this.__kalinlik = val;
                    TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'strokeWidth' });
                }

                getStrokeWidth() {
                    return this.__kalinlik;
                }
                //*******************KALINLIK-1****************************************************************//
                //
                //
                //*******************KALINLIK-2****************************************************************//
                setStrokeWidthValue(val) {
                    this.__kalinlikValue = val;
                    TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'strokeWidthValue' });
                }

                getStrokeWidthValue() {
                    return this.__kalinlikValue;
                }
                //*******************KALINLIK-2****************************************************************//
                //
                //
                //*******************DURATION****************************************************************//
                setDuration(val) {
                    this.__duration = val;
                    TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'duration' });
                }

                getDuration() {
                    return this.__duration;
                }
                //*******************DURATION****************************************************************//
                //
                //
                //*******************FONT****************************************************************//
                setFontSize(val) {
                    this.__fontSize = val;
                    if (this.__fontSize != null) {
                        this.__setFontSize = this.__fontSize + 'px';
                    }
                    setTimeout(() => {
                        this.__bar.text.style.fontSize = this.__setFontSize;
                    }, 50);
                    TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'fontSize' });
                }

                getFontSize() {
                    return this.__fontSize;
                }
                //*******************FONT****************************************************************//
                //
                //
                //*******************START COLOR****************************************************************//
                setPieStartColor(t) {
                    var e = TcHmi.ValueConverter.toObject(t);
                    null === e && (e = this.getAttributeDefaultValueInternal("pieStartColor")), tchmi_equal(e, this.__startColor) || (this.__startColor = e, TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getPieStartColor"]), this.__processColor());
                }

                getPieStartColor() {
                    return this.__startColor;
                }
                //*******************START COLOR****************************************************************//
                //
                //
                //*******************END COLOR****************************************************************//
                setEndColor(t) {
                    var e = TcHmi.ValueConverter.toObject(t);
                    null === e && (e = this.getAttributeDefaultValueInternal("pieStartColor")), tchmi_equal(e, this.__endColor) || (this.__endColor = e, TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getEndColor"]), this.__processColor());
                }

                getEndColor() {
                    return this.__endColor;
                }
                //*******************START COLOR****************************************************************//
                //
                //
                setValueBackColor(t) {
                    var e = TcHmi.ValueConverter.toObject(t);
                    null === e && (e = this.getAttributeDefaultValueInternal("valueBackColor")), tchmi_equal(e, this.__valueColor) || (this.__valueColor = e, TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getValueBackColor"]), this.__processColor());
                }

                getValueBackColor() {
                    return this.__valueColor;
                }
                //*******************START COLOR****************************************************************//

                __processColor() {
                    if (this.__startColor == null) {
                        this.__startColor = { "color": "rgba(151, 200, 237, 1)" };
                    } else {
                        const rgbaValues = this.__startColor.color.match(/(\d+)/g);
                        const alpha = parseFloat(rgbaValues.pop());
                        const rgbValues = rgbaValues.map(value => Math.round(value * alpha / 1));
                        this.__rgbStartColor = `rgb(${rgbValues.join(", ")})`;
                    }

                    if (this.__endColor == null) {
                        this.__endColor = { "color": "rgba(151, 200, 237, 1)" };
                    } else {
                        const rgbaValues = this.__endColor.color.match(/(\d+)/g);
                        const alpha = parseFloat(rgbaValues.pop());
                        const rgbValues = rgbaValues.map(value => Math.round(value * alpha / 1));
                        this.__rgbEndColor = `rgb(${rgbValues.join(", ")})`;
                    }

                    if (this.__valueColor == null) {
                        this.__valueColor = { "color": "rgba(151, 200, 237, 1)" };
                    } else {
                        const rgbaValues = this.__valueColor.color.match(/(\d+)/g);
                        const alpha = parseFloat(rgbaValues.pop());
                        const rgbValues = rgbaValues.map(value => Math.round(value * alpha / 1));
                        this.__rgbValueColor = `rgb(${rgbValues.join(", ")})`;
                    }
                }
            }
            ElektroCode.SemiRadialProgressBar = SemiRadialProgressBar;
        })(ElektroCode = Controls.ElektroCode || (Controls.ElektroCode = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
/**
* Register Control
*/
TcHmi.Controls.registerEx('SemiRadialProgressBar', 'TcHmi.Controls.ElektroCode', TcHmi.Controls.ElektroCode.SemiRadialProgressBar);
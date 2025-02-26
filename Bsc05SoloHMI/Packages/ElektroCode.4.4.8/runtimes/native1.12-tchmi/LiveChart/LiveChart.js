// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

/*
 * Generated 28.04.2023 16:49:37
 * Copyright (C) 2023
 */
var TcHmi;
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    let Controls;
    (function (/** @type {globalThis.TcHmi.Controls} */ Controls) {
        let ElektroCode;
        (function (ElektroCode) {
            class LiveChart extends TcHmi.Controls.System.TcHmiControl {
                constructor(element, pcElement, attrs) {
                    super(element, pcElement, attrs);
                    this.__chartReference = undefined;
                    this.__chartValue = undefined;
                    this.__updateInterval = undefined;
                    this.__interval = undefined;
                    this.__valueAxis = undefined;
                }
                __previnit() {
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_FC_Ozturks_FC_LineLiveChart-Template');
                    super.__previnit();
                }

                //******************* SETTERS *******************//
                // Setter for ChartValue
                setChartValue = function (ChartValue) {
                    // Call this event only after when the value is different from previous one
                    if (this.__chartValue != ChartValue)
                        TcHmi.EventProvider.raise(this.getId() + '.onFunctionResultChanged', ['getChartValue']);

                    this.__chartValue = ChartValue;
                };

                // Setter for UpdateInterval
                setUpdateInterval = function (UpdateInterval) {
                    this.__updateInterval = UpdateInterval;
                    this.changeUpdateInterval();
                    TcHmi.EventProvider.raise(this.getId() + '.onFunctionResultChanged', ['getUpdateInterval']);
                };

                // Setter for ChartDataType
                setChartDataType = function (ChartDataType) {
                    this.__chartDatapoint = ChartDataType;
                    TcHmi.EventProvider.raise(this.getId() + '.onFunctionResultChanged', ['getChartDataType']);

                    if (this.__chartReference) {
                        this.__chartReference.addData({ date: new Date(ChartDataType._date), value: ChartDataType._value });
                    }
                };

                // Setter for ChartPoints
                setChartPoints = function (ChartPoints) {
                    this.__chartDatapoints = ChartPoints;
                    TcHmi.EventProvider.raise(this.getId() + '.onFunctionResultChanged', ['getChartPoints']);

                    if (ChartPoints[0]._date == "") {
                        return;
                    }

                    ChartPoints = ChartPoints.map(item => {
                        item._date = new Date(item._date);
                        return item;
                    });

                    if (this.__chartReference) {
                        if (this.__chartReference.data.length + ChartPoints.length > this.__chartSettings.maxNumberOfPoints) {
                            this.__chartReference.addData(ChartPoints, (this.__chartReference.data.length + ChartPoints.length) - this.__chartSettings.maxNumberOfPoints);
                        } else {
                            this.__chartReference.addData(ChartPoints);
                        }
                    }
                };

                // Setter for ChartSettings
                setChartSettings = function (ChartSettings) {
                    this.__chartSettings = ChartSettings;
                    TcHmi.EventProvider.raise(this.getId() + '.onFunctionResultChanged', ['getChartSettings']);
                };
                //***********************************************//

                __init() {
                    super.__init();
                }
                __attach() {
                    super.__attach();
                    super.__attach();

                    // Create a unique id for the canvas object
                    this.__uniqueGuid = tchmi_create_guid();
                    // Change chart id to make it unique
                    document.getElementById('amChartContainer').id = this.__uniqueGuid;

                    if (this.__chartSettings.isAnimated) {
                        am4core.useTheme(am4themes_animated);
                    }

                    var chart = am4core.create(this.__uniqueGuid, am4charts.XYChart);
                    chart.dateFormatter.dateFormat = "hh:mm:ss.nnn";

                    // Create axes
                    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
                    //dateAxis.renderer.grid.template.location = 0;
                    //dateAxis.renderer.minGridDistance = 50;
                    dateAxis.dateFormatter = new am4core.DateFormatter();
                    dateAxis.dateFormatter.dateFormat = "ss.nnn";
                    dateAxis.tooltipDateFormat = "HH:mm:ss.nnn";
                    dateAxis.color = am4core.color("#4793da");
                    dateAxis.fontSize = "15px";
                    dateAxis.renderer.labels.template.fill = am4core.color("#EAEAEA");
                    dateAxis.renderer.grid.template.stroke = am4core.color("#EAEAEA");
                    this.__valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
                    this.__valueAxis.title.fill = am4core.color("#EAEAEA");
                    this.__valueAxis.title.text = this.__chartSettings.axisName;
                    this.__valueAxis.renderer.labels.template.fill = am4core.color("#EAEAEA");
                    this.__valueAxis.renderer.grid.template.stroke = am4core.color("#EAEAEA");
                    this.__valueAxis.fontSize = "15px";


                    // Create series
                    var series = chart.series.push(new am4charts.LineSeries());
                    series.dataFields.dateX = "_date";
                    series.dataFields.valueY = "_value";
                    series.strokeWidth = 3;
                    series.fillOpacity = 0.5;
                    series.minBulletDistance = 5;
                    series.tooltipText = "{_value}"

                    // Drop-shaped tooltips
                    series.tooltip.background.cornerRadius = 20;
                    series.tooltip.background.strokeOpacity = 0;
                    series.tooltip.pointerOrientation = "vertical";
                    series.tooltip.label.minWidth = 40;
                    series.tooltip.label.minHeight = 40;
                    series.tooltip.label.textAlign = "middle";
                    series.tooltip.label.textValign = "middle";

                    // Make bullets grow on hover
                    var bullet = series.bullets.push(new am4charts.CircleBullet());
                    bullet.circle.strokeWidth = 2;
                    bullet.circle.radius = 4;
                    bullet.circle.fill = am4core.color("#fff");

                    var bullethover = bullet.states.create("hover");
                    bullethover.properties.scale = 1.3;

                    if (this.__chartSettings.scrollbarPositionX && this.__chartSettings.scrollbarPositionX != "None") {
                        // Add horizontal scrollbar
                        chart.scrollbarX = new am4core.Scrollbar();
                        if (this.__chartSettings.scrollbarPositionX == "Top")
                            chart.scrollbarX.parent = chart.topAxesContainer;
                        else
                            chart.scrollbarX.parent = chart.bottomAxesContainer;
                    }

                    if (this.__chartSettings.scrollbarPositionX && this.__chartSettings.scrollbarPositionY != "None") {
                        // Add vertical scrollbar
                        chart.scrollbarY = new am4core.Scrollbar();
                        if (this.__chartSettings.scrollbarPositionY == "Left")
                            chart.scrollbarY.parent = chart.leftAxesContainer;
                        else
                            chart.scrollbarY.parent = chart.rightAxesContainer;
                    }

                    // Add cursor
                    chart.cursor = new am4charts.XYCursor();
                    //chart.cursor.behavior = "zoomX";
                    //chart.cursor.rollOutDelay = 1000;
                    //chart.cursor.lineX.disabled = true;

                    this.__chartReference = chart;



                    //var $this = this;
                    //setInterval(function () {
                    //    $this.__chartReference.addData({ date: new Date(), value: 50 });
                    //}, 1000);
                }

                //******************* GETTERS *******************//
                // Getter for ChartValue
                getChartValue = function () {
                    return this.__chartValue;
                };

                // Getter for UpdateInterval
                getUpdateInterval = function () {
                    return this.__updateInterval;
                };

                // Getter for ChartDataType
                getChartDataType = function () {
                    return this.__chartDatapoint;
                };

                // Getter for ChartPoints
                getChartPoints = function () {
                    return this.__chartDatapoints;
                };

                // Getter for ChartSettings
                getChartSettings = function () {
                    return this.__chartSettings;
                };
                //***********************************************//

                __detach() {
                    super.__detach();
                }
                destroy() {
                    if (this.__keepAlive) {
                        return;
                    }
                    super.destroy();
                }

                addData = function ($this) {
                    //this = TcHmi.Controls.Custom.FC_ChartJs;
                    if ($this.__chartReference === undefined) {
                        return;
                    }

                    if ($this.__chartReference.data.length > $this.__chartSettings.maxNumberOfPoints) {
                        $this.__chartReference.addData({ _date: new Date(), _value: $this.__chartValue }, 1);
                    } else {
                        $this.__chartReference.addData({ _date: new Date(), _value: $this.__chartValue });
                    }
                }

                changeUpdateInterval = function () {
                    if (this.__interval)
                        clearInterval(this.__interval);

                    if (this.__updateInterval > 0) {
                        this.__interval = setInterval(this.addData, this.__updateInterval, this);
                    }
                }

                createDatetime = function () {

                }
            }
            ElektroCode.LiveChart = LiveChart;
        })(ElektroCode = Controls.ElektroCode || (Controls.ElektroCode = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
/**
* Register Control
*/
TcHmi.Controls.registerEx('LiveChart', 'TcHmi.Controls.ElektroCode', TcHmi.Controls.ElektroCode.LiveChart);

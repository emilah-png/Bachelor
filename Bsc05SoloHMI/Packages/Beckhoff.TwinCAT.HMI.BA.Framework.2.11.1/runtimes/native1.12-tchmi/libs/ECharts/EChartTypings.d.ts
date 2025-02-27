import * as echartsEx from './types/echarts'

declare global {
    declare module echarts {
        declare interface ECharts extends echartsEx.ECharts { };
        declare interface EChartsCoreOption extends echartsEx.EChartsCoreOption { }
        declare interface EChartsOption extends echartsEx.EChartsOption { }
        declare interface GridComponentOption extends echartsEx.GridComponentOption { }
        declare interface XAXisComponentOption extends echartsEx.XAXisComponentOption { }
        declare interface YAXisComponentOption extends echartsEx.YAXisComponentOption { }
        declare interface SeriesOption extends echartsEx.SeriesOption { }
        declare interface LineSeriesOption extends echartsEx.LineSeriesOption { }
        declare interface LineDataItemOption extends echartsEx.LineDataItemOption { }
    }
}
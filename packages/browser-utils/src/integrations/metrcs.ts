import { onCLS, onFCP, onINP, onLCP, onTTFB } from '../metrics'

export const onLoad = (callback: (metric: { name: string; value: number }) => void) => {
    // 获取所有导航条目的数据
    const navigationEntries = performance.getEntriesByType('navigation')

    // 如果存在导航条目，取第一个
    if (navigationEntries.length > 0) {
        const entry = navigationEntries[0] as PerformanceNavigationTiming

        // 计算页面加载时长
        let loadTime = entry ? entry.loadEventEnd - entry.startTime : 10

        // 确保 loadTime 不为 0 或负数
        if (loadTime <= 0) {
            // 尝试使用其他方法计算加载时间
            loadTime = performance.now()
        }

        // 执行回调函数
        callback({ name: 'LOAD', value: loadTime })
    } else {
        // 如果没有导航条目，使用 performance.now() 作为备选
        const loadTime = performance.now()

        callback({ name: 'LOAD', value: loadTime })
    }
}


export class Metrics {
    // constructor(private transport: Transport) {}

    init() {
        window.addEventListener('load', () => {
            ;[onCLS, onLCP, onFCP, onTTFB, onLoad].forEach(metricFn => {
                metricFn(metric => {
                    // this.transport.send({
                    //     event_type: 'performance',
                    //     type: 'webVital',
                    //     name: metric.name,
                    //     value: metric.value,
                    //     path: window.location.pathname,
                    // })
                    console.log(`🚀 ~ Metrics ~ init ~ {
                        event_type: 'performance',
                        type: 'webVital',
                        name: metric.name,
                        value: metric.value,
                        path: window.location.pathname,
                    }:`, {
                        event_type: 'performance',
                        type: 'webVital',
                        name: metric.name,
                        value: metric.value,
                        path: window.location.pathname,
                    })
                })
            })
        })
    }
}
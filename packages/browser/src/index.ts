import { Metrics } from '@miaoma-monitor-demo/browser-utils'
import { type Integration, Monitoring } from '@miaoma-monitor-demo/core'

import { Errors } from './integrations/errorsIntegration'
import { BrowserTransport } from './transport'

export function init(options: { dsn: string; integrations?: Integration[] }) {
    const monitoring = new Monitoring(options)

    const transport = new BrowserTransport(options.dsn)

    monitoring.init(transport)

    new Errors(transport).init()
    new Metrics(transport).init()

    return monitoring
}

/**
 * 使用示例
 * import { init } from '@miaoma-monitor-demo/browser'
 * init({
 *     dsn: 'xxxx',
 *     integrations: [new Errors(), new Metrics()]
 * })
 */

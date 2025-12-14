import { getBrowserInfo } from '@miaoma-monitor-demo/browser-utils'
import { Transport } from '@miaoma-monitor-demo/core'

export class BrowserTransport implements Transport {
    constructor(private dsn: string) {}
    async send(data: Record<string, unknown>) {
        const browserInfo = getBrowserInfo()
        const payload = {
            ...data,
            browserInfo,
        }
        fetch(this.dsn, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        }).catch(err => console.error('Failed to send data', err))
    }
}

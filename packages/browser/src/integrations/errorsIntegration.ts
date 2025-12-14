import { Transport } from '@miaoma-monitor-demo/core'

export interface OnUnhandledRejectionErrorPayload {
    type: string
    stack: string
    message: string
    path: string
}

/**
 * 错误处理
 */
export class Errors {
    constructor(private transport: Transport) {}

    init() {
        window.onerror = (message, source, lineno, colno, error) => {
            this.transport.send({
                event_type: 'error',
                type: error?.name,
                stack: error?.stack,
                message,
                path: window.location.pathname,
            })
        }

        window.onunhandledrejection = event => {
            this.transport.send({
                event_type: 'error',
                type: 'unhandledrejection',
                stack: event.reason.stack,
                message: event.reason.message,
                path: window.location.pathname,
            })
        }
    }
}

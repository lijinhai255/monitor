import { Transport } from './transport'
import { MonitoringOptions } from './types'
export type { Transport } from './transport'
export type { Integration } from './types'

export let getTransport: () => Transport | null = () => null

export class Monitoring {
    // 私有属性，用于存储传输对象，初始值为null
    private transport: Transport | null = null

    /**
     * 构造函数，用于初始化监控选项
     * @param options 监控配置选项对象，包含监控所需的各种参数设置
     */
    constructor(private options: MonitoringOptions) {}
    /**
     * 初始化方法，用于设置传输对象并初始化所有集成项
     * @param transport 传输对象，用于处理监控数据的发送
     */
    init(transport: Transport) {
        // 将传入的传输对象赋值给类的私有属性
        this.transport = transport
        // 设置全局获取传输对象的函数
        getTransport = () => this.transport
        // 遍历所有集成项，并使用当前传输对象初始化它们
        this.options.integrations?.forEach(integration => {
            integration.init(transport)
        })
    }

    /**
     * 报告消息的方法
     * @param message - 要发送的消息内容
     */
    reportMessage(message: string) {
        // 使用可选链操作符检查transport是否存在，如果存在则调用send方法
        // 发送一个包含类型为'message'和具体消息内容的对象
        this.transport?.send({
            type: 'message', // 消息类型标识为'message'
            message, // 实际要发送的消息内容
        })
    }

    /**
     * 上报事件方法
     * 用于将事件数据通过传输层发送到服务器
     * @param event - 包含事件信息的对象，键值对形式存储
     */
    reportEvent(event: Record<string, unknown>) {
        // 通过可选链操作符调用传输层的send方法
        // 发送的事件类型标记为'event'
        // 同时展开事件对象的所有属性
        this.transport?.send({
            type: 'event',
            ...event,
        })
    }
}

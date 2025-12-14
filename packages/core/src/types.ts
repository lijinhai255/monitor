import { Transport } from './transport/index'

export interface IIntegration {
    init(transport: Transport): void
}

/**
 * 集成类实现IIntegration接口
 * 用于管理集成相关的功能和逻辑
 */
export class Integration implements IIntegration {
    // 传输层实例，用于处理数据的传输
    transport!: Transport
    /**
     * 初始化集成方法
     * @param transport 传输层实例，用于设置集成的传输方式
     */
    init(transport: Transport): void {
        // Initialize the integration with the transport
        this.transport = transport
    }
}

/**
 * Monitoring options
 * 监控相关配置
 */
export interface MonitoringOptions {
    dsn: string
    integrations?: Integration[]
}

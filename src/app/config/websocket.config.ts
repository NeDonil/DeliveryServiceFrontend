import {RxStompConfig} from "@stomp/rx-stomp";

export const WebsocketConfig : RxStompConfig = {
    brokerURL: 'ws://localhost:8080/ws',

    heartbeatIncoming: 0, // Typical value 0 - disabled
    heartbeatOutgoing: 20000, // Typical value 20000 - every 20 seconds

    reconnectDelay: 60000,
}

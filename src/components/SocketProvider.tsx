import { createContext, useEffect, useState } from 'react'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs-websocket'
import { useTypedSelector } from '../reducers'

type SocketContextPayload = {
    send: (msg: string) => Promise<void>
}

const initialContext = {
    send: async () => Promise.reject('Error: Socket not ready for sending')
}

export const SocketContext = createContext<SocketContextPayload>(initialContext)

export const SocketProvider: React.FC = ({ children }) => {

    const isNameSet = useTypedSelector((state) => state.user.isNameSet)
    const name = useTypedSelector((state) => state.user.name)

    const [client, setClient] = useState<Stomp.Client>()

    useEffect(() => {
        if (!client && isNameSet === true) {
            const host = name === 'local' ? 'http://localhost:8080' : 'https://whats-crap.herokuapp.com'
            const socket = new SockJS(`${host}/websocket`)
            const stompClient = Stomp.over(socket)
            stompClient.connect({}, () => {
                setClient(stompClient)
            })
        }
    }, [client, isNameSet])

    const send = client ? async (msg: string) => {
        client.send('/inbound/text', {}, msg)
    } : initialContext.send

    return (
        <SocketContext.Provider value={{ send }}>{children}</SocketContext.Provider>
    )
}

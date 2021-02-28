import { createContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SockJS from "sockjs-client";
import Stomp from "stompjs-websocket";


const initialContext = {
    send: async () => Promise.reject('Socket not ready')
}

export const SocketContext = createContext()

export const SocketProvider = ({ children }) => {

    const isNameSet = useSelector((state) => state.user.isNameSet);
    const name = useSelector((state) => state.user.name);

    const [client, setClient] = useState(null)

    useEffect(() => {
        if (!client && isNameSet === true) {
            const host = name === "local" ? "http://localhost:8080" : "https://whats-crap.herokuapp.com";
            const socket = new SockJS(`${host}/websocket`);
            const stompClient = Stomp.over(socket);
            stompClient.connect({}, () => {
                setClient(stompClient);
                // stompClient.send("/inbound/text", {}, "hi there");
            });
        }
    }, [client, isNameSet]);

    const send = client ? (msg) => {
        client.send('/inbound/text', {}, msg);
    } : null;

    return (
        <SocketContext.Provider value={{ send }}>{children}</SocketContext.Provider>
    )
}

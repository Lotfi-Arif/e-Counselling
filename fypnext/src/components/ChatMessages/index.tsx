import { useEffect, useState } from "react";
import { useFindOneChatQuery } from "schema/generated/graphql";

const ChatMessages = () => {

    const [chatId, setChatId] = useState({} as any);
    useEffect(() => {
        setChatId(JSON.parse(localStorage.getItem('chatId')))
    }, [])

    const { data, loading } = useFindOneChatQuery({
        variables: {
            where: {
                id: chatId
            }
        }
    });

    if (loading) {
        return (<></>);
    }

    const messages = data?.findOneChat

    return (
        <>
            {
                messages?.Message.map((message) => {
                    return (
                        <div className="chat-message">
                            <div className="flex items-end justify-end">
                                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                    <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">{message?.Message}</span></div>
                                </div>
                                <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-6 h-6 rounded-full order-2" />
                            </div>
                        </div>
                    )
                })
            }
        </>
    );

}

export default ChatMessages;
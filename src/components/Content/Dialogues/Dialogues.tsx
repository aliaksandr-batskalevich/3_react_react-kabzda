import React, {ChangeEvent, KeyboardEvent, MouseEvent, useState} from "react";
import s from './Dialogues.module.css';
import {DialogueItem} from "./DialogueItem/DialogueItem";
import {Message} from "./Message/Message";
import {dialoguesPageType} from "../../../redux/state";

type DialoguesPropsType = {
    dialogues: dialoguesPageType
}

export const Dialogues = (props: DialoguesPropsType) => {

    let [newMessageData, setNewMessageData] = useState<string>('');

    const onChangeTextAreaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessageData(event.currentTarget.value);
    };
    const sendMessage = () => {
        props.dialogues.addMessage(newMessageData);
        setNewMessageData('');
    };
    const onKeyPressTextAreaHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        event.key === 'Enter' && sendMessage();
    };
    const onClickButtonHandler = (event: MouseEvent<HTMLButtonElement>) => {
        sendMessage();
    };

    let dialogues = props.dialogues.dialoguesData.map(el => {
        return (
            <DialogueItem key={el.id} data={el}/>
        )
    });
    let messages = props.dialogues.messagesData.map(el => {
        return (
            <Message key={el.id} data={el}/>
        )
    });

    return (
        <div className={s.dialoguesWrapper}>
            <div className={s.dialogues}>
                {dialogues}
            </div>
            <div className={s.messages}>
                {messages}
                <div className={s.inputMessageWrapper}>
                    <textarea
                        className={s.textarea}
                        placeholder={'write new message...'}
                        value={newMessageData}
                        onChange={onChangeTextAreaHandler}
                        onKeyPress={onKeyPressTextAreaHandler}
                    />
                    <button
                        className={s.button}
                        onClick={onClickButtonHandler}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}
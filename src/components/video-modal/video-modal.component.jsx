import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import Modal from 'react-responsive-modal';

const ModalPlayer = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <Modal
            isOpen={() => setOpen(true)}
            OnClose={() => setOpen(false)}
            styles={{
            modal: {
              maxWidth: "unset",
              width: "100%",
              padding: "unset"
            },
            overlay: {
              background: "rgba(0, 0, 0, 0.5)"
            },
            closeButton: {
              background: "yellow"
            }
          }}
          center>
            <ReactPlayer
                url="https://youtu.be/FuaQ1QhJOkc"
                width= "100%"
                height="calc(100vh- 100px)"
            />
        </Modal>
    
        )
}

export default ModalPlayer
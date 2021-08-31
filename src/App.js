import ContactModal from "./components/ContactModal/ContactModal";
import DownButton from "./components/DownButton/DownButton";
import TopBlock from "./components/TopBlock/Desktop/TopBlock";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { isDesktop } from "react-device-detect";
import TopBlockMobile from "./components/TopBlock/Mobile/TopBlockMobile";
import MotivationBlock from "./components/MotivationBlock/Desktop/MotivationBlock";
import MotivationBlockMobile from "./components/MotivationBlock/Mobile/MotivationBlockMobile";

function App() {
  const [modalShown, setModalShown] = React.useState(false)

  const onMessageSend = () => {
    toast.success('🚀 Сообщение успешно отправлено!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
      {isDesktop ? 
        <TopBlock showModal={() => setModalShown(true)}/> : 
        <TopBlockMobile showModal={() => setModalShown(true)} />}
      <DownButton />
      {modalShown && <ContactModal onClose={() => setModalShown(false)} onSend={() => {
        setModalShown(false)
        onMessageSend()  
      }}/>}
      {isDesktop ? <MotivationBlock /> : <MotivationBlockMobile />}
      <div style={{height: '200vh'}}/>
      
    </div>
  );
}

export default App;

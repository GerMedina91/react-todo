import React from "react";

const ModalContext = React.createContext();

function ModalProvider({children}){

    const [visible, setVisible] = React.useState(false);

    return(
        <ModalContext.Provider value={{visible,setVisible}}>
            {children}
        </ModalContext.Provider>
    );
}

export { ModalContext, ModalProvider};
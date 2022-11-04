import React from "react";

function useLocalStorage(itemName,itemValue) {

    const [item, setItem] = React.useState(itemValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState({isError: false, error: ''});

    React.useEffect(() => {
        setTimeout(()=> {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
                
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(itemValue));
                    parsedItem = itemValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
            } catch (err) {
                setError(
                    {
                        isError: true,
                        error: err
                    }
                )
            } finally {
                setLoading(false);     
            }
        },2000)
    })

    const saveItem = (newItem) => {
        try {
            const stringItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringItem)
            setItem(newItem);
        } catch (err) {
            setError(
                {
                    isError: true,
                    error: err
                }
            )
        }
        
    };

    return {
        item,
        saveItem,
        loading,
        error
    };
}

export { useLocalStorage }
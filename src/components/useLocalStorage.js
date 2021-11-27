import React from 'react';

function useLocalStorage( itemName, initialValue ) {
  
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
  
    const [ items, setItem ] = React.useState( initialValue );
  
    React.useEffect(() => {
      setTimeout(() => {
  
        try {
          //  CambiarLLamamos el item "Task_v1" de nuestro localStorage 
          const localStorageItem = localStorage.getItem( itemName);
          //  Variable que almacenará las tareas
          let parsedItem;
  
          if ( !localStorageItem ) {
            localStorage.setItem( itemName, JSON.stringify( initialValue ) );
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse( localStorageItem );
          }
  
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
  
      }, 1500);
    }, []);
  
    /**
     * Función para poder modificar los valos en el localStorage
     * - Se utiliza el item "Task_v1" para los valores
     */
    const saveChangeItem = ( newItem ) => {
      try {
        const stringifiedItem = JSON.stringify( newItem );
        localStorage.setItem( itemName, stringifiedItem );
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    }
  
    return { items, saveChangeItem, loading, error };
}

export { useLocalStorage };
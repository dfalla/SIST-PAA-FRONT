import { Dispatch, SetStateAction, createContext, memo, useEffect, useState } from 'react';
import { SafeAny } from '@/common';
import { Filters } from '@/interfaces';
interface AppContextProps {
    isOpen         : boolean;
    filters        : Filters;
    closeModal     : ()=> void;
    openModal      : () => void;
    setFilters     : Dispatch<SetStateAction<Filters>>;
    setIsOpen      : Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<SafeAny> = memo(( {children} ) => {

    const [filters, setFilters] = useState<Filters>({
        active: 'true',
    });

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        console.log("isOpen", isOpen)
    }, [isOpen]);

    const openModal =()=>{
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
      };


    return ( 
        <AppContext.Provider
            value={{ 
                filters,
                isOpen,
                setFilters,
                closeModal,
                openModal,
                setIsOpen,
            }}
        >
            { children }
        </AppContext.Provider>
    )
}) 


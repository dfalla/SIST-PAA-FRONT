import { Dispatch, SetStateAction, createContext, memo, useState } from 'react';
import { SafeAny } from '@/common';
import { Filters } from '@/interfaces';
interface AppContextProps {
    filters: Filters;
    setFilters: Dispatch<SetStateAction<Filters>>
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<SafeAny> = memo(( {children} ) => {

    const [filters, setFilters] = useState<Filters>({
        active: 'true',
    });


    return ( 
        <AppContext.Provider
            value={{ 
                filters,
                setFilters
            }}
        >
            { children }
        </AppContext.Provider>
    )
}) 


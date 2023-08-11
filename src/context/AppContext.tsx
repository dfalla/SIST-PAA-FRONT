import { createContext, memo } from 'react';
import { SafeAny } from '@/common';
interface AppContextProps {
    logout: () => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<SafeAny> = memo(( {children} ) => {

    const logout = () => {
        localStorage.removeItem('profile');
    }

    return ( 
        <AppContext.Provider
            value={{ 
                logout,
            }}
        >
            { children }
        </AppContext.Provider>
    )
}) 


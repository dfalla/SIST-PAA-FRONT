import { createContext, useState, memo, Dispatch, SetStateAction } from 'react';
import { SafeAny } from '@/common';
import { Profile } from '@/interfaces';


interface AppContextProps {
    profile: Profile | null;
    setProfile: Dispatch<SetStateAction<Profile | null>>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<SafeAny> = memo(( {children} ) => {
    const [profile, setProfile] = useState<Profile | null>(null);

    return ( 
        <AppContext.Provider
            value={{ 
                profile,
                setProfile,
                
            }}
        >
            { children }
        </AppContext.Provider>
    )
}) 


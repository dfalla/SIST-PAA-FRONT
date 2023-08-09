import { createContext, useContext, useState, memo, Dispatch, SetStateAction } from 'react';
import { SafeAny } from '@/common';

export interface Sale {
    // id_producto?:string;
    // cantidad? : number;
    // precio?: number;
    // producto: string;
    // marca: string;
    // subTotal: number;
}

export interface AppContextProps {
    name: string,
    setName: Dispatch<SetStateAction<string>>
    // sales: Sale[];
    // cantidad: number;
    // edit: boolean;
    // nameProduct: string;
    // idMarcaProduct: string;
    // productRepeatInTheSaleCart: boolean;
    // productToEdit: Sale | null;
    // addSale: (sale: Sale) => void;
    // calculateCantidad: (cantidad: number) => void;
    // deleteSale: (id_sale: string) => void;
    // deleteAllSales: () => void;
    // getproductToEdit: (product: Sale) => void;
    // setEdit: Dispatch<SetStateAction<boolean>>;
    // setIdMarcaProduct: Dispatch<SetStateAction<string>>;
    // setNameProduct: Dispatch<SetStateAction<string>>;
    // setProductRepeatInTheSaleCart: Dispatch<SetStateAction<boolean>>;
    // setProductToEdit: (value: React.SetStateAction<Sale | null>) => void;
    // setSales: Dispatch<SetStateAction<Sale[]>>;
    // totalSale: () => number;
    // updateSales: (product: Sale) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<SafeAny> = memo(( {children} ) => {
    const [name, setName] = useState('Daniel');

    return ( 
        <AppContext.Provider
            value={{ 
                name,
                setName
            }}
        >
            { children }
        </AppContext.Provider>
    )
}) 

export const useAppContext = () => {
    const context = useContext(AppContext);
  
    if (!context) {
      throw new Error('useSales debe ser utilizado dentro de un SalesProvider');
    }
  
    return context;
};
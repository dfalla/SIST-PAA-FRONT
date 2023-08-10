import { useContext } from "react";
import { AppContext } from ".";

export const useAppContext = () => {
    const context = useContext(AppContext);
  
    if (!context) {
      throw new Error('useSales debe ser utilizado dentro de un SalesProvider');
    }
  
    return context;
};

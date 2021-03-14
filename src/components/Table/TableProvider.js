import React, {createContext} from 'react';

const TableContext = createContext(null);

function TableProvider({children}) {


    return (
        <TableContext.Provider value={[heartbeat, setHeartbeat]}>
            {children}
        </TableContext.Provider>
    );
}

export default TableProvider;
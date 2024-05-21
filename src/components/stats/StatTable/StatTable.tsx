import React from 'react';
import { TableMain, Td, Th, Tr } from "./StatTableElements.ts";

export interface StatTableData{
    _id:string,
    total:number,
}
export interface StatTableProps{
    data:StatTableData[],
    _idHeader:string,
    valueHeader:string,
}
export default function StatTable({data,_idHeader,valueHeader}:StatTableProps){
    return(
        <TableMain>
            <Tr>
                <Th>{_idHeader}</Th>
                <Th>{valueHeader}</Th>
            </Tr>
            {data.map((dataElement)=>(
                <Tr key={dataElement._id}>
                    <Td>{dataElement._id}</Td>   
                    <Td>{dataElement.total}</Td>   
                </Tr>
            ))}
        </TableMain>
    );
}
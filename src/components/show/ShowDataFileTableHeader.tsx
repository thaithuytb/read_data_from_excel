import React from "react";
import "./show.css";

interface PropsDataHeader {
    PropsDataHeader: any[],
}

const ShowDataFileTableHeader:React.FC <PropsDataHeader> = (props)=> {
    const { PropsDataHeader } = props;
    // console.log(PropsDataHeader);
    return(
            <tr className="border_rows">
                { 
                PropsDataHeader.map((item,index) => {
                    return(<th className="border_cols" key={index}>{item}</th>) 
                })
                } 
            </tr>
        );
    }
export default ShowDataFileTableHeader;
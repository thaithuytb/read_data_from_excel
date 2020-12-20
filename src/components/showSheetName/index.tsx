import React, { useState } from 'react';
import "./styles.css";
interface propsShowSheetName {
    dataSheetNames: any;
    handlyClickSheetName: any;
}

const ShowSheetName:React.FC <propsShowSheetName> = (props)=>{
    

    const [selected, setSelected] = useState(0);
    const {dataSheetNames, handlyClickSheetName } = props;
    // console.log(dataSheetNames);
    return(
        <div className="wp__propsShowSheetName">
            <div>Danh sách các sheet name:</div>
            <div className="wp__sheetName">
            {dataSheetNames.map((item:any,index:number) => {
                if( index === selected ) {
                    return (<div key={index} 
                        className = "sheetNameSeLected"
                        onClick = {() => { 
                            handlyClickSheetName(index);
                        }}
                        >{item}</div>)
                }
                else {
                    return (<div key={index} 
                        className = "sheetName"
                        onClick = {() => { 
                            handlyClickSheetName(index);
                            setSelected(index);
                        }}
                        >{item}</div>)

                }
                
            })}
        </div>

        </div>
         )
}

export default ShowSheetName;
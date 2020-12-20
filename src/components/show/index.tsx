import React from "react";
import "./show.css";
import ShowDataFileTableContent from "./ShowDataFileTableContent";
import ShowDataFileTableHeader from "./ShowDataFileTableHeader";
interface PropsData {
    dataOfFile: any,
}


const ShowFile:React.FC <PropsData> = (props)=> {
    const { dataOfFile } = props;
    const title:string[] = Object.keys(dataOfFile[0]);
    return(
        <div className="wpFile">    
            <table> 
                <ShowDataFileTableHeader PropsDataHeader={title} />
                {
                    dataOfFile.map((data:any, index:number)=>{
                        const newData:any[] = Object.values(data);
                        return <ShowDataFileTableContent 
                        PropsDataContent = {newData}
                        key = {index}
                        />

                    })
                }
                    
            </table>
        </div>
        );
    }

export default ShowFile;
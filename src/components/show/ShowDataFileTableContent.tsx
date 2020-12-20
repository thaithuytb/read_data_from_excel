import React from "react";
import "./show.css";
interface PropsDataContent {
    PropsDataContent: any[],
    key: number
}

const ShowDataFileTableContent:React.FC <PropsDataContent> = (props)=> {
    const { PropsDataContent } = props;
    // console.log(PropsDataContent);
    return(
          <tr className="border_rows">
            { 
             PropsDataContent.map((item,index) => {
                return(<td className="border_cols" key={index}>{item}</td>)
                })
            } 
            </tr>
      );
}

export default ShowDataFileTableContent;
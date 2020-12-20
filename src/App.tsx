import React, { useState } from "react";
import ShowFile from './components/show/index';
import ShowSheetName from "./components/showSheetName/index";
import * as XLSX from "xlsx";

interface State {
  dataFile: any,
  listSheetNames: string[],
  nameFile:any
}

const App:React.FC = () => {
  // use state
  const [data, setData] = React.useState<State | any>();
  // ==================////============================
  //function readFile
  const readFile = (nameFile:any) => {
    // console.log(nameFile[0].name);
    const promise = new Promise((resolve,reject)=>{

      // create 1 fileReader
      const fileReader = new FileReader();
      // read content file nameFile when finally fileReader.result will is object ArrayBuffer
      fileReader.readAsArrayBuffer(nameFile);
      //handly error
      fileReader.onerror = (ex) => {
        console.log(ex);
      };
      //handly load
      fileReader.onload = () => {
        const bufferArray = fileReader.result;
        
        const workbook = XLSX.read(bufferArray,{type:"buffer"});
        const listSheetNames = workbook.SheetNames;
        //Lấy tên sheet đầu tiên
        const wsname = workbook.SheetNames[0];
        //Lấy nội dung trong trang sheet đầu
        const ws = workbook.Sheets[wsname];
        // console.log(ws);
        const dataFile = XLSX.utils.sheet_to_json(ws);
        //data
        resolve({dataFile,listSheetNames,nameFile});
        // console.log(data);
      }
    });
    promise
      .then((value) => {
        setData(value);
        // console.log(value);
      })    
  }
  // ===================////////////======================
  //function click sheet
  const handlyClickSheetName = (index:number)=> {
    // console.log(index);
     if (data) {
       const nameFile = data.nameFile;
        // console.log(nameFile[0].name);
      const newPromise = new Promise((resolve,reject)=>{

        // create 1 fileReader
        const fileReader = new FileReader();
        // read content file nameFile when finally fileReader.result will is object ArrayBuffer
        fileReader.readAsArrayBuffer(nameFile);
        //handly error
        fileReader.onerror = (ex) => {
          console.log(ex);
        };
        //handly load
        fileReader.onload = () => {
          const bufferArray = fileReader.result;
          
          const workbook = XLSX.read(bufferArray,{type:"buffer"});
          const listSheetNames = workbook.SheetNames;
          //Lấy tên sheet đầu tiên
          const wsname = workbook.SheetNames[index];
          //Lấy nội dung trong trang sheet đầu
          const ws = workbook.Sheets[wsname];
          // console.log(ws);
          const dataFile = XLSX.utils.sheet_to_json(ws);
          //data
          resolve({dataFile,listSheetNames,nameFile});
          // console.log(data);
        }
      });
      newPromise
        .then((value) => {
          setData(value);
          // console.log(value);
      }) 
     }
  }
  return(
    <div>
      <form>
        <input type="file" onChange = {  
          (e) => {
            // get file type array like object
            const fileArrayLikeObj:any = e.target.files;
            // const File: string[] = Array.from(fileArrayLikeObj);
            readFile(fileArrayLikeObj[0]);
          }
        }/>
      </form>
      {/* conditional */}
      { data && <ShowSheetName dataSheetNames={data.listSheetNames}
      handlyClickSheetName = {handlyClickSheetName}
      /> }
      { data && <ShowFile dataOfFile = { data.dataFile }/>}
      
    </div>
  )
}

export default App;

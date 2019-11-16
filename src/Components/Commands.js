import { readFileSync, writeFileSync } from 'fs';

const incr_attended = (subj)=>{
    let studList = [];
    try{
        studList = JSON.parse(readFileSync("db.json"));
    } catch(e){
       console.log(e);
    }

    let index = studList.findIndex((x)=> x.subj === subj);
    console.log(studList);
    studList[index] += 1;  
    try {
        writeFileSync("db.json", JSON.stringify(studList));
        console.log("success");
      } catch (e) {
        //console.log(e);
      }

    };


export default {
    incr_attended
};


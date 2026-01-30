import { dbPromise } from "./offlinedb";


export async function offlineSave(formRef:React.RefObject<HTMLFormElement>){
    const db =await dbPromise
   try{

       await db.put("pendingForms",{
           id:crypto.randomUUID,
           data:formRef,
           createdAt:Date.now(),
        })
        console.log("Form saved")
        return true
    }catch(err){
         console.log("Saving failed")
        return false
    }

}
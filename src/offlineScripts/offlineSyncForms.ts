import { dbPromise } from "./offlinedb";


export async function offlineSyncForms(sendToServer:(formData:unknown)=>void){
    const db =await dbPromise
    const forms= await db.getAll("pendingForms")
    for (const form of forms){
            try {
                await sendToServer(form.data)
                await db.delete('pendingForms',form.id)
            }catch(err){
                console.log("sync Failed",err)
            }finally{
                console.log("call completed")
            }
    }
}
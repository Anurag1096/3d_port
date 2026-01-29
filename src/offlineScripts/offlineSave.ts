import { dbPromise } from "./offlinedb";


export async function offlineSave(formData: unknown){
    const db =await dbPromise
    await db.put("pendingForms",{
        id:crypto.randomUUID,
        data:formData,
        createdAt:Date.now(),
    })
}
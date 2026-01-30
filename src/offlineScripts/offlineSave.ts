import { dbPromise } from "./offlinedb";


export async function offlineSave(formRef:React.RefObject<HTMLFormElement>){
    const db =await dbPromise
    await db.put("pendingForms",{
        id:crypto.randomUUID,
        data:formRef,
        createdAt:Date.now(),
    })
}
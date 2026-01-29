
import { openDB } from "idb";   


export const dbPromise=openDB("offlineFormsDB",1,{
upgrade(db){
    if(!db.objectStoreNames.contains("pendingForms")){
        db.createObjectStore("pendingForms",{
            keyPath:"id",
        })
    }
}
});


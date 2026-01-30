import { dbPromise } from "./offlinedb";
import { saveToEmailjs } from "../saveToEmailjs";
interface Props {
  serviceKey: string;
  templateKey: string;
  publicKkey: string;
}

export async function offlineSyncForms({
  serviceKey,
  templateKey,
  publicKkey,
}: Props) {
  const db = await dbPromise;
  const forms = await db.getAll("pendingForms");
  for (const form of forms) {
    const formRef = form.data;
    try {
      await saveToEmailjs({ publicKkey, formRef, templateKey, serviceKey });
      await db.delete("pendingForms", form.id);
    } catch (err) {
      console.log("sync Failed", err);
    } finally {
      console.log("call completed");
    }
  }
}

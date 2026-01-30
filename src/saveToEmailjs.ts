import emailjs from "@emailjs/browser";

interface Props {
  serviceKey: string;
  templateKey: string;
  formRef: React.RefObject<HTMLFormElement>;
  publicKkey: string;
}

export async function saveToEmailjs({
  serviceKey,
  templateKey,
  formRef,
  publicKkey,
}: Props):Promise<boolean> {
  if (!formRef.current) {
    console.error("Form reference is null");
    return false;
  }

  try {
    await emailjs.sendForm(serviceKey, templateKey, formRef.current, {
      publicKey:publicKkey,
    });

    console.log("SUCCESS!");
    return true
  } catch (error: any) {
    console.error("FAILED...", error?.text || error);
    return false    
  }
}

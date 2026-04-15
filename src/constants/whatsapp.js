/** Link para abrir o WhatsApp da clínica com mensagem padrão de agendamento */
export const WHATSAPP_AGENDAR_URL =
  "https://api.whatsapp.com/send?phone=5511999716789&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";

const WHATSAPP_PHONE = "5511999716789";

export function getWhatsappEspecialidadeUrl(titulo) {
  const mensagem = `Tenho interesse em saber mais sobre ${titulo}`;
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(mensagem)}`;
}

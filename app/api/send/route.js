import { Resend } from 'resend';
import { EmailTemplate } from '../../_components/email-template';
const resend = new Resend(re_Ly2gqh3R_8dE4A5iZYdVkmwJQrUTXkbAS);

export async function POST(request) {
  const {cart,total, name,whatsappNumber,notes,address} =await request.json()

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['deekhaled7@gmail.com'],
      subject: 'Order ya boqlozzz',
      react: <EmailTemplate userName={name} whatsappNumber={whatsappNumber} 
      notes={notes} address={address} cart={cart} total={total} 
      />,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

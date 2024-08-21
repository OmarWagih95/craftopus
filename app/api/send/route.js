import { Resend } from 'resend';
import { EmailTemplate } from '../../_components/email-template';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const {cart,total,name,whatsappNumber,notes,address} =await request.json()
      console.log(name)
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

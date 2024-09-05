import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function GET() {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY)

        const { data } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: 'gabrielmatheus@casasandreluiz.org.br',
            subject: 'Aprendendo Resend Email',
            html: "<p> Estou aprendendo NextJS e Resend Email por causa do Thiaguinho P8</p> <strong>Ele é bem legal</strong>"
        });

        return NextResponse.json({ message: "Email sent", data })
    } catch (error) {
        console.error("Erro ao enviar email: ", error);
        return NextResponse.json({ error: "Deu erro" || "Erro desconhecido" });
    }
}

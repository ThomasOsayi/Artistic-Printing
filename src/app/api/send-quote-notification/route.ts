import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, company, service, quantity, urgency, message } = body

    const { data, error } = await resend.emails.send({
      from: 'Artistic Printing Website <onboarding@resend.dev>',
      to: ['design@artisticprinting.com'],
      subject: `New Quote Request — ${firstName} ${lastName}${company ? ` (${company})` : ''}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0f172a; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #06b6d4; margin: 0; font-size: 20px;">New Quote Request</h1>
            <p style="color: #94a3b8; margin: 8px 0 0; font-size: 14px;">Submitted via artisticprinting.com</p>
          </div>
          
          <div style="background: #ffffff; padding: 32px; border: 1px solid #e2e8f0; border-top: none;">
            <h2 style="color: #0f172a; font-size: 16px; margin: 0 0 16px; padding-bottom: 12px; border-bottom: 2px solid #f1f5f9;">
              Contact Information
            </h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; width: 120px;">Name</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${firstName} ${lastName}</td>
              </tr>
              ${company ? `<tr>
                <td style="padding: 8px 0; color: #64748b;">Company</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${company}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 8px 0; color: #64748b;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0891b2; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;">Phone</td>
                <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #0891b2; text-decoration: none;">${phone}</a></td>
              </tr>
            </table>

            ${service || quantity || urgency ? `
              <h2 style="color: #0f172a; font-size: 16px; margin: 24px 0 16px; padding-bottom: 12px; border-bottom: 2px solid #f1f5f9;">
                Project Details
              </h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                ${service ? `<tr>
                  <td style="padding: 8px 0; color: #64748b; width: 120px;">Service</td>
                  <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${service}</td>
                </tr>` : ''}
                ${quantity ? `<tr>
                  <td style="padding: 8px 0; color: #64748b;">Quantity</td>
                  <td style="padding: 8px 0; color: #0f172a;">${quantity}</td>
                </tr>` : ''}
                ${urgency ? `<tr>
                  <td style="padding: 8px 0; color: #64748b;">Urgency</td>
                  <td style="padding: 8px 0; color: ${urgency === 'Rush' ? '#dc2626' : '#0f172a'}; font-weight: ${urgency === 'Rush' ? '700' : '400'};">${urgency}</td>
                </tr>` : ''}
              </table>
            ` : ''}

            <h2 style="color: #0f172a; font-size: 16px; margin: 24px 0 16px; padding-bottom: 12px; border-bottom: 2px solid #f1f5f9;">
              Message
            </h2>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 14px; color: #334155; line-height: 1.6;">
              ${message || '<em style="color: #94a3b8;">No message provided</em>'}
            </div>
          </div>

          <div style="background: #f8fafc; padding: 20px 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px; text-align: center;">
            <a href="https://artistic-printing.vercel.app/admin/quotes" 
               style="display: inline-block; background: #06b6d4; color: #ffffff; padding: 10px 24px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600;">
              View in Dashboard →
            </a>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Email notification error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
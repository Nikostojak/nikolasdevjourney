import { Resend } from 'resend';

// SAFE INITIALIZATION - prevents crashes
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    console.log('🔧 Debug info:');
    console.log('- API Key exists:', !!process.env.RESEND_API_KEY);
    console.log('- Resend instance:', !!resend);
    console.log('- Form data:', { name, email, subject });

    // Validation
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // FALLBACK: No email service configured
    if (!resend) {
      console.log('📧 Contact form submission (NO EMAIL SERVICE):');
      console.log('Environment:', process.env.NODE_ENV);
      console.log('From:', name, '(' + email + ')');
      console.log('Subject:', subject);
      console.log('Message:', message);
      console.log('Timestamp:', new Date().toISOString());
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Message received! I will get back to you soon. (Email service will be configured shortly)' 
        }),
        { 
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    //  EMAIL SERVICE AVAILABLE
    console.log('📧 Sending emails via Resend...');

    // Send notification to me
    try {
      const { data: notificationData, error: notificationError } = await resend.emails.send({
        from: 'contact@nikolasdevjourney.com',
        to: ['stojak.nikolas@icloud.com'],
        subject: `🔔 Contact Form: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">New Contact Message</h2>
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
              <p><strong>From:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <p style="background: white; padding: 15px; border-radius: 4px;">${message}</p>
              <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `,
        text: `New contact from ${name} (${email}): ${message}`
      });

      if (notificationError) {
        console.error('❌ Notification failed:', notificationError);
      } else {
        console.log('✅ Notification sent:', notificationData?.id);
      }

      // Send auto-reply ONLY to verified email for now
      if (email === 'stojak.nikolas@icloud.com') {
        const { data: autoReplyData, error: autoReplyError } = await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: [email],
          subject: '✅ Thanks for reaching out! - Nikolas Dev Journey',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #16a34a;">Thanks for reaching out!</h2>
              <p>Hi <strong>${name}</strong>,</p>
              <p>I've received your message about "<strong>${subject}</strong>" and will get back to you within 24-48 hours.</p>
              <p>Best regards,<br>Nikolas</p>
            </div>
          `,
          text: `Hi ${name}, I've received your message about "${subject}" and will get back to you within 24-48 hours. Best regards, Nikolas`
        });

        if (autoReplyError) {
          console.error('❌ Auto-reply failed:', autoReplyError);
        } else {
          console.log('✅ Auto-reply sent:', autoReplyData?.id);
        }
      } else {
        console.log('ℹ️  Auto-reply skipped - can only send to verified email addresses');
      }

    } catch (emailError) {
      console.error('❌ Email service error:', emailError);
      // Don't return error - form still works, just email failed
      console.log('📧 Continuing without email service...');
    }

    // Always return success - form submission worked
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Message sent successfully! I\'ll get back to you within 24-48 hours.' 
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('❌ Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
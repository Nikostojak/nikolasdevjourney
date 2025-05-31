// app/api/contact/route.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

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

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.warn('⚠️  RESEND_API_KEY not configured, logging message instead');
      console.log('📧 Contact form submission:', {
        name, email, subject, message,
        timestamp: new Date().toISOString()
      });
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Message logged successfully! (Email service not configured yet)' 
        }),
        { 
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    console.log('📧 Processing contact form submission...');
    console.log('From:', name, '(' + email + ')');
    console.log('Subject:', subject);
    console.log('🔑 API Key exists:', !!process.env.RESEND_API_KEY);

    // Send notification email to me
    console.log('📨 Sending notification email...');
    const { data: notificationData, error: notificationError } = await resend.emails.send({
      from: 'contact@nikolasdevjourney.com', 
      to: ['stojak.nikolas@icloud.com'],  
      subject: `🔔 Contact Form: ${subject}`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a202c;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">📧 New Contact Message</h1>
            <p style="color: #e2e8f0; margin: 10px 0 0 0;">From your blog contact form</p>
          </div>
          
          <div style="padding: 30px; background: white; border: 1px solid #e2e8f0;">
            <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="margin: 0 0 15px 0; color: #2d3748;">Contact Details:</h3>
              <p style="margin: 5px 0; color: #4a5568;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0; color: #4a5568;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 5px 0; color: #4a5568;"><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #2d3748; margin-bottom: 15px;">Message:</h3>
              <div style="background: #ffffff; padding: 20px; border-left: 4px solid #667eea; border-radius: 4px; line-height: 1.6; color: #2d3748;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; color: #718096; font-size: 14px;">
                📅 Received: ${new Date().toLocaleString()}<br>
                💌 Reply to: <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Message

From: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Received: ${new Date().toLocaleString()}
Reply to: ${email}
      `.trim()
    });

    // Enhanced logging for notification
    if (notificationError) {
      console.error('❌ Notification email failed:', notificationError);
      console.error('❌ Error details:', JSON.stringify(notificationError, null, 2));
    } else {
      console.log('✅ Notification email sent successfully!');
      console.log('📧 Notification ID:', notificationData?.id);
      console.log('📧 Notification data:', notificationData);
    }

    // Send auto-reply to the user
    console.log('📨 Sending auto-reply to:', email);
    const { data: autoReplyData, error: autoReplyError } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [email],
      subject: '✅ Thanks for reaching out! - Nikolas Dev Journey',
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a202c;">
          <div style="background: linear-gradient(135deg, #48bb78 0%, #38a169 100%); padding: 40px 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">🎉 Thanks for reaching out!</h1>
            <p style="color: #f0fff4; margin: 15px 0 0 0; font-size: 16px;">Your message has been received</p>
          </div>
          
          <div style="padding: 30px; background: white; border: 1px solid #e2e8f0;">
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px; color: #2d3748;">
              Hi <strong>${name}</strong>,
            </p>
            
            <p style="line-height: 1.6; margin-bottom: 20px; color: #4a5568;">
              Thank you for contacting me through my blog! I've received your message about 
              "<strong style="color: #2d3748;">${subject}</strong>" and I appreciate you taking the time to reach out.
            </p>
            
            <div style="background: #f7fafc; border-left: 4px solid #48bb78; padding: 15px; margin: 20px 0; border-radius: 4px;">
              <p style="margin: 0; font-size: 14px; color: #4a5568;">
                <strong>Your message preview:</strong><br>
                ${message.length > 150 ? message.substring(0, 150) + '...' : message}
              </p>
            </div>
            
            <p style="line-height: 1.6; margin-bottom: 20px; color: #4a5568;">
              ⏰ I typically respond within <strong>24-48 hours</strong>. 
              I'll get back to you at: <strong style="color: #2d3748;">${email}</strong>
            </p>
            
            <p style="line-height: 1.6; margin-bottom: 30px; color: #4a5568;">
              In the meantime, feel free to explore my latest blog posts and projects!
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://nikolasdevjourney.com" 
                 style="background: #48bb78; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block;">
                🚀 Visit My Blog
              </a>
            </div>
          </div>
          
          <div style="background: #f7fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; color: #718096; font-size: 14px;">
              Best regards,<br>
              <strong style="color: #2d3748;">Nikolas</strong><br>
              Nikolas Dev Journey
            </p>
            <p style="margin: 10px 0 0 0; color: #a0aec0; font-size: 12px;">
              This is an automated confirmation email.
            </p>
          </div>
        </div>
      `,
      text: `
Hi ${name},

Thank you for contacting me through my blog! I've received your message about "${subject}".

Your message: ${message}

I typically respond within 24-48 hours. I'll get back to you at: ${email}

Visit my blog: https://nikolasdevjourney.com

Best regards,
Nikolas
Nikolas Dev Journey
      `.trim()
    });

    // Enhanced logging for auto-reply
    if (autoReplyError) {
      console.error('❌ Auto-reply failed:', autoReplyError);
      console.error('❌ Auto-reply error details:', JSON.stringify(autoReplyError, null, 2));
    } else {
      console.log('✅ Auto-reply sent successfully!');
      console.log('📧 Auto-reply ID:', autoReplyData?.id);
      console.log('📧 Auto-reply data:', autoReplyData);
    }

    console.log('🏁 Email sending process completed');

    // Return success even if auto-reply fails (main notification is priority)
    if (notificationError) {
      return new Response(
        JSON.stringify({ error: 'Failed to send notification email' }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

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
    console.error('❌ Full error details:', JSON.stringify(error, null, 2));
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
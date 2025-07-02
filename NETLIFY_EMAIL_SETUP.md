# Netlify Forms Email Configuration Setup

## CRITICAL: Email notifications must be configured in Netlify Dashboard after deployment

### Step 1: Deploy to Netlify
1. Deploy your portfolio to Netlify using the existing configuration
2. Wait for deployment to complete successfully

### Step 2: Configure Email Notifications in Netlify Dashboard

1. **Access your Netlify site dashboard**
   - Go to https://app.netlify.com/
   - Navigate to your deployed site

2. **Navigate to Forms section**
   - Click on "Forms" in the left sidebar
   - OR go to: Site Configuration → Forms

3. **Set up Email Notifications**
   - Click "Form notifications" 
   - Scroll to "Form submission notifications"
   - Click "Add notification" → "Email notification"

4. **Configure Notification Settings**
   - **Email to notify**: `ray.thompson@pursuit.org`
   - **Custom email subject**: `Portfolio Contact Form - New Message`
   - **Form**: Select "contact" form (should appear after first form submission)
   - Click "Save"

### Step 3: Test the Form

1. **Submit a test message** from your live Netlify site
2. **Check your email** (including spam/junk folders)
3. **Verify delivery** - emails should arrive from `formresponses@netlify.com`

### Current Form Configuration

✅ **Form HTML is properly configured with:**
- `data-netlify="true"` - Enables Netlify Forms processing
- `name="contact"` - Form identifier for Netlify
- `data-netlify-honeypot="bot-field"` - Spam protection
- `action="/thank-you"` - Success redirect page
- Hidden subject field for email identification

### Troubleshooting

**If emails still don't arrive:**

1. **Check spam folders** thoroughly
2. **Verify form submissions** in Netlify Dashboard → Forms
3. **Try different email address** to test delivery
4. **Contact Netlify Support** if domain email issues persist

**Email delivery issues with domain emails:**
- Some domain emails may be on Netlify's bounce list
- Contact Netlify support with site name and email address
- Consider using Gmail or other major email provider for testing

### Form Submission Flow

1. User fills out contact form on your portfolio
2. Form submits to Netlify (no JavaScript interference)
3. Netlify processes the form data
4. User redirects to `/thank-you` success page
5. Email notification sent to `ray.thompson@pursuit.org`
6. You receive email with form data and reply-to capability

### Important Notes

- Email notifications only work on **deployed Netlify sites**
- Local development forms will NOT send emails
- First deployment may take a few minutes to activate forms
- Dashboard configuration is required even with proper HTML setup
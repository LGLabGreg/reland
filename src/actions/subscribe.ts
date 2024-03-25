'use server';

import mailchimp from '@mailchimp/mailchimp_marketing';
import { newsletterEmailSchema } from '@/lib/zod';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

type SubscribeResponse = {
  success: boolean;
};

export async function subscribe(email: string): Promise<SubscribeResponse> {
  try {
    newsletterEmailSchema.parse({ email });
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID!, {
      email_address: email,
      status: 'subscribed',
    });
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

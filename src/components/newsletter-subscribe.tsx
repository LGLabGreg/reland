'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { subscribe } from '@/actions/subscribe';
import { newsletterEmailSchema } from '@/lib/zod';

const NewsletterSubscribe = () => {
  const [message, setMessage] = useState<string | null>(null);
  const form = useForm<z.infer<typeof newsletterEmailSchema>>({
    resolver: zodResolver(newsletterEmailSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof newsletterEmailSchema>) => {
    setMessage(null);
    const response = await subscribe(values.email);
    if (response.success) {
      setMessage('Thanks for subscribing');
    } else {
      setMessage('There was an error, please try again');
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" noValidate>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subscribe to get latest offers</FormLabel>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <Button type="submit">Subscribe</Button>
              </div>

              <FormMessage>{message}</FormMessage>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default NewsletterSubscribe;

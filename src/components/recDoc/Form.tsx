import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"


// Schema for the phone
const formSchema = z.object({
  description: z
    .string()
    .min(5, {
      message: "Description a bit too short",
    })
    .max(200, {
      message: "Description a bit too long, please summarise it a bit",
    }),
});

const FormDoc = () => {
  // Form setup

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white text-xl">Description</FormLabel>
              {/* <FormDescription className="text-white">
                Enter the details below
              </FormDescription> */}
              <FormControl>
                <Textarea placeholder="How do you feel?" {...field}>
                </Textarea>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default FormDoc;

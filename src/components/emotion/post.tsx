"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { AiOutlineLoading } from "react-icons/ai";
import { FaPaperPlane } from "react-icons/fa";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

import { api } from "@/trpc/react";

import { toast } from "../ui/use-toast";

const formSchema = z.object({
  sentence: z.string().min(1, { message: "Sentence is required" }),
  trained: z.boolean(),
});

export function SubmitForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      trained: true,
    },
  });

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
      toast({
        title: "Success",
        description: "Kalimat telah selesai dicek!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted!",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-700 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
    createPost.mutate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <div className="flex justify-center gap-2 text-center">
          <FormField
            control={form.control}
            name="sentence"
            render={({ field }) => (
              <FormItem className="w-full md:w-2/3">
                <FormControl>
                  <Input placeholder="Aku sayang ibuku!" {...field} />
                </FormControl>
                <FormDescription>
                  Kalian bisa memasukkan kalimat yang ingin dianalisis disini.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            {createPost.isLoading ? (
              <AiOutlineLoading className=" animate-spin" />
            ) : (
              <FaPaperPlane />
            )}
          </Button>
        </div>
        <FormField
          control={form.control}
          name="trained"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-center gap-2">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormDescription className="font-extrabold text-foreground">
                  trained-model
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

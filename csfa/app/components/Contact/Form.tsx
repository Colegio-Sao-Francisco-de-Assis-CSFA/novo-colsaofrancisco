
'use client';

import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { Mail } from "lucide-react";

export default function Form() {
  return (
    <form className="flex max-w-md flex-col gap-4">

      {/* Wrap */}
      <div>
        <div>
            <div className="mb-2 block">
            <Label htmlFor="password1" value="Your name" />
            </div>
            <TextInput id="password1" type="text" placeholder="Fulano de Tal" required icon={Mail} />
        </div>
        <div>
        <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
        </div>
      </div>
     
       {/* Wrap */}
       <div>
      <div>
        <div className="mb-2 block">
            <Label htmlFor="email1" value="Your phone" />
            </div>
            <TextInput id="email1" type="tel" placeholder="(xx) x xxxx-xxxx" required />
        </div>
        <div>
            <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
        </div>
      </div>

       {/* Wrap */}
      <div className="max-w-md">
        <div className="mb-2 block">
            <Label htmlFor="comment" value="Your message" />
        </div>
        <Textarea className="resize-none" id="comment" placeholder="Leave a comment..." required rows={6} />
     </div>


      <Button type="submit">Submit</Button>
    </form>
  );
}

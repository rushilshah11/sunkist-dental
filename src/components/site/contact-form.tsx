import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thank-you"
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>

      <div className="space-y-1.5">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" type="text" required />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="patientType">Patient type</Label>
        <NativeSelect
          id="patientType"
          name="patientType"
          defaultValue="New Patient"
          className="w-full"
        >
          <NativeSelectOption value="New Patient">New Patient</NativeSelectOption>
          <NativeSelectOption value="Existing Patient">Existing Patient</NativeSelectOption>
          <NativeSelectOption value="Other">Other</NativeSelectOption>
        </NativeSelect>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea id="message" name="message" rows={4} required />
      </div>

      <Button type="submit" size="lg">
        Send Message
      </Button>
    </form>
  );
}

"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";
import React from "react";

import { Lexend, DM_Sans } from "next/font/google";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
const lexend = Lexend({
  variable: "--font-Lexend",
  subsets: ["latin"],
  weight: ["600"],
});
const dm_sans = DM_Sans({
  variable: "--font-DM_Sans",
  subsets: ["latin"],
  weight: ["400"],
});
const dm_sans_bold = DM_Sans({
  variable: "--font-DM_Sans",
  subsets: ["latin"],
  weight: ["800"],
});
function InvalidLink() {
    const searchparam = useSearchParams();
    const producturl = searchparam.get("url");
  return (
    <div className="min-h-screen rounded-lg shadow-md bg-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col  ">
        <div className=" py-2 my-2">
            <h3>Order with URL</h3>
        </div>
        <div className="py-4 ">
          <Alert variant="destructive" className="bg-[#FCE6E6]">
            <AlertCircleIcon />
            <AlertTitle>Link Not Supported</AlertTitle>
            <AlertDescription>
              <p>
                Oops! It looks like the link you provided is from a shop that is
                not currently supported by Shopan.
                <br />
                No worries — to continue, please fill in the item details in the
                form below. Our team will carefully review your request and get
                back to you with the next steps shortly.
              </p>
            </AlertDescription>
          </Alert>
        </div>
        <div className="flex flex-col gap-6">
          <form action="post">
            <FieldGroup className="border-t border-gray-300 ">
              <Field className="space-y-4">
                <div className="mt-4">
                  <FieldLabel htmlFor="link">Product Link</FieldLabel>
                  <Input id="link" type="url" value={producturl || ""} disabled />
                  <FieldDescription>
                    Original link provided (for reference)
                  </FieldDescription>
                </div>

                <div>
                  <FieldLabel htmlFor="name">Product Name</FieldLabel>
                  <Input
                    id="name"
                    type="text"
                    required
                    placeholder="Enter product name"
                  />
                </div>

                
                <div>
                  <FieldLabel htmlFor="image">Product Image</FieldLabel>
                  <Input id="image" type="file" accept="image/*" />
                  <FieldDescription>
                    Upload an image to help us verify the item
                  </FieldDescription>
                </div>

               
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <FieldLabel htmlFor="size">Size</FieldLabel>
                    <Input id="size" type="text" placeholder="e.g. M, XL, None if not relate" />
                  </div>
                  <div>
                    <FieldLabel htmlFor="color">Colour</FieldLabel>
                    <Input id="color" type="text" placeholder="e.g. Black" />
                  </div>
                  <div>
                    <FieldLabel htmlFor="model">Model / Version</FieldLabel>
                    <Input id="model" type="text" placeholder="Optional" />
                  </div>
                </div>

             
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <FieldLabel htmlFor="price">Item Price (YEN)</FieldLabel>
                    <Input id="price" type="number" placeholder="e.g. 3500" />
                  </div>

                  <div>
                    <FieldLabel htmlFor="quantity">Quantity</FieldLabel>
                    <Input
                      id="quantity"
                      type="number"
                      required
                      placeholder="e.g. 1"
                    />
                  </div>
                </div>

              
                <div>
                  <FieldLabel htmlFor="notes">Additional Notes</FieldLabel>
                  <textarea
                    id="notes"
                    className="w-full rounded-md border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                    placeholder="Any special request or clarification..."
                    rows={4}
                  />
                </div>
              </Field>

              
              <Field>
                <Button type="submit" className="w-full">
                  Request Price Quote
                </Button>
              </Field>
            </FieldGroup>
          </form>
          <FieldDescription className="px-6 text-center mb-6">
            By clicking continue, you agree to our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Delivery Policy</a>.
          </FieldDescription>
        </div>
      </div>
    </div>
  );
}

export default InvalidLink;

"use client";

import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Lexend, DM_Sans } from "next/font/google";
import axiosInstance from "@/lib/axios";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

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

function LinkForm() {
  const [form, setform] = useState({
    product_url: "",
    product_name: "",
    market_name: "",
    product_price: "",
    quantity: "",
    size: "",
    color: "",
    model: "",
    customer_notes: "",
  });
  
  const [imageFile, setImageFile] = useState(null);
  const router = useRouter();
  const locale = useLocale();

  const handlesubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Create FormData for file upload
      const formData = new FormData();
      
      // Append all form fields
      formData.append('product_url', form.product_url);
      formData.append('product_name', form.product_name);
      formData.append('market_name', form.market_name);
      formData.append('product_price', form.product_price);
      formData.append('quantity', form.quantity);
      formData.append('size', form.size || '');
      formData.append('color', form.color || '');
      formData.append('model', form.model || '');
      formData.append('customer_notes', form.customer_notes || '');
      
      // Append image file if exists
      if (imageFile) {
        formData.append('product_image', imageFile);
      }

      // Send with axios - formData will automatically set correct headers
      await axiosInstance.post('/requestproduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      alert('Request successfully sent');
      router.push(`/${locale}/dashboard/request`);
      
    } catch (error) {
      console.error('Error:', error);
      alert(error.response?.data?.message || 'Request failed');
    }
  };

  return (
    <div className="min-h-screen rounded-lg shadow-md bg-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col">
        <div className="py-2 my-2">
          <h3 className={`${lexend.className}`}>Order with URL</h3>
        </div>
        <div className="flex flex-col gap-6">
          <form onSubmit={handlesubmit}>
            <FieldGroup className="border-t border-gray-300">
              <Field className="space-y-4">
                <div className="mt-4">
                  <FieldLabel className={`${dm_sans_bold.className}`} htmlFor="link">
                    Product Link
                  </FieldLabel>
                  <Input
                    id="link"
                    type="url"
                    placeholder="https://www.youtube.com"
                    value={form.product_url}
                    onChange={(e) => setform({ ...form, product_url: e.target.value })}
                  />
                  <FieldDescription className={`${dm_sans.className}`}>
                    Original link provided (for reference)
                  </FieldDescription>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <FieldLabel className={`${dm_sans_bold.className}`} htmlFor="name">
                      Product Name
                    </FieldLabel>
                    <Input
                      id="name"
                      type="text"
                      required
                      placeholder="Enter product name"
                      value={form.product_name}
                      onChange={(e) => setform({ ...form, product_name: e.target.value })}
                    />
                  </div>
                  <div>
                    <FieldLabel className={`${dm_sans_bold.className}`} htmlFor="market">
                      Market Name
                    </FieldLabel>
                    <Input
                      id="market"
                      type="text"
                      required
                      placeholder="Mercari"
                      value={form.market_name}
                      onChange={(e) => setform({ ...form, market_name: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <FieldLabel className={`${dm_sans_bold.className}`} htmlFor="size">
                      Size
                    </FieldLabel>
                    <Input
                      id="size"
                      type="text"
                      placeholder="e.g. M, XL, None if not relate"
                      value={form.size}
                      onChange={(e) => setform({ ...form, size: e.target.value })}
                    />
                  </div>
                  <div>
                    <FieldLabel className={`${dm_sans_bold.className}`} htmlFor="color">
                      Colour
                    </FieldLabel>
                    <Input
                      id="color"
                      type="text"
                      placeholder="e.g. Black"
                      value={form.color}
                      onChange={(e) => setform({ ...form, color: e.target.value })}
                    />
                  </div>
                  <div>
                    <FieldLabel className={`${dm_sans_bold.className}`} htmlFor="model">
                      Model / Version
                    </FieldLabel>
                    <Input
                      id="model"
                      type="text"
                      placeholder="Optional"
                      value={form.model}
                      onChange={(e) => setform({ ...form, model: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <FieldLabel className={`${dm_sans_bold.className}`} htmlFor="price">
                      Item Price (YEN)
                    </FieldLabel>
                    <Input
                      id="price"
                      type="number"
                      placeholder="e.g. 3500"
                      value={form.product_price}
                      onChange={(e) => setform({ ...form, product_price: e.target.value })}
                    />
                  </div>

                  <div>
                    <FieldLabel className={`${dm_sans_bold.className}`} htmlFor="quantity">
                      Quantity
                    </FieldLabel>
                    <Input
                      id="quantity"
                      type="number"
                      required
                      placeholder="e.g. 1"
                      value={form.quantity}
                      onChange={(e) => setform({ ...form, quantity: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <FieldLabel className={`${dm_sans_bold.className}`} htmlFor="image">
                    Product Image
                  </FieldLabel>
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files[0])}
                  />
                  <FieldDescription>
                    Upload an image to help us verify the item
                  </FieldDescription>
                  {imageFile && (
                    <p className="text-sm text-green-600 mt-1">
                      Selected: {imageFile.name}
                    </p>
                  )}
                </div>

                <div>
                  <FieldLabel className={`${dm_sans_bold.className}`} htmlFor="notes">
                    Additional Notes
                  </FieldLabel>
                  <textarea
                    id="notes"
                    className="w-full rounded-md border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                    placeholder="Any special request or clarification..."
                    rows={4}
                    value={form.customer_notes}
                    onChange={(e) => setform({ ...form, customer_notes: e.target.value })}
                  />
                </div>
              </Field>

              <Field>
                <Button type="submit" className={`${lexend.className} w-full cursor-pointer`}>
                  Request Price Quote
                </Button>
              </Field>
            </FieldGroup>
          </form>
          <FieldDescription className="px-6 text-center mb-6">
            By clicking continue, you agree to our <a href="#">Terms of Service</a> and{" "}
            <a href="#">Delivery Policy</a>.
          </FieldDescription>
        </div>
      </div>
    </div>
  );
}

export default LinkForm;
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Lexend, DM_Sans } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

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

function Login() {
  const router = useRouter();
  const locale = useLocale();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await login(form.email, form.password);
      alert('Login successful');
      router.push(`/${locale}/dashboard/profile`); 
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
      alert(error.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };
  const LG = useTranslations('Login');
  return (
    <div className="bg-background flex min-h-screen flex-col flexCenter gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <Link href="/" className="shrink-0">
                  <Image
                    src="/logoshoppyJapan.png"
                    width={160}
                    height={50}
                    alt="Shopan Logo"
                    className="h-10 w-auto"
                  />
                </Link>
                <h3 className={`${lexend.className}`}>{LG('welcomeText')}</h3>
                <FieldDescription>
                  {LG('registerText')} <a href="/register">{LG('ctaRegister')}</a>
                </FieldDescription>
              </div>
              
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded text-sm">
                  {error}
                </div>
              )}

              <Field>
                <FieldLabel htmlFor="email">{LG('emailText')}</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder={LG('emailPlaceHolder')}
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
                <FieldLabel htmlFor="password">{LG('passwordText')}</FieldLabel>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })} 
                />
                <a className={`${dm_sans.className} text-xs underline`} href="/">
                  {LG('forgotText')}
                </a>
              </Field>
              
              <Field>
                <Button 
                  type="submit" 
                  className="cursor-pointer" 
                  disabled={loading}
                >
                  {loading ? 'Logging in...' : LG('loginText')}
                </Button>
              </Field>
            </FieldGroup>
          </form>
          <FieldDescription className="px-6 text-center">
            {LG('agreeText')}
            <a href="#">{LG('terms')}</a> and <a href="#">{LG('privacy')}</a>.
          </FieldDescription>
        </div>
      </div>
    </div>
  );
}

export default Login;
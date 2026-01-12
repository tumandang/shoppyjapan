"use client";
import React, { useState } from "react";
import { Lexend, DM_Sans } from "next/font/google";
import Link from "next/link";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useLocale,useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, Home, KeyRound, MoveLeft, MoveRight, User } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import axiosInstance from "@/lib/axios";
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
const steps = [
  { id: 1, name: "Personal", icon: <User /> },
  { id: 1, name: "Address", icon: <Home /> },
  { id: 1, name: "Password", icon: <KeyRound /> },
  { id: 1, name: "Complete", icon: <Check /> },
];
function Register() {
  const router = useRouter();
  const locale = useLocale();
  const rg = useTranslations('Register');
  const [CurrentStep, setCurrentStep] = useState(0);
  const [delta, setDelta] = useState(0);
  const next = () => {
    if (CurrentStep < steps.length - 1) {
      setDelta(+1);
      setCurrentStep(CurrentStep + 1);
    }
  };
  const prev = () => {
    if (CurrentStep > 0) {
      setDelta(-1);
      setCurrentStep((steps) => steps - 1);
    }
  };
    const [form, setform] = useState({
    name: "",
    fullname: "",
    email: "",
    password: "",
    password_confirmation: "",
    telephone: "",
    address1: "",
    address2: "",
    address3: "",
    postcode: "",
    city: "",
    state: "",
    country: "",
  });

  const handlesubmit = async (e)=> {
    e.preventDefault();
    try{
      await axiosInstance.post ('/register',form);
      alert ('Register successfully');
      router.push(`/${locale}/login`); 
    }
    catch(error){
      alert(error.response?.data?.message || 'Register failed');
    }
    
  }
  return (
    <div className="bg-white flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <div className="flex flex-col gap-6">
          <Card className="overflow-hidden p-0">
            <CardContent className="grid p-0 md:grid-cols-2">
              <div className="bg-muted relative hidden md:block">
                <img
                  src="/assets/register_sec.jpg"
                  alt="Image"
                  className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
               
              </div>
              <form className="p-6 md:p-8" onSubmit={handlesubmit}>
                {CurrentStep === 0 && (
                  <motion.div
                    initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <FieldGroup>
                      <div className="flex flex-col  gap-2 ">
                        <h4 className="text-xl font-bold">{rg('page1Title')}</h4>
                        <p className="text-muted-foreground text-balance">
                          {rg('page1Desc')}
                        </p>
                      </div>
                      <div className="">
                        <div className="flexBetween mb-3">
                          <p>{rg('step1')}</p>
                          <p>25%</p>
                        </div>
                        <Progress value={25} className="w-full" />
                      </div>

                      <Field>
                        <FieldLabel htmlFor="name">{rg('nameText')}</FieldLabel>
                        <Input
                          id="name"
                          type="text"
                          placeholder={rg('namePlace')}
                          required
                          value={form.name}
                          onChange={e => setform({...form, name: e.target.value})}
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="fullname">{rg('fullnameText')}</FieldLabel>
                        <Input
                          id="fullname"
                          type="text"
                          placeholder={rg('fullnamePlace')}
                          required
                          value={form.fullname}
                          onChange={e => setform({...form, fullname: e.target.value})}
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="email">{rg('emailText')}</FieldLabel>
                        <Input
                          id="email"
                          type="email"
                          placeholder={rg('emailPlace')}
                          required
                          value={form.email}
                          onChange={e => setform({...form, email: e.target.value})}
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="notel">{rg('notelText')}</FieldLabel>
                        <Input
                          id="notel"
                          type="number"
                          placeholder={rg('notelPlace')}
                          required
                          value={form.telephone}
                          onChange={e => setform({...form, telephone: e.target.value})}
                        />
                      </Field>
                      <Field>
                        <Button onClick={next}>
                          {rg('button.Next')} <MoveRight className="flexCenter" />
                        </Button>
                      </Field>

                      <FieldDescription className="text-center">
                        {rg('descfoot')} <a href="/login">{rg('CTA-signIn')}</a>
                      </FieldDescription>
                    </FieldGroup>
                  </motion.div>
                )}
                {CurrentStep === 1 && (
                  <motion.div
                    initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <FieldGroup className="gap-y-3">
                      <div className="flex flex-col  gap-2 ">
                        <h3 className="text-xl font-bold">{rg('page2.title')}</h3>
                        <p className="text-muted-foreground text-balance">
                          {rg('page2.desc')}
                        </p>
                      </div>
                      <div className="">
                        <div className="flexBetween mb-3">
                          <p>{rg('step2')}</p>
                          <p>50%</p>
                        </div>
                        <Progress value={50} className="w-full" />
                      </div>
                      <Field>
                        <FieldLabel htmlFor="Address">{rg('page2.address1')}</FieldLabel>
                        <Input
                          id="Address"
                          type="text"
                          placeholder={rg('page2.addplace1')}
                          required
                          value={form.address1}
                          onChange={e => setform({...form, address1: e.target.value})}
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="Address">{rg('page2.address2')}</FieldLabel>
                        <Input
                          id="Address"
                          type="text"
                          placeholder={rg('page2.addplace2')}
                          required
                          value={form.address2}
                          onChange={e => setform({...form, address2: e.target.value})}
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="Address">{rg('page2.address3')}</FieldLabel>
                        <Input
                          id="Address"
                          type="text"
                          placeholder={rg('page2.addplace3')}
                          required
                          value={form.address3}
                          onChange={e => setform({...form, address3: e.target.value})}
                        />
                      </Field>
                      <div className="grid grid-cols-2 gap-x-4">
                        <Field>
                          <FieldLabel htmlFor="postcode">{rg('page2.postcode')}</FieldLabel>
                          <Input
                            id="postcode"
                            type="number"
                            placeholder="83000"
                            required
                            value={form.postcode}
                            onChange={e => setform({...form, postcode: e.target.value})}
                          />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="city">{rg('page2.city')}</FieldLabel>
                          <Input
                            id="city"
                            type="text"
                            placeholder={rg('page2.cityplace1')}
                            required
                            value={form.city}
                            onChange={e => setform({...form, city: e.target.value})}
                          />
                        </Field>
                      </div>
                      <div className="grid grid-cols-2 gap-x-4">
                        <Field>
                          <FieldLabel htmlFor="state">{rg('page2.state')}</FieldLabel>
                          <Input
                            id="state"
                            type="text"
                            placeholder={rg('page2.stateplace')}
                            required
                            value={form.state}
                            onChange={e => setform({...form, state: e.target.value})}
                          />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="country">{rg('page2.country')}</FieldLabel>
                          <Input
                            id="country"
                            type="text"
                            placeholder="dropdown nanti"
                            required
                            value={form.country}
                            onChange={e => setform({...form, country: e.target.value})}
                          />
                        </Field>
                      </div>
                      <div className="flexBetween gap-x-4">
                        <Field>
                          <Button onClick={prev}>
                            <MoveLeft className="flexCenter" /> {rg('button.Prev')}
                          </Button>
                        </Field>
                        <Field>
                          <Button onClick={next}>
                            {rg('button.Next')} <MoveRight className="flexCenter" />
                          </Button>
                        </Field>
                      </div>
                      <FieldDescription className="text-center">
                        {rg('descfoot')} <a href="/login">{rg('CTA-signIn')}</a>
                      </FieldDescription>
                    </FieldGroup>
                  </motion.div>
                )}
                {CurrentStep === 2 && (
                  <motion.div
                    initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <FieldGroup>
                      <div className="flex flex-col  gap-2 ">
                        <h4 className="text-xl font-bold">{rg('page3.title')}</h4>
                        <p className="text-muted-foreground text-balance">
                          {rg('page3.desc')}
                        </p>
                      </div>
                      <div className="">
                        <div className="flexBetween mb-3">
                          <p>{rg('step3')}</p>
                          <p>75%</p>
                        </div>
                        <Progress value={75} className="w-full" />
                      </div>
                      <Field>
                        <FieldLabel htmlFor="password">{rg('page3.passwordText')}</FieldLabel>
                        <Input
                          id="password"
                          type="password"
                          placeholder={rg('page3.passwordPlace')}
                          required
                          value={form.password}
                          onChange={e => setform({...form, password: e.target.value})}
                        />
                        <FieldDescription>
                          {rg('page3.descpass')}
                        </FieldDescription>
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="confirmPassword">
                          {rg('page3.confirmPassText')}
                        </FieldLabel>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder={rg('page3.confirmPlace')}
                          required
                          value={form.password_confirmation}
                          onChange={e => setform({...form, password_confirmation: e.target.value})}
                        />
                      </Field>
                      <div className="flexBetween gap-x-4">
                        <Field>
                          <Button onClick={prev}>
                            <MoveLeft className="flexCenter" /> {rg('button.Prev')}
                          </Button>
                        </Field>
                        <Field>
                          <Button onClick={next}>
                            {rg('button.Next')} <MoveRight className="flexCenter" />
                          </Button>
                        </Field>
                      </div>
                      <FieldDescription className="text-center">
                        {rg('descfoot')} <a href="/login">{rg('CTA-signIn')}</a>
                      </FieldDescription>
                    </FieldGroup>
                  </motion.div>
                )}
                {CurrentStep === 3 && (
                  <motion.div
                    initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <FieldGroup>
                      <div className="text-center space-y-6 py-8">
                        <div className="flex justify-center">
                          <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="h-8 w-8 text-green-600" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{rg('page4.title')}</h3>
                          <p className="text-muted-foreground">
                            {rg('page4.desc')}
                          </p>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-4 text-left space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">{rg('name')}:</span>
                            <span className="font-medium">{form.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              {rg('page4.email')}:
                            </span>
                            <span className="font-medium">
                              {form.email}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              {rg('page4.phone')}:
                            </span>
                            <span className="font-medium">{form.telephone}</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Button
                            onClick={prev}
                            variant="outline"
                            className="flex-1"
                          >
                            <MoveLeft className="mr-2 h-4 w-4" />
                            {rg('button.Back')}
                          </Button>
                          <Button className="flex-1 cursor-pointer" type="submit" >    
                           {rg('button.Create')}
                            <Check className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </FieldGroup>
                  </motion.div>
                )}
              </form>
            </CardContent>
          </Card>
          <FieldDescription className="px-6 text-center">
            {rg('footerText')} 
            <a href="#">{rg('terms')}</a>{rg('and')} <a href="#">{rg('privacy')}</a>.
          </FieldDescription>
        </div>
      </div>
    </div>
  );
}

export default Register;

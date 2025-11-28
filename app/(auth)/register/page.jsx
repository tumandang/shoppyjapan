"use client";
import React, { useState } from "react";
import { Lexend, DM_Sans } from "next/font/google";
import Link from "next/link";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
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
              <form className="p-6 md:p-8">
                {CurrentStep === 0 && (
                  <motion.div
                    initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <FieldGroup>
                      <div className="flex flex-col  gap-2 ">
                        <h4 className="text-xl font-bold">Personal Detail</h4>
                        <p className="text-muted-foreground text-balance">
                          Let's start with your basic details
                        </p>
                      </div>
                      <div className="">
                        <div className="flexBetween mb-3">
                          <p>Step 1/4</p>
                          <p>25%</p>
                        </div>
                        <Progress value={25} className="w-full" />
                      </div>

                      <Field>
                        <FieldLabel htmlFor="name">Name</FieldLabel>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Ahmad Mustaqim"
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input
                          id="email"
                          type="email"
                          placeholder="m@example.com"
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="notel">Telephon Number</FieldLabel>
                        <Input
                          id="notel"
                          type="number"
                          placeholder="0123456943"
                          required
                        />
                      </Field>
                      <Field>
                        <Button onClick={next}>
                          Next <MoveRight className="flexCenter" />
                        </Button>
                      </Field>

                      <FieldDescription className="text-center">
                        Already have an account? <a href="/login">Sign In</a>
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
                        <h3 className="text-xl font-bold">Address Details</h3>
                        <p className="text-muted-foreground text-balance">
                          Where should we deliver your orders?
                        </p>
                      </div>
                      <div className="">
                        <div className="flexBetween mb-3">
                          <p>Step 1/4</p>
                          <p>50%</p>
                        </div>
                        <Progress value={50} className="w-full" />
                      </div>
                      <Field>
                        <FieldLabel htmlFor="Address">Address 1</FieldLabel>
                        <Input
                          id="Address"
                          type="text"
                          placeholder="NO 1234"
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="Address">Address 2</FieldLabel>
                        <Input
                          id="Address"
                          type="text"
                          placeholder="Jalan Jati 4/5"
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="Address">Address 3</FieldLabel>
                        <Input
                          id="Address"
                          type="text"
                          placeholder="Bandar Selayang"
                          required
                        />
                      </Field>
                      <div className="grid grid-cols-2 gap-x-4">
                        <Field>
                          <FieldLabel htmlFor="postcode">Postcode</FieldLabel>
                          <Input
                            id="postcode"
                            type="number"
                            placeholder="83000"
                            required
                          />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="city">City</FieldLabel>
                          <Input
                            id="city"
                            type="text"
                            placeholder="Taiping"
                            required
                          />
                        </Field>
                      </div>
                      <div className="grid grid-cols-2 gap-x-4">
                        <Field>
                          <FieldLabel htmlFor="state">State</FieldLabel>
                          <Input
                            id="state"
                            type="text"
                            placeholder="dropdown nanti"
                            required
                          />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="country">Country</FieldLabel>
                          <Input
                            id="country"
                            type="text"
                            placeholder="dropdown nanti"
                            required
                          />
                        </Field>
                      </div>
                      <div className="flexBetween gap-x-4">
                        <Field>
                          <Button onClick={prev}>
                            <MoveLeft className="flexCenter" /> Prev
                          </Button>
                        </Field>
                        <Field>
                          <Button onClick={next}>
                            Next <MoveRight className="flexCenter" />
                          </Button>
                        </Field>
                      </div>
                      <FieldDescription className="text-center">
                        Already have an account? <a href="/login">Sign In</a>
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
                        <h4 className="text-xl font-bold">Create Password</h4>
                        <p className="text-muted-foreground text-balance">
                          Secure your account with a strong password
                        </p>
                      </div>
                      <div className="">
                        <div className="flexBetween mb-3">
                          <p>Step 1/4</p>
                          <p>75%</p>
                        </div>
                        <Progress value={75} className="w-full" />
                      </div>
                      <Field>
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          required
                        />
                        <FieldDescription>
                          Must be at least 8 characters long
                        </FieldDescription>
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="confirmPassword">
                          Confirm Password
                        </FieldLabel>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Re-enter your password"
                          required
                        />
                      </Field>
                      <div className="flexBetween gap-x-4">
                        <Field>
                          <Button onClick={prev}>
                            <MoveLeft className="flexCenter" /> Prev
                          </Button>
                        </Field>
                        <Field>
                          <Button onClick={next}>
                            Next <MoveRight className="flexCenter" />
                          </Button>
                        </Field>
                      </div>
                      <FieldDescription className="text-center">
                        Already have an account? <a href="/login">Sign In</a>
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
                          <h3 className="text-2xl font-bold mb-2">All Set!</h3>
                          <p className="text-muted-foreground">
                            Review your information before submitting
                          </p>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-4 text-left space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Name:</span>
                            <span className="font-medium">Ahmad Mustaqim</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Email:
                            </span>
                            <span className="font-medium">
                              ahmad@example.com
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Phone:
                            </span>
                            <span className="font-medium">012-345-6789</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Button
                            onClick={prev}
                            variant="outline"
                            className="flex-1"
                          >
                            <MoveLeft className="mr-2 h-4 w-4" />
                            Back
                          </Button>
                          <Button className="flex-1">
                            Create Account
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
            By clicking continue, you agree to our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </FieldDescription>
        </div>
      </div>
    </div>
  );
}

export default Register;

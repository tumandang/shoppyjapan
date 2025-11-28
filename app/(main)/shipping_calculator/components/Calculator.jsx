"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plane, Ship } from "lucide-react";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

function Calculator() {
  const [table, settable] = useState([]);
  return (
    <div className="min-h-screen  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Tabs defaultValue="Air Freight">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="Air Freight" className="flex gap-3">
            <Plane size={18} />
            Air Freight
          </TabsTrigger>
          <TabsTrigger value="Sea Freight" className="flex gap-3">
            <Ship size={18} />
            Sea Freight
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Air Freight" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Air Freight</CardTitle>
              <CardDescription>
                Reference:
                <br />
                1. Dimension = Length × Height × Width <br />
                2. Dimension Weight = Dimension / 6000 <br />
                3. Actual Weight = actual weight <br />
                4. Actual Volume Weight = (Dimension Weight + Actual Weight) / 2
              </CardDescription>
            </CardHeader>

            <CardContent className="grid gap-5">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-y-2">
                  <Label>Length (cm)</Label>
                  <Input placeholder="12" />
                </div>
                <div className="flex flex-col gap-y-2">
                  <Label>Height (cm)</Label>
                  <Input placeholder="21" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-y-2">
                  <Label>Width (cm)</Label>
                  <Input placeholder="21" />
                </div>
                <div className="flex flex-col gap-y-2">
                  <Label>Actual Weight (Kg)</Label>
                  <Input placeholder="1.3" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Calculate</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="Sea Freight" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Sea Freight</CardTitle>
              <CardDescription>
                Sea freight calculator coming soon.
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
      </Tabs>
      <div className="bg-white mt-17 p-3 rounded-xl">
        <h3>Summary Result</h3>

        <Table>
          <TableCaption>A Estimate Result of your Shipping</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}

export default Calculator;

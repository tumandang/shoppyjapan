"use client";
import CheckoutComponent from "./components/CheckoutComponent";
import { useParams } from "next/navigation";
export default function CheckoutPage(){
    const { request_id } = useParams();
    return (
        <main className="bg-white w-auto pb-24 grow">
            <CheckoutComponent />
        </main>
    )
}
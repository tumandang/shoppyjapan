import { CheckCircle } from "lucide-react";

export default function PaymentSuccess({ searchParams }) {
  const sessionId = searchParams?.session_id;

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center">
        <div className="mb-6 flex justify-center">
             <div className="bg-green-50 p-4 rounded-full">
               <CheckCircle className="w-12 h-12 text-green-500" />
             </div>
        </div>
          
          <h1 className="text-2xl font-bold text-green-600">
            Payment Successful
          </h1>
          <p className="mt-4">
            Thank you for your payment.
          </p>
      </div>

      {sessionId && (
        <p className="mt-2 text-sm text-gray-500">
          Session ID: {sessionId}
        </p>
      )}
    </main>
  );
}

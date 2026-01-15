import { XCircle, ArrowLeft, RefreshCw } from "lucide-react"; // Optional: UI icons

export default function CancelPaymentPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center">
        
 
        <div className="mb-6 flex justify-center">
          <div className="bg-red-50 p-4 rounded-full">
            <XCircle className="w-12 h-12 text-red-500" />
          </div>
        </div>


        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Payment Cancelled
        </h2>
        <p className="text-slate-600 mb-8">
          Something went wrong with your transaction. Don't worry, no funds were deducted from your account.
        </p>

  
        <div className="space-y-3">
          <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-2">
            <RefreshCw className="w-4 h-4" />
            Try Payment Again
          </button>
          
          <button className="w-full bg-white hover:bg-slate-50 text-slate-600 font-medium py-3 rounded-xl border border-slate-200 transition-all flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Cart
          </button>
        </div>

        <p className="mt-8 text-sm text-slate-400">
          Need help? <a href="#" className="text-blue-500 hover:underline">Contact Support</a>
        </p>
      </div>
    </main>
  );
}
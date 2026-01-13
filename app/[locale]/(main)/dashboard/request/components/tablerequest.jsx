"use client";
import React, { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { useAuth } from "@/context/AuthContext";
function Tablerequest() {
  const [RequestList, setRequestList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { requestlist } = useAuth();
  const statusStyles = {
    new: "bg-purple-100 text-purple-700",
    quoted: "bg-blue-100 text-blue-700",
    pending_payment: "bg-yellow-100 text-yellow-700",
    paid: "bg-emerald-100 text-emerald-700",
    processing: "bg-orange-100 text-orange-700",
    completed: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700",
  };

  useEffect(() => {
    const loadrequest = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await requestlist();
        console.log("Received request data:", data);

        if (Array.isArray(data)) {
          setRequestList(data);
        } else if (data && typeof data === "object") {
          const requests = data.requests || data.data || data.request || [];
          setRequestList(Array.isArray(requests) ? requests : []);
        } else {
          setRequestList([]);
        }
      } catch (err) {
        console.error("Error loading requests:", err);
        setError(
          err.response?.data?.message ||
            err.message ||
            "Failed to load requests"
        );
      } finally {
        setLoading(false);
      }
    };

    loadrequest();
  }, [requestlist]);

  if (loading) {
    return (
      <tr>
        <td colSpan="7" className="px-6 py-12">
          <div className="flex flex-col items-center justify-center gap-3">
            <Spinner className="w-8 h-8 text-orange-500" />
            <p className="text-sm text-slate-500">Loading requests...</p>
          </div>
        </td>
      </tr>
    );
  }

  if (error) {
    return (
      <tr>
        <td colSpan="7" className="px-6 py-12">
          <div className="flex flex-col items-center justify-center gap-2">
            <svg
              className="w-12 h-12 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm font-medium text-red-600">
              Error loading requests
            </p>
            <p className="text-xs text-slate-500">{error}</p>
          </div>
        </td>
      </tr>
    );
  }

  if (RequestList.length === 0) {
    return (
      <tr>
        <td colSpan="7" className="px-6 py-12">
          <div className="flex flex-col items-center justify-center gap-3">
            <svg
              className="w-16 h-16 text-slate-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <p className="text-sm font-medium text-slate-600">
              No requests yet
            </p>
            <p className="text-xs text-slate-400">
              Your product requests will appear here
            </p>
          </div>
        </td>
      </tr>
    );
  }

  return (
    <>
      {RequestList.map((request) => (
        <tr
          key={request.id}
          className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
        >
          <td className="px-6 py-4">
            <div className="flex items-center gap-3 max-w-xs">
              <div className="flex flex-col min-w-0 flex-1">
                <span
                  className="text-sm font-medium text-slate-800 truncate"
                  title={request.product_name}
                >
                  {request.product_name}
                </span>
              </div>
            </div>
          </td>
          <td className="px-6 py-4">
            <span className="text-sm text-slate-600">
              {request.market_name}
            </span>
          </td>
          <td className="px-6 py-4">
            <span className="inline-flex items-center gap-1.5 text-sm text-slate-700">
              {request.quantity}
            </span>
          </td>
          <td className="px-6 py-4">
            <span className="text-sm font-semibold text-slate-800">
              ¥{request.product_price}
            </span>
          </td>
          <td className="px-6 py-4">
            {request.quoted_total !== null ? (
              <span className="text-sm font-semibold text-slate-800">
                ¥{request.quoted_total}
              </span>
            ) : (
              <span className="text-sm font-semibold text-slate-400">-</span>
            )}
          </td>
          <td className="px-6 py-4">
            <div className="flex items-center gap-1.5 text-sm text-slate-500">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize ${
                  statusStyles[request.status.toLowerCase()]
                }`}
              >
                {request.status}
              </span>
            </div>
          </td>
          <td className="px-6 py-4">
            <div className="flex items-center gap-2">
              <button
                className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition-all duration-200 hover:scale-105 cursor-pointer"
                title="View details"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </button>
              {/* Delete */}
              {request.status === "new" && (
                <button
                  className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-all duration-200 hover:scale-105 cursor-pointer"
                  title="Delete request"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              )}
              {request.status === "quoted" && (
                <>
                  <button
                    className="p-2 rounded-lg bg-green-50 hover:bg-green-100 text-green-600 transition-all duration-200 hover:scale-105 cursor-pointer"
                    title="Accept request"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button
                    className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-all duration-200 hover:scale-105 cursor-pointer"
                    title="Cancel request"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}

export default Tablerequest;

"use client";
import React, { useEffect, useState } from "react";
import { requestApi } from "@/lib/api";
import { Spinner } from "@/components/ui/spinner";
import { useAuth } from "@/context/AuthContext";
import Date from "@/components/date";

function Tablerequest() {
  const [RequestList, setRequestList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { requestlist } = useAuth();

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
            <p className="text-sm font-medium text-red-600">Error loading requests</p>
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
            <p className="text-sm font-medium text-slate-600">No requests yet</p>
            <p className="text-xs text-slate-400">Your product requests will appear here</p>
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
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
              #{request.id}
            </span>
          </td>
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
            <span className="text-sm text-slate-600">{request.market_name}</span>
          </td>
          <td className="px-6 py-4">
            <span className="inline-flex items-center gap-1.5 text-sm text-slate-700">

              {request.quantity}
            </span>
          </td>
          <td className="px-6 py-4">
            <span className="text-sm font-semibold text-slate-800">
              RM {request.product_price}
            </span>
          </td>
          <td className="px-6 py-4">
            <div className="flex items-center gap-1.5 text-sm text-slate-500">
              <Date datestring={request.created_at} />
            </div>
          </td>
          <td className="px-6 py-4">
            <div className="flex items-center gap-2">
              <button
                className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition-all duration-200 hover:scale-105"
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
              <button
                className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-all duration-200 hover:scale-105"
                title="Delete request"
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
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}

export default Tablerequest;
"use client";
import React, { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { useAuth } from "@/context/AuthContext";
import { useLocale } from "next-intl";
import { useRouter } from 'next/navigation';
import axiosInstance from "@/lib/axios";
function RequestModal({ modalType, selectedRequest, onClose, onDelete, onAccept, onCancel, onPayment }) {
  if (!modalType || !selectedRequest) return null;
  const statusStyles = {
    new: "bg-purple-100 text-purple-700",
    quoted: "bg-blue-100 text-blue-700",
    pending_payment: "bg-yellow-100 text-yellow-700",
    paid: "bg-emerald-100 text-emerald-700",
    processing: "bg-orange-100 text-orange-700",
    completed: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700",
  };
  const { user } = useAuth();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50 transition-opacity"  onClick={onClose} ></div>
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 z-10 animate-fadeIn">
        {modalType === "view" && (
          <>
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-800">
                  Request Details
                </h3>
                <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                    <path strokeLinecap="round"  strokeLinejoin="round" strokeWidth={2}  d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase">
                  Product Name
                </label>
                <p className="text-sm text-slate-800 mt-1">
                  {selectedRequest.product_name}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase">
                    Market
                  </label>
                  <p className="text-sm text-slate-800 mt-1">
                    {selectedRequest.market_name}
                  </p>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase">
                    Status
                  </label>
                  <div className="mt-1">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize ${
                        statusStyles[selectedRequest.status.toLowerCase()]
                      }`}
                    >
                      {selectedRequest.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase">
                    Quantity
                  </label>
                  <p className="text-sm text-slate-800 mt-1">
                    {selectedRequest.quantity}
                  </p>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase">
                    Item Price
                  </label>
                  <p className="text-sm text-slate-800 mt-1">
                    ¥{selectedRequest.product_price}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase">
                    Total Quote
                  </label>
                  <p className="text-sm text-slate-800 mt-1">
                    {selectedRequest.quoted_total !== null
                      ? `¥${selectedRequest.quoted_total}`
                      : "Not quoted yet"}
                  </p>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase">
                    Estimate MYR
                  </label>
                  <p className="text-sm text-slate-800 mt-1">
                    {selectedRequest.quoted_total !== null
                      ? `RM ${selectedRequest.total_myr}`
                      : "Not quoted yet"}
                  </p>
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase">
                  Notes from admin
                </label>
                <p className="text-sm text-slate-800 mt-1">
                  {selectedRequest.admin_notes}
                </p>
              </div>
            </div>
            <div className="p-6 border-t border-slate-200 flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
              >
                {" "}
                Close
              </button>
            </div>
          </>
        )}

        {modalType === "delete" && (
          <>
            <div className="p-6">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 text-center mb-2">
                Delete Request
              </h3>
              <p className="text-sm text-slate-600 text-center mb-6">
                Are you sure you want to delete the request for{" "}
                <span className="font-semibold">
                  {selectedRequest.product_name}
                </span>
                ? This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={onDelete}
                  className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </>
        )}

        {modalType === "accept" && (
          <>
            <div className="p-6">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 text-center mb-2">
                Accept Quote
              </h3>
              <p className="text-sm text-slate-600 text-center mb-6">
                Are you sure you want to accept the quote of{" "}
                <span className="font-semibold">
                  {" "}
                  {selectedRequest.quoted_total !== null
                    ? `RM ${selectedRequest.total_myr}`
                    : "Not quoted yet"}
                </span>{" "}
                for {selectedRequest.product_name}?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={onAccept}
                  className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  Accept
                </button>
              </div>
            </div>
          </>
        )}

        {modalType === "cancel" && (
          <>
            <div className="p-6">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 text-center mb-2">
                Cancel Request
              </h3>
              <p className="text-sm text-slate-600 text-center mb-6">
                Are you sure you want to cancel the request for{" "}
                <span className="font-semibold">
                  {selectedRequest.product_name}
                </span>
                ?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                >
                  Go Back
                </button>
                <button
                  onClick={onCancel}
                  className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                >
                  Cancel Request
                </button>
              </div>
            </div>
          </>
        )}
        {modalType === "pending_payment" && (
          <div className="p-6 space-y-6">
          
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800">
                  Order Summary
                </h3>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-500">
                    Product
                  </p>
                  <p className="text-sm font-medium text-slate-800">
                    {selectedRequest.product_name}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs uppercase text-slate-500">Market</p>
                    <p className="text-sm">{selectedRequest.market_name}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-slate-500">Quantity</p>
                    <p className="text-sm">{selectedRequest.quantity}</p>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-500">Total (JPY)</span>
                    <span className="font-semibold text-slate-800">
                      {selectedRequest.quoted_total !== null
                        ? `¥${selectedRequest.quoted_total}`
                        : "—"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-sm text-slate-500">
                      Estimated (MYR)
                    </span>
                    <span className="font-semibold text-green-600">
                      {selectedRequest.quoted_total !== null
                        ? `RM ${selectedRequest.total_myr}`
                        : "Not quoted"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

         
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-orange-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>

                </div>
                <h3 className="text-lg font-semibold text-slate-800">
                  Shipping Address
                </h3>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 space-y-3">
                <div>
                  <p className="text-xs uppercase font-semibold text-slate-500">
                    Full Name
                  </p>
                  <p className="text-sm font-medium text-slate-800">
                    {user.customer.Fullname}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs uppercase text-slate-500">Email</p>
                    <p className="text-sm">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-slate-500">Phone</p>
                    <p className="text-sm">{user.customer.Notel}</p>
                  </div>
                </div>

                <div className="text-sm text-slate-700 leading-relaxed bg-white rounded-xl p-4">
                  {user.customer.address.address1}
                  {user.customer.address.address2 && (
                    <>
                      <br />
                      {user.customer.address.address2}
                    </>
                  )}
                  {user.customer.address.address3 && (
                    <>
                      <br />
                      {user.customer.address.address3}
                    </>
                  )}
                  <br />
                  {user.customer.address.postcode} {user.customer.address.city}
                  <br />
                  {user.customer.address.state}, {user.customer.address.country}
                </div>
              </div>
            </div>

    
            <div className="flex gap-3 pt-2">
              <button onClick={onClose} className="flex-1 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition cursor-pointer">
                Cancel
              </button>

              <button disabled={selectedRequest.quoted_total === null} onClick={onPayment}
                className={`flex-1 py-3 rounded-xl font-semibold transition cursor-pointer
            ${selectedRequest.quoted_total !== null
              ? "bg-green-600 hover:bg-green-700 text-white shadow-md"
              : "bg-slate-300 text-slate-500 cursor-not-allowed"
          }`}  >
                Continue to Payment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Tablerequest({ onOpenModal }) {
  const [RequestList, setRequestList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { requestlist } = useAuth();
  const locale = useLocale();
  const router = useRouter();
  const handleCheckout = (request) => {
    router.push(`/${locale}/checkout/${request.id}`);
  };
  const statusStyles = {
    new: "bg-purple-100 text-purple-700",
    quoted: "bg-blue-100 text-blue-700",
    pending_payment: "bg-yellow-100 text-yellow-700",
    paid: "bg-emerald-100 text-emerald-700",
    processing: "bg-orange-100 text-orange-700",
    completed: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700",
    reject: "bg-red-100 text-red-700",
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
                onClick={() => onOpenModal("view", request)}
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

              {request.status === "new" && (
                <button
                  onClick={() => onOpenModal("delete", request)}
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              )}
              {request.status === "cancelled" && (
                <button
                  onClick={() => onOpenModal("delete", request)}
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              )}
              {request.status === "reject" && (
                <button
                  onClick={() => onOpenModal("delete", request)}
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              )}

              {request.status === "quoted" && (
                <>
                  <button
                    onClick={() => onOpenModal("accept", request)}
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
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button onClick={() => onOpenModal("cancel", request)}
                    className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-all duration-200 hover:scale-105 cursor-pointer"
                    title="Cancel request"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                      />
                    </svg>
                  </button>
                </>
              )}

              {request.status === "pending_payment" && (
                <>
                  <button onClick={() => handleCheckout(request)}
                    className="p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-600 transition-all duration-200 hover:scale-105 cursor-pointer"
                    title="Pay Now" >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => onOpenModal("cancel", request)}
                    className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-all duration-200 hover:scale-105 cursor-pointer"
                    title="Cancel request"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
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

export function TablerequestWithModal() {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [modalType, setModalType] = useState(null);
  const locale = useLocale();
  const openModal = (type, request) => {
    setModalType(type);
    setSelectedRequest(request);
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedRequest(null);
  };

  const handleDelete = async () => {
    console.log("Deleting request:", selectedRequest.id);

    try {
      const response = await axiosInstance.post("/requestdelete", {
        request_id: selectedRequest.id,
      });

      console.log("Delete success:", response.data);

      window.location.reload();
    } catch (error) {
      console.error("Delete failed:", error);
      console.error("Error response:", error.response?.data);

      alert(error.response?.data?.message || "Failed to delete request");
    }

    closeModal();
  };
  const payNow = async () => {
    
    try{
      const response = await axiosInstance.post("/stripe/checkout", {
        request_id: selectedRequest.id,
        locale : locale     
      });

      window.location.href = response.data.checkout_url;
    }
    catch(error){
      console.error("Payment failed:", error);
      console.error("Error response:", error.response?.data);

      alert(error.response?.data?.message || "Failed to cancel request");
    }

   
    
  };
  const handleAccept = async () => {
    console.log("Accepting request:", selectedRequest.id);
    try {
      const response = await axiosInstance.post("/requestaccept", {
        request_id: selectedRequest.id,
      });

      console.log("Accept success:", response.data);

      window.location.reload();
    } catch (error) {
      console.error("Accept failed:", error);
      console.error("Error response:", error.response?.data);

      alert(error.response?.data?.message || "Failed to cancel request");
    }
    closeModal();
  };

  const handleCancel = async () => {
    console.log("Canceling request:", selectedRequest.id);

    try {
      const response = await axiosInstance.post("/requestcancel", {
        request_id: selectedRequest.id,
      });

      console.log("Cancel success:", response.data);

      window.location.reload();
    } catch (error) {
      console.error("Cancel failed:", error);
      console.error("Error response:", error.response?.data);

      alert(error.response?.data?.message || "Failed to cancel request");
    }

    closeModal();
  };

  return (
    <>
      <Tablerequest onOpenModal={openModal} />
      <RequestModal
        modalType={modalType}
        selectedRequest={selectedRequest}
        onClose={closeModal}
        onDelete={handleDelete}
        onAccept={handleAccept}
        onCancel={handleCancel}
        onPayment={payNow}
      />
    </>
  );
}

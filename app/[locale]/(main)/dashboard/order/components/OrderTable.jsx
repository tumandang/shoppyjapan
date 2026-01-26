"use client";
import Date from "@/components/Date";
import { Spinner } from "@/components/ui/spinner";
import { useAuth } from "@/context/AuthContext";
import {ChevronDown, ChevronUp,FileImage,Package,MapPin,User,Phone,Mail,Calendar,Truck,CreditCard, Box,Plane,CalendarDaysIcon, CreditCardIcon} from "lucide-react";
import React, { useEffect, useState } from "react";

function OrderTable() {
  const { orderlist, user } = useAuth();
  const [OrderList, setOrderList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedOrders, setExpandedOrders] = useState({});
  const [activeTab, setActiveTab] = useState({});

  const toggleExpand = (orderId) => {
    setExpandedOrders((prev) => ({
      ...prev,
      [orderId]: !prev[orderId],
    }));
  };

  const tabOptions = ["Overview", "Order Details", "Track"];

  const getStatusColor = (status) => {
    const statusColors = {
      paid: "bg-emerald-100 text-emerald-800 border-emerald-200",
      pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
      processing: "bg-blue-100 text-blue-800 border-blue-200",
      shipped: "bg-purple-100 text-purple-800 border-purple-200",
      delivered: "bg-green-100 text-green-800 border-green-200",
      cancelled: "bg-red-100 text-red-800 border-red-200",
    };
    return (
      statusColors[status?.toLowerCase()] ||
      "bg-gray-100 text-gray-800 border-gray-200"
    );
  };

  useEffect(() => {
    const loadrequest = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await orderlist();

        if (Array.isArray(data)) {
          setOrderList(data);
        } else if (data && typeof data === "object") {
          const requests = data.requests || data.data || data.request || [];
          setOrderList(Array.isArray(requests) ? requests : []);
        } else {
          setOrderList([]);
        }
      } catch (err) {
        console.error("Error loading requests:", err);
        setError(
          err.response?.data?.message ||
            err.message ||
            "Failed to load requests",
        );
      } finally {
        setLoading(false);
      }
    };

    loadrequest();
  }, [orderlist]);

  const renderOrderDetails = (order) => {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg p-5 border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <User className="w-4 h-4" />
            Customer Information
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <User className="w-4 h-4 text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500">Customer Name</p>
                <p className="text-sm font-medium text-gray-900 mt-0.5">
                  {user.name || "N/A"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500">Phone Number</p>
                <p className="text-sm font-medium text-gray-900 mt-0.5">
                  {user.customer.Notel || "N/A"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm font-medium text-gray-900 mt-0.5">
                  {user.email || "N/A"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500">Order Date</p>
                <p className="text-sm font-medium text-gray-900 mt-0.5">
                  <Date datestring={order.created_at} />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Shipping Address
          </h3>
          <div className="space-y-2">
            <p className="text-sm text-gray-900 font-medium">
              {user.customer.address.address1} {user.customer.address.address2}{" "}
              {user.customer.address.address3}
            </p>
            <p className="text-sm text-gray-600">
              {user.customer.address.postcode} {user.customer.address.city}{" "}
              {user.customer.address.state}
            </p>
            <p className="text-sm text-gray-600">
              {user.customer.address.country}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Package className="w-4 h-4" />
            Order Items
          </h3>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {order.request?.product_name || "Product Name"}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Qty: {order.request?.quantity || 1} × ¥
                      {order.request?.product_price || "0.00"}
                    </p>
                    <p className="text-xs text-gray-500">
                      Market: {order.request?.market_name}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">
                    ¥{order.request?.product_price * order.request?.quantity}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            Payment Summary
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium text-gray-900">
                ¥{order.request?.product_price * order.request?.quantity}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Domestic Shipping Fee</span>
              <span className="font-medium text-gray-900">
                ¥{order.request?.domestic_shipping || "0.00"}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Service Fee</span>
              <span className="font-medium text-gray-900">
                ¥{order.request?.service_fee || "0.00"}
              </span>
            </div>
            <div className="border-t border-gray-300 pt-3 mt-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-900">
                  Total (JPN)
                </span>
                <span className="text-lg font-bold text-gray-900">
                  ¥{order.request?.quoted_total}
                </span>
              </div>
            </div>
            <div className="border-t border-gray-300 pt-3 mt-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-900">
                  Total (MAS)
                </span>
                <span className="text-lg font-bold text-gray-900">
                  RM {order.amount_myr}
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-gray-200 mt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Payment Method</span>
                <span className="font-medium text-gray-900">
                  {order.request?.payment_method || "Credit Card"}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-gray-600">Payment Status</span>
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium capitalize ${
                    order.request?.status === "paid"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {order.request?.status || "paid"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderOverview = (order) => {
    if (order.status === "processing") {
      return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-700">Order Status</p>
              <p className="text-lg font-semibold text-slate-900">
                Preparing International Shipping
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
              In Preparation
            </span>
          </div>

          <p className="text-sm text-slate-800 leading-relaxed">
            Your item has been successfully purchased and delivered to our Japan
            warehouse. Our team is currently measuring the package and preparing
            the international shipping cost.
          </p>

          <p className="text-sm text-slate-800">
            No action is required from you at this moment. You will be notified
            once the shipping price is ready for payment.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm pt-2">
            <div>
              <p className="text-gray-600 text-xs">Order Number</p>
              <p className="font-medium text-gray-900">#SHP{order.id}</p>
            </div>
            <div>
              <p className="text-gray-600 text-xs">Market</p>
              <p className="font-medium text-gray-900">
                {order.request?.market_name || "—"}
              </p>
            </div>
          </div>
        </div>
      );
    }
  };
  const renderTracking = (order) => {
    const status = order?.status || "preparing_shipping";

    const destination = user?.customer?.address
      ? `${user.customer.address.state}, ${user.customer.address.country}`
      : "Destination Pending";

    const TRACK_STEPS = [
      {
        key: "processing",
        label: "Item in Warehouse / Preparing Shipment",
        desc: "Our team is measuring your package and preparing the international shipping cost. You will be notified once payment is required.",
      },
      {
        key: "pending_payment",
        label: "Awaiting Shipping Payment",
        desc: "Your item is ready! Please pay the international shipping fee to proceed in the overview tab.",
      },
      {
        key: "paid",
        label: "Shipping Payment Received",
        desc: "Thank you! Shipping payment received. Your order is being prepared for dispatch.",
      },
      {
        key: "shipped",
        label: "Shipped to Malaysia",
        desc: "Your item is on the way to Malaysia. You can track its delivery status here.",
      },
      {
        key: "completed",
        label: "Delivered",
        desc: "Delivered! Thank you for shopping with us. Enjoy your item!",
      },
    ];

    let currentStepIndex = 0;

    if (status === "processing") {
      currentStepIndex = 0;
    } else if (status === "pending_payment") {
      currentStepIndex = 1;
    } else if (status === "paid") {
      currentStepIndex = 2;
    } else if (status === "shipped") {
      currentStepIndex = 3;
    } else if (status === "completed") {
      currentStepIndex = 4;
    }

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-gray-200 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-50 p-2.5 rounded-lg">
              <Box className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-500 uppercase ">
                Status
              </p>
              <p className="text-sm font-semibold text-gray-900 mt-0.5 capitalize">
                {order.status}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-blue-50 p-2.5 rounded-lg">
              <CreditCardIcon className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-500 uppercase">
                First Payment
              </p>
              <p className="text-sm font-semibold text-gray-900 mt-0.5 truncate">
                RM {order.amount_myr}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-purple-50 p-2.5 rounded-lg">
              <CalendarDaysIcon className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-500 uppercase ">
                Order Date
              </p>
              <p className="text-sm font-semibold text-gray-900 mt-0.5p">
                <Date datestring={order.created_at} />
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase">
            Shipping Route
          </h3>

          <div className="relative flex items-center justify-between">
           
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center px-52">
              <div className="flex-1 h-0.5 border-t-2 border-dashed  border-orange-200 "></div>
            </div>
            
            
            <RoutePoint label="From" value="Japan Warehouse" />
            <div className="relative z-10 bg-white rounded-full p-2 shadow-md">
              <Plane className="w-6 h-6 text-orange-400" />
            </div>
            <RoutePoint label="To" value={destination} />
          </div>
        </div>


        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Tracking History
          </h3>

          <div className="space-y-6">
            {TRACK_STEPS.map((step, index) => {
              const isCompleted = index < currentStepIndex;
              const isCurrent = index === currentStepIndex;

              return (
                <div key={step.key} className="flex gap-4">
           
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-3.5 h-3.5 rounded-full ${
                        isCompleted
                          ? "bg-green-500"
                          : isCurrent
                            ? "bg-blue-500 ring-4 ring-blue-100"
                            : "bg-gray-300"
                      }`}
                    />
                    {index !== TRACK_STEPS.length - 1 && (
                      <div className="w-0.5 h-10 bg-gray-200" />
                    )}
                  </div>

                  <div className="flex-1">
                    <p
                      className={`text-sm font-medium ${
                        isCurrent ? "text-blue-600" : "text-gray-900"
                      }`}
                    >
                      {step.label}
                    </p>

                
                    {isCurrent && step.desc && (
                      <p className="mt-2 text-sm text-gray-600">{step.desc}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };


  const RoutePoint = ({ label, value }) => (
    <div className="text-center">
      <p className="text-xs text-gray-500 text-start">{label}</p>
      <p className="text-sm font-semibold text-gray-900 mt-1">{value}</p>
    </div>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Spinner className="w-10 h-10 text-orange-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-md">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
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
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-sm font-medium text-red-900 mb-1">
            Error loading orders
          </p>
          <p className="text-xs text-red-700">{error}</p>
        </div>
      </div>
    );
  }

  if (OrderList.length === 0) {
    return (
      <div className="mx-auto max-w-md">
        <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-base font-semibold text-gray-900 mb-2">
            No orders yet
          </h3>
          <p className="text-sm text-gray-500">
            Your orders will appear here once you make a purchase
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {OrderList.map((order) => (
        <div
          key={order.id}
          className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <div className="p-5 border-b border-gray-100">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-20 h-20 shrink-0 border-2 border-dashed border-gray-200 bg-gray-50 rounded-lg flex flex-col justify-center items-center">
                  <FileImage className="w-5 h-5 text-gray-400" />
                  <p className="text-[10px] text-gray-400 mt-1">No Image</p>
                </div>

                <div className="grid grid-cols-3 gap-6 flex-1">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Order Number</p>
                    <p className="text-sm font-semibold text-gray-900">
                      #SHP{order.id}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Order Date</p>
                    <p className="text-sm font-medium text-gray-900">
                      <Date datestring={order.created_at} />
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Status</p>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border capitalize ${getStatusColor(order.status)}`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-xs text-gray-500 mb-0.5">Market</p>
                  <p className="text-sm font-medium text-gray-900">
                    {order.request.market_name}
                  </p>
                </div>
                <button
                  onClick={() => toggleExpand(order.id)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label={expandedOrders[order.id] ? "Collapse" : "Expand"}
                >
                  {expandedOrders[order.id] ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {expandedOrders[order.id] && (
            <div className="p-5">
              <div className="flex gap-1 bg-gray-100 p-1 rounded-lg mb-6">
                {tabOptions.map((tab) => (
                  <button
                    key={tab}
                    onClick={() =>
                      setActiveTab((prev) => ({ ...prev, [order.id]: tab }))
                    }
                    className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      (activeTab[order.id] || "Overview") === tab
                        ? "bg-gray-800 text-white shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="mt-4">
                {(activeTab[order.id] || "Overview") === "Overview" &&
                  renderOverview(order)}
                {(activeTab[order.id] || "Overview") === "Order Details" &&
                  renderOrderDetails(order)}
                {(activeTab[order.id] || "Overview") === "Track" &&
                  renderTracking(order)}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default OrderTable;

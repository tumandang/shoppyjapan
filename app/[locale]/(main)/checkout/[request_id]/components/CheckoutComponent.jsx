"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MapPin, Plus, Package } from "lucide-react";

function CheckoutComponent() {
  const { request_id } = useParams();
  const { getRequestById, user } = useAuth();
  const [request, setRequest] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState('existing-1');
  const [newAddress, setNewAddress] = useState({
    address1: '',
    address2: '',
    address3: '',
    postcode: '',
    city: '',
    state: '',
    country: 'Malaysia'
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        setLoading(true);
        console.log("Fetching request ID:", request_id);
        const req = await getRequestById(request_id);
        setRequest(req);
      } catch (err) {
        console.error("Error fetching request:", err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    if (request_id) fetchRequest();
  }, [request_id, getRequestById]);

  const handleNewAddressChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitNewAddress = (e) => {
    e.preventDefault();
    console.log('New Address:', newAddress);
    alert('New address added successfully!');
    setSelectedAddress('new-saved');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading request details...</p>
        </div>
      </div>
    );
  }

  if (!request) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600 mb-4">Request not found.</p>
          <button 
            onClick={() => window.history.back()}
            className="text-blue-600 hover:underline"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="padd-cont w-full py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Checkout</h2>
          <p className="text-gray-600 mt-1">Request ID: #RQ{request_id}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Address Section */}
          <div className="w-full lg:w-3/5 space-y-6 border border-gray-200 rounded-xl p-6">
            
            {/* Current Address */}
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h5 className="text-xl font-semibold text-gray-900">Delivery Address</h5>
              </div>
              
              {user?.customer?.address ? (
                <div 
                  className={`border-2 p-4 rounded-lg transition-all cursor-pointer ${
                    selectedAddress === 'existing-1'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedAddress('existing-1')}
                >
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="address"
                      value="existing-1"
                      checked={selectedAddress === 'existing-1'}
                      onChange={(e) => setSelectedAddress(e.target.value)}
                      className="mt-1 w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-gray-700">Ship To:</span>
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          Default
                        </span>
                      </div>
                      <p className="text-sm text-gray-900">
                        {[
                          user.customer.address.address1,
                          user.customer.address.address2,
                          user.customer.address.address3,
                          `${user.customer.address.postcode} ${user.customer.address.city}`,
                          user.customer.address.state,
                          user.customer.address.country
                        ].filter(Boolean).join(', ')}
                      </p>
                    </div>
                  </label>
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No saved addresses. Please add a new address below.</p>
              )}
            </div>

            {/* Add New Address Form */}
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <Plus className="w-5 h-5 text-green-600" />
                <h5 className="text-xl font-semibold text-gray-900">Add New Delivery Address</h5>
              </div>
              
              <div className={`border-2 p-6 rounded-lg transition-all ${
                  selectedAddress === 'new'
                    ? 'border-blue-500 bg-white'
                    : 'border-gray-200'
                }`}
              >
                <label className="flex items-center gap-3 mb-4 cursor-pointer">
                  <input
                    type="radio"
                    name="address"
                    value="new"
                    checked={selectedAddress === 'new'}
                    onChange={(e) => setSelectedAddress(e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Use new address</span>
                </label>

                {selectedAddress === 'new' && (
                  <form onSubmit={handleSubmitNewAddress} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address Line 1 *
                      </label>
                      <input
                        type="text"
                        name="address1"
                        required
                        value={newAddress.address1}
                        onChange={handleNewAddressChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Street address, P.O. box"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address Line 2
                      </label>
                      <input
                        type="text"
                        name="address2"
                        value={newAddress.address2}
                        onChange={handleNewAddressChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Apartment, suite, unit, building, floor"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address Line 3
                      </label>
                      <input
                        type="text"
                        name="address3"
                        value={newAddress.address3}
                        onChange={handleNewAddressChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Additional information (optional)"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Postcode *
                        </label>
                        <input
                          type="text"
                          name="postcode"
                          required
                          value={newAddress.postcode}
                          onChange={handleNewAddressChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="81000"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={newAddress.city}
                          onChange={handleNewAddressChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Johor Bahru"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          State *
                        </label>
                        <select
                          name="state"
                          required
                          value={newAddress.state}
                          onChange={handleNewAddressChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select State</option>
                          <option value="Johor">Johor</option>
                          <option value="Kedah">Kedah</option>
                          <option value="Kelantan">Kelantan</option>
                          <option value="Kuala Lumpur">Kuala Lumpur</option>
                          <option value="Labuan">Labuan</option>
                          <option value="Melaka">Melaka</option>
                          <option value="Negeri Sembilan">Negeri Sembilan</option>
                          <option value="Pahang">Pahang</option>
                          <option value="Penang">Penang</option>
                          <option value="Perak">Perak</option>
                          <option value="Perlis">Perlis</option>
                          <option value="Putrajaya">Putrajaya</option>
                          <option value="Sabah">Sabah</option>
                          <option value="Sarawak">Sarawak</option>
                          <option value="Selangor">Selangor</option>
                          <option value="Terengganu">Terengganu</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Country *
                        </label>
                        <select
                          name="country"
                          required
                          value={newAddress.country}
                          onChange={handleNewAddressChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="Malaysia">Malaysia</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Thailand">Thailand</option>
                          <option value="Indonesia">Indonesia</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors"
                    >
                      Save Address
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="w-full lg:w-2/5">
            <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-4">
              <div className="flex items-center gap-2 mb-6">
                <Package className="w-6 h-6 text-orange-600" />
                <h5 className="text-xl font-semibold text-gray-900">Order Summary</h5>
              </div>

              {/* Cart Item */}
              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex gap-4">
                  {request.product_image ? (
                    <img
                      src={`/storage/${request.product_image}`}
                      alt={request.product_name}
                      className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Package className="w-8 h-8 text-gray-400" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h6 className="font-medium text-gray-900 mb-1">{request.product_name}</h6>
                    <p className="text-sm text-gray-500">{request.market_name}</p>
                    <p className="text-sm text-gray-500">Qty: {request.quantity}</p>
                    <p className="text-sm font-semibold text-gray-900 mt-1">
                      ¥{parseFloat(request.product_price).toLocaleString()} × {request.quantity}
                    </p>
                  </div>
                </div>
              </div>

              {/* Japan Costs */}
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal (JPY)</span>
                  <span className="font-medium text-gray-900">
                    ¥{(parseFloat(request.product_price) * request.quantity).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Service Fee</span>
                  <span className="font-medium text-gray-900">
                    ¥{parseFloat(request.service_fee || 0).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Domestic Shipping (Japan)</span>
                  <span className="font-medium text-gray-900">
                    ¥{parseFloat(request.domestic_shipping || 0).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t border-gray-200">
                  <span className="font-semibold text-gray-900">Total (JPY)</span>
                  <span className="font-semibold text-gray-900">
                    ¥{parseFloat(request.quoted_total || 0).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Malaysia Total */}
              <div className="bg-blue-50 rounded-lg p-4 space-y-3 mb-6">
                <div className="flex justify-between pt-3 border-t border-blue-200">
                  <span className="text-lg font-bold text-gray-900">Total (MYR)</span>
                  <span className="text-2xl font-bold text-blue-600">
                    RM {parseFloat(request.total_myr || 0).toFixed(2)}
                  </span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Continue to Payment
              </button>

              <p className="text-xs text-center text-gray-500 mt-4">
                By continuing, you agree to our Terms & Conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutComponent;
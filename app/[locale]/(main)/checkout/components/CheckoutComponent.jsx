"use client";

import React, { useState } from 'react';
import { MapPin, Plus, Package } from 'lucide-react';

function CheckoutComponent() {
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


  const existingAddresses = [
    {
      id: 1,
      address: '9124 Jalan Enggang 13 Bandar Putra Kulai 81000 Johor',
      isDefault: true
    },
    {
      id: 2,
      address: '456 Jalan Tun Razak, Bukit Bintang, 50400 Kuala Lumpur',
      isDefault: false
    }
  ];

  // Sample cart items
  const cartItems = [
    {
      id: 1,
      name: 'Vintage Camera',
      image: '/api/placeholder/80/80',
      price: 15000, 
      quantity: 1
    },
    {
      id: 2,
      name: 'Japanese Kimono',
      image: '/api/placeholder/80/80',
      price: 8500, 
      quantity: 2
    }
  ];

  const handleNewAddressChange = (e) => {
    const { name, value } = e.target;
    setNewAddress(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitNewAddress = (e) => {
    e.preventDefault();
    console.log('New Address:', newAddress);
    alert('New address added successfully!');

    setSelectedAddress('new-saved');
  };

 
  const subtotalJPY = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const serviceFeeJPY = 500;
  const domesticShippingJPY = 800;
  const totalJPY = subtotalJPY + serviceFeeJPY + domesticShippingJPY;
  

  const exchangeRate = 0.03;
  const totalMYR = totalJPY * exchangeRate;
  const finalTotalMYR = totalMYR ;

  return (
    <div className='padd-cont w-full py-8'>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
        
          <div className="w-full lg:w-3/5 space-y-6 border border-gray-200 rounded-xl p-6">
            
           
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h5 className="text-xl font-semibold text-gray-900">Delivery Address</h5>
              </div>
              
              <div className="space-y-3">
                {existingAddresses.map((addr) => (
                  <div 
                    key={addr.id}
                    className={`border-2 p-4 rounded-lg transition-all cursor-pointer ${
                      selectedAddress === `existing-${addr.id}`
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedAddress(`existing-${addr.id}`)}
                  >
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="address"
                        value={`existing-${addr.id}`}
                        checked={selectedAddress === `existing-${addr.id}`}
                        onChange={(e) => setSelectedAddress(e.target.value)}
                        className="mt-1 w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-gray-700">Ship To:</span>
                          {addr.isDefault && (
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-900">{addr.address}</p>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

  
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

          
          <div className="w-full lg:w-2/5">
            <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-4">
              <div className="flex items-center gap-2 mb-6">
                <Package className="w-6 h-6 text-orange-600" />
                <h5 className="text-xl font-semibold text-gray-900">Order Summary</h5>
              </div>

        
              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                    />
                    <div className="flex-1">
                      <h6 className="font-medium text-gray-900 mb-1">{item.name}</h6>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      <p className="text-sm font-semibold text-gray-900 mt-1">
                        ¥{item.price.toLocaleString()} × {item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal (JPY)</span>
                  <span className="font-medium text-gray-900">¥{subtotalJPY.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Service Fee</span>
                  <span className="font-medium text-gray-900">¥{serviceFeeJPY.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Domestic Shipping (Japan)</span>
                  <span className="font-medium text-gray-900">¥{domesticShippingJPY.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t border-gray-200">
                  <span className="font-semibold text-gray-900">Total (JPY)</span>
                  <span className="font-semibold text-gray-900">¥{totalJPY.toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Converted Amount</span>
                  <span className="font-medium text-gray-900">RM {totalMYR.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-blue-200">
                  <span className="text-lg font-bold text-gray-900">Total (MYR)</span>
                  <span className="text-2xl font-bold text-blue-600">RM {finalTotalMYR.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
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
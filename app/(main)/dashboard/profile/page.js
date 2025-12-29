"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Lexend, DM_Sans } from "next/font/google";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/context/AuthContext";
import { ArrowLeftToLine, ArrowRightToLine, Calculator, Heart, Link2, ShoppingBasketIcon, User } from "lucide-react";
import Link from "next/link";
import axiosInstance from "@/lib/axios";

const lexend = Lexend({
  variable: "--font-Lexend",
  subsets: ["latin"],
  weight: ["600"],
});

const dm_sans = DM_Sans({
  variable: "--font-DM_Sans",
  subsets: ["latin"],
  weight: ["400"],
});

const dm_sans_bold = DM_Sans({
  variable: "--font-DM_Sans",
  subsets: ["latin"],
  weight: ["800"],
});

export default function ProfilePage() {
  const { user, loading, logout,editprofile } = useAuth();
  const router = useRouter();
  const [expanded, setexpanded] = useState(true);
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

    const [form, setform] = useState({
    name: "",
    fullname: "",
    telephone: "",
    address1: "",
    address2: "",
    address3: "",
    postcode: "",
    city: "",
    state: "",
    country: "",
  });
  const handlesubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      fullname: formData.get('fullname'), 
      telephone: formData.get('notel'),
      address1: formData.get('address1'),
      address2: formData.get('address2') || '',
      address3: formData.get('address3') || '',
      postcode: formData.get('postcode'),
      city: formData.get('city'),
      state: formData.get('state'),
      country: formData.get('country'),
    };
    
    try {
      const response = await editprofile(data);
      if (response.data.status) {
        alert('Profile updated successfully');
      }
    } catch(error) {
      alert(error.response?.data?.message || 'Update failed');
      console.log(error.response?.data?.message);
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4"></div>
          <p className={`${dm_sans.className} text-gray-600`}>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background padd-cont">
      <main className="flex gap-6 mt-6">
        <aside className={`transition-all duration-300 border-r pr-4 ${expanded ? "w-64" : "w-14"}`}>
          <div className="flexBetween pb-3 border-b">
            <h4 className={`text-lg font-semibold transition-all ${dm_sans_bold.className} ${expanded ? "opacity-100" : "opacity-0 w-0"}`}>
              My Dashboard
            </h4>
            <button
              onClick={() => setexpanded((prev) => !prev)}
              className="p-1 hover:bg-gray-100 rounded-md ">
              {expanded ? <ArrowLeftToLine /> : <ArrowRightToLine  />}
            </button>
          </div>

          <div className="mt-5">
            <div className="space-y-2">
              <Link href="/dashboard/profile">
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer transition">
                      <span className="text-gray-600">
                        <User></User>
                      </span>
                      {expanded && (
                        <p className={`text-sm text-gray-700 font-medium ${lexend.className}`}>
                          My Profile
                        </p>
                      )}
                    </div>
              </Link>
              <Link href="/dashboard/insertlink">
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer transition">
                      <span className="text-gray-600">
                        <Link2></Link2>
                      </span>
                      {expanded && (
                        <p className={`text-sm text-gray-700 font-medium ${lexend.className}`}>
                          Insert URL
                        </p>
                      )}
                    </div>
              </Link>
              <Link href="/">
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer transition">
                      <span className="text-gray-600">
                        <ShoppingBasketIcon/>
                      </span>
                      {expanded && (
                        <p className={`text-sm text-gray-700 font-medium ${lexend.className}`}>
                          My Orders
                        </p>
                      )}
                    </div>
              </Link>
                 <Link href="/dashboard/wishlist">
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer transition">
                      <span className="text-gray-600">
                        <Heart/>
                      </span>
                      {expanded && (
                        <p className={`text-sm text-gray-700 font-medium ${lexend.className}`}>
                          Wishlist
                        </p>
                      )}
                    </div>
              </Link>
              <Link href="/shipping_calculator">
                    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer transition">
                      <span className="text-gray-600">
                        <Calculator/>
                      </span>
                      {expanded && (
                        <p className={`text-sm text-gray-700 font-medium ${lexend.className}`}>
                          Calculate Courier Fee
                        </p>
                      )}
                    </div>
              </Link>
           
            </div>
          </div>
        </aside>
        <div className="mx-auto max-w-4xl flex-1">
        
          <div className="mb-8">
            <h1 className={`${lexend.className} text-4xl mb-2`}>My Profile</h1>
            <p className={`${dm_sans.className} text-gray-600`}>
              Manage your account information and preferences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-7">
            <div className="bg-white rounded-lg border p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">0</div>
              <p className={`${dm_sans.className} text-gray-600`}>Total Orders</p>
            </div>
            <div className="bg-white rounded-lg border p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">0</div>
              <p className={`${dm_sans.className} text-gray-600`}>Wishlist Items</p>
            </div>
            <div className="bg-white rounded-lg border p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">RM 0.00</div>
              <p className={`${dm_sans.className} text-gray-600`}>Total Spent</p>
            </div>
          </div>            
                      
          <div className="bg-white rounded-lg border shadow-sm overflow-hidden mb-6">
       
            <div className="bg-linear-to-r from-orange-500 to-red-600 px-8 py-12 text-white">
              <div className="flex items-center gap-6">
                <div className="h-24 w-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-4xl font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h2 className={`${lexend.className} text-3xl mb-1`}>{user.customer?.Fullname || user.name}</h2>
                  <p className={`${dm_sans.className} text-blue-100`}>{user.email}</p>
                </div>
              </div>
            </div>

       
            <div className="p-8 space-y-6">
         
              <div>
                <h3 className={`${lexend.className} text-xl mb-4 pb-2 border-b`}>
                  Account Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`${dm_sans.className} text-sm text-gray-500 block mb-1`}>
                      Username
                    </label>
                    <p className={`${dm_sans.className} text-lg font-medium`}>{user.name}</p>
                  </div>
                  <div>
                    <label className={`${dm_sans.className} text-sm text-gray-500 block mb-1`}>
                      Email Address
                    </label>
                    <p className={`${dm_sans.className} text-lg font-medium`}>{user.email}</p>
                  </div>
                  {user.customer && (
                    <>
                      <div>
                        <label className={`${dm_sans.className} text-sm text-gray-500 block mb-1`}>
                          Full Name
                        </label>
                        <p className={`${dm_sans.className} text-lg font-medium`}>
                          {user.customer.Fullname}
                        </p>
                      </div>
                      <div>
                        <label className={`${dm_sans.className} text-sm text-gray-500 block mb-1`}>
                          Phone Number
                        </label>
                        <p className={`${dm_sans.className} text-lg font-medium`}>
                          {user.customer.Notel}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

    
              {user.customer?.address && (
                <div>
                  <h3 className={`${lexend.className} text-xl mb-4 pb-2 border-b`}>
                    Shipping Address
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className={`${dm_sans.className} text-lg leading-relaxed`}>
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
                    </p>
                  </div>
                </div>
              )}

      
              <div className="flex gap-4 pt-4">

                <Dialog>
                  
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex-1 cursor-pointer">
                        Edit Profile
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <form onSubmit={handlesubmit}>
                        <DialogHeader>
                          <DialogTitle>Edit profile</DialogTitle>
                          <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                          <div className="grid gap-3">
                            <Label htmlFor="name-1">Full Name</Label>
                            <Input id="name-1" name="fullname" defaultValue={user.customer.Fullname} />
                          </div>
                          <div className="grid grid-cols-2 gap-3 ">
                            <div className="grid gap-3 ">
                              <Label htmlFor="username-1">Username</Label>
                              <Input id="username-1" name="name" defaultValue={user.name}  />
                            </div>
                            <div className=" grid gap-3 ">
                              <Label htmlFor="telephone">Telephone Number</Label>
                              <Input id="notel" name="notel" defaultValue={user.customer.Notel}  />
                            </div>
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="address-1">Address 1</Label>
                            <Input id="address-1" name="address1" defaultValue={user.customer.address.address1}  />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="address-2">Address 2</Label>
                            <Input id="address-2" name="address2" defaultValue={user.customer.address.address2}/>
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="address-3">Address 3</Label>
                            <Input id="address-3" name="address3" defaultValue={user.customer.address.address3}/>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="grid gap-3">
                              <Label htmlFor="postcode">Postcode</Label>
                              <Input id="postcode" name="postcode" defaultValue={user.customer.address.postcode}/>
                            </div>
                            <div className="grid gap-3">
                              <Label htmlFor="city">City</Label>
                              <Input id="city" name="city" defaultValue={user.customer.address.city}  />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="grid gap-3">
                              <Label htmlFor="state">State</Label>
                              <Input id="state" name="state" defaultValue={user.customer.address.state} />
                            </div>
                            <div className="grid gap-3">
                              <Label htmlFor="country">Country</Label>
                              <Input id="country" name="country" defaultValue={user.customer.address.country}/>
                            </div>
                          </div>
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                          <Button type="submit" className="cursor-pointer">Save changes</Button>
                        </DialogFooter>
                        </form>
                    </DialogContent>
                  
                </Dialog>
                <Button variant="outline" className="flex-1 cursor-pointer">
                  Change Password
                </Button>
                <Button 
                  onClick={handleLogout} 
                  variant="destructive"
                  className="px-8 cursor-pointer">
                  Logout
                </Button>
              </div>
            </div>
          </div>



        </div>
      </main>
    </div>
  );
}
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import Image from "next/image";
import { Lexend, DM_Sans } from "next/font/google";
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
export default function ProductDetails() {
    const { productID } = useParams();
    const decodedID = decodeURIComponent(productID);
    const [product, setProduct] = useState(null);
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    if (!decodedID) return;

    fetch(
      `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?applicationId=1004153375637600271&itemCode=${decodedID}`
    )
      .then((res) => res.json())
    .then((data) => {
        if (data.Items?.length > 0) {
        const item = data.Items[0].Item;
        setProduct(item);

        const imgs = item.mediumImageUrls?.map((img) => img.imageUrl) || [];
        setImages(imgs);
        setSelectedImage(imgs[0]);
        } 
    });
  }, [decodedID]);

  if (!product) return (
    <div className="flexCenter min-h-screen flex-col">
        <Spinner/>
        <p>Loading product</p>
    </div>
  );

  return (
       <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 p-6 lg:p-12">

            
            <div className="space-y-4">
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={selectedImage}
                  alt="Product"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="grid grid-cols-4 gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={`relative aspect-square bg-gray-100 rounded-lg overflow-hidden transition-all
                      ${selectedImage === img ? "ring-2 ring-orange-500" : "hover:ring-2 hover:ring-gray-300"}
                    `}
                  >
                    <img
                      src={img}
                      alt={`View ${i + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

       
            <div className="flex flex-col gap-6">
              
              <div className="flex items-center justify-between">
                <div className="flex justify-center items-center gap-2 text-sm text-gray-600">
                  <Image src="/rakutenlogo.png" width={16} height={16} alt="Rakuten" />
                  <span className={`${lexend.className}`}>Rakuten Official</span>
                </div>

                <Toggle
                aria-label="Heart"
                size="sm"
                variant="outline"
                className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500"
              >
                <Heart />
                
              </Toggle>
              </div>

              <div>
                <h1 className={`text-3xl font-bold text-gray-900 mb-4 ${dm_sans_bold.className}`}>
                  {product.itemName}
                </h1>

                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-3 py-1.5 rounded-full text-sm font-medium">
                    <span>⭐</span>
                    <span >{product.reviewAverage}</span>
                  </div>
                  <span className={`text-gray-500 text-sm ${lexend.className}`}>
                    ({product.reviewCount} reviews)
                  </span>
                </div>

                <p className={`text-4xl font-bold text-orange-500 ${dm_sans_bold.className}`}>
                  ¥{product.itemPrice.toLocaleString()}
                </p>
              </div>
              
              <div className="flex gap-3">
                <Button className="flex-1 h-12 text-base">
                  Order Now
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <ShoppingBag className="w-5 h-5" />
                </Button>
              </div>

              <a
                href={product.itemUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-700 hover:underline inline-flex items-center gap-1"
              >
                View on Rakuten →
              </a>

              <Accordion type="single" collapsible className="border-t pt-6">
                <AccordionItem value="item-1" className="border-b">
                  <AccordionTrigger className={`text-base font-medium ${lexend.className}`}>
                    Product Information
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className={`text-gray-600 leading-relaxed ${dm_sans.className}`}>
                      {product.itemCaption}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b">
                  <AccordionTrigger className={`text-base font-medium ${lexend.className}`}>
                    Shipping Details
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p className={`text-gray-600 leading-relaxed ${dm_sans.className}`}>
                      Shopan provides worldwide shipping through trusted courier partners. 
                      Standard delivery typically takes 5–14 business days, while express shipping 
                      arrives within 2–5 business days, depending on your location.
                    </p>
                    <p className={`text-gray-600 leading-relaxed ${dm_sans.className}`}>
                      All items are carefully inspected, securely packaged, and handled with care to 
                      ensure safe delivery. Every shipment includes tracking, allowing you to monitor
                      your parcel in real-time from dispatch to arrival.
                    </p>
                    <p className={`text-gray-600 leading-relaxed ${dm_sans.className}`}>
                      Your Japanese purchases, delivered with reliability and peace of mind.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b">
                  <AccordionTrigger className={`text-base font-medium ${lexend.className}`}>
                    Return Policy
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p className={`text-gray-600 leading-relaxed ${dm_sans.className}`}>
                        Due to the nature of proxy shopping, all purchases made through Shopan are considered final once the order has been 
                        successfully placed with the seller in Japan.
                    </p>
                    <p className={`text-gray-600 leading-relaxed ${dm_sans.className}`}>
                        We thoroughly inspect items upon arrival at our warehouse to ensure they match the order and are free from visible defects before shipping. 
                        Returns or exchanges are only accepted in cases where the item received is incorrect or significantly damaged during transit.
                    </p>
                    <p className={`text-gray-600 leading-relaxed ${dm_sans.className}`}>
                      Any return requests must be submitted within 48 hours of receiving the item, along with clear photo or video evidence.
                    </p>
                    <p className={`text-gray-600 leading-relaxed ${dm_sans.className}`}>
                      Refunds, if approved, will be processed after the item has been returned and verified. Shipping and handling fees are non-refundable.
                    </p>
                    <p className={`text-gray-600 leading-relaxed ${dm_sans.className}`}>
                      For assistance, please contact our support team and we will be happy to help.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

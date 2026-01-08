import ListingProduct from "./components/ListingProduct";
import QuickGuide from "./components/QuickGuide";

export default function RakutenPage(){
    return (
        <main className="min-h-screen bg-gray-50 py-8 px-4 ">
            <ListingProduct></ListingProduct>
            <QuickGuide/>
        </main>
    )
}
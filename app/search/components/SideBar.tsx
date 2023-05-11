import {Cuisine, Location, PRICE} from "@prisma/client";
import Link from "next/link";


export default function SideBar({cities, cuisines, searchParams}: {cities: Location[], cuisines: Cuisine[], searchParams: { city?: string, cuisine?: string, price?: PRICE}}) {
    const prices = [
        {
            price: PRICE.CHEAP,
            label: "$",
            class: "rounded-l"
        },
        {
            price: PRICE.REGULAR,
            label: "$$",
            class: ""
        },
        {
            price: PRICE.EXPENSIVE,
            label: "$$$",
            class: "rounded-r"
        }]
    return (
        <div className="w-1/5">
            <div className="border-b pb-4 flex flex-col">
                <h1 className="mb-2">Region</h1>
                {cities.map((city => (
                    <Link href={{pathname:"/search", query: {...searchParams, city: city.name}}} className="font-light text-reg capitalize" key={city.id}>{city.name}</Link>
                )))}
            </div>
            <div className="border-b pb-4 mt-3 flex flex-col">
                <h1 className="mb-2">Cuisine</h1>
                {cuisines.map((cuisine => (
                    <Link href={{pathname:"/search", query: {...searchParams, cuisine: cuisine.name}}} className="font-light text-reg capitalize" key={cuisine.id}>{cuisine.name}</Link>
                )))}
            </div>
            <div className="mt-3 pb-4">
                <h1 className="mb-2">Price</h1>
                <div className="flex">
                    {prices.map((price =>(
                        <Link href={{pathname:"/search", query: {...searchParams, price: price.price}}} className={`border w-full text-center text-reg font-light ${price.class} p-2`}>
                            {price.label}
                        </Link>
                    )))}
                </div>
            </div>
        </div>
    )
}
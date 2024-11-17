import { ShoppingCart } from "lucide-react";
import React from "react";

export default function SmaillCard({ data }) {
  const { title, number, iconBg, icon: Icon } = data;
  return (
    <div className="rounded-lg shadow-lg bg-purple-300 p-4">
      <div className="flex space-x-4">
        <div
          className={`w-10 h-10 ${iconBg} bg-orange-600 rounded-full flex items-center justify-center`}
        >
          <Icon className="" />
        </div>
        <div className="">
          <p>{title}</p>
          <h3 className="text-xl font-bold">{number}</h3>
        </div>
      </div>
    </div>
  );
}

"use client";

import { ICustomerProps } from "@/utils/customer.type";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

export const CardCustomer = ({ customer }: { customer: ICustomerProps }) => {
  const router = useRouter();

  const handleDeleteCustomer = async () => {
    try {
      await api.delete("/api/customer", {
        params: {
          id: customer.id,
        },
      });

      router.refresh();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <article className="flex flex-col bg-gray-100 border-2 p-2 rounded-lg gap2 hover:scale-105 duration-300">
      <h2>
        <span className="font-bold">Nome:</span> {customer.name}
      </h2>
      <p>
        <span className="font-bold">Email:</span> {customer.email}
      </p>
      <p>
        <span className="font-bold">Telefone:</span> {customer.phone}
      </p>
      <button
        className="bg-red-500 px-4 rounded text-white mt-2 self-start"
        onClick={handleDeleteCustomer}
      >
        Deletar
      </button>
    </article>
  );
};

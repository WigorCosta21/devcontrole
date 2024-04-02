"use client";

import { useContext } from "react";
import { FiCheckSquare, FiFile } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { ModalContex } from "@/providers/moda";
import { ICustomerProps } from "@/utils/customer.type";
import { ITicketProps } from "@/utils/ticket.type";
import { api } from "@/lib/api";

interface ITicketItemProps {
  ticket: ITicketProps;
  customer: ICustomerProps | null;
}

export const TicketItem = ({ customer, ticket }: ITicketItemProps) => {
  const router = useRouter();
  const { handleModalVisible, setDetailTicket } = useContext(ModalContex);

  const handleChangeStatus = async () => {
    try {
      await api.patch("/api/ticket", {
        id: ticket.id,
      });

      router.refresh();
    } catch (err) {
      console.log(err);
    }
  };

  const handleOpenModal = () => {
    handleModalVisible();
    setDetailTicket({
      customer: customer,
      ticket: ticket,
    });
  };

  return (
    <>
      <tr className="border-b-2 border-b-slate-200 h-16 last:border-b-0 bg-slate-100 hover:bg-slate-200 duration-300">
        <td className="text-left pl-1">{customer?.name}</td>
        <td className="text-left hidden sm:table-cell">
          {ticket.created_at?.toLocaleDateString("pt-br")}
        </td>
        <td className="text-left">
          <span className="bg-green-500 px-2 py-1 rounded">
            {ticket.status}
          </span>
        </td>
        <td className="text-left">
          <button className="mr-3" onClick={handleChangeStatus}>
            <FiCheckSquare size={24} color="#131313" />
          </button>
          <button onClick={handleOpenModal}>
            <FiFile size={24} color="#3b82f6" />
          </button>
        </td>
      </tr>
    </>
  );
};

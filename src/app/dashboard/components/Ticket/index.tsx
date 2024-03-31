import { ICustomerProps } from "@/utils/customer.type";
import { ITicketProps } from "@/utils/ticket.type";
import { FiTrash2, FiFile } from "react-icons/fi";

interface ITicketItemProps {
  ticket: ITicketProps;
  customer: ICustomerProps | null;
}

export const TicketItem = ({ customer, ticket }: ITicketItemProps) => {
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
          <button className="mr-2">
            <FiTrash2 size={24} color="#ef4444" />
          </button>
          <button>
            <FiFile size={24} color="#3b82f6" />
          </button>
        </td>
      </tr>
    </>
  );
};

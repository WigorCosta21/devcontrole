"use client";

import { createContext, ReactNode, useState } from "react";
import { ITicketProps } from "@/utils/ticket.type";
import { ICustomerProps } from "@/utils/customer.type";
import { ModalTicket } from "@/components/Modal";

interface IModalContextData {
  visible: boolean;
  handleModalVisible: () => void;
  ticket: ITicketInfo | undefined;
  setDetailTicket: (datail: ITicketInfo) => void;
}

interface ITicketInfo {
  ticket: ITicketProps;
  customer: ICustomerProps | null;
}

export const ModalContex = createContext({} as IModalContextData);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const [ticket, setTicket] = useState<ITicketInfo>();

  const handleModalVisible = () => setVisible(!visible);

  const setDetailTicket = (detail: ITicketInfo) => {
    console.log(detail);
    setTicket(detail);
  };

  return (
    <ModalContex.Provider
      value={{ visible, handleModalVisible, ticket, setDetailTicket }}
    >
      {visible && <ModalTicket />}
      {children}
    </ModalContex.Provider>
  );
};

"use client";

import { createContext, ReactNode, useState } from "react";
import { ITicketProps } from "@/utils/ticket.type";
import { ICustomerProps } from "@/utils/customer.type";

interface IModalContextData {
  visible: boolean;
  handleModalVisible: () => void;
}

export const ModalContex = createContext({} as IModalContextData);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState(false);

  const handleModalVisible = () => setVisible(!visible);

  return (
    <ModalContex.Provider value={{ visible, handleModalVisible }}>
      {children}
    </ModalContex.Provider>
  );
};

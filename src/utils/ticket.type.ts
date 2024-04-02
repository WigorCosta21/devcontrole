export interface ITicketProps {
  id: string;
  name: string;
  status: string;
  description: string;
  created_at: Date | null;
  update_at: Date | null;
  customerId: string | null;
  userId: string | null;
}

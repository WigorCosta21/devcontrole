import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { Container } from "@/components/Container";
import Link from "next/link";
import { CardCustomer } from "./components/Card";

export const Customer = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }
  return (
    <Container>
      <main className="mt-9 mb-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Meus Clientes</h1>
          <Link
            href="/dashboard/customer/new"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Novo Cliente
          </Link>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
          <CardCustomer />
          <CardCustomer />
          <CardCustomer />
        </section>
      </main>
    </Container>
  );
};

export default Customer;

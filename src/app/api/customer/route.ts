import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma";

export const DELETE = async (request: Request) => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("id");

  if (!userId) {
    return NextResponse.json(
      { error: "Failed delete customer" },
      { status: 400 }
    );
  }

  const findTickts = await prismaClient.ticket.findFirst({
    where: {
      customerId: userId,
    },
  });

  if (findTickts) {
    return NextResponse.json(
      { error: "Failed delete customer" },
      { status: 400 }
    );
  }

  try {
    await prismaClient.customer.delete({
      where: {
        id: userId as string,
      },
    });

    return NextResponse.json({ messagem: "Customer deleted successfully" });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Failed delete customer" },
      { status: 400 }
    );
  }
};

export const POST = async (request: Request) => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  }

  const { name, email, phone, address, userId } = await request.json();

  try {
    await prismaClient.customer.create({
      data: {
        name,
        phone,
        email,
        address: address ? address : "",
        userId: userId,
      },
    });

    return NextResponse.json({ message: "Cliente cadastrado com sucesso!" });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed create new customer" },
      { status: 400 }
    );
  }
};

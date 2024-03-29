export const CardCustomer = () => {
  return (
    <article className="flex flex-col bg-gray-100 border-2 p-2 rounded-lg gap2 hover:scale-105 duration-300">
      <h2>
        <span className="font-bold">Nome:</span> Mercado Silva
      </h2>
      <p>
        <span className="font-bold">Email:</span> text@email.com
      </p>
      <p>
        <span className="font-bold">Telefone:</span> (xx) 99999-9999
      </p>
      <button className="bg-red-500 px-4 rounded text-white mt-2 self-start">
        Deletar
      </button>
    </article>
  );
};

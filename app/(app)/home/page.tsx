export default function HomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Home</h1>
        <p className="text-zinc-400">Bem-vindo à plataforma conexoes</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800">
          <h2 className="text-xl font-semibold mb-2">Cursos</h2>
          <p className="text-zinc-400 text-sm">Acesse seus cursos</p>
        </div>
        <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800">
          <h2 className="text-xl font-semibold mb-2">Comunidade</h2>
          <p className="text-zinc-400 text-sm">Conecte-se com outros membros</p>
        </div>
        <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800">
          <h2 className="text-xl font-semibold mb-2">Produtos</h2>
          <p className="text-zinc-400 text-sm">Explore produtos exclusivos</p>
        </div>
      </div>
    </div>
  )
}

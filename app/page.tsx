import { redirect } from 'next/navigation'

export default function RootPage() {
  // TODO: Verificar autenticação e redirecionar adequadamente
  redirect('/login')
}

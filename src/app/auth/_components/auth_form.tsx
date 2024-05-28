'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { toast } from '@/components/ui/use-toast'

export function AuthForm() {
  const form = useForm()

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn('email', { email: data.email, redirect: false })
      toast({
        title: 'Link de verificação enviado!',
        description: 'Verifique seu e-mail para obter o link para login',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Erro cometido, Tente novamente.',
      })
    }
  })

  return (
    <div className="mx-auto max-w-md space-y-8 py-12 px-6 bg-white shadow-lg rounded-lg dark:bg-gray-800">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Entrar
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Entre com seu email para começar.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email
          </Label>
          <Input
            id="email"
            placeholder="seuemail@exemplo.com"
            required
            type="email"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            {...form.register('email')}
          />
        </div>
        <Button className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Enviar Link de Verificação
        </Button>
      </form>
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        <Link
          className="underline hover:text-indigo-600 dark:hover:text-indigo-400"
          href="/"
        >
          Saiba mais sobre o sistema
        </Link>
      </div>
    </div>
  )
}

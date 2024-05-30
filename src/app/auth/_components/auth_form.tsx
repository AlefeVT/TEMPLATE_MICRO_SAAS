'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { toast } from '@/components/ui/use-toast'
import { Dialog, DialogContent } from '@/components/ui/dialog'

export function AuthForm() {
  const form = useForm()

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn('nodemailer', { email: data.email, redirect: false })
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
<div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100 dark:bg-gray-950">
  <div className="max-w-md w-full space-y-4 px-4">
    <div className="text-center space-y-2">
      <h2 className="text-3xl font-bold">Acesse sua conta</h2>
      <p className="text-gray-500 dark:text-gray-400">Digite seu email abaixo para receber um link de acesso.</p>
    </div>
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="exemplo@email.com" required {...form.register('email')}/>
      </div>
      <Button
                className="w-full"
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting
                  ? 'Enviando...'
                  : 'Enviar'}
              </Button>
    </form>
  </div>
  <Dialog>
    <DialogContent className="bg-white dark:bg-gray-950 shadow-2xl rounded-2xl p-8 max-w-2xl w-full">
      <div className="flex flex-col items-center space-y-4">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold">Email enviado!</h3>
          <p className="text-gray-500 dark:text-gray-400">Verifique sua caixa de entrada para acessar sua conta.</p>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</div>
  )

  
}

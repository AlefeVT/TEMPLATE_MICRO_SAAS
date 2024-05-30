import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Características
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Preços
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Sobre
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contato
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="mb-10">
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Simplifique seu fluxo de trabalho com nosso Micro SaaS
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Nosso produto micro SaaS foi projetado para simplificar suas tarefas diárias e aumentar sua produtividade.
                  Experimente o poder de uma solução personalizada que se adapta às suas necessidades.
                </p>
                <div className="space-x-4 mt-6">
                  <Link
                    href="/auth"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-8 py-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Tente agora
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border bg-white px-8 py-6 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Saber mais
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <img
                  src="/placeholder.svg"
                  width="1270"
                  height="300"
                  alt="Hero"
                  className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="features">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Características principais
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simplifique seu fluxo de trabalho</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Nosso produto micro SaaS foi projetado para simplificar suas tarefas diárias e aumentar sua produtividade.
                  Experimente o poder de uma solução personalizada que se adapta às suas necessidades.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Automação</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Simplifique seus fluxos de trabalho com nossos poderosos recursos de automação.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Costumização</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Adapte nosso micro SaaS às suas necessidades comerciais exclusivas.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Colaboração</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Capacite sua equipe para trabalhar em conjunto de maneira integrada.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Escalabilidade</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Expanda seus negócios com nossa solução escalável e flexível.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Analytics</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Obtenha insights valiosos para impulsionar a tomada de decisões informadas.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Segurança</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Proteja seus dados com nossas robustas medidas de segurança.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="testimonials">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">O que nossos clientes dizem</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Ouça empresas que simplificaram seus fluxos de trabalho com nosso micro SaaS.
              </p>
            </div>
            <div className="divide-y rounded-lg border">
              <div className="grid w-full grid-cols-1 items-stretch justify-center divide-x md:grid-cols-3">
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <div className="space-y-2 text-center">
                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                      "Nossa produtividade disparou!"
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      "Usar este micro SaaS transformou nosso fluxo de trabalho. Altamente recomendado!"
                    </p>
                    <div className="font-semibold">Jane Doe, Acme Inc</div>
                  </div>
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <div className="space-y-2 text-center">
                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                      "Simplificou nossas tarefas diárias"
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      "Este micro SaaS mudou o jogo para o nosso negócio. Altamente eficiente e fácil de usar."
                    </p>
                    <div className="font-semibold">John Smith, XYZ Corp</div>
                  </div>
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <div className="space-y-2 text-center">
                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                      "Superou as nossas expectativas"
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      "Estamos entusiasmados com os resultados que vimos desde a implementação deste micro SaaS. Altamente
                      recomendado!"
                    </p>
                    <div className="font-semibold">Sarah Lee, ABC Corp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="pricing">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Preços</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Preços acessíveis para todos os negócios
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Nosso micro SaaS oferece planos de preços flexíveis para atender às necessidades do seu negócio. Escolha o plano que funciona
                  melhor para você.
                </p>
              </div>
            </div>
            <div className="mx-auto justify-center grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-2">
              <Card className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <p className="text-gray-500 dark:text-gray-400">Perfeito para pequenas empresas e indivíduos.</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">R$0</span>
                    <span className="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400">/month</span>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    1 user
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    5 GB storage
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    Recursos básicos
                  </li>
                </ul>
                <Button className="w-full">
                  Iniciar
                </Button>
              </Card>
              <Card className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Ideal para empresas e equipes em crescimento.</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">R$129</span>
                    <span className="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400">/month</span>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    5 users
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    50 GB storage
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    Características avançadas
                  </li>
                </ul>
                <Button className="w-full">
                  Iniciar
                </Button>
              </Card>
              {/* <Card className="space-y-4 rounded-xl border border-gray-200 bg" /> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
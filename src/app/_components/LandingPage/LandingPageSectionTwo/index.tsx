"use  client"

import Link from "next/link"
import { Logo } from "@/components/logo/logo"

export function LandingPageSectionTwo() {

    return (
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
    )
}
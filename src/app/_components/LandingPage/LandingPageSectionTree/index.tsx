"use  client"

import Link from "next/link"
import { Logo } from "@/components/logo/logo"
import { Card } from "@/components/ui/card"
import { CheckIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

export function LandingPageSectionTree() {

    return (
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
    )
}
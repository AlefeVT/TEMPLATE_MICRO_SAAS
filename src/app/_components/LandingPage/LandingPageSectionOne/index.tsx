"use  client"

import Link from "next/link"
import { Logo } from "@/components/logo/logo"

export function LandingPageSectionOne() {

    return (
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

                        </div>
                    </div>
                    <div className="flex flex-col  items-start justify-center mx-auto space-y-4">
                        <Logo></Logo>
                    </div>
                </div>
            </div>
        </section>


    )
}
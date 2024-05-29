export const config = {
    stripe: {
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
        secretKey: process.env.STRIPE_SECRET_KEY,
        webhookSecret: '',
        plans: {
            free: {
                priceId: 'price_1PLpf0GB21J15YuCx3tT7zNK',
                quota: {
                    TASKS: 5
                }
            },
            pro: {
                priceId: 'price_1PLpfjGB21J15YuChyyy0PYh',
                quota: {
                    TASKS: 100
                }
            }
        }
    }
}
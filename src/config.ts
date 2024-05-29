export const config = {
    stripe: {
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
        secretKey: process.env.STRIPE_SECRET_KEY,
        proPriceId: '',
        webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    }
}
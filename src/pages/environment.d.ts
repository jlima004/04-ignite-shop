declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXT_URL: string
    readonly STRIPE_PUBLIC_KEY: string
    readonly STRIPE_SECRET_KEY: string
  }
}

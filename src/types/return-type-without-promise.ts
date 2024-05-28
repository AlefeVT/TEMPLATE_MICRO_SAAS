export type ReturntypeWithoutPromise<T extends (...args: any) => any> =
 T extends (...args: any) => Promise<infer U> ? U : never
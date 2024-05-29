import { ReturntypeWithoutPromise } from '@/types/return-type-without-promise'
import { getUserTodos } from './actions'

export type Todo = ReturntypeWithoutPromise<typeof getUserTodos>[0]

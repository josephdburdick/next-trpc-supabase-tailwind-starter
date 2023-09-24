"use client"

import { trpc } from "@/_trpc/client"

export default function TodoList() {
  const { data: todos } = trpc.getTodos.useQuery()

  return <pre>{JSON.stringify(todos, null, 2)}</pre>
}

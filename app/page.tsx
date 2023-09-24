import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Link from "next/link"
import TodoList from "./_components/TodoList"

export const dynamic = "force-dynamic"

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: places } = await supabase.from("places").select()

  return (
    <div className="w-full flex flex-col items-center text-foreground">
      <TodoList />
    </div>
  )
}

"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginSchema, type LoginValues } from "@/lib/schemas";
import { writeSession } from "@/lib/session";

export function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { role: "candidate" },
  });

  return (
    <form
      className="grid gap-4"
      onSubmit={handleSubmit((values) => {
        if (values.password !== "demo1234") {
          setError("password", { message: "Use the demo password demo1234" });
          return;
        }
        writeSession({
          email: values.email,
          name: values.email.split("@")[0] ?? "User",
          role: values.role,
        });
        router.push(values.role === "facility" ? "/portal/facility" : "/portal/candidate");
      })}
      noValidate
    >
      <div className="grid gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" className="h-11" type="email" autoComplete="email" {...register("email")} />
        {errors.email ? <p className="text-sm text-destructive">{errors.email.message}</p> : null}
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          className="h-11"
          type="password"
          autoComplete="current-password"
          {...register("password")}
        />
        {errors.password ? <p className="text-sm text-destructive">{errors.password.message}</p> : null}
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="role">Portal</Label>
        <select
          id="role"
          className="h-11 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm"
          {...register("role")}
        >
          <option value="candidate">Candidate</option>
          <option value="facility">Hospital / clinic</option>
        </select>
      </div>
      <Button type="submit" size="xl">
        Sign in
      </Button>
    </form>
  );
}

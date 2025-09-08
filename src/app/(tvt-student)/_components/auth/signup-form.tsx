"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/app/(tvt-student)/_components/ui/button";
import { Input } from "@/app/(tvt-student)/_components/ui/input";
import { Label } from "@/app/(tvt-student)/_components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/(tvt-student)/_components/ui/select";
import { Separator } from "@/app/(tvt-student)/_components/ui/separator";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    program: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate registration
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1000);
  };

  const handleGoogleSignup = () => {
    // Simulate Google OAuth
    router.push("/dashboard");
  };

  return (
    <div className="space-y-4">
      <Button
        onClick={handleGoogleSignup}
        variant="outline"
        className="w-full bg-transparent"
        type="button"
      >
        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="currentColor"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="currentColor"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="currentColor"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Continue with Google
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or create account
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="student@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="program">TVET Program</Label>
          <Select
            onValueChange={(value) =>
              setFormData({ ...formData, program: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your program" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="welding">Welding Technology</SelectItem>
              <SelectItem value="automotive">Automotive Technology</SelectItem>
              <SelectItem value="electrical">
                Electrical Installation
              </SelectItem>
              <SelectItem value="plumbing">Plumbing & Pipefitting</SelectItem>
              <SelectItem value="carpentry">Carpentry & Joinery</SelectItem>
              <SelectItem value="hospitality">
                Hospitality Management
              </SelectItem>
              <SelectItem value="culinary">Culinary Arts</SelectItem>
              <SelectItem value="it">Information Technology</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            required
          />
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Creating account..." : "Create Account"}
        </Button>
      </form>

      <div className="text-center text-sm">
        <span className="text-muted-foreground">Already have an account? </span>
        <Link href="/login" className="text-primary hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
}

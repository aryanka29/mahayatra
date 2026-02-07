"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.push("/auth/login");
      } else {
        setUser(data.user);
      }
    });
  }, []);

  if (!user) return null;

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-2xl font-bold mb-4">
        Welcome, {user.email}
      </h1>
      <button
        onClick={async () => {
          await supabase.auth.signOut();
          router.push("/auth/login");
        }}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

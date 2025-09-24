"use client";
import UserDetails from "@/components/organisms/dashboard/UserDetails";
import { useState } from "react";

export default function ProfilePage() {
  const [formStatus, setFormStatus] = useState({ userDataForm: false });

  return (
    <section className="col-span-12 md:col-span-9">
      <UserDetails setFormStatus={setFormStatus} formStatus={formStatus} />

      <div></div>
      <div></div>
    </section>
  );
}

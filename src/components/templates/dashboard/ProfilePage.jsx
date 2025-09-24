"use client";
import ProfileContainer from "@/components/organisms/container/ProfileContainer";
import UserDetails from "@/components/organisms/dashboard/UserDetails";
import UserPersonalDetails from "@/components/organisms/dashboard/UserPersonalDetails";
import { useState } from "react";

export default function ProfilePage() {
  const [formStatus, setFormStatus] = useState({ userDataForm: false });

  return (
    <section className="col-span-12 space-y-6 md:col-span-9">
      <ProfileContainer title={"اطلاعات حساب کاربری"}>
        <UserDetails setFormStatus={setFormStatus} formStatus={formStatus} />
      </ProfileContainer>
      <ProfileContainer title={"اطلاعات شخصی"}>
        <UserPersonalDetails />
      </ProfileContainer>
      <div></div>
    </section>
  );
}

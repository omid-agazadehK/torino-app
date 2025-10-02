"use client";

import ProfileContainer from "@/components/organisms/dashboard/profile/ProfileContainer";
import UserBankInfo from "@/components/organisms/dashboard/profile/UserBankInfo";
import UserBankInfoForm from "@/components/organisms/dashboard/profile/UserBankInfoForm";
import UserDetails from "@/components/organisms/dashboard/profile/UserDetails";
import UserPersonalDetails from "@/components/organisms/dashboard/profile/UserPersonalDetails";
import UserPersonalForm from "@/components/organisms/dashboard/profile/UserPersonalForm";
import { useState } from "react";

export default function ProfilePage() {
  const [formStatus, setFormStatus] = useState({
    accountForm: false,
    personalForm: false,
    bankForm: false,
  });

  return (
    <section className="col-span-12 space-y-4 md:col-span-9">
      {/* Account Info */}
      <ProfileContainer title={"اطلاعات حساب کاربری"}>
        <UserDetails setFormStatus={setFormStatus} formStatus={formStatus} />
      </ProfileContainer>
      {/* Personal Info */}
      <ProfileContainer title={"اطلاعات شخصی"}>
        {!formStatus.personalForm && (
          <UserPersonalDetails setFormStatus={setFormStatus} />
        )}
        {formStatus.personalForm && (
          <UserPersonalForm setFormStatus={setFormStatus} />
        )}
      </ProfileContainer>
      {/* Bank Info */}
      <ProfileContainer title={"اطلاعات حساب بانکی"}>
        {!formStatus.bankForm && (
          <UserBankInfo setFormStatus={setFormStatus} />
        )}
        {formStatus.bankForm && (
          <UserBankInfoForm setFormStatus={setFormStatus} />
        )}
      </ProfileContainer>
    </section>
  );
}

import UserToursPage from "@/components/templates/dashboard/UserToursPage";
export const metadata = {
  title: "پنل کاربری | تورهای من",
  robots: { index: false, follow: false },
};
export default function page() {
  return <UserToursPage />;
}

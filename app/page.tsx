import ChattingArea from "@/components/ChattingArea";
import ContactsArea from "@/components/ContactsArea";
import ProfileArea from "@/components/ProfileArea";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-between">
      <ContactsArea />
      <ChattingArea />
      <ProfileArea />
    </div>
  )
}

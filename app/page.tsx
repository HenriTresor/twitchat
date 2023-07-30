import ChattingArea from "@/components/ChattingArea";
import ContactsArea from "@/components/ContactsArea";
import ProfileArea from "@/components/ProfileArea";

export default function Home() {
  return (
    <div>
      <ContactsArea />
      <ChattingArea />
      <ProfileArea />
    </div>
  )
}

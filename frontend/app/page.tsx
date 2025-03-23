import { Avatar } from "primereact/avatar";
import { Skeleton } from "primereact/skeleton";
import SoUpload from "@/components/so-upload";
import PostList from "@/components/post-list";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen gap-y-4">
      <header className="h-16 w-full flex justify-center items-center border-b">
        <div className="w-[600px] flex justify-between items-center">
          <div className="flex gap-x-4">
            <Skeleton shape="circle" size="3rem"></Skeleton>
          </div>
          <Avatar
            label="U"
            size="large"
            shape="circle"
            className="bg-sky-700 text-white"
          />
        </div>
      </header>
      <main className="w-[600px] space-y-4">
        <SoUpload url="/api/upload" maxFileSize={10000000} />
        <PostList />
      </main>
    </div>
  );
}

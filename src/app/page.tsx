import MainContainder from "@/components/MainContainer";
import Rightbar from "@/components/Rightbar";
import Sidebar from "@/components/Sidebar";



export default function Home() {
  return (
    <main className='container'>
      <Sidebar/>
      <MainContainder/>
      <Rightbar/>
    </main>
  )
}

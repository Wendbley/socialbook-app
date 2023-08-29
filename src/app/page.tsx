import MainContainder from "@/components/home/MainContainer";
import Rightbar from "@/components/home/Rightbar";
import Sidebar from "@/components/home/Sidebar";


export default function Home() {
	return (
		<main className='container'>
			<Sidebar />
			<MainContainder />
			<Rightbar />
		</main>
	)
}

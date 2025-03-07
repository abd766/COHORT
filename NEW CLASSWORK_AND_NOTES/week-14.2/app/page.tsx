import axios from "axios";
import Image from "next/image";

async function getDetails(){
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
}

export default async function Home() {
  const userData = await getDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
    <div className="flex justify-center">
        <div className="border p-8 rounded">
            <div>
                Name: {userData?.name}
            </div>
            
            {userData?.email}
        </div>
    </div>
</div>
  );
}

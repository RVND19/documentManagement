import { useRouter } from "next/router";
import FormItem from "./FormItem"
function RegForm(){
    const router = useRouter()

    const responseParse=(response)=>{
        console.log(response);
        if(response!={}&&response['id']!=""){
            console.log("success");
            router.push('/');

        }else{
            console.log("failed");
        }
    }

    const submitForm= (event) =>{
        event.preventDefault();
        console.log("submit form")
        const data = new FormData(event.target);

        for (let [key, value] of data.entries()) {
            console.log(key, value);
        }

        let objJson={}
        data.forEach((value,key) => objJson[key]=value )

        console.log("data: "+JSON.stringify(objJson))
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(objJson)
        };
        fetch('http://localhost:8060/users/4', requestOptions)
            .then(response => response.json())
            .then(responseParse);
    }

    return <div className="w-11/12 max-w-[560px] p-6 bg-white rounded-lg">
        <form onSubmit={submitForm} className="flex flex-col"> 
        <FormItem frm_name="Name" 
        frm_type="text" 
        frm_value=""
        frm_req="true" />
        <FormItem frm_name="Email" 
        frm_type="email" 
        frm_value=""
        frm_req="" />
        <FormItem frm_name="Address" 
        frm_type="" 
        frm_value="Ini alamatnya"
         />
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form></div>
}
export default RegForm
import {useRouter} from 'next/router';

function DetailDocument(){
    const router = useRouter();
    console.log(router.query.docid);
    return <div></div>
}

export default DetailDocument;
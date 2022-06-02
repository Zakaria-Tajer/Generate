import { NextApiRequest,NextApiResponse } from "next";


export default async function handler (req: NextApiRequest,res: NextApiResponse){
    console.log('Revalidating');
    let revalidated = false
    try {
        await res.unstable_revalidate('/moderator');
        revalidated = true
    }catch (err) {
        console.log(err);
    }
    res.json({revalidated})
    
}
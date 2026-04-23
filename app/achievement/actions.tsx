import { createClient } from "@/supabase/server";

type Certificate = {
    id: number
    title: string
    issuer: string
    url: string
    icon: string
    image: string
    achieved_at: string
}

export async function fetchLimitCertificates():Promise<Certificate[]>{
    const supabase = await createClient();
    const { data } = await supabase
                            .from("certifications")
                            .select("*")
                            .limit(4);
    return data ?? [];
}

export async function fetchAllCertificates():Promise<Certificate[]>{
        const supabase = await createClient();
    const { data } = await supabase
                                .from("certifications")
                                .select("*");
    return data ?? [];
}
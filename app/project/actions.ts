import { createClient } from "@/supabase/server";

export type Project = {
    id: number
    slug: string
    name: string
    description: string
    tags: {
        tag: string
    }[]
    images: {
        url: string
    }[]
    developed_at: string
}

type State = {
    status: boolean
    project?: Project
}

export async function fetchAllProjects():Promise<Project[]>{
    const supabase = await createClient();
    const { data:projects } = await supabase.from("projects").select("*").order("created_at",{ascending:false});
    return projects ?? [];
}

export async function fetchSingleProject(slug:string):Promise<State>{
    const supabase = await createClient();
    const { data:project,error } = await supabase
                                        .from("projects")
                                        .select("*")
                                        .eq("slug",slug)
                                        .single();
    if (error) {
        return {
            status: false
        }
    }

    return {
        status: true,
        project
    }
}
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://ypzmmkeqnongjbcbglad.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlwem1ta2Vxbm9uZ2piY2JnbGFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1MTM4MzQsImV4cCI6MjAyNjA4OTgzNH0.DqGMKpBjVm-uCtOhGKIU9B45b27Mn-Xt0IVuoDpAA20");

class supabaseApiClient {

    async getChildren() {
        const response = await supabase
            .from("children")
            .select();

        return response.data
    }

    async addChild(newChild) {
        const { error } = await supabase
            .from('children')
            .insert(newChild)
    }

    async deleteChild(id) {
        const { error } = await supabase
            .from('children')
            .delete()
            .eq('id', id)
    }
}

export const supabaseApi = new supabaseApiClient();
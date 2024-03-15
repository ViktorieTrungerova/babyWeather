import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://vyttcsvuowjqhnpxolks.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5dHRjc3Z1b3dqcWhucHhvbGtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzMjkyNDAsImV4cCI6MjAyNTkwNTI0MH0.JKbgpvUXsbVSkrNDgSL0wY9B6QJJ7Q6tvAQKybH4XXU");

class supabaseApiClient {

    async getChildren() {
        const response = await supabase
            .from("children")
            .select();

        return response.data
    }

    async addChild(name, age, sex) {
        console.log("name, sex, age", name, age, sex)
        try {
            const { error } = await supabase
                .from('children')
                .insert({name, age, sex})
        } catch (err) {
            console.log(err)
        }


    }
}

export const supabaseApi = new supabaseApiClient();
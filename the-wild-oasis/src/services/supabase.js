import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhdnNwZW5xZ2VpY2N3c2ZucnRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxMzQ5MjgsImV4cCI6MjAzODcxMDkyOH0.mptyCk4CTkgr5MOswsBKAOrymGgglqXHiF5rawHGN0s";

export const supabaseUrl = "https://vavspenqgeiccwsfnrth.supabase.co";
const supabaseKey = SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

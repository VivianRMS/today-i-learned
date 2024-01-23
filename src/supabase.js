import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://reojffmboifijvrsdfpd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlb2pmZm1ib2lmaWp2cnNkZnBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk1NzYzNjYsImV4cCI6MjAwNTE1MjM2Nn0.GxdoTa9oosUkDJpPlh84P2cMQ34TyVI_CuH0k9BoEF8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

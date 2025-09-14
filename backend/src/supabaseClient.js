const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = "https://akzshidxjvxdxjukrdzs.supabase.co";
const SUPABASE_SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrenNoaWR4anZ4ZHhqdWtyZHpzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1Nzg4NjE4MywiZXhwIjoyMDczNDYyMTgzfQ.e6e04hMBMktMChfJloYPKP-8InCdTWwYnMZ4TTQ2uqE";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

module.exports = { supabase };
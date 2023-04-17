import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://kusmrgjslybxufeqpplz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1c21yZ2pzbHlieHVmZXFwcGx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAyNzk4OTgsImV4cCI6MTk5NTg1NTg5OH0.HjfaYWMNbDudwtrllhmuTj6q8zdm2bMKeR6hjkgk8Hc')

const { data } = await supabase.from('users').select('name').eq('id', 'dbe3864f-ca47-4593-9b71-cd2d1cf61825')

console.log(data)

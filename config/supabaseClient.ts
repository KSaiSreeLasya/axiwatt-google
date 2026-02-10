import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://njdxufiyzwwmkcekbqbm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qZHh1Zml5end3bWtjZWticWJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyNjI2ODYsImV4cCI6MjA4NTgzODY4Nn0.VJu_nzDs0KbeFSy7QNcsnLmrmM5-4_POESfcaXLVqWM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ConsultationRequest {
  id?: string;
  full_name: string;
  email: string;
  estate_location: string;
  objectives: string;
  phone?: string;
  created_at?: string;
}

// Function to save consultation request to Supabase
export const saveConsultationRequest = async (data: ConsultationRequest) => {
  try {
    const { data: result, error } = await supabase
      .from('consultation_requests')
      .insert([
        {
          full_name: data.full_name,
          email: data.email,
          estate_location: data.estate_location,
          objectives: data.objectives,
          phone: data.phone || null,
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(error.message);
    }

    return result;
  } catch (err) {
    console.error('Error saving consultation request:', err);
    throw err;
  }
};

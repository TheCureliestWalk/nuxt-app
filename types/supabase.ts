export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          body: string | null
          created_at: string | null
          id: number
          title: string | null
          username: string | null
        }
        Insert: {
          body?: string | null
          created_at?: string | null
          id?: number
          title?: string | null
          username?: string | null
        }
        Update: {
          body?: string | null
          created_at?: string | null
          id?: number
          title?: string | null
          username?: string | null
        }
      }
      users: {
        Row: {
          created_at: string | null
          id: string
          name: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          name?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

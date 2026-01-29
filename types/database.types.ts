export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          display_name: string | null
          is_admin: boolean
          created_at: string
        }
        Insert: {
          id: string
          email: string
          display_name?: string | null
          is_admin?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          display_name?: string | null
          is_admin?: boolean
          created_at?: string
        }
      }
      teams: {
        Row: {
          id: string
          name: string
          short_name: string
          display_order: number
        }
      }
      seasons: {
        Row: {
          id: string
          name: string
          buy_in_amount: number
          status: 'registration_open' | 'in_progress' | 'completed'
          pot_total: number
          rollover_from: string | null
          created_by: string
          created_at: string
          registration_deadline: string | null
        }
        Insert: {
          id?: string
          name: string
          buy_in_amount?: number
          status: 'registration_open' | 'in_progress' | 'completed'
          pot_total?: number
          rollover_from?: string | null
          created_by: string
          created_at?: string
          registration_deadline?: string | null
        }
        Update: {
          id?: string
          name?: string
          buy_in_amount?: number
          status?: 'registration_open' | 'in_progress' | 'completed'
          pot_total?: number
          rollover_from?: string | null
          created_by?: string
          created_at?: string
          registration_deadline?: string | null
        }
      }
      entries: {
        Row: {
          id: string
          season_id: string
          user_id: string
          payment_confirmed: boolean
          status: 'pending_payment' | 'active' | 'eliminated' | 'winner'
          eliminated_in_week: number | null
          joined_at: string
        }
        Insert: {
          id?: string
          season_id: string
          user_id: string
          payment_confirmed?: boolean
          status?: 'pending_payment' | 'active' | 'eliminated' | 'winner'
          eliminated_in_week?: number | null
          joined_at?: string
        }
        Update: {
          id?: string
          season_id?: string
          user_id?: string
          payment_confirmed?: boolean
          status?: 'pending_payment' | 'active' | 'eliminated' | 'winner'
          eliminated_in_week?: number | null
          joined_at?: string
        }
      }
      gameweeks: {
        Row: {
          id: string
          season_id: string
          week_number: number
          deadline: string
          fixtures_posted: boolean
          results_finalized: boolean
          created_at: string
        }
        Insert: {
          id?: string
          season_id: string
          week_number: number
          deadline: string
          fixtures_posted?: boolean
          results_finalized?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          season_id?: string
          week_number?: number
          deadline?: string
          fixtures_posted?: boolean
          results_finalized?: boolean
          created_at?: string
        }
      }
      fixtures: {
        Row: {
          id: string
          gameweek_id: string
          home_team_id: string
          away_team_id: string
          kickoff_time: string
          result: 'home_win' | 'away_win' | 'draw' | 'pending'
          created_at: string
        }
        Insert: {
          id?: string
          gameweek_id: string
          home_team_id: string
          away_team_id: string
          kickoff_time: string
          result?: 'home_win' | 'away_win' | 'draw' | 'pending'
          created_at?: string
        }
        Update: {
          id?: string
          gameweek_id?: string
          home_team_id?: string
          away_team_id?: string
          kickoff_time?: string
          result?: 'home_win' | 'away_win' | 'draw' | 'pending'
          created_at?: string
        }
      }
      picks: {
        Row: {
          id: string
          entry_id: string
          gameweek_id: string
          team_id: string
          result: 'win' | 'draw' | 'loss' | 'pending'
          auto_assigned: boolean
          submitted_at: string
        }
        Insert: {
          id?: string
          entry_id: string
          gameweek_id: string
          team_id: string
          result?: 'win' | 'draw' | 'loss' | 'pending'
          auto_assigned?: boolean
          submitted_at?: string
        }
        Update: {
          id?: string
          entry_id?: string
          gameweek_id?: string
          team_id?: string
          result?: 'win' | 'draw' | 'loss' | 'pending'
          auto_assigned?: boolean
          submitted_at?: string
        }
      }
      teams_used: {
        Row: {
          id: string
          entry_id: string
          team_id: string
          gameweek_id: string
        }
        Insert: {
          id?: string
          entry_id: string
          team_id: string
          gameweek_id: string
        }
        Update: {
          id?: string
          entry_id?: string
          team_id?: string
          gameweek_id?: string
        }
      }
    }
  }
}

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      ADK: {
        Row: {
          department: string | null;
          designation: string | null;
          duty: string | null;
          id: number;
          img: string | null;
          joined: string | null;
          license: string | null;
          name: string | null;
          url: string | null;
        };
        Insert: {
          department?: string | null;
          designation?: string | null;
          duty?: string | null;
          id?: never;
          img?: string | null;
          joined?: string | null;
          license?: string | null;
          name?: string | null;
          url?: string | null;
        };
        Update: {
          department?: string | null;
          designation?: string | null;
          duty?: string | null;
          id?: never;
          img?: string | null;
          joined?: string | null;
          license?: string | null;
          name?: string | null;
          url?: string | null;
        };
        Relationships: [];
      };
      doctors: {
        Row: {
          address: string | null;
          clinic: string;
          doctor_name: string;
          field: string;
          id: number;
          room: string;
          shift: string;
        };
        Insert: {
          address?: string | null;
          clinic: string;
          doctor_name: string;
          field: string;
          id?: number;
          room: string;
          shift: string;
        };
        Update: {
          address?: string | null;
          clinic?: string;
          doctor_name?: string;
          field?: string;
          id?: number;
          room?: string;
          shift?: string;
        };
        Relationships: [];
      };
      doctors_schedule: {
        Row: {
          doctor_name: string | null;
          duty_end_time: string | null;
          duty_start_time: string | null;
          id: number;
        };
        Insert: {
          doctor_name?: string | null;
          duty_end_time?: string | null;
          duty_start_time?: string | null;
          id?: never;
        };
        Update: {
          doctor_name?: string | null;
          duty_end_time?: string | null;
          duty_start_time?: string | null;
          id?: never;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      metadata_url: {
        url: string;
        alt: string;
      };
    };
  };
};

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
        Database["public"]["Views"])
    ? (Database["public"]["Tables"] &
        Database["public"]["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][PublicEnumNameOrOptions]
    : never;
